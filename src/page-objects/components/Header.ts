import { Locator, Page } from '@playwright/test';

type HeaderConfig = {
    home: string;
};

const headerSelectors = {
    root: '#header-panel',
    logo: (home: string) => `a[href="${home}"]`,
} as const;

export class Header {
    private readonly root: Locator;
    private readonly logo: Locator;
    private readonly regionalSettingsButton: Locator;

    constructor(page: Page, config: HeaderConfig) {
        this.root = page.locator(headerSelectors.root);

        this.logo = this.root
            .locator(headerSelectors.logo(config.home))
            .filter({ visible: true })
            .first();

        this.regionalSettingsButton = this.root
            .locator('button[data-type="country_switcher_header"]')
            .filter({ visible: true })
            .first();
    }

    async clickLogo() {
        await this.logo.click();
    }

    async openRegionalSettings() {
        await this.regionalSettingsButton.click();
    }
}