import { Locator, Page } from '@playwright/test';
import { TIMEOUTS } from '../../config/timeouts';

export class WrongLocationModal {
    readonly stayHereButton: Locator;

    constructor(page: Page) {
        this.stayHereButton = page.locator('button[data-type="wrong_location_cancel"]');
    }

    async stayHereIfVisible() {
        const isModalVisible = await this.stayHereButton
            .waitFor({ state: 'visible', timeout: TIMEOUTS.modalAppearance })
            .then(() => true)
            .catch(() => false);

        if (!isModalVisible) {
            return;
        }

        await this.stayHereButton.click();
        await this.stayHereButton.waitFor({ state: 'hidden', timeout: TIMEOUTS.modalDisappearance });
    }
}