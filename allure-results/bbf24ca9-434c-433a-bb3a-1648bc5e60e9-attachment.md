# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/trading.spec.ts >> [CYSEC NL | authorized] Trading / Learn / Trading strategies >> [background_banner_block_btn2_demo] -> platformPage
- Location: src/fixtures/content-section.ts:41:25

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/trading\/platform\//
Received string:  "https://capital.com/nl-nl/learn/trading-strategies"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://capital.com/nl-nl/learn/trading-strategies"


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
      - generic [ref=e47]:
        - link "Leer" [ref=e48] [cursor=pointer]:
          - /url: /nl-nl/learn
        - text: •
      - text: Handelsstrategieën
    - generic [ref=e49]:
      - generic [ref=e53]:
        - generic [ref=e54]:
          - heading "Handelsstrategieën" [level=1] [ref=e55]
          - paragraph [ref=e57]: Een goede handelsstrategie is essentieel als u zich op de risicovolle financiële markten wilt begeven. Fris uw technieken op met de onderstaande handelsstrategieën en gidsen.
        - generic [ref=e58]:
          - button "Account aanmaken" [ref=e59] [cursor=pointer]
          - button "Demo-account proberen" [active] [ref=e60] [cursor=pointer]
      - generic [ref=e64]:
        - generic [ref=e65]:
          - heading "Populaire handelsstrategieën" [level=2] [ref=e66]
          - generic [ref=e67]: Verruim uw kennis met onze uitgebreide strategiegidsen.
        - generic [ref=e68]:
          - generic [ref=e70]:
            - heading "Swing trading" [level=3] [ref=e71]
            - paragraph [ref=e73]: Ontdek de belangrijkste technieken van deze strategie voor de middellange termijn.
            - link "Gids voor swing trading" [ref=e74] [cursor=pointer]:
              - /url: https://capital.com/nl-nl/learn/trading-strategies/swing-trading
              - generic [ref=e75]: Gids voor swing trading
          - generic [ref=e77]:
            - heading "Positiehandel" [level=3] [ref=e78]
            - paragraph [ref=e80]: Verken de principes van langetermijnposities.
            - link "Gids voor de positiehandel" [ref=e81] [cursor=pointer]:
              - /url: https://capital.com/nl-nl/learn/trading-strategies/position-trading
              - generic [ref=e82]: Gids voor de positiehandel
          - generic [ref=e84]:
            - heading "Trendhandel" [level=3] [ref=e85]
            - paragraph [ref=e87]: Ontdek hoe u markttrends kunt identificeren, controleren en erop kunt inspelen.
            - link "Gids voor de trendhandel" [ref=e88] [cursor=pointer]:
              - /url: https://capital.com/nl-nl/learn/trading-strategies/trend-trading
              - generic [ref=e89]: Gids voor de trendhandel
          - generic [ref=e91]:
            - heading "Daytrading" [level=3] [ref=e92]
            - paragraph [ref=e94]: Ontdek de basisprincipes rond het openen en sluiten van posities in de loop van één dag.
            - link "Gids voor daytrading" [ref=e95] [cursor=pointer]:
              - /url: "https://capital.com/nl-nl/learn/trading-strategies/day-trading\t"
              - generic [ref=e96]: Gids voor daytrading
      - generic [ref=e98]:
        - generic [ref=e99]:
          - heading "Onze populairste handelsgidsen" [level=2] [ref=e100]
          - generic [ref=e101]: Leer de belangrijkste principes van marge, handelen en beleggen.
        - generic [ref=e102]:
          - generic [ref=e104]:
            - heading "Handelen met marge" [level=3] [ref=e105]
            - paragraph [ref=e107]: Als u handelt met geleend geld (marge), moet u strategisch te werk gaan.
            - link "Gids voor margehandel" [ref=e108] [cursor=pointer]:
              - /url: https://capital.com/nl-nl/learn/trading-strategies/margin-trading
              - generic [ref=e109]: Gids voor margehandel
          - generic [ref=e111]:
            - heading "Gids handelen vs beleggen" [level=3] [ref=e112]
            - paragraph [ref=e114]: Ontdek de belangrijkste verschillen tussen handelen en beleggen.
            - link "Handelen vs beleggen" [ref=e115] [cursor=pointer]:
              - /url: https://capital.com/nl-nl/learn/trading-strategies/trading-vs-investing
              - generic [ref=e116]: Handelen vs beleggen
      - generic [ref=e118]:
        - generic [ref=e119]:
          - heading "Verruim uw handelskennis" [level=2] [ref=e120]
          - generic [ref=e121]: Ontdek meer hulpbronnen en optimaliseer uw strategieën en P&L.
        - generic [ref=e122]:
          - generic [ref=e124]:
            - heading "Technische analyse" [level=3] [ref=e125]
            - paragraph [ref=e127]: Ontdek wat voortschrijdende gemiddelden zijn en identificeer interessante patronen en strategieën met onze gidsen voor technische analyse.
            - link "Bekijk de gidsen voor technische analyse" [ref=e128] [cursor=pointer]:
              - /url: https://capital.com/nl-nl/learn/technical-analysis
              - generic [ref=e129]: Bekijk de gidsen voor technische analyse
          - generic [ref=e131]:
            - heading "Marktanalyse" [level=3] [ref=e132]
            - paragraph [ref=e134]:
              - text: Raadpleeg onze
              - link "analysesectie" [ref=e135] [cursor=pointer]:
                - /url: https://capital.com/nl-nl/analysis
              - text: voor meer handelsstrategieën.
              - strong
            - link "Bekijk onze analyse" [ref=e136] [cursor=pointer]:
              - /url: https://capital.com/nl-nl/analysis
              - generic [ref=e137]: Bekijk onze analyse
      - generic [ref=e140]:
        - heading "Aan de slag in drie stappen" [level=2] [ref=e142]
        - generic [ref=e143]:
          - button [ref=e145] [cursor=pointer]
          - generic [ref=e148]: 1. Maak uw account aan (mits u in aanmerking komt)
          - generic [ref=e149]: 2. Stort wanneer u wilt
          - generic [ref=e150]: 3. Handel als u er klaar voor bent
  - contentinfo [ref=e152]:
    - generic [ref=e153]:
      - link [ref=e154] [cursor=pointer]:
        - /url: /nl-nl
        - img [ref=e155]
      - generic [ref=e159]:
        - link [ref=e160] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e161] [cursor=pointer]:
          - /url: https://www.youtube.com/@Capitaltrading/videos
      - generic [ref=e162]:
        - link [ref=e163] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e164] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e165] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e166]:
      - generic [ref=e167]:
        - generic [ref=e168]:
          - generic [ref=e169]:
            - generic [ref=e170]: "Land / Regio:"
            - button [ref=e171] [cursor=pointer]
          - generic [ref=e173]: •
          - generic [ref=e174]:
            - generic [ref=e175]: "Taal:"
            - button [ref=e176] [cursor=pointer]
        - generic [ref=e177]:
          - generic [ref=e178]: "Ook kunt u contact met ons opnemen:"
          - link "+31 97010282820" [ref=e181] [cursor=pointer]:
            - /url: tel:+31 97010282820
            - strong [ref=e182]: +31 97010282820
            - strong
          - generic [ref=e183]: •
          - link "support@capital.com" [ref=e185] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e186]: support@capital.com
      - generic [ref=e187]:
        - generic [ref=e188]:
          - strong [ref=e190]: Handelen
          - generic [ref=e191]:
            - generic [ref=e192]:
              - generic [ref=e193]: Handelen
              - generic [ref=e194]:
                - link "CFD-handel" [ref=e196] [cursor=pointer]:
                  - /url: /nl-nl/ways-to-trade/cfd-trading
                - link "Knock-outs" [ref=e198] [cursor=pointer]:
                  - /url: /nl-nl/ways-to-trade/knock-outs
                - link "Demohandel" [ref=e200] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/demo-account
                - link "Professioneel" [ref=e202] [cursor=pointer]:
                  - /url: /nl-nl/professional-clients
            - generic [ref=e203]:
              - generic [ref=e204]: Handelsplatformen
              - generic [ref=e205]:
                - link "Webplatform" [ref=e207] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/web-platform
                - link "Mobiele apps" [ref=e209] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/mobile-apps
                - link "TradingView" [ref=e211] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/trading-view
                - link "MT4" [ref=e213] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/mt4
                - link "MT5" [ref=e215] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/mt5
            - generic [ref=e216]:
              - generic [ref=e217]: Leer
              - generic [ref=e218]:
                - link "Handelsstrategieën" [ref=e220] [cursor=pointer]:
                  - /url: /nl-nl/learn/trading-strategies
                - link "Technische analyse" [ref=e222] [cursor=pointer]:
                  - /url: /nl-nl/learn/technical-analysis
                - link "Handelspsychologie" [ref=e224] [cursor=pointer]:
                  - /url: /nl-nl/learn/trading-psychology
                - link "Leer" [ref=e226] [cursor=pointer]:
                  - /url: /nl-nl/learn
        - generic [ref=e227]:
          - strong [ref=e229]: Markten
          - generic [ref=e230]:
            - generic [ref=e231]:
              - generic [ref=e232]: Onze markten
              - generic [ref=e233]:
                - link "Markten" [ref=e235] [cursor=pointer]:
                  - /url: /nl-nl/markets
                - link "Forex" [ref=e237] [cursor=pointer]:
                  - /url: /nl-nl/markets/forex
                - link "Aandelen" [ref=e239] [cursor=pointer]:
                  - /url: /nl-nl/markets/shares
                - link "Indexen" [ref=e241] [cursor=pointer]:
                  - /url: /nl-nl/markets/indices
                - link "Grondstoffen" [ref=e243] [cursor=pointer]:
                  - /url: /nl-nl/markets/commodities
                - link "Cryptocurrencies" [ref=e245] [cursor=pointer]:
                  - /url: /nl-nl/markets/cryptocurrencies
                - link "Obligaties" [ref=e247] [cursor=pointer]:
                  - /url: /nl-nl/markets/bonds
                - link "Rentetarieven" [ref=e249] [cursor=pointer]:
                  - /url: /nl-nl/markets/interest-rates
            - generic [ref=e250]:
              - generic [ref=e251]: Marktinzichten
              - generic [ref=e252]:
                - link "Marktanalyse" [ref=e254] [cursor=pointer]:
                  - /url: /nl-nl/analysis
                - link "Markten prijsstelling" [ref=e256] [cursor=pointer]:
                  - /url: /nl-nl/about-us/how-our-markets-are-priced
        - link "Prijzen" [ref=e259] [cursor=pointer]:
          - /url: /nl-nl/ways-to-trade/fees-and-charges
          - strong [ref=e260]: Prijzen
        - generic [ref=e261]:
          - strong [ref=e263]: Informatie
          - generic [ref=e264]:
            - generic [ref=e265]:
              - generic [ref=e266]: Wie zijn wij
              - generic [ref=e267]:
                - link "Over" [ref=e269] [cursor=pointer]:
                  - /url: /nl-nl/about-us
                - link "Onze kantoren" [ref=e271] [cursor=pointer]:
                  - /url: /nl-nl/about-us/our-offices
                - link "Is Capital.com veilig?" [ref=e273] [cursor=pointer]:
                  - /url: /nl-nl/security-measures
                - link "Ons bedrijfsmodel" [ref=e275] [cursor=pointer]:
                  - /url: /nl-nl/about-us/how-capital-makes-money
            - generic [ref=e276]:
              - generic [ref=e277]: Werk met ons
              - link "Carrières" [ref=e280] [cursor=pointer]:
                - /url: /nl-nl/about-us/careers
            - generic [ref=e281]:
              - generic [ref=e282]: Hulp nodig?
              - generic [ref=e283]:
                - link "Hulp" [ref=e285] [cursor=pointer]:
                  - /url: /nl-nl/help
                - link "Kwetsbaarheid van de klant" [ref=e287] [cursor=pointer]:
                  - /url: /nl-nl/help/client-vulnerability
                - link "Neem contact op" [ref=e289] [cursor=pointer]:
                  - /url: /nl-nl/contact-us
            - generic [ref=e290]:
              - generic [ref=e291]: Juridische informatie
              - generic [ref=e292]:
                - link "Voorwaarden en beleid" [ref=e294] [cursor=pointer]:
                  - /url: /nl-nl/terms-and-policies
                - link "Klachtenprocedure - Capital Com Group Ltd" [ref=e296] [cursor=pointer]:
                  - /url: /nl-nl/terms-and-policies/complaints-procedure-cceu
                - link "Klachtenprocedure - Capital Com SV Investments Limited" [ref=e298] [cursor=pointer]:
                  - /url: /nl-nl/terms-and-policies/complaints-procedure
                - 'link "Compliance en regelgeving: Handel in CFD''s" [ref=e300] [cursor=pointer]':
                  - /url: /nl-nl/terms-and-policies/compliance-and-legals
    - generic [ref=e302]:
      - paragraph [ref=e303]:
        - text: CFD's zijn complexe instrumenten en houden vanwege de hefboomwerking een hoog risico in op grote verliezen.
        - generic [ref=e304]:
          - generic [ref=e305]:
            - strong [ref=e306]: 73% van de particuliere beleggers verliest geld bij de handel in CFD's met deze aanbieder
            - text: .
          - text: U moet nagaan of u wel degelijk begrijpt hoe CFD's werken en of u zich het hoge risico op geldverlies kunt veroorloven. Raadpleeg onze
          - link "risicoverklaring" [ref=e307] [cursor=pointer]:
            - /url: https://capital.com/risk-disclosure-policy
      - paragraph [ref=e308]:
        - text: "Waarschuwing: De waarde van aandelen en ETF's die u via een effectenrekening koopt, kan zowel dalen als stijgen. Dit betekent dat u mogelijk minder terugkrijgt dan u oorspronkelijk hebt ingelegd. Prestaties uit het verleden bieden geen garantie voor de toekomst."
        - text: Transacties in niet-leverbare over-the-counter-instrumenten, zoals knock-outopties en CFD's, zijn complexe financiële producten met een hoog risico op verlies van het volledige geïnvesteerde kapitaal. Aangezien deze producten zowel winsten als aanzienlijke verliezen kunnen opleveren, zijn ze niet geschikt voor elke belegger. U moet nagaan of u wel degelijk begrijpt hoe CFD's werken en of u zich het hoge risico op verlies kunt veroorloven.
        - text: Professionele klanten lopen het risico om meer te verliezen dan hun oorspronkelijke inleg. De informatie op deze website is van algemene aard en is niet afgestemd op uw financiële situatie, doelstellingen of behoeften. Raadpleeg onze juridische documenten en zorg ervoor dat u de risico's volledig begrijpt voordat u besluit om te handelen. Wij raden u aan om onze trainingen te volgen om een beter inzicht te krijgen in de risico's.
      - paragraph [ref=e309]: "Capital Com SV Investments Limited is een in Cyprus gevestigde onderneming met ondernemingsnummer HE 354252. Het bedrijf is erkend en staat onder toezicht van de Cyprus Securities and Exchange Commission (licentienummer 319/17). De maatschappelijke zetel bevindt zich op: Vasileiou Makedonos: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cyprus."
      - paragraph [ref=e310]: "Capital Com Group Ltd is een in Cyprus gevestigde onderneming met ondernemingsnummer ΗΕ 446198. Het bedrijf is erkend en staat onder toezicht van de Cyprus Securities and Exchange Commission (licentienummer 463/25). De maatschappelijke zetel bevindt zich op: Vasileiou Makedonos: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cyprus."
      - paragraph [ref=e311]: De informatie op deze site is niet bestemd voor inwoners van de Verenigde Staten, Canada en België of enig ander land buiten de EER, en is niet bedoeld voor distributie aan of gebruik door personen in enig land of rechtsgebied waar deze distributie of dit gebruik in strijd zou zijn met de plaatselijke wet- of regelgeving.
    - generic [ref=e312]:
      - paragraph [ref=e313]: © 2026 Capital Com SV Investments Limited
      - generic [ref=e314]:
        - link "Sitemap" [ref=e315] [cursor=pointer]:
          - /url: /nl-nl/sitemap
        - link "Cookie-instellingen" [ref=e316] [cursor=pointer]:
          - /url: ""
        - link "Regelgeving" [ref=e317] [cursor=pointer]:
          - /url: /nl-nl/terms-and-policies/regulations
        - link "Voorwaarden en beleid" [ref=e318] [cursor=pointer]:
          - /url: /nl-nl/terms-and-policies
        - link "Klachtenprocedure" [ref=e319] [cursor=pointer]:
          - /url: /nl-nl/terms-and-policies/complaints-procedures
  - generic [ref=e321]:
    - button "Close modal" [ref=e322] [cursor=pointer]
    - generic [ref=e323]:
      - generic [ref=e325]:
        - img [ref=e326]
        - list [ref=e330]:
          - listitem [ref=e331]:
            - generic [ref=e332]: Eén app. 5,500+ markten.
          - listitem [ref=e333]:
            - generic [ref=e334]: 24/7 ondersteuning in meer dan 10 talen
          - listitem [ref=e335]:
            - generic [ref=e336]: Meer dan 75 indicatoren voor technische analyse
          - listitem [ref=e337]:
            - generic [ref=e338]: Een gratis cursus traden om je kennis te verruimen
      - generic [ref=e339]:
        - generic [ref=e340]:
          - strong [ref=e341]: Registreren
          - paragraph [ref=e342]:
            - text: Heeft u al een account?
            - button "Aanmelden" [ref=e343] [cursor=pointer]:
              - generic [ref=e344]: Aanmelden
        - generic [ref=e346]:
          - generic [ref=e347]:
            - button "E-mailadres Voer een geldig e-mailadres in" [ref=e348] [cursor=pointer]:
              - button "E-mailadres" [ref=e349]:
                - generic [ref=e350]:
                  - textbox "email" [ref=e351]:
                    - /placeholder: " "
                  - generic: E-mailadres
              - generic:
                - generic:
                  - listitem:
                    - generic: Voer een geldig e-mailadres in
            - button "Wachtwoord • Ten minste één cijfer • Ten minste één kleine letter • Ten minste één speciaal teken • Ten minste één hoofd letter • Minimaal 8 tekens" [ref=e352] [cursor=pointer]:
              - button "Wachtwoord" [ref=e353]:
                - generic [ref=e354]:
                  - textbox "password" [ref=e355]:
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
          - button "Doorgaan" [ref=e356] [cursor=pointer]:
            - generic [ref=e357]: Doorgaan
        - generic [ref=e358]:
          - separator [ref=e359]
          - generic [ref=e360]: OF
        - generic [ref=e361]:
          - iframe [ref=e364]:
            - button "Sign in with Google. Opens in new tab" [ref=f1e3] [cursor=pointer]:
              - img [ref=f1e7]
          - button [ref=e365] [cursor=pointer]
        - paragraph [ref=e367]:
          - generic [ref=e368]:
            - text: Als ik een account aanmaak, bevestig ik dat ik het
            - strong [ref=e369]:
              - link "Privacybeleid" [ref=e370] [cursor=pointer]:
                - /url: /nl-nl/terms-and-policies
            - text: heb gelezen en begrepen
  - button [ref=e371] [cursor=pointer]
  - dialog "Cookie banner" [ref=e373]:
    - generic [ref=e374]:
      - paragraph [ref=e376]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e377] [cursor=pointer]:
          - /url: https://capital.com/cookies-policy-nl
          - text: Cookie Policy
        - text: .
      - generic [ref=e378]:
        - button "Reject all" [ref=e379] [cursor=pointer]
        - button "Allow all cookies" [ref=e380] [cursor=pointer]
        - button "Cookie settings" [ref=e381] [cursor=pointer]
  - alert [ref=e382]
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