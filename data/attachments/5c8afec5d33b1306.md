# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/trading.spec.ts >> [SCB ZH_HANS | authorized] Trading / Learn / Trading psychology >> [banner_with_steps] -> platformPage
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
        - link "学习" [ref=e44] [cursor=pointer]:
          - /url: /zh-hans/learn
        - text: •
      - text: 交易心理
    - generic [ref=e45]:
      - generic [ref=e50]:
        - heading "交易心理指南" [level=1] [ref=e51]
        - generic [ref=e52]:
          - paragraph [ref=e53]: 了解并学会如何减轻交易心理的负面影响，是交易者必须学习的重要一课。
          - paragraph [ref=e54]: 继续阅读本文，了解有关交易心理学、如何掌握交易心理以及交易心理在现实生活中的表现等更多信息。
      - generic [ref=e58]:
        - heading "什么是交易心理？" [level=2] [ref=e59]
        - generic [ref=e61]: 交易心理是指影响交易者在金融市场中决策过程的情绪和认知因素。
        - paragraph [ref=e62]:
          - text: 无论您处于交易旅程的哪个阶段，学习如何在市场中做出更好的决策都远远比分析图表和了解市场走势更加重要。
          - strong
          - text: 它还涉及如何管理您的情绪。
        - paragraph [ref=e63]: 所有这些都是关于学习如何掌控交易心理。广义上讲，交易心理涵盖了影响交易者决策过程的情绪和心理因素，包括恐惧、贪婪、不耐烦和过度自信等。
        - paragraph [ref=e64]: 了解交易心理以及它如何影响您的交易方式，需要培养情绪韧性、自律和战略思维。
      - generic [ref=e66]:
        - heading "交易心理如何影响交易？" [level=2] [ref=e67]
        - paragraph [ref=e68]: 交易心理可以影响您的决策过程，进而影响您在市场中的行为并对您的交易活动产生重大影响。
        - paragraph [ref=e69]: 恐惧、贪婪或后悔等情绪可能会导致您做出冲动的决定，而过度自信则可能给您带来较高风险。
        - paragraph [ref=e70]: 虽然受情绪触发是人之常情，但如果交易者不注意自己的心理状态（以及随之而来的各种偏见），就更有可能偏离自己的交易策略。
        - paragraph [ref=e71]:
          - text: 此外，心理因素也可能导致
          - link "风险管理" [ref=e72] [cursor=pointer]:
            - /url: /zh-hans/learn/risk-management
          - text: 不当，阻碍您及时止损或把握潜在盈利的机会。
      - generic [ref=e74]:
        - heading "交易心理在现实生活中的表现：交易中的偏见、效应、谬误和情绪" [level=2] [ref=e75]
        - paragraph [ref=e76]: 在学习如何掌握交易心理时，交易者可以关注不同类型的认知偏见。这可能包括偏见，以及交易中的效应、谬误和情绪。
        - paragraph [ref=e77]: 您可以在下文的综合指南中了解有关每个交易心理表现的更多信息。
      - generic [ref=e81]:
        - generic [ref=e84]:
          - heading "交易效应" [level=3] [ref=e85]
          - generic [ref=e86]: 了解处置效应和禀赋效应如何影响您的交易决策。
          - link "前往交易效应指南" [ref=e87] [cursor=pointer]:
            - /url: /zh-hans/learn/trading-psychology/effects-in-trading
            - generic [ref=e88]: 前往交易效应指南
        - generic [ref=e91]:
          - heading "交易谬误" [level=3] [ref=e92]
          - generic [ref=e93]: 探索如何在交易中识别热手谬误和赌徒谬误。
          - link "前往交易谬误指南" [ref=e94] [cursor=pointer]:
            - /url: /zh-hans/learn/trading-psychology/fallacies-in-trading
            - generic [ref=e95]: 前往交易谬误指南
        - generic [ref=e98]:
          - heading "交易情绪" [level=3] [ref=e99]
          - generic [ref=e100]: 理解恐惧和贪婪等情绪如何影响您的交易活动。
          - link "前往交易情绪指南" [ref=e101] [cursor=pointer]:
            - /url: /zh-hans/learn/trading-psychology/sentiment-in-trading
            - generic [ref=e102]: 前往交易情绪指南
        - generic [ref=e105]:
          - heading "交易偏见" [level=3] [ref=e106]
          - generic [ref=e107]: 探究锚定偏差、确认偏差和熟悉偏差等交易中的偏差会如何影响您在市场中的操作。
          - link "前往交易偏见指南" [ref=e108] [cursor=pointer]:
            - /url: /zh-hans/learn/trading-psychology/biases-in-trading
            - generic [ref=e109]: 前往交易偏见指南
        - generic [ref=e112]:
          - heading "恐惧与贪婪指数" [level=3] [ref=e113]
          - generic [ref=e114]: 了解恐惧、贪婪和过度自信等情绪偏见如何影响交易决策与市场行为。
          - link "前往恐惧与贪婪指数" [ref=e115] [cursor=pointer]:
            - /url: /zh-hans/learn/trading-psychology/fear-and-greed-index
            - generic [ref=e116]: 前往恐惧与贪婪指数
      - heading "常见问题解答" [level=2] [ref=e119]
      - generic [ref=e121]:
        - group [ref=e122]:
          - generic "什么是交易心理？" [ref=e123] [cursor=pointer]:
            - heading "什么是交易心理？" [level=3] [ref=e124]
        - group [ref=e125]:
          - generic "交易心理如何影响交易？" [ref=e126] [cursor=pointer]:
            - heading "交易心理如何影响交易？" [level=3] [ref=e127]
        - group [ref=e128]:
          - generic "如何在交易中控制情绪和心理？" [ref=e129] [cursor=pointer]:
            - heading "如何在交易中控制情绪和心理？" [level=3] [ref=e130]
        - group [ref=e131]:
          - generic "成功交易者的心理是怎样的？" [ref=e132] [cursor=pointer]:
            - heading "成功交易者的心理是怎样的？" [level=3] [ref=e133]
      - generic [ref=e136]:
        - heading "三步即可开始交易" [level=2] [ref=e138]
        - generic [ref=e139]:
          - button [ref=e141] [cursor=pointer]
          - generic [ref=e144]: 1. 创建您的账户（须符合资格要求）
          - generic [ref=e145]: 2. 按您的方式存款
          - generic [ref=e146]: 3. 准备就绪后即可开始交易
  - contentinfo [ref=e148]:
    - generic [ref=e149]:
      - link [ref=e150] [cursor=pointer]:
        - /url: /zh-hans
        - img [ref=e151]
      - generic [ref=e155]:
        - link [ref=e156] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e157] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e158] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e159] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e160] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e161] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e162]:
        - link [ref=e163] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e164] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e165] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e166]:
      - generic [ref=e167]:
        - generic [ref=e168]:
          - generic [ref=e169]:
            - generic [ref=e170]: "国家/地区:"
            - button "Singapore" [ref=e171] [cursor=pointer]:
              - generic [ref=e173]: Singapore
          - generic [ref=e174]: •
          - generic [ref=e175]:
            - generic [ref=e176]: "语言:"
            - button "Simplified Chinese" [ref=e177] [cursor=pointer]:
              - generic [ref=e178]: Simplified Chinese
        - generic [ref=e179]:
          - generic [ref=e180]: 您还可以联系：
          - link "+65 3125 2302" [ref=e183] [cursor=pointer]:
            - /url: tel:+65 3125 2302
            - strong [ref=e184]: +65 3125 2302
            - strong
          - generic [ref=e185]: •
          - link "support@capital.com" [ref=e187] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e188]: support@capital.com
      - generic [ref=e189]:
        - generic [ref=e190]:
          - strong [ref=e192]: 交易
          - generic [ref=e193]:
            - generic [ref=e194]:
              - generic [ref=e195]: 交易
              - generic [ref=e196]:
                - link "差价合约 (CFD)交易" [ref=e198] [cursor=pointer]:
                  - /url: /zh-hans/ways-to-trade/cfd-trading
                - link "模拟交易" [ref=e200] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/demo-account
                - link "专业账户" [ref=e202] [cursor=pointer]:
                  - /url: /zh-hans/professional
            - generic [ref=e203]:
              - generic [ref=e204]: 平台
              - generic [ref=e205]:
                - link "网页版平台" [ref=e207] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/web-platform
                - link "手机 App" [ref=e209] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mobile-apps
                - link "TradingView" [ref=e211] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/trading-view
                - link "MT4" [ref=e213] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt4
                - link "MT5" [ref=e215] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt5
            - generic [ref=e216]:
              - generic [ref=e217]: 学习
              - generic [ref=e218]:
                - link "交易策略" [ref=e220] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-strategies
                - link "技术分析" [ref=e222] [cursor=pointer]:
                  - /url: /zh-hans/learn/technical-analysis
                - link "交易心理" [ref=e224] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-psychology
                - link "学习" [ref=e226] [cursor=pointer]:
                  - /url: /zh-hans/learn
        - generic [ref=e227]:
          - strong [ref=e229]: 市场
          - generic [ref=e230]:
            - generic [ref=e231]:
              - generic [ref=e232]: 我们的市场
              - generic [ref=e233]:
                - link "市场" [ref=e235] [cursor=pointer]:
                  - /url: /zh-hans/markets
                - link "股票" [ref=e237] [cursor=pointer]:
                  - /url: /zh-hans/markets/shares
                - link "外汇" [ref=e239] [cursor=pointer]:
                  - /url: /zh-hans/markets/forex
                - link "指数" [ref=e241] [cursor=pointer]:
                  - /url: /zh-hans/markets/indices
                - link "大宗商品" [ref=e243] [cursor=pointer]:
                  - /url: /zh-hans/markets/commodities
                - link "加密货币" [ref=e245] [cursor=pointer]:
                  - /url: /zh-hans/markets/cryptocurrencies
                - link "债券" [ref=e247] [cursor=pointer]:
                  - /url: /zh-hans/markets/bonds
                - link "利率" [ref=e249] [cursor=pointer]:
                  - /url: /zh-hans/markets/interest-rates
            - generic [ref=e250]:
              - generic [ref=e251]: 市场洞察
              - link "市场分析" [ref=e254] [cursor=pointer]:
                - /url: /zh-hans/analysis
        - link "定价" [ref=e257] [cursor=pointer]:
          - /url: /zh-hans/ways-to-trade/fees-and-charges
          - strong [ref=e258]: 定价
        - generic [ref=e259]:
          - strong [ref=e261]: 关于我们
          - generic [ref=e262]:
            - generic [ref=e263]:
              - generic [ref=e264]: 关于我们
              - generic [ref=e265]:
                - link "公司简介" [ref=e267] [cursor=pointer]:
                  - /url: /zh-hans/about-us
                - link "我们的办公室" [ref=e269] [cursor=pointer]:
                  - /url: /zh-hans/about-us/our-offices
                - link "Capital.com 安全吗？" [ref=e271] [cursor=pointer]:
                  - /url: /zh-hans/security-measures
                - link "我们的商业模式" [ref=e273] [cursor=pointer]:
                  - /url: /zh-hans/about-us/how-capital-makes-money
            - generic [ref=e274]:
              - generic [ref=e275]: 与我们合作
              - generic [ref=e276]:
                - link "合作伙伴计划" [ref=e278] [cursor=pointer]:
                  - /url: /zh-hans/partnerships
                - link "推荐好友" [ref=e280] [cursor=pointer]:
                  - /url: /zh-hans/refer-a-friend
            - generic [ref=e281]:
              - generic [ref=e282]: 帮助
              - generic [ref=e283]:
                - link "帮助" [ref=e285] [cursor=pointer]:
                  - /url: /zh-hans/help
                - link "客户脆弱性" [ref=e287] [cursor=pointer]:
                  - /url: /zh-hans/help/client-vulnerability
                - link "联系我们" [ref=e289] [cursor=pointer]:
                  - /url: /zh-hans/contact-us
            - generic [ref=e290]:
              - generic [ref=e291]: 法律信息
              - generic [ref=e292]:
                - link "条款和政策" [ref=e294] [cursor=pointer]:
                  - /url: /zh-hans/terms-and-policies
                - link "投诉" [ref=e296] [cursor=pointer]:
                  - /url: /zh-hans/help/complaints
    - generic [ref=e298]:
      - paragraph [ref=e299]:
        - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。
        - generic [ref=e300]:
          - text: 数据显示，
          - strong [ref=e301]: 78.48% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
          - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
      - paragraph [ref=e302]
      - paragraph [ref=e303]: Capital Com Online Investments Ltd 是一家有限责任公司，公司注册号为 209236B。Capital Com Online Investments Ltd 在巴哈马国注册，由巴哈马证券委员会授权，许可证号为 SIA-F245。公司注册办事处地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
    - generic [ref=e304]:
      - paragraph [ref=e305]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e306]:
        - link "网站地图" [ref=e307] [cursor=pointer]:
          - /url: /zh-hans/sitemap
        - link "Cookie 设置" [ref=e308] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /zh-hans
        - link "条款和政策" [ref=e309] [cursor=pointer]:
          - /url: /zh-hans/terms-and-policies
        - link "投诉程序 (SCB)" [ref=e310] [cursor=pointer]:
          - /url: /zh-hans/help/complaints
  - generic [ref=e313]:
    - generic [ref=e314]:
      - heading "Important Notice:" [level=3] [ref=e316]
      - generic [ref=e317]:
        - paragraph [ref=e318]: "The information on this website is not intended for, or directed at, any person or entity who is a resident of Singapore or any jurisdiction where such distribution or use would be contrary to local laws or regulations. By clicking \"I Confirm\", you expressly acknowledge and agree to the following:"
        - paragraph [ref=e319]: 1. You are accessing this website on your own initiative.
        - paragraph [ref=e320]: 2. You understand and accept that Capital Com Online Investments Ltd is not licensed or regulated by the Monetary Authority of Singapore (MAS) and is not authorized to provide financial services or solicit business in Singapore.
        - paragraph [ref=e321]: 3. You are not a resident of Singapore, or, if you are, you acknowledge that the information and services on this website are not intended for you and are being accessed at your own risk and responsibility.
        - paragraph [ref=e322]: If you do not agree with any of the above statements, please exit this site immediately.
    - button "I Confirm" [disabled]
  - button [ref=e323] [cursor=pointer]
  - dialog "Cookie banner" [ref=e325]:
    - generic [ref=e326]:
      - paragraph [ref=e328]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [active] [ref=e329] [cursor=pointer]:
          - /url: https://capital.com/cookies_policy_bah
          - text: Cookie Policy
        - text: .
      - generic [ref=e330]:
        - button "Reject all" [ref=e331] [cursor=pointer]
        - button "Allow all cookies" [ref=e332] [cursor=pointer]
        - button "Cookie settings" [ref=e333] [cursor=pointer]
  - alert [ref=e334]
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