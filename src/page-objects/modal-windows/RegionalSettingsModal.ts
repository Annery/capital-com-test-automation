import { Locator, Page } from "@playwright/test";
import { BaseModal } from '../base/BaseModal';

const regionalSettingsSelectors = {
    closeButton: 'button[aria-label="Close modal"]',
    countrySelector: '[data-type="country_switcher_ctry"]',
    searchBox: '#search-country',
    applyButton: 'button[data-type="country_switcher_cancel"]:not([aria-label])',
    country: (slug: string) => `[data-type="nav_country_${slug}"]`,
} as const;

export class RegionalSettingsModal extends BaseModal {
    readonly countrySelector: Locator;
    readonly searchBox: Locator;
    readonly entity: Locator;

    private readonly applyButton: Locator;

    constructor(page: Page) {
        const closeButton = page.locator(regionalSettingsSelectors.closeButton);
        super(page, closeButton);

        this.countrySelector = page.locator(regionalSettingsSelectors.countrySelector);
        this.searchBox = page.locator(regionalSettingsSelectors.searchBox);
        this.applyButton = page.locator(regionalSettingsSelectors.applyButton)
            .first();

        this.entity = page.locator('div')
            .filter({ has: closeButton })
            .locator('p')
            .first();
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