import { expect, test } from '@playwright/test';
import { licenses } from '../src/config/licenses';
import { Header } from '../src/page-objects/components/Header';
import { WrongLocationModal } from '../src/page-objects/modal-windows/WrongLocationModal';

const fcaEn = licenses.fca.en;
const localeName = `${fcaEn.license} ${fcaEn.language}`;

test.describe(`[${localeName}] Header navigation`, () => {
    let header: Header;
    let wrongLocationModal: WrongLocationModal;

    test.beforeEach(async ({ page }) => {
        header = new Header(page, fcaEn);
        wrongLocationModal = new WrongLocationModal(page);
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test('Logo opens main page', async ({ page }) => {
        await page.goto(fcaEn.nonHomePage);
        await wrongLocationModal.stayHereIfVisible();

        await header.clickLogo();

        await expect(page).toHaveURL(fcaEn.home);
    });
});
