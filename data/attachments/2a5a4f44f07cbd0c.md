# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/about.spec.ts >> [FCA EN | authorized] About / Legal / Complaints >> [banner_with_steps] -> platformPage
- Location: src/fixtures/content-section.ts:41:25

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/trading\/platform\//
Received string:  "https://capital.com/en-gb/help/complaints"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://capital.com/en-gb/help/complaints"


Call Log:
- Timeout 15000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]:
      - text: Spread bets and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
      - strong [ref=e8]: 61% of retail investor accounts lose money when trading spread bets and CFDs with this provider
      - text: . You should consider whether you understand how spread bets and CFDs work and whether you can afford to take the high risk of losing your money.
    - generic [ref=e10]:
      - link [ref=e11] [cursor=pointer]:
        - /url: /en-gb
        - img [ref=e12]
      - generic [ref=e17]:
        - navigation [ref=e18]:
          - button "Trading" [ref=e19]:
            - button "Trading" [ref=e20]:
              - generic [ref=e21]: Trading
          - button "Markets" [ref=e22]:
            - button "Markets" [ref=e23]:
              - generic [ref=e24]: Markets
          - link "Pricing" [ref=e27] [cursor=pointer]:
            - /url: /en-gb/ways-to-trade/fees-and-charges
          - button "About" [ref=e28]:
            - button "About" [ref=e29]:
              - generic [ref=e30]: About
        - button "en" [ref=e31] [cursor=pointer]:
          - generic [ref=e33]: en
      - generic [ref=e35]:
        - button "Log In" [ref=e36] [cursor=pointer]: Log In
        - button "Open account" [ref=e37] [cursor=pointer]: Open account
      - button "Search" [ref=e38] [cursor=pointer]
  - generic [ref=e39]:
    - paragraph [ref=e42]:
      - generic [ref=e43]:
        - link "Home" [ref=e44] [cursor=pointer]:
          - /url: /en-gb
        - text: •
      - generic [ref=e45]:
        - link "Help centre" [ref=e46] [cursor=pointer]:
          - /url: /en-gb/help
        - text: •
      - text: Complaints
    - generic [ref=e47]:
      - heading "Complaints" [level=1] [ref=e53]
      - generic [ref=e55]:
        - paragraph [ref=e56]: "Please see the following pdf for our full complaints procedure:"
        - paragraph [ref=e57]:
          - link "Complaints Procedure (CCUK)" [ref=e58] [cursor=pointer]:
            - /url: https://capital.com/complaints-procedure-fca
        - paragraph [ref=e59]:
          - text: Additional contact information and FAQs can also be found in our
          - link "support centre" [ref=e60] [cursor=pointer]:
            - /url: https://capital.com/en-gb/contact-us
          - text: .
      - generic [ref=e63]:
        - heading "Complaint" [level=2] [ref=e64]
        - generic [ref=e65]: "*All fields are required"
        - generic [ref=e66]:
          - button "Name is required" [ref=e67] [cursor=pointer]:
            - button [ref=e68]:
              - textbox "name" [ref=e70]:
                - /placeholder: "Full name "
            - generic: Name is required
          - button "email is required" [ref=e71] [cursor=pointer]:
            - button [ref=e72]:
              - textbox "email" [ref=e74]:
                - /placeholder: Registered email
            - generic: email is required
          - button "Message is required" [ref=e75] [cursor=pointer]:
            - textbox "message" [ref=e76]:
              - /placeholder: Description
            - generic: Message is required
        - generic [ref=e77]:
          - button "Submit" [disabled]: Submit
      - generic [ref=e80]:
        - generic [ref=e81]:
          - heading "Ready to join a leading broker?" [level=2] [ref=e82]
          - generic [ref=e83]: Join our community of traders worldwide
        - generic [ref=e84]:
          - button [active] [ref=e86] [cursor=pointer]
          - generic [ref=e89]: 1. Create your account
          - generic [ref=e90]: 2. Make your first deposit
          - generic [ref=e91]: 3. Start trading
  - contentinfo [ref=e93]:
    - generic [ref=e94]:
      - link [ref=e95] [cursor=pointer]:
        - /url: /en-gb
        - img [ref=e96]
      - generic [ref=e100]:
        - link [ref=e101] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e102] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e103] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e104]:
      - generic [ref=e105]:
        - generic [ref=e106]:
          - generic [ref=e107]:
            - generic [ref=e108]: "Country / Region:"
            - button "United Kingdom" [ref=e109] [cursor=pointer]:
              - generic [ref=e111]: United Kingdom
          - generic [ref=e112]: •
          - generic [ref=e113]:
            - generic [ref=e114]: "Language:"
            - button "English" [ref=e115] [cursor=pointer]:
              - generic [ref=e116]: English
        - generic [ref=e117]:
          - generic [ref=e118]: "Also you can contact us:"
          - link "+442030978888" [ref=e121] [cursor=pointer]:
            - /url: tel:+442030978888
            - strong [ref=e122]: "+442030978888"
            - strong
          - generic [ref=e123]: •
          - link "support@capital.com" [ref=e125] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e126]: support@capital.com
      - generic [ref=e127]:
        - generic [ref=e128]:
          - strong [ref=e130]: Trading
          - generic [ref=e131]:
            - generic [ref=e132]:
              - generic [ref=e133]: Trading
              - generic [ref=e134]:
                - link "Trade CFDs" [ref=e136] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/cfd-trading
                - link "Spread betting" [ref=e138] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/spread-betting
                - link "Get pro account" [ref=e140] [cursor=pointer]:
                  - /url: /en-gb/professional
                - link "Get demo account" [ref=e142] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/demo-account
                - link "1X" [ref=e144] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/1x
            - generic [ref=e145]:
              - generic [ref=e146]: Platforms
              - generic [ref=e147]:
                - link "Mobile app" [ref=e149] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/mobile-apps
                - link "Web platform" [ref=e151] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/web-platform
                - link "TradingView" [ref=e153] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/trading-view
                - link "MT4" [ref=e155] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/mt4
                - link "API access" [ref=e157] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/api-development-guide
            - generic [ref=e158]:
              - generic [ref=e159]: Learn
              - generic [ref=e160]:
                - link "Trading strategies" [ref=e162] [cursor=pointer]:
                  - /url: /en-gb/learn/trading-strategies
                - link "Technical analysis" [ref=e164] [cursor=pointer]:
                  - /url: /en-gb/learn/technical-analysis
                - link "Trading psychology" [ref=e166] [cursor=pointer]:
                  - /url: /en-gb/learn/trading-psychology
                - link "All resources" [ref=e168] [cursor=pointer]:
                  - /url: /en-gb/learn
        - generic [ref=e169]:
          - strong [ref=e171]: Markets
          - generic [ref=e172]:
            - generic [ref=e173]:
              - generic [ref=e174]: Our markets
              - generic [ref=e175]:
                - link "Markets overview" [ref=e177] [cursor=pointer]:
                  - /url: /en-gb/markets
                - link "Shares" [ref=e179] [cursor=pointer]:
                  - /url: /en-gb/markets/shares
                - link "Forex" [ref=e181] [cursor=pointer]:
                  - /url: /en-gb/markets/forex
                - link "Indices" [ref=e183] [cursor=pointer]:
                  - /url: /en-gb/markets/indices
                - link "Commodities" [ref=e185] [cursor=pointer]:
                  - /url: /en-gb/markets/commodities
                - link "Bonds" [ref=e187] [cursor=pointer]:
                  - /url: /en-gb/markets/bonds
                - link "Interest rates" [ref=e189] [cursor=pointer]:
                  - /url: /en-gb/markets/interest-rates
            - generic [ref=e190]:
              - generic [ref=e191]: Market info
              - generic [ref=e192]:
                - link "Market analysis" [ref=e194] [cursor=pointer]:
                  - /url: /en-gb/analysis
                - link "Markets pricing" [ref=e196] [cursor=pointer]:
                  - /url: /en-gb/about-us/how-our-markets-are-priced
        - link "Pricing" [ref=e199] [cursor=pointer]:
          - /url: /en-gb/ways-to-trade/fees-and-charges
          - strong [ref=e200]: Pricing
        - generic [ref=e201]:
          - strong [ref=e203]: About
          - generic [ref=e204]:
            - generic [ref=e205]:
              - generic [ref=e206]: Who we are
              - generic [ref=e207]:
                - link "Company" [ref=e209] [cursor=pointer]:
                  - /url: /en-gb/about-us
                - link "Our offices" [ref=e211] [cursor=pointer]:
                  - /url: /en-gb/about-us/our-offices
                - link "Press centre" [ref=e213] [cursor=pointer]:
                  - /url: /en-gb/media-centre
                - link "Investor Relations" [ref=e215] [cursor=pointer]:
                  - /url: /en-gb/about-us/investor-relations
                - link "Is capital.com safe?" [ref=e217] [cursor=pointer]:
                  - /url: /en-gb/security-measures
                - link "Our business model" [ref=e219] [cursor=pointer]:
                  - /url: /en-gb/about-us/how-capital-makes-money
            - generic [ref=e220]:
              - generic [ref=e221]: Work with us
              - generic [ref=e222]:
                - link "Careers" [ref=e224] [cursor=pointer]:
                  - /url: /en-gb/about-us/careers
                - link "Partnerships" [ref=e226] [cursor=pointer]:
                  - /url: /en-gb/partnerships
            - generic [ref=e227]:
              - generic [ref=e228]: Help
              - generic [ref=e229]:
                - link "Help centre" [ref=e231] [cursor=pointer]:
                  - /url: /en-gb/help
                - link "Client vulnerability" [ref=e233] [cursor=pointer]:
                  - /url: /en-gb/help/client-vulnerability
                - link "Contact us" [ref=e235] [cursor=pointer]:
                  - /url: /en-gb/contact-us
            - generic [ref=e236]:
              - generic [ref=e237]: Legal
              - generic [ref=e238]:
                - link "Terms & policies" [ref=e240] [cursor=pointer]:
                  - /url: /en-gb/terms-and-policies
                - link "Complaints" [ref=e242] [cursor=pointer]:
                  - /url: /en-gb/help/complaints
    - generic [ref=e244]:
      - paragraph [ref=e245]: Risk warning
      - paragraph [ref=e246]:
        - strong [ref=e247]: All Trading involves risk.
        - text: Spread bets and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
        - strong [ref=e248]: 61% of retail investor accounts lose money when trading spread bets and CFDs with this provider
        - text: . You should consider whether you understand how spread bets and CFDs work and whether you can afford to take the high risk of losing your money. Professional clients can lose more than they deposit. Please refer to our
        - link "Risk Disclosure Statement" [ref=e249] [cursor=pointer]:
          - /url: https://capital.com/risk-disclosure-statement-fca
      - paragraph [ref=e250]:
        - text: 1X is a non-leveraged CFD. It is a derivative, and is therefore a complex product. The value of your investment can go down as well as up, and you may get back less than you invest.
        - text: Crypto Derivatives are not available to Retail clients registered with Capital Com (UK) Ltd.
        - text: The value of shares and ETFs bought through a share dealing account can fall as well as rise, which could mean getting back less than you originally put in. Past performance is no guarantee of future results.
        - text: The information contained herein is not intended for distribution to residents in any country where such distribution or use would contravene any local law or regulatory requirement.
      - paragraph [ref=e251]
      - paragraph [ref=e252]: Capital Com (UK) Limited (“CCUK”) is registered in England and Wales with company registration number 10506220. CCUK is Authorised and regulated by the Financial Conduct Authority (“FCA”), under registration number 793714.
    - generic [ref=e253]:
      - paragraph [ref=e254]: © 2026 Capital Com (UK) Limited
      - generic [ref=e255]:
        - link "Sitemap" [ref=e256] [cursor=pointer]:
          - /url: /en-gb/sitemap
        - link "Cookie settings" [ref=e257] [cursor=pointer]:
          - /url: ""
        - link "Clients Funds" [ref=e258] [cursor=pointer]:
          - /url: /en-gb/about-us/what-capital-does-with-your-money
        - link "Terms and Policies" [ref=e259] [cursor=pointer]:
          - /url: /en-gb/terms-and-policies
        - link "Complaints Procedure (CCUK)" [ref=e260] [cursor=pointer]:
          - /url: /en-gb/help/complaints
  - generic [ref=e262]:
    - button "Close modal" [ref=e263] [cursor=pointer]
    - generic [ref=e264]:
      - generic [ref=e266]:
        - img [ref=e267]
        - list [ref=e271]:
          - listitem [ref=e272]:
            - generic [ref=e273]: One app. 5,500+ markets
          - listitem [ref=e274]:
            - generic [ref=e275]: 24/7 support to assist you in 10+ languages
          - listitem [ref=e276]:
            - generic [ref=e277]: 75+ technical analysis indicators
          - listitem [ref=e278]:
            - generic [ref=e279]: Free trading education to build your skills
      - generic [ref=e280]:
        - generic [ref=e281]:
          - strong [ref=e282]: Sign up
          - paragraph [ref=e283]:
            - text: Already have an account?
            - button "Login" [ref=e284] [cursor=pointer]:
              - generic [ref=e285]: Login
        - generic [ref=e287]:
          - generic [ref=e288]:
            - button "Email address Please enter a valid Email" [ref=e289] [cursor=pointer]:
              - button "Email address" [ref=e290]:
                - generic [ref=e291]:
                  - textbox "email" [ref=e292]:
                    - /placeholder: " "
                  - generic: Email address
              - generic:
                - generic:
                  - listitem:
                    - generic: Please enter a valid Email
            - button "Password • At least one digit • At least one lower case letter • At least one special character • At least one upper case letter • Minimum 8 characters" [ref=e293] [cursor=pointer]:
              - button "Password" [ref=e294]:
                - generic [ref=e295]:
                  - textbox "password" [ref=e296]:
                    - /placeholder: " "
                  - generic: Password
              - generic:
                - generic:
                  - listitem:
                    - text: •
                    - generic: At least one digit
                  - listitem:
                    - text: •
                    - generic: At least one lower case letter
                  - listitem:
                    - text: •
                    - generic: At least one special character
                  - listitem:
                    - text: •
                    - generic: At least one upper case letter
                  - listitem:
                    - text: •
                    - generic: Minimum 8 characters
          - button "Continue" [ref=e297] [cursor=pointer]:
            - generic [ref=e298]: Continue
        - generic [ref=e299]:
          - separator [ref=e300]
          - generic [ref=e301]: OR
        - generic [ref=e302]:
          - iframe [ref=e305]:
            - button "Sign in with Google. Opens in new tab" [ref=f5e3] [cursor=pointer]:
              - img [ref=f5e7]
          - button [ref=e306] [cursor=pointer]
        - paragraph [ref=e308]:
          - generic [ref=e309]:
            - text: By creating an account, I confirm that I have read and understood the
            - strong [ref=e310]:
              - link "Privacy Policy" [ref=e311] [cursor=pointer]:
                - /url: /en-gb/terms-and-policies
  - button [ref=e312] [cursor=pointer]
  - dialog "Cookie banner" [ref=e314]:
    - generic [ref=e315]:
      - paragraph [ref=e317]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e318] [cursor=pointer]:
          - /url: https://capital.com/cookies-policy-fca
          - text: Cookie Policy
        - text: .
      - generic [ref=e319]:
        - button "Reject all" [ref=e320] [cursor=pointer]
        - button "Allow all cookies" [ref=e321] [cursor=pointer]
        - button "Cookie settings" [ref=e322] [cursor=pointer]
  - alert [ref=e323]
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
  63  |                 importantNoticeModal.confirmIfVisible();
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