import { test, expect, describePerLocale } from '../../src/fixtures/test';

describePerLocale('Header navigation', { feature: 'navigation' }, (locale) => {
    test('Logo opens main page', async ({ page, header, dismissInterstitials }) => {
        await page.goto(locale.nonHomePage);
        await dismissInterstitials();

        await header.clickLogo();

        await expect(page).toHaveURL(locale.home);
    });
});
