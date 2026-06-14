import { expect, test } from '@playwright/test';
import { selectLocales } from '../../src/config/locale-filter';
import { Header } from '../../src/page-objects/components/Header';
import { WrongLocationModal } from '../../src/page-objects/modal-windows/WrongLocationModal';
import { ImportantNoticeModal } from '../../src/page-objects/modal-windows/ImportantNoticeModal';

for (const locale of selectLocales({ feature: 'navigation' })) {
    test.describe(`[${locale.license} ${locale.language}] Header navigation`,
        { tag: [`@${locale.license}`, `@${locale.language}`] },
        () => {
            let header: Header;
            let wrongLocationModal: WrongLocationModal;
            let importantNoticeModal: ImportantNoticeModal;

            test.beforeEach(async ({ page }) => {
                header = new Header(page, locale);
                wrongLocationModal = new WrongLocationModal(page);
                importantNoticeModal = new ImportantNoticeModal(page);
            });

            test('Logo opens main page', async ({ page }) => {
                await page.goto(locale.nonHomePage);
                await wrongLocationModal.stayHereIfVisible();
                await importantNoticeModal.confirmIfVisible();

                await header.clickLogo();

                await expect(page).toHaveURL(locale.home);
            });
        });
}
