import { type License } from '../licenses';
import { type LocaleFilter } from '../locale-filter';

export type ExpectedResult = 'signUpForm' | 'platformPage';

export interface Cta {
    type: string;
    unavailable?: License[];
    anonymous?: ExpectedResult;
    authorized?: ExpectedResult;
}

export interface MenuPage {
    title: string;
    path: string;
    filter: LocaleFilter;
    ctas: Cta[];
}

export const allLicenses: License[] = ['FCA', 'ASIC', 'CMA', 'SCB', 'CYSEC'];
