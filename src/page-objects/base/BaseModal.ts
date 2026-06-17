import { Locator, Page } from '@playwright/test';
import { TIMEOUTS } from '../../config/timeouts';

export abstract class BaseModal {
    protected readonly page: Page;
    readonly root: Locator;

    protected constructor(page: Page, root: Locator) {
        this.page = page;
        this.root = root;
    }

    async waitUntilClosed(): Promise<void> {
        await this.root.waitFor({ state: 'hidden', timeout: TIMEOUTS.modalDisappearance });
    }

    protected async isPresent(timeout = TIMEOUTS.modalAppearance): Promise<boolean> {
        return this.root
            .waitFor({ state: 'visible', timeout })
            .then(() => true)
            .catch(() => false);
    }
}
