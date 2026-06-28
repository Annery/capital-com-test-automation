# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: header/header-auth.spec.ts >> [FCA EN | authorized] Header auth entry >> Open platform opens the trading platform
- Location: tests/header/header-auth.spec.ts:23:9

# Error details

```
Error: locator.click: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('#header-panel').locator('a[data-type="btn_header_my_account"]').filter({ visible: true }).first()


Call Log:
- Timeout 15000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
  - generic [ref=e41]:
    - generic [ref=e42]:
      - generic [ref=e46]:
        - heading "Supported locally. Connected globally." [level=2] [ref=e47]:
          - generic [ref=e48]: Supported locally.
          - text: Connected globally.
        - paragraph [ref=e49]: Authorised and regulated by the Financial Conduct Authority (FCA)
      - generic [ref=e53]:
        - generic [ref=e57]:
          - generic [ref=e59]:
            - heading "In a market built for noise, we build for better decisions" [level=1] [ref=e60]
            - generic [ref=e62]:
              - text: Global
              - text: CFD trading platform
              - text: 5,500+ instruments
            - button "Open an account" [ref=e63] [cursor=pointer]: Open an account
          - generic [ref=e64]:
            - generic:
              - generic:
                - img "Hero slide 1 Bottom"
          - generic [ref=e66]:
            - link "Android" [ref=e67] [cursor=pointer]:
              - /url: /en-gb/trading-platforms/mobile-apps
            - link "IOS" [ref=e68] [cursor=pointer]:
              - /url: /en-gb/trading-platforms/mobile-apps
            - link "MT4" [ref=e69] [cursor=pointer]:
              - /url: /en-gb/trading-platforms/mt4
            - link "TradingView" [ref=e70] [cursor=pointer]:
              - /url: /en-gb/trading-platforms/trading-view
            - link "Web Terminal" [ref=e71] [cursor=pointer]:
              - /url: /en-gb/trading-platforms/web-platform
        - generic [ref=e74]:
          - img [ref=e75]
          - generic [ref=e76]:
            - generic [ref=e77]:
              - heading "5,500+ instruments. One decision environment" [level=2] [ref=e78]:
                - text: 5,500+ instruments.
                - text: One decision environment
              - link "Explore CFD markets" [ref=e79] [cursor=pointer]:
                - /url: /en-gb/markets
            - list [ref=e83]:
              - listitem [ref=e84]:
                - button "Commodities" [ref=e85] [cursor=pointer]:
                  - heading "Commodities" [level=3] [ref=e88]
              - listitem [ref=e89]:
                - button "Forex" [ref=e90] [cursor=pointer]:
                  - heading "Forex" [level=3] [ref=e93]
              - listitem [ref=e94]:
                - button "Shares" [ref=e95] [cursor=pointer]:
                  - heading "Shares" [level=3] [ref=e98]
              - listitem [ref=e99]:
                - button "Bonds" [ref=e100] [cursor=pointer]:
                  - heading "Bonds" [level=3] [ref=e103]
              - listitem [ref=e104]:
                - button "ETF" [ref=e105] [cursor=pointer]:
                  - heading "ETF" [level=3] [ref=e108]
              - listitem [ref=e109]:
                - button "Indices" [ref=e110] [cursor=pointer]:
                  - heading "Indices" [level=3] [ref=e113]
              - listitem [ref=e114]:
                - button "Interest rates" [ref=e115] [cursor=pointer]:
                  - heading "Interest rates" [level=3] [ref=e118]
              - listitem [ref=e119]:
                - button "Commodities" [ref=e120] [cursor=pointer]:
                  - heading "Commodities" [level=3] [ref=e123]
              - listitem [ref=e124]:
                - button "Forex" [ref=e125] [cursor=pointer]:
                  - heading "Forex" [level=3] [ref=e128]
              - listitem [ref=e129]:
                - button "Shares" [ref=e130] [cursor=pointer]:
                  - heading "Shares" [level=3] [ref=e133]
              - listitem [ref=e134]:
                - button "Bonds" [ref=e135] [cursor=pointer]:
                  - heading "Bonds" [level=3] [ref=e138]
              - listitem [ref=e139]:
                - button "ETF" [ref=e140] [cursor=pointer]:
                  - heading "ETF" [level=3] [ref=e143]
              - listitem [ref=e144]:
                - button "Indices" [ref=e145] [cursor=pointer]:
                  - heading "Indices" [level=3] [ref=e148]
              - listitem [ref=e149]:
                - button "Interest rates" [ref=e150] [cursor=pointer]:
                  - heading "Interest rates" [level=3] [ref=e153]
              - listitem [ref=e154]:
                - button "Commodities" [ref=e155] [cursor=pointer]:
                  - heading "Commodities" [level=3] [ref=e158]
              - listitem [ref=e159]:
                - button "Forex" [ref=e160] [cursor=pointer]:
                  - heading "Forex" [level=3] [ref=e163]
              - listitem [ref=e164]:
                - button "Shares" [ref=e165] [cursor=pointer]:
                  - heading "Shares" [level=3] [ref=e168]
              - listitem [ref=e169]:
                - button "Bonds" [ref=e170] [cursor=pointer]:
                  - heading "Bonds" [level=3] [ref=e173]
              - listitem [ref=e174]:
                - button "ETF" [ref=e175] [cursor=pointer]:
                  - heading "ETF" [level=3] [ref=e178]
              - listitem [ref=e179]:
                - button "Indices" [ref=e180] [cursor=pointer]:
                  - heading "Indices" [level=3] [ref=e183]
              - listitem [ref=e184]:
                - button "Interest rates" [ref=e185] [cursor=pointer]:
                  - heading "Interest rates" [level=3] [ref=e188]
    - generic [ref=e189]:
      - generic [ref=e191]:
        - heading "Every screen. One system." [level=2] [ref=e192]:
          - text: Every screen.
          - generic [ref=e193]: One system.
        - paragraph [ref=e194]: Multiple platforms, all markets, any device. Your trading infrastructure.
        - generic [ref=e195]:
          - link [ref=e196] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
          - link [ref=e197] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
          - link [ref=e198] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
      - generic:
        - generic:
          - generic:
            - img "Mobile platform"
        - generic:
          - generic:
            - img "Web platform"
    - generic [ref=e199]:
      - img [ref=e200]
      - generic [ref=e202]:
        - heading "A clear cost structure before you commit" [level=2] [ref=e203]
        - generic [ref=e204]:
          - list [ref=e205]:
            - listitem [ref=e206]:
              - heading "We earn through spreads on executed trades" [level=3] [ref=e207]
              - paragraph [ref=e208]: Transparent before the position.
            - listitem [ref=e209]:
              - heading "No deposit or withdrawal fees" [level=3] [ref=e210]
              - paragraph [ref=e211]: Trusted payments. Bank transfers, cards, digital wallets.
          - generic [ref=e212]:
            - generic [ref=e213]: Our full fee structure is available on our
            - link "Charges and fees page." [ref=e214] [cursor=pointer]:
              - /url: /en-gb/ways-to-trade/fees-and-charges
    - generic [ref=e215]:
      - generic [ref=e217]:
        - img "risk graph 1" [ref=e219]
        - img "risk graph 2" [ref=e221]
      - generic [ref=e222]:
        - generic [ref=e224]:
          - heading "Most traders lose money" [level=2] [ref=e226]
          - heading "Markets play a part" [level=2] [ref=e228]
          - heading "Decisions make the difference" [level=2] [ref=e230]
        - generic [ref=e231]:
          - generic [ref=e233]:
            - heading "Set while calm." [level=2] [ref=e234]
            - heading "Active under pressure." [level=2] [ref=e235]
          - generic [ref=e236]:
            - generic [ref=e237]:
              - heading "Set stop-loss before trade" [level=3] [ref=e238]
              - img "trading" [ref=e240]
            - generic [ref=e241]:
              - heading "Select leverage" [level=3] [ref=e242]
              - img "cfd" [ref=e244]
              - img "leverage" [ref=e246]
            - generic [ref=e247]:
              - heading "Confirm order" [level=3] [ref=e248]
              - img "bottomSheet" [ref=e250]
    - generic [ref=e251]:
      - generic [ref=e252]:
        - heading "Discipline is visible. So is trust." [level=2] [ref=e254]:
          - text: Discipline is visible.
          - text: So is trust.
        - generic [ref=e255]:
          - img "Secondary phone" [ref=e258]
          - img "Main phone" [ref=e261]
      - list [ref=e267]:
        - listitem [ref=e268]:
          - link "4.7 Ratings and Reviews" [ref=e269] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e270]: "4.7"
            - generic [ref=e271]: Ratings and Reviews
        - listitem [ref=e272]:
          - link "4.7 Ratings and Reviews" [ref=e273] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e274]: "4.7"
            - generic [ref=e275]: Ratings and Reviews
        - listitem [ref=e276]:
          - link "4.6 TradingView" [ref=e277] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - generic [ref=e278]: "4.6"
            - generic [ref=e279]: TradingView
        - listitem [ref=e280]:
          - link "4.6 Trustpilot" [ref=e281] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - generic [ref=e282]: "4.6"
            - generic [ref=e283]: Trustpilot
        - listitem [ref=e284]:
          - link "4.7 Ratings and Reviews" [ref=e285] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e286]: "4.7"
            - generic [ref=e287]: Ratings and Reviews
        - listitem [ref=e288]:
          - link "4.7 Ratings and Reviews" [ref=e289] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e290]: "4.7"
            - generic [ref=e291]: Ratings and Reviews
        - listitem [ref=e292]:
          - link "4.6 TradingView" [ref=e293] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - generic [ref=e294]: "4.6"
            - generic [ref=e295]: TradingView
        - listitem [ref=e296]:
          - link "4.6 Trustpilot" [ref=e297] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - generic [ref=e298]: "4.6"
            - generic [ref=e299]: Trustpilot
        - listitem [ref=e300]:
          - link "4.7 Ratings and Reviews" [ref=e301] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e302]: "4.7"
            - generic [ref=e303]: Ratings and Reviews
        - listitem [ref=e304]:
          - link "4.7 Ratings and Reviews" [ref=e305] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e306]: "4.7"
            - generic [ref=e307]: Ratings and Reviews
        - listitem [ref=e308]:
          - link "4.6 TradingView" [ref=e309] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - generic [ref=e310]: "4.6"
            - generic [ref=e311]: TradingView
        - listitem [ref=e312]:
          - link "4.6 Trustpilot" [ref=e313] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - generic [ref=e314]: "4.6"
            - generic [ref=e315]: Trustpilot
  - contentinfo [ref=e317]:
    - generic [ref=e318]:
      - link [ref=e319] [cursor=pointer]:
        - /url: /en-gb
        - img [ref=e320]
      - generic [ref=e324]:
        - link [ref=e325] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e326] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e327] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e328]:
      - generic [ref=e329]:
        - generic [ref=e330]:
          - generic [ref=e331]:
            - generic [ref=e332]: "Country / Region:"
            - button "United Kingdom" [ref=e333] [cursor=pointer]:
              - generic [ref=e335]: United Kingdom
          - generic [ref=e336]: •
          - generic [ref=e337]:
            - generic [ref=e338]: "Language:"
            - button "English" [ref=e339] [cursor=pointer]:
              - generic [ref=e340]: English
        - generic [ref=e341]:
          - generic [ref=e342]: "Also you can contact us:"
          - link "+442030978888" [ref=e345] [cursor=pointer]:
            - /url: tel:+442030978888
            - strong [ref=e346]: "+442030978888"
            - strong
          - generic [ref=e347]: •
          - link "support@capital.com" [ref=e349] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e350]: support@capital.com
      - generic [ref=e351]:
        - generic [ref=e352]:
          - strong [ref=e354]: Trading
          - generic [ref=e355]:
            - generic [ref=e356]:
              - generic [ref=e357]: Trading
              - generic [ref=e358]:
                - link "Trade CFDs" [ref=e360] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/cfd-trading
                - link "Spread betting" [ref=e362] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/spread-betting
                - link "Get pro account" [ref=e364] [cursor=pointer]:
                  - /url: /en-gb/professional
                - link "Get demo account" [ref=e366] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/demo-account
                - link "1X" [ref=e368] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/1x
            - generic [ref=e369]:
              - generic [ref=e370]: Platforms
              - generic [ref=e371]:
                - link "Mobile app" [ref=e373] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/mobile-apps
                - link "Web platform" [ref=e375] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/web-platform
                - link "TradingView" [ref=e377] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/trading-view
                - link "MT4" [ref=e379] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/mt4
                - link "API access" [ref=e381] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/api-development-guide
            - generic [ref=e382]:
              - generic [ref=e383]: Learn
              - generic [ref=e384]:
                - link "Trading strategies" [ref=e386] [cursor=pointer]:
                  - /url: /en-gb/learn/trading-strategies
                - link "Technical analysis" [ref=e388] [cursor=pointer]:
                  - /url: /en-gb/learn/technical-analysis
                - link "Trading psychology" [ref=e390] [cursor=pointer]:
                  - /url: /en-gb/learn/trading-psychology
                - link "All resources" [ref=e392] [cursor=pointer]:
                  - /url: /en-gb/learn
        - generic [ref=e393]:
          - strong [ref=e395]: Markets
          - generic [ref=e396]:
            - generic [ref=e397]:
              - generic [ref=e398]: Our markets
              - generic [ref=e399]:
                - link "Markets overview" [ref=e401] [cursor=pointer]:
                  - /url: /en-gb/markets
                - link "Shares" [ref=e403] [cursor=pointer]:
                  - /url: /en-gb/markets/shares
                - link "Forex" [ref=e405] [cursor=pointer]:
                  - /url: /en-gb/markets/forex
                - link "Indices" [ref=e407] [cursor=pointer]:
                  - /url: /en-gb/markets/indices
                - link "Commodities" [ref=e409] [cursor=pointer]:
                  - /url: /en-gb/markets/commodities
                - link "Bonds" [ref=e411] [cursor=pointer]:
                  - /url: /en-gb/markets/bonds
                - link "Interest rates" [ref=e413] [cursor=pointer]:
                  - /url: /en-gb/markets/interest-rates
            - generic [ref=e414]:
              - generic [ref=e415]: Market info
              - generic [ref=e416]:
                - link "Market analysis" [ref=e418] [cursor=pointer]:
                  - /url: /en-gb/analysis
                - link "Markets pricing" [ref=e420] [cursor=pointer]:
                  - /url: /en-gb/about-us/how-our-markets-are-priced
        - link "Pricing" [ref=e423] [cursor=pointer]:
          - /url: /en-gb/ways-to-trade/fees-and-charges
          - strong [ref=e424]: Pricing
        - generic [ref=e425]:
          - strong [ref=e427]: About
          - generic [ref=e428]:
            - generic [ref=e429]:
              - generic [ref=e430]: Who we are
              - generic [ref=e431]:
                - link "Company" [ref=e433] [cursor=pointer]:
                  - /url: /en-gb/about-us
                - link "Our offices" [ref=e435] [cursor=pointer]:
                  - /url: /en-gb/about-us/our-offices
                - link "Press centre" [ref=e437] [cursor=pointer]:
                  - /url: /en-gb/media-centre
                - link "Investor Relations" [ref=e439] [cursor=pointer]:
                  - /url: /en-gb/about-us/investor-relations
                - link "Is capital.com safe?" [ref=e441] [cursor=pointer]:
                  - /url: /en-gb/security-measures
                - link "Our business model" [ref=e443] [cursor=pointer]:
                  - /url: /en-gb/about-us/how-capital-makes-money
            - generic [ref=e444]:
              - generic [ref=e445]: Work with us
              - generic [ref=e446]:
                - link "Careers" [ref=e448] [cursor=pointer]:
                  - /url: /en-gb/about-us/careers
                - link "Partnerships" [ref=e450] [cursor=pointer]:
                  - /url: /en-gb/partnerships
            - generic [ref=e451]:
              - generic [ref=e452]: Help
              - generic [ref=e453]:
                - link "Help centre" [ref=e455] [cursor=pointer]:
                  - /url: /en-gb/help
                - link "Client vulnerability" [ref=e457] [cursor=pointer]:
                  - /url: /en-gb/help/client-vulnerability
                - link "Contact us" [ref=e459] [cursor=pointer]:
                  - /url: /en-gb/contact-us
            - generic [ref=e460]:
              - generic [ref=e461]: Legal
              - generic [ref=e462]:
                - link "Terms & policies" [ref=e464] [cursor=pointer]:
                  - /url: /en-gb/terms-and-policies
                - link "Complaints" [ref=e466] [cursor=pointer]:
                  - /url: /en-gb/help/complaints
    - generic [ref=e468]:
      - paragraph [ref=e469]: Risk warning
      - paragraph [ref=e470]:
        - strong [ref=e471]: All Trading involves risk.
        - text: Spread bets and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
        - strong [ref=e472]: 61% of retail investor accounts lose money when trading spread bets and CFDs with this provider
        - text: . You should consider whether you understand how spread bets and CFDs work and whether you can afford to take the high risk of losing your money. Professional clients can lose more than they deposit. Please refer to our
        - link "Risk Disclosure Statement" [ref=e473] [cursor=pointer]:
          - /url: https://capital.com/risk-disclosure-statement-fca
      - paragraph [ref=e474]:
        - text: 1X is a non-leveraged CFD. It is a derivative, and is therefore a complex product. The value of your investment can go down as well as up, and you may get back less than you invest.
        - text: Crypto Derivatives are not available to Retail clients registered with Capital Com (UK) Ltd.
        - text: The value of shares and ETFs bought through a share dealing account can fall as well as rise, which could mean getting back less than you originally put in. Past performance is no guarantee of future results.
        - text: The information contained herein is not intended for distribution to residents in any country where such distribution or use would contravene any local law or regulatory requirement.
      - paragraph [ref=e475]
      - paragraph [ref=e476]: Capital Com (UK) Limited (“CCUK”) is registered in England and Wales with company registration number 10506220. CCUK is Authorised and regulated by the Financial Conduct Authority (“FCA”), under registration number 793714.
    - generic [ref=e477]:
      - paragraph [ref=e478]: © 2026 Capital Com (UK) Limited
      - generic [ref=e479]:
        - link "Sitemap" [ref=e480] [cursor=pointer]:
          - /url: /en-gb/sitemap
        - link "Cookie settings" [ref=e481] [cursor=pointer]:
          - /url: ""
        - link "Clients Funds" [ref=e482] [cursor=pointer]:
          - /url: /en-gb/about-us/what-capital-does-with-your-money
        - link "Terms and Policies" [ref=e483] [cursor=pointer]:
          - /url: /en-gb/terms-and-policies
        - link "Complaints Procedure (CCUK)" [ref=e484] [cursor=pointer]:
          - /url: /en-gb/help/complaints
  - button [ref=e485] [cursor=pointer]
  - dialog "Cookie banner" [ref=e487]:
    - generic [ref=e488]:
      - paragraph [ref=e490]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e491] [cursor=pointer]:
          - /url: https://capital.com/cookies-policy-fca
          - text: Cookie Policy
        - text: .
      - generic [ref=e492]:
        - button "Reject all" [ref=e493] [cursor=pointer]
        - button "Allow all cookies" [ref=e494] [cursor=pointer]
        - button "Cookie settings" [ref=e495] [cursor=pointer]
  - alert [ref=e496]
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
      |        ^ Error: locator.click: Timeout 5000ms exceeded.
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