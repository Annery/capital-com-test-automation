import { expect, test } from '@playwright/test';
import { licenses } from '../src/config/licenses';
import { Header } from '../src/page-objects/components/Header';
import { WrongLocationModal } from '../src/page-objects/modal-windows/WrongLocationModal';
import { RegionalSettingsModal } from '../src/page-objects/modal-windows/RegionalSettingsModal';

const fcaEn = licenses.fca.en;
const localeName = `${fcaEn.license} ${fcaEn.language}`;

const ukRegion = {
    name: 'United Kingdom',
    slug: 'united_kingdom',
    entity: 'Capital Com UK Limited',
}

test.describe(`[${localeName}] Header regional settings`, () => {
    let header: Header;
    let wrongLocationModal: WrongLocationModal;
    let regionalSettingsModal: RegionalSettingsModal;

    test.beforeEach(async ({ page }) => {
        header = new Header(page, fcaEn);
        wrongLocationModal = new WrongLocationModal(page);
        regionalSettingsModal = new RegionalSettingsModal(page);

        await page.goto(fcaEn.home);
        await wrongLocationModal.stayHereIfVisible();
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test('Regional settings opens', async ({ page }) => {
        await header.openRegionalSettings();

        await expect.poll(() => regionalSettingsModal.isOpen())
            .toBe(true);
    });

    test('Country dropdown opens with a search box', async () => {
        await header.openRegionalSettings();

        await regionalSettingsModal.openCountryList();

        await expect(regionalSettingsModal.SearchBox).toBeVisible();
    });

    test(`${ukRegion.name} can be selected`, async () => {
        await header.openRegionalSettings();
        await regionalSettingsModal.openCountryList();

        await regionalSettingsModal.selectCountry(ukRegion.slug);

        await expect(regionalSettingsModal.CountrySelector).toContainText(ukRegion.name);
    });

    test('Applied entity matches the license', async () => {
        await header.openRegionalSettings();
        await regionalSettingsModal.openCountryList();
        await regionalSettingsModal.selectCountry(ukRegion.slug);
        await regionalSettingsModal.apply();

        await header.openRegionalSettings();

        await expect(regionalSettingsModal.Entity).toContainText(ukRegion.entity);
    });
});
