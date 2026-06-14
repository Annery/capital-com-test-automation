export type License = 'FCA' | 'ASIC' | 'CMA' | 'SCB' | 'CYSEC';
export type Language =
  | 'EN' | 'AR' | 'DE' | 'FR' | 'RU' | 'ES' | 'MN' | 'VI'
  | 'ZH_HANS' | 'ZH_HANT' | 'EL' | 'IT' | 'HU' | 'NL' | 'PL' | 'RO';

export type Feature = 'regionalSettings' | 'login' | 'signUp' | 'navigation';

export interface Locale {
  license: License;
  language: Language;
  home: string;
  nonHomePage: string;
  entity: string;
  unavailable?: Feature[];
}

export const locales: Locale[] = [
  { license: 'FCA', language: 'EN', home: '/en-gb', nonHomePage: '/en-gb/professional', entity: 'Capital Com UK Limited' },

  { license: 'ASIC', language: 'EN', home: '/en-au', nonHomePage: '/en-au/professional', entity: 'Capital Com Australia Pty Ltd' },

  { license: 'CMA', language: 'EN', home: '/en-ae', nonHomePage: '/en-ae/help', entity: 'Capital Com Mena Securities Trading LLC' },
  { license: 'CMA', language: 'AR', home: '/ar-ae', nonHomePage: '/ar-ae/help', entity: 'كابيتال كوم مينا سيكيوريتيز تريدينج ش.ذ.م.م' },

  { license: 'SCB', language: 'AR', home: '/ar-int', nonHomePage: '/ar-int/professional', entity: 'Capital Com Online Investments Ltd' },
  { license: 'SCB', language: 'DE', home: '/de-int', nonHomePage: '/de-int/professional', entity: 'Capital Com Online Investments Ltd' },
  { license: 'SCB', language: 'EN', home: '/en-int', nonHomePage: '/en-int/professional', entity: 'Capital Com Online Investments Ltd' },
  { license: 'SCB', language: 'ES', home: '/es-int', nonHomePage: '/es-int/professional', entity: 'Capital Com Online Investments Ltd' },
  { license: 'SCB', language: 'FR', home: '/fr-int', nonHomePage: '/fr-int/professional', entity: 'Capital Com Online Investments Ltd' },
  { license: 'SCB', language: 'MN', home: '/mn-int', nonHomePage: '/mn-int/help', entity: 'Capital Com Online Investments Ltd' },
  { license: 'SCB', language: 'RU', home: '/ru-int', nonHomePage: '/ru-int/professional', entity: 'Capital Com Online Investments Ltd' },
  { license: 'SCB', language: 'VI', home: '/vi-int', nonHomePage: '/vi-int/help', entity: 'Công ty TNHH Đầu tư Trực tuyến Capital Com' },
  { license: 'SCB', language: 'ZH_HANS', home: '/zh-hans', nonHomePage: '/zh-hans/professional', entity: 'Capital Com Online Investments Ltd' },
  { license: 'SCB', language: 'ZH_HANT', home: '/zh-hant', nonHomePage: '/zh-hant/professional', entity: 'Capital Com Online Investments Ltd' },

  { license: 'CYSEC', language: 'EN', home: '/en-eu', nonHomePage: '/en-eu/professional-clients', entity: 'Capital Com SV Investments Limited' },
  { license: 'CYSEC', language: 'DE', home: '/de-de', nonHomePage: '/de-de/professional-clients', entity: 'Capital Com SV Investments Limited' },
  { license: 'CYSEC', language: 'EL', home: '/el-gr', nonHomePage: '/el-gr/professional-clients', entity: 'Capital Com SV Investments Limited' },
  { license: 'CYSEC', language: 'FR', home: '/fr-fr', nonHomePage: '/fr-fr/professional-clients', entity: 'Capital Com SV Investments Limited' },
  { license: 'CYSEC', language: 'IT', home: '/it-it', nonHomePage: '/it-it/professional-clients', entity: 'Capital Com SV Investments Limited' },
  { license: 'CYSEC', language: 'HU', home: '/hu-hu', nonHomePage: '/hu-hu/professional-clients', entity: 'Capital Com SV Investments Limited' },
  { license: 'CYSEC', language: 'NL', home: '/nl-nl', nonHomePage: '/nl-nl/professional-clients', entity: 'Capital Com SV Investments Limited' },
  { license: 'CYSEC', language: 'PL', home: '/pl-pl', nonHomePage: '/pl-pl/professional-clients', entity: 'Capital Com SV Investments Limited' },
  { license: 'CYSEC', language: 'RO', home: '/ro-ro', nonHomePage: '/ro-ro/professional-clients', entity: 'Capital Com SV Investments Limited' },
];