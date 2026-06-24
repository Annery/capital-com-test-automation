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
