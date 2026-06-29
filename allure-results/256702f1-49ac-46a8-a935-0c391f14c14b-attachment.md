# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/about.spec.ts >> [CYSEC EL | authorized] About / Help / Contact us >> [banner_with_steps] -> platformPage
- Location: src/fixtures/content-section.ts:41:25

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/trading\/platform\//
Received string:  "https://capital.com/el-gr/contact-us"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://capital.com/el-gr/contact-us"


Call Log:
- Timeout 15000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
  - generic [ref=e41]:
    - paragraph [ref=e44]:
      - generic [ref=e45]:
        - link "Αρχική οθόνη" [ref=e46] [cursor=pointer]:
          - /url: /el-gr
        - text: •
      - text: Επικοινωνήστε μαζί μας
    - generic [ref=e47]:
      - generic [ref=e53]:
        - heading "Επικοινωνήστε μαζί μας" [level=1] [ref=e54]
        - paragraph [ref=e56]: Η ομάδα υποστήριξής μας είναι διαθέσιμη μέσω email, τηλεφώνου και live chat. Στόχος μας είναι να απαντάμε όσο το δυνατόν γρηγορότερα.
      - generic [ref=e60]:
        - generic [ref=e62]:
          - heading "Email" [level=3] [ref=e63]
          - link "support@capital.com" [ref=e64] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - generic [ref=e65]: support@capital.com
        - generic [ref=e67]:
          - heading "Τηλέφωνο" [level=3] [ref=e68]
          - link "+357 25123646" [ref=e69] [cursor=pointer]:
            - /url: tel:+35725123646
            - generic [ref=e70]: +357 25123646
        - generic [ref=e72]:
          - heading "Chat" [level=3] [ref=e73]
          - link "WhatsApp" [ref=e74] [cursor=pointer]:
            - /url: https://wa.me/447897000276
            - generic [ref=e75]: WhatsApp
        - generic [ref=e77]:
          - heading "Κέντρο υποστήριξης" [level=3] [ref=e78]
          - link "Επισκεφτείτε" [ref=e79] [cursor=pointer]:
            - /url: /el-gr/help
            - generic [ref=e80]: Επισκεφτείτε
        - generic [ref=e82]:
          - heading "Υποβολή αιτήματος" [level=3] [ref=e83]
          - link "Επισκεφτείτε" [ref=e84] [cursor=pointer]:
            - /url: https://help.capitalccsv.com/hc/el/requests/new
            - generic [ref=e85]: Επισκεφτείτε
      - generic [ref=e94]:
        - strong [ref=e95]: Το γραφείο μας στην Κύπρο
        - paragraph [ref=e97]:
          - text: "Capital Com SV Investments Limited:"
          - text: Βασιλείου Μακεδόνος, 8, KINNIS BUSINESS CENTER, 1ος-3ος όροφος, 3040, Λεμεσός, Κύπρος
          - text: Λεμεσός, Κύπρος
      - generic [ref=e99]:
        - heading "Περισσότερα για μας" [level=2] [ref=e101]
        - generic [ref=e102]:
          - generic [ref=e104]:
            - heading "Τα Διεθνή μας Γραφεία" [level=3] [ref=e105]
            - paragraph [ref=e107]: Γραφεία σε όλη την Ευρώπη, τη Μέση Ανατολή και σε Ασία-Ειρηνικό. Ρυθμίζεται σε επτά δικαιοδοσίες.
            - link "Δείτε όλες τις τοποθεσίες" [ref=e108] [cursor=pointer]:
              - /url: /el-gr/about-us/our-offices
              - generic [ref=e109]: Δείτε όλες τις τοποθεσίες
          - generic [ref=e111]:
            - heading "Σχετικά με μας" [level=3] [ref=e112]
            - paragraph [ref=e114]: Η ιστορία πίσω από την Capital·com, η σκέψη που τη διαμορφώνει και οι άνθρωποι που την δημιούργησαν.
            - link "Μάθετε περισσότερα" [ref=e115] [cursor=pointer]:
              - /url: /el-gr/about-us
              - generic [ref=e116]: Μάθετε περισσότερα
      - generic [ref=e117]:
        - generic [ref=e119]:
          - heading "Διαβάστε τις κριτικές μας για να μάθετε περισσότερα για εμάς" [level=2] [ref=e120]
          - generic [ref=e121]:
            - text: Διαβάστε τα σχόλια των πελατών μας
            - superscript [ref=e122]: "1"
            - text: ", ανεξάρτητα από το επίπεδο εμπειρίας τους."
        - generic [ref=e123]:
          - region [ref=e124]:
            - generic [ref=e126]:
              - group [ref=e127]:
                - link [ref=e128] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e131]: 2024-09-12
                  - strong [ref=e132]: N****
                  - paragraph [ref=e134]: Από τις καλύτερες εφαρμογές που έχω δοκιμάσει Σου έχει και την επιλογή για δοκιμαστικό τέλειο συγχαρητήρια στους δημιουργούς μπρα σας
              - group [ref=e136]:
                - link [ref=e137] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e140]: 2024-08-23
                  - strong [ref=e141]: A****** P********
                  - paragraph [ref=e143]: Μια εξαιρετική εφαρμογή αν θέλεις να μάθεις από μετοχές κτλπ και πάρα πολύ yser friendly
              - group [ref=e145]:
                - link [ref=e146] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e149]: 2024-04-16
                  - strong [ref=e150]: S*** X*********
                  - paragraph [ref=e152]: Ότι καλύτερο πρώτα σε μαθαίνει μετά αρχίζει και γίνεται ποιο διασκέδαστηκο και ωραίο
              - group [ref=e154]:
                - link [ref=e155] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e158]: 2023-04-18
                  - strong [ref=e159]: L***** M****
                  - paragraph [ref=e161]: Nagyon jó! Könnyű használni, felhasználó barát! Tetszik a demo fiók lehetősége és, hogy vannak oktató videók is!
              - group [ref=e163]:
                - link [ref=e164] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e167]: 2024-09-06
                  - strong [ref=e168]: N*******
                  - paragraph [ref=e170]: Η εμπειρία πού έχω γενικά είναι πάρα πολύ καλή. Νιώθω σιγουριά για ότι πρόβλημα προκύψει θα λυθεί. Η εταιρία έχει πολύ καλή οργάνωση σέ όλους τούς τομείς. Η κάθε μέρα είναι καλύτερη από την άλλη
              - group [ref=e172]:
                - link [ref=e173] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e176]: 2024-01-24
                  - strong [ref=e177]: T******* A******
                  - paragraph [ref=e179]: Άψογη εξυπηρέτηση και οργάνωση!!!
              - group [ref=e181]:
                - link [ref=e182] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e185]: 2024-01-19
                  - strong [ref=e186]: S********* D****
                  - paragraph [ref=e188]: Pénzt jó vele kereskedni
              - group [ref=e190]:
                - link [ref=e191] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e194]: 2025-02-06
                  - strong [ref=e195]: G**** T*******
                  - paragraph [ref=e197]: Γρήγορη εξυπηρέτηση και άμεση λύση στο πρόβλημα που αντιμετώπιζα στην εφαρμογή
              - group [ref=e199]:
                - link [ref=e200] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e203]: 2024-11-14
                  - strong [ref=e204]: Γι***** Κ******
                  - paragraph [ref=e206]: Τιμια συνεργασια,καταπληκτικοι ανθρωποι.γιωργος.
              - group [ref=e208]:
                - link [ref=e209] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e212]: 2024-07-10
                  - strong [ref=e213]: L***** K****
                  - paragraph [ref=e215]: Η πλατφόρμα είναι οκ μέχρι στιγμής χωρίς κολλήματα
              - group [ref=e217]:
                - link [ref=e218] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e221]: 2023-08-06
                  - strong [ref=e222]: T****
                  - paragraph [ref=e224]: Egy jó app. Ajánlani tudom.
              - group [ref=e226]:
                - link [ref=e227] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e230]: 2024-01-11
                  - strong [ref=e231]: p*** p****
                  - paragraph [ref=e233]: Πολύ έγκυρη εφαρμογή. Δεν είναι απατεώνες
              - group [ref=e235]:
                - link [ref=e236] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e239]: 2024-02-15
                  - strong [ref=e240]: E****
                  - paragraph [ref=e242]: "ΥΠΑΡΧΟΥΝ ΟΛΑ ΤΑ ΑΠΑΡΑΙΤΗΤΑ ΣΤΟΙΧΕΙΑ ΓΙΑ ΚΑΠΟΙΟΝ ΑΡΧΑΡΙΟ ΣΑΝ ΕΜΕΝΑ ΓΙΑ ΝΑ ΜΑΘΕΙ ΣΙΓΑ ΣΙΓΑ ΠΩΣ ΝΑ ΚΑΜΝΕΙ TRADING.EΠΙΣΗΣ ΥΠΑΡΧΟΥΝ ΟΙ ΑΠΑΡΑΙΤΗΤΕΣ ΕΙΔΗΣΕΙΣ ΠΟΥ ΕΠΗΡΕΑΖΟΥΝ ΕΜΜΕΣΣΑ ΤΙΣ ΤΙΜΕΣ{ ΟΠΟΤΑΝ ΔΕΝ ΧΡΕΙΑΖΕΤΑΙ ΚΑΠΟΙΟΣ ΝΑ ΨΑΞΕΙ ΑΛΛΟΥ } ΟΠΩΣ ΚΑΙ ΠΟΛΛΕΣ ΠΛΗΡΟΦΟΡΙΕΣ|| ΓΙΑ ΤΟ ΠΩΣ ΠΟΥ ΠΟΤΕ ΚΑΙ ΓΙΑΤΙ || ΠΟΥ ΠΡΕΠΕΙ ΚΑΠΟΙΟΣ ΠΟΥ ΘΕΛΕΙ ΝΑ ΑΣΧΟΛΗΘΕΙ ΜΕ ΑΥΤΟΝ ΤΟΝ ΤΟΜΕΑ ΝΑ ΓΝΩΡΙΣΕΙ. ΕΙΝΑΙ ΚΑΛΟ ΕΠΙΣΗΣ ΟΤΙ ΔΕΝ ΧΡΕΙΑΖΟΝΤΑΙ ΤΕΡΑΣΤΙΑ ΠΟΣΑ ΓΙΑ ΝΑ ΑΡΧΙΣΕΙ ΚΑΠΟΙΟΣ ."
              - group "1 of 13" [ref=e244]:
                - link "2024-09-12 N**** Από τις καλύτερες εφαρμογές που έχω δοκιμάσει Σου έχει και την επιλογή για δοκιμαστικό τέλειο συγχαρητήρια στους δημιουργούς μπρα σας" [ref=e245] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e248]: 2024-09-12
                  - strong [ref=e249]: N****
                  - paragraph [ref=e251]: Από τις καλύτερες εφαρμογές που έχω δοκιμάσει Σου έχει και την επιλογή για δοκιμαστικό τέλειο συγχαρητήρια στους δημιουργούς μπρα σας
              - group "2 of 13" [ref=e253]:
                - link "2024-08-23 A****** P******** Μια εξαιρετική εφαρμογή αν θέλεις να μάθεις από μετοχές κτλπ και πάρα πολύ yser friendly" [ref=e254] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e257]: 2024-08-23
                  - strong [ref=e258]: A****** P********
                  - paragraph [ref=e260]: Μια εξαιρετική εφαρμογή αν θέλεις να μάθεις από μετοχές κτλπ και πάρα πολύ yser friendly
              - group "3 of 13" [ref=e262]:
                - link "2024-04-16 S*** X********* Ότι καλύτερο πρώτα σε μαθαίνει μετά αρχίζει και γίνεται ποιο διασκέδαστηκο και ωραίο" [ref=e263] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e266]: 2024-04-16
                  - strong [ref=e267]: S*** X*********
                  - paragraph [ref=e269]: Ότι καλύτερο πρώτα σε μαθαίνει μετά αρχίζει και γίνεται ποιο διασκέδαστηκο και ωραίο
              - group [ref=e271]:
                - link [ref=e272] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e275]: 2023-04-18
                  - strong [ref=e276]: L***** M****
                  - paragraph [ref=e278]: Nagyon jó! Könnyű használni, felhasználó barát! Tetszik a demo fiók lehetősége és, hogy vannak oktató videók is!
              - group [ref=e280]:
                - link [ref=e281] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e284]: 2024-09-06
                  - strong [ref=e285]: N*******
                  - paragraph [ref=e287]: Η εμπειρία πού έχω γενικά είναι πάρα πολύ καλή. Νιώθω σιγουριά για ότι πρόβλημα προκύψει θα λυθεί. Η εταιρία έχει πολύ καλή οργάνωση σέ όλους τούς τομείς. Η κάθε μέρα είναι καλύτερη από την άλλη
              - group [ref=e289]:
                - link [ref=e290] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e293]: 2024-01-24
                  - strong [ref=e294]: T******* A******
                  - paragraph [ref=e296]: Άψογη εξυπηρέτηση και οργάνωση!!!
              - group [ref=e298]:
                - link [ref=e299] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e302]: 2024-01-19
                  - strong [ref=e303]: S********* D****
                  - paragraph [ref=e305]: Pénzt jó vele kereskedni
              - group [ref=e307]:
                - link [ref=e308] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e311]: 2025-02-06
                  - strong [ref=e312]: G**** T*******
                  - paragraph [ref=e314]: Γρήγορη εξυπηρέτηση και άμεση λύση στο πρόβλημα που αντιμετώπιζα στην εφαρμογή
              - group [ref=e316]:
                - link [ref=e317] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e320]: 2024-11-14
                  - strong [ref=e321]: Γι***** Κ******
                  - paragraph [ref=e323]: Τιμια συνεργασια,καταπληκτικοι ανθρωποι.γιωργος.
              - group [ref=e325]:
                - link [ref=e326] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e329]: 2024-07-10
                  - strong [ref=e330]: L***** K****
                  - paragraph [ref=e332]: Η πλατφόρμα είναι οκ μέχρι στιγμής χωρίς κολλήματα
              - group [ref=e334]:
                - link [ref=e335] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e338]: 2023-08-06
                  - strong [ref=e339]: T****
                  - paragraph [ref=e341]: Egy jó app. Ajánlani tudom.
              - group [ref=e343]:
                - link [ref=e344] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e347]: 2024-01-11
                  - strong [ref=e348]: p*** p****
                  - paragraph [ref=e350]: Πολύ έγκυρη εφαρμογή. Δεν είναι απατεώνες
              - group [ref=e352]:
                - link [ref=e353] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e356]: 2024-02-15
                  - strong [ref=e357]: E****
                  - paragraph [ref=e359]: "ΥΠΑΡΧΟΥΝ ΟΛΑ ΤΑ ΑΠΑΡΑΙΤΗΤΑ ΣΤΟΙΧΕΙΑ ΓΙΑ ΚΑΠΟΙΟΝ ΑΡΧΑΡΙΟ ΣΑΝ ΕΜΕΝΑ ΓΙΑ ΝΑ ΜΑΘΕΙ ΣΙΓΑ ΣΙΓΑ ΠΩΣ ΝΑ ΚΑΜΝΕΙ TRADING.EΠΙΣΗΣ ΥΠΑΡΧΟΥΝ ΟΙ ΑΠΑΡΑΙΤΗΤΕΣ ΕΙΔΗΣΕΙΣ ΠΟΥ ΕΠΗΡΕΑΖΟΥΝ ΕΜΜΕΣΣΑ ΤΙΣ ΤΙΜΕΣ{ ΟΠΟΤΑΝ ΔΕΝ ΧΡΕΙΑΖΕΤΑΙ ΚΑΠΟΙΟΣ ΝΑ ΨΑΞΕΙ ΑΛΛΟΥ } ΟΠΩΣ ΚΑΙ ΠΟΛΛΕΣ ΠΛΗΡΟΦΟΡΙΕΣ|| ΓΙΑ ΤΟ ΠΩΣ ΠΟΥ ΠΟΤΕ ΚΑΙ ΓΙΑΤΙ || ΠΟΥ ΠΡΕΠΕΙ ΚΑΠΟΙΟΣ ΠΟΥ ΘΕΛΕΙ ΝΑ ΑΣΧΟΛΗΘΕΙ ΜΕ ΑΥΤΟΝ ΤΟΝ ΤΟΜΕΑ ΝΑ ΓΝΩΡΙΣΕΙ. ΕΙΝΑΙ ΚΑΛΟ ΕΠΙΣΗΣ ΟΤΙ ΔΕΝ ΧΡΕΙΑΖΟΝΤΑΙ ΤΕΡΑΣΤΙΑ ΠΟΣΑ ΓΙΑ ΝΑ ΑΡΧΙΣΕΙ ΚΑΠΟΙΟΣ ."
              - group [ref=e361]:
                - link [ref=e362] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e365]: 2024-09-12
                  - strong [ref=e366]: N****
                  - paragraph [ref=e368]: Από τις καλύτερες εφαρμογές που έχω δοκιμάσει Σου έχει και την επιλογή για δοκιμαστικό τέλειο συγχαρητήρια στους δημιουργούς μπρα σας
              - group [ref=e370]:
                - link [ref=e371] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e374]: 2024-08-23
                  - strong [ref=e375]: A****** P********
                  - paragraph [ref=e377]: Μια εξαιρετική εφαρμογή αν θέλεις να μάθεις από μετοχές κτλπ και πάρα πολύ yser friendly
              - group [ref=e379]:
                - link [ref=e380] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e383]: 2024-04-16
                  - strong [ref=e384]: S*** X*********
                  - paragraph [ref=e386]: Ότι καλύτερο πρώτα σε μαθαίνει μετά αρχίζει και γίνεται ποιο διασκέδαστηκο και ωραίο
              - group [ref=e388]:
                - link [ref=e389] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e392]: 2023-04-18
                  - strong [ref=e393]: L***** M****
                  - paragraph [ref=e395]: Nagyon jó! Könnyű használni, felhasználó barát! Tetszik a demo fiók lehetősége és, hogy vannak oktató videók is!
              - group [ref=e397]:
                - link [ref=e398] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e401]: 2024-09-06
                  - strong [ref=e402]: N*******
                  - paragraph [ref=e404]: Η εμπειρία πού έχω γενικά είναι πάρα πολύ καλή. Νιώθω σιγουριά για ότι πρόβλημα προκύψει θα λυθεί. Η εταιρία έχει πολύ καλή οργάνωση σέ όλους τούς τομείς. Η κάθε μέρα είναι καλύτερη από την άλλη
              - group [ref=e406]:
                - link [ref=e407] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e410]: 2024-01-24
                  - strong [ref=e411]: T******* A******
                  - paragraph [ref=e413]: Άψογη εξυπηρέτηση και οργάνωση!!!
              - group [ref=e415]:
                - link [ref=e416] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e419]: 2024-01-19
                  - strong [ref=e420]: S********* D****
                  - paragraph [ref=e422]: Pénzt jó vele kereskedni
              - group [ref=e424]:
                - link [ref=e425] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e428]: 2025-02-06
                  - strong [ref=e429]: G**** T*******
                  - paragraph [ref=e431]: Γρήγορη εξυπηρέτηση και άμεση λύση στο πρόβλημα που αντιμετώπιζα στην εφαρμογή
              - group [ref=e433]:
                - link [ref=e434] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e437]: 2024-11-14
                  - strong [ref=e438]: Γι***** Κ******
                  - paragraph [ref=e440]: Τιμια συνεργασια,καταπληκτικοι ανθρωποι.γιωργος.
              - group [ref=e442]:
                - link [ref=e443] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e446]: 2024-07-10
                  - strong [ref=e447]: L***** K****
                  - paragraph [ref=e449]: Η πλατφόρμα είναι οκ μέχρι στιγμής χωρίς κολλήματα
              - group [ref=e451]:
                - link [ref=e452] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e455]: 2023-08-06
                  - strong [ref=e456]: T****
                  - paragraph [ref=e458]: Egy jó app. Ajánlani tudom.
              - group [ref=e460]:
                - link [ref=e461] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e464]: 2024-01-11
                  - strong [ref=e465]: p*** p****
                  - paragraph [ref=e467]: Πολύ έγκυρη εφαρμογή. Δεν είναι απατεώνες
              - group [ref=e469]:
                - link [ref=e470] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e473]: 2024-02-15
                  - strong [ref=e474]: E****
                  - paragraph [ref=e476]: "ΥΠΑΡΧΟΥΝ ΟΛΑ ΤΑ ΑΠΑΡΑΙΤΗΤΑ ΣΤΟΙΧΕΙΑ ΓΙΑ ΚΑΠΟΙΟΝ ΑΡΧΑΡΙΟ ΣΑΝ ΕΜΕΝΑ ΓΙΑ ΝΑ ΜΑΘΕΙ ΣΙΓΑ ΣΙΓΑ ΠΩΣ ΝΑ ΚΑΜΝΕΙ TRADING.EΠΙΣΗΣ ΥΠΑΡΧΟΥΝ ΟΙ ΑΠΑΡΑΙΤΗΤΕΣ ΕΙΔΗΣΕΙΣ ΠΟΥ ΕΠΗΡΕΑΖΟΥΝ ΕΜΜΕΣΣΑ ΤΙΣ ΤΙΜΕΣ{ ΟΠΟΤΑΝ ΔΕΝ ΧΡΕΙΑΖΕΤΑΙ ΚΑΠΟΙΟΣ ΝΑ ΨΑΞΕΙ ΑΛΛΟΥ } ΟΠΩΣ ΚΑΙ ΠΟΛΛΕΣ ΠΛΗΡΟΦΟΡΙΕΣ|| ΓΙΑ ΤΟ ΠΩΣ ΠΟΥ ΠΟΤΕ ΚΑΙ ΓΙΑΤΙ || ΠΟΥ ΠΡΕΠΕΙ ΚΑΠΟΙΟΣ ΠΟΥ ΘΕΛΕΙ ΝΑ ΑΣΧΟΛΗΘΕΙ ΜΕ ΑΥΤΟΝ ΤΟΝ ΤΟΜΕΑ ΝΑ ΓΝΩΡΙΣΕΙ. ΕΙΝΑΙ ΚΑΛΟ ΕΠΙΣΗΣ ΟΤΙ ΔΕΝ ΧΡΕΙΑΖΟΝΤΑΙ ΤΕΡΑΣΤΙΑ ΠΟΣΑ ΓΙΑ ΝΑ ΑΡΧΙΣΕΙ ΚΑΠΟΙΟΣ ."
            - generic:
              - button "Go to last slide" [ref=e478] [cursor=pointer]
              - button "Next slide" [ref=e479] [cursor=pointer]
          - paragraph [ref=e480]: Εμφάνιση των κριτικών μας 4 & 5 αστέρων. Τα συγκεκριμένα στοιχεία του χρήστη έχουν σκόπιμα ανωνυμοποιηθεί για να διασφαλιστεί το απόρρητο του σύμφωνα με τις απαιτήσεις του GDPR.
        - generic [ref=e482]:
          - link "4.6" [ref=e483] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - strong [ref=e486]: "4.6"
          - link "Αξιολογήσεις και κριτικές 4.7" [ref=e489] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - strong [ref=e491]: Αξιολογήσεις και κριτικές
            - strong [ref=e493]: "4.7"
          - link "Αξιολογήσεις και κριτικές 4.7" [ref=e496] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - strong [ref=e498]: Αξιολογήσεις και κριτικές
            - strong [ref=e500]: "4.7"
          - link "4.6" [ref=e503] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - strong [ref=e506]: "4.6"
      - generic [ref=e510]:
        - heading "Τρία βήματα για να ξεκινήσετε" [level=2] [ref=e512]
        - generic [ref=e513]:
          - button [active] [ref=e515] [cursor=pointer]
          - generic [ref=e518]: 1. Δημιουργήστε τον λογαριασμό σας (υπόκειται σε επιλεξιμότητα)
          - generic [ref=e519]: 2. Κατάθεση με τους δικούς σας όρους
          - generic [ref=e520]: 3. Διαπραγματευτείτε όταν είστε έτοιμοι
      - paragraph [ref=e524]:
        - superscript [ref=e525]: "1"
        - text: Οι πληροφορίες που παρουσιάζονται σχετίζονται με την Capital Com Group.
  - contentinfo [ref=e527]:
    - generic [ref=e528]:
      - link [ref=e529] [cursor=pointer]:
        - /url: /el-gr
        - img [ref=e530]
      - generic [ref=e534]:
        - link [ref=e535] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e536] [cursor=pointer]:
          - /url: https://www.youtube.com/@Capitaltrading/videos
      - generic [ref=e537]:
        - link [ref=e538] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e539] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e540] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=73273ce4-5615-47c5-92f6-dd23968138d0&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e541]:
      - generic [ref=e542]:
        - generic [ref=e543]:
          - generic [ref=e544]:
            - generic [ref=e545]: "Χώρα / Περιφέρεια:"
            - button "Cyprus" [ref=e546] [cursor=pointer]:
              - generic [ref=e548]: Cyprus
          - generic [ref=e549]: •
          - generic [ref=e550]:
            - generic [ref=e551]: "Γλώσσα:"
            - button "Greek" [ref=e552] [cursor=pointer]:
              - generic [ref=e553]: Greek
        - generic [ref=e554]:
          - generic [ref=e555]: "Επίσης μπορείτε να επικοινωνήσετε μαζί μας:"
          - link "+357 25123646" [ref=e558] [cursor=pointer]:
            - /url: tel:+357 25123646
            - strong [ref=e559]: +357 25123646
            - strong
          - generic [ref=e560]: •
          - link "support@capital.com" [ref=e562] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e563]: support@capital.com
      - generic [ref=e564]:
        - generic [ref=e565]:
          - strong [ref=e567]: Διαπραγμάτευση
          - generic [ref=e568]:
            - generic [ref=e569]:
              - generic [ref=e570]: Διαπραγμάτευση
              - generic [ref=e571]:
                - link "Διαπραγμάτευση CFD" [ref=e573] [cursor=pointer]:
                  - /url: /el-gr/ways-to-trade/cfd-trading
                - link "Knock-outs" [ref=e575] [cursor=pointer]:
                  - /url: /el-gr/ways-to-trade/knock-outs
                - link "Δοκιμαστική διαπραγμάτευση" [ref=e577] [cursor=pointer]:
                  - /url: /el-gr/trading-platforms/demo-account
                - link "Επαγγελματικά" [ref=e579] [cursor=pointer]:
                  - /url: /el-gr/professional-clients
            - generic [ref=e580]:
              - generic [ref=e581]: Πλατφόρμες trading
              - generic [ref=e582]:
                - link "Web πλατφόρμα" [ref=e584] [cursor=pointer]:
                  - /url: /el-gr/trading-platforms/web-platform
                - link "Εφαρμογή κινητού" [ref=e586] [cursor=pointer]:
                  - /url: /el-gr/trading-platforms/mobile-apps
                - link "TradingView" [ref=e588] [cursor=pointer]:
                  - /url: /el-gr/trading-platforms/trading-view
                - link "MT4" [ref=e590] [cursor=pointer]:
                  - /url: /el-gr/trading-platforms/mt4
                - link "MT5" [ref=e592] [cursor=pointer]:
                  - /url: /el-gr/trading-platforms/mt5
            - generic [ref=e593]:
              - generic [ref=e594]: Μάθετε
              - generic [ref=e595]:
                - link "Στρατηγικές διαπραγμάτευσης" [ref=e597] [cursor=pointer]:
                  - /url: /el-gr/learn/trading-strategies
                - link "Τεχνική ανάλυση" [ref=e599] [cursor=pointer]:
                  - /url: /el-gr/learn/technical-analysis
                - link "Ψυχολογία του trading" [ref=e601] [cursor=pointer]:
                  - /url: /el-gr/learn/trading-psychology
                - link "Μάθετε" [ref=e603] [cursor=pointer]:
                  - /url: /el-gr/learn
        - generic [ref=e604]:
          - strong [ref=e606]: Αγορές
          - generic [ref=e607]:
            - generic [ref=e608]:
              - generic [ref=e609]: Οι αγορές μας
              - generic [ref=e610]:
                - link "Αγορές" [ref=e612] [cursor=pointer]:
                  - /url: /el-gr/markets
                - link "Forex" [ref=e614] [cursor=pointer]:
                  - /url: /el-gr/markets/forex
                - link "Μετοχές" [ref=e616] [cursor=pointer]:
                  - /url: /el-gr/markets/shares
                - link "Δείκτες" [ref=e618] [cursor=pointer]:
                  - /url: /el-gr/markets/indices
                - link "Εμπορεύματα" [ref=e620] [cursor=pointer]:
                  - /url: /el-gr/markets/commodities
                - link "Κρυπτονομίσματα" [ref=e622] [cursor=pointer]:
                  - /url: /el-gr/markets/cryptocurrencies
                - link "Ομόλογα" [ref=e624] [cursor=pointer]:
                  - /url: /el-gr/markets/bonds
                - link "Επιτόκια" [ref=e626] [cursor=pointer]:
                  - /url: /el-gr/markets/interest-rates
            - generic [ref=e627]:
              - generic [ref=e628]: Ενημερώσεις για την αγορά
              - generic [ref=e629]:
                - link "Ανάλυση Αγοράς" [ref=e631] [cursor=pointer]:
                  - /url: /el-gr/analysis
                - link "Τιμολόγηση αγορών" [ref=e633] [cursor=pointer]:
                  - /url: /el-gr/about-us/how-our-markets-are-priced
        - link "Τιμολόγηση" [ref=e636] [cursor=pointer]:
          - /url: /el-gr/ways-to-trade/fees-and-charges
          - strong [ref=e637]: Τιμολόγηση
        - generic [ref=e638]:
          - strong [ref=e640]: Σχετικά με
          - generic [ref=e641]:
            - generic [ref=e642]:
              - generic [ref=e643]: Σχετικά με εμάς
              - generic [ref=e644]:
                - link "Σχετικά" [ref=e646] [cursor=pointer]:
                  - /url: /el-gr/about-us
                - link "Τα γραφεία μας" [ref=e648] [cursor=pointer]:
                  - /url: /el-gr/about-us/our-offices
                - link "Είναι ασφαλής η capital.com;" [ref=e650] [cursor=pointer]:
                  - /url: /el-gr/security-measures
                - link "Το επιχειρηματικό μας μοντέλο" [ref=e652] [cursor=pointer]:
                  - /url: /el-gr/about-us/how-capital-makes-money
            - generic [ref=e653]:
              - generic [ref=e654]: Δουλέψτε μαζί μας
              - link "Καριέρες" [ref=e657] [cursor=pointer]:
                - /url: /el-gr/about-us/careers
            - generic [ref=e658]:
              - generic [ref=e659]: Λάβετε βοήθεια
              - generic [ref=e660]:
                - link "Βοήθεια" [ref=e662] [cursor=pointer]:
                  - /url: /el-gr/help
                - link "Ευαλωτότητα πελάτη" [ref=e664] [cursor=pointer]:
                  - /url: /el-gr/help/client-vulnerability
                - link "Επικοινωνήστε μαζί μας" [ref=e666] [cursor=pointer]:
                  - /url: /el-gr/contact-us
            - generic [ref=e667]:
              - generic [ref=e668]: Νομικά έγγραφα
              - generic [ref=e669]:
                - link "Όροι και πολιτικές" [ref=e671] [cursor=pointer]:
                  - /url: /el-gr/terms-and-policies
                - link "Διαδικασία Καταγγελιών - Capital Com Group Ltd" [ref=e673] [cursor=pointer]:
                  - /url: /el-gr/terms-and-policies/complaints-procedure-cceu
                - link "Διαδικασία καταγγελιών - Capital Com SV Investments Limited" [ref=e675] [cursor=pointer]:
                  - /url: /el-gr/terms-and-policies/complaints-procedure
                - 'link "Συμμόρφωση και νομικά: Διαπραγμάτευση CFD" [ref=e677] [cursor=pointer]':
                  - /url: /el-gr/terms-and-policies/compliance-and-legals
    - generic [ref=e679]:
      - paragraph [ref=e680]:
        - text: "Capital Com SV Investments Limited:"
        - text: Τα CFDs είναι σύνθετα εργαλεία και ενέχουν υψηλό κίνδυνο να χάσετε γρήγορα χρήματα λόγω της μόχλευσης.
        - strong [ref=e681]: 73% των λογαριασμών των μικροεπενδυτών χάνουν χρήματα κατά τη διαπραγμάτευση CFDs με αυτόν τον πάροχο.
        - text: Θα πρέπει να εξετάσετε αν κατανοείτε πώς λειτουργούν τα CFDs και αν μπορείτε να αναλάβετε το υψηλό ρίσκο να χάσετε τα χρήματά σας. Παρακαλούμε ανατρέξτε στη δήλωση
        - link "Δήλωση Γνωστοποίησης Κινδύνων" [ref=e682] [cursor=pointer]:
          - /url: https://capital.com/risk-disclosure-policy
        - text: .
      - paragraph [ref=e683]:
        - text: "Capital Com Group Ltd:"
        - generic [ref=e684]:
          - text: Οι συμβάσεις CFDs είναι πολύπλοκα προϊόντα και ενέχουν υψηλό κίνδυνο ραγδαίας απώλειας χρημάτων λόγω της μόχλευσης.
          - strong [ref=e685]: Η μεγαλύτερη πλειοψηφία των λογαριασμών των ιδιωτών πελατών υφίσταται απώλειες κεφαλαίων όταν πραγματοποιούνται συναλλαγές σε CFDs
          - text: . Οφείλετε να αξιολογήσετε αν κατανοείτε τον τρόπο με τον οποίο λειτουργούν οι συμβάσεις CFDs και αν μπορείτε να ανταπεξέλθετε οικονομικά στον υψηλό κίνδυνο απώλειας των κεφαλαίων σας. Παρακαλούμε ανατρέξτε στη δήλωση
          - link "Δήλωση Γνωστοποίησης Κινδύνων" [ref=e686] [cursor=pointer]:
            - /url: https://capital.com/risk-disclosure-policy-cceu
      - paragraph [ref=e687]:
        - text: "Προειδοποίηση κινδύνου: Η αξία των μετοχών και των ETF που αγοράζονται μέσω ενός λογαριασμού διαπραγμάτευσης μετοχών μπορεί να μειωθεί ή να αυξηθεί, πράγμα που σημαίνει ότι ενδέχεται να λάβετε πίσω λιγότερα χρήματα από αυτά που επενδύσατε αρχικά. Οι προηγούμενες επιδόσεις δεν αποτελούν εγγύηση για μελλοντικά αποτελέσματα."
        - text: Οι συναλλαγές σε εξωχρηματιστηριακά εργαλεία χωρίς παράδοση, όπως οι επιλογές knock-out και τα CFD, είναι σύνθετα χρηματοοικονομικά προϊόντα που ενέχουν υψηλό κίνδυνο απώλειας του συνόλου του επενδυμένου κεφαλαίου. Τα προϊόντα αυτά δεν είναι κατάλληλα για όλους τους επενδυτές, καθώς ενδέχεται να οδηγήσουν τόσο σε κέρδη όσο και σε σημαντικές απώλειες. Πριν ξεκινήσετε να πραγματοποιείτε αυτού του είδους τις διαπραγματεύσεις, θα πρέπει να εξετάσετε προσεκτικά εάν κατανοείτε τον τρόπο λειτουργίας αυτών των εργαλείων και εάν μπορείτε να αναλάβετε τον υψηλό κίνδυνο απώλειας των χρημάτων σας.
        - text: Για τους επαγγελματίες πελάτες, υπάρχει κίνδυνος απώλειας ποσού μεγαλύτερου από την αρχική κατάθεση. Οι πληροφορίες που περιέχονται σε αυτόν τον ιστότοπο είναι γενικής φύσεως και δεν λαμβάνουν υπόψη την οικονομική σας κατάσταση, τους στόχους ή τις ανάγκες σας. Παρακαλούμε διαβάστε τα νομικά μας έγγραφα και βεβαιωθείτε ότι κατανοείτε πλήρως τους κινδύνους πριν λάβετε οποιαδήποτε απόφαση σχετικά με τις διαπραγματεύσεις. Σας ενθαρρύνουμε να χρησιμοποιήσετε τις εκπαιδευτικές υπηρεσίες της εταιρείας μας για να κατανοήσετε καλύτερα τους κινδύνους πριν ξεκινήσετε τις δι
      - paragraph [ref=e688]: "Η Capital Com SV Investments Limited είναι μια εταιρεία που έχει συσταθεί στην Κυπριακή Δημοκρατία με αριθμό μητρώου HE 354252 και έχει λάβει άδεια λειτουργίας και εποπτεύεται από την Επιτροπή Κεφαλαιαγοράς Κύπρου (αριθμός άδειας 319/17). Εγγεγραμμένη έδρα: Η εταιρεία έχει την επωνυμία της και την επωνυμία της: Βασιλείου Μακεδόνος 8, Kinnis Business Center, 2ος όροφος, 3040, Λεμεσός, Κύπρος."
      - paragraph [ref=e689]: "Η Capital Com Group Ltd είναι μια εταιρεία που έχει συσταθεί στην Κυπριακή Δημοκρατία με αριθμό μητρώου ΗΕ 446198 και έχει λάβει άδεια λειτουργίας και εποπτεύεται από την Επιτροπή Κεφαλαιαγοράς Κύπρου (αριθμός άδειας 463/25). Εγγεγραμμένη έδρα: Η εταιρεία έχει την επωνυμία της και την επωνυμία της: Βασιλείου Μακεδόνος 8, Kinnis Business Center, 2ος όροφος, 3040, Λεμεσός, Κύπρος."
      - paragraph [ref=e690]: Οι πληροφορίες σε αυτόν τον ιστότοπο δεν απευθύνονται σε κατοίκους των Ηνωμένων Πολιτειών, του Καναδά και του Βελγίου ή οποιασδήποτε άλλης συγκεκριμένης χώρας εκτός του ΕΟΧ και δεν προορίζονται για διανομή ή χρήση από οποιοδήποτε πρόσωπο σε οποιαδήποτε χώρα ή δικαιοδοσία, όπου η εν λόγω διανομή ή χρήση θα ήταν αντίθετη με την τοπική νομοθεσία ή τους τοπικούς κανονισμούς.
    - generic [ref=e691]:
      - paragraph [ref=e692]: © 2026 Capital Com SV Investments Limited
      - generic [ref=e693]:
        - link "Χάρτης ιστότοπου" [ref=e694] [cursor=pointer]:
          - /url: /el-gr/sitemap
        - link "Ρυθμίσεις cookies" [ref=e695] [cursor=pointer]:
          - /url: ""
        - link "Κανονισμοί" [ref=e696] [cursor=pointer]:
          - /url: /el-gr/terms-and-policies/regulations
        - link "Όροι και Πολιτικές" [ref=e697] [cursor=pointer]:
          - /url: /el-gr/terms-and-policies
        - link "Διαδικασία καταγγελιών" [ref=e698] [cursor=pointer]:
          - /url: /el-gr/terms-and-policies/complaints-procedures
  - generic [ref=e700]:
    - button "Close modal" [ref=e701] [cursor=pointer]
    - generic [ref=e702]:
      - generic [ref=e704]:
        - img [ref=e705]
        - list [ref=e709]:
          - listitem [ref=e710]:
            - generic [ref=e711]: Μία εφαρμογή, 5,500+ αγορές.
          - listitem [ref=e712]:
            - generic [ref=e713]: Υποστήριξη 24/7 για να εξυπηρετηθείτε σε 10+ γλώσσες
          - listitem [ref=e714]:
            - generic [ref=e715]: 75+ δείκτες τεχνικής ανάλυσης
          - listitem [ref=e716]:
            - generic [ref=e717]: Δωρεάν εκπαίδευση στις συναλλαγές για να αναπτύξετε τις δεξιότητές σας
      - generic [ref=e718]:
        - generic [ref=e719]:
          - strong [ref=e720]: Εγγραφή
          - paragraph [ref=e721]:
            - text: Έχετε ήδη λογαριασμό;
            - button "Σύνδεση" [ref=e722] [cursor=pointer]:
              - generic [ref=e723]: Σύνδεση
        - generic [ref=e725]:
          - generic [ref=e726]:
            - button "Διεύθυνση email Εισαγάγετε ένα έγκυρο email" [ref=e727] [cursor=pointer]:
              - button "Διεύθυνση email" [ref=e728]:
                - generic [ref=e729]:
                  - textbox "email" [ref=e730]:
                    - /placeholder: " "
                  - generic: Διεύθυνση email
              - generic:
                - generic:
                  - listitem:
                    - generic: Εισαγάγετε ένα έγκυρο email
            - button "Κωδικός πρόσβασης • Τουλάχιστον ένα ψηφίο • Τουλάχιστον ένα πεζό γράμμα • Τουλάχιστον ένας ειδικός χαρακτήρας • Τουλάχιστον ένα κεφαλαίο γράμμα • Τουλάχιστον 8 χαρακτήρες" [ref=e731] [cursor=pointer]:
              - button "Κωδικός πρόσβασης" [ref=e732]:
                - generic [ref=e733]:
                  - textbox "password" [ref=e734]:
                    - /placeholder: " "
                  - generic: Κωδικός πρόσβασης
              - generic:
                - generic:
                  - listitem:
                    - text: •
                    - generic: Τουλάχιστον ένα ψηφίο
                  - listitem:
                    - text: •
                    - generic: Τουλάχιστον ένα πεζό γράμμα
                  - listitem:
                    - text: •
                    - generic: Τουλάχιστον ένας ειδικός χαρακτήρας
                  - listitem:
                    - text: •
                    - generic: Τουλάχιστον ένα κεφαλαίο γράμμα
                  - listitem:
                    - text: •
                    - generic: Τουλάχιστον 8 χαρακτήρες
          - button "Συνέχεια" [ref=e735] [cursor=pointer]:
            - generic [ref=e736]: Συνέχεια
        - generic [ref=e737]:
          - separator [ref=e738]
          - generic [ref=e739]: Ή
        - generic [ref=e740]:
          - iframe [ref=e743]:
            - button "Sign in with Google. Opens in new tab" [ref=f1e3] [cursor=pointer]:
              - img [ref=f1e7]
          - button [ref=e744] [cursor=pointer]
        - paragraph [ref=e746]:
          - generic [ref=e747]:
            - text: Δημιουργώντας ένα λογαριασμό, επιβεβαιώνω ότι έχω διαβάσει και κατανοώ την
            - strong [ref=e748]:
              - link "Πολιτική Απορρήτου" [ref=e749] [cursor=pointer]:
                - /url: /el-gr/terms-and-policies
  - button [ref=e750] [cursor=pointer]
  - dialog "Cookie banner" [ref=e752]:
    - generic [ref=e753]:
      - paragraph [ref=e755]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e756] [cursor=pointer]:
          - /url: https://capital.com/cookies-policy-gr
          - text: Cookie Policy
        - text: .
      - generic [ref=e757]:
        - button "Reject all" [ref=e758] [cursor=pointer]
        - button "Allow all cookies" [ref=e759] [cursor=pointer]
        - button "Cookie settings" [ref=e760] [cursor=pointer]
  - alert [ref=e761]
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