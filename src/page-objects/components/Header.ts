import { Locator, Page } from '@playwright/test';

type HeaderConfig = {
    home: string;
};

const headerSelectors = {
    root: '#header-panel',
    logo: (home: string) => `a[href="${home}"]`,
} as const;

export class Header {
    readonly root: Locator;
    readonly logo: Locator;

    constructor(page: Page, config: HeaderConfig) {
        this.root = page.locator(headerSelectors.root);

        this.logo = this.root
            .locator(headerSelectors.logo(config.home))
            .filter({ visible: true })
            .first();
    }

    async clickLogo() {
        await this.logo.click();
    }
}