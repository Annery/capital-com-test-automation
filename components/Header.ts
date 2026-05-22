import { Locator, Page } from '@playwright/test';

type SiteLocale = {
    routes: {
        home: string;
        professional: string;
        support: string;
    };
};

export class Header {
    readonly root: Locator;
    readonly personalTab: Locator;
    readonly professionalTab: Locator;
    readonly supportTab: Locator;
    readonly logo: Locator;

    constructor(page: Page, siteLocale: SiteLocale) {
        this.root = page.getByTestId('header');

        this.personalTab = this.getVisibleHeaderTabByHref(siteLocale.routes.home);
        this.professionalTab = this.getVisibleHeaderTabByHref(siteLocale.routes.professional);
        this.supportTab = this.getVisibleHeaderTabByHref(siteLocale.routes.support);

        this.logo = this.root.getByTestId('logo');
    }

    private getVisibleHeaderTabByHref(href: string): Locator {
        return this.root
            .locator(`a.GQwn[href="${href}"]`)
            .filter({ visible: true });
    }

    async openProfessional() {
        await this.professionalTab.click();
    }

    async openSupport() {
        await this.supportTab.click();
    }

    async openPersonal() {
        await this.personalTab.click();
    }

    async clickLogo() {
        await this.logo.click();
    }
}