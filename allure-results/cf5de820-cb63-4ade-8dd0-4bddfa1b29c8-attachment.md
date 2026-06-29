# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: header/header-navigation.spec.ts >> [CYSEC PL | unregistered] Header navigation >> Logo opens main page
- Location: tests/header/header-navigation.spec.ts:5:9

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('button[data-type="wrong_location_cancel"]') to be hidden
    14 × locator resolved to visible <button color="black" type="button" data-type="wrong_location_cancel" class="rZW9e cCezE mdnI js-analyticsClick">Zostań tutaj</button>

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]:
      - text: Kontrakty CFD to złożone instrumenty, które wiążą się z dużym ryzykiem gwałtownej straty środków na skutek zastosowania dźwigni finansowej.
      - generic [ref=e8]:
        - generic [ref=e9]:
          - strong [ref=e10]: Od 74 do 89% rachunków inwestorów detalicznych odnotowuje straty na handlu kontraktami CFD
          - text: .
        - text: Powinieneś rozważyć, czy rozumiesz, jak działają kontrakty CFD i czy możesz sobie pozwolić na podjęcie wysokiego ryzyka utraty pieniędzy. Prosimy o zapoznanie się z naszym
        - link "Oświadczeniem o ryzyku" [ref=e11]:
          - /url: https://capital.com/risk-disclosure-policy-cceu
    - generic [ref=e13]:
      - link [ref=e14]:
        - /url: /pl-pl
        - img [ref=e15]
      - generic [ref=e20]:
        - navigation [ref=e21]:
          - button "Handel" [ref=e22]:
            - button "Handel" [ref=e23]:
              - generic [ref=e24]: Handel
          - button "Rynki" [ref=e25]:
            - button "Rynki" [ref=e26]:
              - generic [ref=e27]: Rynki
          - link "Cennik" [ref=e30]:
            - /url: /pl-pl/ways-to-trade/fees-and-charges
          - button "O nas" [ref=e31]:
            - button "O nas" [ref=e32]:
              - generic [ref=e33]: O nas
        - button "pl" [ref=e34] [cursor=pointer]:
          - generic [ref=e36]: pl
      - generic [ref=e38]:
        - button "Zaloguj się" [ref=e39] [cursor=pointer]: Zaloguj się
        - button "Otwórz konto" [ref=e40] [cursor=pointer]: Otwórz konto
  - generic [ref=e41]:
    - paragraph [ref=e44]:
      - generic [ref=e45]:
        - link "Strona główna" [ref=e46]:
          - /url: /pl-pl
        - text: •
      - text: Profesjonalny
    - generic [ref=e47]:
      - generic [ref=e51]:
        - generic [ref=e52]:
          - heading "Profesjonalny handel kontraktami CFD" [level=1] [ref=e53]
          - paragraph [ref=e55]: Warunki dla klientów profesjonalnych przeznaczone dla doświadczonych i kwalifikujących się inwestorów. Obowiązują ograniczone zabezpieczenia detaliczne.
          - button "Zaaplikuj" [ref=e57] [cursor=pointer]
        - img "laptop" [ref=e60]
      - generic [ref=e62]:
        - generic [ref=e63]:
          - heading "Kryteria kwalifikacyjne" [level=2] [ref=e64]
          - generic [ref=e65]: Aby zostać zakwalifikowanym jako klient profesjonalny, należy spełnić co najmniej dwa z trzech poniższych kryteriów.
        - generic [ref=e66]:
          - generic [ref=e68]:
            - heading "#1" [level=3] [ref=e69]
            - paragraph [ref=e71]: Średnio 10 znaczących transakcji na kwartał na danym rynku w ciągu ostatniego roku
          - generic [ref=e73]:
            - heading "#2" [level=3] [ref=e74]
            - paragraph [ref=e76]: Porfolio inwestycji płynnych o wartości przekraczającej 500 000 euro
          - generic [ref=e78]:
            - heading "#3" [level=3] [ref=e79]
            - paragraph [ref=e81]: Co najmniej roczne doświadczenie zawodowe w sektorze finansowym w zakresie produktów lub usług lewarowanych
      - generic [ref=e83]:
        - generic [ref=e84]:
          - heading "Ubieganie się o status profesjonalisty" [level=2] [ref=e85]
          - paragraph [ref=e87]: Wnioski są rozpatrywane, a potwierdzenie wysyłane pocztą elektroniczną.
        - generic [ref=e88]:
          - generic [ref=e89]:
            - generic [ref=e90]:
              - generic [ref=e91]:
                - heading "Nowy użytkownik Capital.com" [level=2] [ref=e92]
                - list [ref=e94]:
                  - listitem [ref=e95]: Pobierz aplikację handlową Capital·com
                  - listitem [ref=e96]: Załóż i zweryfikuj konto detaliczne
                  - listitem [ref=e97]: W aplikacji wybierz baner na ekranie głównym i wypełnij wniosek
              - generic [ref=e99]:
                - img "QR code" [ref=e101]
                - generic [ref=e102]: Scan to Download
            - img "Image" [ref=e105]
          - generic [ref=e106]:
            - generic [ref=e107]:
              - generic [ref=e108]:
                - heading "Istniejące konto" [level=2] [ref=e109]
                - list [ref=e111]:
                  - listitem [ref=e112]: Zaloguj się do aplikacji lub platformy internetowej
                  - listitem [ref=e113]: Przejdź do sekcji „Konto” lub wybierz opcję „Na żywo” w prawym górnym rogu
                  - listitem [ref=e114]: Wybierz opcję „Przejdź na wersję Pro” i wypełnij formularz
              - generic [ref=e116]:
                - img "QR code" [ref=e118]
                - generic [ref=e119]: Scan to Download
            - img "Image" [ref=e122]
      - generic [ref=e124]:
        - heading "Pomoc techniczna" [level=2] [ref=e126]
        - generic [ref=e132]:
          - generic [ref=e133]:
            - strong [ref=e134]: Pomoc techniczna 24/7
            - paragraph [ref=e136]: Aby uzyskać więcej informacji na temat warunków korzystania z konta profesjonalnego, skontaktuj się z zespołem pomocy technicznej.
          - link "Skontaktuj się z nami" [ref=e138] [cursor=pointer]:
            - /url: /pl-pl/contact-us
  - contentinfo [ref=e140]:
    - generic [ref=e141]:
      - link [ref=e142]:
        - /url: /pl-pl
        - img [ref=e143]
      - generic [ref=e147]:
        - link [ref=e148]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e149]:
          - /url: https://www.youtube.com/@Capitaltrading/videos
      - generic [ref=e150]:
        - link [ref=e151]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=e03e8b1e-8be6-41ba-a684-b41419665cd8&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e152]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=e03e8b1e-8be6-41ba-a684-b41419665cd8&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e153]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=e03e8b1e-8be6-41ba-a684-b41419665cd8&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e154]:
      - generic [ref=e155]:
        - generic [ref=e156]:
          - generic [ref=e157]:
            - generic [ref=e158]: "Kraj / Region:"
            - button "Poland" [ref=e159] [cursor=pointer]:
              - generic [ref=e161]: Poland
          - generic [ref=e162]: •
          - generic [ref=e163]:
            - generic [ref=e164]: "Język:"
            - button "Polish" [ref=e165] [cursor=pointer]:
              - generic [ref=e166]: Polish
        - generic [ref=e167]:
          - generic [ref=e168]: "Możesz również skontaktować się z nami:"
          - link "+48 222304455" [ref=e171]:
            - /url: tel:+48 222304455
            - strong [ref=e172]: +48 222304455
            - strong
          - generic [ref=e173]: •
          - link "support@capital.com" [ref=e175]:
            - /url: mailto:support@capital.com
            - strong [ref=e176]: support@capital.com
      - generic [ref=e177]:
        - generic [ref=e178]:
          - strong [ref=e180]: Handel
          - generic [ref=e181]:
            - generic [ref=e182]:
              - generic [ref=e183]: Handel
              - generic [ref=e184]:
                - link "Handel kontraktami CFD" [ref=e186]:
                  - /url: /pl-pl/ways-to-trade/cfd-trading
                - link "Opcje knock-out" [ref=e188]:
                  - /url: /pl-pl/ways-to-trade/knock-outs
                - link "Handel demonstracyjny" [ref=e190]:
                  - /url: /pl-pl/trading-platforms/demo-account
                - link "Profesjonalny" [ref=e192]:
                  - /url: /pl-pl/professional-clients
                - link "Doświadczony klient detaliczny" [ref=e194]:
                  - /url: /pl-pl/ways-to-trade/experienced-retail-trader
            - generic [ref=e195]:
              - generic [ref=e196]: Platforma handlowa
              - generic [ref=e197]:
                - link "Platforma internetowa" [ref=e199]:
                  - /url: /pl-pl/trading-platforms/web-platform
                - link "Aplikacje mobilne" [ref=e201]:
                  - /url: /pl-pl/trading-platforms/mobile-apps
                - link "TradingView" [ref=e203]:
                  - /url: /pl-pl/trading-platforms/trading-view
                - link "MT4" [ref=e205]:
                  - /url: /pl-pl/trading-platforms/mt4
                - link "MT5" [ref=e207]:
                  - /url: /pl-pl/trading-platforms/mt5
            - generic [ref=e208]:
              - generic [ref=e209]: Ucz się
              - generic [ref=e210]:
                - link "Strategie handlu" [ref=e212]:
                  - /url: /pl-pl/learn/trading-strategies
                - link "Analiza techniczna" [ref=e214]:
                  - /url: /pl-pl/learn/technical-analysis
                - link "Psychologia handlu" [ref=e216]:
                  - /url: /pl-pl/learn/trading-psychology
                - link "Ucz się" [ref=e218]:
                  - /url: /pl-pl/learn
        - generic [ref=e219]:
          - strong [ref=e221]: Rynki
          - generic [ref=e222]:
            - generic [ref=e223]:
              - generic [ref=e224]: Nasze rynki
              - generic [ref=e225]:
                - link "Rynki" [ref=e227]:
                  - /url: /pl-pl/markets
                - link "Forex" [ref=e229]:
                  - /url: /pl-pl/markets/forex
                - link "Akcje" [ref=e231]:
                  - /url: /pl-pl/markets/shares
                - link "Indeksy" [ref=e233]:
                  - /url: /pl-pl/markets/indices
                - link "Towary" [ref=e235]:
                  - /url: /pl-pl/markets/commodities
                - link "Kryptowaluty" [ref=e237]:
                  - /url: /pl-pl/markets/cryptocurrencies
                - link "Obligacje" [ref=e239]:
                  - /url: /pl-pl/markets/bonds
                - link "Stopy procentowe" [ref=e241]:
                  - /url: /pl-pl/markets/interest-rates
            - generic [ref=e242]:
              - generic [ref=e243]: Analizy rynku
              - generic [ref=e244]:
                - link "Analiza Rynku" [ref=e246]:
                  - /url: /pl-pl/analysis
                - link "Ceny rynkowe" [ref=e248]:
                  - /url: /pl-pl/about-us/how-our-markets-are-priced
        - link "Cennik" [ref=e251]:
          - /url: /pl-pl/ways-to-trade/fees-and-charges
          - strong [ref=e252]: Cennik
        - generic [ref=e253]:
          - strong [ref=e255]: O nas
          - generic [ref=e256]:
            - generic [ref=e257]:
              - generic [ref=e258]: Kim jesteśmy
              - generic [ref=e259]:
                - link "O nas" [ref=e261]:
                  - /url: /pl-pl/about-us
                - link "Nasze biura" [ref=e263]:
                  - /url: /pl-pl/about-us/our-offices
                - link "Czy capital.com jest bezpieczny?" [ref=e265]:
                  - /url: /pl-pl/security-measures
                - link "Nasz model biznesowy" [ref=e267]:
                  - /url: /pl-pl/about-us/how-capital-makes-money
            - generic [ref=e268]:
              - generic [ref=e269]: Pracuj z nami
              - link "Kariera" [ref=e272]:
                - /url: /pl-pl/about-us/careers
            - generic [ref=e273]:
              - generic [ref=e274]: Uzyskaj pomoc
              - generic [ref=e275]:
                - link "Pomoc" [ref=e277]:
                  - /url: /pl-pl/help
                - link "Obszary szczególnego narażenia" [ref=e279]:
                  - /url: /pl-pl/help/client-vulnerability
                - link "Skontaktuj się z nami" [ref=e281]:
                  - /url: /pl-pl/contact-us
            - generic [ref=e282]:
              - generic [ref=e283]: Dokumentacja prawna
              - generic [ref=e284]:
                - link "Regulamin i zasady" [ref=e286]:
                  - /url: /pl-pl/terms-and-policies
                - link "Procedura składania skarg — Capital Com Group Ltd" [ref=e288]:
                  - /url: /pl-pl/terms-and-policies/complaints-procedure-cceu
                - link "Procedura rozpatrywania skarg - Capital Com SV Investments Limited" [ref=e290]:
                  - /url: /pl-pl/terms-and-policies/complaints-procedure
                - 'link "Zgodność z przepisami i kwestie prawne: handel kontraktami CFD" [ref=e292]':
                  - /url: /pl-pl/terms-and-policies/compliance-and-legals
    - generic [ref=e294]:
      - paragraph [ref=e295]:
        - text: "Capital Com SV Investments Limited:"
        - text: Kontrakty CFD to złożone instrumenty, które wiążą się z dużym ryzykiem gwałtownej straty środków na skutek zastosowania dźwigni finansowej.
        - generic [ref=e296]:
          - generic [ref=e297]:
            - strong [ref=e298]: 73% inwestorów detalicznych odnotowuje straty w handlu kontraktami CFD z tym dostawcą
            - text: .
          - text: Powinieneś rozważyć, czy rozumiesz, jak działają kontrakty CFD i czy możesz sobie pozwolić na podjęcie wysokiego ryzyka utraty pieniędzy. Prosimy o zapoznanie się z naszym
          - link "Oświadczeniem o ryzyku" [ref=e299]:
            - /url: https://capital.com/risk-disclosure-policy
      - paragraph [ref=e300]:
        - text: "Capital Com Group Ltd:"
        - text: Kontrakty CFD są złożonymi instrumentami i wiążą się z wysokim ryzykiem szybkiej utraty pieniędzy ze względu na mechanizm dźwigni finansowej.
        - strong [ref=e301]: Od 74 do 89% rachunków inwestorów detalicznych odnotowuje straty na handlu kontraktami CFD
        - text: . Powinieneś rozważyć, czy rozumiesz zasady działania kontraktów CFD i czy możesz sobie pozwolić na wysokie ryzyko utraty pieniędzy.
        - generic [ref=e302]:
          - text: Prosimy o zapoznanie się z naszym
          - link "Oświadczeniem o ryzyku" [ref=e303]:
            - /url: https://capital.com/risk-disclosure-policy-cceu
      - paragraph [ref=e304]:
        - text: "Ostrzeżenie o ryzyku: wartość akcji i funduszy ETF nabytych za pośrednictwem rachunku transakcyjnego może rosnąć lub spadać, co może oznaczać, że zwrot z inwestycji będzie niższy od jej pierwotnej kwoty. Wyniki historyczne nie są gwarancją przyszłych rezultatów."
        - text: Transakcje na pozagiełdowych instrumentach niepodlegających dostawie, takich jak opcje knock-out i kontrakty CFD, są złożonymi produktami finansowymi, które wiążą się z wysokim ryzykiem utraty całego zainwestowanego kapitału. Tego typu produkty nie są odpowiednie dla wszystkich inwestorów, ponieważ mogą przynosić zarówno zyski, jak i znaczne straty. Przed rozpoczęciem tego rodzaju handlu powinieneś dokładnie rozważyć, czy rozumiesz sposób działania tych instrumentów i czy możesz zaakceptować wysokie ryzyko straty pieniędzy.
        - text: W przypadku klientów profesjonalnych istnieje ryzyko poniesienia straty przekraczającej początkowy depozyt. Informacje zawarte w tej witrynie mają charakter ogólny i nie uwzględniają sytuacji finansowej, celów ani potrzeb indywidualnego klienta. Przed podjęciem jakichkolwiek decyzji handlowych prosimy o zapoznanie się z naszymi dokumentami prawnymi i upewnienie się, że w pełni rozumiesz związane z nimi ryzyko. Zachęcamy do skorzystania z usług szkoleniowych naszej firmy, aby lepiej zrozumieć ryzyko przed przystąpieniem do operacji handlowych.
      - paragraph [ref=e305]: "Capital Com SV Investments Limited jest spółką zarejestrowaną w Republice Cypru pod numerem wpisu HE 354252. Spółka posiada upoważnienie i podlega nadzorowi regulacyjnemu cypryjskiej Securities and Exchange Commission (numer licencji 319/17). Adres siedziby: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cypr."
      - paragraph [ref=e306]: "Capital Com Group Ltd jest spółką zarejestrowaną w Republice Cypru pod numerem wpisu ΗΕ 446198. Spółka posiada upoważnienie i podlega nadzorowi regulacyjnemu cypryjskiej Securities and Exchange Commission (numer licencji 463/25). Adres siedziby: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cypr."
      - paragraph [ref=e307]: Informacje zawarte na tej stronie nie są kierowane do mieszkańców Stanów Zjednoczonych, Kanady, Belgii, ani żadnego innego kraju spoza EOG i nie są przeznaczone do rozpowszechniania ani wykorzystywania przez osoby w dowolnym kraju lub jurysdykcji, w których takie rozpowszechnianie lub wykorzystywanie byłoby sprzeczne z lokalnymi przepisami lub regulacjami.
    - generic [ref=e308]:
      - paragraph [ref=e309]: © 2026 Capital Com SV Investments Limited
      - generic [ref=e310]:
        - link "Mapa witryny" [ref=e311]:
          - /url: /pl-pl/sitemap
        - link "Ustawienia plików cookie" [ref=e312]:
          - /url: ""
        - link "Przepisy prawne" [ref=e313]:
          - /url: /pl-pl/terms-and-policies/regulations
        - link "Regulamin i zasady" [ref=e314]:
          - /url: /pl-pl/terms-and-policies
        - link "Procedura rozpatrywania skarg" [ref=e315]:
          - /url: /pl-pl/terms-and-policies/complaints-procedures
  - generic [ref=e318]:
    - generic [ref=e319]:
      - heading "Hej, wygląda na to, że Twój obecny kraj pobytu to United States of America" [level=3] [ref=e321]
      - paragraph [ref=e322]: Klienci, których kraj pobytu to United States of America nie mogą korzystać z produktów i usług wymienionych w tej witrynie.
    - button "Zostań tutaj" [active] [ref=e324] [cursor=pointer]
  - button [ref=e325] [cursor=pointer]
  - dialog "Cookie banner" [ref=e327]:
    - generic [ref=e328]:
      - paragraph [ref=e330]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e331] [cursor=pointer]:
          - /url: https://capital.com/cookies-policy-pl
          - text: Cookie Policy
        - text: .
      - generic [ref=e332]:
        - button "Reject all" [ref=e333] [cursor=pointer]
        - button "Allow all cookies" [ref=e334] [cursor=pointer]
        - button "Cookie settings" [ref=e335] [cursor=pointer]
  - alert [ref=e336]
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