import { test as base, expect, type Page, type Locator } from '@playwright/test';
import { locales, type Locale } from '../config/licenses';
import { selectLocales, type LocaleFilter } from '../config/locale-filter';
import { Header } from '../page-objects/components/Header';
import { ContentPage } from '../page-objects/pages/ContentPage';
import { WrongLocationModal } from '../page-objects/modal-windows/WrongLocationModal';
import { ImportantNoticeModal } from '../page-objects/modal-windows/ImportantNoticeModal';
import { RegionalSettingsModal } from '../page-objects/modal-windows/RegionalSettingsModal';
import { LoginModal } from '../page-objects/modal-windows/LoginModal';
import { SignUpModal } from '../page-objects/modal-windows/SignUpModal';
import { storageStateFor, UserState } from '../config/auth';
import { TIMEOUTS } from '../config/timeouts';

type Fixtures = {
    appLocale: Locale;
    appUserState: UserState;
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
    appUserState: ['unregistered', { option: true }],

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
                await importantNoticeModal.confirmIfVisible();
            }
        });
    },
});

export { expect };

export function describePerLocaleState(
    title: string,
    states: UserState[],
    body: (locale: Locale, state: UserState) => void,
    filter: LocaleFilter = {},
): void {
    for (const state of states) {
        for (const locale of selectLocales(filter)) {
            const label = `${locale.license} ${locale.language} | ${state}`;
            test.describe(
                `[${label}] ${title}`,
                { tag: [`@${locale.license}`, `@${locale.language}`, `@${state}`] },
                () => {
                    test.use({
                        appLocale: locale,
                        appUserState: state,
                        storageState: storageStateFor(state),
                    });
                    body(locale, state);
                },
            );
        }
    }
}

export async function clickUntilUrl(
    page: Page,
    click: () => Promise<void>,
    url: RegExp,
): Promise<void> {
    await expect(async () => {
        if (!url.test(page.url())) {
            await click();
        }
        await expect(page).toHaveURL(url, { timeout: TIMEOUTS.ctaResponse });
    }).toPass({ timeout: TIMEOUTS.navigation });
}

export async function clickUntilVisible(
    click: () => Promise<void>,
    target: Locator,
): Promise<void> {
    await expect(async () => {
        if (!(await target.isVisible())) {
            await click();
        }
        await expect(target).toBeVisible({ timeout: TIMEOUTS.ctaResponse });
    }).toPass({ timeout: TIMEOUTS.navigation });
}
