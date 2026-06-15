import { test, expect, describePerLocale } from '../../src/fixtures/test';
import { learnPages } from '../../src/config/menu-content.data';

for (const learnPage of learnPages) {
    describePerLocale(`Learn / ${learnPage.title}`, learnPage.filter, (locale) => {
        test.beforeEach(async ({ contentPage, wrongLocationModal, importantNoticeModal }) => {
            await contentPage.open(learnPage.path);
            await wrongLocationModal.stayHereIfVisible();
            await importantNoticeModal.confirmIfVisible();
        });

        for (const cta of learnPage.ctas) {
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