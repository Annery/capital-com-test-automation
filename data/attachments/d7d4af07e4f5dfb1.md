# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/trading.spec.ts >> [SCB ZH_HANS | unregistered] Trading / Learn / All resources >> [background_banner_block_btn1_signup] -> signUpForm
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
      - text: 学习
    - generic [ref=e45]:
      - generic [ref=e49]:
        - generic [ref=e50]:
          - heading "学习交易" [level=1] [ref=e51]
          - paragraph [ref=e53]: 无论您是刚入门的新手还是经验丰富的交易老手，我们的教育工具都旨在为您应对当前动态市场提供支持
        - generic [ref=e54]:
          - button "开立账户" [ref=e55] [cursor=pointer]
          - button "尝试模拟账户" [ref=e56] [cursor=pointer]
      - generic [ref=e61]:
        - generic [ref=e63]:
          - heading "从零开始？" [level=3] [ref=e64]
          - list [ref=e66]:
            - listitem [ref=e67]:
              - text: • 利用我们的
              - link "交易入门指南" [ref=e68] [cursor=pointer]:
                - /url: /zh-hans/learn/essentials
              - text: 奠定基础
            - listitem [ref=e69]:
              - text: • 学习如何交易
              - link "全球最大的市场" [ref=e70] [cursor=pointer]:
                - /url: /zh-hans/markets/shares/largest-stock-exchanges
            - listitem [ref=e71]: • 了解交易涉及的风险
          - link "学习交易" [ref=e72] [cursor=pointer]:
            - /url: "#tradingbeginners"
            - generic [ref=e73]: 学习交易
        - generic [ref=e75]:
          - heading "希望优化您的交易策略？" [level=3] [ref=e76]
          - list [ref=e78]:
            - listitem [ref=e79]:
              - text: • 探索
              - link "技术面分析" [ref=e80] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis
              - text: 的新思路
            - listitem [ref=e81]:
              - text: • 增强您的
              - link "交易心理" [ref=e82] [cursor=pointer]:
                - /url: /zh-hans/learn/trading-psychology
              - text: 并在压力下做出更优的决策
            - listitem [ref=e83]:
              - text: • 将您的
              - link "风险管理规划" [ref=e84] [cursor=pointer]:
                - /url: /zh-hans/learn/risk-management
              - text: 提升到新的水平
          - link "学习交易" [ref=e85] [cursor=pointer]:
            - /url: "#experiencedtraders"
            - generic [ref=e86]: 学习交易
      - generic [ref=e89]:
        - generic [ref=e90]:
          - heading "新手交易者" [level=2] [ref=e91]
          - paragraph [ref=e93]: 如果您之前从未交易过或者刚刚涉足交易。
        - generic [ref=e94]:
          - generic [ref=e97]:
            - heading "交易基础知识" [level=3] [ref=e98]
            - generic [ref=e99]: 通过我们的权威交易入门指南，一站式掌握所有交易必备知识。
            - link "交易入门指南" [ref=e100] [cursor=pointer]:
              - /url: /zh-hans/learn/essentials
              - generic [ref=e101]: 交易入门指南
          - generic [ref=e104]:
            - heading "风险管理" [level=3] [ref=e105]
            - generic [ref=e106]: 在进行第一笔交易之前，确保您了解交易涉及的所有风险。
            - link "风险管理指南" [ref=e107] [cursor=pointer]:
              - /url: /zh-hans/learn/risk-management
              - generic [ref=e108]: 风险管理指南
          - generic [ref=e111]:
            - heading "市场指南" [level=3] [ref=e112]
            - generic [ref=e113]: 了解我们提供的数千个市场，以及如何进行交易。
            - link "市场指南" [ref=e114] [cursor=pointer]:
              - /url: /zh-hans/learn/market-guides
              - generic [ref=e115]: 市场指南
          - generic [ref=e118]:
            - heading "模拟账户" [level=3] [ref=e119]
            - generic [ref=e120]: 在开立真实账户之前无风险练习交易。
            - link "尝试模拟账户" [ref=e121] [cursor=pointer]:
              - /url: /zh-hans/trading-platforms/demo-account
              - generic [ref=e122]: 尝试模拟账户
      - generic [ref=e125]:
        - generic [ref=e126]:
          - heading "经验丰富的交易者" [level=2] [ref=e127]
          - paragraph [ref=e129]: 如果您已经在交易并希望拓展自己的知识。
        - generic [ref=e130]:
          - generic [ref=e133]:
            - heading "技术面分析" [level=3] [ref=e134]
            - generic [ref=e135]: 通过我们全面的指南提升您的技术面分析能力。
            - link "技术分析指南" [ref=e136] [cursor=pointer]:
              - /url: /zh-hans/learn/technical-analysis
              - generic [ref=e137]: 技术分析指南
          - generic [ref=e140]:
            - heading "交易策略" [level=3] [ref=e141]
            - generic [ref=e142]: 采用更高级的策略增强您的交易能力。
            - link "交易策略指南" [ref=e143] [cursor=pointer]:
              - /url: /zh-hans/learn/trading-strategies
              - generic [ref=e144]: 交易策略指南
          - generic [ref=e147]:
            - heading "交易心理" [level=3] [ref=e148]
            - generic [ref=e149]: 探索如何在关键时刻管理情绪、培养纪律并克服偏见。
            - link "交易心理指南" [ref=e150] [cursor=pointer]:
              - /url: /zh-hans/learn/trading-psychology
              - generic [ref=e151]: 交易心理指南
          - generic [ref=e154]:
            - heading "市场分析" [level=3] [ref=e155]
            - generic [ref=e156]: 获取由交易者为交易者提供的市场见解。 包括来自 TradingView 的观点和想法。
            - link "市场分析指南" [ref=e157] [cursor=pointer]:
              - /url: /zh-hans/analysis
              - generic [ref=e158]: 市场分析指南
      - generic [ref=e161]:
        - heading "三步即可开始交易" [level=2] [ref=e163]
        - generic [ref=e164]:
          - button [ref=e166] [cursor=pointer]
          - generic [ref=e169]: 1. 创建您的账户（须符合资格要求）
          - generic [ref=e170]: 2. 按您的方式存款
          - generic [ref=e171]: 3. 准备就绪后即可开始交易
  - contentinfo [ref=e173]:
    - generic [ref=e174]:
      - link [ref=e175] [cursor=pointer]:
        - /url: /zh-hans
        - img [ref=e176]
      - generic [ref=e180]:
        - link [ref=e181] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e182] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e183] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e184] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e185] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e186] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e187]:
        - link [ref=e188] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=34960b84-99a3-447d-b7f9-2e6bcf56b536&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e189] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=34960b84-99a3-447d-b7f9-2e6bcf56b536&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e190] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=34960b84-99a3-447d-b7f9-2e6bcf56b536&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e191]:
      - generic [ref=e192]:
        - generic [ref=e193]:
          - generic [ref=e194]:
            - generic [ref=e195]: "国家/地区:"
            - button "Singapore" [ref=e196] [cursor=pointer]:
              - generic [ref=e198]: Singapore
          - generic [ref=e199]: •
          - generic [ref=e200]:
            - generic [ref=e201]: "语言:"
            - button "Simplified Chinese" [ref=e202] [cursor=pointer]:
              - generic [ref=e203]: Simplified Chinese
        - generic [ref=e204]:
          - generic [ref=e205]: 您还可以联系：
          - link "+65 3125 2302" [ref=e208] [cursor=pointer]:
            - /url: tel:+65 3125 2302
            - strong [ref=e209]: +65 3125 2302
            - strong
          - generic [ref=e210]: •
          - link "support@capital.com" [ref=e212] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e213]: support@capital.com
      - generic [ref=e214]:
        - generic [ref=e215]:
          - strong [ref=e217]: 交易
          - generic [ref=e218]:
            - generic [ref=e219]:
              - generic [ref=e220]: 交易
              - generic [ref=e221]:
                - link "差价合约 (CFD)交易" [ref=e223] [cursor=pointer]:
                  - /url: /zh-hans/ways-to-trade/cfd-trading
                - link "模拟交易" [ref=e225] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/demo-account
                - link "专业账户" [ref=e227] [cursor=pointer]:
                  - /url: /zh-hans/professional
            - generic [ref=e228]:
              - generic [ref=e229]: 平台
              - generic [ref=e230]:
                - link "网页版平台" [ref=e232] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/web-platform
                - link "手机 App" [ref=e234] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mobile-apps
                - link "TradingView" [ref=e236] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/trading-view
                - link "MT4" [ref=e238] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt4
                - link "MT5" [ref=e240] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt5
            - generic [ref=e241]:
              - generic [ref=e242]: 学习
              - generic [ref=e243]:
                - link "交易策略" [ref=e245] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-strategies
                - link "技术分析" [ref=e247] [cursor=pointer]:
                  - /url: /zh-hans/learn/technical-analysis
                - link "交易心理" [ref=e249] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-psychology
                - link "学习" [ref=e251] [cursor=pointer]:
                  - /url: /zh-hans/learn
        - generic [ref=e252]:
          - strong [ref=e254]: 市场
          - generic [ref=e255]:
            - generic [ref=e256]:
              - generic [ref=e257]: 我们的市场
              - generic [ref=e258]:
                - link "市场" [ref=e260] [cursor=pointer]:
                  - /url: /zh-hans/markets
                - link "股票" [ref=e262] [cursor=pointer]:
                  - /url: /zh-hans/markets/shares
                - link "外汇" [ref=e264] [cursor=pointer]:
                  - /url: /zh-hans/markets/forex
                - link "指数" [ref=e266] [cursor=pointer]:
                  - /url: /zh-hans/markets/indices
                - link "大宗商品" [ref=e268] [cursor=pointer]:
                  - /url: /zh-hans/markets/commodities
                - link "加密货币" [ref=e270] [cursor=pointer]:
                  - /url: /zh-hans/markets/cryptocurrencies
                - link "债券" [ref=e272] [cursor=pointer]:
                  - /url: /zh-hans/markets/bonds
                - link "利率" [ref=e274] [cursor=pointer]:
                  - /url: /zh-hans/markets/interest-rates
            - generic [ref=e275]:
              - generic [ref=e276]: 市场洞察
              - link "市场分析" [ref=e279] [cursor=pointer]:
                - /url: /zh-hans/analysis
        - link "定价" [ref=e282] [cursor=pointer]:
          - /url: /zh-hans/ways-to-trade/fees-and-charges
          - strong [ref=e283]: 定价
        - generic [ref=e284]:
          - strong [ref=e286]: 关于我们
          - generic [ref=e287]:
            - generic [ref=e288]:
              - generic [ref=e289]: 关于我们
              - generic [ref=e290]:
                - link "公司简介" [ref=e292] [cursor=pointer]:
                  - /url: /zh-hans/about-us
                - link "我们的办公室" [ref=e294] [cursor=pointer]:
                  - /url: /zh-hans/about-us/our-offices
                - link "Capital.com 安全吗？" [ref=e296] [cursor=pointer]:
                  - /url: /zh-hans/security-measures
                - link "我们的商业模式" [ref=e298] [cursor=pointer]:
                  - /url: /zh-hans/about-us/how-capital-makes-money
            - generic [ref=e299]:
              - generic [ref=e300]: 与我们合作
              - generic [ref=e301]:
                - link "合作伙伴计划" [ref=e303] [cursor=pointer]:
                  - /url: /zh-hans/partnerships
                - link "推荐好友" [ref=e305] [cursor=pointer]:
                  - /url: /zh-hans/refer-a-friend
            - generic [ref=e306]:
              - generic [ref=e307]: 帮助
              - generic [ref=e308]:
                - link "帮助" [ref=e310] [cursor=pointer]:
                  - /url: /zh-hans/help
                - link "客户脆弱性" [ref=e312] [cursor=pointer]:
                  - /url: /zh-hans/help/client-vulnerability
                - link "联系我们" [ref=e314] [cursor=pointer]:
                  - /url: /zh-hans/contact-us
            - generic [ref=e315]:
              - generic [ref=e316]: 法律信息
              - generic [ref=e317]:
                - link "条款和政策" [ref=e319] [cursor=pointer]:
                  - /url: /zh-hans/terms-and-policies
                - link "投诉" [ref=e321] [cursor=pointer]:
                  - /url: /zh-hans/help/complaints
    - generic [ref=e323]:
      - paragraph [ref=e324]:
        - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。
        - generic [ref=e325]:
          - text: 数据显示，
          - strong [ref=e326]: 78.48% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
          - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
      - paragraph [ref=e327]
      - paragraph [ref=e328]: Capital Com Online Investments Ltd 是一家有限责任公司，公司注册号为 209236B。Capital Com Online Investments Ltd 在巴哈马国注册，由巴哈马证券委员会授权，许可证号为 SIA-F245。公司注册办事处地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
    - generic [ref=e329]:
      - paragraph [ref=e330]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e331]:
        - link "网站地图" [ref=e332] [cursor=pointer]:
          - /url: /zh-hans/sitemap
        - link "Cookie 设置" [ref=e333] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /zh-hans
        - link "条款和政策" [ref=e334] [cursor=pointer]:
          - /url: /zh-hans/terms-and-policies
        - link "投诉程序 (SCB)" [ref=e335] [cursor=pointer]:
          - /url: /zh-hans/help/complaints
  - generic [ref=e338]:
    - generic [ref=e339]:
      - heading "Important Notice:" [level=3] [ref=e341]
      - generic [ref=e342]:
        - paragraph [ref=e343]: "The information on this website is not intended for, or directed at, any person or entity who is a resident of Singapore or any jurisdiction where such distribution or use would be contrary to local laws or regulations. By clicking \"I Confirm\", you expressly acknowledge and agree to the following:"
        - paragraph [ref=e344]: 1. You are accessing this website on your own initiative.
        - paragraph [ref=e345]: 2. You understand and accept that Capital Com Online Investments Ltd is not licensed or regulated by the Monetary Authority of Singapore (MAS) and is not authorized to provide financial services or solicit business in Singapore.
        - paragraph [ref=e346]: 3. You are not a resident of Singapore, or, if you are, you acknowledge that the information and services on this website are not intended for you and are being accessed at your own risk and responsibility.
        - paragraph [ref=e347]: If you do not agree with any of the above statements, please exit this site immediately.
    - button "I Confirm" [disabled]
  - button [ref=e348] [cursor=pointer]
  - dialog "Cookie banner" [ref=e350]:
    - generic [ref=e351]:
      - paragraph [ref=e353]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [active] [ref=e354] [cursor=pointer]:
          - /url: https://capital.com/cookies_policy_bah
          - text: Cookie Policy
        - text: .
      - generic [ref=e355]:
        - button "Reject all" [ref=e356] [cursor=pointer]
        - button "Allow all cookies" [ref=e357] [cursor=pointer]
        - button "Cookie settings" [ref=e358] [cursor=pointer]
  - alert [ref=e359]
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