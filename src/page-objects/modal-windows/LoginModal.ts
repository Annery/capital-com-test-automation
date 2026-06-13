import { Page } from '@playwright/test';
import { BaseModal } from '../base/BaseModal';

const loginSelectors = {
    closeButton: '[data-type="SIGN_IN_close"]',
} as const;

export class LoginModal extends BaseModal {
    constructor(page: Page) {
        super(page, page.locator(loginSelectors.closeButton));
    }
}