import { test, expect, describePerLocale } from '../../src/fixtures/test';

describePerLocale('Header auth entry', { feature: 'login' }, (locale) => {
    test.beforeEach(async ({ page, dismissInterstitials }) => {
        await page.goto(locale.home);
        await dismissInterstitials();
    });

    test('Login button opens the login form', async ({ header, loginModal }) => {
        await header.openLogin();

        await expect(loginModal.root).toBeVisible();
    });

    test('Open account button opens the sign up form', async ({ header, signUpModal }) => {
        await header.openOpenAccount();

        await expect(signUpModal.root).toBeVisible();
    });
});
