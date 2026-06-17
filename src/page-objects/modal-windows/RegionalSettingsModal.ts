import { Locator, Page } from '@playwright/test';
import { BaseModal } from '../base/BaseModal';
import { TIMEOUTS } from '../../config/timeouts';

const regionalSettingsSelectors = {
    closeButton: 'button[aria-label="Close modal"]',
    countrySelector: '[data-type="country_switcher_ctry"]',
    languageSelector: '[data-type="country_switcher_lng"]',
    searchBox: '#search-country',
    applyButton: 'button[data-type="country_switcher_apply"]',
    country: (slug: string) => `[data-type="nav_country_${slug}"]`,
    language: (name: string) => `[data-type="nav_country_${name}"]`,
    anyOption: '[data-type^="nav_country_"]',
    languageBlock: '[data-sentry-component="CountryLangSelect"]',
} as const;

export class RegionalSettingsModal extends BaseModal {
    readonly countrySelector: Locator;
    readonly searchBox: Locator;
    readonly entity: Locator;

    private readonly applyButton: Locator;
    private readonly languageBlock: Locator;

    constructor(page: Page) {
        const closeButton = page.locator(regionalSettingsSelectors.closeButton);
        super(page, closeButton);

        this.countrySelector = page.locator(regionalSettingsSelectors.countrySelector);
        this.searchBox = page.locator(regionalSettingsSelectors.searchBox);
        this.applyButton = page.locator(regionalSettingsSelectors.applyButton);

        this.entity = page.locator('div').filter({ has: closeButton }).locator('p').first();

        this.languageBlock = page
            .locator(regionalSettingsSelectors.languageBlock)
            .filter({ has: page.locator(regionalSettingsSelectors.languageSelector) });
    }

    async openCountryList(): Promise<void> {
        await this.countrySelector.click();
    }

    async searchCountry(name: string): Promise<void> {
        await this.searchBox.fill(name);
    }

    countryOption(slug: string): Locator {
        return this.page.locator(regionalSettingsSelectors.country(slug));
    }

    async selectCountry(slug: string): Promise<void> {
        await this.countryOption(slug).click();
    }

    async openLanguageList(): Promise<void> {
        await this.page.locator(regionalSettingsSelectors.languageSelector).click();
    }

    async offeredLanguages(): Promise<string[]> {
        const options = this.languageBlock.locator(regionalSettingsSelectors.anyOption);

        await options
            .first()
            .waitFor({ state: 'visible', timeout: TIMEOUTS.modalAppearance })
            .catch(() => {});

        return options.evaluateAll((els) =>
            els.map((el) => el.getAttribute('data-type')!.replace('nav_country_', '')),
        );
    }

    async selectLanguage(name: string): Promise<void> {
        await this.page.locator(regionalSettingsSelectors.language(name)).click();
    }

    async apply(): Promise<void> {
        await this.applyButton.click();
    }
}
