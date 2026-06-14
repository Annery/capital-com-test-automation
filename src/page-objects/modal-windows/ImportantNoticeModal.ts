import { Locator, Page } from '@playwright/test';
import { BaseModal } from '../base/BaseModal';

const importantNoticeSelectors = {
    confirmButton: '[data-type="closed_countries_disclaimer_confirm"]',
} as const;

export class ImportantNoticeModal extends BaseModal {
    private readonly lastParagraph: Locator;

    constructor(page: Page) {
        const confirmButton = page.locator(importantNoticeSelectors.confirmButton);
        super(page, confirmButton);

        const modal = page
            .locator('[data-sentry-component="Modal"]')
            .filter({ has: confirmButton });

        this.lastParagraph = modal.locator('p').last();
    }

    async confirmIfVisible(): Promise<void> {
        if (!(await this.isPresent())) {
            return;
        }

        await this.lastParagraph.scrollIntoViewIfNeeded();
        await this.root.click();
        await this.waitUntilClosed();
    }
}