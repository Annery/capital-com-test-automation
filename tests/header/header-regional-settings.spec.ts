import { expect, test } from '@playwright/test';
import { selectLocales } from '../../src/config/locale-filter';
import { licenseCountry } from '../../src/config/regional-settings.data';
import { Header } from '../../src/page-objects/components/Header';
import { WrongLocationModal } from '../../src/page-objects/modal-windows/WrongLocationModal';
import { ImportantNoticeModal } from '../../src/page-objects/modal-windows/ImportantNoticeModal';
import { RegionalSettingsModal } from '../../src/page-objects/modal-windows/RegionalSettingsModal';

for (const locale of selectLocales({ feature: 'regionalSettings' })) {
    const country = licenseCountry[locale.license];
    test.describe(`[${locale.license} ${locale.language}] Header regional settings`,
        { tag: [`@${locale.license}`, `@${locale.language}`] },
        () => {
            let header: Header;
            let wrongLocationModal: WrongLocationModal;
            let regionalSettingsModal: RegionalSettingsModal;
            let importantNoticeModal: ImportantNoticeModal;

            test.beforeEach(async ({ page }) => {
                header = new Header(page, locale);
                wrongLocationModal = new WrongLocationModal(page);
                regionalSettingsModal = new RegionalSettingsModal(page);
                importantNoticeModal = new ImportantNoticeModal(page);

                await page.goto(locale.home);
                await wrongLocationModal.stayHereIfVisible();
                await importantNoticeModal.confirmIfVisible();
            });

            test('Regional settings opens', async () => {
                await header.openRegionalSettings();

                await expect(regionalSettingsModal.root).toBeVisible();
            });

            test('Country dropdown opens with a search box', async () => {
                await header.openRegionalSettings();

                await regionalSettingsModal.openCountryList();

                await expect(regionalSettingsModal.searchBox).toBeVisible();
            });

            test(`${country.name} can be selected`, async () => {
                await header.openRegionalSettings();
                await regionalSettingsModal.openCountryList();

                await regionalSettingsModal.selectCountry(country.slug);

                await expect(regionalSettingsModal.countrySelector).toContainText(country.name);
            });

            test('Entity matches the license', async () => {
                await header.openRegionalSettings();

                await expect(regionalSettingsModal.entity).toContainText(locale.entity);
            });
        });
}