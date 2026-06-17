import { type MenuPage, allLicenses } from './content-page';

export const pricing: MenuPage[] = [
    {
        title: 'Pricing',
        path: '/ways-to-trade/fees-and-charges',
        filter: { license: allLicenses },
        ctas: [{ type: 'banner_with_steps' }],
    },
];
