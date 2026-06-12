import { Locator, Page } from "@playwright/test";

export class RegionalSettingsModal {
    private readonly closeButton: Locator;

    constructor(page: Page) {
        this.closeButton = page.locator('button[aria-label="Close modal"]');
    }

    async isOpen(): Promise<boolean> {
        return await this.closeButton.isVisible();
    }
}