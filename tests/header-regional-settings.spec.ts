import { expect, test } from '@playwright/test';
import { licenses } from '../src/config/licenses';
import { Header } from '../src/page-objects/components/Header';
import { WrongLocationModal } from '../src/page-objects/modal-windows/WrongLocationModal';
import { RegionalSettingsModal } from '../src/page-objects/modal-windows/RegionalSettingsModal';

const fcaEn = licenses.fca.en;
const localeName = `${fcaEn.license} ${fcaEn.language}`;

test.describe(`[${localeName}] Header regional settings`, () => {
    let header: Header;
    let wrongLocationModal: WrongLocationModal;
    let regionalSettingsModal: RegionalSettingsModal;

    test.beforeEach(async ({ page }) => {
        header = new Header(page, fcaEn);
        wrongLocationModal = new WrongLocationModal(page);
        regionalSettingsModal = new RegionalSettingsModal(page);
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test('Regional settings opens', async ({ page }) => {
        await page.goto(fcaEn.home);
        await wrongLocationModal.stayHereIfVisible();

        await header.openRegionalSettings();

        await expect.poll(() => regionalSettingsModal.isOpen())
            .toBe(true);
    });
});
