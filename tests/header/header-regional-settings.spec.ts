import { test, expect, describePerLocale } from '../../src/fixtures/test';
import { licenseCountry } from '../../src/config/regional-settings.data';

describePerLocale('Header regional settings', { feature: 'regionalSettings' }, (locale) => {
    const country = licenseCountry[locale.license];

    test.beforeEach(async ({ page, wrongLocationModal, importantNoticeModal }) => {
        await page.goto(locale.home);
        await wrongLocationModal.stayHereIfVisible();
        await importantNoticeModal.confirmIfVisible();
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

    test(`${country.name} can be selected`, async ({ header, regionalSettingsModal }) => {
        await header.openRegionalSettings();
        await regionalSettingsModal.openCountryList();

        await regionalSettingsModal.selectCountry(country.slug);

        await expect(regionalSettingsModal.countrySelector).toContainText(country.name);
    });

    test('Entity matches the license', async ({ header, regionalSettingsModal }) => {
        await header.openRegionalSettings();
        await regionalSettingsModal.openCountryList();
        await regionalSettingsModal.selectCountry(country.slug);
        await regionalSettingsModal.apply();

        await header.openRegionalSettings();

        await expect(regionalSettingsModal.entity).toContainText(locale.entity);
    });
});