# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/pricing.spec.ts >> [SCB DE | authorized] Pricing / Pricing >> [banner_with_steps] -> platformPage
- Location: src/fixtures/content-section.ts:41:25

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-type="banner_with_steps"]').filter({ visible: true }).first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-type="banner_with_steps"]').filter({ visible: true }).first()

```

```yaml
- banner:
  - text: CFDs sind komplexe Instrumente und aufgrund des Hebels mit einem hohen Risiko des schnellen Geldverlustes verbunden.
  - strong: 78.48 % der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit diesem Anbieter.
  - text: Sie sollten abwägen, ob Sie verstehen, wie CFDs funktionieren, und ob Sie es sich leisten können, das hohe Risiko des Geldverlustes einzugehen.
  - link:
    - /url: /de-int
    - img
  - navigation:
    - button "Handel":
      - button "Handel"
    - button "Märkte":
      - button "Märkte"
    - link "Preisgestaltung":
      - /url: /de-int/ways-to-trade/fees-and-charges
    - button "Über uns":
      - button "Über uns"
  - button "de"
  - link "Plattform öffnen":
    - /url: /trading/platform/
- paragraph:
  - link "Startseite":
    - /url: /de-int
  - text: •
  - link "Handel":
    - /url: /de-int/ways-to-trade
  - text: •Preisgestaltung
- heading "Kosten und Gebühren" [level=1]
- paragraph: Alle Gebühren und Kosten werden dokumentiert und offengelegt, bevor eine Position eröffnet wird.
- main:
  - heading "Kontogebühren" [level=2]
  - table:
    - rowgroup:
      - row "Ein Konto eröffnen GEBÜHRENFREI":
        - cell "Ein Konto eröffnen":
          - paragraph:
            - strong: Ein Konto eröffnen
        - cell "GEBÜHRENFREI":
          - paragraph:
            - strong: GEBÜHRENFREI
      - row "Ein Konto schließen GEBÜHRENFREI":
        - cell "Ein Konto schließen":
          - paragraph:
            - strong: Ein Konto schließen
        - cell "GEBÜHRENFREI":
          - paragraph:
            - strong: GEBÜHRENFREI
      - row "Demokonto GEBÜHRENFREI":
        - cell "Demokonto":
          - paragraph:
            - strong: Demokonto
        - cell "GEBÜHRENFREI":
          - paragraph:
            - strong: GEBÜHRENFREI
  - heading "Ein- und Auszahlungsgebühren" [level=2]
  - table:
    - rowgroup:
      - row "Einzahlungsgebühr GEBÜHRENFREI":
        - cell "Einzahlungsgebühr":
          - paragraph:
            - strong: Einzahlungsgebühr
        - cell "GEBÜHRENFREI":
          - paragraph:
            - strong: GEBÜHRENFREI
      - row "Mindesteinzahlung 10 USD/EUR/GBP für Bankkarten und Apple Pay.* *Die Mindestbeträge für Einzahlungen variieren je nach Zahlungsmethode. Für Banküberweisungen gilt eine Mindesteinzahlung von 50 EUR oder dem entsprechenden Gegenwert in der Basiswährung des Kontos.":
        - cell "Mindesteinzahlung":
          - paragraph:
            - strong: Mindesteinzahlung
        - cell "10 USD/EUR/GBP für Bankkarten und Apple Pay.* *Die Mindestbeträge für Einzahlungen variieren je nach Zahlungsmethode. Für Banküberweisungen gilt eine Mindesteinzahlung von 50 EUR oder dem entsprechenden Gegenwert in der Basiswährung des Kontos.":
          - paragraph:
            - strong: 10 USD/EUR/GBP für Bankkarten und Apple Pay.*
          - paragraph:
            - strong: "*Die Mindestbeträge für Einzahlungen variieren je nach Zahlungsmethode. Für Banküberweisungen gilt eine Mindesteinzahlung von 50 EUR oder dem entsprechenden Gegenwert in der Basiswährung des Kontos."
      - row "Auszahlungsgebühr GEBÜHRENFREI":
        - cell "Auszahlungsgebühr":
          - paragraph:
            - strong: Auszahlungsgebühr
        - cell "GEBÜHRENFREI":
          - paragraph:
            - strong: GEBÜHRENFREI
      - row "Mindestauszahlung 20 USD/EUR/GBP für Bankkarten* *Die Mindestauszahlungsbeträge variieren je nach Zahlungsmethode. Vollständige Details finden Sie [hier]. Wenn das Kontoguthaben unter dem Mindestauszahlungsbetrag liegt, ist nur eine vollständige Auszahlung des Guthabens möglich.":
        - cell "Mindestauszahlung":
          - strong: Mindestauszahlung
        - cell "20 USD/EUR/GBP für Bankkarten* *Die Mindestauszahlungsbeträge variieren je nach Zahlungsmethode. Vollständige Details finden Sie [hier]. Wenn das Kontoguthaben unter dem Mindestauszahlungsbetrag liegt, ist nur eine vollständige Auszahlung des Guthabens möglich.":
          - paragraph:
            - strong: 20 USD/EUR/GBP für Bankkarten*
          - paragraph:
            - strong:
              - text: "*Die Mindestauszahlungsbeträge variieren je nach Zahlungsmethode. Vollständige Details finden Sie ["
              - link "hier":
                - /url: https://help.capitalccbah.com/hc/de/articles/9626872797074-What-is-the-minimum-withdrawal-amount
              - text: "]. Wenn das Kontoguthaben unter dem Mindestauszahlungsbetrag liegt, ist nur eine vollständige Auszahlung des Guthabens möglich."
  - heading "Trading-Gebühren" [level=2]
  - table:
    - rowgroup:
      - row "Der Spread Der Spread ist die Differenz zwischen dem Kauf- und Verkaufspreis eines Instruments. Er stellt die Kosten für die Ausführung einer Position dar. Erfahren Sie mehr Spreads sind dynamisch und ändern sich in Abhängigkeit von den zugrunde liegenden Marktbedingungen. Sehen Sie hier den Spread für ein bestimmtes Instrument.":
        - cell "Der Spread Der Spread ist die Differenz zwischen dem Kauf- und Verkaufspreis eines Instruments. Er stellt die Kosten für die Ausführung einer Position dar. Erfahren Sie mehr":
          - paragraph:
            - strong: Der Spread
            - text: Der Spread ist die Differenz zwischen dem Kauf- und Verkaufspreis eines Instruments. Er stellt die Kosten für die Ausführung einer Position dar.
          - paragraph:
            - link "Erfahren Sie mehr":
              - /url: /de-int/ways-to-trade/fees-and-charges#part_3
        - cell "Spreads sind dynamisch und ändern sich in Abhängigkeit von den zugrunde liegenden Marktbedingungen. Sehen Sie hier den Spread für ein bestimmtes Instrument.":
          - paragraph:
            - text: Spreads sind dynamisch und ändern sich in Abhängigkeit von den zugrunde liegenden Marktbedingungen. Sehen Sie
            - link "hier":
              - /url: /de-int/ways-to-trade/fees-and-charges#part_3
            - text: den Spread für ein bestimmtes Instrument.
      - row "Trading-Provision GEBÜHRENFREI":
        - cell "Trading-Provision":
          - paragraph:
            - strong: Trading-Provision
        - cell "GEBÜHRENFREI":
          - paragraph:
            - strong: GEBÜHRENFREI
      - row "Übernachtgebühr* Eine Zinsanpassung, die angewendet wird, wenn eine Position über Nacht gehalten wird. *CFD-Positionen mit einem Hebel von 1:1 (ungehebelte Positionen) unterliegen keiner Übernachtfinanzierung, außer bei einer begrenzten Anzahl von Märkten. Die Gebühr wird je nach Positionsrichtung gezahlt oder erhalten. Die Gebühren für jedes Instrument sind in der untenstehenden Instrumententabelle aufgeführt.":
        - cell "Übernachtgebühr* Eine Zinsanpassung, die angewendet wird, wenn eine Position über Nacht gehalten wird. *CFD-Positionen mit einem Hebel von 1:1 (ungehebelte Positionen) unterliegen keiner Übernachtfinanzierung, außer bei einer begrenzten Anzahl von Märkten.":
          - paragraph:
            - strong: Übernachtgebühr*
            - text: Eine Zinsanpassung, die angewendet wird, wenn eine Position über Nacht gehalten wird. *CFD-Positionen mit einem Hebel von 1:1 (ungehebelte Positionen) unterliegen keiner Übernachtfinanzierung, außer bei einer begrenzten Anzahl von Märkten.
        - cell "Die Gebühr wird je nach Positionsrichtung gezahlt oder erhalten. Die Gebühren für jedes Instrument sind in der untenstehenden Instrumententabelle aufgeführt.":
          - paragraph: Die Gebühr wird je nach Positionsrichtung gezahlt oder erhalten. Die Gebühren für jedes Instrument sind in der untenstehenden Instrumententabelle aufgeführt.
      - row "Währungsumrechnung Eine Umrechnungsgebühr fällt an, wenn ein Markt in einer anderen Währung als die Basiswährung des Trading-Kontos denominiert ist. Derselbe FX-Aufschlag wird auch angewendet, wenn Sie Gelder zwischen Unterkonten in verschiedenen Währungen transferieren. 0,7 % des Spot-Forex-Kurses für Privatkunden 0,5 % des Spot-Forex-Kurses für Pro-Kunden":
        - cell "Währungsumrechnung Eine Umrechnungsgebühr fällt an, wenn ein Markt in einer anderen Währung als die Basiswährung des Trading-Kontos denominiert ist. Derselbe FX-Aufschlag wird auch angewendet, wenn Sie Gelder zwischen Unterkonten in verschiedenen Währungen transferieren.":
          - paragraph:
            - strong: Währungsumrechnung
            - text: Eine Umrechnungsgebühr fällt an, wenn ein Markt in einer anderen Währung als die Basiswährung des Trading-Kontos denominiert ist.
          - paragraph: Derselbe FX-Aufschlag wird auch angewendet, wenn Sie Gelder zwischen Unterkonten in verschiedenen Währungen transferieren.
        - cell "0,7 % des Spot-Forex-Kurses für Privatkunden 0,5 % des Spot-Forex-Kurses für Pro-Kunden":
          - strong: 0,7 % des Spot-Forex-Kurses für Privatkunden 0,5 % des Spot-Forex-Kurses für Pro-Kunden
      - row "Garantierte Stop-Loss-Orders (GSLs)* Eine GSL schließt eine Position zum angegebenen Preis und eliminiert das Risiko von Slippage bei der Ausführung. Bei Auslösung fällt eine Gebühr an. Erfahren Sie mehr Die GSL-Gebühr variiert je nach Markt, Einstiegspreis und Positionsgröße. Die Gebühr wird im Orderticket angezeigt, bevor eine Position eröffnet wird.":
        - cell "Garantierte Stop-Loss-Orders (GSLs)* Eine GSL schließt eine Position zum angegebenen Preis und eliminiert das Risiko von Slippage bei der Ausführung. Bei Auslösung fällt eine Gebühr an. Erfahren Sie mehr":
          - paragraph:
            - strong: Garantierte Stop-Loss-Orders (GSLs)*
            - text: Eine GSL schließt eine Position zum angegebenen Preis und eliminiert das Risiko von Slippage bei der Ausführung. Bei Auslösung fällt eine Gebühr an.
          - paragraph:
            - link "Erfahren Sie mehr":
              - /url: /de-int/ways-to-trade/fees-and-charges#part_5
        - cell "Die GSL-Gebühr variiert je nach Markt, Einstiegspreis und Positionsgröße. Die Gebühr wird im Orderticket angezeigt, bevor eine Position eröffnet wird.":
          - paragraph: Die GSL-Gebühr variiert je nach Markt, Einstiegspreis und Positionsgröße. Die Gebühr wird im Orderticket angezeigt, bevor eine Position eröffnet wird.
  - heading "Spread- und Übernachtgebühren nach Instrument" [level=2]
  - button "Alle Alle Rohstoffe Krypto Währungen Indizes Aktien Anleihen Zinssätze":
    - button "Alle":
      - textbox "name": Alle
    - button "Alle"
    - button "Rohstoffe"
    - button "Krypto"
    - button "Währungen"
    - button "Indizes"
    - button "Aktien"
    - button "Anleihen"
    - button "Zinssätze"
  - button:
    - textbox "marketlist_search":
      - /placeholder: Search
  - separator
  - text: Name Verkaufen Kaufen Spread Finanzierung über Nacht für Long-Positionen Finanzierung über Nacht für Short-Positionen Garantierte Stopp-Prämie
  - link "Gold Gold Spot 4055.07 4055.57 0.50 -0.01553% 0.00731% 0.03":
    - /url: /de-int/markets/commodities/gold-preis
  - link "US100 US Tech 100 29221.6 29223.4 1.8 -0.02154% -0.00068% 0.02":
    - /url: /de-int/markets/indices/us-tech-100-index
  - link "BTC/USD Bitcoin to US Dollar 59477.65 59527.65 50.00 -0.06164% 0.01370% 0.25":
    - /url: /de-int/markets/cryptocurrencies/chart-btc-usd
  - link "XRP/USD Ripple to US Dollar 1.03441 1.03959 0.00518 -0.06164% 0.01370% 0.25":
    - /url: /de-int/markets/cryptocurrencies/chart-xrp-usd
  - link "ETH/USD Ethereum to US Dollar 1563.73 1565.48 1.75 -0.06164% 0.01370% 0.25":
    - /url: /de-int/markets/cryptocurrencies/chart-eth-usd
  - link "Oil - Crude US Crude Oil Spot 69.781 69.813 0.032 -0.01096% -0.01096% 0.03":
    - /url: /de-int/markets/commodities/us-rohoel-preis
  - link "Silver Silver Spot 58.290 58.340 0.050 -0.01557% 0.00735% 0.03":
    - /url: /de-int/markets/commodities/silber-preis
  - text: Die Aktienkurse sind indikativ und können von den aktuellen Marktpreisen abweichen.
  - heading "Spread-Gebühr" [level=2]
  - paragraph: Der Bid-Ask-Spread ist die Differenz zwischen dem Verkaufs- (Bid) und dem Kaufpreis (Ask) eines Instruments. Der Ask-Preis ist immer höher als der Bid-Preis, was bedeutet, dass sich der Markt über den Spread hinaus bewegen muss, bevor eine Position positiv wird.
  - paragraph: Spreads spiegeln die zugrunde liegenden Marktbedingungen wider, einschließlich Angebot, Nachfrage und Liquidität. In liquideren Märkten sind die Spreads tendenziell enger.
  - heading "CFD-Spread-Beispiel" [level=3]
  - list:
    - listitem: • 1 Kontrakt wird auf den US Tech 100 gehalten, notiert bei 12475/76.
    - listitem: • Der Spread beträgt 1 Punkt.
    - listitem: • Die Hälfte des Spreads wird bei der Eröffnung und die andere Hälfte bei der Schließung gezahlt. Die gesamten Spread-Kosten betragen 1 $ × 1 Punkt = 1 $.
  - heading "Übernachtfinanzierung" [level=2]
  - paragraph: Wenn eine Position über Nacht gehalten wird, gilt eine Zinsanpassung. Ob dieser Betrag gezahlt oder erhalten wird, hängt von der Positionsrichtung und dem zugrunde liegenden Zinssatz ab. Die Berechnung basiert auf festgelegten Sätzen und Marktfaktoren, die in den folgenden Beispielen erläutert werden.
  - paragraph: "Für die meisten Märkte fällt bei einer CFD-Position mit einem Hebel von 1:1 (ungehebelte Position) keine Übernachtfinanzierungsgebühr an. Die folgenden Instrumente sind Ausnahmen, bei denen Übernachtfinanzierung unabhängig vom Hebel anfällt:"
  - list:
    - listitem: • Erdgas
    - listitem: • US-Kakao
    - listitem: • Volatilitätsindex (VIX)
    - listitem: • Forex-Paare mit Türkischer Lira (TRY)
  - button "Indizes"
  - button "Rohstoffe"
  - button "Forex"
  - button "Aktien"
  - button "Krypto"
  - button "Anleihen/Zinssätze"
  - heading "Formel" [level=3]
  - paragraph: Unsere tägliche Gebühr +/- Referenzzinssatz
  - paragraph: Der Referenzzinssatz* richtet sich nach der Währung des zugrunde liegenden Marktes. USD-denominierte Indizes verwenden SOFR. GBP-denominierte Indizes verwenden SONIA.
  - paragraph: "Unsere tägliche Gebühr beträgt 4 % pro Jahr. Der jährliche Satz wird je nach Währungskonvention durch 360 oder 365 Tage geteilt:"
  - paragraph: "GBP, CAD, SGD und ähnliche Währungen: 4 % / 365 = 0,01096 % pro Tag. USD, EUR, CHF, JPY und ähnliche Währungen: 4 % / 360 = 0,01111 % pro Tag"
  - paragraph: Der Divisor entspricht dem in jedem Währungsmarkt angewendeten Day-Count-Standard.
  - paragraph: "*Der relevante Referenzzinssatz enthält bereits eine zugrunde liegende Spread-Anpassung. Dies spiegelt sich im veröffentlichten Satz wider (zum Beispiel SOFR oder SONIA)."
  - heading "CFD-Beispiel" [level=3]
  - list:
    - listitem: • 0,6 Kontrakte werden auf den US Tech 100 gehalten, notiert bei 20.140. Das gesamte Exposure beträgt 12.084 $.
    - listitem: • Der US Tech 100 ist in USD denominiert. Der relevante Referenzzinssatz ist SOFR, hier angenommen mit 5,01448 % jährlich bzw. 0,01393 % täglich.
    - listitem: • Die tägliche Plattformgebühr beträgt 0,01111 %.
    - listitem: "• Für eine Long-Position: 0,02504 % (SOFR + Plattformgebühr) = 3,03 $ gezahlt."
    - listitem: "• Für eine Short-Position: 0,00282 % (SOFR − Plattformgebühr) = 0,34 $ erhalten."
  - heading "Gebühr für garantierten Stop-Loss" [level=2]
  - paragraph: Eine Standard-Stop-Loss-Order schließt eine Position auf einem festgelegten Niveau. Es wird nicht garantiert, dass die Ausführung genau zu diesem Preis erfolgt — bei einer Marktlücke kann die Ausführung zum nächstverfügbaren Preis erfolgen. Slippage kann unter volatilen Marktbedingungen oder bei geringer Liquidität auftreten.
  - paragraph: Eine garantierte Stop-Loss-Order (GSL) schließt eine Position genau zum festgelegten Preis, unabhängig von Slippage oder Marktlücken. Eine Gebühr — die GSL-Prämie — fällt an, wenn die Order ausgelöst wird.
  - paragraph: "Die GSL-Gebühr wird anhand von drei Komponenten berechnet: der garantierten Stop-Prämie (Prozentsatz), dem Eröffnungskurs der Position und der Menge."
  - strong: GSL-Gebühr = GSL-Prämie × Eröffnungskurs der Position × Menge
  - paragraph: Die anwendbare GSL-Gebühr wird im Orderticket angezeigt, wenn ein GSL ausgewählt wird.
  - heading "Währungsumrechnungsgebühr" [level=2]
  - paragraph: Fällt an, wenn eine Transaktion in einer anderen Währung als der Basiswährung des Kontos erfolgt. Die Gebühr ist im für die Umrechnung verwendeten Wechselkurs enthalten — sie wird nicht separat berechnet. Kunden zahlen einen Aufschlag von 0,7 %.
  - paragraph: "Gilt für:"
  - list:
    - listitem: • Realisierter Gewinn und Verlust
    - listitem: • Anpassungen der Übernachtfinanzierung
    - listitem: • Gebühren für garantierte Stop-Loss-Orders
    - listitem: • Dividenden
    - listitem: • Eigenständige Währungsumrechnungen (manuelle Umrechnungen des Kontoguthabens)
  - heading "Beispiel — Schließung eines Trades" [level=3]
  - list:
    - listitem: "• Kontowährung: USD. Europäischer Aktien-Trade mit einem Gewinn von 10,00 € geschlossen."
    - listitem: "• Zum Kassakurs (1,1300): 11,30 $"
    - listitem: "• Zum All-in-Kurs einschließlich 0,7 % Gebühr (1,1221): 11,22 $"
    - listitem: "• Umrechnungsgebühr: 0,08 $"
  - heading "Beispiel — Anpassung der Übernachtfinanzierung" [level=3]
  - list:
    - listitem: • Europäische Aktienposition. Eine Anpassung der Übernachtfinanzierung von -4,00 € wurde in EUR angewendet.
    - listitem: "• Zum Kassakurs (1,1300): 4,52 $"
    - listitem: "• Zum All-in-Kurs einschließlich 0,7 % Gebühr (1,1379): 4,55 $"
    - listitem: "• Umrechnungsgebühr: 0,03 $"
  - paragraph: Der für jede Umrechnung verwendete All-in-Wechselkurs ist im Bereich „Berichte“ sowie beim Schließen einer Position sichtbar.
  - heading "Mehr zu unseren Preisen" [level=2]
  - heading "Die Preisgestaltung von Capital.com verstehen" [level=3]
  - paragraph: Eine detaillierte Aufschlüsselung aller Kosten, die beim Traden mit uns anfallen, finden Sie hier.
  - link "Lesen Sie mehr":
    - /url: /de-int/ways-to-trade/pricing
- complementary:
  - navigation:
    - strong: Inhalt
    - separator
    - link "Kontogebühren":
      - /url: "#part_0"
    - link "Ein- und Auszahlungsgebühren":
      - /url: "#part_1"
    - link "Trading-Gebühren":
      - /url: "#part_2"
    - link "Spread-Gebühr":
      - /url: "#part_3"
    - link "Übernachtfinanzierung":
      - /url: "#part_4"
    - link "Gebühr für garantierten Stop-Loss":
      - /url: "#part_5"
    - link "Währungsumrechnungsgebühr":
      - /url: "#part_6"
- contentinfo:
  - link:
    - /url: /de-int
    - img
  - link:
    - /url: https://twitter.com/capitalcom
  - link:
    - /url: https://www.linkedin.com/company/capital.com/
  - link:
    - /url: https://www.instagram.com/capitalcom/
  - link:
    - /url: https://www.tiktok.com/@capitalcom_international
  - link:
    - /url: https://www.facebook.com/capitalcom/
  - link:
    - /url: https://www.reddit.com/r/capitalcom/
  - link:
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=cc5683e3-419a-4856-9c78-44388ebdbf67&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=cc5683e3-419a-4856-9c78-44388ebdbf67&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=cc5683e3-419a-4856-9c78-44388ebdbf67&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "Land / Region:"
  - button "Switzerland"
  - text: "• Sprache:"
  - button "German"
  - text: "Sie können auch uns kontaktieren:"
  - link "+41 435053128":
    - /url: tel:+41 435053128
    - strong: +41 435053128
    - strong
  - text: •
  - link "support@capital.com":
    - /url: mailto:support@capital.com
    - strong: support@capital.com
  - strong: Handel
  - text: Handel
  - link "CFD-Trading":
    - /url: /de-int/ways-to-trade/cfd-trading
  - link "Demo-Trading":
    - /url: /de-int/trading-platforms/demo-account
  - link "Professionell":
    - /url: /de-int/professional
  - text: Plattformen
  - link "Web-Plattform":
    - /url: /de-int/trading-platforms/web-platform
  - link "Mobile App":
    - /url: /de-int/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /de-int/trading-platforms/trading-view
  - link "MT4":
    - /url: /de-int/trading-platforms/mt4
  - link "MT5":
    - /url: /de-int/trading-platforms/mt5
  - text: Lernen
  - link "Trading-Strategien":
    - /url: /de-int/learn/trading-strategies
  - link "Technische Analyse":
    - /url: /de-int/learn/technical-analysis
  - link "Trading-Psychologie":
    - /url: /de-int/learn/trading-psychology
  - link "Webinare":
    - /url: /de-int/learn/webinars
  - link "Lernen":
    - /url: /de-int/learn
  - strong: Märkte
  - text: Unsere Märkte
  - link "Märkte":
    - /url: /de-int/markets
  - link "Aktien":
    - /url: /de-int/markets/shares
  - link "Forex":
    - /url: /de-int/markets/forex
  - link "Indizes":
    - /url: /de-int/markets/indices
  - link "Rohstoffe":
    - /url: /de-int/markets/commodities
  - link "Kryptowährungen":
    - /url: /de-int/markets/cryptocurrencies
  - link "Anleihen":
    - /url: /de-int/markets/bonds
  - link "Zinssätze":
    - /url: /de-int/markets/interest-rates
  - text: Markteinblicke
  - link "Marktanalyse":
    - /url: /de-int/analysis
  - link "Preisgestaltung":
    - /url: /de-int/ways-to-trade/fees-and-charges
    - strong: Preisgestaltung
  - strong: Über uns
  - text: Über uns
  - link "Über uns":
    - /url: /de-int/about-us
  - link "Unsere Niederlassungen":
    - /url: /de-int/about-us/our-offices
  - link "Ist Capital.com sicher?":
    - /url: /de-int/security-measures
  - link "Unser Geschäftsmodell":
    - /url: /de-int/about-us/how-capital-makes-money
  - text: Arbeiten Sie mit uns
  - link "Partnerprogramme":
    - /url: /de-int/partnerships
  - link "Einen Freund empfehlen":
    - /url: /de-int/refer-a-friend
  - text: Hilfe
  - link "Hilfe":
    - /url: /de-int/help
  - link "Kundenvulnerabilität":
    - /url: /de-int/help/client-vulnerability
  - link "Kontaktieren Sie uns":
    - /url: /de-int/contact-us
  - text: Rechtliches
  - link "Nutzungsbedingungen und Richtlinien":
    - /url: /de-int/terms-and-policies
  - link "Beschwerden":
    - /url: /de-int/help/complaints
  - paragraph:
    - text: CFDs sind komplexe Instrumente und aufgrund des Hebels mit einem hohen Risiko des schnellen Geldverlustes verbunden.
    - strong: 78.48 % der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit diesem Anbieter.
    - text: Sie sollten abwägen, ob Sie verstehen, wie CFDs funktionieren, und ob Sie es sich leisten können, das hohe Risiko des Geldverlustes einzugehen.
  - paragraph
  - paragraph: "Capital Com Online Investments Ltd ist eine Gesellschaft mit beschränkter Haftung mit der Unternehmensnummer 209236B. Capital Com Online Investments Ltd ist ein im Commonwealth der Bahamas eingetragenes Unternehmen, das von der Securities Commission of the Bahamas unter der Lizenznummer SIA-F245 zugelassen ist. Der eingetragene Unternehmenssitz befindet sich in #3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas."
  - paragraph: © 2026 Capital Com Online Investments Ltd
  - link "Sitemap":
    - /url: /de-int/sitemap
  - link "Cookie-Einstellungen":
    - /url: ""
  - link:
    - /url: /de-int
  - link "Bedingungen und Richtlinien":
    - /url: /de-int/terms-and-policies
  - link "Beschwerdeverfahren (SCB)":
    - /url: /de-int/help/complaints
- button
- dialog "Cookie banner":
  - paragraph:
    - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
    - link "More information about your privacy, opens in a new tab":
      - /url: https://capital.com/cookies_policy_bah
      - text: Cookie Policy
    - text: .
  - button "Reject all"
  - button "Allow all cookies"
  - button "Cookie settings"
- alert
```

# Test source

```ts
  1  | import { test, expect, describePerLocaleState, clickUntilUrl, clickUntilVisible } from './test';
  2  | import { Cta, ExpectedResult, type MenuPage } from '../config/content/content-page';
  3  | import { userStates, UserState } from '../config/auth';
  4  | import { SignUpModal } from '../page-objects/modal-windows/SignUpModal';
  5  | import { Page } from '@playwright/test';
  6  | import { ContentPage } from '../page-objects/pages/ContentPage';
  7  | import { PLATFORM_URL } from '../config/site';
  8  | 
  9  | const expectedFor = (cta: Cta, state: UserState): ExpectedResult =>
  10 |     state === 'authorized' ? (cta.authorized ?? 'platformPage') : (cta.anonymous ?? 'signUpForm');
  11 | 
  12 | async function expectCtaOutcome(
  13 |     result: ExpectedResult,
  14 |     ctaType: string,
  15 |     {
  16 |         contentPage,
  17 |         signUpModal,
  18 |         page,
  19 |     }: { contentPage: ContentPage; signUpModal: SignUpModal; page: Page },
  20 | ): Promise<void> {
  21 |     if (result === 'platformPage') {
  22 |         await clickUntilUrl(page, () => contentPage.clickCta(ctaType), PLATFORM_URL);
  23 |     } else {
  24 |         await clickUntilVisible(() => contentPage.clickCta(ctaType), signUpModal.root);
  25 |     }
  26 | }
  27 | 
  28 | export function describeContentSection(section: string, pages: MenuPage[]): void {
  29 |     for (const menuPage of pages) {
  30 |         describePerLocaleState(
  31 |             `${section} / ${menuPage.title}`,
  32 |             userStates,
  33 |             (locale, state) => {
  34 |                 test.beforeEach(async ({ contentPage, dismissInterstitials }) => {
  35 |                     await contentPage.open(menuPage.path);
  36 |                     await dismissInterstitials();
  37 |                 });
  38 | 
  39 |                 for (const cta of menuPage.ctas) {
  40 |                     const result = expectedFor(cta, state);
  41 |                     test(`[${cta.type}] -> ${result}`, async ({
  42 |                         contentPage,
  43 |                         signUpModal,
  44 |                         page,
  45 |                     }) => {
  46 |                         test.skip(
  47 |                             cta.unavailable?.includes(locale.license) ?? false,
  48 |                             `${cta.type} is N/A for ${locale.license}`,
  49 |                         );
  50 | 
> 51 |                         await expect(contentPage.cta(cta.type)).toBeVisible();
     |                                                                 ^ Error: expect(locator).toBeVisible() failed
  52 | 
  53 |                         await expectCtaOutcome(result, cta.type, {
  54 |                             contentPage,
  55 |                             signUpModal,
  56 |                             page,
  57 |                         });
  58 |                     });
  59 |                 }
  60 |             },
  61 |             menuPage.filter,
  62 |         );
  63 |     }
  64 | }
  65 | 
```