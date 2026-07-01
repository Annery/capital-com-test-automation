# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/about.spec.ts >> [SCB AR | unregistered] About / Help / Contact us >> [banner_with_steps] -> signUpForm
- Location: src/fixtures/content-section.ts:54:25

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
  - button "تسجيل الدخول"
  - button "افتح حسابًا"
- paragraph:
  - link "الرئيسية":
    - /url: /ar-int
  - text: •تواصل معنا
- heading "تواصل معنا" [level=1]
- paragraph: فريق الدعم لدينا متاح عبر البريد الإلكتروني والهاتف والدردشة المباشرة. نسعى إلى الرد بأسرع وقت ممكن.
- heading "البريد الإلكتروني" [level=3]
- link "support@capital.com":
  - /url: mailto:support@capital.com
- heading "هاتف" [level=3]
- link "97145768641+":
  - /url: tel:+97145768641
- heading "دردشة" [level=3]
- link "واتساب":
  - /url: https://wa.me/447897000276
- heading "مركز الدعم" [level=3]
- link "زيارة":
  - /url: /ar-int/help
- heading "أرسل طلبًا" [level=3]
- link "زيارة":
  - /url: https://help.capitalccbah.com/hc/ar/requests/new
- strong: مكتبنا في جزر البهاما
- paragraph: شركة Capital Com Online Investments محدودة المسؤولية مبنى رقم 3، مجمع بيسايد إكزيكتيف بارك، شارع بليك وتقاطع شارع ويست باي، ص. ب. صندوق بريد رقم CB 13012، ناسو، جزر البهاما
- paragraph
- heading "المزيد عنّا" [level=2]
- heading "مكاتبنا حول العالم" [level=3]
- paragraph: مكاتبنا منتشرة في أوروبا والشرق الأوسط ومنطقة آسيا والمحيط الهادئ. تخضع لرقابة وإشراف الجهات التنظيمية في سبع ولايات قضائية.
- link "عرض جميع المواقع":
  - /url: /ar-int/about-us/our-offices
- heading "من نحن" [level=3]
- paragraph: القصة وراء Capital·com، والرؤية التي تُشكّل آلية عملها، والفريق الذي أسهم في بنائها.
- link "اكتشف المزيد":
  - /url: /ar-int/about-us
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
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=64966e8e-c8cc-4d8e-b0d0-c1a40f3ecfee&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=64966e8e-c8cc-4d8e-b0d0-c1a40f3ecfee&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=64966e8e-c8cc-4d8e-b0d0-c1a40f3ecfee&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
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
  8  | import { TIMEOUTS } from '../config/timeouts';
  9  | 
  10 | const expectedFor = (cta: Cta, state: UserState): ExpectedResult =>
  11 |     cta.external
  12 |         ? 'externalUrl'
  13 |         : state === 'authorized'
  14 |           ? (cta.authorized ?? 'platformPage')
  15 |           : (cta.anonymous ?? 'signUpForm');
  16 | 
  17 | async function expectCtaOutcome(
  18 |     result: ExpectedResult,
  19 |     cta: Cta,
  20 |     {
  21 |         contentPage,
  22 |         signUpModal,
  23 |         page,
  24 |     }: { contentPage: ContentPage; signUpModal: SignUpModal; page: Page },
  25 | ): Promise<void> {
  26 |     if (cta.external) {
  27 |         const popupPromise = page.waitForEvent('popup', { timeout: TIMEOUTS.navigation });
  28 |         await contentPage.clickCta(cta.type);
  29 |         const popup = await popupPromise;
  30 |         await expect(popup).toHaveURL(cta.external, { timeout: TIMEOUTS.navigation });
  31 |         await popup.close();
  32 |         return;
  33 |     }
  34 |     if (result === 'platformPage') {
  35 |         await clickUntilUrl(page, () => contentPage.clickCta(cta.type), PLATFORM_URL);
  36 |     } else {
  37 |         await clickUntilVisible(() => contentPage.clickCta(cta.type), signUpModal.root);
  38 |     }
  39 | }
  40 | 
  41 | export function describeContentSection(section: string, pages: MenuPage[]): void {
  42 |     for (const menuPage of pages) {
  43 |         describePerLocaleState(
  44 |             `${section} / ${menuPage.title}`,
  45 |             userStates,
  46 |             (locale, state) => {
  47 |                 test.beforeEach(async ({ contentPage, dismissInterstitials }) => {
  48 |                     await contentPage.open(menuPage.path);
  49 |                     await dismissInterstitials();
  50 |                 });
  51 | 
  52 |                 for (const cta of menuPage.ctas) {
  53 |                     const result = expectedFor(cta, state);
  54 |                     test(`[${cta.type}] -> ${result}`, async ({
  55 |                         contentPage,
  56 |                         signUpModal,
  57 |                         page,
  58 |                     }) => {
  59 |                         test.skip(
  60 |                             cta.unavailable?.includes(locale.license) ?? false,
  61 |                             `${cta.type} is N/A for ${locale.license}`,
  62 |                         );
  63 | 
> 64 |                         await expect(contentPage.cta(cta.type)).toBeVisible();
     |                                                                 ^ Error: expect(locator).toBeVisible() failed
  65 | 
  66 |                         await expectCtaOutcome(result, cta, {
  67 |                             contentPage,
  68 |                             signUpModal,
  69 |                             page,
  70 |                         });
  71 |                     });
  72 |                 }
  73 |             },
  74 |             menuPage.filter,
  75 |         );
  76 |     }
  77 | }
  78 | 
```