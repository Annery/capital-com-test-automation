# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/trading.spec.ts >> [FCA EN | authorized] Trading / Learn / Trading psychology >> [banner_with_steps] -> platformPage
- Location: src/fixtures/content-section.ts:41:25

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/trading\/platform\//
Received string:  "https://capital.com/en-gb/learn/trading-psychology"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://capital.com/en-gb/learn/trading-psychology"


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
        - link "All resources" [ref=e46] [cursor=pointer]:
          - /url: /en-gb/learn
        - text: •
      - text: Trading psychology
    - generic [ref=e47]:
      - generic [ref=e52]:
        - heading "An introduction to trading psychology" [level=1] [ref=e53]
        - generic [ref=e54]:
          - paragraph [ref=e55]: Understanding and learning how to mitigate the negative effects of trading psychology is one the most important lessons a trader can learn.
          - paragraph [ref=e56]: Read on to learn more about psychology in trading, how to master trading psychology, and what trading psychology looks like in action.
      - generic [ref=e60]:
        - heading "What is trading psychology?" [level=2] [ref=e61]
        - generic [ref=e63]: Trading psychology refers to the emotional and cognitive factors that can influence traders’ decision-making processes within the financial markets.
        - paragraph [ref=e64]:
          - text: Wherever you are in your trading journey, learning how to make better decisions in the markets goes way beyond analysing charts and understanding market
          - strong [ref=e65]
          - text: trends; it also involves learning how to manage your emotions.
        - paragraph [ref=e66]: All of this comes down to learning how to master trading psychology. Broadly, trading psychology encompasses the emotional and mental factors – including fear, greed, impatience, and overconfidence – that can influence traders’ decision-making processes.
        - paragraph [ref=e67]: Understanding trading psychology and how it can impact that way you trade involves developing emotional resilience, discipline, and a strategic mindset.
      - generic [ref=e69]:
        - heading "How can psychology affect trading?" [level=2] [ref=e70]
        - paragraph [ref=e71]: Psychology can significantly impact your trading activities by influencing your decision-making processes, and in turn, your behaviour in the markets.
        - paragraph [ref=e72]: Emotions such as fear, greed, or regret may lead you to make impulsive decisions, while overconfidence could trigger you to take excessive risks.
        - paragraph [ref=e73]:
          - text: While it is only human to become subject to emotional triggers, traders who are not mindful of their psychological states (and all the biases that come with these) could be more likely to deviate from their
          - link "trading strategies" [ref=e74] [cursor=pointer]:
            - /url: https://capital.com/en-gb/learn/trading-strategies
          - text: .
        - paragraph [ref=e75]:
          - text: On top of this, psychological factors could contribute to poor
          - link "risk management" [ref=e76] [cursor=pointer]:
            - /url: /en-gb/learn/risk-management
          - text: ", hindering your ability to cut losses or let potential profits run."
      - generic [ref=e78]:
        - 'heading "Trading psychology in action: biases, effects, fallacies, and sentiment in trading" [level=2] [ref=e79]'
        - paragraph [ref=e80]: When learning how to master trading psychology, traders can look at different types of cognitive biases. These can include biases themselves, as well as effects, fallacies, and sentiment in trading.
        - paragraph [ref=e81]: You can learn more about each of these trading psychology examples in our comprehensive guides below.
      - generic [ref=e85]:
        - generic [ref=e88]:
          - heading "Effects in trading" [level=3] [ref=e89]
          - generic [ref=e90]: Find out how the disposition effect and the endowment effect could impact your trading decisions.
          - link "Go to effects in trading guide" [ref=e91] [cursor=pointer]:
            - /url: /en-gb/learn/trading-psychology/effects-in-trading
            - generic [ref=e92]: Go to effects in trading guide
        - generic [ref=e95]:
          - heading "Fallacies in trading" [level=3] [ref=e96]
          - generic [ref=e97]: Discover how to recognise the hot-hand fallacy and gambler’s fallacy when trading.
          - link "Go to fallacies in trading guide" [ref=e98] [cursor=pointer]:
            - /url: /en-gb/learn/trading-psychology/fallacies-in-trading
            - generic [ref=e99]: Go to fallacies in trading guide
        - generic [ref=e102]:
          - heading "Sentiment in trading" [level=3] [ref=e103]
          - generic [ref=e104]: Discover how emotions such as fear and greed can influence your trading activities.
          - link "Go to sentiment in trading guide" [ref=e105] [cursor=pointer]:
            - /url: /en-gb/learn/trading-psychology/sentiment-in-trading
            - generic [ref=e106]: Go to sentiment in trading guide
        - generic [ref=e109]:
          - heading "Biases in trading" [level=3] [ref=e110]
          - generic [ref=e111]: See how biases in trading, such as anchoring bias, confirmation bias and familiarity bias, can impact your moves in the markets.
          - link "Go to biases in trading guide" [ref=e112] [cursor=pointer]:
            - /url: /en-gb/learn/trading-psychology/biases-in-trading
            - generic [ref=e113]: Go to biases in trading guide
        - generic [ref=e116]:
          - heading "Fear and Greed Index" [level=3] [ref=e117]
          - generic [ref=e118]: See how emotional biases like fear, greed, and overconfidence can influence trading decisions and market behaviour.
          - link "Go to fear and greed index" [ref=e119] [cursor=pointer]:
            - /url: /en-gb/learn/trading-psychology/fear-and-greed-index
            - generic [ref=e120]: Go to fear and greed index
      - heading "Frequently asked questions" [level=2] [ref=e123]
      - generic [ref=e125]:
        - group [ref=e126]:
          - generic "What is the trading psychology?" [ref=e127] [cursor=pointer]:
            - heading "What is the trading psychology?" [level=3] [ref=e128]
        - group [ref=e129]:
          - generic "How does psychology affect trading?" [ref=e130] [cursor=pointer]:
            - heading "How does psychology affect trading?" [level=3] [ref=e131]
        - group [ref=e132]:
          - generic "How to control emotions and psychology in trading?" [ref=e133] [cursor=pointer]:
            - heading "How to control emotions and psychology in trading?" [level=3] [ref=e134]
        - group [ref=e135]:
          - generic "What is the psychology of a successful trader?" [ref=e136] [cursor=pointer]:
            - heading "What is the psychology of a successful trader?" [level=3] [ref=e137]
      - generic [ref=e140]:
        - generic [ref=e141]:
          - heading "Ready to join a leading broker?" [level=2] [ref=e142]
          - generic [ref=e143]: Join our community of traders worldwide
        - generic [ref=e144]:
          - button [active] [ref=e146] [cursor=pointer]
          - generic [ref=e149]: 1. Create your account
          - generic [ref=e150]: 2. Make your first deposit
          - generic [ref=e151]: 3. Start trading
  - contentinfo [ref=e153]:
    - generic [ref=e154]:
      - link [ref=e155] [cursor=pointer]:
        - /url: /en-gb
        - img [ref=e156]
      - generic [ref=e160]:
        - link [ref=e161] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e162] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e163] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e164]:
      - generic [ref=e165]:
        - generic [ref=e166]:
          - generic [ref=e167]:
            - generic [ref=e168]: "Country / Region:"
            - button "United Kingdom" [ref=e169] [cursor=pointer]:
              - generic [ref=e171]: United Kingdom
          - generic [ref=e172]: •
          - generic [ref=e173]:
            - generic [ref=e174]: "Language:"
            - button "English" [ref=e175] [cursor=pointer]:
              - generic [ref=e176]: English
        - generic [ref=e177]:
          - generic [ref=e178]: "Also you can contact us:"
          - link "+442030978888" [ref=e181] [cursor=pointer]:
            - /url: tel:+442030978888
            - strong [ref=e182]: "+442030978888"
            - strong
          - generic [ref=e183]: •
          - link "support@capital.com" [ref=e185] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e186]: support@capital.com
      - generic [ref=e187]:
        - generic [ref=e188]:
          - strong [ref=e190]: Trading
          - generic [ref=e191]:
            - generic [ref=e192]:
              - generic [ref=e193]: Trading
              - generic [ref=e194]:
                - link "Trade CFDs" [ref=e196] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/cfd-trading
                - link "Spread betting" [ref=e198] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/spread-betting
                - link "Get pro account" [ref=e200] [cursor=pointer]:
                  - /url: /en-gb/professional
                - link "Get demo account" [ref=e202] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/demo-account
                - link "1X" [ref=e204] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/1x
            - generic [ref=e205]:
              - generic [ref=e206]: Platforms
              - generic [ref=e207]:
                - link "Mobile app" [ref=e209] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/mobile-apps
                - link "Web platform" [ref=e211] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/web-platform
                - link "TradingView" [ref=e213] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/trading-view
                - link "MT4" [ref=e215] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/mt4
                - link "API access" [ref=e217] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/api-development-guide
            - generic [ref=e218]:
              - generic [ref=e219]: Learn
              - generic [ref=e220]:
                - link "Trading strategies" [ref=e222] [cursor=pointer]:
                  - /url: /en-gb/learn/trading-strategies
                - link "Technical analysis" [ref=e224] [cursor=pointer]:
                  - /url: /en-gb/learn/technical-analysis
                - link "Trading psychology" [ref=e226] [cursor=pointer]:
                  - /url: /en-gb/learn/trading-psychology
                - link "All resources" [ref=e228] [cursor=pointer]:
                  - /url: /en-gb/learn
        - generic [ref=e229]:
          - strong [ref=e231]: Markets
          - generic [ref=e232]:
            - generic [ref=e233]:
              - generic [ref=e234]: Our markets
              - generic [ref=e235]:
                - link "Markets overview" [ref=e237] [cursor=pointer]:
                  - /url: /en-gb/markets
                - link "Shares" [ref=e239] [cursor=pointer]:
                  - /url: /en-gb/markets/shares
                - link "Forex" [ref=e241] [cursor=pointer]:
                  - /url: /en-gb/markets/forex
                - link "Indices" [ref=e243] [cursor=pointer]:
                  - /url: /en-gb/markets/indices
                - link "Commodities" [ref=e245] [cursor=pointer]:
                  - /url: /en-gb/markets/commodities
                - link "Bonds" [ref=e247] [cursor=pointer]:
                  - /url: /en-gb/markets/bonds
                - link "Interest rates" [ref=e249] [cursor=pointer]:
                  - /url: /en-gb/markets/interest-rates
            - generic [ref=e250]:
              - generic [ref=e251]: Market info
              - generic [ref=e252]:
                - link "Market analysis" [ref=e254] [cursor=pointer]:
                  - /url: /en-gb/analysis
                - link "Markets pricing" [ref=e256] [cursor=pointer]:
                  - /url: /en-gb/about-us/how-our-markets-are-priced
        - link "Pricing" [ref=e259] [cursor=pointer]:
          - /url: /en-gb/ways-to-trade/fees-and-charges
          - strong [ref=e260]: Pricing
        - generic [ref=e261]:
          - strong [ref=e263]: About
          - generic [ref=e264]:
            - generic [ref=e265]:
              - generic [ref=e266]: Who we are
              - generic [ref=e267]:
                - link "Company" [ref=e269] [cursor=pointer]:
                  - /url: /en-gb/about-us
                - link "Our offices" [ref=e271] [cursor=pointer]:
                  - /url: /en-gb/about-us/our-offices
                - link "Press centre" [ref=e273] [cursor=pointer]:
                  - /url: /en-gb/media-centre
                - link "Investor Relations" [ref=e275] [cursor=pointer]:
                  - /url: /en-gb/about-us/investor-relations
                - link "Is capital.com safe?" [ref=e277] [cursor=pointer]:
                  - /url: /en-gb/security-measures
                - link "Our business model" [ref=e279] [cursor=pointer]:
                  - /url: /en-gb/about-us/how-capital-makes-money
            - generic [ref=e280]:
              - generic [ref=e281]: Work with us
              - generic [ref=e282]:
                - link "Careers" [ref=e284] [cursor=pointer]:
                  - /url: /en-gb/about-us/careers
                - link "Partnerships" [ref=e286] [cursor=pointer]:
                  - /url: /en-gb/partnerships
            - generic [ref=e287]:
              - generic [ref=e288]: Help
              - generic [ref=e289]:
                - link "Help centre" [ref=e291] [cursor=pointer]:
                  - /url: /en-gb/help
                - link "Client vulnerability" [ref=e293] [cursor=pointer]:
                  - /url: /en-gb/help/client-vulnerability
                - link "Contact us" [ref=e295] [cursor=pointer]:
                  - /url: /en-gb/contact-us
            - generic [ref=e296]:
              - generic [ref=e297]: Legal
              - generic [ref=e298]:
                - link "Terms & policies" [ref=e300] [cursor=pointer]:
                  - /url: /en-gb/terms-and-policies
                - link "Complaints" [ref=e302] [cursor=pointer]:
                  - /url: /en-gb/help/complaints
    - generic [ref=e304]:
      - paragraph [ref=e305]: Risk warning
      - paragraph [ref=e306]:
        - strong [ref=e307]: All Trading involves risk.
        - text: Spread bets and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
        - strong [ref=e308]: 61% of retail investor accounts lose money when trading spread bets and CFDs with this provider
        - text: . You should consider whether you understand how spread bets and CFDs work and whether you can afford to take the high risk of losing your money. Professional clients can lose more than they deposit. Please refer to our
        - link "Risk Disclosure Statement" [ref=e309] [cursor=pointer]:
          - /url: https://capital.com/risk-disclosure-statement-fca
      - paragraph [ref=e310]:
        - text: 1X is a non-leveraged CFD. It is a derivative, and is therefore a complex product. The value of your investment can go down as well as up, and you may get back less than you invest.
        - text: Crypto Derivatives are not available to Retail clients registered with Capital Com (UK) Ltd.
        - text: The value of shares and ETFs bought through a share dealing account can fall as well as rise, which could mean getting back less than you originally put in. Past performance is no guarantee of future results.
        - text: The information contained herein is not intended for distribution to residents in any country where such distribution or use would contravene any local law or regulatory requirement.
      - paragraph [ref=e311]
      - paragraph [ref=e312]: Capital Com (UK) Limited (“CCUK”) is registered in England and Wales with company registration number 10506220. CCUK is Authorised and regulated by the Financial Conduct Authority (“FCA”), under registration number 793714.
    - generic [ref=e313]:
      - paragraph [ref=e314]: © 2026 Capital Com (UK) Limited
      - generic [ref=e315]:
        - link "Sitemap" [ref=e316] [cursor=pointer]:
          - /url: /en-gb/sitemap
        - link "Cookie settings" [ref=e317] [cursor=pointer]:
          - /url: ""
        - link "Clients Funds" [ref=e318] [cursor=pointer]:
          - /url: /en-gb/about-us/what-capital-does-with-your-money
        - link "Terms and Policies" [ref=e319] [cursor=pointer]:
          - /url: /en-gb/terms-and-policies
        - link "Complaints Procedure (CCUK)" [ref=e320] [cursor=pointer]:
          - /url: /en-gb/help/complaints
  - generic [ref=e322]:
    - button "Close modal" [ref=e323] [cursor=pointer]
    - generic [ref=e324]:
      - generic [ref=e326]:
        - img [ref=e327]
        - list [ref=e331]:
          - listitem [ref=e332]:
            - generic [ref=e333]: One app. 5,500+ markets
          - listitem [ref=e334]:
            - generic [ref=e335]: 24/7 support to assist you in 10+ languages
          - listitem [ref=e336]:
            - generic [ref=e337]: 75+ technical analysis indicators
          - listitem [ref=e338]:
            - generic [ref=e339]: Free trading education to build your skills
      - generic [ref=e340]:
        - generic [ref=e341]:
          - strong [ref=e342]: Sign up
          - paragraph [ref=e343]:
            - text: Already have an account?
            - button "Login" [ref=e344] [cursor=pointer]:
              - generic [ref=e345]: Login
        - generic [ref=e347]:
          - generic [ref=e348]:
            - button "Email address Please enter a valid Email" [ref=e349] [cursor=pointer]:
              - button "Email address" [ref=e350]:
                - generic [ref=e351]:
                  - textbox "email" [ref=e352]:
                    - /placeholder: " "
                  - generic: Email address
              - generic:
                - generic:
                  - listitem:
                    - generic: Please enter a valid Email
            - button "Password • At least one digit • At least one lower case letter • At least one special character • At least one upper case letter • Minimum 8 characters" [ref=e353] [cursor=pointer]:
              - button "Password" [ref=e354]:
                - generic [ref=e355]:
                  - textbox "password" [ref=e356]:
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
          - button "Continue" [ref=e357] [cursor=pointer]:
            - generic [ref=e358]: Continue
        - generic [ref=e359]:
          - separator [ref=e360]
          - generic [ref=e361]: OR
        - generic [ref=e362]:
          - iframe [ref=e365]:
            - button "Sign in with Google. Opens in new tab" [ref=f1e3] [cursor=pointer]:
              - img [ref=f1e7]
          - button [ref=e366] [cursor=pointer]
        - paragraph [ref=e368]:
          - generic [ref=e369]:
            - text: By creating an account, I confirm that I have read and understood the
            - strong [ref=e370]:
              - link "Privacy Policy" [ref=e371] [cursor=pointer]:
                - /url: /en-gb/terms-and-policies
  - button [ref=e372] [cursor=pointer]
  - dialog "Cookie banner" [ref=e374]:
    - generic [ref=e375]:
      - paragraph [ref=e377]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e378] [cursor=pointer]:
          - /url: https://capital.com/cookies-policy-fca
          - text: Cookie Policy
        - text: .
      - generic [ref=e379]:
        - button "Reject all" [ref=e380] [cursor=pointer]
        - button "Allow all cookies" [ref=e381] [cursor=pointer]
        - button "Cookie settings" [ref=e382] [cursor=pointer]
  - alert [ref=e383]
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