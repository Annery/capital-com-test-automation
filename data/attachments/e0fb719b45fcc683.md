# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: header/header-auth.spec.ts >> [CYSEC EL | authorized] Header auth entry >> Open platform opens the trading platform
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
      - text: Οι συμβάσεις CFDs είναι πολύπλοκα προϊόντα και ενέχουν υψηλό κίνδυνο ραγδαίας απώλειας χρημάτων λόγω της μόχλευσης.
      - generic [ref=e8]:
        - generic [ref=e9]:
          - strong [ref=e10]: Η μεγαλύτερη πλειοψηφία των λογαριασμών των ιδιωτών πελατών υφίσταται απώλειες κεφαλαίων όταν πραγματοποιούνται συναλλαγές σε CFDs.
          - text: .
        - text: Οφείλετε να αξιολογήσετε αν κατανοείτε τον τρόπο με τον οποίο λειτουργούν οι συμβάσεις CFDs και αν μπορείτε να ανταπεξέλθετε οικονομικά στον υψηλό κίνδυνο απώλειας των κεφαλαίων σας. Παρακαλούμε ανατρέξτε στη δήλωση
        - link "Δήλωση Γνωστοποίησης Κινδύνων" [ref=e11] [cursor=pointer]:
          - /url: https://capital.com/risk-disclosure-policy-cceu
    - generic [ref=e13]:
      - link [ref=e14] [cursor=pointer]:
        - /url: /el-gr
        - img [ref=e15]
      - generic [ref=e20]:
        - navigation [ref=e21]:
          - button "Διαπραγμάτευση" [ref=e22]:
            - button "Διαπραγμάτευση" [ref=e23]:
              - generic [ref=e24]: Διαπραγμάτευση
          - button "Αγορές" [ref=e25]:
            - button "Αγορές" [ref=e26]:
              - generic [ref=e27]: Αγορές
          - link "Τιμολόγηση" [ref=e30] [cursor=pointer]:
            - /url: /el-gr/ways-to-trade/fees-and-charges
          - button "Σχετικά με" [ref=e31]:
            - button "Σχετικά με" [ref=e32]:
              - generic [ref=e33]: Σχετικά με
        - button "el" [ref=e34] [cursor=pointer]:
          - generic [ref=e36]: el
      - generic [ref=e38]:
        - button "Σύνδεση" [ref=e39] [cursor=pointer]: Σύνδεση
        - button "Ανοίξτε έναν λογαριασμό" [ref=e40] [cursor=pointer]: Ανοίξτε έναν λογαριασμό
  - generic [ref=e43]:
    - generic [ref=e44]:
      - generic [ref=e48]:
        - heading "Υποστηριζόμενοι τοπικά. Συνδεδεμένοι παγκόσμια." [level=2] [ref=e49]:
          - generic [ref=e50]: Υποστηριζόμενοι τοπικά.
          - text: Συνδεδεμένοι παγκόσμια.
        - paragraph [ref=e51]: Εγκεκριμένη και ρυθμιζόμενη από την Επιτροπή Κεφαλαιαγοράς Κύπρου (ΕΚΚ)
      - generic [ref=e55]:
        - generic [ref=e59]:
          - generic [ref=e61]:
            - heading "Σε μια αγορά φτιαγμένη για θόρυβο, εμείς δημιουργούμε για καλύτερες αποφάσεις" [level=1] [ref=e62]
            - generic [ref=e64]:
              - text: Παγκόσμια
              - text: Πλατφόρμα διαπραγματεύσεων CFD
              - text: 5,500+ εργαλεία
            - button "Άνοιγμα λογαριασμού" [ref=e65] [cursor=pointer]: Άνοιγμα λογαριασμού
          - generic [ref=e66]:
            - generic:
              - generic:
                - img "Hero slide 1 Bottom"
          - generic [ref=e68]:
            - link "Android" [ref=e69] [cursor=pointer]:
              - /url: /el-gr/trading-platforms/mobile-apps
            - link "IOS" [ref=e70] [cursor=pointer]:
              - /url: /el-gr/trading-platforms/mobile-apps
            - link "MT4" [ref=e71] [cursor=pointer]:
              - /url: /el-gr/trading-platforms/mt4
            - link "MT5" [ref=e72] [cursor=pointer]:
              - /url: /el-gr/trading-platforms/mt5
            - link "TradingView" [ref=e73] [cursor=pointer]:
              - /url: /el-gr/trading-platforms/trading-view
            - link "Web Τερματικό" [ref=e74] [cursor=pointer]:
              - /url: /el-gr/trading-platforms/web-platform
        - generic [ref=e77]:
          - img [ref=e78]
          - generic [ref=e79]:
            - generic [ref=e80]:
              - heading "5,500+ εργαλεία. Ένα περιβάλλον αποφάσεων" [level=2] [ref=e81]:
                - text: 5,500+ εργαλεία.
                - text: Ένα περιβάλλον αποφάσεων
              - link "Εξερευνήστε αγορές CFD" [ref=e82] [cursor=pointer]:
                - /url: /el-gr/markets
            - list [ref=e86]:
              - listitem [ref=e87]:
                - button "Εμπορεύματα" [ref=e88] [cursor=pointer]:
                  - heading "Εμπορεύματα" [level=3] [ref=e91]
              - listitem [ref=e92]:
                - button "Κρυπτονομίσματα" [ref=e93] [cursor=pointer]:
                  - heading "Κρυπτονομίσματα" [level=3] [ref=e96]
              - listitem [ref=e97]:
                - button "Μετοχές" [ref=e98] [cursor=pointer]:
                  - heading "Μετοχές" [level=3] [ref=e101]
              - listitem [ref=e102]:
                - button "Ομόλογα" [ref=e103] [cursor=pointer]:
                  - heading "Ομόλογα" [level=3] [ref=e106]
              - listitem [ref=e107]:
                - button "ETF" [ref=e108] [cursor=pointer]:
                  - heading "ETF" [level=3] [ref=e111]
              - listitem [ref=e112]:
                - button "Δείκτες" [ref=e113] [cursor=pointer]:
                  - heading "Δείκτες" [level=3] [ref=e116]
              - listitem [ref=e117]:
                - button "Επιτόκια" [ref=e118] [cursor=pointer]:
                  - heading "Επιτόκια" [level=3] [ref=e121]
              - listitem [ref=e122]:
                - button "Εμπορεύματα" [ref=e123] [cursor=pointer]:
                  - heading "Εμπορεύματα" [level=3] [ref=e126]
              - listitem [ref=e127]:
                - button "Κρυπτονομίσματα" [ref=e128] [cursor=pointer]:
                  - heading "Κρυπτονομίσματα" [level=3] [ref=e131]
              - listitem [ref=e132]:
                - button "Μετοχές" [ref=e133] [cursor=pointer]:
                  - heading "Μετοχές" [level=3] [ref=e136]
              - listitem [ref=e137]:
                - button "Ομόλογα" [ref=e138] [cursor=pointer]:
                  - heading "Ομόλογα" [level=3] [ref=e141]
              - listitem [ref=e142]:
                - button "ETF" [ref=e143] [cursor=pointer]:
                  - heading "ETF" [level=3] [ref=e146]
              - listitem [ref=e147]:
                - button "Δείκτες" [ref=e148] [cursor=pointer]:
                  - heading "Δείκτες" [level=3] [ref=e151]
              - listitem [ref=e152]:
                - button "Επιτόκια" [ref=e153] [cursor=pointer]:
                  - heading "Επιτόκια" [level=3] [ref=e156]
              - listitem [ref=e157]:
                - button "Εμπορεύματα" [ref=e158] [cursor=pointer]:
                  - heading "Εμπορεύματα" [level=3] [ref=e161]
              - listitem [ref=e162]:
                - button "Κρυπτονομίσματα" [ref=e163] [cursor=pointer]:
                  - heading "Κρυπτονομίσματα" [level=3] [ref=e166]
              - listitem [ref=e167]:
                - button "Μετοχές" [ref=e168] [cursor=pointer]:
                  - heading "Μετοχές" [level=3] [ref=e171]
              - listitem [ref=e172]:
                - button "Ομόλογα" [ref=e173] [cursor=pointer]:
                  - heading "Ομόλογα" [level=3] [ref=e176]
              - listitem [ref=e177]:
                - button "ETF" [ref=e178] [cursor=pointer]:
                  - heading "ETF" [level=3] [ref=e181]
              - listitem [ref=e182]:
                - button "Δείκτες" [ref=e183] [cursor=pointer]:
                  - heading "Δείκτες" [level=3] [ref=e186]
              - listitem [ref=e187]:
                - button "Επιτόκια" [ref=e188] [cursor=pointer]:
                  - heading "Επιτόκια" [level=3] [ref=e191]
    - generic [ref=e192]:
      - generic [ref=e194]:
        - heading "Κάθε οθόνη. Ένα σύστημα." [level=2] [ref=e195]:
          - text: Κάθε οθόνη.
          - generic [ref=e196]: Ένα σύστημα.
        - paragraph [ref=e197]: Πολλαπλές πλατφόρμες, όλες οι αγορές, κάθε συσκευή. Η υποδομή σας για trading.
        - generic [ref=e198]:
          - link [ref=e199] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
          - link [ref=e200] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
          - link [ref=e201] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
      - generic:
        - generic:
          - generic:
            - img "Mobile platform"
        - generic:
          - generic:
            - img "Web platform"
    - generic [ref=e202]:
      - img [ref=e203]
      - generic [ref=e205]:
        - heading "Ξεκάθαρο κόστος πριν δεσμευτείτε" [level=2] [ref=e206]
        - generic [ref=e207]:
          - list [ref=e208]:
            - listitem [ref=e209]:
              - heading "Κερδίζουμε από τα spread σε εκτελεσμένες διαπραγματεύσεις" [level=3] [ref=e210]
              - paragraph [ref=e211]: Διαφάνεια πριν από τη θέση.
            - listitem [ref=e212]:
              - heading "Χωρίς τέλη κατάθεσης ή ανάληψης" [level=3] [ref=e213]
              - paragraph [ref=e214]: Αξιόπιστες πληρωμές. Τραπεζικές μεταφορές, κάρτες, ψηφιακά πορτοφόλια.
          - generic [ref=e215]:
            - generic [ref=e216]: Η πλήρης δομή αμοιβών μας είναι διαθέσιμη στη σελίδα μας
            - link "Χρεώσεις και αμοιβές." [ref=e217] [cursor=pointer]:
              - /url: /el-gr/ways-to-trade/fees-and-charges
    - generic [ref=e218]:
      - generic [ref=e220]:
        - img "risk graph 1" [ref=e222]
        - img "risk graph 2" [ref=e224]
      - generic [ref=e225]:
        - generic [ref=e227]:
          - heading "Οι περισσότεροι traders χάνουν χρήματα" [level=2] [ref=e229]
          - heading "Οι αγορές παίζουν ρόλο" [level=2] [ref=e231]
          - heading "Οι αποφάσεις κάνουν τη διαφορά" [level=2] [ref=e233]
        - generic [ref=e234]:
          - generic [ref=e236]:
            - heading "Ορίστε σε ηρεμία." [level=2] [ref=e237]
            - heading "Ενεργό υπό πίεση." [level=2] [ref=e238]
          - generic [ref=e239]:
            - generic [ref=e240]:
              - heading "Ορίστε stop-loss πριν τη διαπραγμάτευση" [level=3] [ref=e241]
              - img "trading" [ref=e243]
            - generic [ref=e244]:
              - heading "Επιλέξτε μόχλευση" [level=3] [ref=e245]
              - img "cfd" [ref=e247]
              - img "leverage" [ref=e249]
            - generic [ref=e250]:
              - heading "Επιβεβαιώστε εντολή" [level=3] [ref=e251]
              - img "bottomSheet" [ref=e253]
    - generic [ref=e254]:
      - generic [ref=e255]:
        - heading "Η πειθαρχία είναι ορατή. Όπως και η εμπιστοσύνη." [level=2] [ref=e257]:
          - text: Η πειθαρχία είναι ορατή.
          - text: Όπως και η εμπιστοσύνη.
        - generic [ref=e258]:
          - img "Secondary phone" [ref=e261]
          - img "Main phone" [ref=e264]
      - list [ref=e270]:
        - listitem [ref=e271]:
          - link "4.7 Αξιολογήσεις και Κριτικές" [ref=e272] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e273]: "4.7"
            - generic [ref=e274]: Αξιολογήσεις και Κριτικές
        - listitem [ref=e275]:
          - link "4.7 Αξιολογήσεις και Κριτικές" [ref=e276] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e277]: "4.7"
            - generic [ref=e278]: Αξιολογήσεις και Κριτικές
        - listitem [ref=e279]:
          - link "4.6 TradingView" [ref=e280] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - generic [ref=e281]: "4.6"
            - generic [ref=e282]: TradingView
        - listitem [ref=e283]:
          - link "4.6 Trustpilot" [ref=e284] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - generic [ref=e285]: "4.6"
            - generic [ref=e286]: Trustpilot
        - listitem [ref=e287]:
          - link "4.7 Αξιολογήσεις και Κριτικές" [ref=e288] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e289]: "4.7"
            - generic [ref=e290]: Αξιολογήσεις και Κριτικές
        - listitem [ref=e291]:
          - link "4.7 Αξιολογήσεις και Κριτικές" [ref=e292] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e293]: "4.7"
            - generic [ref=e294]: Αξιολογήσεις και Κριτικές
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
          - link "4.7 Αξιολογήσεις και Κριτικές" [ref=e304] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e305]: "4.7"
            - generic [ref=e306]: Αξιολογήσεις και Κριτικές
        - listitem [ref=e307]:
          - link "4.7 Αξιολογήσεις και Κριτικές" [ref=e308] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e309]: "4.7"
            - generic [ref=e310]: Αξιολογήσεις και Κριτικές
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
  - contentinfo [ref=e320]:
    - generic [ref=e321]:
      - link [ref=e322] [cursor=pointer]:
        - /url: /el-gr
        - img [ref=e323]
      - generic [ref=e327]:
        - link [ref=e328] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e329] [cursor=pointer]:
          - /url: https://www.youtube.com/@Capitaltrading/videos
      - generic [ref=e330]:
        - link [ref=e331] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e332] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e333] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e334]:
      - generic [ref=e335]:
        - generic [ref=e336]:
          - generic [ref=e337]:
            - generic [ref=e338]: "Χώρα / Περιφέρεια:"
            - button "Cyprus" [ref=e339] [cursor=pointer]:
              - generic [ref=e341]: Cyprus
          - generic [ref=e342]: •
          - generic [ref=e343]:
            - generic [ref=e344]: "Γλώσσα:"
            - button "Greek" [ref=e345] [cursor=pointer]:
              - generic [ref=e346]: Greek
        - generic [ref=e347]:
          - generic [ref=e348]: "Επίσης μπορείτε να επικοινωνήσετε μαζί μας:"
          - link "+357 25123646" [ref=e351] [cursor=pointer]:
            - /url: tel:+357 25123646
            - strong [ref=e352]: +357 25123646
            - strong
          - generic [ref=e353]: •
          - link "support@capital.com" [ref=e355] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e356]: support@capital.com
      - generic [ref=e357]:
        - generic [ref=e358]:
          - strong [ref=e360]: Διαπραγμάτευση
          - generic [ref=e361]:
            - generic [ref=e362]:
              - generic [ref=e363]: Διαπραγμάτευση
              - generic [ref=e364]:
                - link "Διαπραγμάτευση CFD" [ref=e366] [cursor=pointer]:
                  - /url: /el-gr/ways-to-trade/cfd-trading
                - link "Knock-outs" [ref=e368] [cursor=pointer]:
                  - /url: /el-gr/ways-to-trade/knock-outs
                - link "Δοκιμαστική διαπραγμάτευση" [ref=e370] [cursor=pointer]:
                  - /url: /el-gr/trading-platforms/demo-account
                - link "Επαγγελματικά" [ref=e372] [cursor=pointer]:
                  - /url: /el-gr/professional-clients
            - generic [ref=e373]:
              - generic [ref=e374]: Πλατφόρμες trading
              - generic [ref=e375]:
                - link "Web πλατφόρμα" [ref=e377] [cursor=pointer]:
                  - /url: /el-gr/trading-platforms/web-platform
                - link "Εφαρμογή κινητού" [ref=e379] [cursor=pointer]:
                  - /url: /el-gr/trading-platforms/mobile-apps
                - link "TradingView" [ref=e381] [cursor=pointer]:
                  - /url: /el-gr/trading-platforms/trading-view
                - link "MT4" [ref=e383] [cursor=pointer]:
                  - /url: /el-gr/trading-platforms/mt4
                - link "MT5" [ref=e385] [cursor=pointer]:
                  - /url: /el-gr/trading-platforms/mt5
            - generic [ref=e386]:
              - generic [ref=e387]: Μάθετε
              - generic [ref=e388]:
                - link "Στρατηγικές διαπραγμάτευσης" [ref=e390] [cursor=pointer]:
                  - /url: /el-gr/learn/trading-strategies
                - link "Τεχνική ανάλυση" [ref=e392] [cursor=pointer]:
                  - /url: /el-gr/learn/technical-analysis
                - link "Ψυχολογία του trading" [ref=e394] [cursor=pointer]:
                  - /url: /el-gr/learn/trading-psychology
                - link "Μάθετε" [ref=e396] [cursor=pointer]:
                  - /url: /el-gr/learn
        - generic [ref=e397]:
          - strong [ref=e399]: Αγορές
          - generic [ref=e400]:
            - generic [ref=e401]:
              - generic [ref=e402]: Οι αγορές μας
              - generic [ref=e403]:
                - link "Αγορές" [ref=e405] [cursor=pointer]:
                  - /url: /el-gr/markets
                - link "Forex" [ref=e407] [cursor=pointer]:
                  - /url: /el-gr/markets/forex
                - link "Μετοχές" [ref=e409] [cursor=pointer]:
                  - /url: /el-gr/markets/shares
                - link "Δείκτες" [ref=e411] [cursor=pointer]:
                  - /url: /el-gr/markets/indices
                - link "Εμπορεύματα" [ref=e413] [cursor=pointer]:
                  - /url: /el-gr/markets/commodities
                - link "Κρυπτονομίσματα" [ref=e415] [cursor=pointer]:
                  - /url: /el-gr/markets/cryptocurrencies
                - link "Ομόλογα" [ref=e417] [cursor=pointer]:
                  - /url: /el-gr/markets/bonds
                - link "Επιτόκια" [ref=e419] [cursor=pointer]:
                  - /url: /el-gr/markets/interest-rates
            - generic [ref=e420]:
              - generic [ref=e421]: Ενημερώσεις για την αγορά
              - generic [ref=e422]:
                - link "Ανάλυση Αγοράς" [ref=e424] [cursor=pointer]:
                  - /url: /el-gr/analysis
                - link "Τιμολόγηση αγορών" [ref=e426] [cursor=pointer]:
                  - /url: /el-gr/about-us/how-our-markets-are-priced
        - link "Τιμολόγηση" [ref=e429] [cursor=pointer]:
          - /url: /el-gr/ways-to-trade/fees-and-charges
          - strong [ref=e430]: Τιμολόγηση
        - generic [ref=e431]:
          - strong [ref=e433]: Σχετικά με
          - generic [ref=e434]:
            - generic [ref=e435]:
              - generic [ref=e436]: Σχετικά με εμάς
              - generic [ref=e437]:
                - link "Σχετικά" [ref=e439] [cursor=pointer]:
                  - /url: /el-gr/about-us
                - link "Τα γραφεία μας" [ref=e441] [cursor=pointer]:
                  - /url: /el-gr/about-us/our-offices
                - link "Είναι ασφαλής η capital.com;" [ref=e443] [cursor=pointer]:
                  - /url: /el-gr/security-measures
                - link "Το επιχειρηματικό μας μοντέλο" [ref=e445] [cursor=pointer]:
                  - /url: /el-gr/about-us/how-capital-makes-money
            - generic [ref=e446]:
              - generic [ref=e447]: Δουλέψτε μαζί μας
              - link "Καριέρες" [ref=e450] [cursor=pointer]:
                - /url: /el-gr/about-us/careers
            - generic [ref=e451]:
              - generic [ref=e452]: Λάβετε βοήθεια
              - generic [ref=e453]:
                - link "Βοήθεια" [ref=e455] [cursor=pointer]:
                  - /url: /el-gr/help
                - link "Ευαλωτότητα πελάτη" [ref=e457] [cursor=pointer]:
                  - /url: /el-gr/help/client-vulnerability
                - link "Επικοινωνήστε μαζί μας" [ref=e459] [cursor=pointer]:
                  - /url: /el-gr/contact-us
            - generic [ref=e460]:
              - generic [ref=e461]: Νομικά έγγραφα
              - generic [ref=e462]:
                - link "Όροι και πολιτικές" [ref=e464] [cursor=pointer]:
                  - /url: /el-gr/terms-and-policies
                - link "Διαδικασία Καταγγελιών - Capital Com Group Ltd" [ref=e466] [cursor=pointer]:
                  - /url: /el-gr/terms-and-policies/complaints-procedure-cceu
                - link "Διαδικασία καταγγελιών - Capital Com SV Investments Limited" [ref=e468] [cursor=pointer]:
                  - /url: /el-gr/terms-and-policies/complaints-procedure
                - 'link "Συμμόρφωση και νομικά: Διαπραγμάτευση CFD" [ref=e470] [cursor=pointer]':
                  - /url: /el-gr/terms-and-policies/compliance-and-legals
    - generic [ref=e472]:
      - paragraph [ref=e473]:
        - text: "Capital Com SV Investments Limited:"
        - text: Τα CFDs είναι σύνθετα εργαλεία και ενέχουν υψηλό κίνδυνο να χάσετε γρήγορα χρήματα λόγω της μόχλευσης.
        - strong [ref=e474]: 73% των λογαριασμών των μικροεπενδυτών χάνουν χρήματα κατά τη διαπραγμάτευση CFDs με αυτόν τον πάροχο.
        - text: Θα πρέπει να εξετάσετε αν κατανοείτε πώς λειτουργούν τα CFDs και αν μπορείτε να αναλάβετε το υψηλό ρίσκο να χάσετε τα χρήματά σας. Παρακαλούμε ανατρέξτε στη δήλωση
        - link "Δήλωση Γνωστοποίησης Κινδύνων" [ref=e475] [cursor=pointer]:
          - /url: https://capital.com/risk-disclosure-policy
        - text: .
      - paragraph [ref=e476]:
        - text: "Capital Com Group Ltd:"
        - generic [ref=e477]:
          - text: Οι συμβάσεις CFDs είναι πολύπλοκα προϊόντα και ενέχουν υψηλό κίνδυνο ραγδαίας απώλειας χρημάτων λόγω της μόχλευσης.
          - strong [ref=e478]: Η μεγαλύτερη πλειοψηφία των λογαριασμών των ιδιωτών πελατών υφίσταται απώλειες κεφαλαίων όταν πραγματοποιούνται συναλλαγές σε CFDs
          - text: . Οφείλετε να αξιολογήσετε αν κατανοείτε τον τρόπο με τον οποίο λειτουργούν οι συμβάσεις CFDs και αν μπορείτε να ανταπεξέλθετε οικονομικά στον υψηλό κίνδυνο απώλειας των κεφαλαίων σας. Παρακαλούμε ανατρέξτε στη δήλωση
          - link "Δήλωση Γνωστοποίησης Κινδύνων" [ref=e479] [cursor=pointer]:
            - /url: https://capital.com/risk-disclosure-policy-cceu
      - paragraph [ref=e480]:
        - text: "Προειδοποίηση κινδύνου: Η αξία των μετοχών και των ETF που αγοράζονται μέσω ενός λογαριασμού διαπραγμάτευσης μετοχών μπορεί να μειωθεί ή να αυξηθεί, πράγμα που σημαίνει ότι ενδέχεται να λάβετε πίσω λιγότερα χρήματα από αυτά που επενδύσατε αρχικά. Οι προηγούμενες επιδόσεις δεν αποτελούν εγγύηση για μελλοντικά αποτελέσματα."
        - text: Οι συναλλαγές σε εξωχρηματιστηριακά εργαλεία χωρίς παράδοση, όπως οι επιλογές knock-out και τα CFD, είναι σύνθετα χρηματοοικονομικά προϊόντα που ενέχουν υψηλό κίνδυνο απώλειας του συνόλου του επενδυμένου κεφαλαίου. Τα προϊόντα αυτά δεν είναι κατάλληλα για όλους τους επενδυτές, καθώς ενδέχεται να οδηγήσουν τόσο σε κέρδη όσο και σε σημαντικές απώλειες. Πριν ξεκινήσετε να πραγματοποιείτε αυτού του είδους τις διαπραγματεύσεις, θα πρέπει να εξετάσετε προσεκτικά εάν κατανοείτε τον τρόπο λειτουργίας αυτών των εργαλείων και εάν μπορείτε να αναλάβετε τον υψηλό κίνδυνο απώλειας των χρημάτων σας.
        - text: Για τους επαγγελματίες πελάτες, υπάρχει κίνδυνος απώλειας ποσού μεγαλύτερου από την αρχική κατάθεση. Οι πληροφορίες που περιέχονται σε αυτόν τον ιστότοπο είναι γενικής φύσεως και δεν λαμβάνουν υπόψη την οικονομική σας κατάσταση, τους στόχους ή τις ανάγκες σας. Παρακαλούμε διαβάστε τα νομικά μας έγγραφα και βεβαιωθείτε ότι κατανοείτε πλήρως τους κινδύνους πριν λάβετε οποιαδήποτε απόφαση σχετικά με τις διαπραγματεύσεις. Σας ενθαρρύνουμε να χρησιμοποιήσετε τις εκπαιδευτικές υπηρεσίες της εταιρείας μας για να κατανοήσετε καλύτερα τους κινδύνους πριν ξεκινήσετε τις δι
      - paragraph [ref=e481]: "Η Capital Com SV Investments Limited είναι μια εταιρεία που έχει συσταθεί στην Κυπριακή Δημοκρατία με αριθμό μητρώου HE 354252 και έχει λάβει άδεια λειτουργίας και εποπτεύεται από την Επιτροπή Κεφαλαιαγοράς Κύπρου (αριθμός άδειας 319/17). Εγγεγραμμένη έδρα: Η εταιρεία έχει την επωνυμία της και την επωνυμία της: Βασιλείου Μακεδόνος 8, Kinnis Business Center, 2ος όροφος, 3040, Λεμεσός, Κύπρος."
      - paragraph [ref=e482]: "Η Capital Com Group Ltd είναι μια εταιρεία που έχει συσταθεί στην Κυπριακή Δημοκρατία με αριθμό μητρώου ΗΕ 446198 και έχει λάβει άδεια λειτουργίας και εποπτεύεται από την Επιτροπή Κεφαλαιαγοράς Κύπρου (αριθμός άδειας 463/25). Εγγεγραμμένη έδρα: Η εταιρεία έχει την επωνυμία της και την επωνυμία της: Βασιλείου Μακεδόνος 8, Kinnis Business Center, 2ος όροφος, 3040, Λεμεσός, Κύπρος."
      - paragraph [ref=e483]: Οι πληροφορίες σε αυτόν τον ιστότοπο δεν απευθύνονται σε κατοίκους των Ηνωμένων Πολιτειών, του Καναδά και του Βελγίου ή οποιασδήποτε άλλης συγκεκριμένης χώρας εκτός του ΕΟΧ και δεν προορίζονται για διανομή ή χρήση από οποιοδήποτε πρόσωπο σε οποιαδήποτε χώρα ή δικαιοδοσία, όπου η εν λόγω διανομή ή χρήση θα ήταν αντίθετη με την τοπική νομοθεσία ή τους τοπικούς κανονισμούς.
    - generic [ref=e484]:
      - paragraph [ref=e485]: © 2026 Capital Com SV Investments Limited
      - generic [ref=e486]:
        - link "Χάρτης ιστότοπου" [ref=e487] [cursor=pointer]:
          - /url: /el-gr/sitemap
        - link "Ρυθμίσεις cookies" [ref=e488] [cursor=pointer]:
          - /url: ""
        - link "Κανονισμοί" [ref=e489] [cursor=pointer]:
          - /url: /el-gr/terms-and-policies/regulations
        - link "Όροι και Πολιτικές" [ref=e490] [cursor=pointer]:
          - /url: /el-gr/terms-and-policies
        - link "Διαδικασία καταγγελιών" [ref=e491] [cursor=pointer]:
          - /url: /el-gr/terms-and-policies/complaints-procedures
  - button [ref=e492] [cursor=pointer]
  - dialog "Cookie banner" [ref=e494]:
    - generic [ref=e495]:
      - paragraph [ref=e497]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e498] [cursor=pointer]:
          - /url: https://capital.com/cookies-policy-gr
          - text: Cookie Policy
        - text: .
      - generic [ref=e499]:
        - button "Reject all" [ref=e500] [cursor=pointer]
        - button "Allow all cookies" [ref=e501] [cursor=pointer]
        - button "Cookie settings" [ref=e502] [cursor=pointer]
  - alert [ref=e503]
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