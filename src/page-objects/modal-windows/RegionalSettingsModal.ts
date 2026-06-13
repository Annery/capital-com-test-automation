import { Locator, Page } from "@playwright/test";

export class RegionalSettingsModal {
    private readonly closeButton: Locator;
    private readonly countrySelector: Locator;
    private readonly searchBox : Locator;

    get SearchBox() : Locator{
        return this.searchBox;
    }

    constructor(page: Page) {
        this.closeButton = page.locator('button[aria-label="Close modal"]');
        this.countrySelector = page.locator('[data-type="country_switcher_ctry"]');
        this.searchBox = page.locator('#search-country');
    }

    async isOpen(): Promise<boolean> {
        return await this.closeButton.isVisible();
    }

    async openCountryList(): Promise<void> {
        await this.countrySelector.click();
    }
}