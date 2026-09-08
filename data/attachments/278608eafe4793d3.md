# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/trading.spec.ts >> [CYSEC HU | authorized] Trading / Learn / Trading strategies >> [background_banner_block_btn2_demo] -> platformPage
- Location: src/fixtures/content-section.ts:41:25

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('button[data-type="wrong_location_cancel"]') to be hidden
    14 × locator resolved to visible <button color="black" type="button" data-type="wrong_location_cancel" class="rZW9e cCezE mdnI js-analyticsClick">Maradok itt</button>

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]:
      - text: A CFD-k összetett eszközök, és a tőkeáttétel miatt nagy a kockázata a gyors pénzvesztésnek.
      - generic [ref=e8]:
        - generic [ref=e9]:
          - strong [ref=e10]: A lakossági befektetők 73%-a veszít pénzt a CFD-kereskedés során ennél a szolgáltatónál.
          - text: .
        - text: Fontolja meg, hogy tisztában van-e a CFD-k működésével, és hogy megengedheti-e magának, hogy vállalja a pénzvesztés magas kockázatát. Kérjük, tekintse meg
        - link "Kockázatfeltáró nyilatkozatunkat" [ref=e11]:
          - /url: https://capital.com/risk-disclosure-policy
    - generic [ref=e13]:
      - link [ref=e14]:
        - /url: /hu-hu
        - img [ref=e15]
      - generic [ref=e20]:
        - navigation [ref=e21]:
          - button "Kereskedés" [ref=e22]:
            - button "Kereskedés" [ref=e23]:
              - generic [ref=e24]: Kereskedés
          - button "Piacok" [ref=e25]:
            - button "Piacok" [ref=e26]:
              - generic [ref=e27]: Piacok
          - link "Árazás" [ref=e30]:
            - /url: /hu-hu/ways-to-trade/fees-and-charges
          - button "Rólunk" [ref=e31]:
            - button "Rólunk" [ref=e32]:
              - generic [ref=e33]: Rólunk
        - button "hu" [ref=e34] [cursor=pointer]:
          - generic [ref=e36]: hu
      - link "Platform megnyitása" [ref=e38] [cursor=pointer]:
        - /url: /trading/platform/
  - generic [ref=e39]:
    - paragraph [ref=e42]:
      - generic [ref=e43]:
        - link "Start" [ref=e44]:
          - /url: /hu-hu
        - text: •
      - generic [ref=e45]:
        - link "Tanuljon" [ref=e46]:
          - /url: /hu-hu/learn
        - text: •
      - text: Kereskedési stratégiák
    - generic [ref=e47]:
      - generic [ref=e51]:
        - generic [ref=e52]:
          - heading "Kereskedési stratégiák" [level=1] [ref=e53]
          - paragraph [ref=e55]: Egy kereskedési stratégia horgonyként szolgálhat a kockázatos pénzügyi piacok tengerein. Elevenítse fel a technikáit az alábbi kereskedési stratégiáinkkal és útmutatóinkkal.
        - generic [ref=e56]:
          - button "Fiók létrehozása" [ref=e57] [cursor=pointer]
          - button "Nyisson próbafiókot" [ref=e58] [cursor=pointer]
      - generic [ref=e63]:
        - generic [ref=e64]:
          - heading "Népszerű kereskedési stratégiák" [level=2] [ref=e65]
          - generic [ref=e66]: Finomhangolja képességeit az átfogó kereskedési stratégia útmutatóinkkal.
        - generic [ref=e67]:
          - generic [ref=e69]:
            - heading "Swing kereskedés" [level=3] [ref=e70]
            - paragraph [ref=e72]: Tanulja meg a középtávú stratégia legfontosabb technikáit.
            - link "Swing kereskedési útmutató" [ref=e73] [cursor=pointer]:
              - /url: https://capital.com/hu-hu/learn/trading-strategies/swing-trading
              - generic [ref=e74]: Swing kereskedési útmutató
          - generic [ref=e76]:
            - heading "Pozícióalapú kereskedés" [level=3] [ref=e77]
            - paragraph [ref=e79]: Fedezze fel a hosszútávú pozíciók megtartásának alapelveit.
            - link "Pozícióalapú kereskedési útmutató" [ref=e80] [cursor=pointer]:
              - /url: https://capital.com/hu-hu/learn/trading-strategies/position-trading
              - generic [ref=e81]: Pozícióalapú kereskedési útmutató
          - generic [ref=e83]:
            - heading "Trendalapú kereskedés" [level=3] [ref=e84]
            - paragraph [ref=e86]: Tanulja meg hogyan azonosítsa, kövesse és használja ki a piaci trendeket.
            - link "Trendalapú kereskedési útmutató" [ref=e87] [cursor=pointer]:
              - /url: https://capital.com/hu-hu/learn/trading-strategies/trend-trading
              - generic [ref=e88]: Trendalapú kereskedési útmutató
          - generic [ref=e90]:
            - heading "Napon belüli kereskedés" [level=3] [ref=e91]
            - paragraph [ref=e93]: Ismerje meg az egy napon belül megnyitott és lezárt pozíciók alapjait.
            - link "Napon belüli kereskedés" [ref=e94] [cursor=pointer]:
              - /url: https://capital.com/hu-hu/learn/trading-strategies/day-trading
              - generic [ref=e95]: Napon belüli kereskedés
      - generic [ref=e97]:
        - generic [ref=e98]:
          - heading "A legolvasottabb kereskedési útmutatóink" [level=2] [ref=e99]
          - generic [ref=e100]: Elevenítse fel a tőkeáttétel, a kereskedés és a befektetés alapfogalmait.
        - generic [ref=e101]:
          - generic [ref=e103]:
            - heading "Tőkeáttételes kereskedés" [level=3] [ref=e104]
            - paragraph [ref=e106]: A kölcsönvett tőkével (tőkeáttétel) való kereskedés stratégiai gondolkodást igényel.
            - link "Tőkeáttételes kereskedési útmutató" [ref=e107] [cursor=pointer]:
              - /url: " https://capital.com/hu-hu/learn/trading-strategies/margin-trading"
              - generic [ref=e108]: Tőkeáttételes kereskedési útmutató
          - generic [ref=e110]:
            - heading "Kereskedés kontra befektetés útmutató" [level=3] [ref=e111]
            - paragraph [ref=e113]: Ismerje meg a kereskedés és a befektetés közötti legnagyobb különbségeket.
            - link "Kereskedés kontra befektetés" [ref=e114] [cursor=pointer]:
              - /url: https://capital.com/hu-hu/learn/trading-strategies/trading-vs-investing
              - generic [ref=e115]: Kereskedés kontra befektetés
      - generic [ref=e117]:
        - generic [ref=e118]:
          - heading "Bővítse kereskedési képességeit" [level=2] [ref=e119]
          - generic [ref=e120]: Fedezzen fel további oktatóanyagokat a stratégiái fejlesztéséhez és a nyereségei/veszteségei kezeléséhez.
        - generic [ref=e121]:
          - generic [ref=e123]:
            - heading "Technikai elemzés:" [level=3] [ref=e124]
            - paragraph [ref=e126]: A technikai elemzés útmutatóinkkal megismerheti a mozgóátlagokat és megtanulhatja különböző alakzatok felismerését.
            - link "Tekintse meg a technikai elemzés útmutatóinkat" [ref=e127] [cursor=pointer]:
              - /url: https://capital.com/hu-hu/learn/technical-analysis
              - generic [ref=e128]: Tekintse meg a technikai elemzés útmutatóinkat
          - generic [ref=e130]:
            - heading "Piacelemzés" [level=3] [ref=e131]
            - paragraph [ref=e133]:
              - text: Látogassa meg
              - link "elemzés részlegünket" [ref=e134]:
                - /url: https://capital.com/hu-hu/analysis
              - text: további kereskedési stratégiákért.
              - strong
            - link "Tekintse meg elemzéseinket" [ref=e135] [cursor=pointer]:
              - /url: https://capital.com/hu-hu/analysis
              - generic [ref=e136]: Tekintse meg elemzéseinket
      - generic [ref=e139]:
        - heading "Három lépés a kezdéshez" [level=2] [ref=e141]
        - generic [ref=e142]:
          - button [ref=e144] [cursor=pointer]
          - generic [ref=e147]: 1. Nyisson egy fiókot (jogosultsági feltételekhez kötött)
          - generic [ref=e148]: 2. Fizessen be a saját feltételei szerint
          - generic [ref=e149]: 3. Kereskedjen, amikor készen áll
  - contentinfo [ref=e151]:
    - generic [ref=e152]:
      - link [ref=e153]:
        - /url: /hu-hu
        - img [ref=e154]
      - generic [ref=e158]:
        - link [ref=e159]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e160]:
          - /url: https://www.youtube.com/@Capitaltrading/videos
      - generic [ref=e161]:
        - link [ref=e162]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e163]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e164]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e165]:
      - generic [ref=e166]:
        - generic [ref=e167]:
          - generic [ref=e168]:
            - generic [ref=e169]: "Ország / Régió:"
            - button [ref=e170] [cursor=pointer]
          - generic [ref=e172]: •
          - generic [ref=e173]:
            - generic [ref=e174]: "Nyelv:"
            - button [ref=e175] [cursor=pointer]
        - generic [ref=e176]:
          - generic [ref=e177]: "Felveheti velünk a kapcsolatot:"
          - link "+357 25123646" [ref=e180]:
            - /url: tel:+357 25123646
            - strong [ref=e181]: +357 25123646
            - strong
          - generic [ref=e182]: •
          - link "support@capital.com" [ref=e184]:
            - /url: mailto:support@capital.com
            - strong [ref=e185]: support@capital.com
      - generic [ref=e186]:
        - generic [ref=e187]:
          - strong [ref=e189]: Kereskedés
          - generic [ref=e190]:
            - generic [ref=e191]:
              - generic [ref=e192]: Kereskedés
              - generic [ref=e193]:
                - link "CFD-kereskedés" [ref=e195]:
                  - /url: /hu-hu/ways-to-trade/cfd-trading
                - link "Knock-outok" [ref=e197]:
                  - /url: /hu-hu/ways-to-trade/knock-outs
                - link "Demókereskedés" [ref=e199]:
                  - /url: /hu-hu/trading-platforms/demo-account
                - link "Professzionális" [ref=e201]:
                  - /url: /hu-hu/professional-clients
            - generic [ref=e202]:
              - generic [ref=e203]: Kereskedési platformok
              - generic [ref=e204]:
                - link "Webes platform" [ref=e206]:
                  - /url: /hu-hu/trading-platforms/web-platform
                - link "Mobilalkalmazások" [ref=e208]:
                  - /url: /hu-hu/trading-platforms/mobile-apps
                - link "TradingView" [ref=e210]:
                  - /url: /hu-hu/trading-platforms/trading-view
                - link "MT4" [ref=e212]:
                  - /url: /hu-hu/trading-platforms/mt4
                - link "MT5" [ref=e214]:
                  - /url: /hu-hu/trading-platforms/mt5
            - generic [ref=e215]:
              - generic [ref=e216]: Tanuljon
              - generic [ref=e217]:
                - link "Kereskedési stratégiák" [ref=e219]:
                  - /url: /hu-hu/learn/trading-strategies
                - link "Technikai elemzés" [ref=e221]:
                  - /url: /hu-hu/learn/technical-analysis
                - link "Kereskedési pszichológia" [ref=e223]:
                  - /url: /hu-hu/learn/trading-psychology
                - link "Tanuljon" [ref=e225]:
                  - /url: /hu-hu/learn
        - generic [ref=e226]:
          - strong [ref=e228]: Piacok
          - generic [ref=e229]:
            - generic [ref=e230]:
              - generic [ref=e231]: Piacaink
              - generic [ref=e232]:
                - link "Piacok" [ref=e234]:
                  - /url: /hu-hu/markets
                - link "Deviza" [ref=e236]:
                  - /url: /hu-hu/markets/forex
                - link "Részvények" [ref=e238]:
                  - /url: /hu-hu/markets/shares
                - link "Indexek" [ref=e240]:
                  - /url: /hu-hu/markets/indices
                - link "Árucikkek" [ref=e242]:
                  - /url: /hu-hu/markets/commodities
                - link "Kriptovaluták" [ref=e244]:
                  - /url: /hu-hu/markets/cryptocurrencies
                - link "Kötvények" [ref=e246]:
                  - /url: /hu-hu/markets/bonds
                - link "Kamatlábak" [ref=e248]:
                  - /url: /hu-hu/markets/interest-rates
            - generic [ref=e249]:
              - generic [ref=e250]: Piaci elemzések
              - generic [ref=e251]:
                - link "Piaci elemzés" [ref=e253]:
                  - /url: /hu-hu/analysis
                - link "Piacok árazása" [ref=e255]:
                  - /url: /hu-hu/about-us/how-our-markets-are-priced
        - link "Árazás" [ref=e258]:
          - /url: /hu-hu/ways-to-trade/fees-and-charges
          - strong [ref=e259]: Árazás
        - generic [ref=e260]:
          - strong [ref=e262]: Rólunk
          - generic [ref=e263]:
            - generic [ref=e264]:
              - generic [ref=e265]: Rólunk
              - generic [ref=e266]:
                - link "Rólunk" [ref=e268]:
                  - /url: /hu-hu/about-us
                - link "Irodáink" [ref=e270]:
                  - /url: /hu-hu/about-us/our-offices
                - link "Biztonságos a capital.com?" [ref=e272]:
                  - /url: /hu-hu/security-measures
                - link "Üzleti modellünk" [ref=e274]:
                  - /url: /hu-hu/about-us/how-capital-makes-money
            - generic [ref=e275]:
              - generic [ref=e276]: Dolgozz velünk
              - link "Karrier" [ref=e279]:
                - /url: /hu-hu/about-us/careers
            - generic [ref=e280]:
              - generic [ref=e281]: Segítség
              - generic [ref=e282]:
                - link "Segítség" [ref=e284]:
                  - /url: /hu-hu/help
                - link "Ügyfél-sebezhetőség" [ref=e286]:
                  - /url: /hu-hu/help/client-vulnerability
                - link "Kapcsolat" [ref=e288]:
                  - /url: /hu-hu/contact-us
            - generic [ref=e289]:
              - generic [ref=e290]: Jogi dokumentumok
              - generic [ref=e291]:
                - link "Felhasználási feltételek" [ref=e293]:
                  - /url: /hu-hu/terms-and-policies
                - link "Panaszkezelési eljárás - Capital Com Group Ltd" [ref=e295]:
                  - /url: /hu-hu/terms-and-policies/complaints-procedure-cceu
                - link "Panasztételi eljárás - Capital Com SV Investments Limited" [ref=e297]:
                  - /url: /hu-hu/terms-and-policies/complaints-procedure
                - 'link "Megfelelőség és jogi kérdések: CFD-kereskedés" [ref=e299]':
                  - /url: /hu-hu/terms-and-policies/compliance-and-legals
    - generic [ref=e301]:
      - paragraph [ref=e302]:
        - text: A CFD-k összetett eszközök, és a tőkeáttétel miatt nagy a kockázata a gyors pénzvesztésnek.
        - generic [ref=e303]:
          - generic [ref=e304]:
            - strong [ref=e305]: A lakossági befektetők 73%-a veszít pénzt a CFD-kereskedés során ennél a szolgáltatónál.
            - text: .
          - text: Fontolja meg, hogy tisztában van-e a CFD-k működésével, és hogy megengedheti-e magának, hogy vállalja a pénzvesztés magas kockázatát. Kérjük, tekintse meg
          - link "Kockázatfeltáró nyilatkozatunkat" [ref=e306]:
            - /url: https://capital.com/risk-disclosure-policy
      - paragraph [ref=e307]:
        - text: "Kockázati figyelmeztetés: A részvények és ETF-ek értéke, amelyeket egy részvénykereskedési fiókon keresztül vásárol, csökkenhet vagy nőhet, ami azt jelentheti, hogy kevesebbet kap vissza, mint amennyit eredetileg befektetett. A múltbeli teljesítmény nem jelent garanciát a jövőbeli eredményekre."
        - text: A nem teljesíthető, tőzsdén kívüli eszközökkel – mint például knock-out opciók és CFD-k – végzett tranzakciók összetett pénzügyi termékek, amelyek az összes befektetett tőke elvesztésének magas kockázatát hordozzák. Ezek a termékek nem minden befektető számára megfelelőek, mivel jelentős nyereséget, de veszteséget is okozhatnak. Mielőtt ilyen típusú kereskedésbe kezdene, gondosan mérlegelnie kell, hogy érti-e, hogyan működnek ezek az eszközök, és megengedheti-e magának, hogy vállalja a pénze elvesztésének magas kockázatát.
        - text: A szakmai ügyfelek esetében fennáll a kockázata annak, hogy az eredeti betétnél többet veszítenek. A weboldalon található információk általános jellegűek, nem veszik figyelembe az Ön pénzügyi helyzetét, céljait vagy szükségleteit. Kérjük, tekintse át jogi dokumentumainkat, és győződjön meg róla, hogy teljes mértékben megérti a kockázatokat, mielőtt bármilyen kereskedési döntést hozna. Javasoljuk, hogy használja cégünk képzési szolgáltatásait a kockázatok jobb megértése érdekében, mielőtt kereskedésbe kezdene.
      - paragraph [ref=e308]: "A Capital Com SV Investments Limited egy Cipruson bejegyzett vállalat, amely a HE 354252 cégjegyzékszám alatt van bejegyezve, és amelyet a Ciprusi Értékpapír- és Tőzsdebizottság hagyott jóvá és szabályoz a 319/17 engedélyszám alatt. Bejegyzett székhely: Vasileiou Makedonos 8, Kinnis Üzletközpont, 2. emelet, 3040, Limassol, Ciprus."
      - paragraph [ref=e309]: "Capital Com Group Ltd egy Cipruson bejegyzett vállalat, amely a ΗΕ 446198 cégjegyzékszám alatt van bejegyezve, és amelyet a Ciprusi Értékpapír- és Tőzsdebizottság hagyott jóvá és szabályoz a 463/25 engedélyszám alatt. Bejegyzett székhely: Vasileiou Makedonos 8, Kinnis Üzletközpont, 2. emelet, 3040, Limassol, Ciprus."
      - paragraph [ref=e310]: A jelen oldalon található információk nem az Egyesült Államok, Kanada és Belgium vagy az EGT-n kívül eső bármely ország lakosainak szólnak, és nem megosztásra vagy használatra szolgálnak bármilyen személy által bármely országból vagy joghatóságból, ahol a megosztás vagy használat sértené a helyi jogszabályokat.
    - generic [ref=e311]:
      - paragraph [ref=e312]: © 2026 Capital Com SV Investments Limited
      - generic [ref=e313]:
        - link "Oldaltérkép" [ref=e314]:
          - /url: /hu-hu/sitemap
        - link "Süti beállítások" [ref=e315]:
          - /url: ""
        - link "Szabályozás" [ref=e316]:
          - /url: /hu-hu/terms-and-policies/regulations
        - link "Felhasználási feltételek" [ref=e317]:
          - /url: /hu-hu/terms-and-policies
        - link "Panasztételi eljárás" [ref=e318]:
          - /url: /hu-hu/terms-and-policies/complaints-procedures
  - generic [ref=e321]:
    - generic [ref=e322]:
      - 'heading "Üdv! Úgy tűnik, hogy itt tartózkodik: United States of America" [level=3] [ref=e324]'
      - paragraph [ref=e325]: "A weboldalon feltüntetett termékek és szolgáltatások nem érhetők el itt: United States of America."
    - button "Maradok itt" [active] [ref=e327] [cursor=pointer]
  - button [ref=e328] [cursor=pointer]
  - dialog "Cookie banner" [ref=e330]:
    - generic [ref=e331]:
      - paragraph [ref=e333]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e334] [cursor=pointer]:
          - /url: https://capital.com/cookies-policy-hu
          - text: Cookie Policy
        - text: .
      - generic [ref=e335]:
        - button "Reject all" [ref=e336] [cursor=pointer]
        - button "Allow all cookies" [ref=e337] [cursor=pointer]
        - button "Cookie settings" [ref=e338] [cursor=pointer]
  - alert [ref=e339]
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