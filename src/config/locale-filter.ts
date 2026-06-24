import { locales, type Language, type License, type Locale } from './licenses';

export interface LocaleFilter {
    license?: License | License[];
    language?: Language | Language[];
    exclude?: LocaleFilter | LocaleFilter[];
}

function toArray<T>(value?: T | T[]): T[] {
    if (value === undefined) {
        return [];
    }
    return Array.isArray(value) ? value : [value];
}

function matches(locale: Locale, filter: LocaleFilter): boolean {
    const licenses = toArray(filter.license);
    const languages = toArray(filter.language);
    if (licenses.length && !licenses.includes(locale.license)) return false;
    if (languages.length && !languages.includes(locale.language)) return false;
    return true;
}

export function selectLocales(filter: LocaleFilter = {}): Locale[] {
    const exclusions = toArray(filter.exclude);
    return locales.filter(
        (locale) => matches(locale, filter) && !exclusions.some((ex) => matches(locale, ex)),
    );
}
