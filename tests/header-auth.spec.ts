import { expect, test } from '@playwright/test';
import { licenses } from '../src/config/licenses';
import { Header } from '../src/page-objects/components/Header';
import { WrongLocationModal } from '../src/page-objects/modal-windows/WrongLocationModal';
import { LoginModal } from '../src/page-objects/modal-windows/LoginModal';
import { SignUpModal } from '../src/page-objects/modal-windows/SignUpModal';

const fcaEn = licenses.fca.en;
const localeName = `${fcaEn.license} ${fcaEn.language}`;

test.describe(`[${localeName}] Header auth entry`, () => {
    let header: Header;
    let wrongLocationModal: WrongLocationModal;
    let loginModal: LoginModal;
    let signUpModal: SignUpModal;

    test.beforeEach(async ({ page }) => {
        header = new Header(page, fcaEn);
        wrongLocationModal = new WrongLocationModal(page);
        loginModal = new LoginModal(page);
        signUpModal = new SignUpModal(page);

        await page.goto(fcaEn.home);
        await wrongLocationModal.stayHereIfVisible();
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test('Login button opens the login form', async () => {
        await header.openLogin();

        await expect.poll(() => loginModal.isOpen()).toBe(true);
    });

    test('Open account button opens the sign up form', async () => {
        await header.openOpenAccount();

        await expect.poll(() => signUpModal.isOpen()).toBe(true);
    });
});