# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/about.spec.ts >> [FCA EN | authorized] About / Help / Contact us >> [banner_with_steps] -> platformPage
- Location: src/fixtures/content-section.ts:41:25

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/trading\/platform\//
Received string:  "https://capital.com/en-gb/contact-us"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://capital.com/en-gb/contact-us"


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
      - text: Contact us
    - generic [ref=e45]:
      - generic [ref=e51]:
        - heading "Contact us" [level=1] [ref=e52]
        - paragraph [ref=e54]: Our support team is available by email, phone, and live chat. We aim to respond as quickly as possible.
      - generic [ref=e58]:
        - generic [ref=e60]:
          - heading "Email" [level=3] [ref=e61]
          - link "support@capital.com" [ref=e62] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - generic [ref=e63]: support@capital.com
        - generic [ref=e65]:
          - heading "Phone" [level=3] [ref=e66]
          - link "+44 2030978888" [ref=e67] [cursor=pointer]:
            - /url: tel:+442030978888
            - generic [ref=e68]: +44 2030978888
        - generic [ref=e70]:
          - heading "Chat" [level=3] [ref=e71]
          - link "WhatsApp" [ref=e72] [cursor=pointer]:
            - /url: https://wa.me/447897000276
            - generic [ref=e73]: WhatsApp
        - generic [ref=e75]:
          - heading "Support centre" [level=3] [ref=e76]
          - link "Visit" [ref=e77] [cursor=pointer]:
            - /url: /en-gb/help
            - generic [ref=e78]: Visit
        - generic [ref=e80]:
          - heading "Submit a request" [level=3] [ref=e81]
          - link "Visit" [ref=e82] [cursor=pointer]:
            - /url: https://capitalccuk.zendesk.com/hc/en-us/requests/new
            - generic [ref=e83]: Visit
      - generic [ref=e92]:
        - strong [ref=e93]: Our UK office
        - generic [ref=e94]:
          - paragraph [ref=e95]:
            - text: Capital.com UK Limited
            - text: 2nd Floor, 4 Orchard Place,
            - text: London, UK
          - paragraph [ref=e96]: SW1H 0BF
      - generic [ref=e98]:
        - heading "More about us" [level=2] [ref=e100]
        - generic [ref=e101]:
          - generic [ref=e103]:
            - heading "Our global offices" [level=3] [ref=e104]
            - paragraph [ref=e106]: Offices across Europe, the Middle East, and Asia Pacific. Regulated in seven jurisdictions.
            - link "See all locations" [ref=e107] [cursor=pointer]:
              - /url: /en-gb/about-us/our-offices
              - generic [ref=e108]: See all locations
          - generic [ref=e110]:
            - heading "About us" [level=3] [ref=e111]
            - paragraph [ref=e113]: The story behind Capital.com, the thinking that shapes it, and the people who built it.
            - link "Learn more" [ref=e114] [cursor=pointer]:
              - /url: /en-gb/about-us
              - generic [ref=e115]: Learn more
      - generic [ref=e116]:
        - heading "User feedback and ratings" [level=2] [ref=e119]
        - generic [ref=e120]:
          - region [ref=e121]:
            - generic [ref=e123]:
              - group [ref=e124]:
                - link [ref=e125] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e128]: 2025-07-01
                  - strong [ref=e129]: Victor Flemming Nandwa Søder
                  - paragraph [ref=e131]: Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.
              - group [ref=e133]:
                - link [ref=e134] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e137]: 2025-07-01
                  - strong [ref=e138]: Perry Reineke
                  - paragraph [ref=e140]: I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.
              - group [ref=e142]:
                - link [ref=e143] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e146]: 2025-06-30
                  - strong [ref=e147]: Brigman
                  - paragraph [ref=e149]: Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue.
              - group [ref=e151]:
                - link [ref=e152] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e155]: 2025-06-29
                  - strong [ref=e156]: proinpro
                  - paragraph [ref=e158]: Capital is really great to be used on start, also beginner friendly broker! Great costumer support and it is quick!
              - group [ref=e160]:
                - link [ref=e161] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e164]: 2025-06-27
                  - strong [ref=e165]: Gio Gvazava
                  - paragraph [ref=e167]: Capital.com has been great for both learning and trading. The app is clean, fast, and packed with useful tools. Customer support has been solid too. Definitely recommended for beginners and active traders alike.
              - group [ref=e169]:
                - link [ref=e170] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e173]: 2025-06-22
                  - strong [ref=e174]: Jean A.
                  - paragraph [ref=e176]: The app is built to make options and figures easy to understand, great for beginners and intermediate traders. Demo accounts are simple to set up. 100:1 leverage is available.
              - group [ref=e178]:
                - link [ref=e179] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e182]: 2025-06-22
                  - strong [ref=e183]: Douglas
                  - paragraph [ref=e185]: Deposits and withdrawals work without issues. Very low spreads. No noticeable fees. Easy to follow.
              - group [ref=e187]:
                - link [ref=e188] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e191]: 2025-06-19
                  - strong [ref=e192]: dgogidze7
                  - paragraph [ref=e194]: I would like to express a huge thank you to Evgeniya Logvinovich, customer service manager. For your attention and heartfelt attitude to your clients.❤️
              - group [ref=e196]:
                - link [ref=e197] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e200]: 2025-06-19
                  - strong [ref=e201]: foobarbeer
                  - paragraph [ref=e203]: I am extremely happy with this broker. Great spreads, good selection of instruments, well coded toolbox.
              - group [ref=e205]:
                - link [ref=e206] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e209]: 2025-04-16
                  - strong [ref=e210]: LUCAS ONWUCHEKWA
                  - paragraph [ref=e212]: This site is always active and accessible 24hrs, every day
              - group [ref=e214]:
                - link [ref=e215] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e218]: 2025-05-29
                  - strong [ref=e219]: Casaubon70
                  - paragraph [ref=e221]: Love the TV integration. Makes traders life smooth and comfortable.
              - group [ref=e223]:
                - link [ref=e224] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e227]: 2025-05-24
                  - strong [ref=e228]: Radioilluminati
                  - paragraph [ref=e230]: I trade every day and Capital is my beloved home. I also create music and you can always feel when something has been created from the heart. Capital has soul!
              - group [ref=e232]:
                - link [ref=e233] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e236]: 2025-05-20
                  - strong [ref=e237]: GemzT
                  - paragraph [ref=e239]: I’d been paper trading for 2yrs now, went live and this platform is easy for beginners to understand and navigate all important tools to execute all that I learned. Earning now!
              - group [ref=e241]:
                - link [ref=e242] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e245]: 2025-06-17
                  - strong [ref=e246]: BINSAYYAR
                  - paragraph [ref=e248]: Secure and responsive
              - group [ref=e250]:
                - link [ref=e251] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e254]: 2025-05-06
                  - strong [ref=e255]: Mahran Rahim Bakhsh Rasool Bakhsh Al Balushi
                  - paragraph [ref=e257]: It's a great app, and it's safe to practice with the demo. Then, when you're ready for the real thing, I'd suggest installing it.
              - group [ref=e259]:
                - link [ref=e260] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e263]: 2025-04-29
                  - strong [ref=e264]: dmjnoor
                  - paragraph [ref=e266]: This application is perfect.. simple, easy to use, run smoothly and fast and it has an accurate graphics.. be careful to use only one credit card and one bank account to prevent any withdrawal problem.. overnight fees and spread variation will be repaid for you by the next month.. I used many application but this is the best one
              - group [ref=e268]:
                - link [ref=e269] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e272]: 2025-03-24
                  - strong [ref=e273]: Debbie P
                  - paragraph [ref=e275]: The best trading company I've found so far and so easy to use.
              - group [ref=e277]:
                - link [ref=e278] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e281]: 2025-11-07
                  - strong [ref=e282]: Neill
                  - paragraph [ref=e284]: Your platform always works and is extremely reliable and now that you have added Alarms to the to the Desktop version, I am very happy
              - group [ref=e286]:
                - link [ref=e287] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e290]: 2025-02-06
                  - strong [ref=e291]: Nouman Butt
                  - paragraph [ref=e293]: User friendly app & interface and good support team. Funds transfer ease & Leverage is an advantage but crypto is highly risky be responsible of your loss limits and risks appetite.
              - group [ref=e295]:
                - link [ref=e296] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e299]: 2025-01-30
                  - strong [ref=e300]: Claus-Bernhard Schuetze
                  - paragraph [ref=e302]: Awesome trading platform On both desktop and mobile and u can start with low budget as the contracts can be adjusted and when u have confidence u can start full trading - being integrated in tradingview is absolutely awesome as well
              - group [ref=e304]:
                - link [ref=e305] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e308]: 2025-04-18
                  - strong [ref=e309]: ROBERT AMBANI
                  - paragraph [ref=e311]: Great platform. Fast deposit and withdrawals
              - group [ref=e313]:
                - link [ref=e314] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e317]: 2025-08-29
                  - strong [ref=e318]: ERROL CLIVE
                  - paragraph [ref=e320]: Capital.com software is very easy to use and is very informative.
              - group "1 of 22" [ref=e322]:
                - link "2025-07-01 Victor Flemming Nandwa Søder Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again." [ref=e323] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e326]: 2025-07-01
                  - strong [ref=e327]: Victor Flemming Nandwa Søder
                  - paragraph [ref=e329]: Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.
              - group "2 of 22" [ref=e331]:
                - link "2025-07-01 Perry Reineke I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months." [ref=e332] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e335]: 2025-07-01
                  - strong [ref=e336]: Perry Reineke
                  - paragraph [ref=e338]: I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.
              - group "3 of 22" [ref=e340]:
                - link "2025-06-30 Brigman Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue." [ref=e341] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e344]: 2025-06-30
                  - strong [ref=e345]: Brigman
                  - paragraph [ref=e347]: Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue.
              - group [ref=e349]:
                - link [ref=e350] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e353]: 2025-06-29
                  - strong [ref=e354]: proinpro
                  - paragraph [ref=e356]: Capital is really great to be used on start, also beginner friendly broker! Great costumer support and it is quick!
              - group [ref=e358]:
                - link [ref=e359] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e362]: 2025-06-27
                  - strong [ref=e363]: Gio Gvazava
                  - paragraph [ref=e365]: Capital.com has been great for both learning and trading. The app is clean, fast, and packed with useful tools. Customer support has been solid too. Definitely recommended for beginners and active traders alike.
              - group [ref=e367]:
                - link [ref=e368] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e371]: 2025-06-22
                  - strong [ref=e372]: Jean A.
                  - paragraph [ref=e374]: The app is built to make options and figures easy to understand, great for beginners and intermediate traders. Demo accounts are simple to set up. 100:1 leverage is available.
              - group [ref=e376]:
                - link [ref=e377] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e380]: 2025-06-22
                  - strong [ref=e381]: Douglas
                  - paragraph [ref=e383]: Deposits and withdrawals work without issues. Very low spreads. No noticeable fees. Easy to follow.
              - group [ref=e385]:
                - link [ref=e386] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e389]: 2025-06-19
                  - strong [ref=e390]: dgogidze7
                  - paragraph [ref=e392]: I would like to express a huge thank you to Evgeniya Logvinovich, customer service manager. For your attention and heartfelt attitude to your clients.❤️
              - group [ref=e394]:
                - link [ref=e395] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e398]: 2025-06-19
                  - strong [ref=e399]: foobarbeer
                  - paragraph [ref=e401]: I am extremely happy with this broker. Great spreads, good selection of instruments, well coded toolbox.
              - group [ref=e403]:
                - link [ref=e404] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e407]: 2025-04-16
                  - strong [ref=e408]: LUCAS ONWUCHEKWA
                  - paragraph [ref=e410]: This site is always active and accessible 24hrs, every day
              - group [ref=e412]:
                - link [ref=e413] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e416]: 2025-05-29
                  - strong [ref=e417]: Casaubon70
                  - paragraph [ref=e419]: Love the TV integration. Makes traders life smooth and comfortable.
              - group [ref=e421]:
                - link [ref=e422] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e425]: 2025-05-24
                  - strong [ref=e426]: Radioilluminati
                  - paragraph [ref=e428]: I trade every day and Capital is my beloved home. I also create music and you can always feel when something has been created from the heart. Capital has soul!
              - group [ref=e430]:
                - link [ref=e431] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e434]: 2025-05-20
                  - strong [ref=e435]: GemzT
                  - paragraph [ref=e437]: I’d been paper trading for 2yrs now, went live and this platform is easy for beginners to understand and navigate all important tools to execute all that I learned. Earning now!
              - group [ref=e439]:
                - link [ref=e440] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e443]: 2025-06-17
                  - strong [ref=e444]: BINSAYYAR
                  - paragraph [ref=e446]: Secure and responsive
              - group [ref=e448]:
                - link [ref=e449] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e452]: 2025-05-06
                  - strong [ref=e453]: Mahran Rahim Bakhsh Rasool Bakhsh Al Balushi
                  - paragraph [ref=e455]: It's a great app, and it's safe to practice with the demo. Then, when you're ready for the real thing, I'd suggest installing it.
              - group [ref=e457]:
                - link [ref=e458] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e461]: 2025-04-29
                  - strong [ref=e462]: dmjnoor
                  - paragraph [ref=e464]: This application is perfect.. simple, easy to use, run smoothly and fast and it has an accurate graphics.. be careful to use only one credit card and one bank account to prevent any withdrawal problem.. overnight fees and spread variation will be repaid for you by the next month.. I used many application but this is the best one
              - group [ref=e466]:
                - link [ref=e467] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e470]: 2025-03-24
                  - strong [ref=e471]: Debbie P
                  - paragraph [ref=e473]: The best trading company I've found so far and so easy to use.
              - group [ref=e475]:
                - link [ref=e476] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e479]: 2025-11-07
                  - strong [ref=e480]: Neill
                  - paragraph [ref=e482]: Your platform always works and is extremely reliable and now that you have added Alarms to the to the Desktop version, I am very happy
              - group [ref=e484]:
                - link [ref=e485] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e488]: 2025-02-06
                  - strong [ref=e489]: Nouman Butt
                  - paragraph [ref=e491]: User friendly app & interface and good support team. Funds transfer ease & Leverage is an advantage but crypto is highly risky be responsible of your loss limits and risks appetite.
              - group [ref=e493]:
                - link [ref=e494] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e497]: 2025-01-30
                  - strong [ref=e498]: Claus-Bernhard Schuetze
                  - paragraph [ref=e500]: Awesome trading platform On both desktop and mobile and u can start with low budget as the contracts can be adjusted and when u have confidence u can start full trading - being integrated in tradingview is absolutely awesome as well
              - group [ref=e502]:
                - link [ref=e503] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e506]: 2025-04-18
                  - strong [ref=e507]: ROBERT AMBANI
                  - paragraph [ref=e509]: Great platform. Fast deposit and withdrawals
              - group [ref=e511]:
                - link [ref=e512] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e515]: 2025-08-29
                  - strong [ref=e516]: ERROL CLIVE
                  - paragraph [ref=e518]: Capital.com software is very easy to use and is very informative.
              - group [ref=e520]:
                - link [ref=e521] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e524]: 2025-07-01
                  - strong [ref=e525]: Victor Flemming Nandwa Søder
                  - paragraph [ref=e527]: Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.
              - group [ref=e529]:
                - link [ref=e530] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e533]: 2025-07-01
                  - strong [ref=e534]: Perry Reineke
                  - paragraph [ref=e536]: I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.
              - group [ref=e538]:
                - link [ref=e539] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e542]: 2025-06-30
                  - strong [ref=e543]: Brigman
                  - paragraph [ref=e545]: Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue.
              - group [ref=e547]:
                - link [ref=e548] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e551]: 2025-06-29
                  - strong [ref=e552]: proinpro
                  - paragraph [ref=e554]: Capital is really great to be used on start, also beginner friendly broker! Great costumer support and it is quick!
              - group [ref=e556]:
                - link [ref=e557] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e560]: 2025-06-27
                  - strong [ref=e561]: Gio Gvazava
                  - paragraph [ref=e563]: Capital.com has been great for both learning and trading. The app is clean, fast, and packed with useful tools. Customer support has been solid too. Definitely recommended for beginners and active traders alike.
              - group [ref=e565]:
                - link [ref=e566] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e569]: 2025-06-22
                  - strong [ref=e570]: Jean A.
                  - paragraph [ref=e572]: The app is built to make options and figures easy to understand, great for beginners and intermediate traders. Demo accounts are simple to set up. 100:1 leverage is available.
              - group [ref=e574]:
                - link [ref=e575] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e578]: 2025-06-22
                  - strong [ref=e579]: Douglas
                  - paragraph [ref=e581]: Deposits and withdrawals work without issues. Very low spreads. No noticeable fees. Easy to follow.
              - group [ref=e583]:
                - link [ref=e584] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e587]: 2025-06-19
                  - strong [ref=e588]: dgogidze7
                  - paragraph [ref=e590]: I would like to express a huge thank you to Evgeniya Logvinovich, customer service manager. For your attention and heartfelt attitude to your clients.❤️
              - group [ref=e592]:
                - link [ref=e593] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e596]: 2025-06-19
                  - strong [ref=e597]: foobarbeer
                  - paragraph [ref=e599]: I am extremely happy with this broker. Great spreads, good selection of instruments, well coded toolbox.
              - group [ref=e601]:
                - link [ref=e602] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e605]: 2025-04-16
                  - strong [ref=e606]: LUCAS ONWUCHEKWA
                  - paragraph [ref=e608]: This site is always active and accessible 24hrs, every day
              - group [ref=e610]:
                - link [ref=e611] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e614]: 2025-05-29
                  - strong [ref=e615]: Casaubon70
                  - paragraph [ref=e617]: Love the TV integration. Makes traders life smooth and comfortable.
              - group [ref=e619]:
                - link [ref=e620] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e623]: 2025-05-24
                  - strong [ref=e624]: Radioilluminati
                  - paragraph [ref=e626]: I trade every day and Capital is my beloved home. I also create music and you can always feel when something has been created from the heart. Capital has soul!
              - group [ref=e628]:
                - link [ref=e629] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e632]: 2025-05-20
                  - strong [ref=e633]: GemzT
                  - paragraph [ref=e635]: I’d been paper trading for 2yrs now, went live and this platform is easy for beginners to understand and navigate all important tools to execute all that I learned. Earning now!
              - group [ref=e637]:
                - link [ref=e638] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e641]: 2025-06-17
                  - strong [ref=e642]: BINSAYYAR
                  - paragraph [ref=e644]: Secure and responsive
              - group [ref=e646]:
                - link [ref=e647] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e650]: 2025-05-06
                  - strong [ref=e651]: Mahran Rahim Bakhsh Rasool Bakhsh Al Balushi
                  - paragraph [ref=e653]: It's a great app, and it's safe to practice with the demo. Then, when you're ready for the real thing, I'd suggest installing it.
              - group [ref=e655]:
                - link [ref=e656] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e659]: 2025-04-29
                  - strong [ref=e660]: dmjnoor
                  - paragraph [ref=e662]: This application is perfect.. simple, easy to use, run smoothly and fast and it has an accurate graphics.. be careful to use only one credit card and one bank account to prevent any withdrawal problem.. overnight fees and spread variation will be repaid for you by the next month.. I used many application but this is the best one
              - group [ref=e664]:
                - link [ref=e665] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e668]: 2025-03-24
                  - strong [ref=e669]: Debbie P
                  - paragraph [ref=e671]: The best trading company I've found so far and so easy to use.
              - group [ref=e673]:
                - link [ref=e674] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e677]: 2025-11-07
                  - strong [ref=e678]: Neill
                  - paragraph [ref=e680]: Your platform always works and is extremely reliable and now that you have added Alarms to the to the Desktop version, I am very happy
              - group [ref=e682]:
                - link [ref=e683] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e686]: 2025-02-06
                  - strong [ref=e687]: Nouman Butt
                  - paragraph [ref=e689]: User friendly app & interface and good support team. Funds transfer ease & Leverage is an advantage but crypto is highly risky be responsible of your loss limits and risks appetite.
              - group [ref=e691]:
                - link [ref=e692] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e695]: 2025-01-30
                  - strong [ref=e696]: Claus-Bernhard Schuetze
                  - paragraph [ref=e698]: Awesome trading platform On both desktop and mobile and u can start with low budget as the contracts can be adjusted and when u have confidence u can start full trading - being integrated in tradingview is absolutely awesome as well
              - group [ref=e700]:
                - link [ref=e701] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e704]: 2025-04-18
                  - strong [ref=e705]: ROBERT AMBANI
                  - paragraph [ref=e707]: Great platform. Fast deposit and withdrawals
              - group [ref=e709]:
                - link [ref=e710] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e713]: 2025-08-29
                  - strong [ref=e714]: ERROL CLIVE
                  - paragraph [ref=e716]: Capital.com software is very easy to use and is very informative.
            - generic:
              - button "Go to last slide" [ref=e718] [cursor=pointer]
              - button "Next slide" [ref=e719] [cursor=pointer]
          - paragraph [ref=e720]: Showing our 4 & 5 star reviews.
        - generic [ref=e722]:
          - link "4.6" [ref=e723] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - strong [ref=e726]: "4.6"
          - link "Ratings and Reviews 4.7" [ref=e729] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - strong [ref=e731]: Ratings and Reviews
            - strong [ref=e733]: "4.7"
          - link "Ratings and Reviews 4.7" [ref=e736] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - strong [ref=e738]: Ratings and Reviews
            - strong [ref=e740]: "4.7"
          - link "4.6" [ref=e743] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - strong [ref=e746]: "4.6"
      - generic [ref=e750]:
        - generic [ref=e751]:
          - heading "Ready to join a leading broker?" [level=2] [ref=e752]
          - generic [ref=e753]: Join our community of traders worldwide
        - generic [ref=e754]:
          - button [active] [ref=e756] [cursor=pointer]
          - generic [ref=e759]: 1. Create your account
          - generic [ref=e760]: 2. Make your first deposit
          - generic [ref=e761]: 3. Start trading
  - contentinfo [ref=e763]:
    - generic [ref=e764]:
      - link [ref=e765] [cursor=pointer]:
        - /url: /en-gb
        - img [ref=e766]
      - generic [ref=e770]:
        - link [ref=e771] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e772] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e773] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=1c7cfb99-19a0-415c-a981-3ddbc10a15e0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e774]:
      - generic [ref=e775]:
        - generic [ref=e776]:
          - generic [ref=e777]:
            - generic [ref=e778]: "Country / Region:"
            - button "United Kingdom" [ref=e779] [cursor=pointer]:
              - generic [ref=e781]: United Kingdom
          - generic [ref=e782]: •
          - generic [ref=e783]:
            - generic [ref=e784]: "Language:"
            - button "English" [ref=e785] [cursor=pointer]:
              - generic [ref=e786]: English
        - generic [ref=e787]:
          - generic [ref=e788]: "Also you can contact us:"
          - link "+442030978888" [ref=e791] [cursor=pointer]:
            - /url: tel:+442030978888
            - strong [ref=e792]: "+442030978888"
            - strong
          - generic [ref=e793]: •
          - link "support@capital.com" [ref=e795] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e796]: support@capital.com
      - generic [ref=e797]:
        - generic [ref=e798]:
          - strong [ref=e800]: Trading
          - generic [ref=e801]:
            - generic [ref=e802]:
              - generic [ref=e803]: Trading
              - generic [ref=e804]:
                - link "Trade CFDs" [ref=e806] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/cfd-trading
                - link "Spread betting" [ref=e808] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/spread-betting
                - link "Get pro account" [ref=e810] [cursor=pointer]:
                  - /url: /en-gb/professional
                - link "Get demo account" [ref=e812] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/demo-account
                - link "1X" [ref=e814] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/1x
            - generic [ref=e815]:
              - generic [ref=e816]: Platforms
              - generic [ref=e817]:
                - link "Mobile app" [ref=e819] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/mobile-apps
                - link "Web platform" [ref=e821] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/web-platform
                - link "TradingView" [ref=e823] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/trading-view
                - link "MT4" [ref=e825] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/mt4
                - link "API access" [ref=e827] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/api-development-guide
            - generic [ref=e828]:
              - generic [ref=e829]: Learn
              - generic [ref=e830]:
                - link "Trading strategies" [ref=e832] [cursor=pointer]:
                  - /url: /en-gb/learn/trading-strategies
                - link "Technical analysis" [ref=e834] [cursor=pointer]:
                  - /url: /en-gb/learn/technical-analysis
                - link "Trading psychology" [ref=e836] [cursor=pointer]:
                  - /url: /en-gb/learn/trading-psychology
                - link "All resources" [ref=e838] [cursor=pointer]:
                  - /url: /en-gb/learn
        - generic [ref=e839]:
          - strong [ref=e841]: Markets
          - generic [ref=e842]:
            - generic [ref=e843]:
              - generic [ref=e844]: Our markets
              - generic [ref=e845]:
                - link "Markets overview" [ref=e847] [cursor=pointer]:
                  - /url: /en-gb/markets
                - link "Shares" [ref=e849] [cursor=pointer]:
                  - /url: /en-gb/markets/shares
                - link "Forex" [ref=e851] [cursor=pointer]:
                  - /url: /en-gb/markets/forex
                - link "Indices" [ref=e853] [cursor=pointer]:
                  - /url: /en-gb/markets/indices
                - link "Commodities" [ref=e855] [cursor=pointer]:
                  - /url: /en-gb/markets/commodities
                - link "Bonds" [ref=e857] [cursor=pointer]:
                  - /url: /en-gb/markets/bonds
                - link "Interest rates" [ref=e859] [cursor=pointer]:
                  - /url: /en-gb/markets/interest-rates
            - generic [ref=e860]:
              - generic [ref=e861]: Market info
              - generic [ref=e862]:
                - link "Market analysis" [ref=e864] [cursor=pointer]:
                  - /url: /en-gb/analysis
                - link "Markets pricing" [ref=e866] [cursor=pointer]:
                  - /url: /en-gb/about-us/how-our-markets-are-priced
        - link "Pricing" [ref=e869] [cursor=pointer]:
          - /url: /en-gb/ways-to-trade/fees-and-charges
          - strong [ref=e870]: Pricing
        - generic [ref=e871]:
          - strong [ref=e873]: About
          - generic [ref=e874]:
            - generic [ref=e875]:
              - generic [ref=e876]: Who we are
              - generic [ref=e877]:
                - link "Company" [ref=e879] [cursor=pointer]:
                  - /url: /en-gb/about-us
                - link "Our offices" [ref=e881] [cursor=pointer]:
                  - /url: /en-gb/about-us/our-offices
                - link "Press centre" [ref=e883] [cursor=pointer]:
                  - /url: /en-gb/media-centre
                - link "Investor Relations" [ref=e885] [cursor=pointer]:
                  - /url: /en-gb/about-us/investor-relations
                - link "Is capital.com safe?" [ref=e887] [cursor=pointer]:
                  - /url: /en-gb/security-measures
                - link "Our business model" [ref=e889] [cursor=pointer]:
                  - /url: /en-gb/about-us/how-capital-makes-money
            - generic [ref=e890]:
              - generic [ref=e891]: Work with us
              - generic [ref=e892]:
                - link "Careers" [ref=e894] [cursor=pointer]:
                  - /url: /en-gb/about-us/careers
                - link "Partnerships" [ref=e896] [cursor=pointer]:
                  - /url: /en-gb/partnerships
            - generic [ref=e897]:
              - generic [ref=e898]: Help
              - generic [ref=e899]:
                - link "Help centre" [ref=e901] [cursor=pointer]:
                  - /url: /en-gb/help
                - link "Client vulnerability" [ref=e903] [cursor=pointer]:
                  - /url: /en-gb/help/client-vulnerability
                - link "Contact us" [ref=e905] [cursor=pointer]:
                  - /url: /en-gb/contact-us
            - generic [ref=e906]:
              - generic [ref=e907]: Legal
              - generic [ref=e908]:
                - link "Terms & policies" [ref=e910] [cursor=pointer]:
                  - /url: /en-gb/terms-and-policies
                - link "Complaints" [ref=e912] [cursor=pointer]:
                  - /url: /en-gb/help/complaints
    - generic [ref=e914]:
      - paragraph [ref=e915]: Risk warning
      - paragraph [ref=e916]:
        - strong [ref=e917]: All Trading involves risk.
        - text: Spread bets and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
        - strong [ref=e918]: 61% of retail investor accounts lose money when trading spread bets and CFDs with this provider
        - text: . You should consider whether you understand how spread bets and CFDs work and whether you can afford to take the high risk of losing your money. Professional clients can lose more than they deposit. Please refer to our
        - link "Risk Disclosure Statement" [ref=e919] [cursor=pointer]:
          - /url: https://capital.com/risk-disclosure-statement-fca
      - paragraph [ref=e920]:
        - text: 1X is a non-leveraged CFD. It is a derivative, and is therefore a complex product. The value of your investment can go down as well as up, and you may get back less than you invest.
        - text: Crypto Derivatives are not available to Retail clients registered with Capital Com (UK) Ltd.
        - text: The value of shares and ETFs bought through a share dealing account can fall as well as rise, which could mean getting back less than you originally put in. Past performance is no guarantee of future results.
        - text: The information contained herein is not intended for distribution to residents in any country where such distribution or use would contravene any local law or regulatory requirement.
      - paragraph [ref=e921]
      - paragraph [ref=e922]: Capital Com (UK) Limited (“CCUK”) is registered in England and Wales with company registration number 10506220. CCUK is Authorised and regulated by the Financial Conduct Authority (“FCA”), under registration number 793714.
    - generic [ref=e923]:
      - paragraph [ref=e924]: © 2026 Capital Com (UK) Limited
      - generic [ref=e925]:
        - link "Sitemap" [ref=e926] [cursor=pointer]:
          - /url: /en-gb/sitemap
        - link "Cookie settings" [ref=e927] [cursor=pointer]:
          - /url: ""
        - link "Clients Funds" [ref=e928] [cursor=pointer]:
          - /url: /en-gb/about-us/what-capital-does-with-your-money
        - link "Terms and Policies" [ref=e929] [cursor=pointer]:
          - /url: /en-gb/terms-and-policies
        - link "Complaints Procedure (CCUK)" [ref=e930] [cursor=pointer]:
          - /url: /en-gb/help/complaints
  - generic [ref=e932]:
    - button "Close modal" [ref=e933] [cursor=pointer]
    - generic [ref=e934]:
      - generic [ref=e936]:
        - img [ref=e937]
        - list [ref=e941]:
          - listitem [ref=e942]:
            - generic [ref=e943]: One app. 5,500+ markets
          - listitem [ref=e944]:
            - generic [ref=e945]: 24/7 support to assist you in 10+ languages
          - listitem [ref=e946]:
            - generic [ref=e947]: 75+ technical analysis indicators
          - listitem [ref=e948]:
            - generic [ref=e949]: Free trading education to build your skills
      - generic [ref=e950]:
        - generic [ref=e951]:
          - strong [ref=e952]: Sign up
          - paragraph [ref=e953]:
            - text: Already have an account?
            - button "Login" [ref=e954] [cursor=pointer]:
              - generic [ref=e955]: Login
        - generic [ref=e957]:
          - generic [ref=e958]:
            - button "Email address Please enter a valid Email" [ref=e959] [cursor=pointer]:
              - button "Email address" [ref=e960]:
                - generic [ref=e961]:
                  - textbox "email" [ref=e962]:
                    - /placeholder: " "
                  - generic: Email address
              - generic:
                - generic:
                  - listitem:
                    - generic: Please enter a valid Email
            - button "Password • At least one digit • At least one lower case letter • At least one special character • At least one upper case letter • Minimum 8 characters" [ref=e963] [cursor=pointer]:
              - button "Password" [ref=e964]:
                - generic [ref=e965]:
                  - textbox "password" [ref=e966]:
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
          - button "Continue" [ref=e967] [cursor=pointer]:
            - generic [ref=e968]: Continue
        - generic [ref=e969]:
          - separator [ref=e970]
          - generic [ref=e971]: OR
        - generic [ref=e972]:
          - iframe [ref=e975]:
            - button "Sign in with Google. Opens in new tab" [ref=f1e3] [cursor=pointer]:
              - img [ref=f1e7]
          - button [ref=e976] [cursor=pointer]
        - paragraph [ref=e978]:
          - generic [ref=e979]:
            - text: By creating an account, I confirm that I have read and understood the
            - strong [ref=e980]:
              - link "Privacy Policy" [ref=e981] [cursor=pointer]:
                - /url: /en-gb/terms-and-policies
  - button [ref=e982] [cursor=pointer]
  - dialog "Cookie banner" [ref=e984]:
    - generic [ref=e985]:
      - paragraph [ref=e987]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e988] [cursor=pointer]:
          - /url: https://capital.com/cookies-policy-fca
          - text: Cookie Policy
        - text: .
      - generic [ref=e989]:
        - button "Reject all" [ref=e990] [cursor=pointer]
        - button "Allow all cookies" [ref=e991] [cursor=pointer]
        - button "Cookie settings" [ref=e992] [cursor=pointer]
  - alert [ref=e993]
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