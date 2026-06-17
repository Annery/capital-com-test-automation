import { locales, type Feature, type Language, type License, type Locale } from './licenses';

export interface LocaleFilter {
    license?: License | License[];
    language?: Language | Language[];
    excludeLanguage?: Language | Language[];
    feature?: Feature;
}

function toArray<T>(value?: T | T[]): T[] {
    if (value === undefined) {
        return [];
    }
    return Array.isArray(value) ? value : [value];
}

export function selectLocales(filter: LocaleFilter = {}): Locale[] {
    const allowedLicenses = toArray(filter.license);
    const allowedLanguages = toArray(filter.language);
    const excludedLanguages = toArray(filter.excludeLanguage);

    return locales.filter((locale) => {
        if (allowedLicenses.length > 0 && !allowedLicenses.includes(locale.license)) {
            return false;
        }
        if (allowedLanguages.length > 0 && !allowedLanguages.includes(locale.language)) {
            return false;
        }
        if (excludedLanguages.includes(locale.language)) {
            return false;
        }
        if (filter.feature && locale.unavailable?.includes(filter.feature)) {
            return false;
        }
        return true;
    });
}
