import { type MenuPage, allLicenses } from '../content/content-page';

export const learnPages: MenuPage[] = [
    {
        title: 'Trading strategies',
        path: '/learn/trading-strategies',
        filter: { feature: 'learn', license: allLicenses, excludeLanguage: 'RO' },
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
        filter: { feature: 'learn', license: allLicenses, excludeLanguage: 'RO' },
        ctas: [{ type: 'banner_with_steps' }],
    },
    {
        title: 'Trading psychology',
        path: '/learn/trading-psychology',
        filter: { feature: 'learn', license: allLicenses, excludeLanguage: 'RO' },
        ctas: [{ type: 'banner_with_steps' }],
    },
    {
        title: 'All resources',
        path: '/learn',
        filter: { feature: 'learn', license: allLicenses },
        ctas: [
            { type: 'background_banner_block_btn1_signup' },
            { type: 'background_banner_block_btn2_demo' },
            { type: 'banner_with_steps' },
        ],
    },
    {
        title: 'Webinars',
        path: '/learn/webinars',
        filter: { feature: 'learn', license: 'CYSEC', language: 'IT' },
        ctas: [{ type: 'banner_in_body_block_btn1_signup' }],
    },
];
