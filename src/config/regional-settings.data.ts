import { type License } from './licenses';

export interface Country {
    name: string;
    slug: string;
}

export const licenseCountry: Record<License, Country> = {
    FCA: { name: 'United Kingdom', slug: 'united_kingdom' },
    ASIC: { name: 'Australia', slug: 'australia' },
    CMA: { name: 'United Arab Emirates', slug: 'united_arab_emirates' },
    SCB: { name: 'Albania', slug: 'albania' },
    CYSEC: { name: 'Cyprus', slug: 'cyprus' },
};