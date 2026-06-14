import { expect, test } from '@playwright/test';
import { selectLocales } from '../../src/config/locale-filter';
import { Header } from '../../src/page-objects/components/Header';
import { WrongLocationModal } from '../../src/page-objects/modal-windows/WrongLocationModal';
import { ImportantNoticeModal } from '../../src/page-objects/modal-windows/ImportantNoticeModal';
import { LoginModal } from '../../src/page-objects/modal-windows/LoginModal';
import { SignUpModal } from '../../src/page-objects/modal-windows/SignUpModal';

for (const locale of selectLocales({ feature: 'login' })) {
    test.describe(`[${locale.license} ${locale.language}] Header auth entry`,
        { tag: [`@${locale.license}`, `@${locale.language}`] },
        () => {
            let header: Header;
            let wrongLocationModal: WrongLocationModal;
            let loginModal: LoginModal;
            let signUpModal: SignUpModal;
            let importantNoticeModal: ImportantNoticeModal;

            test.beforeEach(async ({ page }) => {
                header = new Header(page, locale);
                wrongLocationModal = new WrongLocationModal(page);
                loginModal = new LoginModal(page);
                signUpModal = new SignUpModal(page);
                importantNoticeModal = new ImportantNoticeModal(page);

                await page.goto(locale.home);
                await wrongLocationModal.stayHereIfVisible();
                await importantNoticeModal.confirmIfVisible();
            });

            test('Login button opens the login form', async () => {
                await header.openLogin();

                await expect(loginModal.root).toBeVisible();
            });

            test('Open account button opens the sign up form', async () => {
                await header.openOpenAccount();

                await expect(signUpModal.root).toBeVisible();
            });
        });
}