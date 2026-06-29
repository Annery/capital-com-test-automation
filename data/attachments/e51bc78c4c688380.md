# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/about.spec.ts >> [SCB ZH_HANS | authorized] About / Help / Help centre >> [banner_with_steps] -> platformPage
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
      - link "打开平台" [ref=e36] [cursor=pointer]:
        - /url: /trading/platform/
  - generic [ref=e37]:
    - paragraph [ref=e40]:
      - generic [ref=e41]:
        - link "首页" [ref=e42] [cursor=pointer]:
          - /url: /zh-hans
        - text: •
      - text: 帮助
    - generic [ref=e43]:
      - generic [ref=e49]:
        - heading "支持中心" [level=1] [ref=e50]
        - paragraph [ref=e52]: 关于账户、交易和平台，您需要了解的信息都可在这里找到。
      - generic [ref=e56]:
        - generic [ref=e58]:
          - heading "我的账户" [level=3] [ref=e59]
          - paragraph [ref=e61]: 身份验证、账户类型及资料更新。
          - link "了解更多" [ref=e62] [cursor=pointer]:
            - /url: https://help.capitalccbah.com/hc/zh-tw/categories/9622507722258-My-account
            - generic [ref=e63]: 了解更多
        - generic [ref=e65]:
          - heading "存入资金和提取资金" [level=3] [ref=e66]
          - paragraph [ref=e68]: 了解如何向账户存入资金和提取资金。
          - link "了解更多" [ref=e69] [cursor=pointer]:
            - /url: https://help.capitalccbah.com/hc/zh-tw/categories/9622481728402-Deposits-Withdrawals
            - generic [ref=e70]: 了解更多
        - generic [ref=e72]:
          - heading "平台和图表" [level=3] [ref=e73]
          - paragraph [ref=e75]: 图表、指标、工具、MT4 和 TradingView。
          - link "了解更多" [ref=e76] [cursor=pointer]:
            - /url: https://help.capitalccbah.com/hc/zh-tw/categories/19760775675538-Platforms-charts
            - generic [ref=e77]: 了解更多
        - generic [ref=e79]:
          - heading "交易" [level=3] [ref=e80]
          - paragraph [ref=e82]: 服务费用、杠杆以及可交易市场。
          - link "了解更多" [ref=e83] [cursor=pointer]:
            - /url: https://help.capitalccbah.com/hc/zh-tw/categories/9622481017234-Trading
            - generic [ref=e84]: 了解更多
        - generic [ref=e86]:
          - heading "更新" [level=3] [ref=e87]
          - paragraph [ref=e89]: 交易时段、股息和市场更新。
          - link "了解更多" [ref=e90] [cursor=pointer]:
            - /url: https://help.capitalccbah.com/hc/en-us/categories/30655309642258-Updates
            - generic [ref=e91]: 了解更多
        - generic [ref=e93]:
          - heading "追加保证金通知说明" [level=3] [ref=e94]
          - paragraph [ref=e96]: 了解追加保证金通知是什么、为何会出现，以及如何进行管理。
          - link "了解更多" [ref=e97] [cursor=pointer]:
            - /url: /zh-hans/ways-to-trade/margin-calls
            - generic [ref=e98]: 了解更多
      - generic [ref=e100]:
        - heading "联系我们" [level=2] [ref=e102]
        - generic [ref=e103]:
          - generic [ref=e105]:
            - heading "电子邮件" [level=3] [ref=e106]
            - paragraph [ref=e108]:
              - link "support@capital.com" [ref=e109] [cursor=pointer]:
                - /url: mailto:support@capital.com
          - generic [ref=e111]:
            - heading "致电" [level=3] [ref=e112]
            - paragraph [ref=e114]: +852 2435 1640
          - generic [ref=e116]:
            - heading "提交请求" [level=3] [ref=e117]
            - paragraph [ref=e119]:
              - text: 找不到所需内容？
              - link "直接提交" [ref=e120] [cursor=pointer]:
                - /url: https://help.capitalccbah.com/hc/zh-tw/requests/new
              - text: 请求。
      - generic [ref=e123]:
        - heading "三步即可开始交易" [level=2] [ref=e125]
        - generic [ref=e126]:
          - button [ref=e128] [cursor=pointer]
          - generic [ref=e131]: 1. 创建您的账户（须符合资格要求）
          - generic [ref=e132]: 2. 按您的方式存款
          - generic [ref=e133]: 3. 准备就绪后即可开始交易
  - contentinfo [ref=e135]:
    - generic [ref=e136]:
      - link [ref=e137] [cursor=pointer]:
        - /url: /zh-hans
        - img [ref=e138]
      - generic [ref=e142]:
        - link [ref=e143] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e144] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e145] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e146] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e147] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e148] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e149]:
        - link [ref=e150] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e151] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e152] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e153]:
      - generic [ref=e154]:
        - generic [ref=e155]:
          - generic [ref=e156]:
            - generic [ref=e157]: "国家/地区:"
            - button "Singapore" [ref=e158] [cursor=pointer]:
              - generic [ref=e160]: Singapore
          - generic [ref=e161]: •
          - generic [ref=e162]:
            - generic [ref=e163]: "语言:"
            - button "Simplified Chinese" [ref=e164] [cursor=pointer]:
              - generic [ref=e165]: Simplified Chinese
        - generic [ref=e166]:
          - generic [ref=e167]: 您还可以联系：
          - link "+65 3125 2302" [ref=e170] [cursor=pointer]:
            - /url: tel:+65 3125 2302
            - strong [ref=e171]: +65 3125 2302
            - strong
          - generic [ref=e172]: •
          - link "support@capital.com" [ref=e174] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e175]: support@capital.com
      - generic [ref=e176]:
        - generic [ref=e177]:
          - strong [ref=e179]: 交易
          - generic [ref=e180]:
            - generic [ref=e181]:
              - generic [ref=e182]: 交易
              - generic [ref=e183]:
                - link "差价合约 (CFD)交易" [ref=e185] [cursor=pointer]:
                  - /url: /zh-hans/ways-to-trade/cfd-trading
                - link "模拟交易" [ref=e187] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/demo-account
                - link "专业账户" [ref=e189] [cursor=pointer]:
                  - /url: /zh-hans/professional
            - generic [ref=e190]:
              - generic [ref=e191]: 平台
              - generic [ref=e192]:
                - link "网页版平台" [ref=e194] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/web-platform
                - link "手机 App" [ref=e196] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mobile-apps
                - link "TradingView" [ref=e198] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/trading-view
                - link "MT4" [ref=e200] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt4
                - link "MT5" [ref=e202] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt5
            - generic [ref=e203]:
              - generic [ref=e204]: 学习
              - generic [ref=e205]:
                - link "交易策略" [ref=e207] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-strategies
                - link "技术分析" [ref=e209] [cursor=pointer]:
                  - /url: /zh-hans/learn/technical-analysis
                - link "交易心理" [ref=e211] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-psychology
                - link "学习" [ref=e213] [cursor=pointer]:
                  - /url: /zh-hans/learn
        - generic [ref=e214]:
          - strong [ref=e216]: 市场
          - generic [ref=e217]:
            - generic [ref=e218]:
              - generic [ref=e219]: 我们的市场
              - generic [ref=e220]:
                - link "市场" [ref=e222] [cursor=pointer]:
                  - /url: /zh-hans/markets
                - link "股票" [ref=e224] [cursor=pointer]:
                  - /url: /zh-hans/markets/shares
                - link "外汇" [ref=e226] [cursor=pointer]:
                  - /url: /zh-hans/markets/forex
                - link "指数" [ref=e228] [cursor=pointer]:
                  - /url: /zh-hans/markets/indices
                - link "大宗商品" [ref=e230] [cursor=pointer]:
                  - /url: /zh-hans/markets/commodities
                - link "加密货币" [ref=e232] [cursor=pointer]:
                  - /url: /zh-hans/markets/cryptocurrencies
                - link "债券" [ref=e234] [cursor=pointer]:
                  - /url: /zh-hans/markets/bonds
                - link "利率" [ref=e236] [cursor=pointer]:
                  - /url: /zh-hans/markets/interest-rates
            - generic [ref=e237]:
              - generic [ref=e238]: 市场洞察
              - link "市场分析" [ref=e241] [cursor=pointer]:
                - /url: /zh-hans/analysis
        - link "定价" [ref=e244] [cursor=pointer]:
          - /url: /zh-hans/ways-to-trade/fees-and-charges
          - strong [ref=e245]: 定价
        - generic [ref=e246]:
          - strong [ref=e248]: 关于我们
          - generic [ref=e249]:
            - generic [ref=e250]:
              - generic [ref=e251]: 关于我们
              - generic [ref=e252]:
                - link "公司简介" [ref=e254] [cursor=pointer]:
                  - /url: /zh-hans/about-us
                - link "我们的办公室" [ref=e256] [cursor=pointer]:
                  - /url: /zh-hans/about-us/our-offices
                - link "Capital.com 安全吗？" [ref=e258] [cursor=pointer]:
                  - /url: /zh-hans/security-measures
                - link "我们的商业模式" [ref=e260] [cursor=pointer]:
                  - /url: /zh-hans/about-us/how-capital-makes-money
            - generic [ref=e261]:
              - generic [ref=e262]: 与我们合作
              - generic [ref=e263]:
                - link "合作伙伴计划" [ref=e265] [cursor=pointer]:
                  - /url: /zh-hans/partnerships
                - link "推荐好友" [ref=e267] [cursor=pointer]:
                  - /url: /zh-hans/refer-a-friend
            - generic [ref=e268]:
              - generic [ref=e269]: 帮助
              - generic [ref=e270]:
                - link "帮助" [ref=e272] [cursor=pointer]:
                  - /url: /zh-hans/help
                - link "客户脆弱性" [ref=e274] [cursor=pointer]:
                  - /url: /zh-hans/help/client-vulnerability
                - link "联系我们" [ref=e276] [cursor=pointer]:
                  - /url: /zh-hans/contact-us
            - generic [ref=e277]:
              - generic [ref=e278]: 法律信息
              - generic [ref=e279]:
                - link "条款和政策" [ref=e281] [cursor=pointer]:
                  - /url: /zh-hans/terms-and-policies
                - link "投诉" [ref=e283] [cursor=pointer]:
                  - /url: /zh-hans/help/complaints
    - generic [ref=e285]:
      - paragraph [ref=e286]:
        - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。
        - generic [ref=e287]:
          - text: 数据显示，
          - strong [ref=e288]: 78.48% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
          - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
      - paragraph [ref=e289]
      - paragraph [ref=e290]: Capital Com Online Investments Ltd 是一家有限责任公司，公司注册号为 209236B。Capital Com Online Investments Ltd 在巴哈马国注册，由巴哈马证券委员会授权，许可证号为 SIA-F245。公司注册办事处地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
    - generic [ref=e291]:
      - paragraph [ref=e292]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e293]:
        - link "网站地图" [ref=e294] [cursor=pointer]:
          - /url: /zh-hans/sitemap
        - link "Cookie 设置" [ref=e295] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /zh-hans
        - link "条款和政策" [ref=e296] [cursor=pointer]:
          - /url: /zh-hans/terms-and-policies
        - link "投诉程序 (SCB)" [ref=e297] [cursor=pointer]:
          - /url: /zh-hans/help/complaints
  - generic [ref=e300]:
    - generic [ref=e301]:
      - heading "Important Notice:" [level=3] [ref=e303]
      - generic [ref=e304]:
        - paragraph [ref=e305]: "The information on this website is not intended for, or directed at, any person or entity who is a resident of Singapore or any jurisdiction where such distribution or use would be contrary to local laws or regulations. By clicking \"I Confirm\", you expressly acknowledge and agree to the following:"
        - paragraph [ref=e306]: 1. You are accessing this website on your own initiative.
        - paragraph [ref=e307]: 2. You understand and accept that Capital Com Online Investments Ltd is not licensed or regulated by the Monetary Authority of Singapore (MAS) and is not authorized to provide financial services or solicit business in Singapore.
        - paragraph [ref=e308]: 3. You are not a resident of Singapore, or, if you are, you acknowledge that the information and services on this website are not intended for you and are being accessed at your own risk and responsibility.
        - paragraph [ref=e309]: If you do not agree with any of the above statements, please exit this site immediately.
    - button "I Confirm" [disabled]
  - button [ref=e310] [cursor=pointer]
  - dialog "Cookie banner" [ref=e312]:
    - generic [ref=e313]:
      - paragraph [ref=e315]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [active] [ref=e316] [cursor=pointer]:
          - /url: https://capital.com/cookies_policy_bah
          - text: Cookie Policy
        - text: .
      - generic [ref=e317]:
        - button "Reject all" [ref=e318] [cursor=pointer]
        - button "Allow all cookies" [ref=e319] [cursor=pointer]
        - button "Cookie settings" [ref=e320] [cursor=pointer]
  - alert [ref=e321]
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