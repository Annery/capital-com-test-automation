import { test, expect, describePerLocaleState } from '../../src/fixtures/test';
import { userStates } from '../../src/config/auth';

describePerLocaleState('Header auth entry', userStates, (locale, state) => {
    test.beforeEach(async ({ page, dismissInterstitials }) => {
        await page.goto(locale.home);
        await dismissInterstitials();
    });

    test('Login button opens the login form', async ({ header, loginModal }) => {
        test.skip(state === 'authorized', 'Log in is not available for authorized user');
        await header.openLogin();
        await expect(loginModal.root).toBeVisible();
    });

    test('Open account button opens the sign up form', async ({ header, signUpModal }) => {
        test.skip(state === 'authorized', 'Open account is not available for authorized user');
        await header.openOpenAccount();
        await expect(signUpModal.root).toBeVisible();
    });

    test('Open platform opens the trading platform', async ({ header, page }) => {
        test.skip(state !== 'authorized', 'Open platform is only available for authorized user');
        await header.openPlatform();
        await expect(page).toHaveURL(/\/trading\/platform\//);
    });
});
