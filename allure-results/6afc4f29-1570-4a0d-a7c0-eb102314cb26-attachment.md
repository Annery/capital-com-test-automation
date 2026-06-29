# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: header/header-navigation.spec.ts >> [CYSEC EN | authorized] Header navigation >> Logo opens main page
- Location: tests/header/header-navigation.spec.ts:5:9

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('button[data-type="wrong_location_cancel"]') to be hidden
    14 × locator resolved to visible <button color="black" type="button" data-type="wrong_location_cancel" class="rZW9e cCezE mdnI js-analyticsClick">Stay here</button>

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]:
      - text: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
      - generic [ref=e8]:
        - generic [ref=e9]:
          - strong [ref=e10]: The vast majority of retail investor accounts lose money when trading CFDs
          - text: .
        - text: You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Please refer to our
        - link "Risk Disclosure Statement" [ref=e11]:
          - /url: https://capital.com/risk-disclosure-policy-cceu
    - generic [ref=e13]:
      - link [ref=e14]:
        - /url: /en-eu
        - img [ref=e15]
      - generic [ref=e20]:
        - navigation [ref=e21]:
          - button "Trading" [ref=e22]:
            - button "Trading" [ref=e23]:
              - generic [ref=e24]: Trading
          - button "Markets" [ref=e25]:
            - button "Markets" [ref=e26]:
              - generic [ref=e27]: Markets
          - link "Pricing" [ref=e30]:
            - /url: /en-eu/ways-to-trade/fees-and-charges
          - button "About" [ref=e31]:
            - button "About" [ref=e32]:
              - generic [ref=e33]: About
        - button "en" [ref=e34] [cursor=pointer]:
          - generic [ref=e36]: en
      - link "Open platform" [ref=e38] [cursor=pointer]:
        - /url: /trading/platform/
      - button "Search" [ref=e39] [cursor=pointer]
  - generic [ref=e40]:
    - paragraph [ref=e43]:
      - generic [ref=e44]:
        - link "Home" [ref=e45]:
          - /url: /en-eu
        - text: •
      - text: Pro account
    - generic [ref=e46]:
      - generic [ref=e50]:
        - generic [ref=e51]:
          - heading "Professional CFD trading" [level=1] [ref=e52]
          - paragraph [ref=e54]: Professional client terms for experienced, eligible traders. Reduced retail protections apply.
          - button "Apply" [ref=e56] [cursor=pointer]
        - img "laptop" [ref=e59]
      - generic [ref=e61]:
        - generic [ref=e62]:
          - heading "Eligibility criteria" [level=2] [ref=e63]
          - generic [ref=e64]: Professional client classification requires meeting at least two of the following three criteria.
        - generic [ref=e65]:
          - generic [ref=e67]:
            - heading "#1" [level=3] [ref=e68]
            - paragraph [ref=e70]: An average of 10 significant transactions per quarter in the relevant market over the past year
          - generic [ref=e72]:
            - heading "#2" [level=3] [ref=e73]
            - paragraph [ref=e75]: A liquid investment portfolio exceeding €500,000
          - generic [ref=e77]:
            - heading "#3" [level=3] [ref=e78]
            - paragraph [ref=e80]: At least one year of professional experience in the financial sector, involving leveraged products or services
      - generic [ref=e82]:
        - generic [ref=e83]:
          - heading "Applying for Professional status" [level=2] [ref=e84]
          - paragraph [ref=e86]: Applications are reviewed and confirmation sent by email.
        - generic [ref=e87]:
          - generic [ref=e88]:
            - generic [ref=e89]:
              - generic [ref=e90]:
                - heading "New to Capital.com" [level=2] [ref=e91]
                - list [ref=e93]:
                  - listitem [ref=e94]: Download the Capital·com trading app
                  - listitem [ref=e95]: Open and verify a retail account
                  - listitem [ref=e96]: In the app, select the banner on the home screen and complete the application
              - generic [ref=e98]:
                - img "QR code" [ref=e100]
                - generic [ref=e101]: Scan to Download
            - img "Image" [ref=e104]
          - generic [ref=e105]:
            - generic [ref=e106]:
              - generic [ref=e107]:
                - heading "Existing account" [level=2] [ref=e108]
                - list [ref=e110]:
                  - listitem [ref=e111]: Log in to the app or web platform
                  - listitem [ref=e112]: Go to ‘Account’, or select ‘Live’ in the top-right corner
                  - listitem [ref=e113]: Select ‘Upgrade to Pro’ and complete the application
              - generic [ref=e115]:
                - img "QR code" [ref=e117]
                - generic [ref=e118]: Scan to Download
            - img "Image" [ref=e121]
      - generic [ref=e123]:
        - heading "Support" [level=2] [ref=e125]
        - generic [ref=e131]:
          - generic [ref=e132]:
            - strong [ref=e133]: 24/7 support
            - paragraph [ref=e135]: For more information on Professional account conditions, contact the support team.
          - link "Contact us" [ref=e137] [cursor=pointer]:
            - /url: /en-eu/contact-us
  - contentinfo [ref=e139]:
    - generic [ref=e140]:
      - link [ref=e141]:
        - /url: /en-eu
        - img [ref=e142]
      - generic [ref=e146]:
        - link [ref=e147]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e148]:
          - /url: https://www.youtube.com/@Capitaltrading/videos
      - generic [ref=e149]:
        - link [ref=e150]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=181d0c80-c55c-4555-8cf6-97ff4022800f&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e151]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=181d0c80-c55c-4555-8cf6-97ff4022800f&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e152]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=181d0c80-c55c-4555-8cf6-97ff4022800f&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e153]:
      - generic [ref=e154]:
        - generic [ref=e155]:
          - generic [ref=e156]:
            - generic [ref=e157]: "Country / Region:"
            - button "Cyprus" [ref=e158] [cursor=pointer]:
              - generic [ref=e160]: Cyprus
          - generic [ref=e161]: •
          - generic [ref=e162]:
            - generic [ref=e163]: "Language:"
            - button "English" [ref=e164] [cursor=pointer]:
              - generic [ref=e165]: English
        - generic [ref=e166]:
          - generic [ref=e167]: "Also you can contact us:"
          - link "+357 25123646" [ref=e170]:
            - /url: tel:+357 25123646
            - strong [ref=e171]: +357 25123646
            - strong
          - generic [ref=e172]: •
          - link "support@capital.com" [ref=e174]:
            - /url: mailto:support@capital.com
            - strong [ref=e175]: support@capital.com
      - generic [ref=e176]:
        - generic [ref=e177]:
          - strong [ref=e179]: Trading
          - generic [ref=e180]:
            - generic [ref=e181]:
              - generic [ref=e182]: Trading
              - generic [ref=e183]:
                - link "Trade CFDs" [ref=e185]:
                  - /url: /en-eu/ways-to-trade/cfd-trading
                - link "Trade knock-outs" [ref=e187]:
                  - /url: /en-eu/ways-to-trade/knock-outs
                - link "Demo account" [ref=e189]:
                  - /url: /en-eu/trading-platforms/demo-account
                - link "Pro account" [ref=e191]:
                  - /url: /en-eu/professional-clients
            - generic [ref=e192]:
              - generic [ref=e193]: Platforms
              - generic [ref=e194]:
                - link "Web platform" [ref=e196]:
                  - /url: /en-eu/trading-platforms/web-platform
                - link "Mobile app" [ref=e198]:
                  - /url: /en-eu/trading-platforms/mobile-apps
                - link "TradingView" [ref=e200]:
                  - /url: /en-eu/trading-platforms/trading-view
                - link "MT4" [ref=e202]:
                  - /url: /en-eu/trading-platforms/mt4
                - link "MT5" [ref=e204]:
                  - /url: /en-eu/trading-platforms/mt5
                - link "API access" [ref=e206]:
                  - /url: /en-eu/trading-platforms/api-development-guide
            - generic [ref=e207]:
              - generic [ref=e208]: Learn
              - generic [ref=e209]:
                - link "Trading strategies" [ref=e211]:
                  - /url: /en-eu/learn/trading-strategies
                - link "Technical analysis" [ref=e213]:
                  - /url: /en-eu/learn/technical-analysis
                - link "Trading psychology" [ref=e215]:
                  - /url: /en-eu/learn/trading-psychology
                - link "All resources" [ref=e217]:
                  - /url: /en-eu/learn
        - generic [ref=e218]:
          - strong [ref=e220]: Markets
          - generic [ref=e221]:
            - generic [ref=e222]:
              - generic [ref=e223]: Our markets
              - generic [ref=e224]:
                - link "Markets overview" [ref=e226]:
                  - /url: /en-eu/markets
                - link "Forex" [ref=e228]:
                  - /url: /en-eu/markets/forex
                - link "Shares" [ref=e230]:
                  - /url: /en-eu/markets/shares
                - link "Indices" [ref=e232]:
                  - /url: /en-eu/markets/indices
                - link "Commodities" [ref=e234]:
                  - /url: /en-eu/markets/commodities
                - link "Cryptocurrencies" [ref=e236]:
                  - /url: /en-eu/markets/cryptocurrencies
                - link "Bonds" [ref=e238]:
                  - /url: /en-eu/markets/bonds
                - link "Interest rates" [ref=e240]:
                  - /url: /en-eu/markets/interest-rates
            - generic [ref=e241]:
              - generic [ref=e242]: Market info
              - generic [ref=e243]:
                - link "Market analysis" [ref=e245]:
                  - /url: /en-eu/analysis
                - link "Markets pricing" [ref=e247]:
                  - /url: /en-eu/about-us/how-our-markets-are-priced
        - link "Pricing" [ref=e250]:
          - /url: /en-eu/ways-to-trade/fees-and-charges
          - strong [ref=e251]: Pricing
        - generic [ref=e252]:
          - strong [ref=e254]: About
          - generic [ref=e255]:
            - generic [ref=e256]:
              - generic [ref=e257]: Who we are
              - generic [ref=e258]:
                - link "Company" [ref=e260]:
                  - /url: /en-eu/about-us
                - link "Our offices" [ref=e262]:
                  - /url: /en-eu/about-us/our-offices
                - link "Press centre" [ref=e264]:
                  - /url: /en-eu/media-centre
                - link "Whitepaper" [ref=e266]:
                  - /url: /whitepaper
                - link "Investor Relations" [ref=e268]:
                  - /url: /en-eu/about-us/investor-relations
                - link "Is capital.com safe?" [ref=e270]:
                  - /url: /en-eu/security-measures
                - link "Our business model" [ref=e272]:
                  - /url: /en-eu/about-us/how-capital-makes-money
            - generic [ref=e273]:
              - generic [ref=e274]: Work with us
              - link "Careers" [ref=e277]:
                - /url: /en-eu/about-us/careers
            - generic [ref=e278]:
              - generic [ref=e279]: Help
              - generic [ref=e280]:
                - link "Help centre" [ref=e282]:
                  - /url: /en-eu/help
                - link "Client vulnerability" [ref=e284]:
                  - /url: /en-eu/help/client-vulnerability
                - link "Contact us" [ref=e286]:
                  - /url: /en-eu/contact-us
            - generic [ref=e287]:
              - generic [ref=e288]: Legal
              - generic [ref=e289]:
                - link "Terms & policies" [ref=e291]:
                  - /url: /en-eu/terms-and-policies
                - link "Complaints procedure - Capital Com Group Ltd" [ref=e293]:
                  - /url: /en-eu/terms-and-policies/complaints-procedure-cceu
                - link "Complaints procedure - Capital Com SV Investments Limited" [ref=e295]:
                  - /url: /en-eu/terms-and-policies/complaints-procedure
                - 'link "Compliance & legal: CFD trading" [ref=e297]':
                  - /url: /en-eu/terms-and-policies/compliance-and-legals
    - generic [ref=e299]:
      - paragraph [ref=e300]:
        - text: "Capital Com SV Investments Limited:"
        - text: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
        - strong [ref=e303]: "73"
        - strong [ref=e304]: "% of retail investor accounts lose money when trading CFDs with this provider"
        - text: . You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Please refer to our
        - link "Risk Disclosure Statement" [ref=e305]:
          - /url: https://capital.com/risk-disclosure-policy
        - text: .
      - paragraph [ref=e306]:
        - text: "Capital Com Group Ltd:"
        - text: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
        - strong [ref=e307]: The vast majority of retail investor accounts lose money when trading CFDs.
        - text: You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Please refer to our
        - link "Risk Disclosure Statement" [ref=e308]:
          - /url: https://capital.com/risk-disclosure-policy-cceu
      - paragraph [ref=e309]:
        - text: "Risk warning: The value of shares and ETFs bought through a share dealing account can fall as well as rise, which could mean getting back less than you originally put in. Past performance is no guarantee of future results."
        - text: Transactions in non-deliverable over-the-counter instruments, such as knock-out options and CFDs are complex financial products that carry a high risk of losing all invested capital. Such products are not suitable for all investors, as they may lead to both gains and significant losses. Before engaging in this type of trading, you should carefully consider whether you understand how these instruments work and whether you can afford to take the high risk of losing your money. Knock-out options available only for residents of Germany, Slovakia, Bulgaria, Slovenia, Croatia, Luxembourg, Iceland, Liechtenstein, Hungary, Greece, Finland, Estonia, Latvia, France, Netherlands, Lithuania, Czech Republic, Ireland, Norway, Denmark, Italy, Poland, Spain, Romania, Austria, Sweden, and Portugal.
        - text: For professional clients, there is a risk of losing more than the initial deposit. The information on this website is general in nature and does not consider your financial situation, objectives or needs. Please review our legal documents and ensure you fully understand the risks before making any trading decisions. We encourage you to use the training services of our company to better understand the risks before engaging in trading operations.
      - paragraph [ref=e310]: "Capital Com SV Investments Limited is a company incorporated in the Republic of Cyprus with registration number HE 354252 and is authorised and regulated by the Cyprus Securities and Exchange Commission (License Number 319/17). Registered Office: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cyprus."
      - paragraph [ref=e311]: "Capital Com Group Ltd is a company incorporated in the Republic of Cyprus with registration number ΗΕ 446198 and is authorised and regulated by the Cyprus Securities and Exchange Commission (License Number 463/25). Registered Office: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cyprus."
      - paragraph [ref=e312]: The information on this site is not directed at residents of the United States, Canada and Belgium or any particular country outside the EEA, and is not intended for distribution to or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
    - generic [ref=e313]:
      - paragraph [ref=e314]: © 2026 Capital Com SV Investments Limited
      - generic [ref=e315]:
        - link "Sitemap" [ref=e316]:
          - /url: /en-eu/sitemap
        - link "Cookie Settings" [ref=e317]:
          - /url: ""
        - link "Regulations" [ref=e318]:
          - /url: /en-eu/terms-and-policies/regulations
        - link "Terms and Policies" [ref=e319]:
          - /url: /en-eu/terms-and-policies
        - link "Complaints Procedure" [ref=e320]:
          - /url: /en-eu/terms-and-policies/complaints-procedures
  - generic [ref=e323]:
    - generic [ref=e324]:
      - heading "Hey, looks like you’re in United States of America" [level=3] [ref=e326]
      - paragraph [ref=e327]: The products and services listed on this website are not available in United States of America.
    - button "Stay here" [active] [ref=e329] [cursor=pointer]
  - button [ref=e330] [cursor=pointer]
  - dialog "Cookie banner" [ref=e332]:
    - generic [ref=e333]:
      - paragraph [ref=e335]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e336] [cursor=pointer]:
          - /url: https://capital.com/cookies-policy-cysec
          - text: Cookie Policy
        - text: .
      - generic [ref=e337]:
        - button "Reject all" [ref=e338] [cursor=pointer]
        - button "Allow all cookies" [ref=e339] [cursor=pointer]
        - button "Cookie settings" [ref=e340] [cursor=pointer]
  - alert [ref=e341]
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