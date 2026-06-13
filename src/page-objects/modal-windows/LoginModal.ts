import { Locator, Page } from '@playwright/test';

export class LoginModal {
    private readonly closeButton: Locator;

    constructor(page: Page) {
        this.closeButton = page.locator('[data-type="SIGN_IN_close"]');
    }

    async isOpen(): Promise<boolean> {
        return await this.closeButton.isVisible();
    }
}