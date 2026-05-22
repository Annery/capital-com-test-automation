import { expect, test } from '@playwright/test';
import { site } from '../config/site';
import { Header } from '../components/Header';
import { WrongLocationModal } from '../modal-windows/WrongLocationModal';

const fcaEn = site.fca.en;
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

    test('Professional tab opens page', async ({ page }) => {
        await page.goto(fcaEn.routes.home);
        await wrongLocationModal.stayHereIfVisible();

        await header.openProfessional();

        await expect(page).toHaveURL(fcaEn.routes.professional);
    });

    test('Support tab opens page', async ({ page }) => {
        await page.goto(fcaEn.routes.home);
        await wrongLocationModal.stayHereIfVisible();

        await header.openSupport();

        await expect(page).toHaveURL(fcaEn.routes.support);
    });

    test('Personal tab opens main page', async ({ page }) => {
        await page.goto(fcaEn.routes.professional);
        await wrongLocationModal.stayHereIfVisible();

        await header.openPersonal();

        await expect(page).toHaveURL(fcaEn.routes.home);
    });

    test('Logo opens main page', async ({ page }) => {
        await page.goto(fcaEn.routes.professional);
        await wrongLocationModal.stayHereIfVisible();

        await header.clickLogo();

        await expect(page).toHaveURL(fcaEn.routes.home);
    });
});
