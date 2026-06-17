import { test as base, expect } from '@playwright/test';
import { locales, type Locale } from '../config/licenses';
import { selectLocales, type LocaleFilter } from '../config/locale-filter';
import { Header } from '../page-objects/components/Header';
import { ContentPage } from '../page-objects/pages/ContentPage';
import { WrongLocationModal } from '../page-objects/modal-windows/WrongLocationModal';
import { ImportantNoticeModal } from '../page-objects/modal-windows/ImportantNoticeModal';
import { RegionalSettingsModal } from '../page-objects/modal-windows/RegionalSettingsModal';
import { LoginModal } from '../page-objects/modal-windows/LoginModal';
import { SignUpModal } from '../page-objects/modal-windows/SignUpModal';

type Fixtures = {
    appLocale: Locale;
    header: Header;
    wrongLocationModal: WrongLocationModal;
    importantNoticeModal: ImportantNoticeModal;
    regionalSettingsModal: RegionalSettingsModal;
    loginModal: LoginModal;
    signUpModal: SignUpModal;
    contentPage: ContentPage;
    dismissInterstitials: () => Promise<void>;
};

export const test = base.extend<Fixtures>({
    appLocale: [locales[0], { option: true }],

    header: async ({ page, appLocale: locale }, use) => {
        await use(new Header(page, locale));
    },

    wrongLocationModal: async ({ page }, use) => {
        await use(new WrongLocationModal(page));
    },

    importantNoticeModal: async ({ page }, use) => {
        await use(new ImportantNoticeModal(page));
    },

    regionalSettingsModal: async ({ page }, use) => {
        await use(new RegionalSettingsModal(page));
    },

    loginModal: async ({ page }, use) => {
        await use(new LoginModal(page));
    },

    signUpModal: async ({ page }, use) => {
        await use(new SignUpModal(page));
    },

    contentPage: async ({ page, appLocale }, use) => {
        await use(new ContentPage(page, appLocale.home));
    },

    dismissInterstitials: async ({ appLocale, wrongLocationModal, importantNoticeModal }, use) => {
        await use(async () => {
            await wrongLocationModal.stayHereIfVisible();
            if (appLocale.license === 'SCB') {
                importantNoticeModal.confirmIfVisible();
            }
        });
    },
});

export { expect };

export function describePerLocale(
    title: string,
    filter: LocaleFilter,
    body: (locale: Locale) => void,
): void {
    for (const locale of selectLocales(filter)) {
        const label = `${locale.license} ${locale.language}`;
        test.describe(
            `[${label}] ${title}`,
            { tag: [`@${locale.license}`, `@${locale.language}`] },
            () => {
                test.use({ appLocale: locale });
                body(locale);
            },
        );
    }
}
