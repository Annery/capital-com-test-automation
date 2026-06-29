# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: header/header-regional-settings.spec.ts >> [SCB ES | unauthorized] Header regional settings >> Albania appears in the country search results
- Location: tests/header/header-regional-settings.spec.ts:28:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('[data-type="nav_country_albania"]')
Expected substring: "Albania"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('[data-type="nav_country_albania"]')

```

```yaml
- banner:
  - text: Los CFD son instrumentos complejos y conllevan un alto riesgo de perder dinero rápidamente debido al apalancamiento.
  - strong: El 78.48 % de las cuentas de los inversores minoristas pierde dinero al operar con CFD con este proveedor.
  - text: Debes plantearte si entiendes cómo funcionan los CFD y si puedes permitirte asumir el elevado riesgo de perder tu dinero.
  - link:
    - /url: /es-int
    - img
  - navigation:
    - button "Trading":
      - button "Trading"
    - button "Mercados":
      - button "Mercados"
    - link "Precios":
      - /url: /es-int/ways-to-trade/fees-and-charges
    - button "Sobre nosotros":
      - button "Sobre nosotros"
  - button "es"
  - button "Iniciar sesión"
  - button "Abrir una cuenta"
- heading "Soporte local. Conexión global." [level=2]
- paragraph: Autorizada y regulada por la Comisión de Valores de Bahamas (SCB)
- heading "En mercados llenos de ruido, diseñamos para mejores decisiones" [level=1]
- text: Global Plataforma de trading de CFD 5,500+ instrumentos
- button "Abrir una cuenta"
- img "Hero slide 1 Bottom"
- link "Android":
  - /url: /es-int/trading-platforms/mobile-apps
- link "IOS":
  - /url: /es-int/trading-platforms/mobile-apps
- link "MT4":
  - /url: /es-int/trading-platforms/mt4
- link "MT5":
  - /url: /es-int/trading-platforms/mt5
- link "TradingView":
  - /url: /es-int/trading-platforms/trading-view
- link "Terminal web":
  - /url: /es-int/trading-platforms/web-platform
- heading "5,500+ instrumentos. Un único entorno para tus decisiones" [level=2]
- link "Explora los mercados de CFD":
  - /url: /es-int/markets
- list:
  - listitem:
    - button "Materias primas":
      - heading "Materias primas" [level=3]
  - listitem:
    - button "Criptoactivos":
      - heading "Criptoactivos" [level=3]
  - listitem:
    - button "Acciones":
      - heading "Acciones" [level=3]
  - listitem:
    - button "Bonos":
      - heading "Bonos" [level=3]
  - listitem:
    - button "ETF":
      - heading "ETF" [level=3]
  - listitem:
    - button "Índices":
      - heading "Índices" [level=3]
  - listitem:
    - button "Tasas de interés":
      - heading "Tasas de interés" [level=3]
  - listitem:
    - button "Materias primas":
      - heading "Materias primas" [level=3]
  - listitem:
    - button "Criptoactivos":
      - heading "Criptoactivos" [level=3]
  - listitem:
    - button "Acciones":
      - heading "Acciones" [level=3]
  - listitem:
    - button "Bonos":
      - heading "Bonos" [level=3]
  - listitem:
    - button "ETF":
      - heading "ETF" [level=3]
  - listitem:
    - button "Índices":
      - heading "Índices" [level=3]
  - listitem:
    - button "Tasas de interés":
      - heading "Tasas de interés" [level=3]
  - listitem:
    - button "Materias primas":
      - heading "Materias primas" [level=3]
  - listitem:
    - button "Criptoactivos":
      - heading "Criptoactivos" [level=3]
  - listitem:
    - button "Acciones":
      - heading "Acciones" [level=3]
  - listitem:
    - button "Bonos":
      - heading "Bonos" [level=3]
  - listitem:
    - button "ETF":
      - heading "ETF" [level=3]
  - listitem:
    - button "Índices":
      - heading "Índices" [level=3]
  - listitem:
    - button "Tasas de interés":
      - heading "Tasas de interés" [level=3]
- heading "En cualquier pantalla. Un solo sistema." [level=2]
- paragraph: Múltiples plataformas, todos los mercados y cualquier dispositivo. Tu infraestructura de trading.
- link:
  - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
- link:
  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
- link:
  - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
- img "Mobile platform"
- img "Web platform"
- heading "Opera con una estructura de costos clara" [level=2]
- list:
  - listitem:
    - heading "Ganamos en los spreads de las operaciones ejecutadas" [level=3]
    - paragraph: Transparencia total antes de abrir tus posiciones.
  - listitem:
    - heading "Sin tarifas de depósito o retiro" [level=3]
    - paragraph: Pagos confiables. Transferencias bancarias, tarjetas, billeteras electrónicas.
- text: Nuestra estructura completa de tarifas está disponible en nuestra
- link "página de Cargos y comisiones.":
  - /url: /es-int/ways-to-trade/fees-and-charges
- img "risk graph 1"
- img "risk graph 2"
- heading "La mayoría de los traders pierde dinero" [level=2]
- heading "El mercado juega su papel" [level=2]
- heading "Tus decisiones marcan la diferencia" [level=2]
- heading "Configúralo con calma." [level=2]
- heading "Se activa bajo presión." [level=2]
- heading "Configura tu stop-loss antes de operar" [level=3]
- img "trading"
- heading "Elige tu apalancamiento" [level=3]
- img "cfd"
- img "leverage"
- heading "Confirma la orden" [level=3]
- img "bottomSheet"
- heading "La disciplina se nota. La confianza también." [level=2]
- img "Secondary phone"
- img "Main phone"
- list:
  - listitem:
    - link "4.7 Calificaciones y reseñas":
      - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - listitem:
    - link "4.7 Calificaciones y reseñas":
      - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - listitem:
    - link "4.6 TradingView":
      - /url: https://www.tradingview.com/broker/Capitalcom/
  - listitem:
    - link "4.6 Trustpilot":
      - /url: https://www.trustpilot.com/review/capital.com
  - listitem:
    - link "4.7 Calificaciones y reseñas":
      - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - listitem:
    - link "4.7 Calificaciones y reseñas":
      - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - listitem:
    - link "4.6 TradingView":
      - /url: https://www.tradingview.com/broker/Capitalcom/
  - listitem:
    - link "4.6 Trustpilot":
      - /url: https://www.trustpilot.com/review/capital.com
  - listitem:
    - link "4.7 Calificaciones y reseñas":
      - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - listitem:
    - link "4.7 Calificaciones y reseñas":
      - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - listitem:
    - link "4.6 TradingView":
      - /url: https://www.tradingview.com/broker/Capitalcom/
  - listitem:
    - link "4.6 Trustpilot":
      - /url: https://www.trustpilot.com/review/capital.com
- contentinfo:
  - link:
    - /url: /es-int
    - img
  - link:
    - /url: https://twitter.com/capitalcom
  - link:
    - /url: https://www.linkedin.com/company/capital.com/
  - link:
    - /url: https://www.instagram.com/capitalcom/
  - link:
    - /url: https://www.tiktok.com/@capitalcom_international
  - link:
    - /url: https://www.facebook.com/capitalcom/
  - link:
    - /url: https://www.reddit.com/r/capitalcom/
  - link:
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "País:"
  - button "Mexico"
  - text: "• Idioma:"
  - button "Spanish"
  - text: "También puedes contactarnos:"
  - link "+52 55 9417 8887":
    - /url: tel:+52 55 9417 8887
    - strong: +52 55 9417 8887
    - strong
  - text: •
  - link "support@capital.com":
    - /url: mailto:support@capital.com
    - strong: support@capital.com
  - strong: Trading
  - text: Trading
  - link "Trading de CFD":
    - /url: /es-int/ways-to-trade/cfd-trading
  - link "Trading en cuenta demo":
    - /url: /es-int/trading-platforms/demo-account
  - link "Profesional":
    - /url: /es-int/professional
  - text: Plataformas
  - link "Plataforma web":
    - /url: /es-int/trading-platforms/web-platform
  - link "Aplicaciones móviles":
    - /url: /es-int/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /es-int/trading-platforms/trading-view
  - link "MT4":
    - /url: /es-int/trading-platforms/mt4
  - link "MT5":
    - /url: /es-int/trading-platforms/mt5
  - text: Aprende
  - link "Estrategias de trading":
    - /url: /es-int/learn/trading-strategies
  - link "Análisis técnico":
    - /url: /es-int/learn/technical-analysis
  - link "Psicología del trading":
    - /url: /es-int/learn/trading-psychology
  - link "Aprende":
    - /url: /es-int/learn
  - strong: Mercados
  - text: Nuestros mercados
  - link "Mercados":
    - /url: /es-int/markets
  - link "Acciones":
    - /url: /es-int/markets/shares
  - link "Divisas":
    - /url: /es-int/markets/forex
  - link "Índices":
    - /url: /es-int/markets/indices
  - link "Materias primas":
    - /url: /es-int/markets/commodities
  - link "Criptomonedas":
    - /url: /es-int/markets/cryptocurrencies
  - link "Bonos":
    - /url: /es-int/markets/bonds
  - link "Tasas de interés":
    - /url: /es-int/markets/interest-rates
  - text: Perspectivas del mercado
  - link "Análisis de mercado":
    - /url: /es-int/analysis
  - link "Precios":
    - /url: /es-int/ways-to-trade/fees-and-charges
    - strong: Precios
  - strong: Sobre nosotros
  - text: Quiénes somos
  - link "Quiénes somos":
    - /url: /es-int/about-us
  - link "Nuestras oficinas":
    - /url: /es-int/about-us/our-offices
  - link "¿Es seguro Capital.com?":
    - /url: /es-int/security-measures
  - link "Nuestro modelo de negocio":
    - /url: /es-int/about-us/how-capital-makes-money
  - text: Trabaja con nosotros
  - link "Programas de colaboración":
    - /url: /es-int/partnerships
  - link "Recomiende a un amigo":
    - /url: /es-int/refer-a-friend
  - text: Ayuda
  - link "Ayuda":
    - /url: /es-int/help
  - link "Vulnerabilidad del cliente":
    - /url: /es-int/help/client-vulnerability
  - link "Contáctanos":
    - /url: /es-int/contact-us
  - text: Legal
  - link "Condiciones y políticas":
    - /url: /es-int/terms-and-policies
  - link "Quejas":
    - /url: /es-int/help/complaints
  - paragraph:
    - text: Los CFD son instrumentos complejos y conllevan un alto riesgo de perder dinero rápidamente debido al apalancamiento.
    - strong: El 78.48 % de las cuentas de los inversores minoristas pierde dinero al operar con CFD con este proveedor.
    - text: Debes plantearte si entiendes cómo funcionan los CFD y si puedes permitirte asumir el elevado riesgo de perder tu dinero.
  - paragraph
  - paragraph: "Capital Com Online Investments Ltd es una compañía de responsabilidad limitada con número de sociedad 209236B. Capital Com Online Investments Ltd es una compañía registrada en la Commonwealth de las Bahamas y autorizada por la Comisión de Valores de las Bahamas con el número de licencia SIA-F245. El domicilio social de la compañía se encuentra en #3 Bayside Executive Park, Blake Road y West Bay Street, P. O. Box CB 13012, Nassau (Bahamas)."
  - paragraph: © 2026 Capital Com Online Investments Ltd
  - link "Mapa del sitio":
    - /url: /es-int/sitemap
  - link "Configuración de cookies":
    - /url: ""
  - link:
    - /url: /es-int
  - link "Términos y condiciones":
    - /url: /es-int/terms-and-policies
  - link "Procedimiento de reclamaciones (SCB)":
    - /url: /es-int/help/complaints
- button "Close modal"
- strong: Configuración regional
- strong: País
- button "Mexico"
- button "Albania":
  - textbox "search-country":
    - /placeholder: Búsqueda de país
    - text: Albania
  - button
- strong: Idioma
- button "Spanish"
- button "Arabic"
- button "German"
- button "English"
- button "Spanish"
- button "French"
- button "Mongolian"
- button "Russian"
- button "Vietnamese"
- button "Simplified Chinese"
- button "Traditional Chinese"
- strong: Entidad
- paragraph: Capital Com Online Investments Ltd
- paragraph: Autorizada y regulada por la Comisión de Valores de Bahamas (SCB)
- button "Aplicar"
- button "Cancelar"
- button
- dialog "Cookie banner":
  - paragraph:
    - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
    - link "More information about your privacy, opens in a new tab":
      - /url: https://capital.com/cookies_policy_bah
      - text: Cookie Policy
    - text: .
  - button "Reject all"
  - button "Allow all cookies"
  - button "Cookie settings"
- alert
```

# Test source

```ts
  1  | import { test, expect, describePerLocaleState } from '../../src/fixtures/test';
  2  | import { licenseCountry, languageOptionName } from '../../src/config/regional-settings.data';
  3  | import { selectLocales } from '../../src/config/locale-filter';
  4  | import { userStates } from '../../src/config/auth';
  5  | 
  6  | describePerLocaleState('Header regional settings', userStates, (locale) => {
  7  |     const country = licenseCountry[locale.license];
  8  | 
  9  |     test.beforeEach(async ({ page, dismissInterstitials }) => {
  10 |         await page.goto(locale.home);
  11 |         await dismissInterstitials();
  12 |     });
  13 | 
  14 |     test('Regional settings opens', async ({ header, regionalSettingsModal }) => {
  15 |         await header.openRegionalSettings();
  16 | 
  17 |         await expect(regionalSettingsModal.root).toBeVisible();
  18 |     });
  19 | 
  20 |     test('Country dropdown opens with a search box', async ({ header, regionalSettingsModal }) => {
  21 |         await header.openRegionalSettings();
  22 | 
  23 |         await regionalSettingsModal.openCountryList();
  24 | 
  25 |         await expect(regionalSettingsModal.searchBox).toBeVisible();
  26 |     });
  27 | 
  28 |     test(`${country.name} appears in the country search results`, async ({
  29 |         header,
  30 |         regionalSettingsModal,
  31 |     }) => {
  32 |         await header.openRegionalSettings();
  33 |         await regionalSettingsModal.openCountryList();
  34 |         await regionalSettingsModal.searchCountry(country.name);
  35 | 
> 36 |         await expect(regionalSettingsModal.countryOption(country.slug)).toContainText(country.name);
     |                                                                         ^ Error: expect(locator).toContainText(expected) failed
  37 |     });
  38 | 
  39 |     test(`${country.name} can be selected`, async ({ header, regionalSettingsModal }) => {
  40 |         await header.openRegionalSettings();
  41 |         await regionalSettingsModal.openCountryList();
  42 | 
  43 |         await regionalSettingsModal.selectCountry(country.slug);
  44 | 
  45 |         await expect(regionalSettingsModal.countrySelector).toContainText(country.name);
  46 |     });
  47 | 
  48 |     test('Switching language keeps the license', async ({
  49 |         page,
  50 |         header,
  51 |         regionalSettingsModal,
  52 |     }) => {
  53 |         const candidates = selectLocales({
  54 |             license: locale.license,
  55 |         }).filter((l) => l.language !== locale.language);
  56 |         test.skip(candidates.length === 0, `${locale.license} has a single language`);
  57 | 
  58 |         await header.openRegionalSettings();
  59 |         await regionalSettingsModal.openLanguageList();
  60 | 
  61 |         const offered = await regionalSettingsModal.offeredLanguages();
  62 |         const target = candidates.find((l) => offered.includes(languageOptionName[l.language]));
  63 |         test.skip(!target, `Language is locked on ${locale.home}`);
  64 | 
  65 |         await regionalSettingsModal.selectLanguage(languageOptionName[target!.language]);
  66 |         await regionalSettingsModal.apply();
  67 | 
  68 |         await expect(page).toHaveURL(new RegExp(`${target!.home}(?:[/?#]|$)`));
  69 |     });
  70 | 
  71 |     test('Entity matches the license', async ({ header, regionalSettingsModal }) => {
  72 |         await header.openRegionalSettings();
  73 | 
  74 |         await expect(regionalSettingsModal.entity).toContainText(locale.entity);
  75 |     });
  76 | });
  77 | 
```