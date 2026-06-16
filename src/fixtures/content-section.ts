import { test, expect, describePerLocale } from './test';
import { type MenuPage } from '../config/content/content-page';

export function describeContentSection(section: string, pages: MenuPage[]): void {
    for (const menuPage of pages) {
        describePerLocale(`${section} / ${menuPage.title}`, menuPage.filter, (locale) => {
            test.beforeEach(async ({ contentPage, wrongLocationModal, importantNoticeModal }) => {
                await contentPage.open(menuPage.path);
                await wrongLocationModal.stayHereIfVisible();
                await importantNoticeModal.confirmIfVisible();
            });

            for (const cta of menuPage.ctas) {
                test(`[${cta.type}] opens the sign up form`, async ({ contentPage, signUpModal }) => {
                    test.skip(cta.unavailable?.includes(locale.license) ?? false,
                        `${cta.type} is N/A for ${locale.license}`);

                    await expect(contentPage.cta(cta.type)).toBeVisible();
                    await contentPage.clickCta(cta.type);

                    await expect(signUpModal.root).toBeVisible();
                });
            }
        });
    }
}

