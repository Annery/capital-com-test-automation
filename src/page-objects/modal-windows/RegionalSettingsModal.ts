import { Locator, Page } from "@playwright/test";

export class RegionalSettingsModal {
    private readonly page: Page;
    private readonly closeButton: Locator;
    private readonly countrySelector: Locator;
    private readonly searchBox: Locator;

    get SearchBox(): Locator {
        return this.searchBox;
    }

    get CountrySelector(): Locator {
        return this.countrySelector;
    }

    constructor(page: Page) {
        this.page = page;
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

    async selectCountry(slug: string): Promise<void> {
        await this.page.locator(`[data-type="nav_country_${slug}"]`).click();
    }
}