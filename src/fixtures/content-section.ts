import { test, expect, describePerLocaleState, clickUntilUrl, clickUntilVisible } from './test';
import { Cta, ExpectedResult, type MenuPage } from '../config/content/content-page';
import { userStates, UserState } from '../config/auth';
import { SignUpModal } from '../page-objects/modal-windows/SignUpModal';
import { Page } from '@playwright/test';
import { ContentPage } from '../page-objects/pages/ContentPage';
import { PLATFORM_URL } from '../config/site';

const expectedFor = (cta: Cta, state: UserState): ExpectedResult =>
    state === 'authorized' ? (cta.authorized ?? 'platformPage') : (cta.anonymous ?? 'signUpForm');

async function expectCtaOutcome(
    result: ExpectedResult,
    ctaType: string,
    {
        contentPage,
        signUpModal,
        page,
    }: { contentPage: ContentPage; signUpModal: SignUpModal; page: Page },
): Promise<void> {
    if (result === 'platformPage') {
        await clickUntilUrl(page, () => contentPage.clickCta(ctaType), PLATFORM_URL);
    } else {
        await clickUntilVisible(() => contentPage.clickCta(ctaType), signUpModal.root);
    }
}

export function describeContentSection(section: string, pages: MenuPage[]): void {
    for (const menuPage of pages) {
        describePerLocaleState(
            `${section} / ${menuPage.title}`,
            userStates,
            (locale, state) => {
                test.beforeEach(async ({ contentPage, dismissInterstitials }) => {
                    await contentPage.open(menuPage.path);
                    await dismissInterstitials();
                });

                for (const cta of menuPage.ctas) {
                    const result = expectedFor(cta, state);
                    test(`[${cta.type}] -> ${result}`, async ({
                        contentPage,
                        signUpModal,
                        page,
                    }) => {
                        test.skip(
                            cta.unavailable?.includes(locale.license) ?? false,
                            `${cta.type} is N/A for ${locale.license}`,
                        );

                        await expect(contentPage.cta(cta.type)).toBeVisible();

                        await expectCtaOutcome(result, cta.type, {
                            contentPage,
                            signUpModal,
                            page,
                        });
                    });
                }
            },
            menuPage.filter,
        );
    }
}
