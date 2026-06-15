import { test, expect, describePerLocale } from '../../src/fixtures/test';

describePerLocale('Header auth entry', { feature: 'login' }, (locale) => {
    test.beforeEach(async ({ page, wrongLocationModal, importantNoticeModal }) => {
        await page.goto(locale.home);
        await wrongLocationModal.stayHereIfVisible();
        await importantNoticeModal.confirmIfVisible();
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