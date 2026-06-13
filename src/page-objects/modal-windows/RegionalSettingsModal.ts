import { Locator, Page } from "@playwright/test";

const regionalSettingsSelectors = {
    closeButton: 'button[aria-label="Close modal"]',
    countrySelector: '[data-type="country_switcher_ctry"]',
    searchBox: '#search-country',
    applyButton: 'button[data-type="country_switcher_cancel"]:not([aria-label])',
    country: (slug: string) => `[data-type="nav_country_${slug}"]`,
} as const;

export class RegionalSettingsModal {
    private readonly page: Page;
    private readonly closeButton: Locator;
    private readonly applyButton: Locator;

    readonly countrySelector: Locator;
    readonly searchBox: Locator;
    readonly entity: Locator;

    constructor(page: Page) {
        this.page = page;
        this.closeButton = page.locator(regionalSettingsSelectors.closeButton);
        this.countrySelector = page.locator(regionalSettingsSelectors.countrySelector);
        this.searchBox = page.locator(regionalSettingsSelectors.searchBox);

        this.applyButton = page.locator(regionalSettingsSelectors.applyButton)
            .first();

        this.entity = page.locator('div')
            .filter({ has: page.locator(regionalSettingsSelectors.closeButton) })
            .locator('p')
            .first();
    }

    async isOpen(): Promise<boolean> {
        return await this.closeButton.isVisible();
    }

    async openCountryList(): Promise<void> {
        await this.countrySelector.click();
    }

    async selectCountry(slug: string): Promise<void> {
        await this.page.locator(regionalSettingsSelectors.country(slug)).click();
    }

    async apply(): Promise<void> {
        await this.applyButton.click();
    }
}