import { Page } from '@playwright/test';
import { BaseModal } from '../base/BaseModal';

const signUpSelectors = {
    closeButton: '[data-type="SIGN_UP_close"]',
} as const;

export class SignUpModal extends BaseModal {
    constructor(page: Page) {
        super(page, page.locator(signUpSelectors.closeButton));
    }
}
