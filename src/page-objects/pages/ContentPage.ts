import { Locator, Page } from '@playwright/test';

const contentPageSelectors = {
    tradingStrategiesPath: (home: string, path: string) => `${home}${path}`,
    type: (type: string) => `[data-type="${type}"]`,
} as const;

export class ContentPage {
    constructor(private readonly page: Page, private readonly home: string) { }

    async open(path: string): Promise<void> {
        await this.page.goto(contentPageSelectors.tradingStrategiesPath(this.home, path));
    }

    cta(type: string): Locator {
        return this.page.locator(contentPageSelectors.type(type)).filter({ visible: true }).first();
    }

    async clickCta(type: string): Promise<void> {
        await this.cta(type).click();
    }
}