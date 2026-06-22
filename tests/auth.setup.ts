import { test as setup, expect, type Page, Browser } from '@playwright/test';
import fs from 'node:fs';
import { authFiles, credentials } from '../src/config/auth';
import { WrongLocationModal } from '../src/page-objects/modal-windows/WrongLocationModal';
import { TIMEOUTS } from '../src/config/timeouts';
import { BASE_URL } from '../src/config/site';

const selectors = {
    headerLogin: 'button[data-type="btn_header_login"]',
    email: '#email',
    password: '#password',
    submit: 'form button[type="submit"]',
    loggedIn: '[data-testid="logout-button"]',
    logoutAlert: '.alert-popup',
    authorizedSignal: 'a[data-type="btn_header_my_account"]',
} as const;

const LOGIN_PAGE = '/';

async function authorizedSessionAlive(browser: Browser): Promise<boolean> {
    if (!fs.existsSync(authFiles.authorized)) {
        return false;
    }
    const context = await browser.newContext({
        storageState: authFiles.authorized,
        baseURL: BASE_URL,
    });
    try {
        const probe = await context.newPage();
        await probe.goto(LOGIN_PAGE);
        await new WrongLocationModal(probe).stayHereIfVisible();
        await expect(
            probe.locator(selectors.authorizedSignal).filter({ visible: true }).first(),
        ).toBeVisible({ timeout: TIMEOUTS.loginAttempt });
        return true;
    } catch {
        return false;
    } finally {
        await context.close();
    }
}

async function logIn(page: Page, email: string, password: string): Promise<void> {
    await page.goto(LOGIN_PAGE);
    await new WrongLocationModal(page).stayHereIfVisible();

    await page.locator(selectors.headerLogin).filter({ visible: true }).first().click();
    await page.locator(selectors.email).fill(email);
    await page.locator(selectors.password).fill(password);

    const submit = page.locator(selectors.submit);
    const loggedIn = page.locator(selectors.loggedIn);

    await expect(submit).toBeEnabled();

    await expect(async () => {
        if (await submit.isVisible()) {
            await submit.click();
        }
        await expect(loggedIn).toBeVisible({ timeout: TIMEOUTS.loginAttempt });
    }).toPass({ timeout: TIMEOUTS.auth });
}

async function logOut(page: Page): Promise<void> {
    await page.locator(selectors.loggedIn).click();

    const confirmLogout = page
        .locator(selectors.logoutAlert)
        .getByRole('button', { name: 'Log out' });
    await confirmLogout.click({ timeout: TIMEOUTS.alert }).catch(() => {});

    await expect(page.locator(selectors.headerLogin).filter({ visible: true }).first()).toBeVisible(
        { timeout: TIMEOUTS.auth },
    );
}

function requireCredentials(): { email: string; password: string } {
    const { email, password } = credentials;
    if (!email || !password) {
        throw new Error('CAPITAL_EMAIL / CAPITAL_PASSWORD are not set — see .env');
    }
    return { email, password };
}

setup('authenticate: authorized + unauthorized', async ({ page, browser }) => {
    setup.setTimeout(TIMEOUTS.authSetup);

    const cachedValid = await authorizedSessionAlive(browser);
    setup.skip(cachedValid, 'Cached authorized session is still valid');

    const { email, password } = requireCredentials();

    await logIn(page, email, password);
    await logOut(page);
    await page.context().storageState({ path: authFiles.unauthorized });

    await logIn(page, email, password);
    await page.context().storageState({ path: authFiles.authorized });
});
