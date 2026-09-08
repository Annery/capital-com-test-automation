# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: header/header-navigation.spec.ts >> [CYSEC RO | authorized] Header navigation >> Logo opens main page
- Location: tests/header/header-navigation.spec.ts:5:9

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('button[data-type="wrong_location_cancel"]') to be hidden
    13 × locator resolved to visible <button color="black" type="button" data-type="wrong_location_cancel" class="rZW9e cCezE mdnI js-analyticsClick">Rămâneți aici</button>

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]:
      - text: CFD-urile sunt instrumente complexe și au un risc ridicat de a pierde rapid bani din cauza efectului de levier.
      - generic [ref=e8]:
        - generic [ref=e9]:
          - strong [ref=e10]: 73% din conturile investitorilor de retail pierd bani atunci când tranzacționează CFD-uri cu acest furnizor
          - text: .
        - text: Ar trebui să luați în considerare dacă înțelegeți modul în care funcționează CFDurile și dacă vă puteți permite să vă asumați riscul ridicat de a vă pierde banii. Consultați
        - link "Declarația noastră deinformare privind riscurile" [ref=e11]:
          - /url: https://capital.com/risk-disclosure-policy
    - generic [ref=e13]:
      - link [ref=e14]:
        - /url: /ro-ro
        - img [ref=e15]
      - generic [ref=e20]:
        - navigation [ref=e21]:
          - button "Tranzacționare" [ref=e22]:
            - button "Tranzacționare" [ref=e23]:
              - generic [ref=e24]: Tranzacționare
          - button "Pieţe" [ref=e25]:
            - button "Pieţe" [ref=e26]:
              - generic [ref=e27]: Pieţe
          - link "Prețuri" [ref=e30]:
            - /url: /ro-ro/ways-to-trade/fees-and-charges
          - button "Despre noi" [ref=e31]:
            - button "Despre noi" [ref=e32]:
              - generic [ref=e33]: Despre noi
        - button "ro" [ref=e34] [cursor=pointer]:
          - generic [ref=e36]: ro
      - link "Platformă deschisă" [ref=e38] [cursor=pointer]:
        - /url: /trading/platform/
  - generic [ref=e39]:
    - paragraph [ref=e42]:
      - generic [ref=e43]:
        - link "Acasă" [ref=e44]:
          - /url: /ro-ro
        - text: •
      - text: Profesionist
    - generic [ref=e45]:
      - generic [ref=e49]:
        - generic [ref=e50]:
          - heading "Tranzacționare profesionistă de CFD-uri" [level=1] [ref=e51]
          - paragraph [ref=e53]: Termeni profesioniști pentru clienți pentru traderi experimentați și eligibili. Se aplică protecții reduse față de cele oferite clienților de retail.
          - button "Aplică" [ref=e55] [cursor=pointer]
        - img "laptop" [ref=e58]
      - generic [ref=e60]:
        - generic [ref=e61]:
          - heading "Criterii de eligibilitate" [level=2] [ref=e62]
          - generic [ref=e63]: Clasificarea drept client profesionist necesită îndeplinirea a cel puțin două dintre următoarele trei criterii.
        - generic [ref=e64]:
          - generic [ref=e66]:
            - heading "#1" [level=3] [ref=e67]
            - paragraph [ref=e69]: O medie de 10 tranzacţii de dimensiuni semnificative pe trimestru, pe piaţa relevantă, în ultimul an.
          - generic [ref=e71]:
            - heading "#2" [level=3] [ref=e72]
            - paragraph [ref=e74]: Un portofoliu de investiţii lichide de peste 500.000 EUR.
          - generic [ref=e76]:
            - heading "#3" [level=3] [ref=e77]
            - paragraph [ref=e79]: Cel puțin un an de experiență profesională în sectorul financiar, implicând produse sau servicii cu efect de levier
      - generic [ref=e81]:
        - generic [ref=e82]:
          - heading "Solicitarea statutului de profesionist" [level=2] [ref=e83]
          - paragraph [ref=e85]: Cererile sunt evaluate și confirmarea este trimisă prin e-mail.
        - generic [ref=e86]:
          - generic [ref=e87]:
            - generic [ref=e88]:
              - generic [ref=e89]:
                - heading "Nou pe Capital.com" [level=2] [ref=e90]
                - list [ref=e92]:
                  - listitem [ref=e93]: Descărcați aplicația de tranzacționare Capital·com
                  - listitem [ref=e94]: Deschideți și verificați un cont de retail
                  - listitem [ref=e95]: În aplicație, selectați bannerul de pe ecranul principal și completați cererea
              - generic [ref=e97]:
                - img "QR code" [ref=e99]
                - generic [ref=e100]: Scan to Download
            - img "Image" [ref=e103]
          - generic [ref=e104]:
            - generic [ref=e105]:
              - generic [ref=e106]:
                - heading "Cont existent" [level=2] [ref=e107]
                - list [ref=e109]:
                  - listitem [ref=e110]: Conectați-vă la aplicație sau la platforma web
                  - listitem [ref=e111]: Accesați „Cont” sau selectați „Live” în colțul din dreapta sus
                  - listitem [ref=e112]: Selectați „Actualizare la Pro” și completați cererea
              - generic [ref=e114]:
                - img "QR code" [ref=e116]
                - generic [ref=e117]: Scan to Download
            - img "Image" [ref=e120]
      - generic [ref=e122]:
        - heading "Serviciu Clienți" [level=2] [ref=e124]
        - generic [ref=e130]:
          - generic [ref=e131]:
            - strong [ref=e132]: Asistență 24/7
            - paragraph [ref=e134]: Pentru mai multe informații despre condițiile contului Profesionist, contactați echipa de asistență.
          - link "Contactați-ne" [ref=e136] [cursor=pointer]:
            - /url: /ro-ro/contact-us
  - contentinfo [ref=e138]:
    - generic [ref=e139]:
      - link [ref=e140]:
        - /url: /ro-ro
        - img [ref=e141]
      - generic [ref=e145]:
        - link [ref=e146]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=181d0c80-c55c-4555-8cf6-97ff4022800f&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e147]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=181d0c80-c55c-4555-8cf6-97ff4022800f&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e148]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=181d0c80-c55c-4555-8cf6-97ff4022800f&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e149]:
      - generic [ref=e150]:
        - generic [ref=e151]:
          - generic [ref=e152]:
            - generic [ref=e153]: "Țară / Regiune:"
            - button [ref=e154] [cursor=pointer]
          - generic [ref=e156]: •
          - generic [ref=e157]:
            - generic [ref=e158]: "Limbă:"
            - button [ref=e159] [cursor=pointer]
        - generic [ref=e160]:
          - generic [ref=e161]: "De asemenea, ne puteți contacta:"
          - link "+357 25123646" [ref=e164]:
            - /url: tel:+357 25123646
            - strong [ref=e165]: +357 25123646
            - strong
          - generic [ref=e166]: •
          - link "support@capital.com" [ref=e168]:
            - /url: mailto:support@capital.com
            - strong [ref=e169]: support@capital.com
      - generic [ref=e170]:
        - generic [ref=e171]:
          - strong [ref=e173]: Tranzacționare
          - generic [ref=e174]:
            - generic [ref=e175]:
              - generic [ref=e176]: Tranzacționare
              - generic [ref=e177]:
                - link "Tranzacționare CFD" [ref=e179]:
                  - /url: /ro-ro/ways-to-trade/cfd-trading
                - link "Knock-out-uri" [ref=e181]:
                  - /url: /ro-ro/ways-to-trade/knock-outs
                - link "Tranzacționare demo" [ref=e183]:
                  - /url: /ro-ro/trading-platforms/demo-account
                - link "Profesionist" [ref=e185]:
                  - /url: /ro-ro/professional-clients
            - generic [ref=e186]:
              - generic [ref=e187]: Platforme de tranzacționare
              - generic [ref=e188]:
                - link "Platformă web" [ref=e190]:
                  - /url: /ro-ro/trading-platforms/web-platform
                - link "Aplicații mobile" [ref=e192]:
                  - /url: /ro-ro/trading-platforms/mobile-apps
                - link "TradingView" [ref=e194]:
                  - /url: /ro-ro/trading-platforms/trading-view
                - link "MT4" [ref=e196]:
                  - /url: /ro-ro/trading-platforms/mt4
                - link "MT5" [ref=e198]:
                  - /url: /ro-ro/trading-platforms/mt5
            - generic [ref=e199]:
              - generic [ref=e200]: Învățați
              - link "Învățați" [ref=e203]:
                - /url: /ro-ro/learn
        - generic [ref=e204]:
          - strong [ref=e206]: Pieţe
          - generic [ref=e207]:
            - generic [ref=e208]:
              - generic [ref=e209]: Informații despre piață
              - generic [ref=e210]:
                - link "Prețurile piețelor" [ref=e212]:
                  - /url: /ro-ro/about-us/how-our-markets-are-priced
                - link "Analiza pieței" [ref=e214]:
                  - /url: /ro-ro/analysis
            - generic [ref=e215]:
              - generic [ref=e216]: Piețele noastre
              - generic [ref=e217]:
                - link "Pieţe" [ref=e219]:
                  - /url: /ro-ro/markets
                - link "Forex" [ref=e221]:
                  - /url: /ro-ro/markets/forex
                - link "Acțiuni" [ref=e223]:
                  - /url: /ro-ro/markets/shares
                - link "Indici" [ref=e225]:
                  - /url: /ro-ro/markets/indices
                - link "Mărfuri" [ref=e227]:
                  - /url: /ro-ro/markets/commodities
                - link "Criptomonede" [ref=e229]:
                  - /url: /ro-ro/markets/cryptocurrencies
                - link "Obligațiuni" [ref=e231]:
                  - /url: /ro-ro/markets/bonds
                - link "Rate ale dobânzii" [ref=e233]:
                  - /url: /ro-ro/markets/interest-rates
        - link "Prețuri" [ref=e236]:
          - /url: /ro-ro/ways-to-trade/fees-and-charges
          - strong [ref=e237]: Prețuri
        - generic [ref=e238]:
          - strong [ref=e240]: Despre noi
          - generic [ref=e241]:
            - generic [ref=e242]:
              - generic [ref=e243]: Cine suntem
              - generic [ref=e244]:
                - link "Despre" [ref=e246]:
                  - /url: /ro-ro/about-us
                - link "Birourile noastre" [ref=e248]:
                  - /url: /ro-ro/about-us/our-offices
                - link "Capital.com este sigur?" [ref=e250]:
                  - /url: /ro-ro/security-measures
                - link "Modelul nostru de afaceri" [ref=e252]:
                  - /url: /ro-ro/about-us/how-capital-makes-money
            - generic [ref=e253]:
              - generic [ref=e254]: Lucrați cu noi
              - link "Cariere" [ref=e257]:
                - /url: /ro-ro/about-us/careers
            - generic [ref=e258]:
              - generic [ref=e259]: Primiți ajutor
              - generic [ref=e260]:
                - link "Ajutor" [ref=e262]:
                  - /url: /ro-ro/help
                - link "Vulnerabilitatea clientului" [ref=e264]:
                  - /url: /ro-ro/help/client-vulnerability
                - link "Contactați-ne" [ref=e266]:
                  - /url: /ro-ro/contact-us
            - generic [ref=e267]:
              - generic [ref=e268]: Documente oficiale
              - generic [ref=e269]:
                - link "Condiții și politici" [ref=e271]:
                  - /url: /ro-ro/terms-and-policies
                - link "Procedura privind plângerile - Capital Com Group Ltd" [ref=e273]:
                  - /url: /ro-ro/terms-and-policies/complaints-procedure-cceu
                - link "Procedura privind reclamațiile - Capital Com SV Investments Limited" [ref=e275]:
                  - /url: /ro-ro/terms-and-policies/complaints-procedure
                - 'link "Conformitate și aspecte legale: tranzacționarea CFD-urilor" [ref=e277]':
                  - /url: /ro-ro/terms-and-policies/compliance-and-legals
    - generic [ref=e279]:
      - paragraph [ref=e280]:
        - text: CFD-urile sunt instrumente complexe și au un risc ridicat de a pierde rapid bani din cauza efectului de levier.
        - generic [ref=e281]:
          - generic [ref=e282]:
            - strong [ref=e283]: 73% din conturile investitorilor de retail pierd bani atunci când tranzacționează CFD-uri cu acest furnizor
            - text: .
          - text: Ar trebui să luați în considerare dacă înțelegeți modul în care funcționează CFDurile și dacă vă puteți permite să vă asumați riscul ridicat de a vă pierde banii. Consultați
          - link "Declarația noastră deinformare privind riscurile" [ref=e284]:
            - /url: https://capital.com/risk-disclosure-policy
      - paragraph [ref=e285]:
        - text: "Avertisment privind riscurile: Valoarea acțiunilor și a ETF-urilor cumpărate prin intermediul unui cont de tranzacționare cu acțiuni poate crește sau scădea, ceea ce înseamnă că s-ar putea să recuperați mai puțin decât ați investit inițial. Performanțele anterioare nu garantează rezultatele viitoare."
        - text: Tranzacțiile cu instrumente extrabursiere nelivrabile, precum opțiunile knock-out și CFD-urile, sunt produse financiare complexe care prezintă un risc ridicat de pierdere a întregului capital investit. Astfel de produse nu sunt potrivite pentru toți investitorii, deoarece pot genera atât câștiguri, cât și pierderi semnificative. Înainte de a vă angaja în acest tip de tranzacționare, ar trebui să analizați cu atenție dacă înțelegeți modul în care funcționează aceste instrumente și dacă vă puteți permite să vă asumați riscul ridicat de a vă pierde banii.
        - text: Pentru clienții profesioniști, există riscul de a pierde mai mult decât depozitul inițial. Informațiile de pe acest site web sunt de natură generală și nu iau în considerare situația financiară, obiectivele sau nevoile dumneavoastră. Consultați documentele noastre legale și asigurați-vă că înțelegeți pe deplin riscurile înainte de a lua orice decizie de tranzacționare. Vă încurajăm să utilizați serviciile de instruire ale companiei noastre pentru a înțelege mai bine riscurile înainte de a vă angaja în operațiuni de tranzacționare.
      - paragraph [ref=e286]: "Capital Com SV Investments Limited este o societate constituită în Republica Cipru cu numărul de înregistrare HE 354252 și este autorizată și reglementată de Comisia pentru valori mobiliare și burse din Cipru (numărul de licență 319/17). Sediul social: Str: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cipru."
      - paragraph [ref=e287]: "Capital Com Group Ltd este o societate constituită în Republica Cipru cu numărul de înregistrare ΗΕ 446198 și este autorizată și reglementată de Comisia pentru valori mobiliare și burse din Cipru (numărul de licență 463/25). Sediul social: Str: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cipru."
      - paragraph [ref=e288]: Informațiile de pe acest site nu se adresează rezidenților din Statele Unite, Canada și Belgia sau oricărei alte țări din afara SEE și nu sunt destinate distribuirii către sau utilizării de către orice persoană din orice țară sau jurisdicție în care o astfel de distribuire sau utilizare ar fi contrară legislației sau reglementărilor locale.
    - generic [ref=e289]:
      - paragraph [ref=e290]: © 2026 Capital Com SV Investments Limited
      - generic [ref=e291]:
        - link "Harta site-ului" [ref=e292]:
          - /url: /ro-ro/sitemap
        - link "Setări module cookie" [ref=e293]:
          - /url: ""
        - link "Reglementări" [ref=e294]:
          - /url: /ro-ro/terms-and-policies/regulations
        - link "Condiții și politici" [ref=e295]:
          - /url: /ro-ro/terms-and-policies
        - link "Procedura privind reclamațiile" [ref=e296]:
          - /url: /ro-ro/terms-and-policies/complaints-procedures
  - generic [ref=e299]:
    - generic [ref=e300]:
      - heading "Hei, se pare că ești în United States of America" [level=3] [ref=e302]
      - paragraph [ref=e303]: Produsele și serviciile enumerate pe acest site web nu sunt disponibile în United States of America.
    - button "Rămâneți aici" [active] [ref=e305] [cursor=pointer]
  - button [ref=e306] [cursor=pointer]
  - alert [ref=e308]
  - dialog "Cookie banner" [ref=e309]:
    - generic [ref=e310]:
      - paragraph [ref=e312]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e313] [cursor=pointer]:
          - /url: https://capital.com/cookies-policy-cysec
          - text: Cookie Policy
        - text: .
      - generic [ref=e314]:
        - button "Reject all" [ref=e315] [cursor=pointer]
        - button "Allow all cookies" [ref=e316] [cursor=pointer]
        - button "Cookie settings" [ref=e317] [cursor=pointer]
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | import { TIMEOUTS } from '../../config/timeouts';
  3  | 
  4  | export abstract class BaseModal {
  5  |     protected readonly page: Page;
  6  |     readonly root: Locator;
  7  | 
  8  |     protected constructor(page: Page, root: Locator) {
  9  |         this.page = page;
  10 |         this.root = root;
  11 |     }
  12 | 
  13 |     async waitUntilClosed(): Promise<void> {
> 14 |         await this.root.waitFor({ state: 'hidden', timeout: TIMEOUTS.modalDisappearance });
     |                         ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  15 |     }
  16 | 
  17 |     protected async isPresent(timeout = TIMEOUTS.modalAppearance): Promise<boolean> {
  18 |         return this.root
  19 |             .waitFor({ state: 'visible', timeout })
  20 |             .then(() => true)
  21 |             .catch(() => false);
  22 |     }
  23 | }
  24 | 
```