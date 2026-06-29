import { Locator, Page } from '@playwright/test';
import { BaseModal } from '../base/BaseModal';

const importantNoticeSelectors = {
    confirmButton: '[data-type="closed_countries_disclaimer_confirm"]',
    modalBox: 'div:has(> [data-type="closed_countries_disclaimer_confirm"])',
} as const;

export class ImportantNoticeModal extends BaseModal {
    private readonly lastParagraph: Locator;

    constructor(page: Page) {
        super(page, page.locator(importantNoticeSelectors.confirmButton));
        this.lastParagraph = page.locator(importantNoticeSelectors.modalBox).locator('p').last();
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
