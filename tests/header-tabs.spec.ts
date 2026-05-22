import { expect, test } from '@playwright/test';
import { site } from '../config/site';
import { Header } from '../components/Header';

const fcaEn = site.fca.en;
const localeName = `${fcaEn.license} ${fcaEn.language}`;

test.describe(`[${localeName}] Header tabs `, () => {
    test('Professional tab opens page', async ({ page }) => {
        const header = new Header(page, fcaEn);

        await page.goto(fcaEn.routes.home);

        await header.openProfessional();

        await expect(page).toHaveURL(fcaEn.routes.professional);
    });

    test('Support tab opens page', async ({ page }) => {
        const header = new Header(page, fcaEn);

        await page.goto(fcaEn.routes.home);

        await header.openSupport();

        await expect(page).toHaveURL(fcaEn.routes.support);
    });
});