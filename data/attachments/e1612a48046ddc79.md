# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/trading.spec.ts >> [SCB ZH_HANS | authorized] Trading / Learn / All resources >> [background_banner_block_btn1_signup] -> platformPage
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
      - text: 学习
    - generic [ref=e43]:
      - generic [ref=e47]:
        - generic [ref=e48]:
          - heading "学习交易" [level=1] [ref=e49]
          - paragraph [ref=e51]: 无论您是刚入门的新手还是经验丰富的交易老手，我们的教育工具都旨在为您应对当前动态市场提供支持
        - generic [ref=e52]:
          - button "开立账户" [ref=e53] [cursor=pointer]
          - button "尝试模拟账户" [ref=e54] [cursor=pointer]
      - generic [ref=e59]:
        - generic [ref=e61]:
          - heading "从零开始？" [level=3] [ref=e62]
          - list [ref=e64]:
            - listitem [ref=e65]:
              - text: • 利用我们的
              - link "交易入门指南" [ref=e66] [cursor=pointer]:
                - /url: /zh-hans/learn/essentials
              - text: 奠定基础
            - listitem [ref=e67]:
              - text: • 学习如何交易
              - link "全球最大的市场" [ref=e68] [cursor=pointer]:
                - /url: /zh-hans/markets/shares/largest-stock-exchanges
            - listitem [ref=e69]: • 了解交易涉及的风险
          - link "学习交易" [ref=e70] [cursor=pointer]:
            - /url: "#tradingbeginners"
            - generic [ref=e71]: 学习交易
        - generic [ref=e73]:
          - heading "希望优化您的交易策略？" [level=3] [ref=e74]
          - list [ref=e76]:
            - listitem [ref=e77]:
              - text: • 探索
              - link "技术面分析" [ref=e78] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis
              - text: 的新思路
            - listitem [ref=e79]:
              - text: • 增强您的
              - link "交易心理" [ref=e80] [cursor=pointer]:
                - /url: /zh-hans/learn/trading-psychology
              - text: 并在压力下做出更优的决策
            - listitem [ref=e81]:
              - text: • 将您的
              - link "风险管理规划" [ref=e82] [cursor=pointer]:
                - /url: /zh-hans/learn/risk-management
              - text: 提升到新的水平
          - link "学习交易" [ref=e83] [cursor=pointer]:
            - /url: "#experiencedtraders"
            - generic [ref=e84]: 学习交易
      - generic [ref=e87]:
        - generic [ref=e88]:
          - heading "新手交易者" [level=2] [ref=e89]
          - paragraph [ref=e91]: 如果您之前从未交易过或者刚刚涉足交易。
        - generic [ref=e92]:
          - generic [ref=e95]:
            - heading "交易基础知识" [level=3] [ref=e96]
            - generic [ref=e97]: 通过我们的权威交易入门指南，一站式掌握所有交易必备知识。
            - link "交易入门指南" [ref=e98] [cursor=pointer]:
              - /url: /zh-hans/learn/essentials
              - generic [ref=e99]: 交易入门指南
          - generic [ref=e102]:
            - heading "风险管理" [level=3] [ref=e103]
            - generic [ref=e104]: 在进行第一笔交易之前，确保您了解交易涉及的所有风险。
            - link "风险管理指南" [ref=e105] [cursor=pointer]:
              - /url: /zh-hans/learn/risk-management
              - generic [ref=e106]: 风险管理指南
          - generic [ref=e109]:
            - heading "市场指南" [level=3] [ref=e110]
            - generic [ref=e111]: 了解我们提供的数千个市场，以及如何进行交易。
            - link "市场指南" [ref=e112] [cursor=pointer]:
              - /url: /zh-hans/learn/market-guides
              - generic [ref=e113]: 市场指南
          - generic [ref=e116]:
            - heading "模拟账户" [level=3] [ref=e117]
            - generic [ref=e118]: 在开立真实账户之前无风险练习交易。
            - link "尝试模拟账户" [ref=e119] [cursor=pointer]:
              - /url: /zh-hans/trading-platforms/demo-account
              - generic [ref=e120]: 尝试模拟账户
      - generic [ref=e123]:
        - generic [ref=e124]:
          - heading "经验丰富的交易者" [level=2] [ref=e125]
          - paragraph [ref=e127]: 如果您已经在交易并希望拓展自己的知识。
        - generic [ref=e128]:
          - generic [ref=e131]:
            - heading "技术面分析" [level=3] [ref=e132]
            - generic [ref=e133]: 通过我们全面的指南提升您的技术面分析能力。
            - link "技术分析指南" [ref=e134] [cursor=pointer]:
              - /url: /zh-hans/learn/technical-analysis
              - generic [ref=e135]: 技术分析指南
          - generic [ref=e138]:
            - heading "交易策略" [level=3] [ref=e139]
            - generic [ref=e140]: 采用更高级的策略增强您的交易能力。
            - link "交易策略指南" [ref=e141] [cursor=pointer]:
              - /url: /zh-hans/learn/trading-strategies
              - generic [ref=e142]: 交易策略指南
          - generic [ref=e145]:
            - heading "交易心理" [level=3] [ref=e146]
            - generic [ref=e147]: 探索如何在关键时刻管理情绪、培养纪律并克服偏见。
            - link "交易心理指南" [ref=e148] [cursor=pointer]:
              - /url: /zh-hans/learn/trading-psychology
              - generic [ref=e149]: 交易心理指南
          - generic [ref=e152]:
            - heading "市场分析" [level=3] [ref=e153]
            - generic [ref=e154]: 获取由交易者为交易者提供的市场见解。 包括来自 TradingView 的观点和想法。
            - link "市场分析指南" [ref=e155] [cursor=pointer]:
              - /url: /zh-hans/analysis
              - generic [ref=e156]: 市场分析指南
      - generic [ref=e159]:
        - heading "三步即可开始交易" [level=2] [ref=e161]
        - generic [ref=e162]:
          - button [ref=e164] [cursor=pointer]
          - generic [ref=e167]: 1. 创建您的账户（须符合资格要求）
          - generic [ref=e168]: 2. 按您的方式存款
          - generic [ref=e169]: 3. 准备就绪后即可开始交易
  - contentinfo [ref=e171]:
    - generic [ref=e172]:
      - link [ref=e173] [cursor=pointer]:
        - /url: /zh-hans
        - img [ref=e174]
      - generic [ref=e178]:
        - link [ref=e179] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e180] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e181] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e182] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e183] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e184] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e185]:
        - link [ref=e186] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e187] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e188] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e189]:
      - generic [ref=e190]:
        - generic [ref=e191]:
          - generic [ref=e192]:
            - generic [ref=e193]: "国家/地区:"
            - button "Singapore" [ref=e194] [cursor=pointer]:
              - generic [ref=e196]: Singapore
          - generic [ref=e197]: •
          - generic [ref=e198]:
            - generic [ref=e199]: "语言:"
            - button "Simplified Chinese" [ref=e200] [cursor=pointer]:
              - generic [ref=e201]: Simplified Chinese
        - generic [ref=e202]:
          - generic [ref=e203]: 您还可以联系：
          - link "+65 3125 2302" [ref=e206] [cursor=pointer]:
            - /url: tel:+65 3125 2302
            - strong [ref=e207]: +65 3125 2302
            - strong
          - generic [ref=e208]: •
          - link "support@capital.com" [ref=e210] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e211]: support@capital.com
      - generic [ref=e212]:
        - generic [ref=e213]:
          - strong [ref=e215]: 交易
          - generic [ref=e216]:
            - generic [ref=e217]:
              - generic [ref=e218]: 交易
              - generic [ref=e219]:
                - link "差价合约 (CFD)交易" [ref=e221] [cursor=pointer]:
                  - /url: /zh-hans/ways-to-trade/cfd-trading
                - link "模拟交易" [ref=e223] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/demo-account
                - link "专业账户" [ref=e225] [cursor=pointer]:
                  - /url: /zh-hans/professional
            - generic [ref=e226]:
              - generic [ref=e227]: 平台
              - generic [ref=e228]:
                - link "网页版平台" [ref=e230] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/web-platform
                - link "手机 App" [ref=e232] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mobile-apps
                - link "TradingView" [ref=e234] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/trading-view
                - link "MT4" [ref=e236] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt4
                - link "MT5" [ref=e238] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt5
            - generic [ref=e239]:
              - generic [ref=e240]: 学习
              - generic [ref=e241]:
                - link "交易策略" [ref=e243] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-strategies
                - link "技术分析" [ref=e245] [cursor=pointer]:
                  - /url: /zh-hans/learn/technical-analysis
                - link "交易心理" [ref=e247] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-psychology
                - link "学习" [ref=e249] [cursor=pointer]:
                  - /url: /zh-hans/learn
        - generic [ref=e250]:
          - strong [ref=e252]: 市场
          - generic [ref=e253]:
            - generic [ref=e254]:
              - generic [ref=e255]: 我们的市场
              - generic [ref=e256]:
                - link "市场" [ref=e258] [cursor=pointer]:
                  - /url: /zh-hans/markets
                - link "股票" [ref=e260] [cursor=pointer]:
                  - /url: /zh-hans/markets/shares
                - link "外汇" [ref=e262] [cursor=pointer]:
                  - /url: /zh-hans/markets/forex
                - link "指数" [ref=e264] [cursor=pointer]:
                  - /url: /zh-hans/markets/indices
                - link "大宗商品" [ref=e266] [cursor=pointer]:
                  - /url: /zh-hans/markets/commodities
                - link "加密货币" [ref=e268] [cursor=pointer]:
                  - /url: /zh-hans/markets/cryptocurrencies
                - link "债券" [ref=e270] [cursor=pointer]:
                  - /url: /zh-hans/markets/bonds
                - link "利率" [ref=e272] [cursor=pointer]:
                  - /url: /zh-hans/markets/interest-rates
            - generic [ref=e273]:
              - generic [ref=e274]: 市场洞察
              - link "市场分析" [ref=e277] [cursor=pointer]:
                - /url: /zh-hans/analysis
        - link "定价" [ref=e280] [cursor=pointer]:
          - /url: /zh-hans/ways-to-trade/fees-and-charges
          - strong [ref=e281]: 定价
        - generic [ref=e282]:
          - strong [ref=e284]: 关于我们
          - generic [ref=e285]:
            - generic [ref=e286]:
              - generic [ref=e287]: 关于我们
              - generic [ref=e288]:
                - link "公司简介" [ref=e290] [cursor=pointer]:
                  - /url: /zh-hans/about-us
                - link "我们的办公室" [ref=e292] [cursor=pointer]:
                  - /url: /zh-hans/about-us/our-offices
                - link "Capital.com 安全吗？" [ref=e294] [cursor=pointer]:
                  - /url: /zh-hans/security-measures
                - link "我们的商业模式" [ref=e296] [cursor=pointer]:
                  - /url: /zh-hans/about-us/how-capital-makes-money
            - generic [ref=e297]:
              - generic [ref=e298]: 与我们合作
              - generic [ref=e299]:
                - link "合作伙伴计划" [ref=e301] [cursor=pointer]:
                  - /url: /zh-hans/partnerships
                - link "推荐好友" [ref=e303] [cursor=pointer]:
                  - /url: /zh-hans/refer-a-friend
            - generic [ref=e304]:
              - generic [ref=e305]: 帮助
              - generic [ref=e306]:
                - link "帮助" [ref=e308] [cursor=pointer]:
                  - /url: /zh-hans/help
                - link "客户脆弱性" [ref=e310] [cursor=pointer]:
                  - /url: /zh-hans/help/client-vulnerability
                - link "联系我们" [ref=e312] [cursor=pointer]:
                  - /url: /zh-hans/contact-us
            - generic [ref=e313]:
              - generic [ref=e314]: 法律信息
              - generic [ref=e315]:
                - link "条款和政策" [ref=e317] [cursor=pointer]:
                  - /url: /zh-hans/terms-and-policies
                - link "投诉" [ref=e319] [cursor=pointer]:
                  - /url: /zh-hans/help/complaints
    - generic [ref=e321]:
      - paragraph [ref=e322]:
        - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。
        - generic [ref=e323]:
          - text: 数据显示，
          - strong [ref=e324]: 78.48% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
          - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
      - paragraph [ref=e325]
      - paragraph [ref=e326]: Capital Com Online Investments Ltd 是一家有限责任公司，公司注册号为 209236B。Capital Com Online Investments Ltd 在巴哈马国注册，由巴哈马证券委员会授权，许可证号为 SIA-F245。公司注册办事处地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
    - generic [ref=e327]:
      - paragraph [ref=e328]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e329]:
        - link "网站地图" [ref=e330] [cursor=pointer]:
          - /url: /zh-hans/sitemap
        - link "Cookie 设置" [ref=e331] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /zh-hans
        - link "条款和政策" [ref=e332] [cursor=pointer]:
          - /url: /zh-hans/terms-and-policies
        - link "投诉程序 (SCB)" [ref=e333] [cursor=pointer]:
          - /url: /zh-hans/help/complaints
  - generic [ref=e336]:
    - generic [ref=e337]:
      - heading "Important Notice:" [level=3] [ref=e339]
      - generic [ref=e340]:
        - paragraph [ref=e341]: "The information on this website is not intended for, or directed at, any person or entity who is a resident of Singapore or any jurisdiction where such distribution or use would be contrary to local laws or regulations. By clicking \"I Confirm\", you expressly acknowledge and agree to the following:"
        - paragraph [ref=e342]: 1. You are accessing this website on your own initiative.
        - paragraph [ref=e343]: 2. You understand and accept that Capital Com Online Investments Ltd is not licensed or regulated by the Monetary Authority of Singapore (MAS) and is not authorized to provide financial services or solicit business in Singapore.
        - paragraph [ref=e344]: 3. You are not a resident of Singapore, or, if you are, you acknowledge that the information and services on this website are not intended for you and are being accessed at your own risk and responsibility.
        - paragraph [ref=e345]: If you do not agree with any of the above statements, please exit this site immediately.
    - button "I Confirm" [disabled]
  - button [ref=e346] [cursor=pointer]
  - dialog "Cookie banner" [ref=e348]:
    - generic [ref=e349]:
      - paragraph [ref=e351]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [active] [ref=e352] [cursor=pointer]:
          - /url: https://capital.com/cookies_policy_bah
          - text: Cookie Policy
        - text: .
      - generic [ref=e353]:
        - button "Reject all" [ref=e354] [cursor=pointer]
        - button "Allow all cookies" [ref=e355] [cursor=pointer]
        - button "Cookie settings" [ref=e356] [cursor=pointer]
  - alert [ref=e357]
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