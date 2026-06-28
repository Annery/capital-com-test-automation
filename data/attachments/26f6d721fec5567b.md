# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/pricing.spec.ts >> [SCB AR | authorized] Pricing / Pricing >> [banner_with_steps] -> platformPage
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
  - text: عقود الفروقات هي أدوات مالية معقدة تنطوي على مخاطر عالية قد تؤدي إلى خسارة سريعة للأموال بسبب الرافعة المالية..
  - strong: وتجدر الإشارة إلى أن %78.48 من حسابات المستثمرين الأفراد تخسر الأموال عند تداول عقود الفروقات مع مقدم الخدمة هذا
  - text: . يجب أن تفكر مليّا فيما إذا كنت قادرًا على تحمّل مخاطر عالية قد تؤدي إلى خسارة أموالك. يُرجى قراءة بيان الإفصاح عن المخاطر الخاص بنا بعناية
  - link:
    - /url: /ar-int
    - img
  - navigation:
    - button "التداول":
      - button "التداول"
    - button "الأسواق":
      - button "الأسواق"
    - link "التسعير":
      - /url: /ar-int/ways-to-trade/fees-and-charges
    - button "من نحن":
      - button "من نحن"
  - button "ar"
  - link "افتح المنصة":
    - /url: /trading/platform/
- paragraph:
  - link "الرئيسية":
    - /url: /ar-int
  - text: •
  - link "التداول":
    - /url: /ar-int/ways-to-trade
  - text: •التسعير
- heading "الرسوم والتكاليف" [level=1]
- paragraph: يتم توضيح جميع الرسوم والتكاليف والإفصاح عنها قبل فتح أي مركز مالي.
- main:
  - heading "رسوم الحساب" [level=2]
  - table:
    - rowgroup:
      - row "فتح الحساب دون رسوم":
        - cell "فتح الحساب":
          - paragraph:
            - strong: فتح الحساب
        - cell "دون رسوم":
          - paragraph:
            - strong: دون رسوم
      - row "إغلاق الحساب دون رسوم":
        - cell "إغلاق الحساب":
          - paragraph:
            - strong: إغلاق الحساب
        - cell "دون رسوم":
          - paragraph:
            - strong: دون رسوم
      - row "الحساب التجريبي دون رسوم":
        - cell "الحساب التجريبي":
          - paragraph:
            - strong: الحساب التجريبي
        - cell "دون رسوم":
          - paragraph:
            - strong: دون رسوم
  - heading "رسوم الإيداع والسحب" [level=2]
  - table:
    - rowgroup:
      - row "رسوم الإيداع دون رسوم":
        - cell "رسوم الإيداع":
          - paragraph:
            - strong: رسوم الإيداع
        - cell "دون رسوم":
          - paragraph:
            - strong: دون رسوم
      - row "الحد الأدنى للإيداع 10 USD/EUR/GBP عبر البطاقات البنكية وApple Pay.* *تختلف حدود الإيداع الدنيا بحسب طريقة الدفع. الحد الأدنى للتحويلات البنكية هو 50 EUR أو ما يعادله بعملة الحساب الأساسية.":
        - cell "الحد الأدنى للإيداع":
          - paragraph:
            - strong: الحد الأدنى للإيداع
        - cell "10 USD/EUR/GBP عبر البطاقات البنكية وApple Pay.* *تختلف حدود الإيداع الدنيا بحسب طريقة الدفع. الحد الأدنى للتحويلات البنكية هو 50 EUR أو ما يعادله بعملة الحساب الأساسية.":
          - paragraph:
            - strong: 10 USD/EUR/GBP عبر البطاقات البنكية وApple Pay.*
          - paragraph:
            - strong: "*تختلف حدود الإيداع الدنيا بحسب طريقة الدفع. الحد الأدنى للتحويلات البنكية هو 50 EUR أو ما يعادله بعملة الحساب الأساسية."
      - row "رسوم السحب دون رسوم":
        - cell "رسوم السحب":
          - paragraph:
            - strong: رسوم السحب
        - cell "دون رسوم":
          - paragraph:
            - strong: دون رسوم
      - row "الحد الأدنى للسحب 20 USD/EUR/GBP عبر البطاقات البنكية* *تختلف حدود السحب الدنيا بحسب طريقة الدفع. التفاصيل الكاملة متوفرة ⁦]⁩هنا]. في حال انخفاض رصيد حسابك عن الحد الأدنى المسموح به للسحب، يمكنك فقط سحب الرصيد الإجمالي بالكامل.":
        - cell "الحد الأدنى للسحب":
          - strong: الحد الأدنى للسحب
        - cell "20 USD/EUR/GBP عبر البطاقات البنكية* *تختلف حدود السحب الدنيا بحسب طريقة الدفع. التفاصيل الكاملة متوفرة ⁦]⁩هنا]. في حال انخفاض رصيد حسابك عن الحد الأدنى المسموح به للسحب، يمكنك فقط سحب الرصيد الإجمالي بالكامل.":
          - paragraph:
            - strong: 20 USD/EUR/GBP عبر البطاقات البنكية*
          - paragraph:
            - strong:
              - text: "*تختلف حدود السحب الدنيا بحسب طريقة الدفع. التفاصيل الكاملة متوفرة ⁦]"
              - link "⁩هنا":
                - /url: https://help.capitalccbah.com/hc/ar/articles/9626872797074-What-is-the-minimum-withdrawal-amount
              - text: "]. في حال انخفاض رصيد حسابك عن الحد الأدنى المسموح به للسحب، يمكنك فقط سحب الرصيد الإجمالي بالكامل."
  - heading "رسوم التداول" [level=2]
  - table:
    - rowgroup:
      - row "فروق الأسعار تمثّل فروق الأسعار الفرق بين سعر شراء الأداة المالية وسعر بيعها. وتمثّل تكلفة تنفيذ الصفقة. ⁦⁩اكتشف المزيد تتغيّر فروق الأسعار بشكل ديناميكي تبعاً لظروف السوق الأساسية. اطّلع على فروق الأسعار الخاصة بكل أداة مالية ⁦⁩هنا.":
        - cell "فروق الأسعار تمثّل فروق الأسعار الفرق بين سعر شراء الأداة المالية وسعر بيعها. وتمثّل تكلفة تنفيذ الصفقة. ⁦⁩اكتشف المزيد":
          - paragraph:
            - strong: فروق الأسعار
            - text: تمثّل فروق الأسعار الفرق بين سعر شراء الأداة المالية وسعر بيعها. وتمثّل تكلفة تنفيذ الصفقة.
          - paragraph:
            - text: ⁦
            - link "⁩اكتشف المزيد":
              - /url: /ar-int/ways-to-trade/fees-and-charges#part_3
        - cell "تتغيّر فروق الأسعار بشكل ديناميكي تبعاً لظروف السوق الأساسية. اطّلع على فروق الأسعار الخاصة بكل أداة مالية ⁦⁩هنا.":
          - paragraph:
            - text: تتغيّر فروق الأسعار بشكل ديناميكي تبعاً لظروف السوق الأساسية. اطّلع على فروق الأسعار الخاصة بكل أداة مالية ⁦
            - link "⁩هنا":
              - /url: /ar-int/ways-to-trade/fees-and-charges#part_3
            - text: .
      - row "عمولة التداول دون رسوم":
        - cell "عمولة التداول":
          - paragraph:
            - strong: عمولة التداول
        - cell "دون رسوم":
          - paragraph:
            - strong: دون رسوم
      - row "رسوم التبييت* تسوية فائدة تُطبَّق عند الاحتفاظ بمركز مالي لليوم التالي. *لا تخضع مراكز عقود الفروقات ذات الرافعة المالية 1:1 (من دون رافعة مالية) لرسوم التبييت، باستثناء عدد محدود من الأسواق. يتم دفع هذه الرسوم أو استلامها بناءً على اتجاه المركز المفتوح. الرسوم الخاصة بكل أداة مالية مُدرَجة في جدول الأدوات أدناه.":
        - cell "رسوم التبييت* تسوية فائدة تُطبَّق عند الاحتفاظ بمركز مالي لليوم التالي. *لا تخضع مراكز عقود الفروقات ذات الرافعة المالية 1:1 (من دون رافعة مالية) لرسوم التبييت، باستثناء عدد محدود من الأسواق.":
          - paragraph:
            - strong: رسوم التبييت*
            - text: تسوية فائدة تُطبَّق عند الاحتفاظ بمركز مالي لليوم التالي. *لا تخضع مراكز عقود الفروقات ذات الرافعة المالية 1:1 (من دون رافعة مالية) لرسوم التبييت، باستثناء عدد محدود من الأسواق.
        - cell "يتم دفع هذه الرسوم أو استلامها بناءً على اتجاه المركز المفتوح. الرسوم الخاصة بكل أداة مالية مُدرَجة في جدول الأدوات أدناه.":
          - paragraph: يتم دفع هذه الرسوم أو استلامها بناءً على اتجاه المركز المفتوح. الرسوم الخاصة بكل أداة مالية مُدرَجة في جدول الأدوات أدناه.
      - row "تحويل العملات تُطبَّق رسوم تحويل عند التداول في أسواق مُقوَّمة بعملة تختلف عن عملة حساب التداول. يُطبَّق هامش زيادة سعر الصرف نفسه عند تحويل الأموال بين الحسابات الفرعية بعملات مختلفة. %0.7 من سعر الصرف الفوري للعملاء الأفراد %0.5 من سعر الصرف الفوري للعملاء المحترفين":
        - cell "تحويل العملات تُطبَّق رسوم تحويل عند التداول في أسواق مُقوَّمة بعملة تختلف عن عملة حساب التداول. يُطبَّق هامش زيادة سعر الصرف نفسه عند تحويل الأموال بين الحسابات الفرعية بعملات مختلفة.":
          - paragraph:
            - strong: تحويل العملات
            - text: تُطبَّق رسوم تحويل عند التداول في أسواق مُقوَّمة بعملة تختلف عن عملة حساب التداول.
          - paragraph: يُطبَّق هامش زيادة سعر الصرف نفسه عند تحويل الأموال بين الحسابات الفرعية بعملات مختلفة.
        - cell "%0.7 من سعر الصرف الفوري للعملاء الأفراد %0.5 من سعر الصرف الفوري للعملاء المحترفين":
          - strong: "%0.7 من سعر الصرف الفوري للعملاء الأفراد %0.5 من سعر الصرف الفوري للعملاء المحترفين"
      - row "أوامر وقف الخسارة المضمونة (GSLs)* يُغلق أمر وقف الخسارة المضمونة المركز المالي عند السعر المحدد، مما يلغي مخاطر الانزلاق السعري عند التنفيذ. تُطبَّق رسوم عند تفعيل الأمر. ⁦⁩اكتشف المزيد تختلف رسوم أمر وقف الخسارة المضمونة (GSL) بحسب السوق وسعر الدخول وحجم المركز المالي. تظهر الرسوم في تذكرة الصفقة قبل فتح المركز المالي.":
        - cell "أوامر وقف الخسارة المضمونة (GSLs)* يُغلق أمر وقف الخسارة المضمونة المركز المالي عند السعر المحدد، مما يلغي مخاطر الانزلاق السعري عند التنفيذ. تُطبَّق رسوم عند تفعيل الأمر. ⁦⁩اكتشف المزيد":
          - paragraph:
            - strong: أوامر وقف الخسارة المضمونة (GSLs)*
            - text: يُغلق أمر وقف الخسارة المضمونة المركز المالي عند السعر المحدد، مما يلغي مخاطر الانزلاق السعري عند التنفيذ. تُطبَّق رسوم عند تفعيل الأمر.
          - paragraph:
            - text: ⁦
            - link "⁩اكتشف المزيد":
              - /url: /ar-int/ways-to-trade/fees-and-charges#part_5
        - cell "تختلف رسوم أمر وقف الخسارة المضمونة (GSL) بحسب السوق وسعر الدخول وحجم المركز المالي. تظهر الرسوم في تذكرة الصفقة قبل فتح المركز المالي.":
          - paragraph: تختلف رسوم أمر وقف الخسارة المضمونة (GSL) بحسب السوق وسعر الدخول وحجم المركز المالي. تظهر الرسوم في تذكرة الصفقة قبل فتح المركز المالي.
  - heading "فروق الأسعار ورسوم التبييت حسب الأداة المالية" [level=2]
  - button "الكل الكل السلع العملات المشفّرة الفوركس المؤشرات الأسهم السندات أسعار الفائدة":
    - button "الكل":
      - textbox "name": الكل
    - button "الكل"
    - button "السلع"
    - button "العملات المشفّرة"
    - button "الفوركس"
    - button "المؤشرات"
    - button "الأسهم"
    - button "السندات"
    - button "أسعار الفائدة"
  - button:
    - textbox "marketlist_search":
      - /placeholder: Search
  - separator
  - text: الاسم بيع شراء السبريد رسوم تمويل التبييت لصفقات الشراء رسوم تمويل التبييت لصفقات البيع على المكشوف رسم وقف الخسارة المضمون
  - link "Gold Gold Spot 4090.06 4090.56 0.50 -0.01553% 0.00731% 0.03":
    - /url: /ar-int/markets/commodities/gold-spot-sl-t
  - link "US100 US Tech 100 28991.5 28993.3 1.8 -0.02154% -0.00068% 0.02":
    - /url: /ar-int/markets/indices/us-tech-100-mwshr-1
  - link "BTC/USD Bitcoin to US Dollar 59399.30 59449.30 50.00 -0.06164% 0.01370% 0.25":
    - /url: /ar-int/markets/cryptocurrencies/bitcoin-to-us-dollar-alrsm-albyany
  - link "XRP/USD Ripple to US Dollar 1.04083 1.04605 0.00522 -0.06164% 0.01370% 0.25":
    - /url: /ar-int/markets/cryptocurrencies/ripple-to-us-dollar-alrsm-albyany
  - link "ETH/USD Ethereum to US Dollar 1566.26 1568.01 1.75 -0.06164% 0.01370% 0.25":
    - /url: /ar-int/markets/cryptocurrencies/ethereum-to-us-dollar-alrsm-albyany
  - link "Oil - Crude US Crude Oil Spot 70.141 70.173 0.032 -0.01096% -0.01096% 0.03":
    - /url: /ar-int/markets/commodities/us-crude-oil-spot-sl-t-1
  - link "Silver Silver Spot 59.214 59.294 0.080 -0.01557% 0.00735% 0.03":
    - /url: /ar-int/markets/commodities/silver-spot-sl-t
  - text: الأسعار الموضحة للأسهم هي أرقام استرشادية، وقد تختلف عن الأسعار اللحظية في السوق.
  - heading "رسوم فروق الأسعار" [level=2]
  - paragraph: تمثّل رسوم فروق الأسعار الفرق بين سعر البيع (Bid) وسعر الشراء (Ask) للأداة المالية. يكون سعر الشراء (Ask) أعلى دائماً من سعر البيع (Bid)، مما يعني أن السوق يجب أن يتحرّك بما يتجاوز فروق الأسعار قبل أن يتحوّل المركز المالي إلى الربحية.
  - paragraph: تعكس فروق الأسعار ظروف السوق الأساسية، بما في ذلك العرض والطلب والسيولة. تميل فروق الأسعار إلى أن تكون أضيق في الأسواق الأعلى سيولة.
  - heading "مثال على فروق الأسعار في تداول عقود الفروقات" [level=3]
  - list:
    - listitem: • يتم الاحتفاظ بعقد واحد على مؤشر US Tech 100، والمُسعَّر عند 12475/76.
    - listitem: • تبلغ فروق الأسعار 1 نقطة.
    - listitem: • يتم دفع نصف فروق الأسعار عند فتح المركز المالي، والنصف الآخر عند إغلاقه. تبلغ التكلفة الإجمالية لفروق الأسعار ‎£1 × 1 نقطة = ‎£1.
  - heading "رسوم التبييت" [level=2]
  - paragraph: عند الاحتفاظ بمركز مالي لليوم التالي، تُطبَّق تسوية على أسعار الفائدة. يعتمد دفع هذا المبلغ أو استلامه على اتجاه المركز المالي والسعر الأساسي. تعتمد آلية الاحتساب على معدلات محددة وعوامل السوق، كما هو موضّح في الأمثلة أدناه.
  - paragraph: "في معظم الأسواق، لا تترتب رسوم تبييت على مراكز عقود الفروقات ذات الرافعة المالية 1:1 (من دون رافعة مالية). تُستثنى الأدوات المالية التالية، حيث تُطبَّق رسوم التبييت بغضّ النظر عن الرافعة المالية:"
  - list:
    - listitem: • الغاز الطبيعي
    - listitem: • الكاكاو الأمريكي
    - listitem: • مؤشر التقلبات (VIX)
    - listitem: • أزواج الفوركس التي تتضمن الليرة التركية (TRY)
  - button "المؤشرات"
  - button "السلع"
  - button "الفوركس"
  - button "الأسهم"
  - button "العملات المشفّرة"
  - button "السندات/أسعار الفائدة"
  - heading "المعادلة" [level=3]
  - paragraph: رسومنا اليومية +/- سعر الفائدة المرجعي
  - paragraph: يتبع المؤشر المرجعي* عملة السوق الأساسية. تعتمد المؤشرات المُقوَّمة بالدولار الأمريكي على سعر التمويل المضمون لليلة واحدة (SOFR). تعتمد المؤشرات المُقوَّمة بالجنيه الإسترليني على متوسط مؤشر أسعار الفائدة لليلة واحدة بالجنيه الإسترليني (SONIA).
  - paragraph: "تبلغ رسومنا اليومية 4% سنويًا. يُقسَّم المعدل السنوي على 360 أو 365 يومًا بحسب ما هو متعارف عليه بالنسبة للعملة:"
  - paragraph: "الجنيه الإسترليني (GBP) والدولار الكندي (CAD) والدولار السنغافوري (SGD) والعملات المشابهة: 4% ÷ 365 = 0.01096% يوميًا. الدولار الأمريكي (USD) واليورو (EUR) والفرنك السويسري (CHF) والين الياباني (JPY) والعملات المشابهة: 4% ÷ 360 = 0.01111% يوميًا"
  - paragraph: يتوافق المقسوم عليه مع معيار احتساب الأيام المُعتمد في سوق كل عملة.
  - paragraph: "*يتضمّن سعر الفائدة المرجعي المعني بالفعل تسوية أساسية على فروق الأسعار. وينعكس ذلك ضمن السعر المُعلن (مثل SOFR أو SONIA)."
  - heading "مثال على عقود الفروقات" [level=3]
  - list:
    - listitem: • يتم الاحتفاظ بـ 0.6 لوت على مؤشر US Tech 100، والمُسعَّر عند 20,140. يبلغ إجمالي التعرّض للسوق 12,084$.
    - listitem: • يُقوَّم مؤشر US Tech 100 بالدولار الأمريكي. معدل الفائدة المرجعي المعني هو SOFR، ويُفترض هنا أن يبلغ 5.01448% سنويًا، أو 0.01393% يوميًا.
    - listitem: • تبلغ الرسوم اليومية على المنصة 0.01111%.
    - listitem: "• بالنسبة إلى مركز شراء: 0.02504% (SOFR + رسوم المنصة) = دفع 3.03$."
    - listitem: "• بالنسبة إلى مركز بيع: 0.00282% (SOFR − رسوم المنصة) = استلام 0.34$."
  - heading "رسوم أمر وقف الخسارة المضمون" [level=2]
  - paragraph: يُغلق أمر وقف الخسارة المركز المالي عند مستوى محدد. التنفيذ بالسعر المحدد تماماً ليس مضمونًا؛ إذ قد يتم التنفيذ عند السعر التالي المتاح في حال حدوث فجوة سعريّة في السوق. قد يحدث انزلاق سعري في حالات تقلبات السوق أو انخفاض السيولة.
  - paragraph: يُغلق أمر وقف الخسارة المضمون (GSL) المركز المالي عند السعر المحدد تمامًا، بغضّ النظر عن الانزلاق السعري أو الفجوات السعرية في السوق. تُطبَّق رسوم عند تفعيل الأمر.
  - paragraph: "يتم حساب رسوم أمر GSL عن طريق ضرب ثلاثة مكونات: التكلفة الإضافية لـ GSL (بالنسبة المئوية) وسعر افتتاح المركز والكمية."
  - strong: رسوم GSL = التكلفة الإضافية لوقف الخسارة المضمون × سعر افتتاح المركز × الكمية
  - paragraph: تظهر رسوم GSL المطبّقة في تذكرة الصفقة عند اختيار أمر GSL.
  - heading "رسوم تحويل العملات" [level=2]
  - paragraph: تُطبَّق عند تنفيذ معاملة بعملة تختلف عن عملة الحساب الأساسية. تُضمَّن الرسوم في سعر الصرف المُستخدم في التحويل، ولا تُفرض بشكل منفصل. يتحمّل العملاء تكلفة إضافية بنسبة 0.7%.
  - paragraph: "تُطبَّق على:"
  - list:
    - listitem: • الأرباح والخسائر المُحقَّقة
    - listitem: • تسويات رسوم التبييت
    - listitem: • أوامر وقف الخسارة المضمونة
    - listitem: • توزيعات الأرباح
    - listitem: • عمليات تحويل العملات المستقلة (التحويل اليدوي لرصيد الحساب)
  - heading "مثال — إغلاق صفقة تداول" [level=3]
  - list:
    - listitem: "• عملة الحساب الأساسية: USD. أُغلقَت صفقة على أسهم أوروبية بربح قدره 10.00€."
    - listitem: "• وفقًا لسعر الصرف الفوري (1.1300): ‏11.30$"
    - listitem: "• وفقًا للسعر الإجمالي شاملًا رسوم 0.7% (1.1221): ‏11.22$"
    - listitem: "• رسوم التحويل: ‏0.08$"
  - heading "مثال — تسوية رسوم التبييت" [level=3]
  - list:
    - listitem: "• مركز مالي على أسهم أوروبية. تطبيق تسوية رسوم التبييت باليورو: -4.00€"
    - listitem: "• وفقًا لسعر الصرف الفوري (1.1300): 4.52$"
    - listitem: "• وفقًا للسعر الإجمالي شاملًا رسوم 0.7% (1.1379): 4.55$"
    - listitem: "• رسوم التحويل: 0.03$"
  - paragraph: يظهر سعر الصرف الإجمالي المُستخدم في كل عملية تحويل ضمن قسم التقارير وعند إغلاق المركز المالي.
  - heading "المزيد من المعلومات حول التسعير" [level=2]
  - heading "فهم آلية التسعير لدى Capital.com" [level=3]
  - paragraph: شرح تفصيلي لجميع التكاليف المُطبَّقة عند التداول معنا.
  - link "اقرأ المزيد":
    - /url: /ar-int/ways-to-trade/pricing
- complementary:
  - navigation:
    - strong: المحتويات
    - separator
    - link "رسوم الحساب":
      - /url: "#part_0"
    - link "رسوم الإيداع والسحب":
      - /url: "#part_1"
    - link "رسوم التداول":
      - /url: "#part_2"
    - link "رسوم فروق الأسعار":
      - /url: "#part_3"
    - link "رسوم التبييت":
      - /url: "#part_4"
    - link "رسوم أمر وقف الخسارة المضمون":
      - /url: "#part_5"
    - link "رسوم تحويل العملات":
      - /url: "#part_6"
- contentinfo:
  - link:
    - /url: /ar-int
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
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "البلد / المنطقة:"
  - button "Egypt"
  - text: "• اللغة:"
  - button "Arabic"
  - text: "كما يمكنك الاتصال بنا على:"
  - link "+971 4 576 8641":
    - /url: tel:+971 4 576 8641
    - strong: +971 4 576 8641
    - strong
  - text: •
  - link "support@capital.com":
    - /url: mailto:support@capital.com
    - strong: support@capital.com
  - strong: التداول
  - text: التداول
  - link "تداول عقود الفروقات":
    - /url: /ar-int/ways-to-trade/cfd-trading
  - link "حاسبة تداول عقود الفروقات":
    - /url: /ar-int/ways-to-trade/cfd-trading/cfd-calculator
  - link "التداول التجريبي":
    - /url: /ar-int/trading-platforms/demo-account
  - link "احترافي":
    - /url: /ar-int/professional
  - link "حسومات نقدية لجميع المتداولين":
    - /url: /ar-int/ways-to-trade/rebates
  - text: المنصات
  - link "منصة الويب":
    - /url: /ar-int/trading-platforms/web-platform
  - link "تطبيقات الهاتف المحمول للتداول":
    - /url: /ar-int/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /ar-int/trading-platforms/trading-view
  - link "MT4":
    - /url: /ar-int/trading-platforms/mt4
  - link "MT5":
    - /url: /ar-int/trading-platforms/mt5
  - text: تعلّم التداول
  - link "استراتيجيات التداول":
    - /url: /ar-int/learn/trading-strategies
  - link "التحليل الفني":
    - /url: /ar-int/learn/technical-analysis
  - link "سيكولوجية التداول":
    - /url: /ar-int/learn/trading-psychology
  - link "تعلّم التداول":
    - /url: /ar-int/learn
  - link "التداول على الطروحات العامة الأولية (IPO)":
    - /url: /ar-int/learn/ipo
  - strong: الأسواق
  - text: أسواقنا
  - link "الأسواق":
    - /url: /ar-int/markets
  - link "الأسهم":
    - /url: /ar-int/markets/shares
  - link "الفوركس":
    - /url: /ar-int/markets/forex
  - link "المؤشرات":
    - /url: /ar-int/markets/indices
  - link "السلع":
    - /url: /ar-int/markets/commodities
  - link "العملات المشفّرة":
    - /url: /ar-int/markets/cryptocurrencies
  - link "السندات":
    - /url: /ar-int/markets/bonds
  - link "أسعار الفائدة":
    - /url: /ar-int/markets/interest-rates
  - text: رؤى السوق
  - link "تحليل السوق":
    - /url: /ar-int/analysis
  - link "التسعير":
    - /url: /ar-int/ways-to-trade/fees-and-charges
    - strong: التسعير
  - strong: من نحن
  - text: من نحن
  - link "من نحن":
    - /url: /ar-int/about-us
  - link "مكاتبنا":
    - /url: /ar-int/about-us/our-offices
  - link "هل capital.com آمن؟":
    - /url: /ar-int/security-measures
  - link "نموذج أعمالنا":
    - /url: /ar-int/about-us/how-capital-makes-money
  - text: اعمل معنا
  - link "برامج الشراكة":
    - /url: /ar-int/partnerships
  - link "احالة صديق":
    - /url: /ar-int/refer-a-friend
  - text: المساعدة
  - link "المساعدة":
    - /url: /ar-int/help
  - link "تعرّض العملاء للمخاطر":
    - /url: /ar-int/help/client-vulnerability
  - link "تواصل معنا":
    - /url: /ar-int/contact-us
  - text: قانوني
  - link "الشروط والسياسات":
    - /url: /ar-int/terms-and-policies
  - link "الشكاوى":
    - /url: /ar-int/help/complaints
  - paragraph:
    - text: عقود الفروقات هي أدوات مالية معقدة تنطوي على مخاطر عالية قد تؤدي إلى خسارة سريعة للأموال بسبب الرافعة المالية..
    - strong: وتجدر الإشارة إلى أن %78.48 من حسابات المستثمرين الأفراد تخسر الأموال عند تداول عقود الفروقات مع مقدم الخدمة هذا
    - text: . يجب أن تفكر مليّا فيما إذا كنت قادرًا على تحمّل مخاطر عالية قد تؤدي إلى خسارة أموالك. يُرجى قراءة بيان الإفصاح عن المخاطر الخاص بنا بعناية
  - paragraph
  - paragraph: شركة Capital Com Online Investments Ltd هي شركة ذات مسؤولية محدودة تحمل رقم 209236B، وهي مُسجلة في كومنولث جزر البهاما ومُرخصة من قبل هيئة الأوراق المالية في جزر البهاما تحت رقم ترخيص SIA-F245. يقع المكتب المُسجّل للشركة في 3 بايسايد إكزكيوتيف بارك، شارع بليك-ويست باي، ص. ب. 13012، ناسو، جزر البهاما.
  - paragraph: © 2026 Capital Com Online Investments Ltd
  - link "خريطة الموقع":
    - /url: /ar-int/sitemap
  - link "إعدادات ملفات تعريف الارتباط":
    - /url: ""
  - link:
    - /url: /ar-int
  - link "الشروط والسياسات":
    - /url: /ar-int/terms-and-policies
  - link "إجراءات تقديم الشكاوى (SCB)":
    - /url: /ar-int/help/complaints
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