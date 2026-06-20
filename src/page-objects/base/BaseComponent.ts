import { Locator } from '@playwright/test';

export abstract class BaseComponent {
    protected constructor(protected readonly root: Locator) {}

    protected visible(selector: string): Locator {
        return this.root.locator(selector).filter({ visible: true }).first();
    }
}
