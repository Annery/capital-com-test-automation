import { Locator, Page } from '@playwright/test';

type SiteLocale = {
    routes: {
        professional: string;
    }
}

export class Header {
    readonly root: Locator;
    readonly professionalTab: Locator;

    constructor(page: Page, siteLocale: SiteLocale) {
        this.root = page.getByTestId('header');

        this.professionalTab = this.root
            .locator(`a[href="${siteLocale.routes.professional}"]`)
            .filter({ visible: true });
    }

    async openProfessional() {
        await this.professionalTab.click();
    }
}