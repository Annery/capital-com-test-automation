import { type MenuPage, allLicenses } from '../content/content-page';
import { type LocaleFilter } from '../locale-filter';

const LEARN_EXCLUDE: LocaleFilter = { license: 'SCB', language: ['MN', 'VI'] };

export const learnPages: MenuPage[] = [
    {
        title: 'Trading strategies',
        path: '/learn/trading-strategies',
        filter: { license: allLicenses, exclude: [{ language: 'RO' }, LEARN_EXCLUDE] },
        ctas: [
            { type: 'background_banner_block_btn1_signup' },
            { type: 'background_banner_block_btn2_demo' },
            { type: 'tiles_w_img_btn2_signup', unavailable: ['ASIC', 'CMA', 'SCB', 'CYSEC'] },
            { type: 'banner_with_steps' },
        ],
    },
    {
        title: 'Technical analysis',
        path: '/learn/technical-analysis',
        filter: { license: allLicenses, exclude: [{ language: 'RO' }, LEARN_EXCLUDE] },
        ctas: [{ type: 'banner_with_steps' }],
    },
    {
        title: 'Trading psychology',
        path: '/learn/trading-psychology',
        filter: { license: allLicenses, exclude: [{ language: 'RO' }, LEARN_EXCLUDE] },
        ctas: [{ type: 'banner_with_steps' }],
    },
    {
        title: 'All resources',
        path: '/learn',
        filter: { license: allLicenses, exclude: LEARN_EXCLUDE },
        ctas: [
            { type: 'background_banner_block_btn1_signup' },
            { type: 'background_banner_block_btn2_demo' },
            { type: 'banner_with_steps' },
        ],
    },
    {
        title: 'Webinars',
        path: '/learn/webinars',
        filter: { license: 'CYSEC', language: 'IT' },
        ctas: [{ type: 'banner_in_body_block_btn1_signup' }],
    },
];
