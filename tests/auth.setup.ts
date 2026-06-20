import { test as setup, expect, type Page } from '@playwright/test';
import fs from 'node:fs';
import { authFiles, credentials } from '../src/config/auth';
import { WrongLocationModal } from '../src/page-objects/modal-windows/WrongLocationModal';
import { TIMEOUTS } from '../src/config/timeouts';

const selectors = {
    headerLogin: 'button[data-type="btn_header_login"]',
    email: '#email',
    password: '#password',
    submit: 'form button[type="submit"]',
    loggedIn: '[data-testid="logout-button"]',
} as const;

const LOGIN_PAGE = '/';
const MAX_AGE_MS = 6 * 60 * 60 * 1000;

const isFresh = (file: string): boolean => {
    try {
        return Date.now() - fs.statSync(file).mtimeMs < MAX_AGE_MS;
    } catch {
        return false;
    }
};

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
    await page.goto(LOGIN_PAGE);
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

setup('authenticate: authorized + unauthorized', async ({ page }) => {
    setup.skip(
        isFresh(authFiles.authorized) && isFresh(authFiles.unauthorized),
        'Cached sessions are still fresh',
    );

    const { email, password } = requireCredentials();

    await logIn(page, email, password);
    await page.context().storageState({ path: authFiles.authorized });

    await logOut(page);
    await page.context().storageState({ path: authFiles.unauthorized });
});
