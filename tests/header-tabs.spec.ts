import { expect, test } from '@playwright/test';
import { site } from '../config/site';
import { Header } from '../components/Header';

const fcaEn = site.fca.en;

test('Header: Professional tab opens Professional page', async ({ page }) => {
    const header = new Header(page, fcaEn);

    await page.goto(fcaEn.routes.home);

    await header.openProfessional();

    await expect(page).toHaveURL(fcaEn.routes.professional);
});
});