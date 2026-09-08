# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/pricing.spec.ts >> [CYSEC IT | unauthorized] Pricing / Pricing >> [banner_with_steps] -> signUpForm
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
  - text: I CFD sono strumenti complessi e presentano un rischio significativo di perdere denaro rapidamente a causa della leva finanziaria.
  - strong: Il 74-89 % dei conti degli investitori al dettaglio subisce perdite monetarie in seguito a negoziazione in CFD
  - text: . Valuti se comprende il funzionamento dei CFD e se può permettersi di correre l’elevato rischio di perdere il suo denaro.
  - link "Informativa sui rischi.":
    - /url: https://capital.com/risk-disclosure-policy-cceu
  - link:
    - /url: /it-it
    - img
  - navigation:
    - button "Trading":
      - button "Trading"
    - button "Mercati":
      - button "Mercati"
    - link "Costi":
      - /url: /it-it/ways-to-trade/fees-and-charges
    - button "Chi siamo":
      - button "Chi siamo"
  - button "it"
  - button "Accedi"
  - button "Apri un conto"
- paragraph:
  - link "Inizia":
    - /url: /it-it
  - text: •
  - link "Trading":
    - /url: /it-it/ways-to-trade
  - text: •Costi
- heading "Oneri e commissioni" [level=1]
- paragraph: Tutte le commissioni e le spese vengono documentate e comunicate prima dell'apertura di qualsiasi posizione.
- main:
  - heading "Costi di gestione del conto" [level=2]
  - table:
    - rowgroup:
      - row "Apertura account NESSUNA COMMISSIONE":
        - cell "Apertura account":
          - paragraph:
            - strong: Apertura account
        - cell "NESSUNA COMMISSIONE":
          - paragraph:
            - strong: NESSUNA COMMISSIONE
      - row "Chiusura account NESSUNA COMMISSIONE":
        - cell "Chiusura account":
          - paragraph:
            - strong: Chiusura account
        - cell "NESSUNA COMMISSIONE":
          - paragraph:
            - strong: NESSUNA COMMISSIONE
      - row "Account demo NESSUNA COMMISSIONE":
        - cell "Account demo":
          - paragraph:
            - strong: Account demo
        - cell "NESSUNA COMMISSIONE":
          - paragraph:
            - strong: NESSUNA COMMISSIONE
  - heading "Depositi e prelievi" [level=2]
  - table:
    - rowgroup:
      - row "Commissione di deposito NESSUNA COMMISSIONE":
        - cell "Commissione di deposito":
          - paragraph:
            - strong: Commissione di deposito
        - cell "NESSUNA COMMISSIONE":
          - paragraph:
            - strong: NESSUNA COMMISSIONE
      - row "Deposito minimo 20 USD/EUR/GBP o 100 PLN Per tutti i metodi di pagamento, ad eccezione del bonifico bancario, per il quale è previsto un importo minimo di 50 EUR (o equivalente nella valuta del proprio conto di trading)":
        - cell "Deposito minimo":
          - paragraph:
            - strong: Deposito minimo
        - cell "20 USD/EUR/GBP o 100 PLN Per tutti i metodi di pagamento, ad eccezione del bonifico bancario, per il quale è previsto un importo minimo di 50 EUR (o equivalente nella valuta del proprio conto di trading)":
          - paragraph:
            - strong: 20 USD/EUR/GBP o 100 PLN
          - paragraph:
            - strong: Per tutti i metodi di pagamento, ad eccezione del bonifico bancario, per il quale è previsto un importo minimo di 50 EUR (o equivalente nella valuta del proprio conto di trading)
      - row "Commissione di prelievo NESSUNA COMMISSIONE":
        - cell "Commissione di prelievo":
          - paragraph:
            - strong: Commissione di prelievo
        - cell "NESSUNA COMMISSIONE":
          - paragraph:
            - strong: NESSUNA COMMISSIONE
      - row "Prelievo minimo 20 EUR/USD/GBP per carte bancarie* *L'importo minimo prelevabile varia a seconda del metodo di pagamento utilizzato (vedi qui per maggiori dettagli). Se il saldo del tuo conto è inferiore al limite minimo di prelievo, potrai prelevare solo l'intero saldo disponibile.":
        - cell "Prelievo minimo":
          - strong: Prelievo minimo
        - cell "20 EUR/USD/GBP per carte bancarie* *L'importo minimo prelevabile varia a seconda del metodo di pagamento utilizzato (vedi qui per maggiori dettagli). Se il saldo del tuo conto è inferiore al limite minimo di prelievo, potrai prelevare solo l'intero saldo disponibile.":
          - paragraph:
            - strong: 20 EUR/USD/GBP per carte bancarie*
          - paragraph:
            - strong:
              - text: "*L'importo minimo prelevabile varia a seconda del metodo di pagamento utilizzato (vedi"
              - link "qui":
                - /url: https://help.capitalccsv.com/hc/it/articles/4416980288146-What-is-the-minimum-withdrawal-amount
              - text: per maggiori dettagli).
          - paragraph:
            - strong: Se il saldo del tuo conto è inferiore al limite minimo di prelievo, potrai prelevare solo l'intero saldo disponibile.
  - heading "Commissioni di trading" [level=2]
  - button "CFD"
  - button "Knock-out"
  - table:
    - rowgroup:
      - row "Spread Lo spread è la differenza tra il prezzo di acquisto e vendita di uno strumento. È il costo di esecuzione di una posizione. Scopri di più Gli spread sono variabili e si adeguano alle condizioni di mercato. Puoi vedere lo spread di uno strumento specifico qui.":
        - cell "Spread Lo spread è la differenza tra il prezzo di acquisto e vendita di uno strumento. È il costo di esecuzione di una posizione. Scopri di più":
          - paragraph:
            - strong: Spread
            - text: Lo spread è la differenza tra il prezzo di acquisto e vendita di uno strumento. È il costo di esecuzione di una posizione.
          - paragraph:
            - link "Scopri di più":
              - /url: /it-it/ways-to-trade/fees-and-charges#part_2
        - cell "Gli spread sono variabili e si adeguano alle condizioni di mercato. Puoi vedere lo spread di uno strumento specifico qui.":
          - paragraph:
            - text: Gli spread sono variabili e si adeguano alle condizioni di mercato. Puoi vedere lo spread di uno strumento specifico
            - link "qui":
              - /url: /it-it/ways-to-trade/fees-and-charges#part_2
            - text: .
      - row "Commissione di trading NESSUNA COMMISSIONE":
        - cell "Commissione di trading":
          - paragraph:
            - strong: Commissione di trading
        - cell "NESSUNA COMMISSIONE":
          - paragraph:
            - strong: NESSUNA COMMISSIONE
      - row "Commissione overnight* Quando una posizione viene mantenuta aperta durante la notte, viene applicato un adeguamento degli interessi. *Le posizioni CFD con leva 1:1 (non a leva) non sono soggette a interessi overnight, se non su un dato numero di mercati. Scopri di più La commissione viene pagata o ricevuta a seconda della direzione della posizione. Le commissioni relative a ciascuno strumento sono riportate nella tabella sottostante.":
        - cell "Commissione overnight* Quando una posizione viene mantenuta aperta durante la notte, viene applicato un adeguamento degli interessi. *Le posizioni CFD con leva 1:1 (non a leva) non sono soggette a interessi overnight, se non su un dato numero di mercati. Scopri di più":
          - paragraph:
            - strong: Commissione overnight*
            - text: Quando una posizione viene mantenuta aperta durante la notte, viene applicato un adeguamento degli interessi. *Le posizioni CFD con leva 1:1 (non a leva) non sono soggette a interessi overnight, se non su un dato numero di mercati.
          - paragraph:
            - link "Scopri di più":
              - /url: /it-it/ways-to-trade/fees-and-charges#part_3
        - cell "La commissione viene pagata o ricevuta a seconda della direzione della posizione. Le commissioni relative a ciascuno strumento sono riportate nella tabella sottostante.":
          - paragraph:
            - strong: La commissione viene pagata o ricevuta a seconda della direzione della posizione. Le commissioni relative a ciascuno strumento sono riportate nella tabella sottostante.
      - row "Conversione di valuta Sui mercati denominati in una valuta diversa da quella del conto di trading viene applicata una commissione di conversione. La stessa commissione di conversione viene applicata in caso di trasferimento di fondi tra sotto-conti in valute diverse. 0,7% del tasso di cambio spot (clienti retail) 0,5% del tasso di cambio spot (clienti Pro) La commissione è integrata nel tasso di cambio utilizzato e non viene addebitata separatamente.":
        - cell "Conversione di valuta Sui mercati denominati in una valuta diversa da quella del conto di trading viene applicata una commissione di conversione. La stessa commissione di conversione viene applicata in caso di trasferimento di fondi tra sotto-conti in valute diverse.":
          - paragraph:
            - strong: Conversione di valuta
            - text: Sui mercati denominati in una valuta diversa da quella del conto di trading viene applicata una commissione di conversione.
          - paragraph: La stessa commissione di conversione viene applicata in caso di trasferimento di fondi tra sotto-conti in valute diverse.
        - cell "0,7% del tasso di cambio spot (clienti retail) 0,5% del tasso di cambio spot (clienti Pro) La commissione è integrata nel tasso di cambio utilizzato e non viene addebitata separatamente.":
          - paragraph:
            - strong: 0,7% del tasso di cambio spot (clienti retail) 0,5% del tasso di cambio spot (clienti Pro)
          - paragraph: La commissione è integrata nel tasso di cambio utilizzato e non viene addebitata separatamente.
      - row "Ordini stop-loss garantiti (GSL)* Un GSL chiude una posizione al prezzo specificato, eliminando il rischio di slippage al momento dell'esecuzione. Quando viene attivato, viene addebitata una commissione. Scopri di più La commissione GSL varia a seconda del mercato, del prezzo di ingresso e della dimensione della posizione. L'importo esatto è indicato nel ticket dell'operazione, prima dell'apertura della posizione. Maggiori dettagli di seguito.":
        - cell "Ordini stop-loss garantiti (GSL)* Un GSL chiude una posizione al prezzo specificato, eliminando il rischio di slippage al momento dell'esecuzione. Quando viene attivato, viene addebitata una commissione. Scopri di più":
          - paragraph:
            - strong: Ordini stop-loss garantiti (GSL)*
            - text: Un GSL chiude una posizione al prezzo specificato, eliminando il rischio di slippage al momento dell'esecuzione. Quando viene attivato, viene addebitata una commissione.
          - paragraph:
            - link "Scopri di più":
              - /url: /it-it/ways-to-trade/fees-and-charges#part_4
        - cell "La commissione GSL varia a seconda del mercato, del prezzo di ingresso e della dimensione della posizione. L'importo esatto è indicato nel ticket dell'operazione, prima dell'apertura della posizione. Maggiori dettagli di seguito.":
          - paragraph: La commissione GSL varia a seconda del mercato, del prezzo di ingresso e della dimensione della posizione.
          - paragraph: L'importo esatto è indicato nel ticket dell'operazione, prima dell'apertura della posizione. Maggiori dettagli di seguito.
  - heading "Commissioni di spread e overnight per strumento" [level=2]
  - button "CFD"
  - button "Knock-out"
  - button "Tutti Tutti Commodity Cripto Forex Indici Azioni Obbligazioni Tassi d'interesse":
    - button "Tutti":
      - textbox "name": Tutti
    - button "Tutti"
    - button "Commodity"
    - button "Cripto"
    - button "Forex"
    - button "Indici"
    - button "Azioni"
    - button "Obbligazioni"
    - button "Tassi d'interesse"
  - button:
    - textbox "marketlist_search":
      - /placeholder: Search
  - separator
  - text: Nome Vendi Acquista Spread Adeguamento degli interessi overnight per posizioni long Adeguamento degli interessi overnight per posizioni short Premium per stop garantito
  - link "Gold Gold Spot 4026.78 4027.28 0.50 -0.01553% 0.00731% 0.03":
    - /url: /it-it/markets/commodities/gold-spot-materie-prime
  - link "US100 US Tech 100 29367.4 29369.2 1.8 -0.02154% -0.00068% 0.02":
    - /url: /it-it/markets/indices/us-tech-100-indice-1
  - link "BTC/USD Bitcoin to US Dollar 59946.25 59996.25 50.00 -0.06164% 0.01370% 0.25":
    - /url: /it-it/markets/cryptocurrencies/bitcoin-to-us-dollar-tabella
  - link "XRP/USD Ripple to US Dollar 1.04504 1.05028 0.00524 -0.06164% 0.01370% 0.25":
    - /url: /it-it/markets/cryptocurrencies/ripple-to-us-dollar-tabella
  - link "ETH/USD Ethereum to US Dollar 1573.15 1574.90 1.75 -0.06164% 0.01370% 0.25":
    - /url: /it-it/markets/cryptocurrencies/ethereum-to-us-dollar-tabella
  - link "Oil - Crude US Crude Oil Spot 70.491 70.523 0.032 -0.01096% -0.01096% 0.03":
    - /url: /it-it/markets/commodities/us-crude-oil-spot-materie-prime-1
  - link "Silver Silver Spot 57.421 57.471 0.050 -0.01557% 0.00735% 0.03":
    - /url: /it-it/markets/commodities/silver-spot-materie-prime
  - text: I prezzi delle azioni sono indicativi e possono differire dai prezzi di mercato live.
  - heading "Commissione di spread" [level=2]
  - paragraph: Lo spread bid-ask è la differenza tra il prezzo di vendita (bid) e quello di acquisto (ask) di uno strumento. Il prezzo di vendita è sempre superiore a quello di acquisto, il che significa che il mercato deve superare lo spread prima che una posizione diventi redditizia.
  - paragraph: Gli spread riflettono le condizioni di mercato sottostanti, tra cui offerta, domanda e liquidità. Nei mercati più liquidi, gli spread tendono ad essere ridotti.
  - heading "Esempio di spread sui CFD" [level=3]
  - list:
    - listitem: • È attivo 1 contratto sull'indice EU Stocks 50, quotato a 5200/5201.
    - listitem: • Lo spread è di 1 punto.
    - listitem: • Metà dello spread viene addebitato all'apertura della posizione e l'altra metà alla chiusura. Il costo totale dello spread è di 1 € x 1 punto = 1 €.
  - heading "Commissioni overnight" [level=2]
  - paragraph: Quando una posizione viene tenuta aperta durante la notte, viene applicato un adeguamento degli interessi. Questo importo viene pagato o incassato in funzione della direzione della posizione e del tasso sottostante. Il calcolo si basa su tassi prestabiliti e su fattori di mercato, illustrati negli esempi riportati di seguito.
  - paragraph: "Per la maggior parte dei mercati, una posizione CFD con leva 1:1 (senza leva) non comporta commissioni overnight. Gli strumenti riportati di seguito costituiscono delle eccezioni, in quanto ad essi si applica il finanziamento overnight indipendentemente dal livello di leva finanziaria:"
  - list:
    - listitem: • Gas naturale
    - listitem: • Cacao degli Stati Uniti
    - listitem: • Indice di volatilità (VIX)
    - listitem: • Coppie forex che includono la lira turca (TRY)
  - button "Indici"
  - button "Materie prime"
  - button "Forex"
  - button "Azioni"
  - button "Criptovalute"
  - button "Obbligazioni/tassi d'interesse"
  - heading "Formula" [level=3]
  - paragraph: La nostra commissione giornaliera +/- riferimento tasso interesse
  - paragraph: Il riferimento* traccia la valuta del mercato sottostante. Gli indici denominati in dollari statunitensi utilizzano il SOFR. Gli indici denominati in sterline britanniche utilizzano il SONIA.
  - paragraph: "La nostra commissione giornaliera è pari al 4% annuo. Il tasso annuo viene diviso per 360 o 365 giorni, a seconda delle convenzioni valutarie:"
  - paragraph: "GBP, CAD, SGD e valute simili: 4% / 365 = 0,01096% al giorno USD, EUR, CHF, JPY e valute simili: 4% / 360 = 0,01111% al giorno"
  - paragraph: Il divisore corrisponde allo standard di calcolo dei giorni applicato nel mercato di ciascuna valuta.
  - paragraph: "*Il tasso di interesse di riferimento pertinente include già un adeguamento dello spread sottostante. Questo si riflette nel tasso pubblicato (ad esempio, SOFR o SONIA)."
  - heading "Esempio di CFD" [level=3]
  - list:
    - listitem: • Supponiamo di detenere 0,6 contratti sull'indice US Tech 100, quotato a 20.140. L'esposizione totale è $12,084.
    - listitem: • L'indice US Tech 100 è denominato in USD. Il tasso di riferimento applicabile è il SOFR, qui ipotizzato essere pari al 5,01448% annuo, ovvero allo 0,01393% giornaliero.
    - listitem: • La commissione giornaliera della piattaforma è pari allo 0,01111%.
    - listitem: "• Per una posizione long: 0,02504% (SOFR + commissione della piattaforma) = 3,03 $ pagati."
    - listitem: "• Per una posizione short: 0,00282% (SOFR − commissione della piattaforma) = 0,34 $ ricevuti."
  - heading "Commissione stop-loss garantiti" [level=2]
  - paragraph: "Un ordine stop-loss standard chiude una posizione a un livello prestabilito. Non è garantito che l'operazione venga eseguita esattamente a quel prezzo: in caso di gap di mercato, l'esecuzione potrebbe avvenire al primo prezzo disponibile. Lo slittamento può verificarsi in condizioni di volatilità o di scarsa liquidità."
  - paragraph: Un ordine stop-loss garantito (GSL) chiude una posizione esattamente al prezzo specificato, indipendentemente dallo slittamento o dai gap di mercato. Se l'ordine viene attivato, viene applicata una commissione, denominata "premio GSL".
  - paragraph: "La commissione GSL viene calcolata sulla base di tre elementi: il premio dello stop garantito (percentuale), il prezzo di apertura della posizione e il volume."
  - strong: Commissione GSL = Premio GSL × Prezzo di apertura della posizione × Quantità
  - paragraph: La commissione GSL applicabile viene indicata sul ticket dell'operazione quando si seleziona un GSL.
  - heading "Commissione per la conversione di valuta" [level=2]
  - paragraph: Si applica quando una transazione è effettuata in una valuta diversa dalla valuta del conto.
  - paragraph: "Si applica a:"
  - list:
    - listitem: • Profitti e perdite realizzati
    - listitem: • Adeguamento finanziamento overnight
    - listitem: • Commissioni sugli ordini stop-loss garantiti
    - listitem: • Dividendi
    - listitem: • Conversioni valutarie autonome (conversioni manuali del saldo del conto)
  - 'heading "Esempio: chiusura di un''operazione" [level=3]'
  - list:
    - listitem: "• Valuta del conto: EUR. La Borsa statunitense ha chiuso con un profitto di 11,30 dollari."
    - listitem: "• Al tasso spot (1,1300): 10,00 €"
    - listitem: "• Tasso complessivo comprensivo di commissione dello 0,7% (1,1379): 9,93 €"
    - listitem: "• Commissione di conversione: 0,07 €"
  - 'heading "Esempio: adeguamento del finanziamento overnight" [level=3]'
  - list:
    - listitem: • Posizione azionaria negli Stati Uniti. È stato applicato un adeguamento del finanziamento overnight pari a -4,00 USD.
    - listitem: "• Al tasso spot (1,1300): 3,54 €"
    - listitem: "• Tasso complessivo comprensivo di commissione dello 0,7% (1,1221): 3,57 €"
    - listitem: "• Commissione di conversione: 0,03 €"
  - paragraph: Il tasso di cambio complessivo utilizzato per le conversioni è visibile nella sezione "Report" e al momento della chiusura di una posizione.
  - heading "Commissione di knock-out" [level=2]
  - paragraph: "Le opzioni knock-out sono disponibili solo in alcuni Paesi. La commissione knock-out viene addebitata al momento dell'apertura di un'operazione knock-out. Funziona come un premio di stop garantito: il rischio massimo sulla posizione viene fissato al momento dell'apertura."
  - paragraph: Se la posizione viene chiusa senza raggiungere il livello di knock-out, la commissione viene rimborsata per intero.
  - strong: La commissione viene calcolata come percentuale dell'esposizione (prezzo asset sottostante × numero di contratti).
  - 'heading "Esempio: Germania 40, indici principali" [level=3]'
  - list:
    - listitem: • Germania 40 è quotato a 10.000 euro.
    - listitem: • Viene aperta una call Knock-out con un livello di 9900 €.
    - listitem: "• La commissione di knock-out per gli indici principali è pari allo 0,02% del valore nozionale: 10.000 € × 0,02% = 2 €."
  - paragraph: Per ulteriori informazioni, clicca sul pulsante "Knock-out" nella sezione "Spread e commissioni overnight per strumento" sopra riportata.
  - heading "Maggiori informazioni sui costi" [level=2]
  - heading "Comprendere i costi di Capital.com" [level=3]
  - paragraph: Un riepilogo dettagliato di tutti i costi applicabili quando fai trading con noi.
  - link "Ulteriori informazioni":
    - /url: /it-it/ways-to-trade/pricing
  - heading "FAQ - Imposta di Bollo" [level=2]
  - group:
    - heading "Cos'è l'Imposta di Bollo?" [level=3]
  - group:
    - heading "Come si applica ai conti Capital.com?" [level=3]
  - group:
    - heading "Quando viene addebitata l'imposta di bollo?" [level=3]
  - group:
    - heading "Chi paga l'imposta?" [level=3]
  - group:
    - heading "Posso rinunciare o pagare l'Imposta di Bollo personalmente?" [level=3]
  - group:
    - heading "Questa imposta si applica a tutti i clienti?" [level=3]
  - group:
    - heading "Corrisponde all'IVA o all'imposta sul reddito?" [level=3]
  - group:
    - heading "Capital.com può fornire consulenza fiscale?" [level=3]
  - strong: Il trattamento fiscale dipende dalla situazione individuale di ciascun cliente e può essere soggetto a variazioni in futuro.
- complementary:
  - navigation:
    - strong: Contenuti
    - separator
    - link "Costi di gestione del conto":
      - /url: "#part_0"
    - link "Depositi e prelievi":
      - /url: "#part_1"
    - link "Commissione di spread":
      - /url: "#part_2"
    - link "Commissioni overnight":
      - /url: "#part_3"
    - link "Commissione stop-loss garantiti":
      - /url: "#part_4"
    - link "Commissione per la conversione di valuta":
      - /url: "#part_5"
    - link "Commissione di knock-out":
      - /url: "#part_6"
    - link "FAQ - Imposta di Bollo":
      - /url: "#part_7"
- button "Diventa trader esperto con i nostri webinar! Alza il livello Registrati":
  - strong: Diventa trader esperto con i nostri webinar!
  - paragraph: Alza il livello
  - link "Registrati":
    - /url: https://capital.com/it-it/learn/webinars
  - button
- contentinfo:
  - link:
    - /url: /it-it
    - img
  - link:
    - /url: https://www.facebook.com/capitalcomitalia
  - link:
    - /url: https://www.linkedin.com/company/capital.com/
  - link:
    - /url: https://www.instagram.com/capitalcom_it/
  - link:
    - /url: https://www.youtube.com/@Capitalcom_Italia/videos
  - link:
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=181d0c80-c55c-4555-8cf6-97ff4022800f&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=181d0c80-c55c-4555-8cf6-97ff4022800f&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=181d0c80-c55c-4555-8cf6-97ff4022800f&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "Paese / Regione:"
  - button
  - text: "• Lingua:"
  - button
  - text: "Contattaci allo:"
  - link "+39 0287362646":
    - /url: tel:+39 0287362646
    - strong: +39 0287362646
    - strong
  - text: •
  - link "support@capital.com":
    - /url: mailto:support@capital.com
    - strong: support@capital.com
  - strong: Trading
  - text: Trading
  - link "Trading di CFD":
    - /url: /it-it/ways-to-trade/cfd-trading
  - link "Knock-out":
    - /url: /it-it/ways-to-trade/knock-outs
  - link "Trading demo":
    - /url: /it-it/trading-platforms/demo-account
  - link "Professionale":
    - /url: /it-it/professional-clients
  - text: Piattaforme di trading
  - link "Piattaforma web":
    - /url: /it-it/trading-platforms/web-platform
  - link "App mobile":
    - /url: /it-it/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /it-it/trading-platforms/trading-view
  - link "MT4":
    - /url: /it-it/trading-platforms/mt4
  - link "MT5":
    - /url: /it-it/trading-platforms/mt5
  - text: Impara
  - link "Strategie di Trading":
    - /url: /it-it/learn/trading-strategies
  - link "Analisi tecnica":
    - /url: /it-it/learn/technical-analysis
  - link "Psicologia del trading":
    - /url: /it-it/learn/trading-psychology
  - link "Impara":
    - /url: /it-it/learn
  - link "Webinars":
    - /url: /it-it/learn/webinars
  - strong: Mercati
  - text: I nostri mercati
  - link "Mercati":
    - /url: /it-it/markets
  - link "Forex":
    - /url: /it-it/markets/forex
  - link "Azioni":
    - /url: /it-it/markets/shares
  - link "Indici":
    - /url: /it-it/markets/indices
  - link "Materie prime":
    - /url: /it-it/markets/commodities
  - link "Criptovalute":
    - /url: /it-it/markets/cryptocurrencies
  - link "Obbligazioni":
    - /url: /it-it/markets/bonds
  - link "Tassi di interesse":
    - /url: /it-it/markets/interest-rates
  - text: Aggiornamenti sui mercati
  - link "Analisi e Newsroom":
    - /url: /it-it/analysis
  - link "Prezzi di mercato":
    - /url: /it-it/about-us/how-our-markets-are-priced
  - link "Costi":
    - /url: /it-it/ways-to-trade/fees-and-charges
    - strong: Costi
  - strong: Chi siamo
  - text: Chi siamo
  - link "Informazioni":
    - /url: /it-it/about-us
  - link "I nostri uffici":
    - /url: /it-it/about-us/our-offices
  - link "Capital.com è sicuro?":
    - /url: /it-it/security-measures
  - link "Il nostro modello di business":
    - /url: /it-it/about-us/how-capital-makes-money
  - text: Lavora con noi
  - link "Carriere":
    - /url: /it-it/about-us/careers
  - text: Richiedi assistenza
  - link "Aiuto":
    - /url: /it-it/help
  - link "Vulnerabilità del cliente":
    - /url: /it-it/help/client-vulnerability
  - link "Contattaci":
    - /url: /it-it/contact-us
  - text: Documenti legali
  - link "Termini e condizioni":
    - /url: /it-it/terms-and-policies
  - link "Procedura di gestione dei reclami - Capital Com Group Ltd":
    - /url: /it-it/terms-and-policies/complaints-procedure-cceu
  - link "Procedura per i reclami - Capital Com SV Investments Limited":
    - /url: /it-it/terms-and-policies/complaints-procedure
  - 'link "Compliance e aspetti normativi: trading di CFD"':
    - /url: /it-it/terms-and-policies/compliance-and-legals
  - paragraph:
    - text: "Capital Com SV Investments Limited: I CFD sono strumenti complessi e comportano un rischio significativo di perdere denaro rapidamente a causa della leva finanziaria. Il"
    - strong: 73 %
    - text: dei conti degli investitori al dettaglio perde denaro nelle negoziazioni in CFD con questo fornitore. Valuti se comprende il funzionamento dei CFD e se può permettersi di correre l’elevato rischio di perdere il suo denaro.
    - link "Informativa sui rischi":
      - /url: https://capital.com/risk-disclosure-policy
    - text: .
  - paragraph:
    - text: "Capital Com Group Ltd: I CFD sono strumenti complessi e presentano un rischio significativo di perdere denaro rapidamente a causa della leva finanziaria. Il"
    - strong: 74-89 %
    - text: dei conti degli investitori al dettaglio subisce perdite monetarie in seguito a negoziazione in CFD. Valuti se comprende il funzionamento dei CFD e se può permettersi di correre l’elevato rischio di perdere il suo denaro.
    - link "Informativa sui rischi":
      - /url: https://capital.com/risk-disclosure-policy-cceu
    - text: .
  - paragraph: "Avvertenza sui rischi: Il valore delle azioni e degli ETF acquistati mediante un account di negoziazione azionaria può aumentare o diminuire, motivo per cui è insito il rischio di guadagnare meno di quanto investito inizialmente. Le performance passate non costituiscono un indicatore affidabile dell'andamento futuro. Gli strumenti over-the-counter non-deliverable, come le opzioni knock-out e i CFD, sono prodotti finanziari complessi associati a un rischio elevato di perdita dell’intero capitale investito. Tali prodotti non sono indicati per tutti gli investitori, in quanto possono tradursi sia in profitti che in perdite ingenti. Prima di iniziare a praticare questa tipologia di trading, occorre valutare attentamente se si comprendono le modalità operative di tali strumenti e se ci si può permettere di correre l'elevato rischio di perdere il proprio denaro. Per i clienti professionali, è insito il rischio di perdere più di quanto depositato inizialmente. Le informazioni riportate in questo sito hanno carattere generale e non tengono conto della situazione finanziaria, degli obiettivi o delle esigenze individuali. Si raccomanda di consultare attentamente i documenti legali e di assicurarsi di aver compreso appieno i rischi insiti prima di prendere qualsivoglia decisione di trading. Si consiglia di far uso dei servizi didattici messi a disposizione dalla società, così da acquisire consapevolezza dei rischi prima di iniziare a effettuare operazioni di trading."
  - paragraph: "Capital Com SV Investments Limited è una società costituita nella Repubblica di Cipro, con numero di registrazione HE 354252, autorizzata e regolamentata dalla Cyprus Securities and Exchange Commission (numero di licenza: 319/17). Sede legale: Vasileiou Makedonos 8, Kinnis Business Center, 2° piano, 3040, Limassol, Cipro."
  - paragraph: "Capital Com Group Ltd è una società costituita nella Repubblica di Cipro, con numero di registrazione ΗΕ 446198, autorizzata e regolamentata dalla Cyprus Securities and Exchange Commission (numero di licenza: 463/25). Sede legale: Vasileiou Makedonos 8, Kinnis Business Center, 2° piano, 3040, Limassol, Cipro."
  - paragraph: Le informazioni riportate su questo sito non sono rivolte ai residenti di Stati Uniti, Canada e Belgio, o di qualsivoglia altro Paese al di fuori del SEE, e non sono concepite per la distribuzione o l’utilizzo da parte di soggetti di Paesi o giurisdizioni in cui tale distribuzione o utilizzo contravvengono alle normative o alle disposizioni localmente vigenti.
  - paragraph: © 2026 Capital Com SV Investments Limited
  - link "Mappa del sito":
    - /url: /it-it/sitemap
  - link "Impostazioni dei cookie":
    - /url: ""
  - link "Regolamentazioni":
    - /url: /it-it/terms-and-policies/regulations
  - link "Termini e condizioni":
    - /url: /it-it/terms-and-policies
  - link "Procedura per i reclami":
    - /url: /it-it/terms-and-policies/complaints-procedures
- button
- dialog "Cookie banner":
  - paragraph:
    - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
    - link "More information about your privacy, opens in a new tab":
      - /url: https://capital.com/cookies-policy-it
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