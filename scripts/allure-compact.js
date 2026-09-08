#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const argv = process.argv.slice(2);
const opt = (n, d) => {
    const i = argv.indexOf('--' + n);
    return i === -1 ? d : argv[i + 1];
};
const flag = (n) => argv.includes('--' + n);

const STORE = opt('store', 'allure-results');
const INCOMING = opt('incoming', null);
const KNOWN = opt('known-tests', null);
const DROP_TRACES = flag('drop-traces');
const PURGE_SCOPE = flag('purge-scope');
const DEDUPE = flag('dedupe');
const DRY = flag('dry');

const isResult = (f) => f.endsWith('-result.json');
const isContainer = (f) => f.endsWith('-container.json');
const isAttachment = (f) => /-attachment\.[^.]+$/.test(f);
const readJson = (p) => {
    const buf = fs.readFileSync(p);
    const text =
        buf[0] === 0xff && buf[1] === 0xfe
            ? buf.toString('utf16le')
            : buf[0] === 0xfe && buf[1] === 0xff
              ? buf.swap16().toString('utf16le')
              : buf.toString('utf8');
    return JSON.parse(text.replace(/^\uFEFF/, ''));
};
const norm = (s) =>
    String(s ?? '')
        .replace(/\\/g, '/')
        .trim();
const rm = (p) => {
    if (!DRY) fs.rmSync(p, { force: true });
};

const stats = { superseded: 0, obsolete: 0, purged: 0, deduped: 0, orphans: 0 };

const labelOf = (d, n) => (d.labels || []).find((l) => l.name === n)?.value;

function identity(d) {
    const parts = String(labelOf(d, 'titlePath') ?? '')
        .split(' > ')
        .map(norm)
        .filter(Boolean);
    if (!parts.length) {
        parts.push(
            norm(labelOf(d, 'parentSuite')),
            norm(labelOf(d, 'suite')),
            norm(labelOf(d, 'subSuite')),
        );
    }
    return [...parts.filter(Boolean), norm(d.name)].join(' > ');
}

function scope(d) {
    const title = norm(labelOf(d, 'subSuite')).replace(/^\[[^\]]*\]\s*/, '');
    const block = title.split(' / ').slice(0, 2).join(' / ');
    const tags = (d.labels || [])
        .filter((l) => l.name === 'tag')
        .map((l) => l.value)
        .sort();
    return [norm(labelOf(d, 'parentSuite')), norm(labelOf(d, 'suite')), block, ...tags].join(' | ');
}

function attachmentsOf(node, acc = []) {
    if (!node || typeof node !== 'object') return acc;
    for (const a of node.attachments || []) if (a?.source) acc.push(a);
    for (const s of node.steps || []) attachmentsOf(s, acc);
    return acc;
}

function loadResults(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs
        .readdirSync(dir)
        .filter(isResult)
        .flatMap((file) => {
            try {
                return [{ file, dir, data: readJson(path.join(dir, file)) }];
            } catch {
                return [];
            }
        });
}

function stripTraces(entry) {
    let changed = false;
    const walk = (node) => {
        if (!node || typeof node !== 'object') return;
        if (Array.isArray(node.attachments)) {
            const before = node.attachments.length;
            node.attachments = node.attachments.filter((a) => !norm(a.source).endsWith('.zip'));
            changed ||= node.attachments.length !== before;
        }
        (node.steps || []).forEach(walk);
    };
    walk(entry.data);
    if (changed && !DRY)
        fs.writeFileSync(path.join(entry.dir, entry.file), JSON.stringify(entry.data));
}

function liveTests(report) {
    const out = new Set();
    const walk = (suite, trail) => {
        const t = [...trail, norm(suite.title)].filter(Boolean);
        for (const spec of suite.specs || [])
            for (const test of spec.tests || [])
                out.add([norm(test.projectName), ...t, norm(spec.title)].join(' > '));
        for (const s of suite.suites || []) walk(s, t);
    };
    for (const s of report.suites || []) walk(s, []);
    return out;
}

fs.mkdirSync(STORE, { recursive: true });
let store = loadResults(STORE);

if (INCOMING && fs.existsSync(INCOMING)) {
    const incoming = loadResults(INCOMING);
    if (DROP_TRACES) incoming.forEach(stripTraces);

    const ids = new Set(incoming.map((e) => e.data.historyId).filter(Boolean));
    const scopes = new Set(incoming.map((e) => scope(e.data)));

    for (const e of store) {
        if (ids.has(e.data.historyId)) {
            e.dead = 'superseded';
            stats.superseded++;
        } else if (PURGE_SCOPE && scopes.has(scope(e.data))) {
            e.dead = 'purged';
            stats.purged++;
        }
    }

    for (const f of fs.readdirSync(INCOMING)) {
        const src = path.join(INCOMING, f);
        if (fs.statSync(src).isDirectory()) continue;
        if (DROP_TRACES && f.endsWith('.zip')) continue;
        if (!DRY) fs.copyFileSync(src, path.join(STORE, f));
    }
    store = store.concat(incoming.map((e) => ({ ...e, dir: STORE })));
}

if (DROP_TRACES) store.filter((e) => !e.dead).forEach(stripTraces);

if (KNOWN && fs.existsSync(KNOWN)) {
    const live = liveTests(readJson(KNOWN));
    for (const e of store) {
        if (e.dead) continue;
        if (!live.has(identity(e.data))) {
            e.dead = 'obsolete';
            stats.obsolete++;
        }
    }
}

if (DEDUPE) {
    const byId = new Map();
    for (const e of store) {
        if (e.dead || !e.data.historyId) continue;
        (byId.get(e.data.historyId) ?? byId.set(e.data.historyId, []).get(e.data.historyId)).push(
            e,
        );
    }
    for (const group of byId.values()) {
        if (group.length < 2) continue;
        group.sort(
            (a, b) => (b.data.stop ?? b.data.start ?? 0) - (a.data.stop ?? a.data.start ?? 0),
        );
        for (const e of group.slice(1)) {
            e.dead = 'duplicate';
            stats.deduped++;
        }
    }
}

for (const e of store) if (e.dead) rm(path.join(STORE, e.file));
const alive = store.filter((e) => !e.dead);
const liveUuids = new Set(alive.map((e) => e.data.uuid));

const referenced = new Set();
for (const e of alive) for (const a of attachmentsOf(e.data)) referenced.add(a.source);

for (const f of fs.readdirSync(STORE)) {
    const p = path.join(STORE, f);
    if (!isContainer(f)) continue;
    try {
        const c = readJson(p);
        if (!(c.children || []).some((u) => liveUuids.has(u))) {
            rm(p);
            stats.orphans++;
        } else for (const a of attachmentsOf(c)) referenced.add(a.source);
    } catch {
        rm(p);
        stats.orphans++;
    }
}
for (const f of fs.readdirSync(STORE)) {
    if (isAttachment(f) && !referenced.has(f)) {
        rm(path.join(STORE, f), stats.orphans++);
    }
}

console.log(
    `${DRY ? '[dry-run] ' : ''}kept ${alive.length} results | ` +
        `superseded ${stats.superseded}, obsolete ${stats.obsolete}, purged ${stats.purged}, ` +
        `duplicates ${stats.deduped}, orphan files ${stats.orphans}`,
);
