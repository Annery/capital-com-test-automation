# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/about.spec.ts >> [SCB ZH_HANS | unregistered] About / Help / Help centre >> [banner_with_steps] -> signUpForm
- Location: src/fixtures/content-section.ts:41:25

# Error details

```
Error: Timeout 15000ms exceeded while waiting on the predicate
```

```
Error: locator.scrollIntoViewIfNeeded: Test ended.
Call log:
  - waiting for locator('[data-sentry-component="Modal"]').filter({ has: locator('[data-type="closed_countries_disclaimer_confirm"]') }).locator('p').last()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]:
      - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。
      - generic [ref=e8]:
        - text: 数据显示，
        - strong [ref=e9]: 78.48% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
        - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
    - generic [ref=e11]:
      - link [ref=e12] [cursor=pointer]:
        - /url: /zh-hans
        - img [ref=e13]
      - generic [ref=e18]:
        - navigation [ref=e19]:
          - button "交易" [ref=e20]:
            - button "交易" [ref=e21]:
              - generic [ref=e22]: 交易
          - button "市场" [ref=e23]:
            - button "市场" [ref=e24]:
              - generic [ref=e25]: 市场
          - link "定价" [ref=e28] [cursor=pointer]:
            - /url: /zh-hans/ways-to-trade/fees-and-charges
          - button "关于我们" [ref=e29]:
            - button "关于我们" [ref=e30]:
              - generic [ref=e31]: 关于我们
        - button "zh" [ref=e32] [cursor=pointer]:
          - generic [ref=e34]: zh
      - generic [ref=e36]:
        - button "登录" [ref=e37] [cursor=pointer]: 登录
        - button "开立账户" [ref=e38] [cursor=pointer]: 开立账户
  - generic [ref=e39]:
    - paragraph [ref=e42]:
      - generic [ref=e43]:
        - link "首页" [ref=e44] [cursor=pointer]:
          - /url: /zh-hans
        - text: •
      - text: 帮助
    - generic [ref=e45]:
      - generic [ref=e51]:
        - heading "支持中心" [level=1] [ref=e52]
        - paragraph [ref=e54]: 关于账户、交易和平台，您需要了解的信息都可在这里找到。
      - generic [ref=e58]:
        - generic [ref=e60]:
          - heading "我的账户" [level=3] [ref=e61]
          - paragraph [ref=e63]: 身份验证、账户类型及资料更新。
          - link "了解更多" [ref=e64] [cursor=pointer]:
            - /url: https://help.capitalccbah.com/hc/zh-tw/categories/9622507722258-My-account
            - generic [ref=e65]: 了解更多
        - generic [ref=e67]:
          - heading "存入资金和提取资金" [level=3] [ref=e68]
          - paragraph [ref=e70]: 了解如何向账户存入资金和提取资金。
          - link "了解更多" [ref=e71] [cursor=pointer]:
            - /url: https://help.capitalccbah.com/hc/zh-tw/categories/9622481728402-Deposits-Withdrawals
            - generic [ref=e72]: 了解更多
        - generic [ref=e74]:
          - heading "平台和图表" [level=3] [ref=e75]
          - paragraph [ref=e77]: 图表、指标、工具、MT4 和 TradingView。
          - link "了解更多" [ref=e78] [cursor=pointer]:
            - /url: https://help.capitalccbah.com/hc/zh-tw/categories/19760775675538-Platforms-charts
            - generic [ref=e79]: 了解更多
        - generic [ref=e81]:
          - heading "交易" [level=3] [ref=e82]
          - paragraph [ref=e84]: 服务费用、杠杆以及可交易市场。
          - link "了解更多" [ref=e85] [cursor=pointer]:
            - /url: https://help.capitalccbah.com/hc/zh-tw/categories/9622481017234-Trading
            - generic [ref=e86]: 了解更多
        - generic [ref=e88]:
          - heading "更新" [level=3] [ref=e89]
          - paragraph [ref=e91]: 交易时段、股息和市场更新。
          - link "了解更多" [ref=e92] [cursor=pointer]:
            - /url: https://help.capitalccbah.com/hc/en-us/categories/30655309642258-Updates
            - generic [ref=e93]: 了解更多
        - generic [ref=e95]:
          - heading "追加保证金通知说明" [level=3] [ref=e96]
          - paragraph [ref=e98]: 了解追加保证金通知是什么、为何会出现，以及如何进行管理。
          - link "了解更多" [ref=e99] [cursor=pointer]:
            - /url: /zh-hans/ways-to-trade/margin-calls
            - generic [ref=e100]: 了解更多
      - generic [ref=e102]:
        - heading "联系我们" [level=2] [ref=e104]
        - generic [ref=e105]:
          - generic [ref=e107]:
            - heading "电子邮件" [level=3] [ref=e108]
            - paragraph [ref=e110]:
              - link "support@capital.com" [ref=e111] [cursor=pointer]:
                - /url: mailto:support@capital.com
          - generic [ref=e113]:
            - heading "致电" [level=3] [ref=e114]
            - paragraph [ref=e116]: +852 2435 1640
          - generic [ref=e118]:
            - heading "提交请求" [level=3] [ref=e119]
            - paragraph [ref=e121]:
              - text: 找不到所需内容？
              - link "直接提交" [ref=e122] [cursor=pointer]:
                - /url: https://help.capitalccbah.com/hc/zh-tw/requests/new
              - text: 请求。
      - generic [ref=e125]:
        - heading "三步即可开始交易" [level=2] [ref=e127]
        - generic [ref=e128]:
          - button [ref=e130] [cursor=pointer]
          - generic [ref=e133]: 1. 创建您的账户（须符合资格要求）
          - generic [ref=e134]: 2. 按您的方式存款
          - generic [ref=e135]: 3. 准备就绪后即可开始交易
  - contentinfo [ref=e137]:
    - generic [ref=e138]:
      - link [ref=e139] [cursor=pointer]:
        - /url: /zh-hans
        - img [ref=e140]
      - generic [ref=e144]:
        - link [ref=e145] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e146] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e147] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e148] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e149] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e150] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e151]:
        - link [ref=e152] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=d59cfadd-9f83-415c-b0e7-fdf6149ce09c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e153] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=d59cfadd-9f83-415c-b0e7-fdf6149ce09c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e154] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=d59cfadd-9f83-415c-b0e7-fdf6149ce09c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e155]:
      - generic [ref=e156]:
        - generic [ref=e157]:
          - generic [ref=e158]:
            - generic [ref=e159]: "国家/地区:"
            - button "Singapore" [ref=e160] [cursor=pointer]:
              - generic [ref=e162]: Singapore
          - generic [ref=e163]: •
          - generic [ref=e164]:
            - generic [ref=e165]: "语言:"
            - button "Simplified Chinese" [ref=e166] [cursor=pointer]:
              - generic [ref=e167]: Simplified Chinese
        - generic [ref=e168]:
          - generic [ref=e169]: 您还可以联系：
          - link "+65 3125 2302" [ref=e172] [cursor=pointer]:
            - /url: tel:+65 3125 2302
            - strong [ref=e173]: +65 3125 2302
            - strong
          - generic [ref=e174]: •
          - link "support@capital.com" [ref=e176] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e177]: support@capital.com
      - generic [ref=e178]:
        - generic [ref=e179]:
          - strong [ref=e181]: 交易
          - generic [ref=e182]:
            - generic [ref=e183]:
              - generic [ref=e184]: 交易
              - generic [ref=e185]:
                - link "差价合约 (CFD)交易" [ref=e187] [cursor=pointer]:
                  - /url: /zh-hans/ways-to-trade/cfd-trading
                - link "模拟交易" [ref=e189] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/demo-account
                - link "专业账户" [ref=e191] [cursor=pointer]:
                  - /url: /zh-hans/professional
            - generic [ref=e192]:
              - generic [ref=e193]: 平台
              - generic [ref=e194]:
                - link "网页版平台" [ref=e196] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/web-platform
                - link "手机 App" [ref=e198] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mobile-apps
                - link "TradingView" [ref=e200] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/trading-view
                - link "MT4" [ref=e202] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt4
                - link "MT5" [ref=e204] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt5
            - generic [ref=e205]:
              - generic [ref=e206]: 学习
              - generic [ref=e207]:
                - link "交易策略" [ref=e209] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-strategies
                - link "技术分析" [ref=e211] [cursor=pointer]:
                  - /url: /zh-hans/learn/technical-analysis
                - link "交易心理" [ref=e213] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-psychology
                - link "学习" [ref=e215] [cursor=pointer]:
                  - /url: /zh-hans/learn
        - generic [ref=e216]:
          - strong [ref=e218]: 市场
          - generic [ref=e219]:
            - generic [ref=e220]:
              - generic [ref=e221]: 我们的市场
              - generic [ref=e222]:
                - link "市场" [ref=e224] [cursor=pointer]:
                  - /url: /zh-hans/markets
                - link "股票" [ref=e226] [cursor=pointer]:
                  - /url: /zh-hans/markets/shares
                - link "外汇" [ref=e228] [cursor=pointer]:
                  - /url: /zh-hans/markets/forex
                - link "指数" [ref=e230] [cursor=pointer]:
                  - /url: /zh-hans/markets/indices
                - link "大宗商品" [ref=e232] [cursor=pointer]:
                  - /url: /zh-hans/markets/commodities
                - link "加密货币" [ref=e234] [cursor=pointer]:
                  - /url: /zh-hans/markets/cryptocurrencies
                - link "债券" [ref=e236] [cursor=pointer]:
                  - /url: /zh-hans/markets/bonds
                - link "利率" [ref=e238] [cursor=pointer]:
                  - /url: /zh-hans/markets/interest-rates
            - generic [ref=e239]:
              - generic [ref=e240]: 市场洞察
              - link "市场分析" [ref=e243] [cursor=pointer]:
                - /url: /zh-hans/analysis
        - link "定价" [ref=e246] [cursor=pointer]:
          - /url: /zh-hans/ways-to-trade/fees-and-charges
          - strong [ref=e247]: 定价
        - generic [ref=e248]:
          - strong [ref=e250]: 关于我们
          - generic [ref=e251]:
            - generic [ref=e252]:
              - generic [ref=e253]: 关于我们
              - generic [ref=e254]:
                - link "公司简介" [ref=e256] [cursor=pointer]:
                  - /url: /zh-hans/about-us
                - link "我们的办公室" [ref=e258] [cursor=pointer]:
                  - /url: /zh-hans/about-us/our-offices
                - link "Capital.com 安全吗？" [ref=e260] [cursor=pointer]:
                  - /url: /zh-hans/security-measures
                - link "我们的商业模式" [ref=e262] [cursor=pointer]:
                  - /url: /zh-hans/about-us/how-capital-makes-money
            - generic [ref=e263]:
              - generic [ref=e264]: 与我们合作
              - generic [ref=e265]:
                - link "合作伙伴计划" [ref=e267] [cursor=pointer]:
                  - /url: /zh-hans/partnerships
                - link "推荐好友" [ref=e269] [cursor=pointer]:
                  - /url: /zh-hans/refer-a-friend
            - generic [ref=e270]:
              - generic [ref=e271]: 帮助
              - generic [ref=e272]:
                - link "帮助" [ref=e274] [cursor=pointer]:
                  - /url: /zh-hans/help
                - link "客户脆弱性" [ref=e276] [cursor=pointer]:
                  - /url: /zh-hans/help/client-vulnerability
                - link "联系我们" [ref=e278] [cursor=pointer]:
                  - /url: /zh-hans/contact-us
            - generic [ref=e279]:
              - generic [ref=e280]: 法律信息
              - generic [ref=e281]:
                - link "条款和政策" [ref=e283] [cursor=pointer]:
                  - /url: /zh-hans/terms-and-policies
                - link "投诉" [ref=e285] [cursor=pointer]:
                  - /url: /zh-hans/help/complaints
    - generic [ref=e287]:
      - paragraph [ref=e288]:
        - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。
        - generic [ref=e289]:
          - text: 数据显示，
          - strong [ref=e290]: 78.48% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
          - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
      - paragraph [ref=e291]
      - paragraph [ref=e292]: Capital Com Online Investments Ltd 是一家有限责任公司，公司注册号为 209236B。Capital Com Online Investments Ltd 在巴哈马国注册，由巴哈马证券委员会授权，许可证号为 SIA-F245。公司注册办事处地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
    - generic [ref=e293]:
      - paragraph [ref=e294]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e295]:
        - link "网站地图" [ref=e296] [cursor=pointer]:
          - /url: /zh-hans/sitemap
        - link "Cookie 设置" [ref=e297] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /zh-hans
        - link "条款和政策" [ref=e298] [cursor=pointer]:
          - /url: /zh-hans/terms-and-policies
        - link "投诉程序 (SCB)" [ref=e299] [cursor=pointer]:
          - /url: /zh-hans/help/complaints
  - generic [ref=e302]:
    - generic [ref=e303]:
      - heading "Important Notice:" [level=3] [ref=e305]
      - generic [ref=e306]:
        - paragraph [ref=e307]: "The information on this website is not intended for, or directed at, any person or entity who is a resident of Singapore or any jurisdiction where such distribution or use would be contrary to local laws or regulations. By clicking \"I Confirm\", you expressly acknowledge and agree to the following:"
        - paragraph [ref=e308]: 1. You are accessing this website on your own initiative.
        - paragraph [ref=e309]: 2. You understand and accept that Capital Com Online Investments Ltd is not licensed or regulated by the Monetary Authority of Singapore (MAS) and is not authorized to provide financial services or solicit business in Singapore.
        - paragraph [ref=e310]: 3. You are not a resident of Singapore, or, if you are, you acknowledge that the information and services on this website are not intended for you and are being accessed at your own risk and responsibility.
        - paragraph [ref=e311]: If you do not agree with any of the above statements, please exit this site immediately.
    - button "I Confirm" [disabled]
  - button [ref=e312] [cursor=pointer]
  - dialog "Cookie banner" [ref=e314]:
    - generic [ref=e315]:
      - paragraph [ref=e317]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [active] [ref=e318] [cursor=pointer]:
          - /url: https://capital.com/cookies_policy_bah
          - text: Cookie Policy
        - text: .
      - generic [ref=e319]:
        - button "Reject all" [ref=e320] [cursor=pointer]
        - button "Allow all cookies" [ref=e321] [cursor=pointer]
        - button "Cookie settings" [ref=e322] [cursor=pointer]
  - alert [ref=e323]
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | import { BaseModal } from '../base/BaseModal';
  3  | 
  4  | const importantNoticeSelectors = {
  5  |     confirmButton: '[data-type="closed_countries_disclaimer_confirm"]',
  6  | } as const;
  7  | 
  8  | export class ImportantNoticeModal extends BaseModal {
  9  |     private readonly lastParagraph: Locator;
  10 | 
  11 |     constructor(page: Page) {
  12 |         const confirmButton = page.locator(importantNoticeSelectors.confirmButton);
  13 |         super(page, confirmButton);
  14 | 
  15 |         const modal = page
  16 |             .locator('[data-sentry-component="Modal"]')
  17 |             .filter({ has: confirmButton });
  18 | 
  19 |         this.lastParagraph = modal.locator('p').last();
  20 |     }
  21 | 
  22 |     async confirmIfVisible(): Promise<void> {
  23 |         if (!(await this.isPresent())) {
  24 |             return;
  25 |         }
  26 | 
> 27 |         await this.lastParagraph.scrollIntoViewIfNeeded();
     |                                  ^ Error: locator.scrollIntoViewIfNeeded: Test ended.
  28 |         await this.root.click();
  29 |         await this.waitUntilClosed();
  30 |     }
  31 | }
  32 | 
```