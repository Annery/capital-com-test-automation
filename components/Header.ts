import { Locator, Page } from '@playwright/test';

type SiteLocale = {
    routes: {
        professional: string;
        support: string;
    }
}

export class Header {
    readonly root: Locator;
    readonly professionalTab: Locator;
    readonly supportTab: Locator;

    constructor(page: Page, siteLocale: SiteLocale) {
        this.root = page.getByTestId('header');

        this.professionalTab = this.root
            .locator(`a[href="${siteLocale.routes.professional}"]`)
            .filter({ visible: true });

        this.supportTab = this.root
            .locator(`a[href="${siteLocale.routes.support}"]`)
            .filter({ visible: true });
    }

    async openProfessional() {
        await this.professionalTab.click();
    }

    async openSupport() {
        await this.supportTab.click();
    }
}