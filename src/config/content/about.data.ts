import { allLicenses, type MenuPage } from './content-page';

export const legalPages: MenuPage[] = [
    {
        title: 'Complaints',
        path: '/help/complaints',
        filter: { license: ['FCA', 'ASIC', 'CMA', 'SCB'] },
        ctas: [{ type: 'banner_with_steps' }],
    },
];

export const helpPages: MenuPage[] = [
    {
        title: 'Help centre',
        path: '/help',
        filter: { license: allLicenses },
        ctas: [{ type: 'banner_with_steps' }],
    },
    {
        title: 'Contact us',
        path: '/contact-us',
        filter: { license: allLicenses },
        ctas: [{ type: 'banner_with_steps' }],
    },
];

export const workWithUsPages: MenuPage[] = [
    {
        title: 'Careers',
        path: '/about-us/careers',
        filter: { license: allLicenses },
        ctas: [{ type: 'background_banner_block_btn2_custom', external: /linkedin\.com/ }],
    },
    {
        title: 'Refer a friend',
        path: '/refer-a-friend',
        filter: { license: 'SCB', language: 'EN' },
        ctas: [{ type: 'plain_button' }],
    },
];

export const whoWeArePages: MenuPage[] = [
    {
        title: 'Our offices',
        path: '/about-us/our-offices',
        filter: { license: allLicenses },
        ctas: [{ type: 'banner_with_steps' }],
    },
    {
        title: 'Press centre',
        path: '/media-centre',
        filter: { language: 'EN', exclude: { license: 'FCA' } },
        ctas: [{ type: 'wdg_most_traded_btn' }],
    },
    {
        title: 'Investor Relations',
        path: '/about-us/investor-relations',
        filter: { language: 'EN' },
        ctas: [{ type: 'banner_with_steps' }],
    },
    {
        title: 'Is Capital.com safe?',
        path: '/security-measures',
        filter: { license: allLicenses },
        ctas: [{ type: 'homepage_hero_banner_btn1_signup' }],
    },
    {
        title: 'Our business model',
        path: '/about-us/how-capital-makes-money',
        filter: { license: allLicenses },
        ctas: [{ type: 'banner_with_steps' }],
    },
];
