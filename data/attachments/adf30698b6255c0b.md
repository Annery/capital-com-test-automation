# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/about.spec.ts >> [SCB ZH_HANS | authorized] About / Legal / Complaints >> [banner_with_steps] -> platformPage
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
      - generic [ref=e43]:
        - link "帮助" [ref=e44] [cursor=pointer]:
          - /url: /zh-hans/help
        - text: •
      - text: 投诉
    - generic [ref=e45]:
      - heading "投诉" [level=1] [ref=e51]
      - generic [ref=e53]:
        - paragraph [ref=e54]: 请参阅以下 PDF 了解我们的完整投诉程序：
        - paragraph [ref=e55]:
          - link "投诉程序 (SCB)" [ref=e56] [cursor=pointer]:
            - /url: https://capital.com/complaint-handling-policy
        - paragraph [ref=e57]:
          - text: 您还可以在我们的
          - link "支持中心" [ref=e58] [cursor=pointer]:
            - /url: /zh-hans/contact-us
          - text: 找到其他联系信息和常见问题解答。
      - generic [ref=e61]:
        - heading "投诉" [level=2] [ref=e62]
        - generic [ref=e63]: "*所有字段均为必填项"
        - generic [ref=e64]:
          - button "姓名为必填项" [ref=e65] [cursor=pointer]:
            - button [ref=e66]:
              - textbox "name" [ref=e68]:
                - /placeholder: 全名
            - generic: 姓名为必填项
          - button "电子邮箱为必填项" [ref=e69] [cursor=pointer]:
            - button [ref=e70]:
              - textbox "email" [ref=e72]:
                - /placeholder: 注册邮箱
            - generic: 电子邮箱为必填项
          - button "消息为必填项" [ref=e73] [cursor=pointer]:
            - textbox "message" [ref=e74]:
              - /placeholder: 问题描述
            - generic: 消息为必填项
        - generic [ref=e75]:
          - button "提交" [disabled]: 提交
      - generic [ref=e78]:
        - heading "三步即可开始交易" [level=2] [ref=e80]
        - generic [ref=e81]:
          - button [ref=e83] [cursor=pointer]
          - generic [ref=e86]: 1. 创建您的账户（须符合资格要求）
          - generic [ref=e87]: 2. 按您的方式存款
          - generic [ref=e88]: 3. 准备就绪后即可开始交易
  - contentinfo [ref=e90]:
    - generic [ref=e91]:
      - link [ref=e92] [cursor=pointer]:
        - /url: /zh-hans
        - img [ref=e93]
      - generic [ref=e97]:
        - link [ref=e98] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e99] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e100] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e101] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e102] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e103] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e104]:
        - link [ref=e105] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e106] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e107] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e108]:
      - generic [ref=e109]:
        - generic [ref=e110]:
          - generic [ref=e111]:
            - generic [ref=e112]: "国家/地区:"
            - button "Singapore" [ref=e113] [cursor=pointer]:
              - generic [ref=e115]: Singapore
          - generic [ref=e116]: •
          - generic [ref=e117]:
            - generic [ref=e118]: "语言:"
            - button "Simplified Chinese" [ref=e119] [cursor=pointer]:
              - generic [ref=e120]: Simplified Chinese
        - generic [ref=e121]:
          - generic [ref=e122]: 您还可以联系：
          - link "+65 3125 2302" [ref=e125] [cursor=pointer]:
            - /url: tel:+65 3125 2302
            - strong [ref=e126]: +65 3125 2302
            - strong
          - generic [ref=e127]: •
          - link "support@capital.com" [ref=e129] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e130]: support@capital.com
      - generic [ref=e131]:
        - generic [ref=e132]:
          - strong [ref=e134]: 交易
          - generic [ref=e135]:
            - generic [ref=e136]:
              - generic [ref=e137]: 交易
              - generic [ref=e138]:
                - link "差价合约 (CFD)交易" [ref=e140] [cursor=pointer]:
                  - /url: /zh-hans/ways-to-trade/cfd-trading
                - link "模拟交易" [ref=e142] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/demo-account
                - link "专业账户" [ref=e144] [cursor=pointer]:
                  - /url: /zh-hans/professional
            - generic [ref=e145]:
              - generic [ref=e146]: 平台
              - generic [ref=e147]:
                - link "网页版平台" [ref=e149] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/web-platform
                - link "手机 App" [ref=e151] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mobile-apps
                - link "TradingView" [ref=e153] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/trading-view
                - link "MT4" [ref=e155] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt4
                - link "MT5" [ref=e157] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt5
            - generic [ref=e158]:
              - generic [ref=e159]: 学习
              - generic [ref=e160]:
                - link "交易策略" [ref=e162] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-strategies
                - link "技术分析" [ref=e164] [cursor=pointer]:
                  - /url: /zh-hans/learn/technical-analysis
                - link "交易心理" [ref=e166] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-psychology
                - link "学习" [ref=e168] [cursor=pointer]:
                  - /url: /zh-hans/learn
        - generic [ref=e169]:
          - strong [ref=e171]: 市场
          - generic [ref=e172]:
            - generic [ref=e173]:
              - generic [ref=e174]: 我们的市场
              - generic [ref=e175]:
                - link "市场" [ref=e177] [cursor=pointer]:
                  - /url: /zh-hans/markets
                - link "股票" [ref=e179] [cursor=pointer]:
                  - /url: /zh-hans/markets/shares
                - link "外汇" [ref=e181] [cursor=pointer]:
                  - /url: /zh-hans/markets/forex
                - link "指数" [ref=e183] [cursor=pointer]:
                  - /url: /zh-hans/markets/indices
                - link "大宗商品" [ref=e185] [cursor=pointer]:
                  - /url: /zh-hans/markets/commodities
                - link "加密货币" [ref=e187] [cursor=pointer]:
                  - /url: /zh-hans/markets/cryptocurrencies
                - link "债券" [ref=e189] [cursor=pointer]:
                  - /url: /zh-hans/markets/bonds
                - link "利率" [ref=e191] [cursor=pointer]:
                  - /url: /zh-hans/markets/interest-rates
            - generic [ref=e192]:
              - generic [ref=e193]: 市场洞察
              - link "市场分析" [ref=e196] [cursor=pointer]:
                - /url: /zh-hans/analysis
        - link "定价" [ref=e199] [cursor=pointer]:
          - /url: /zh-hans/ways-to-trade/fees-and-charges
          - strong [ref=e200]: 定价
        - generic [ref=e201]:
          - strong [ref=e203]: 关于我们
          - generic [ref=e204]:
            - generic [ref=e205]:
              - generic [ref=e206]: 关于我们
              - generic [ref=e207]:
                - link "公司简介" [ref=e209] [cursor=pointer]:
                  - /url: /zh-hans/about-us
                - link "我们的办公室" [ref=e211] [cursor=pointer]:
                  - /url: /zh-hans/about-us/our-offices
                - link "Capital.com 安全吗？" [ref=e213] [cursor=pointer]:
                  - /url: /zh-hans/security-measures
                - link "我们的商业模式" [ref=e215] [cursor=pointer]:
                  - /url: /zh-hans/about-us/how-capital-makes-money
            - generic [ref=e216]:
              - generic [ref=e217]: 与我们合作
              - generic [ref=e218]:
                - link "合作伙伴计划" [ref=e220] [cursor=pointer]:
                  - /url: /zh-hans/partnerships
                - link "推荐好友" [ref=e222] [cursor=pointer]:
                  - /url: /zh-hans/refer-a-friend
            - generic [ref=e223]:
              - generic [ref=e224]: 帮助
              - generic [ref=e225]:
                - link "帮助" [ref=e227] [cursor=pointer]:
                  - /url: /zh-hans/help
                - link "客户脆弱性" [ref=e229] [cursor=pointer]:
                  - /url: /zh-hans/help/client-vulnerability
                - link "联系我们" [ref=e231] [cursor=pointer]:
                  - /url: /zh-hans/contact-us
            - generic [ref=e232]:
              - generic [ref=e233]: 法律信息
              - generic [ref=e234]:
                - link "条款和政策" [ref=e236] [cursor=pointer]:
                  - /url: /zh-hans/terms-and-policies
                - link "投诉" [ref=e238] [cursor=pointer]:
                  - /url: /zh-hans/help/complaints
    - generic [ref=e240]:
      - paragraph [ref=e241]:
        - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。
        - generic [ref=e242]:
          - text: 数据显示，
          - strong [ref=e243]: 78.48% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
          - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
      - paragraph [ref=e244]
      - paragraph [ref=e245]: Capital Com Online Investments Ltd 是一家有限责任公司，公司注册号为 209236B。Capital Com Online Investments Ltd 在巴哈马国注册，由巴哈马证券委员会授权，许可证号为 SIA-F245。公司注册办事处地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
    - generic [ref=e246]:
      - paragraph [ref=e247]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e248]:
        - link "网站地图" [ref=e249] [cursor=pointer]:
          - /url: /zh-hans/sitemap
        - link "Cookie 设置" [ref=e250] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /zh-hans
        - link "条款和政策" [ref=e251] [cursor=pointer]:
          - /url: /zh-hans/terms-and-policies
        - link "投诉程序 (SCB)" [ref=e252] [cursor=pointer]:
          - /url: /zh-hans/help/complaints
  - generic [ref=e255]:
    - generic [ref=e256]:
      - heading "Important Notice:" [level=3] [ref=e258]
      - generic [ref=e259]:
        - paragraph [ref=e260]: "The information on this website is not intended for, or directed at, any person or entity who is a resident of Singapore or any jurisdiction where such distribution or use would be contrary to local laws or regulations. By clicking \"I Confirm\", you expressly acknowledge and agree to the following:"
        - paragraph [ref=e261]: 1. You are accessing this website on your own initiative.
        - paragraph [ref=e262]: 2. You understand and accept that Capital Com Online Investments Ltd is not licensed or regulated by the Monetary Authority of Singapore (MAS) and is not authorized to provide financial services or solicit business in Singapore.
        - paragraph [ref=e263]: 3. You are not a resident of Singapore, or, if you are, you acknowledge that the information and services on this website are not intended for you and are being accessed at your own risk and responsibility.
        - paragraph [ref=e264]: If you do not agree with any of the above statements, please exit this site immediately.
    - button "I Confirm" [disabled]
  - button [ref=e265] [cursor=pointer]
  - dialog "Cookie banner" [ref=e267]:
    - generic [ref=e268]:
      - paragraph [ref=e270]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [active] [ref=e271] [cursor=pointer]:
          - /url: https://capital.com/cookies_policy_bah
          - text: Cookie Policy
        - text: .
      - generic [ref=e272]:
        - button "Reject all" [ref=e273] [cursor=pointer]
        - button "Allow all cookies" [ref=e274] [cursor=pointer]
        - button "Cookie settings" [ref=e275] [cursor=pointer]
  - alert [ref=e276]
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