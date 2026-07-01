import { test, expect, describePerLocaleState } from '../../src/fixtures/test';
import { licenseSampleCountry, languageOptionName } from '../../src/config/regional-settings.data';
import { selectLocales } from '../../src/config/locale-filter';
import { userStates } from '../../src/config/auth';

describePerLocaleState('Header regional settings', userStates, (locale) => {
    const country = licenseSampleCountry[locale.license];

    test.beforeEach(async ({ page, dismissInterstitials }) => {
        await page.goto(locale.home);
        await dismissInterstitials();
    });

    test('Regional settings opens', async ({ header, regionalSettingsModal }) => {
        await header.openRegionalSettings();

        await expect(regionalSettingsModal.root).toBeVisible();
    });

    test('Country dropdown opens with a search box', async ({ header, regionalSettingsModal }) => {
        await header.openRegionalSettings();

        await regionalSettingsModal.openCountryList();

        await expect(regionalSettingsModal.searchBox).toBeVisible();
    });

    test(`${country.name} appears in the country search results`, async ({
        header,
        regionalSettingsModal,
    }) => {
        await header.openRegionalSettings();
        await regionalSettingsModal.openCountryList();
        await regionalSettingsModal.searchCountry(country.name);

        await expect(regionalSettingsModal.countryOption(country.slug)).toContainText(country.name);
    });

    test(`${country.name} can be selected`, async ({ header, regionalSettingsModal }) => {
        await header.openRegionalSettings();
        await regionalSettingsModal.openCountryList();

        await regionalSettingsModal.selectCountry(country.slug);

        await expect(regionalSettingsModal.countrySelector).toContainText(country.name);
    });

    test('Switching language keeps the license', async ({
        page,
        header,
        regionalSettingsModal,
    }) => {
        const candidates = selectLocales({
            license: locale.license,
        }).filter((l) => l.language !== locale.language);
        test.skip(candidates.length === 0, `${locale.license} has a single language`);

        await header.openRegionalSettings();
        await regionalSettingsModal.openLanguageList();

        const offered = await regionalSettingsModal.offeredLanguages();
        const target = candidates.find((l) => offered.includes(languageOptionName[l.language]));
        test.skip(!target, `Language is locked on ${locale.home}`);

        await regionalSettingsModal.selectLanguage(languageOptionName[target!.language]);
        await regionalSettingsModal.apply();

        await expect(page).toHaveURL(new RegExp(`${target!.home}(?:[/?#]|$)`));
    });

    test('Entity matches the license', async ({ header, regionalSettingsModal }) => {
        await header.openRegionalSettings();

        await expect(regionalSettingsModal.entity).toContainText(locale.entity);
    });
});
