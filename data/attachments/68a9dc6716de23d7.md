# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/about.spec.ts >> [SCB DE | unregistered] About / Work with us / Is Capital.com safe? >> [homepage_hero_banner_btn1_signup] -> signUpForm
- Location: src/fixtures/content-section.ts:54:25

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-type="homepage_hero_banner_btn1_signup"]').filter({ visible: true }).first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-type="homepage_hero_banner_btn1_signup"]').filter({ visible: true }).first()

```

```yaml
- banner:
  - text: CFDs sind komplexe Instrumente und aufgrund des Hebels mit einem hohen Risiko des schnellen Geldverlustes verbunden.
  - strong: 78.48 % der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit diesem Anbieter.
  - text: Sie sollten abwägen, ob Sie verstehen, wie CFDs funktionieren, und ob Sie es sich leisten können, das hohe Risiko des Geldverlustes einzugehen.
  - link:
    - /url: /de-int
    - img
  - navigation:
    - button "Handel":
      - button "Handel"
    - button "Märkte":
      - button "Märkte"
    - link "Preisgestaltung":
      - /url: /de-int/ways-to-trade/fees-and-charges
    - button "Über uns":
      - button "Über uns"
  - button "de"
  - button "Anmelden"
  - button "Konto eröffnen"
- paragraph:
  - link "Startseite":
    - /url: /de-int
  - text: •Ist Capital.com sicher?
- contentinfo:
  - link:
    - /url: /de-int
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
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=214fba22-8f2e-46b9-bf78-3facb6534fb4&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=214fba22-8f2e-46b9-bf78-3facb6534fb4&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=214fba22-8f2e-46b9-bf78-3facb6534fb4&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "Land / Region:"
  - button "Switzerland"
  - text: "• Sprache:"
  - button "German"
  - text: "Sie können auch uns kontaktieren:"
  - link "+41 435053128":
    - /url: tel:+41 435053128
    - strong: +41 435053128
    - strong
  - text: •
  - link "support@capital.com":
    - /url: mailto:support@capital.com
    - strong: support@capital.com
  - strong: Handel
  - text: Handel
  - link "CFD-Trading":
    - /url: /de-int/ways-to-trade/cfd-trading
  - link "Demo-Trading":
    - /url: /de-int/trading-platforms/demo-account
  - link "Professionell":
    - /url: /de-int/professional
  - text: Plattformen
  - link "Web-Plattform":
    - /url: /de-int/trading-platforms/web-platform
  - link "Mobile App":
    - /url: /de-int/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /de-int/trading-platforms/trading-view
  - link "MT4":
    - /url: /de-int/trading-platforms/mt4
  - link "MT5":
    - /url: /de-int/trading-platforms/mt5
  - text: Lernen
  - link "Trading-Strategien":
    - /url: /de-int/learn/trading-strategies
  - link "Technische Analyse":
    - /url: /de-int/learn/technical-analysis
  - link "Trading-Psychologie":
    - /url: /de-int/learn/trading-psychology
  - link "Webinare":
    - /url: /de-int/learn/webinars
  - link "Lernen":
    - /url: /de-int/learn
  - strong: Märkte
  - text: Unsere Märkte
  - link "Märkte":
    - /url: /de-int/markets
  - link "Aktien":
    - /url: /de-int/markets/shares
  - link "Forex":
    - /url: /de-int/markets/forex
  - link "Indizes":
    - /url: /de-int/markets/indices
  - link "Rohstoffe":
    - /url: /de-int/markets/commodities
  - link "Kryptowährungen":
    - /url: /de-int/markets/cryptocurrencies
  - link "Anleihen":
    - /url: /de-int/markets/bonds
  - link "Zinssätze":
    - /url: /de-int/markets/interest-rates
  - text: Markteinblicke
  - link "Marktanalyse":
    - /url: /de-int/analysis
  - link "Preisgestaltung":
    - /url: /de-int/ways-to-trade/fees-and-charges
    - strong: Preisgestaltung
  - strong: Über uns
  - text: Über uns
  - link "Über uns":
    - /url: /de-int/about-us
  - link "Unsere Niederlassungen":
    - /url: /de-int/about-us/our-offices
  - link "Ist Capital.com sicher?":
    - /url: /de-int/security-measures
  - link "Unser Geschäftsmodell":
    - /url: /de-int/about-us/how-capital-makes-money
  - text: Arbeiten Sie mit uns
  - link "Partnerprogramme":
    - /url: /de-int/partnerships
  - link "Einen Freund empfehlen":
    - /url: /de-int/refer-a-friend
  - text: Hilfe
  - link "Hilfe":
    - /url: /de-int/help
  - link "Kundenvulnerabilität":
    - /url: /de-int/help/client-vulnerability
  - link "Kontaktieren Sie uns":
    - /url: /de-int/contact-us
  - text: Rechtliches
  - link "Nutzungsbedingungen und Richtlinien":
    - /url: /de-int/terms-and-policies
  - link "Beschwerden":
    - /url: /de-int/help/complaints
  - paragraph:
    - text: CFDs sind komplexe Instrumente und aufgrund des Hebels mit einem hohen Risiko des schnellen Geldverlustes verbunden.
    - strong: 78.48 % der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit diesem Anbieter.
    - text: Sie sollten abwägen, ob Sie verstehen, wie CFDs funktionieren, und ob Sie es sich leisten können, das hohe Risiko des Geldverlustes einzugehen.
  - paragraph
  - paragraph: "Capital Com Online Investments Ltd ist eine Gesellschaft mit beschränkter Haftung mit der Unternehmensnummer 209236B. Capital Com Online Investments Ltd ist ein im Commonwealth der Bahamas eingetragenes Unternehmen, das von der Securities Commission of the Bahamas unter der Lizenznummer SIA-F245 zugelassen ist. Der eingetragene Unternehmenssitz befindet sich in #3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas."
  - paragraph: © 2026 Capital Com Online Investments Ltd
  - link "Sitemap":
    - /url: /de-int/sitemap
  - link "Cookie-Einstellungen":
    - /url: ""
  - link:
    - /url: /de-int
  - link "Bedingungen und Richtlinien":
    - /url: /de-int/terms-and-policies
  - link "Beschwerdeverfahren (SCB)":
    - /url: /de-int/help/complaints
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
  1  | import { test, expect, describePerLocaleState, clickUntilUrl, clickUntilVisible } from './test';
  2  | import { Cta, ExpectedResult, type MenuPage } from '../config/content/content-page';
  3  | import { userStates, UserState } from '../config/auth';
  4  | import { SignUpModal } from '../page-objects/modal-windows/SignUpModal';
  5  | import { Page } from '@playwright/test';
  6  | import { ContentPage } from '../page-objects/pages/ContentPage';
  7  | import { PLATFORM_URL } from '../config/site';
  8  | import { TIMEOUTS } from '../config/timeouts';
  9  | 
  10 | const expectedFor = (cta: Cta, state: UserState): ExpectedResult =>
  11 |     cta.external
  12 |         ? 'externalUrl'
  13 |         : state === 'authorized'
  14 |           ? (cta.authorized ?? 'platformPage')
  15 |           : (cta.anonymous ?? 'signUpForm');
  16 | 
  17 | async function expectCtaOutcome(
  18 |     result: ExpectedResult,
  19 |     cta: Cta,
  20 |     {
  21 |         contentPage,
  22 |         signUpModal,
  23 |         page,
  24 |     }: { contentPage: ContentPage; signUpModal: SignUpModal; page: Page },
  25 | ): Promise<void> {
  26 |     if (cta.external) {
  27 |         const popupPromise = page.waitForEvent('popup', { timeout: TIMEOUTS.navigation });
  28 |         await contentPage.clickCta(cta.type);
  29 |         const popup = await popupPromise;
  30 |         await expect(popup).toHaveURL(cta.external, { timeout: TIMEOUTS.navigation });
  31 |         await popup.close();
  32 |         return;
  33 |     }
  34 |     if (result === 'platformPage') {
  35 |         await clickUntilUrl(page, () => contentPage.clickCta(cta.type), PLATFORM_URL);
  36 |     } else {
  37 |         await clickUntilVisible(() => contentPage.clickCta(cta.type), signUpModal.root);
  38 |     }
  39 | }
  40 | 
  41 | export function describeContentSection(section: string, pages: MenuPage[]): void {
  42 |     for (const menuPage of pages) {
  43 |         describePerLocaleState(
  44 |             `${section} / ${menuPage.title}`,
  45 |             userStates,
  46 |             (locale, state) => {
  47 |                 test.beforeEach(async ({ contentPage, dismissInterstitials }) => {
  48 |                     await contentPage.open(menuPage.path);
  49 |                     await dismissInterstitials();
  50 |                 });
  51 | 
  52 |                 for (const cta of menuPage.ctas) {
  53 |                     const result = expectedFor(cta, state);
  54 |                     test(`[${cta.type}] -> ${result}`, async ({
  55 |                         contentPage,
  56 |                         signUpModal,
  57 |                         page,
  58 |                     }) => {
  59 |                         test.skip(
  60 |                             cta.unavailable?.includes(locale.license) ?? false,
  61 |                             `${cta.type} is N/A for ${locale.license}`,
  62 |                         );
  63 | 
> 64 |                         await expect(contentPage.cta(cta.type)).toBeVisible();
     |                                                                 ^ Error: expect(locator).toBeVisible() failed
  65 | 
  66 |                         await expectCtaOutcome(result, cta, {
  67 |                             contentPage,
  68 |                             signUpModal,
  69 |                             page,
  70 |                         });
  71 |                     });
  72 |                 }
  73 |             },
  74 |             menuPage.filter,
  75 |         );
  76 |     }
  77 | }
  78 | 
```