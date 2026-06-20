import { Locator, Page } from '@playwright/test';
import { BaseComponent } from '../base/BaseComponent';

type HeaderConfig = {
    home: string;
};

const headerSelectors = {
    root: '#header-panel',
    logo: (home: string) => `a[href="${home}"]`,
    regionalSettings: 'button[data-type="country_switcher_header"]',
    login: 'button[data-type="btn_header_login"]',
    openAccount: 'button[data-type="btn_header"]',
    openPlatform: 'a[data-type="btn_header_my_account"]',
} as const;

export class Header extends BaseComponent {
    private readonly logo: Locator;
    private readonly regionalSettingsButton: Locator;
    private readonly loginButton: Locator;
    private readonly openAccountButton: Locator;
    private readonly openPlatformButton: Locator;

    constructor(page: Page, config: HeaderConfig) {
        super(page.locator(headerSelectors.root));
        this.logo = this.visible(headerSelectors.logo(config.home));
        this.regionalSettingsButton = this.visible(headerSelectors.regionalSettings);
        this.loginButton = this.visible(headerSelectors.login);
        this.openAccountButton = this.visible(headerSelectors.openAccount);
        this.openPlatformButton = this.visible(headerSelectors.openPlatform);
    }

    async clickLogo() {
        await this.logo.click();
    }

    async openRegionalSettings() {
        await this.regionalSettingsButton.click();
    }

    async openLogin() {
        await this.loginButton.click();
    }

    async openOpenAccount() {
        await this.openAccountButton.click();
    }

    async openPlatform() {
        await this.openPlatformButton.click();
    }
}
