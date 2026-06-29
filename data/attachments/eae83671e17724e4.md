# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/about.spec.ts >> [CYSEC NL | authorized] About / Help / Help centre >> [banner_with_steps] -> platformPage
- Location: src/fixtures/content-section.ts:41:25

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/trading\/platform\//
Received string:  "https://capital.com/nl-nl/help"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://capital.com/nl-nl/help"


Call Log:
- Timeout 15000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]:
      - text: CFD's zijn complexe instrumenten en houden vanwege de hefboomwerking een hoog risico in op grote verliezen.
      - generic [ref=e8]:
        - generic [ref=e9]:
          - strong [ref=e10]: 73% van de particuliere beleggers verliest geld bij de handel in CFD's met deze aanbieder
          - text: .
        - text: U moet nagaan of u wel degelijk begrijpt hoe CFD's werken en of u zich het hoge risico op geldverlies kunt veroorloven. Raadpleeg onze
        - link "risicoverklaring" [ref=e11] [cursor=pointer]:
          - /url: https://capital.com/risk-disclosure-policy
    - generic [ref=e13]:
      - link [ref=e14] [cursor=pointer]:
        - /url: /nl-nl
        - img [ref=e15]
      - generic [ref=e20]:
        - navigation [ref=e21]:
          - button "Handelen" [ref=e22]:
            - button "Handelen" [ref=e23]:
              - generic [ref=e24]: Handelen
          - button "Markten" [ref=e25]:
            - button "Markten" [ref=e26]:
              - generic [ref=e27]: Markten
          - link "Prijzen" [ref=e30] [cursor=pointer]:
            - /url: /nl-nl/ways-to-trade/fees-and-charges
          - button "Informatie" [ref=e31]:
            - button "Informatie" [ref=e32]:
              - generic [ref=e33]: Informatie
        - button "nl" [ref=e34] [cursor=pointer]:
          - generic [ref=e36]: nl
      - generic [ref=e38]:
        - button "Aanmelden" [ref=e39] [cursor=pointer]: Aanmelden
        - button "Maak een account aan" [ref=e40] [cursor=pointer]: Maak een account aan
  - generic [ref=e41]:
    - paragraph [ref=e44]:
      - generic [ref=e45]:
        - link "Startpagina" [ref=e46] [cursor=pointer]:
          - /url: /nl-nl
        - text: •
      - text: Hulp
    - generic [ref=e47]:
      - generic [ref=e53]:
        - heading "Hulpcentrum" [level=1] [ref=e54]
        - paragraph [ref=e56]: Alles wat je moet weten over je account, handelen en het platform.
      - generic [ref=e60]:
        - generic [ref=e62]:
          - heading "Mijn account" [level=3] [ref=e63]
          - paragraph [ref=e65]: Verificatie, accounttypes en gegevens bijwerken.
          - link "Meer informatie" [ref=e66] [cursor=pointer]:
            - /url: https://help.capitalccsv.com/hc/nl/categories/4416956531474-YOUR-ACCOUNT
            - generic [ref=e67]: Meer informatie
        - generic [ref=e69]:
          - heading "Stortingen en opnames" [level=3] [ref=e70]
          - paragraph [ref=e72]: Hoe u geld op uw rekening stort en opneemt.
          - link "Meer informatie" [ref=e73] [cursor=pointer]:
            - /url: https://help.capitalccsv.com/hc/nl/categories/4416949234962-DEPOSITS-WITHDRAWALS
            - generic [ref=e74]: Meer informatie
        - generic [ref=e76]:
          - heading "Platforms en grafieken" [level=3] [ref=e77]
          - paragraph [ref=e79]: Grafieken, indicatoren, tools, MT4 en TradingView.
          - link "Meer informatie" [ref=e80] [cursor=pointer]:
            - /url: https://help.capitalccsv.com/hc/nl/categories/19912620050834-Platforms-charts
            - generic [ref=e81]: Meer informatie
        - generic [ref=e83]:
          - heading "Handelen" [level=3] [ref=e84]
          - paragraph [ref=e86]: Kosten en tarieven, hefboomwerking en beschikbare markten.
          - link "Meer informatie" [ref=e87] [cursor=pointer]:
            - /url: https://help.capitalccsv.com/hc/nl/categories/4416956538002-Trading
            - generic [ref=e88]: Meer informatie
        - generic [ref=e90]:
          - heading "Updates" [level=3] [ref=e91]
          - paragraph [ref=e93]: Handelsuren, dividenden en marktupdates.
          - link "Meer informatie" [ref=e94] [cursor=pointer]:
            - /url: https://help.capitalccsv.com/hc/nl/categories/12206909035282-Updates
            - generic [ref=e95]: Meer informatie
        - generic [ref=e97]:
          - heading "Wat zijn margin calls?" [level=3] [ref=e98]
          - paragraph [ref=e100]: Wat ze zijn, hoe ze ontstaan en hoe u ermee omgaat.
          - link "Meer informatie" [ref=e101] [cursor=pointer]:
            - /url: /nl-nl/ways-to-trade/margin-calls
            - generic [ref=e102]: Meer informatie
      - generic [ref=e104]:
        - heading "Neem contact op" [level=2] [ref=e106]
        - generic [ref=e107]:
          - generic [ref=e109]:
            - heading "E-mail" [level=3] [ref=e110]
            - paragraph [ref=e112]:
              - link "support@capital.com" [ref=e113] [cursor=pointer]:
                - /url: mailto:support@capital.com
          - generic [ref=e115]:
            - heading "Telefoon" [level=3] [ref=e116]
            - paragraph [ref=e118]: +31 97010282820
          - generic [ref=e120]:
            - heading "Dien een verzoek in" [level=3] [ref=e121]
            - paragraph [ref=e123]:
              - text: Vindt u niet wat u zoekt?
              - link "Dien dan rechtstreeks" [ref=e124] [cursor=pointer]:
                - /url: https://help.capitalccsv.com/hc/nl/requests/new
              - text: een verzoek in.
      - generic [ref=e127]:
        - heading "Aan de slag in drie stappen" [level=2] [ref=e129]
        - generic [ref=e130]:
          - button [active] [ref=e132] [cursor=pointer]
          - generic [ref=e135]: 1. Maak uw account aan (mits u in aanmerking komt)
          - generic [ref=e136]: 2. Stort wanneer u wilt
          - generic [ref=e137]: 3. Handel als u er klaar voor bent
  - contentinfo [ref=e139]:
    - generic [ref=e140]:
      - link [ref=e141] [cursor=pointer]:
        - /url: /nl-nl
        - img [ref=e142]
      - generic [ref=e146]:
        - link [ref=e147] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e148] [cursor=pointer]:
          - /url: https://www.youtube.com/@Capitaltrading/videos
      - generic [ref=e149]:
        - link [ref=e150] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e151] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e152] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e153]:
      - generic [ref=e154]:
        - generic [ref=e155]:
          - generic [ref=e156]:
            - generic [ref=e157]: "Land / Regio:"
            - button [ref=e158] [cursor=pointer]
          - generic [ref=e160]: •
          - generic [ref=e161]:
            - generic [ref=e162]: "Taal:"
            - button [ref=e163] [cursor=pointer]
        - generic [ref=e164]:
          - generic [ref=e165]: "Ook kunt u contact met ons opnemen:"
          - link "+31 97010282820" [ref=e168] [cursor=pointer]:
            - /url: tel:+31 97010282820
            - strong [ref=e169]: +31 97010282820
            - strong
          - generic [ref=e170]: •
          - link "support@capital.com" [ref=e172] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e173]: support@capital.com
      - generic [ref=e174]:
        - generic [ref=e175]:
          - strong [ref=e177]: Handelen
          - generic [ref=e178]:
            - generic [ref=e179]:
              - generic [ref=e180]: Handelen
              - generic [ref=e181]:
                - link "CFD-handel" [ref=e183] [cursor=pointer]:
                  - /url: /nl-nl/ways-to-trade/cfd-trading
                - link "Knock-outs" [ref=e185] [cursor=pointer]:
                  - /url: /nl-nl/ways-to-trade/knock-outs
                - link "Demohandel" [ref=e187] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/demo-account
                - link "Professioneel" [ref=e189] [cursor=pointer]:
                  - /url: /nl-nl/professional-clients
            - generic [ref=e190]:
              - generic [ref=e191]: Handelsplatformen
              - generic [ref=e192]:
                - link "Webplatform" [ref=e194] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/web-platform
                - link "Mobiele apps" [ref=e196] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/mobile-apps
                - link "TradingView" [ref=e198] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/trading-view
                - link "MT4" [ref=e200] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/mt4
                - link "MT5" [ref=e202] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/mt5
            - generic [ref=e203]:
              - generic [ref=e204]: Leer
              - generic [ref=e205]:
                - link "Handelsstrategieën" [ref=e207] [cursor=pointer]:
                  - /url: /nl-nl/learn/trading-strategies
                - link "Technische analyse" [ref=e209] [cursor=pointer]:
                  - /url: /nl-nl/learn/technical-analysis
                - link "Handelspsychologie" [ref=e211] [cursor=pointer]:
                  - /url: /nl-nl/learn/trading-psychology
                - link "Leer" [ref=e213] [cursor=pointer]:
                  - /url: /nl-nl/learn
        - generic [ref=e214]:
          - strong [ref=e216]: Markten
          - generic [ref=e217]:
            - generic [ref=e218]:
              - generic [ref=e219]: Onze markten
              - generic [ref=e220]:
                - link "Markten" [ref=e222] [cursor=pointer]:
                  - /url: /nl-nl/markets
                - link "Forex" [ref=e224] [cursor=pointer]:
                  - /url: /nl-nl/markets/forex
                - link "Aandelen" [ref=e226] [cursor=pointer]:
                  - /url: /nl-nl/markets/shares
                - link "Indexen" [ref=e228] [cursor=pointer]:
                  - /url: /nl-nl/markets/indices
                - link "Grondstoffen" [ref=e230] [cursor=pointer]:
                  - /url: /nl-nl/markets/commodities
                - link "Cryptocurrencies" [ref=e232] [cursor=pointer]:
                  - /url: /nl-nl/markets/cryptocurrencies
                - link "Obligaties" [ref=e234] [cursor=pointer]:
                  - /url: /nl-nl/markets/bonds
                - link "Rentetarieven" [ref=e236] [cursor=pointer]:
                  - /url: /nl-nl/markets/interest-rates
            - generic [ref=e237]:
              - generic [ref=e238]: Marktinzichten
              - generic [ref=e239]:
                - link "Marktanalyse" [ref=e241] [cursor=pointer]:
                  - /url: /nl-nl/analysis
                - link "Markten prijsstelling" [ref=e243] [cursor=pointer]:
                  - /url: /nl-nl/about-us/how-our-markets-are-priced
        - link "Prijzen" [ref=e246] [cursor=pointer]:
          - /url: /nl-nl/ways-to-trade/fees-and-charges
          - strong [ref=e247]: Prijzen
        - generic [ref=e248]:
          - strong [ref=e250]: Informatie
          - generic [ref=e251]:
            - generic [ref=e252]:
              - generic [ref=e253]: Wie zijn wij
              - generic [ref=e254]:
                - link "Over" [ref=e256] [cursor=pointer]:
                  - /url: /nl-nl/about-us
                - link "Onze kantoren" [ref=e258] [cursor=pointer]:
                  - /url: /nl-nl/about-us/our-offices
                - link "Is Capital.com veilig?" [ref=e260] [cursor=pointer]:
                  - /url: /nl-nl/security-measures
                - link "Ons bedrijfsmodel" [ref=e262] [cursor=pointer]:
                  - /url: /nl-nl/about-us/how-capital-makes-money
            - generic [ref=e263]:
              - generic [ref=e264]: Werk met ons
              - link "Carrières" [ref=e267] [cursor=pointer]:
                - /url: /nl-nl/about-us/careers
            - generic [ref=e268]:
              - generic [ref=e269]: Hulp nodig?
              - generic [ref=e270]:
                - link "Hulp" [ref=e272] [cursor=pointer]:
                  - /url: /nl-nl/help
                - link "Kwetsbaarheid van de klant" [ref=e274] [cursor=pointer]:
                  - /url: /nl-nl/help/client-vulnerability
                - link "Neem contact op" [ref=e276] [cursor=pointer]:
                  - /url: /nl-nl/contact-us
            - generic [ref=e277]:
              - generic [ref=e278]: Juridische informatie
              - generic [ref=e279]:
                - link "Voorwaarden en beleid" [ref=e281] [cursor=pointer]:
                  - /url: /nl-nl/terms-and-policies
                - link "Klachtenprocedure - Capital Com Group Ltd" [ref=e283] [cursor=pointer]:
                  - /url: /nl-nl/terms-and-policies/complaints-procedure-cceu
                - link "Klachtenprocedure - Capital Com SV Investments Limited" [ref=e285] [cursor=pointer]:
                  - /url: /nl-nl/terms-and-policies/complaints-procedure
                - 'link "Compliance en regelgeving: Handel in CFD''s" [ref=e287] [cursor=pointer]':
                  - /url: /nl-nl/terms-and-policies/compliance-and-legals
    - generic [ref=e289]:
      - paragraph [ref=e290]:
        - text: CFD's zijn complexe instrumenten en houden vanwege de hefboomwerking een hoog risico in op grote verliezen.
        - generic [ref=e291]:
          - generic [ref=e292]:
            - strong [ref=e293]: 73% van de particuliere beleggers verliest geld bij de handel in CFD's met deze aanbieder
            - text: .
          - text: U moet nagaan of u wel degelijk begrijpt hoe CFD's werken en of u zich het hoge risico op geldverlies kunt veroorloven. Raadpleeg onze
          - link "risicoverklaring" [ref=e294] [cursor=pointer]:
            - /url: https://capital.com/risk-disclosure-policy
      - paragraph [ref=e295]:
        - text: "Waarschuwing: De waarde van aandelen en ETF's die u via een effectenrekening koopt, kan zowel dalen als stijgen. Dit betekent dat u mogelijk minder terugkrijgt dan u oorspronkelijk hebt ingelegd. Prestaties uit het verleden bieden geen garantie voor de toekomst."
        - text: Transacties in niet-leverbare over-the-counter-instrumenten, zoals knock-outopties en CFD's, zijn complexe financiële producten met een hoog risico op verlies van het volledige geïnvesteerde kapitaal. Aangezien deze producten zowel winsten als aanzienlijke verliezen kunnen opleveren, zijn ze niet geschikt voor elke belegger. U moet nagaan of u wel degelijk begrijpt hoe CFD's werken en of u zich het hoge risico op verlies kunt veroorloven.
        - text: Professionele klanten lopen het risico om meer te verliezen dan hun oorspronkelijke inleg. De informatie op deze website is van algemene aard en is niet afgestemd op uw financiële situatie, doelstellingen of behoeften. Raadpleeg onze juridische documenten en zorg ervoor dat u de risico's volledig begrijpt voordat u besluit om te handelen. Wij raden u aan om onze trainingen te volgen om een beter inzicht te krijgen in de risico's.
      - paragraph [ref=e296]: "Capital Com SV Investments Limited is een in Cyprus gevestigde onderneming met ondernemingsnummer HE 354252. Het bedrijf is erkend en staat onder toezicht van de Cyprus Securities and Exchange Commission (licentienummer 319/17). De maatschappelijke zetel bevindt zich op: Vasileiou Makedonos: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cyprus."
      - paragraph [ref=e297]: "Capital Com Group Ltd is een in Cyprus gevestigde onderneming met ondernemingsnummer ΗΕ 446198. Het bedrijf is erkend en staat onder toezicht van de Cyprus Securities and Exchange Commission (licentienummer 463/25). De maatschappelijke zetel bevindt zich op: Vasileiou Makedonos: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cyprus."
      - paragraph [ref=e298]: De informatie op deze site is niet bestemd voor inwoners van de Verenigde Staten, Canada en België of enig ander land buiten de EER, en is niet bedoeld voor distributie aan of gebruik door personen in enig land of rechtsgebied waar deze distributie of dit gebruik in strijd zou zijn met de plaatselijke wet- of regelgeving.
    - generic [ref=e299]:
      - paragraph [ref=e300]: © 2026 Capital Com SV Investments Limited
      - generic [ref=e301]:
        - link "Sitemap" [ref=e302] [cursor=pointer]:
          - /url: /nl-nl/sitemap
        - link "Cookie-instellingen" [ref=e303] [cursor=pointer]:
          - /url: ""
        - link "Regelgeving" [ref=e304] [cursor=pointer]:
          - /url: /nl-nl/terms-and-policies/regulations
        - link "Voorwaarden en beleid" [ref=e305] [cursor=pointer]:
          - /url: /nl-nl/terms-and-policies
        - link "Klachtenprocedure" [ref=e306] [cursor=pointer]:
          - /url: /nl-nl/terms-and-policies/complaints-procedures
  - generic [ref=e308]:
    - button "Close modal" [ref=e309] [cursor=pointer]
    - generic [ref=e310]:
      - generic [ref=e312]:
        - img [ref=e313]
        - list [ref=e317]:
          - listitem [ref=e318]:
            - generic [ref=e319]: Eén app. 5,500+ markten.
          - listitem [ref=e320]:
            - generic [ref=e321]: 24/7 ondersteuning in meer dan 10 talen
          - listitem [ref=e322]:
            - generic [ref=e323]: Meer dan 75 indicatoren voor technische analyse
          - listitem [ref=e324]:
            - generic [ref=e325]: Een gratis cursus traden om je kennis te verruimen
      - generic [ref=e326]:
        - generic [ref=e327]:
          - strong [ref=e328]: Registreren
          - paragraph [ref=e329]:
            - text: Heeft u al een account?
            - button "Aanmelden" [ref=e330] [cursor=pointer]:
              - generic [ref=e331]: Aanmelden
        - generic [ref=e333]:
          - generic [ref=e334]:
            - button "E-mailadres Voer een geldig e-mailadres in" [ref=e335] [cursor=pointer]:
              - button "E-mailadres" [ref=e336]:
                - generic [ref=e337]:
                  - textbox "email" [ref=e338]:
                    - /placeholder: " "
                  - generic: E-mailadres
              - generic:
                - generic:
                  - listitem:
                    - generic: Voer een geldig e-mailadres in
            - button "Wachtwoord • Ten minste één cijfer • Ten minste één kleine letter • Ten minste één speciaal teken • Ten minste één hoofd letter • Minimaal 8 tekens" [ref=e339] [cursor=pointer]:
              - button "Wachtwoord" [ref=e340]:
                - generic [ref=e341]:
                  - textbox "password" [ref=e342]:
                    - /placeholder: " "
                  - generic: Wachtwoord
              - generic:
                - generic:
                  - listitem:
                    - text: •
                    - generic: Ten minste één cijfer
                  - listitem:
                    - text: •
                    - generic: Ten minste één kleine letter
                  - listitem:
                    - text: •
                    - generic: Ten minste één speciaal teken
                  - listitem:
                    - text: •
                    - generic: Ten minste één hoofd letter
                  - listitem:
                    - text: •
                    - generic: Minimaal 8 tekens
          - button "Doorgaan" [ref=e343] [cursor=pointer]:
            - generic [ref=e344]: Doorgaan
        - generic [ref=e345]:
          - separator [ref=e346]
          - generic [ref=e347]: OF
        - generic [ref=e348]:
          - iframe [ref=e351]:
            - button "Sign in with Google. Opens in new tab" [ref=f1e3] [cursor=pointer]:
              - img [ref=f1e7]
          - button [ref=e352] [cursor=pointer]
        - paragraph [ref=e354]:
          - generic [ref=e355]:
            - text: Als ik een account aanmaak, bevestig ik dat ik het
            - strong [ref=e356]:
              - link "Privacybeleid" [ref=e357] [cursor=pointer]:
                - /url: /nl-nl/terms-and-policies
            - text: heb gelezen en begrepen
  - button [ref=e358] [cursor=pointer]
  - dialog "Cookie banner" [ref=e360]:
    - generic [ref=e361]:
      - paragraph [ref=e363]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e364] [cursor=pointer]:
          - /url: https://capital.com/cookies-policy-nl
          - text: Cookie Policy
        - text: .
      - generic [ref=e365]:
        - button "Reject all" [ref=e366] [cursor=pointer]
        - button "Allow all cookies" [ref=e367] [cursor=pointer]
        - button "Cookie settings" [ref=e368] [cursor=pointer]
  - alert [ref=e369]
```

# Test source

```ts
  6   | import { WrongLocationModal } from '../page-objects/modal-windows/WrongLocationModal';
  7   | import { ImportantNoticeModal } from '../page-objects/modal-windows/ImportantNoticeModal';
  8   | import { RegionalSettingsModal } from '../page-objects/modal-windows/RegionalSettingsModal';
  9   | import { LoginModal } from '../page-objects/modal-windows/LoginModal';
  10  | import { SignUpModal } from '../page-objects/modal-windows/SignUpModal';
  11  | import { storageStateFor, UserState } from '../config/auth';
  12  | import { TIMEOUTS } from '../config/timeouts';
  13  | 
  14  | type Fixtures = {
  15  |     appLocale: Locale;
  16  |     appUserState: UserState;
  17  |     header: Header;
  18  |     wrongLocationModal: WrongLocationModal;
  19  |     importantNoticeModal: ImportantNoticeModal;
  20  |     regionalSettingsModal: RegionalSettingsModal;
  21  |     loginModal: LoginModal;
  22  |     signUpModal: SignUpModal;
  23  |     contentPage: ContentPage;
  24  |     dismissInterstitials: () => Promise<void>;
  25  | };
  26  | 
  27  | export const test = base.extend<Fixtures>({
  28  |     appLocale: [locales[0], { option: true }],
  29  |     appUserState: ['unregistered', { option: true }],
  30  | 
  31  |     header: async ({ page, appLocale: locale }, use) => {
  32  |         await use(new Header(page, locale));
  33  |     },
  34  | 
  35  |     wrongLocationModal: async ({ page }, use) => {
  36  |         await use(new WrongLocationModal(page));
  37  |     },
  38  | 
  39  |     importantNoticeModal: async ({ page }, use) => {
  40  |         await use(new ImportantNoticeModal(page));
  41  |     },
  42  | 
  43  |     regionalSettingsModal: async ({ page }, use) => {
  44  |         await use(new RegionalSettingsModal(page));
  45  |     },
  46  | 
  47  |     loginModal: async ({ page }, use) => {
  48  |         await use(new LoginModal(page));
  49  |     },
  50  | 
  51  |     signUpModal: async ({ page }, use) => {
  52  |         await use(new SignUpModal(page));
  53  |     },
  54  | 
  55  |     contentPage: async ({ page, appLocale }, use) => {
  56  |         await use(new ContentPage(page, appLocale.home));
  57  |     },
  58  | 
  59  |     dismissInterstitials: async ({ appLocale, wrongLocationModal, importantNoticeModal }, use) => {
  60  |         await use(async () => {
  61  |             await wrongLocationModal.stayHereIfVisible();
  62  |             if (appLocale.license === 'SCB') {
  63  |                 await importantNoticeModal.confirmIfVisible();
  64  |             }
  65  |         });
  66  |     },
  67  | });
  68  | 
  69  | export { expect };
  70  | 
  71  | export function describePerLocaleState(
  72  |     title: string,
  73  |     states: UserState[],
  74  |     body: (locale: Locale, state: UserState) => void,
  75  |     filter: LocaleFilter = {},
  76  | ): void {
  77  |     for (const state of states) {
  78  |         for (const locale of selectLocales(filter)) {
  79  |             const label = `${locale.license} ${locale.language} | ${state}`;
  80  |             test.describe(
  81  |                 `[${label}] ${title}`,
  82  |                 { tag: [`@${locale.license}`, `@${locale.language}`, `@${state}`] },
  83  |                 () => {
  84  |                     test.use({
  85  |                         appLocale: locale,
  86  |                         appUserState: state,
  87  |                         storageState: storageStateFor(state),
  88  |                     });
  89  |                     body(locale, state);
  90  |                 },
  91  |             );
  92  |         }
  93  |     }
  94  | }
  95  | 
  96  | export async function clickUntilUrl(
  97  |     page: Page,
  98  |     click: () => Promise<void>,
  99  |     url: RegExp,
  100 | ): Promise<void> {
  101 |     await expect(async () => {
  102 |         if (!url.test(page.url())) {
  103 |             await click();
  104 |         }
  105 |         await expect(page).toHaveURL(url, { timeout: TIMEOUTS.ctaResponse });
> 106 |     }).toPass({ timeout: TIMEOUTS.navigation });
      |        ^ Error: expect(page).toHaveURL(expected) failed
  107 | }
  108 | 
  109 | export async function clickUntilVisible(
  110 |     click: () => Promise<void>,
  111 |     target: Locator,
  112 | ): Promise<void> {
  113 |     await expect(async () => {
  114 |         if (!(await target.isVisible())) {
  115 |             await click();
  116 |         }
  117 |         await expect(target).toBeVisible({ timeout: TIMEOUTS.ctaResponse });
  118 |     }).toPass({ timeout: TIMEOUTS.navigation });
  119 | }
  120 | 
```