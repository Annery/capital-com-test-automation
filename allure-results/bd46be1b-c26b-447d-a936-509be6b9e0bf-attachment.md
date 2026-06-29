# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/about.spec.ts >> [CYSEC NL | authorized] About / Help / Contact us >> [banner_with_steps] -> platformPage
- Location: src/fixtures/content-section.ts:41:25

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/trading\/platform\//
Received string:  "https://capital.com/nl-nl/contact-us"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://capital.com/nl-nl/contact-us"


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
      - text: Neem contact op
    - generic [ref=e47]:
      - generic [ref=e53]:
        - heading "Neem contact op" [level=1] [ref=e54]
        - paragraph [ref=e56]: Onze klantenservice is bereikbaar via e-mail, telefoon en live chat. We beantwoorden uw vragen zo snel mogelijk.
      - generic [ref=e60]:
        - generic [ref=e62]:
          - heading "E-mail" [level=3] [ref=e63]
          - link "support@capital.com" [ref=e64] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - generic [ref=e65]: support@capital.com
        - generic [ref=e67]:
          - heading "Telefoon" [level=3] [ref=e68]
          - link "+31 97010282820" [ref=e69] [cursor=pointer]:
            - /url: tel:+3197010282820
            - generic [ref=e70]: +31 97010282820
        - generic [ref=e72]:
          - heading "Chat" [level=3] [ref=e73]
          - link "WhatsApp" [ref=e74] [cursor=pointer]:
            - /url: https://wa.me/447897000276
            - generic [ref=e75]: WhatsApp
        - generic [ref=e77]:
          - heading "Hulpcentrum" [level=3] [ref=e78]
          - link "Bezoek" [ref=e79] [cursor=pointer]:
            - /url: /nl-nl/help
            - generic [ref=e80]: Bezoek
        - generic [ref=e82]:
          - heading "Dien een verzoek in" [level=3] [ref=e83]
          - link "Bezoek" [ref=e84] [cursor=pointer]:
            - /url: https://help.capitalccsv.com/hc/nl/requests/new
            - generic [ref=e85]: Bezoek
      - generic [ref=e94]:
        - strong [ref=e95]: Ons kantoor in Cyprus
        - paragraph [ref=e97]:
          - text: Capital Com SV Investments Limited
          - text: Vasileiou Makedonos, 8, KINNIS BUSINESS CENTER, 1-3rd floor, 3040,
          - text: Limassol, Cyprus
      - generic [ref=e99]:
        - heading "Meer over ons" [level=2] [ref=e101]
        - generic [ref=e102]:
          - generic [ref=e104]:
            - heading "Onze kantoren wereldwijd" [level=3] [ref=e105]
            - paragraph [ref=e107]: Vestigingen in heel Europa, het Midden-Oosten en Oost-Azië. Geregistreerd in zeven rechtsgebieden.
            - link "Bekijk alle locaties" [ref=e108] [cursor=pointer]:
              - /url: /nl-nl/about-us/our-offices
              - generic [ref=e109]: Bekijk alle locaties
          - generic [ref=e111]:
            - heading "Over ons" [level=3] [ref=e112]
            - paragraph [ref=e114]: Het verhaal achter Capital·com, de filosofie die ten grondslag ligt aan de bedrijfsvoering, en de mensen die het hebben opgebouwd.
            - link "Meer informatie" [ref=e115] [cursor=pointer]:
              - /url: /nl-nl/about-us
              - generic [ref=e116]: Meer informatie
      - generic [ref=e117]:
        - generic [ref=e119]:
          - heading "Feedback en recensies van gebruikers" [level=2] [ref=e120]
          - generic [ref=e121]:
            - text: Lees de feedback van onze klanten
            - superscript [ref=e122]: "1"
            - text: ", ongeacht hun ervaringsniveau."
        - generic [ref=e123]:
          - region [ref=e124]:
            - generic [ref=e126]:
              - group [ref=e127]:
                - link [ref=e128] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e131]: 2025-01-14
                  - strong [ref=e132]: B******** F***** S****
                  - paragraph [ref=e134]: Werkt gemakkelijk en hoop mogelijk heden
              - group [ref=e136]:
                - link [ref=e137] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e140]: 2025-05-23
                  - strong [ref=e141]: M****
                  - paragraph [ref=e143]: Ik gebruik al jaren capital,vooral het onbeperkt gebruik van een demo account vind ik erg nuttig om strategieën te testen daarnaast kan men op een live account met kleine posities handelen om zo ervaring op te doen met live traden, ook de vele instellingen o.a. voor wat betreft de hefboom is handig ,tevens is het laten uitbetalen van je winsten erg rap, gebeurt meestal binnen 4 uur, dan staat het al op je eigen externe wallet ,
              - group [ref=e145]:
                - link [ref=e146] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e149]: 2024-10-04
                  - strong [ref=e150]: J***** L******
                  - paragraph [ref=e152]: Overzichtelijk, snel en duidelijk en de ondersteuning is top.
              - group [ref=e154]:
                - link [ref=e155] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e158]: 2024-09-20
                  - strong [ref=e159]: K* K*****
                  - paragraph [ref=e161]: Overzichtelijk app, duidelijke informaties en goede en snelle service.
              - group [ref=e163]:
                - link [ref=e164] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e167]: 2024-07-18
                  - strong [ref=e168]: k****
                  - paragraph [ref=e170]: Het is leuk en eenvoudig, ik ben een beginnende, maar het is goed duidelijk en veel informatie.
              - group [ref=e172]:
                - link [ref=e173] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e176]: 2024-09-18
                  - strong [ref=e177]: J****G****
                  - paragraph [ref=e179]: Heb zelf alleen nog een demo account maar wel een fijne app om te oefenen
              - group [ref=e181]:
                - link [ref=e182] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e185]: 2025-03-31
                  - strong [ref=e186]: G***** K****
                  - paragraph [ref=e188]: Ik ben zeer goed en snel geholpen.
              - group [ref=e190]:
                - link [ref=e191] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e194]: 2025-04-12
                  - strong [ref=e195]: M******* F*****
                  - paragraph [ref=e197]: Super blij mee, werkt fantastisch samen met tradingview
              - group [ref=e199]:
                - link [ref=e200] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e203]: 2024-07-17
                  - strong [ref=e204]: S****
                  - paragraph [ref=e206]: Dat het vertrouwd is. Tot nu toe is het allemaal perfekt verlopen
              - group [ref=e208]:
                - link [ref=e209] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e212]: 2024-11-29
                  - strong [ref=e213]: j***** D* J***
                  - paragraph [ref=e215]: Het lukte me niet om geld naar me eigen rekening over te boeken, maar ik ben fantastisch geholpen door de helpdesk! Dezelfde dag was het geld overgemaakt. Echt fantastische klantenservice heel netjes en behulpzaam.
              - group "1 of 10" [ref=e217]:
                - link "2025-01-14 B******** F***** S**** Werkt gemakkelijk en hoop mogelijk heden" [ref=e218] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e221]: 2025-01-14
                  - strong [ref=e222]: B******** F***** S****
                  - paragraph [ref=e224]: Werkt gemakkelijk en hoop mogelijk heden
              - group "2 of 10" [ref=e226]:
                - link "2025-05-23 M**** Ik gebruik al jaren capital,vooral het onbeperkt gebruik van een demo account vind ik erg nuttig om strategieën te testen daarnaast kan men op een live account met kleine posities handelen om zo ervaring op te doen met live traden, ook de vele instellingen o.a. voor wat betreft de hefboom is handig ,tevens is het laten uitbetalen van je winsten erg rap, gebeurt meestal binnen 4 uur, dan staat het al op je eigen externe wallet ," [ref=e227] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e230]: 2025-05-23
                  - strong [ref=e231]: M****
                  - paragraph [ref=e233]: Ik gebruik al jaren capital,vooral het onbeperkt gebruik van een demo account vind ik erg nuttig om strategieën te testen daarnaast kan men op een live account met kleine posities handelen om zo ervaring op te doen met live traden, ook de vele instellingen o.a. voor wat betreft de hefboom is handig ,tevens is het laten uitbetalen van je winsten erg rap, gebeurt meestal binnen 4 uur, dan staat het al op je eigen externe wallet ,
              - group "3 of 10" [ref=e235]:
                - link "2024-10-04 J***** L****** Overzichtelijk, snel en duidelijk en de ondersteuning is top." [ref=e236] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e239]: 2024-10-04
                  - strong [ref=e240]: J***** L******
                  - paragraph [ref=e242]: Overzichtelijk, snel en duidelijk en de ondersteuning is top.
              - group [ref=e244]:
                - link [ref=e245] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e248]: 2024-09-20
                  - strong [ref=e249]: K* K*****
                  - paragraph [ref=e251]: Overzichtelijk app, duidelijke informaties en goede en snelle service.
              - group [ref=e253]:
                - link [ref=e254] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e257]: 2024-07-18
                  - strong [ref=e258]: k****
                  - paragraph [ref=e260]: Het is leuk en eenvoudig, ik ben een beginnende, maar het is goed duidelijk en veel informatie.
              - group [ref=e262]:
                - link [ref=e263] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e266]: 2024-09-18
                  - strong [ref=e267]: J****G****
                  - paragraph [ref=e269]: Heb zelf alleen nog een demo account maar wel een fijne app om te oefenen
              - group [ref=e271]:
                - link [ref=e272] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e275]: 2025-03-31
                  - strong [ref=e276]: G***** K****
                  - paragraph [ref=e278]: Ik ben zeer goed en snel geholpen.
              - group [ref=e280]:
                - link [ref=e281] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e284]: 2025-04-12
                  - strong [ref=e285]: M******* F*****
                  - paragraph [ref=e287]: Super blij mee, werkt fantastisch samen met tradingview
              - group [ref=e289]:
                - link [ref=e290] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e293]: 2024-07-17
                  - strong [ref=e294]: S****
                  - paragraph [ref=e296]: Dat het vertrouwd is. Tot nu toe is het allemaal perfekt verlopen
              - group [ref=e298]:
                - link [ref=e299] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e302]: 2024-11-29
                  - strong [ref=e303]: j***** D* J***
                  - paragraph [ref=e305]: Het lukte me niet om geld naar me eigen rekening over te boeken, maar ik ben fantastisch geholpen door de helpdesk! Dezelfde dag was het geld overgemaakt. Echt fantastische klantenservice heel netjes en behulpzaam.
              - group [ref=e307]:
                - link [ref=e308] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e311]: 2025-01-14
                  - strong [ref=e312]: B******** F***** S****
                  - paragraph [ref=e314]: Werkt gemakkelijk en hoop mogelijk heden
              - group [ref=e316]:
                - link [ref=e317] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e320]: 2025-05-23
                  - strong [ref=e321]: M****
                  - paragraph [ref=e323]: Ik gebruik al jaren capital,vooral het onbeperkt gebruik van een demo account vind ik erg nuttig om strategieën te testen daarnaast kan men op een live account met kleine posities handelen om zo ervaring op te doen met live traden, ook de vele instellingen o.a. voor wat betreft de hefboom is handig ,tevens is het laten uitbetalen van je winsten erg rap, gebeurt meestal binnen 4 uur, dan staat het al op je eigen externe wallet ,
              - group [ref=e325]:
                - link [ref=e326] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e329]: 2024-10-04
                  - strong [ref=e330]: J***** L******
                  - paragraph [ref=e332]: Overzichtelijk, snel en duidelijk en de ondersteuning is top.
              - group [ref=e334]:
                - link [ref=e335] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e338]: 2024-09-20
                  - strong [ref=e339]: K* K*****
                  - paragraph [ref=e341]: Overzichtelijk app, duidelijke informaties en goede en snelle service.
              - group [ref=e343]:
                - link [ref=e344] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e347]: 2024-07-18
                  - strong [ref=e348]: k****
                  - paragraph [ref=e350]: Het is leuk en eenvoudig, ik ben een beginnende, maar het is goed duidelijk en veel informatie.
              - group [ref=e352]:
                - link [ref=e353] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e356]: 2024-09-18
                  - strong [ref=e357]: J****G****
                  - paragraph [ref=e359]: Heb zelf alleen nog een demo account maar wel een fijne app om te oefenen
              - group [ref=e361]:
                - link [ref=e362] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e365]: 2025-03-31
                  - strong [ref=e366]: G***** K****
                  - paragraph [ref=e368]: Ik ben zeer goed en snel geholpen.
              - group [ref=e370]:
                - link [ref=e371] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e374]: 2025-04-12
                  - strong [ref=e375]: M******* F*****
                  - paragraph [ref=e377]: Super blij mee, werkt fantastisch samen met tradingview
              - group [ref=e379]:
                - link [ref=e380] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e383]: 2024-07-17
                  - strong [ref=e384]: S****
                  - paragraph [ref=e386]: Dat het vertrouwd is. Tot nu toe is het allemaal perfekt verlopen
              - group [ref=e388]:
                - link [ref=e389] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e392]: 2024-11-29
                  - strong [ref=e393]: j***** D* J***
                  - paragraph [ref=e395]: Het lukte me niet om geld naar me eigen rekening over te boeken, maar ik ben fantastisch geholpen door de helpdesk! Dezelfde dag was het geld overgemaakt. Echt fantastische klantenservice heel netjes en behulpzaam.
            - generic:
              - button "Go to last slide" [ref=e397] [cursor=pointer]
              - button "Next slide" [ref=e398] [cursor=pointer]
          - paragraph [ref=e399]: Dit zijn onze 4- & 5-sterrenbeoordelingen. Om te voldoen aan de GDPR-vereisten en de privacy van de gebruikers te waarborgen, zijn hun specifieke gegevens bewust anoniem gemaakt.
        - generic [ref=e401]:
          - link "4.6" [ref=e402] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - strong [ref=e405]: "4.6"
          - link "Beoordelingen en recensies 4.7" [ref=e408] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - strong [ref=e410]: Beoordelingen en recensies
            - strong [ref=e412]: "4.7"
          - link "Beoordelingen en recensies 4.7" [ref=e415] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - strong [ref=e417]: Beoordelingen en recensies
            - strong [ref=e419]: "4.7"
          - link "4.6" [ref=e422] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - strong [ref=e425]: "4.6"
      - generic [ref=e429]:
        - heading "Aan de slag in drie stappen" [level=2] [ref=e431]
        - generic [ref=e432]:
          - button [active] [ref=e434] [cursor=pointer]
          - generic [ref=e437]: 1. Maak uw account aan (mits u in aanmerking komt)
          - generic [ref=e438]: 2. Stort wanneer u wilt
          - generic [ref=e439]: 3. Handel als u er klaar voor bent
      - paragraph [ref=e443]:
        - superscript [ref=e444]: "1"
        - text: De hier verstrekte informatie heeft betrekking op Capital Com Group.
  - contentinfo [ref=e446]:
    - generic [ref=e447]:
      - link [ref=e448] [cursor=pointer]:
        - /url: /nl-nl
        - img [ref=e449]
      - generic [ref=e453]:
        - link [ref=e454] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e455] [cursor=pointer]:
          - /url: https://www.youtube.com/@Capitaltrading/videos
      - generic [ref=e456]:
        - link [ref=e457] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e458] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e459] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e460]:
      - generic [ref=e461]:
        - generic [ref=e462]:
          - generic [ref=e463]:
            - generic [ref=e464]: "Land / Regio:"
            - button [ref=e465] [cursor=pointer]
          - generic [ref=e467]: •
          - generic [ref=e468]:
            - generic [ref=e469]: "Taal:"
            - button [ref=e470] [cursor=pointer]
        - generic [ref=e471]:
          - generic [ref=e472]: "Ook kunt u contact met ons opnemen:"
          - link "+31 97010282820" [ref=e475] [cursor=pointer]:
            - /url: tel:+31 97010282820
            - strong [ref=e476]: +31 97010282820
            - strong
          - generic [ref=e477]: •
          - link "support@capital.com" [ref=e479] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e480]: support@capital.com
      - generic [ref=e481]:
        - generic [ref=e482]:
          - strong [ref=e484]: Handelen
          - generic [ref=e485]:
            - generic [ref=e486]:
              - generic [ref=e487]: Handelen
              - generic [ref=e488]:
                - link "CFD-handel" [ref=e490] [cursor=pointer]:
                  - /url: /nl-nl/ways-to-trade/cfd-trading
                - link "Knock-outs" [ref=e492] [cursor=pointer]:
                  - /url: /nl-nl/ways-to-trade/knock-outs
                - link "Demohandel" [ref=e494] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/demo-account
                - link "Professioneel" [ref=e496] [cursor=pointer]:
                  - /url: /nl-nl/professional-clients
            - generic [ref=e497]:
              - generic [ref=e498]: Handelsplatformen
              - generic [ref=e499]:
                - link "Webplatform" [ref=e501] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/web-platform
                - link "Mobiele apps" [ref=e503] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/mobile-apps
                - link "TradingView" [ref=e505] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/trading-view
                - link "MT4" [ref=e507] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/mt4
                - link "MT5" [ref=e509] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/mt5
            - generic [ref=e510]:
              - generic [ref=e511]: Leer
              - generic [ref=e512]:
                - link "Handelsstrategieën" [ref=e514] [cursor=pointer]:
                  - /url: /nl-nl/learn/trading-strategies
                - link "Technische analyse" [ref=e516] [cursor=pointer]:
                  - /url: /nl-nl/learn/technical-analysis
                - link "Handelspsychologie" [ref=e518] [cursor=pointer]:
                  - /url: /nl-nl/learn/trading-psychology
                - link "Leer" [ref=e520] [cursor=pointer]:
                  - /url: /nl-nl/learn
        - generic [ref=e521]:
          - strong [ref=e523]: Markten
          - generic [ref=e524]:
            - generic [ref=e525]:
              - generic [ref=e526]: Onze markten
              - generic [ref=e527]:
                - link "Markten" [ref=e529] [cursor=pointer]:
                  - /url: /nl-nl/markets
                - link "Forex" [ref=e531] [cursor=pointer]:
                  - /url: /nl-nl/markets/forex
                - link "Aandelen" [ref=e533] [cursor=pointer]:
                  - /url: /nl-nl/markets/shares
                - link "Indexen" [ref=e535] [cursor=pointer]:
                  - /url: /nl-nl/markets/indices
                - link "Grondstoffen" [ref=e537] [cursor=pointer]:
                  - /url: /nl-nl/markets/commodities
                - link "Cryptocurrencies" [ref=e539] [cursor=pointer]:
                  - /url: /nl-nl/markets/cryptocurrencies
                - link "Obligaties" [ref=e541] [cursor=pointer]:
                  - /url: /nl-nl/markets/bonds
                - link "Rentetarieven" [ref=e543] [cursor=pointer]:
                  - /url: /nl-nl/markets/interest-rates
            - generic [ref=e544]:
              - generic [ref=e545]: Marktinzichten
              - generic [ref=e546]:
                - link "Marktanalyse" [ref=e548] [cursor=pointer]:
                  - /url: /nl-nl/analysis
                - link "Markten prijsstelling" [ref=e550] [cursor=pointer]:
                  - /url: /nl-nl/about-us/how-our-markets-are-priced
        - link "Prijzen" [ref=e553] [cursor=pointer]:
          - /url: /nl-nl/ways-to-trade/fees-and-charges
          - strong [ref=e554]: Prijzen
        - generic [ref=e555]:
          - strong [ref=e557]: Informatie
          - generic [ref=e558]:
            - generic [ref=e559]:
              - generic [ref=e560]: Wie zijn wij
              - generic [ref=e561]:
                - link "Over" [ref=e563] [cursor=pointer]:
                  - /url: /nl-nl/about-us
                - link "Onze kantoren" [ref=e565] [cursor=pointer]:
                  - /url: /nl-nl/about-us/our-offices
                - link "Is Capital.com veilig?" [ref=e567] [cursor=pointer]:
                  - /url: /nl-nl/security-measures
                - link "Ons bedrijfsmodel" [ref=e569] [cursor=pointer]:
                  - /url: /nl-nl/about-us/how-capital-makes-money
            - generic [ref=e570]:
              - generic [ref=e571]: Werk met ons
              - link "Carrières" [ref=e574] [cursor=pointer]:
                - /url: /nl-nl/about-us/careers
            - generic [ref=e575]:
              - generic [ref=e576]: Hulp nodig?
              - generic [ref=e577]:
                - link "Hulp" [ref=e579] [cursor=pointer]:
                  - /url: /nl-nl/help
                - link "Kwetsbaarheid van de klant" [ref=e581] [cursor=pointer]:
                  - /url: /nl-nl/help/client-vulnerability
                - link "Neem contact op" [ref=e583] [cursor=pointer]:
                  - /url: /nl-nl/contact-us
            - generic [ref=e584]:
              - generic [ref=e585]: Juridische informatie
              - generic [ref=e586]:
                - link "Voorwaarden en beleid" [ref=e588] [cursor=pointer]:
                  - /url: /nl-nl/terms-and-policies
                - link "Klachtenprocedure - Capital Com Group Ltd" [ref=e590] [cursor=pointer]:
                  - /url: /nl-nl/terms-and-policies/complaints-procedure-cceu
                - link "Klachtenprocedure - Capital Com SV Investments Limited" [ref=e592] [cursor=pointer]:
                  - /url: /nl-nl/terms-and-policies/complaints-procedure
                - 'link "Compliance en regelgeving: Handel in CFD''s" [ref=e594] [cursor=pointer]':
                  - /url: /nl-nl/terms-and-policies/compliance-and-legals
    - generic [ref=e596]:
      - paragraph [ref=e597]:
        - text: CFD's zijn complexe instrumenten en houden vanwege de hefboomwerking een hoog risico in op grote verliezen.
        - generic [ref=e598]:
          - generic [ref=e599]:
            - strong [ref=e600]: 73% van de particuliere beleggers verliest geld bij de handel in CFD's met deze aanbieder
            - text: .
          - text: U moet nagaan of u wel degelijk begrijpt hoe CFD's werken en of u zich het hoge risico op geldverlies kunt veroorloven. Raadpleeg onze
          - link "risicoverklaring" [ref=e601] [cursor=pointer]:
            - /url: https://capital.com/risk-disclosure-policy
      - paragraph [ref=e602]:
        - text: "Waarschuwing: De waarde van aandelen en ETF's die u via een effectenrekening koopt, kan zowel dalen als stijgen. Dit betekent dat u mogelijk minder terugkrijgt dan u oorspronkelijk hebt ingelegd. Prestaties uit het verleden bieden geen garantie voor de toekomst."
        - text: Transacties in niet-leverbare over-the-counter-instrumenten, zoals knock-outopties en CFD's, zijn complexe financiële producten met een hoog risico op verlies van het volledige geïnvesteerde kapitaal. Aangezien deze producten zowel winsten als aanzienlijke verliezen kunnen opleveren, zijn ze niet geschikt voor elke belegger. U moet nagaan of u wel degelijk begrijpt hoe CFD's werken en of u zich het hoge risico op verlies kunt veroorloven.
        - text: Professionele klanten lopen het risico om meer te verliezen dan hun oorspronkelijke inleg. De informatie op deze website is van algemene aard en is niet afgestemd op uw financiële situatie, doelstellingen of behoeften. Raadpleeg onze juridische documenten en zorg ervoor dat u de risico's volledig begrijpt voordat u besluit om te handelen. Wij raden u aan om onze trainingen te volgen om een beter inzicht te krijgen in de risico's.
      - paragraph [ref=e603]: "Capital Com SV Investments Limited is een in Cyprus gevestigde onderneming met ondernemingsnummer HE 354252. Het bedrijf is erkend en staat onder toezicht van de Cyprus Securities and Exchange Commission (licentienummer 319/17). De maatschappelijke zetel bevindt zich op: Vasileiou Makedonos: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cyprus."
      - paragraph [ref=e604]: "Capital Com Group Ltd is een in Cyprus gevestigde onderneming met ondernemingsnummer ΗΕ 446198. Het bedrijf is erkend en staat onder toezicht van de Cyprus Securities and Exchange Commission (licentienummer 463/25). De maatschappelijke zetel bevindt zich op: Vasileiou Makedonos: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cyprus."
      - paragraph [ref=e605]: De informatie op deze site is niet bestemd voor inwoners van de Verenigde Staten, Canada en België of enig ander land buiten de EER, en is niet bedoeld voor distributie aan of gebruik door personen in enig land of rechtsgebied waar deze distributie of dit gebruik in strijd zou zijn met de plaatselijke wet- of regelgeving.
    - generic [ref=e606]:
      - paragraph [ref=e607]: © 2026 Capital Com SV Investments Limited
      - generic [ref=e608]:
        - link "Sitemap" [ref=e609] [cursor=pointer]:
          - /url: /nl-nl/sitemap
        - link "Cookie-instellingen" [ref=e610] [cursor=pointer]:
          - /url: ""
        - link "Regelgeving" [ref=e611] [cursor=pointer]:
          - /url: /nl-nl/terms-and-policies/regulations
        - link "Voorwaarden en beleid" [ref=e612] [cursor=pointer]:
          - /url: /nl-nl/terms-and-policies
        - link "Klachtenprocedure" [ref=e613] [cursor=pointer]:
          - /url: /nl-nl/terms-and-policies/complaints-procedures
  - generic [ref=e615]:
    - button "Close modal" [ref=e616] [cursor=pointer]
    - generic [ref=e617]:
      - generic [ref=e619]:
        - img [ref=e620]
        - list [ref=e624]:
          - listitem [ref=e625]:
            - generic [ref=e626]: Eén app. 5,500+ markten.
          - listitem [ref=e627]:
            - generic [ref=e628]: 24/7 ondersteuning in meer dan 10 talen
          - listitem [ref=e629]:
            - generic [ref=e630]: Meer dan 75 indicatoren voor technische analyse
          - listitem [ref=e631]:
            - generic [ref=e632]: Een gratis cursus traden om je kennis te verruimen
      - generic [ref=e633]:
        - generic [ref=e634]:
          - strong [ref=e635]: Registreren
          - paragraph [ref=e636]:
            - text: Heeft u al een account?
            - button "Aanmelden" [ref=e637] [cursor=pointer]:
              - generic [ref=e638]: Aanmelden
        - generic [ref=e640]:
          - generic [ref=e641]:
            - button "E-mailadres Voer een geldig e-mailadres in" [ref=e642] [cursor=pointer]:
              - button "E-mailadres" [ref=e643]:
                - generic [ref=e644]:
                  - textbox "email" [ref=e645]:
                    - /placeholder: " "
                  - generic: E-mailadres
              - generic:
                - generic:
                  - listitem:
                    - generic: Voer een geldig e-mailadres in
            - button "Wachtwoord • Ten minste één cijfer • Ten minste één kleine letter • Ten minste één speciaal teken • Ten minste één hoofd letter • Minimaal 8 tekens" [ref=e646] [cursor=pointer]:
              - button "Wachtwoord" [ref=e647]:
                - generic [ref=e648]:
                  - textbox "password" [ref=e649]:
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
          - button "Doorgaan" [ref=e650] [cursor=pointer]:
            - generic [ref=e651]: Doorgaan
        - generic [ref=e652]:
          - separator [ref=e653]
          - generic [ref=e654]: OF
        - generic [ref=e655]:
          - iframe [ref=e658]:
            - button "Sign in with Google. Opens in new tab" [ref=f1e3] [cursor=pointer]:
              - img [ref=f1e7]
          - button [ref=e659] [cursor=pointer]
        - paragraph [ref=e661]:
          - generic [ref=e662]:
            - text: Als ik een account aanmaak, bevestig ik dat ik het
            - strong [ref=e663]:
              - link "Privacybeleid" [ref=e664] [cursor=pointer]:
                - /url: /nl-nl/terms-and-policies
            - text: heb gelezen en begrepen
  - button [ref=e665] [cursor=pointer]
  - dialog "Cookie banner" [ref=e667]:
    - generic [ref=e668]:
      - paragraph [ref=e670]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e671] [cursor=pointer]:
          - /url: https://capital.com/cookies-policy-nl
          - text: Cookie Policy
        - text: .
      - generic [ref=e672]:
        - button "Reject all" [ref=e673] [cursor=pointer]
        - button "Allow all cookies" [ref=e674] [cursor=pointer]
        - button "Cookie settings" [ref=e675] [cursor=pointer]
  - alert [ref=e676]
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