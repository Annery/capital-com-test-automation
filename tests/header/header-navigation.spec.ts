import { test, expect, describePerLocaleState } from '../../src/fixtures/test';
import { userStates } from '../../src/config/auth';

describePerLocaleState('Header navigation', userStates, (locale) => {
    test('Logo opens main page', async ({ page, header, dismissInterstitials }) => {
        await page.goto(locale.nonHomePage);
        await dismissInterstitials();

        await header.clickLogo();

        await expect(page).toHaveURL(locale.home);
    });
});
