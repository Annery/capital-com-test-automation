# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: header/header-auth.spec.ts >> [CYSEC EN | authorized] Header auth entry >> Open platform opens the trading platform
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
      - generic [ref=e38]:
        - button "Log In" [ref=e39] [cursor=pointer]: Log In
        - button "Open account" [ref=e40] [cursor=pointer]: Open account
      - button "Search" [ref=e41] [cursor=pointer]
  - generic [ref=e44]:
    - generic [ref=e45]:
      - generic [ref=e49]:
        - heading "Supported locally. Connected globally." [level=2] [ref=e50]:
          - generic [ref=e51]: Supported locally.
          - text: Connected globally.
        - paragraph [ref=e52]: Authorised and regulated by the Cyprus Securities and Exchange Commission (CySEC)
      - generic [ref=e56]:
        - generic [ref=e60]:
          - generic [ref=e62]:
            - heading "In a market built for noise, we build for better decisions" [level=1] [ref=e63]
            - generic [ref=e65]:
              - text: Global
              - text: CFD trading platform
              - text: 5,500+ instruments
            - button "Open an account" [ref=e66] [cursor=pointer]: Open an account
          - generic [ref=e67]:
            - generic:
              - generic:
                - img "Hero slide 1 Bottom"
          - generic [ref=e69]:
            - link "Android" [ref=e70]:
              - /url: /en-eu/trading-platforms/mobile-apps
            - link "IOS" [ref=e71]:
              - /url: /en-eu/trading-platforms/mobile-apps
            - link "MT4" [ref=e72]:
              - /url: /en-eu/trading-platforms/mt4
            - link "MT5" [ref=e73]:
              - /url: /en-eu/trading-platforms/mt5
            - link "TradingView" [ref=e74]:
              - /url: /en-eu/trading-platforms/trading-view
            - link "Web Terminal" [ref=e75]:
              - /url: /en-eu/trading-platforms/web-platform
        - generic [ref=e78]:
          - img [ref=e79]
          - generic [ref=e80]:
            - generic [ref=e81]:
              - heading "5,500+ instruments. One decision environment" [level=2] [ref=e82]:
                - text: 5,500+ instruments.
                - text: One decision environment
              - link "Explore CFD markets" [ref=e83] [cursor=pointer]:
                - /url: /en-eu/markets
            - list [ref=e87]:
              - listitem [ref=e88]:
                - button "Commodities" [ref=e89] [cursor=pointer]:
                  - heading "Commodities" [level=3] [ref=e92]
              - listitem [ref=e93]:
                - button "Crypto" [ref=e94] [cursor=pointer]:
                  - heading "Crypto" [level=3] [ref=e97]
              - listitem [ref=e98]:
                - button "Forex" [ref=e99] [cursor=pointer]:
                  - heading "Forex" [level=3] [ref=e102]
              - listitem [ref=e103]:
                - button "Shares" [ref=e104] [cursor=pointer]:
                  - heading "Shares" [level=3] [ref=e107]
              - listitem [ref=e108]:
                - button "Bonds" [ref=e109] [cursor=pointer]:
                  - heading "Bonds" [level=3] [ref=e112]
              - listitem [ref=e113]:
                - button "ETF" [ref=e114] [cursor=pointer]:
                  - heading "ETF" [level=3] [ref=e117]
              - listitem [ref=e118]:
                - button "Indices" [ref=e119] [cursor=pointer]:
                  - heading "Indices" [level=3] [ref=e122]
              - listitem [ref=e123]:
                - button "Interest rates" [ref=e124] [cursor=pointer]:
                  - heading "Interest rates" [level=3] [ref=e127]
              - listitem [ref=e128]:
                - button "Commodities" [ref=e129] [cursor=pointer]:
                  - heading "Commodities" [level=3] [ref=e132]
              - listitem [ref=e133]:
                - button "Crypto" [ref=e134] [cursor=pointer]:
                  - heading "Crypto" [level=3] [ref=e137]
              - listitem [ref=e138]:
                - button "Forex" [ref=e139] [cursor=pointer]:
                  - heading "Forex" [level=3] [ref=e142]
              - listitem [ref=e143]:
                - button "Shares" [ref=e144] [cursor=pointer]:
                  - heading "Shares" [level=3] [ref=e147]
              - listitem [ref=e148]:
                - button "Bonds" [ref=e149] [cursor=pointer]:
                  - heading "Bonds" [level=3] [ref=e152]
              - listitem [ref=e153]:
                - button "ETF" [ref=e154] [cursor=pointer]:
                  - heading "ETF" [level=3] [ref=e157]
              - listitem [ref=e158]:
                - button "Indices" [ref=e159] [cursor=pointer]:
                  - heading "Indices" [level=3] [ref=e162]
              - listitem [ref=e163]:
                - button "Interest rates" [ref=e164] [cursor=pointer]:
                  - heading "Interest rates" [level=3] [ref=e167]
              - listitem [ref=e168]:
                - button "Commodities" [ref=e169] [cursor=pointer]:
                  - heading "Commodities" [level=3] [ref=e172]
              - listitem [ref=e173]:
                - button "Crypto" [ref=e174] [cursor=pointer]:
                  - heading "Crypto" [level=3] [ref=e177]
              - listitem [ref=e178]:
                - button "Forex" [ref=e179] [cursor=pointer]:
                  - heading "Forex" [level=3] [ref=e182]
              - listitem [ref=e183]:
                - button "Shares" [ref=e184] [cursor=pointer]:
                  - heading "Shares" [level=3] [ref=e187]
              - listitem [ref=e188]:
                - button "Bonds" [ref=e189] [cursor=pointer]:
                  - heading "Bonds" [level=3] [ref=e192]
              - listitem [ref=e193]:
                - button "ETF" [ref=e194] [cursor=pointer]:
                  - heading "ETF" [level=3] [ref=e197]
              - listitem [ref=e198]:
                - button "Indices" [ref=e199] [cursor=pointer]:
                  - heading "Indices" [level=3] [ref=e202]
              - listitem [ref=e203]:
                - button "Interest rates" [ref=e204] [cursor=pointer]:
                  - heading "Interest rates" [level=3] [ref=e207]
    - generic [ref=e208]:
      - generic [ref=e210]:
        - heading "Every screen. One system." [level=2] [ref=e211]:
          - text: Every screen.
          - generic [ref=e212]: One system.
        - paragraph [ref=e213]: Multiple platforms, all markets, any device. Your trading infrastructure.
        - generic [ref=e214]:
          - link [ref=e215]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
          - link [ref=e216]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
          - link [ref=e217]:
            - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
      - generic:
        - generic:
          - generic:
            - img "Mobile platform"
        - generic:
          - generic:
            - img "Web platform"
    - generic [ref=e218]:
      - img [ref=e219]
      - generic [ref=e221]:
        - heading "A clear cost structure before you commit" [level=2] [ref=e222]
        - generic [ref=e223]:
          - list [ref=e224]:
            - listitem [ref=e225]:
              - heading "We earn through spreads on executed trades" [level=3] [ref=e226]
              - paragraph [ref=e227]: Transparent before the position.
            - listitem [ref=e228]:
              - heading "No deposit or withdrawal fees" [level=3] [ref=e229]
              - paragraph [ref=e230]: Trusted payments. Bank transfers, cards, digital wallets.
          - generic [ref=e231]:
            - generic [ref=e232]: Our full fee structure is available on our
            - link "Charges and fees page." [ref=e233]:
              - /url: /en-eu/ways-to-trade/fees-and-charges
    - generic [ref=e234]:
      - generic [ref=e236]:
        - img "risk graph 1" [ref=e238]
        - img "risk graph 2" [ref=e240]
      - generic [ref=e241]:
        - generic [ref=e243]:
          - heading "Most traders lose money" [level=2] [ref=e245]
          - heading "Markets play a part" [level=2] [ref=e247]
          - heading "Decisions make the difference" [level=2] [ref=e249]
        - generic [ref=e250]:
          - generic [ref=e252]:
            - heading "Set while calm." [level=2] [ref=e253]
            - heading "Active under pressure." [level=2] [ref=e254]
          - generic [ref=e255]:
            - generic [ref=e256]:
              - heading "Set stop-loss before trade" [level=3] [ref=e257]
              - img "trading" [ref=e259]
            - generic [ref=e260]:
              - heading "Select leverage" [level=3] [ref=e261]
              - img "cfd" [ref=e263]
              - img "leverage" [ref=e265]
            - generic [ref=e266]:
              - heading "Confirm order" [level=3] [ref=e267]
              - img "bottomSheet" [ref=e269]
    - generic [ref=e270]:
      - generic [ref=e271]:
        - heading "Discipline is visible. So is trust." [level=2] [ref=e273]:
          - text: Discipline is visible.
          - text: So is trust.
        - generic [ref=e274]:
          - img "Secondary phone" [ref=e277]
          - img "Main phone" [ref=e280]
      - list [ref=e286]:
        - listitem [ref=e287]:
          - link "4.7 Ratings and Reviews" [ref=e288] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e289]: "4.7"
            - generic [ref=e290]: Ratings and Reviews
        - listitem [ref=e291]:
          - link "4.7 Ratings and Reviews" [ref=e292] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e293]: "4.7"
            - generic [ref=e294]: Ratings and Reviews
        - listitem [ref=e295]:
          - link "4.6 TradingView" [ref=e296] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - generic [ref=e297]: "4.6"
            - generic [ref=e298]: TradingView
        - listitem [ref=e299]:
          - link "4.6 Trustpilot" [ref=e300] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - generic [ref=e301]: "4.6"
            - generic [ref=e302]: Trustpilot
        - listitem [ref=e303]:
          - link "4.7 Ratings and Reviews" [ref=e304] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e305]: "4.7"
            - generic [ref=e306]: Ratings and Reviews
        - listitem [ref=e307]:
          - link "4.7 Ratings and Reviews" [ref=e308] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e309]: "4.7"
            - generic [ref=e310]: Ratings and Reviews
        - listitem [ref=e311]:
          - link "4.6 TradingView" [ref=e312] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - generic [ref=e313]: "4.6"
            - generic [ref=e314]: TradingView
        - listitem [ref=e315]:
          - link "4.6 Trustpilot" [ref=e316] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - generic [ref=e317]: "4.6"
            - generic [ref=e318]: Trustpilot
        - listitem [ref=e319]:
          - link "4.7 Ratings and Reviews" [ref=e320] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e321]: "4.7"
            - generic [ref=e322]: Ratings and Reviews
        - listitem [ref=e323]:
          - link "4.7 Ratings and Reviews" [ref=e324] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e325]: "4.7"
            - generic [ref=e326]: Ratings and Reviews
        - listitem [ref=e327]:
          - link "4.6 TradingView" [ref=e328] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - generic [ref=e329]: "4.6"
            - generic [ref=e330]: TradingView
        - listitem [ref=e331]:
          - link "4.6 Trustpilot" [ref=e332] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - generic [ref=e333]: "4.6"
            - generic [ref=e334]: Trustpilot
  - contentinfo [ref=e336]:
    - generic [ref=e337]:
      - link [ref=e338]:
        - /url: /en-eu
        - img [ref=e339]
      - generic [ref=e343]:
        - link [ref=e344]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e345]:
          - /url: https://www.youtube.com/@Capitaltrading/videos
      - generic [ref=e346]:
        - link [ref=e347]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e348]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e349]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=504a5f26-4d44-43fa-8f6f-18dbfc93e3a9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e350]:
      - generic [ref=e351]:
        - generic [ref=e352]:
          - generic [ref=e353]:
            - generic [ref=e354]: "Country / Region:"
            - button "Cyprus" [ref=e355] [cursor=pointer]:
              - generic [ref=e357]: Cyprus
          - generic [ref=e358]: •
          - generic [ref=e359]:
            - generic [ref=e360]: "Language:"
            - button "English" [ref=e361] [cursor=pointer]:
              - generic [ref=e362]: English
        - generic [ref=e363]:
          - generic [ref=e364]: "Also you can contact us:"
          - link "+357 25123646" [ref=e367]:
            - /url: tel:+357 25123646
            - strong [ref=e368]: +357 25123646
            - strong
          - generic [ref=e369]: •
          - link "support@capital.com" [ref=e371]:
            - /url: mailto:support@capital.com
            - strong [ref=e372]: support@capital.com
      - generic [ref=e373]:
        - generic [ref=e374]:
          - strong [ref=e376]: Trading
          - generic [ref=e377]:
            - generic [ref=e378]:
              - generic [ref=e379]: Trading
              - generic [ref=e380]:
                - link "Trade CFDs" [ref=e382]:
                  - /url: /en-eu/ways-to-trade/cfd-trading
                - link "Trade knock-outs" [ref=e384]:
                  - /url: /en-eu/ways-to-trade/knock-outs
                - link "Demo account" [ref=e386]:
                  - /url: /en-eu/trading-platforms/demo-account
                - link "Pro account" [ref=e388]:
                  - /url: /en-eu/professional-clients
            - generic [ref=e389]:
              - generic [ref=e390]: Platforms
              - generic [ref=e391]:
                - link "Web platform" [ref=e393]:
                  - /url: /en-eu/trading-platforms/web-platform
                - link "Mobile app" [ref=e395]:
                  - /url: /en-eu/trading-platforms/mobile-apps
                - link "TradingView" [ref=e397]:
                  - /url: /en-eu/trading-platforms/trading-view
                - link "MT4" [ref=e399]:
                  - /url: /en-eu/trading-platforms/mt4
                - link "MT5" [ref=e401]:
                  - /url: /en-eu/trading-platforms/mt5
                - link "API access" [ref=e403]:
                  - /url: /en-eu/trading-platforms/api-development-guide
            - generic [ref=e404]:
              - generic [ref=e405]: Learn
              - generic [ref=e406]:
                - link "Trading strategies" [ref=e408]:
                  - /url: /en-eu/learn/trading-strategies
                - link "Technical analysis" [ref=e410]:
                  - /url: /en-eu/learn/technical-analysis
                - link "Trading psychology" [ref=e412]:
                  - /url: /en-eu/learn/trading-psychology
                - link "All resources" [ref=e414]:
                  - /url: /en-eu/learn
        - generic [ref=e415]:
          - strong [ref=e417]: Markets
          - generic [ref=e418]:
            - generic [ref=e419]:
              - generic [ref=e420]: Our markets
              - generic [ref=e421]:
                - link "Markets overview" [ref=e423]:
                  - /url: /en-eu/markets
                - link "Forex" [ref=e425]:
                  - /url: /en-eu/markets/forex
                - link "Shares" [ref=e427]:
                  - /url: /en-eu/markets/shares
                - link "Indices" [ref=e429]:
                  - /url: /en-eu/markets/indices
                - link "Commodities" [ref=e431]:
                  - /url: /en-eu/markets/commodities
                - link "Cryptocurrencies" [ref=e433]:
                  - /url: /en-eu/markets/cryptocurrencies
                - link "Bonds" [ref=e435]:
                  - /url: /en-eu/markets/bonds
                - link "Interest rates" [ref=e437]:
                  - /url: /en-eu/markets/interest-rates
            - generic [ref=e438]:
              - generic [ref=e439]: Market info
              - generic [ref=e440]:
                - link "Market analysis" [ref=e442]:
                  - /url: /en-eu/analysis
                - link "Markets pricing" [ref=e444]:
                  - /url: /en-eu/about-us/how-our-markets-are-priced
        - link "Pricing" [ref=e447]:
          - /url: /en-eu/ways-to-trade/fees-and-charges
          - strong [ref=e448]: Pricing
        - generic [ref=e449]:
          - strong [ref=e451]: About
          - generic [ref=e452]:
            - generic [ref=e453]:
              - generic [ref=e454]: Who we are
              - generic [ref=e455]:
                - link "Company" [ref=e457]:
                  - /url: /en-eu/about-us
                - link "Our offices" [ref=e459]:
                  - /url: /en-eu/about-us/our-offices
                - link "Press centre" [ref=e461]:
                  - /url: /en-eu/media-centre
                - link "Whitepaper" [ref=e463]:
                  - /url: /whitepaper
                - link "Investor Relations" [ref=e465]:
                  - /url: /en-eu/about-us/investor-relations
                - link "Is capital.com safe?" [ref=e467]:
                  - /url: /en-eu/security-measures
                - link "Our business model" [ref=e469]:
                  - /url: /en-eu/about-us/how-capital-makes-money
            - generic [ref=e470]:
              - generic [ref=e471]: Work with us
              - link "Careers" [ref=e474]:
                - /url: /en-eu/about-us/careers
            - generic [ref=e475]:
              - generic [ref=e476]: Help
              - generic [ref=e477]:
                - link "Help centre" [ref=e479]:
                  - /url: /en-eu/help
                - link "Client vulnerability" [ref=e481]:
                  - /url: /en-eu/help/client-vulnerability
                - link "Contact us" [ref=e483]:
                  - /url: /en-eu/contact-us
            - generic [ref=e484]:
              - generic [ref=e485]: Legal
              - generic [ref=e486]:
                - link "Terms & policies" [ref=e488]:
                  - /url: /en-eu/terms-and-policies
                - link "Complaints procedure - Capital Com Group Ltd" [ref=e490]:
                  - /url: /en-eu/terms-and-policies/complaints-procedure-cceu
                - link "Complaints procedure - Capital Com SV Investments Limited" [ref=e492]:
                  - /url: /en-eu/terms-and-policies/complaints-procedure
                - 'link "Compliance & legal: CFD trading" [ref=e494]':
                  - /url: /en-eu/terms-and-policies/compliance-and-legals
    - generic [ref=e496]:
      - paragraph [ref=e497]:
        - text: "Capital Com SV Investments Limited:"
        - text: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
        - strong [ref=e500]: "73"
        - strong [ref=e501]: "% of retail investor accounts lose money when trading CFDs with this provider"
        - text: . You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Please refer to our
        - link "Risk Disclosure Statement" [ref=e502]:
          - /url: https://capital.com/risk-disclosure-policy
        - text: .
      - paragraph [ref=e503]:
        - text: "Capital Com Group Ltd:"
        - text: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
        - strong [ref=e504]: The vast majority of retail investor accounts lose money when trading CFDs.
        - text: You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Please refer to our
        - link "Risk Disclosure Statement" [ref=e505]:
          - /url: https://capital.com/risk-disclosure-policy-cceu
      - paragraph [ref=e506]:
        - text: "Risk warning: The value of shares and ETFs bought through a share dealing account can fall as well as rise, which could mean getting back less than you originally put in. Past performance is no guarantee of future results."
        - text: Transactions in non-deliverable over-the-counter instruments, such as knock-out options and CFDs are complex financial products that carry a high risk of losing all invested capital. Such products are not suitable for all investors, as they may lead to both gains and significant losses. Before engaging in this type of trading, you should carefully consider whether you understand how these instruments work and whether you can afford to take the high risk of losing your money. Knock-out options available only for residents of Germany, Slovakia, Bulgaria, Slovenia, Croatia, Luxembourg, Iceland, Liechtenstein, Hungary, Greece, Finland, Estonia, Latvia, France, Netherlands, Lithuania, Czech Republic, Ireland, Norway, Denmark, Italy, Poland, Spain, Romania, Austria, Sweden, and Portugal.
        - text: For professional clients, there is a risk of losing more than the initial deposit. The information on this website is general in nature and does not consider your financial situation, objectives or needs. Please review our legal documents and ensure you fully understand the risks before making any trading decisions. We encourage you to use the training services of our company to better understand the risks before engaging in trading operations.
      - paragraph [ref=e507]: "Capital Com SV Investments Limited is a company incorporated in the Republic of Cyprus with registration number HE 354252 and is authorised and regulated by the Cyprus Securities and Exchange Commission (License Number 319/17). Registered Office: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cyprus."
      - paragraph [ref=e508]: "Capital Com Group Ltd is a company incorporated in the Republic of Cyprus with registration number ΗΕ 446198 and is authorised and regulated by the Cyprus Securities and Exchange Commission (License Number 463/25). Registered Office: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cyprus."
      - paragraph [ref=e509]: The information on this site is not directed at residents of the United States, Canada and Belgium or any particular country outside the EEA, and is not intended for distribution to or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
    - generic [ref=e510]:
      - paragraph [ref=e511]: © 2026 Capital Com SV Investments Limited
      - generic [ref=e512]:
        - link "Sitemap" [ref=e513]:
          - /url: /en-eu/sitemap
        - link "Cookie Settings" [ref=e514]:
          - /url: ""
        - link "Regulations" [ref=e515]:
          - /url: /en-eu/terms-and-policies/regulations
        - link "Terms and Policies" [ref=e516]:
          - /url: /en-eu/terms-and-policies
        - link "Complaints Procedure" [ref=e517]:
          - /url: /en-eu/terms-and-policies/complaints-procedures
  - button [ref=e518] [cursor=pointer]
  - dialog "Cookie banner" [ref=e520]:
    - generic [ref=e521]:
      - paragraph [ref=e523]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e524] [cursor=pointer]:
          - /url: https://capital.com/cookies-policy-cysec
          - text: Cookie Policy
        - text: .
      - generic [ref=e525]:
        - button "Reject all" [ref=e526] [cursor=pointer]
        - button "Allow all cookies" [ref=e527] [cursor=pointer]
        - button "Cookie settings" [ref=e528] [cursor=pointer]
  - alert [ref=e529]
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