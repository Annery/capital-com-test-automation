const fcaEnBasePath = '/en-gb';

export const site = {
  fca: {
    en: {
      license: 'FCA',
      language: 'EN',
      basePath: fcaEnBasePath,

      routes: {
        home: fcaEnBasePath,
        personal: fcaEnBasePath,
        professional: `${fcaEnBasePath}/professional`,
        support: `${fcaEnBasePath}/help`,
      },
    },
  },
};