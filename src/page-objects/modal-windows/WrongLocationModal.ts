import { Page } from '@playwright/test';
import { BaseModal } from '../base/BaseModal';

const wrongLocationSelectors = {
    stayHereButton: 'button[data-type="wrong_location_cancel"]',
} as const;

export class WrongLocationModal extends BaseModal {
    constructor(page: Page) {
        super(page, page.locator(wrongLocationSelectors.stayHereButton));
    }

    async stayHereIfVisible(): Promise<void> {
        if (!(await this.isPresent())) {
            return;
        }

        await this.root.click();
        await this.waitUntilClosed();
    }
}
