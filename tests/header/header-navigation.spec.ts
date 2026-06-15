import { test, expect, describePerLocale } from '../../src/fixtures/test';

describePerLocale('Header navigation', { feature: 'navigation' }, (locale) => {
    test('Logo opens main page', async ({ page, header, wrongLocationModal, importantNoticeModal }) => {
        await page.goto(locale.nonHomePage);
        await wrongLocationModal.stayHereIfVisible();
        await importantNoticeModal.confirmIfVisible();

        await header.clickLogo();

        await expect(page).toHaveURL(locale.home);
    });
});