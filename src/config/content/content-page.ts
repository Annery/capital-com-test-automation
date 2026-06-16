import { type License } from '../licenses';
import { type LocaleFilter } from '../locale-filter';

export interface Cta {
    type: string;
    unavailable?: License[];
}

export interface MenuPage {
    title: string;
    path: string;
    filter: LocaleFilter;
    ctas: Cta[];
}

export const allLicenses: License[] = ['FCA', 'ASIC', 'CMA', 'SCB', 'CYSEC'];
