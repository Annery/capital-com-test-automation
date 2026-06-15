import { type License, type Language } from './licenses';

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

export const languageOptionName: Record<Language, string> = {
    EN: 'english', AR: 'arabic', DE: 'german', FR: 'french', RU: 'russian',
    ES: 'spanish', MN: 'mongolian', VI: 'vietnamese',
    ZH_HANS: 'simplified_chinese',
    ZH_HANT: 'traditional_chinese',
    EL: 'greek', IT: 'italian', HU: 'hungarian', NL: 'dutch', PL: 'polish', RO: 'romanian',
};
