# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/trading.spec.ts >> [SCB ZH_HANS | unauthorized] Trading / Learn / Trading strategies >> [banner_with_steps] -> signUpForm
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
      - generic [ref=e45]:
        - link "学习" [ref=e46] [cursor=pointer]:
          - /url: /zh-hans/learn
        - text: •
      - text: 交易策略
    - generic [ref=e47]:
      - generic [ref=e51]:
        - generic [ref=e52]:
          - heading "交易策略" [level=1] [ref=e53]
          - paragraph [ref=e55]: 在充满风险的金融市场中，交易策略是稳健前行的关键。通过以下交易策略和指南，提升您的交易技巧。
        - generic [ref=e56]:
          - button "创建账户" [ref=e57] [cursor=pointer]
          - button "尝试模拟账户" [ref=e58] [cursor=pointer]
      - generic [ref=e62]:
        - generic [ref=e63]:
          - heading "热门的交易策略" [level=2] [ref=e64]
          - generic [ref=e65]: 通过我们的全面交易策略指南，进一步提升您的交易水平。
        - generic [ref=e66]:
          - generic [ref=e68]:
            - heading "波段交易" [level=3] [ref=e69]
            - paragraph [ref=e71]: 掌握中期交易策略的关键技巧。
            - link "波段交易指南" [ref=e72] [cursor=pointer]:
              - /url: /zh-hans/learn/trading-strategies/swing-trading
              - generic [ref=e73]: 波段交易指南
          - generic [ref=e75]:
            - heading "头寸交易" [level=3] [ref=e76]
            - paragraph [ref=e78]: 了解长期持仓的基本原则。
            - link "头寸交易指南" [ref=e79] [cursor=pointer]:
              - /url: /zh-hans/learn/trading-strategies/position-trading
              - generic [ref=e80]: 头寸交易指南
          - generic [ref=e82]:
            - heading "顺势交易" [level=3] [ref=e83]
            - paragraph [ref=e85]: 学习如何识别、跟踪并把握市场趋势。
            - link "顺势交易指南" [ref=e86] [cursor=pointer]:
              - /url: /zh-hans/learn/trading-strategies/trend-trading
              - generic [ref=e87]: 顺势交易指南
          - generic [ref=e89]:
            - heading "日内交易" [level=3] [ref=e90]
            - paragraph [ref=e92]: 了解如何在一天内开仓和平仓的核心要点。
            - link "日内交易指南" [ref=e93] [cursor=pointer]:
              - /url: /zh-hans/learn/trading-strategies/day-trading
              - generic [ref=e94]: 日内交易指南
      - generic [ref=e96]:
        - generic [ref=e97]:
          - heading "我们最受欢迎的交易指南" [level=2] [ref=e98]
          - generic [ref=e99]: 加深您对保证金、交易和投资核心概念的理解。
        - generic [ref=e100]:
          - generic [ref=e102]:
            - heading "保证金交易" [level=3] [ref=e103]
            - paragraph [ref=e105]: 使用借入资金（保证金）进行交易需要谨慎规划。
            - link "保证金交易指南" [ref=e106] [cursor=pointer]:
              - /url: /zh-hans/learn/trading-strategies/margin-trading
              - generic [ref=e107]: 保证金交易指南
          - generic [ref=e109]:
            - heading "交易 VS 投资指南" [level=3] [ref=e110]
            - paragraph [ref=e112]: 掌握交易与投资的主要区别。
            - link "交易 vs 投资" [ref=e113] [cursor=pointer]:
              - /url: /zh-hans/learn/trading-strategies/trading-vs-investing
              - generic [ref=e114]: 交易 vs 投资
      - generic [ref=e116]:
        - generic [ref=e117]:
          - heading "拓展您的交易能力" [level=2] [ref=e118]
          - generic [ref=e119]: 探索更多资源，助您优化交易策略并管理盈亏。
        - generic [ref=e120]:
          - generic [ref=e122]:
            - heading "技术面分析" [level=3] [ref=e123]
            - paragraph [ref=e125]: 通过我们的技术分析指南，掌握移动平均线，识别图表型态，并制定有效的交易策略。
            - link "查看技术分析指南" [ref=e126] [cursor=pointer]:
              - /url: /zh-hans/learn/technical-analysis
              - generic [ref=e127]: 查看技术分析指南
          - generic [ref=e129]:
            - heading "市场分析" [level=3] [ref=e130]
            - paragraph [ref=e132]:
              - text: 前往我们的
              - link "分析专区" [ref=e133] [cursor=pointer]:
                - /url: /zh-hans/analysis
              - text: ，获取更多交易策略。
              - strong
            - link "查看我们的分析" [ref=e134] [cursor=pointer]:
              - /url: /zh-hans/analysis
              - generic [ref=e135]: 查看我们的分析
      - generic [ref=e138]:
        - heading "三步即可开始交易" [level=2] [ref=e140]
        - generic [ref=e141]:
          - button [ref=e143] [cursor=pointer]
          - generic [ref=e146]: 1. 创建您的账户（须符合资格要求）
          - generic [ref=e147]: 2. 按您的方式存款
          - generic [ref=e148]: 3. 准备就绪后即可开始交易
  - contentinfo [ref=e150]:
    - generic [ref=e151]:
      - link [ref=e152] [cursor=pointer]:
        - /url: /zh-hans
        - img [ref=e153]
      - generic [ref=e157]:
        - link [ref=e158] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e159] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e160] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e161] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e162] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e163] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e164]:
        - link [ref=e165] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e166] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e167] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e168]:
      - generic [ref=e169]:
        - generic [ref=e170]:
          - generic [ref=e171]:
            - generic [ref=e172]: "国家/地区:"
            - button "Singapore" [ref=e173] [cursor=pointer]:
              - generic [ref=e175]: Singapore
          - generic [ref=e176]: •
          - generic [ref=e177]:
            - generic [ref=e178]: "语言:"
            - button "Simplified Chinese" [ref=e179] [cursor=pointer]:
              - generic [ref=e180]: Simplified Chinese
        - generic [ref=e181]:
          - generic [ref=e182]: 您还可以联系：
          - link "+65 3125 2302" [ref=e185] [cursor=pointer]:
            - /url: tel:+65 3125 2302
            - strong [ref=e186]: +65 3125 2302
            - strong
          - generic [ref=e187]: •
          - link "support@capital.com" [ref=e189] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e190]: support@capital.com
      - generic [ref=e191]:
        - generic [ref=e192]:
          - strong [ref=e194]: 交易
          - generic [ref=e195]:
            - generic [ref=e196]:
              - generic [ref=e197]: 交易
              - generic [ref=e198]:
                - link "差价合约 (CFD)交易" [ref=e200] [cursor=pointer]:
                  - /url: /zh-hans/ways-to-trade/cfd-trading
                - link "模拟交易" [ref=e202] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/demo-account
                - link "专业账户" [ref=e204] [cursor=pointer]:
                  - /url: /zh-hans/professional
            - generic [ref=e205]:
              - generic [ref=e206]: 平台
              - generic [ref=e207]:
                - link "网页版平台" [ref=e209] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/web-platform
                - link "手机 App" [ref=e211] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mobile-apps
                - link "TradingView" [ref=e213] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/trading-view
                - link "MT4" [ref=e215] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt4
                - link "MT5" [ref=e217] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt5
            - generic [ref=e218]:
              - generic [ref=e219]: 学习
              - generic [ref=e220]:
                - link "交易策略" [ref=e222] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-strategies
                - link "技术分析" [ref=e224] [cursor=pointer]:
                  - /url: /zh-hans/learn/technical-analysis
                - link "交易心理" [ref=e226] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-psychology
                - link "学习" [ref=e228] [cursor=pointer]:
                  - /url: /zh-hans/learn
        - generic [ref=e229]:
          - strong [ref=e231]: 市场
          - generic [ref=e232]:
            - generic [ref=e233]:
              - generic [ref=e234]: 我们的市场
              - generic [ref=e235]:
                - link "市场" [ref=e237] [cursor=pointer]:
                  - /url: /zh-hans/markets
                - link "股票" [ref=e239] [cursor=pointer]:
                  - /url: /zh-hans/markets/shares
                - link "外汇" [ref=e241] [cursor=pointer]:
                  - /url: /zh-hans/markets/forex
                - link "指数" [ref=e243] [cursor=pointer]:
                  - /url: /zh-hans/markets/indices
                - link "大宗商品" [ref=e245] [cursor=pointer]:
                  - /url: /zh-hans/markets/commodities
                - link "加密货币" [ref=e247] [cursor=pointer]:
                  - /url: /zh-hans/markets/cryptocurrencies
                - link "债券" [ref=e249] [cursor=pointer]:
                  - /url: /zh-hans/markets/bonds
                - link "利率" [ref=e251] [cursor=pointer]:
                  - /url: /zh-hans/markets/interest-rates
            - generic [ref=e252]:
              - generic [ref=e253]: 市场洞察
              - link "市场分析" [ref=e256] [cursor=pointer]:
                - /url: /zh-hans/analysis
        - link "定价" [ref=e259] [cursor=pointer]:
          - /url: /zh-hans/ways-to-trade/fees-and-charges
          - strong [ref=e260]: 定价
        - generic [ref=e261]:
          - strong [ref=e263]: 关于我们
          - generic [ref=e264]:
            - generic [ref=e265]:
              - generic [ref=e266]: 关于我们
              - generic [ref=e267]:
                - link "公司简介" [ref=e269] [cursor=pointer]:
                  - /url: /zh-hans/about-us
                - link "我们的办公室" [ref=e271] [cursor=pointer]:
                  - /url: /zh-hans/about-us/our-offices
                - link "Capital.com 安全吗？" [ref=e273] [cursor=pointer]:
                  - /url: /zh-hans/security-measures
                - link "我们的商业模式" [ref=e275] [cursor=pointer]:
                  - /url: /zh-hans/about-us/how-capital-makes-money
            - generic [ref=e276]:
              - generic [ref=e277]: 与我们合作
              - generic [ref=e278]:
                - link "合作伙伴计划" [ref=e280] [cursor=pointer]:
                  - /url: /zh-hans/partnerships
                - link "推荐好友" [ref=e282] [cursor=pointer]:
                  - /url: /zh-hans/refer-a-friend
            - generic [ref=e283]:
              - generic [ref=e284]: 帮助
              - generic [ref=e285]:
                - link "帮助" [ref=e287] [cursor=pointer]:
                  - /url: /zh-hans/help
                - link "客户脆弱性" [ref=e289] [cursor=pointer]:
                  - /url: /zh-hans/help/client-vulnerability
                - link "联系我们" [ref=e291] [cursor=pointer]:
                  - /url: /zh-hans/contact-us
            - generic [ref=e292]:
              - generic [ref=e293]: 法律信息
              - generic [ref=e294]:
                - link "条款和政策" [ref=e296] [cursor=pointer]:
                  - /url: /zh-hans/terms-and-policies
                - link "投诉" [ref=e298] [cursor=pointer]:
                  - /url: /zh-hans/help/complaints
    - generic [ref=e300]:
      - paragraph [ref=e301]:
        - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。
        - generic [ref=e302]:
          - text: 数据显示，
          - strong [ref=e303]: 78.48% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
          - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
      - paragraph [ref=e304]
      - paragraph [ref=e305]: Capital Com Online Investments Ltd 是一家有限责任公司，公司注册号为 209236B。Capital Com Online Investments Ltd 在巴哈马国注册，由巴哈马证券委员会授权，许可证号为 SIA-F245。公司注册办事处地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
    - generic [ref=e306]:
      - paragraph [ref=e307]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e308]:
        - link "网站地图" [ref=e309] [cursor=pointer]:
          - /url: /zh-hans/sitemap
        - link "Cookie 设置" [ref=e310] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /zh-hans
        - link "条款和政策" [ref=e311] [cursor=pointer]:
          - /url: /zh-hans/terms-and-policies
        - link "投诉程序 (SCB)" [ref=e312] [cursor=pointer]:
          - /url: /zh-hans/help/complaints
  - generic [ref=e315]:
    - generic [ref=e316]:
      - heading "Important Notice:" [level=3] [ref=e318]
      - generic [ref=e319]:
        - paragraph [ref=e320]: "The information on this website is not intended for, or directed at, any person or entity who is a resident of Singapore or any jurisdiction where such distribution or use would be contrary to local laws or regulations. By clicking \"I Confirm\", you expressly acknowledge and agree to the following:"
        - paragraph [ref=e321]: 1. You are accessing this website on your own initiative.
        - paragraph [ref=e322]: 2. You understand and accept that Capital Com Online Investments Ltd is not licensed or regulated by the Monetary Authority of Singapore (MAS) and is not authorized to provide financial services or solicit business in Singapore.
        - paragraph [ref=e323]: 3. You are not a resident of Singapore, or, if you are, you acknowledge that the information and services on this website are not intended for you and are being accessed at your own risk and responsibility.
        - paragraph [ref=e324]: If you do not agree with any of the above statements, please exit this site immediately.
    - button "I Confirm" [disabled]
  - button [ref=e325] [cursor=pointer]
  - dialog "Cookie banner" [ref=e327]:
    - generic [ref=e328]:
      - paragraph [ref=e330]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [active] [ref=e331] [cursor=pointer]:
          - /url: https://capital.com/cookies_policy_bah
          - text: Cookie Policy
        - text: .
      - generic [ref=e332]:
        - button "Reject all" [ref=e333] [cursor=pointer]
        - button "Allow all cookies" [ref=e334] [cursor=pointer]
        - button "Cookie settings" [ref=e335] [cursor=pointer]
  - alert [ref=e336]
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