import { Locator, Page } from '@playwright/test';

export class WrongLocationModal {
    readonly root: Locator;
    readonly stayHereButton: Locator;

    constructor(page: Page) {
        this.root = page.getByTestId('wrong_location_modal');
        this.stayHereButton = this.root.locator('button[data-type="wrong_location_cancel"]');
    }

    async stayHereIfVisible() {
        const isModalVisible = await this.root
            .waitFor({ state: 'visible', timeout: 3000 })
            .then(() => true)
            .catch(() => false);

        if (!isModalVisible) {
            return;
        }

        await this.stayHereButton.click();
        await this.root.waitFor({ state: 'hidden', timeout: 3000 });
    }
}