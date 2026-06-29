# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/trading.spec.ts >> [SCB ZH_HANS | authorized] Trading / Learn / Technical analysis >> [banner_with_steps] -> platformPage
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
      - text: 技术分析
    - generic [ref=e45]:
      - generic [ref=e50]:
        - heading "技术分析：通过图表和数据揭示趋势" [level=1] [ref=e51]
        - paragraph [ref=e53]: 从理解移动平均线到识别模式和策略，通过以下指南了解技术分析。
      - generic [ref=e58]:
        - generic [ref=e59]:
          - heading "移動平均線文章" [level=2] [ref=e60]
          - paragraph [ref=e62]: 了解技術分析中的交易工具，這些工具用於計算歷史平均價格。
        - generic [ref=e63]:
          - generic [ref=e64]:
            - img "Moving average" [ref=e66]
            - generic [ref=e67]:
              - heading "移動平均線" [level=3] [ref=e68]
              - generic [ref=e69]: 更深入理解歷史價格。
              - link "移动平均线指南" [ref=e70] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/moving-average
                - generic [ref=e71]: 移动平均线指南
          - generic [ref=e72]:
            - img "EMA" [ref=e74]
            - generic [ref=e75]:
              - heading "指數移動平均線 (EMA)" [level=3] [ref=e76]
              - generic [ref=e77]: 一種包含更多數據權重的移動平均線。
              - link "指数移动平均线 (EMA) 指南" [ref=e78] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/exponential-moving-average
                - generic [ref=e79]: 指数移动平均线 (EMA) 指南
          - generic [ref=e80]:
            - img "HMA" [ref=e82]
            - generic [ref=e83]:
              - heading "赫爾移動平均線 (HMA)" [level=3] [ref=e84]
              - generic [ref=e85]: 一種快速且平滑的移動平均線。
              - link "Hull 移动平均线指南" [ref=e86] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/hull-moving-average
                - generic [ref=e87]: Hull 移动平均线指南
          - generic [ref=e88]:
            - img "Arnaud Legoux" [ref=e90]
            - generic [ref=e91]:
              - heading "Arnaud Legoux" [level=3] [ref=e92]
              - generic [ref=e93]: 一种减少滞后和噪音的移动平均线。
              - link "Arnaud Legoux 指南" [ref=e94] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/arnaud-legoux-moving-average
                - generic [ref=e95]: Arnaud Legoux 指南
      - generic [ref=e98]:
        - generic [ref=e99]:
          - heading "形態與策略文章" [level=2] [ref=e100]
          - paragraph [ref=e102]: 探索能夠揭示歷史與潛在價格走勢的技術形態。
        - generic [ref=e103]:
          - generic [ref=e104]:
            - img "Candlestick-patterns" [ref=e106]
            - generic [ref=e107]:
              - heading "蜡烛图形态" [level=3] [ref=e108]
              - generic [ref=e109]: 使用蜡烛图进行价格趋势分析。
              - link "K线形态指南" [ref=e110] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/candlestick-patterns
                - generic [ref=e111]: K线形态指南
          - generic [ref=e112]:
            - img "Heikin-Ashi-candlesticks" [ref=e114]
            - generic [ref=e115]:
              - heading "平均足蜡烛图" [level=3] [ref=e116]
              - generic [ref=e117]: 用于增强趋势的突出显示。
              - link "平均K线 (Heikin-Ashi) 指南" [ref=e118] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/heikin-ashi-trading-strategy
                - generic [ref=e119]: 平均K线 (Heikin-Ashi) 指南
          - generic [ref=e120]:
            - img "Fibonacci retracements" [ref=e122]
            - generic [ref=e123]:
              - heading "斐波那契回撤" [level=3] [ref=e124]
              - generic [ref=e125]: 用於識別關鍵支撐與阻力水平。
              - link "斐波那契回撤指南" [ref=e126] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/fibonacci-retracement-strategy
                - generic [ref=e127]: 斐波那契回撤指南
          - generic [ref=e128]:
            - img "Bollinger bands" [ref=e130]
            - generic [ref=e131]:
              - heading "布林通道®" [level=3] [ref=e132]
              - generic [ref=e133]: 波動率與趨勢指標。
              - link "布林带® 指南" [ref=e134] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/bollinger-bands
                - generic [ref=e135]: 布林带® 指南
          - generic [ref=e136]:
            - img "Head and shoulders" [ref=e138]
            - generic [ref=e139]:
              - heading "頭肩頂與頭肩底" [level=3] [ref=e140]
              - generic [ref=e141]: 技術分析中的圖表形態。
              - link "头肩形态指南" [ref=e142] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/head-and-shoulders-chart-pattern
                - generic [ref=e143]: 头肩形态指南
          - generic [ref=e144]:
            - img "Support and resistance" [ref=e146]
            - generic [ref=e147]:
              - heading "支撑与阻力" [level=3] [ref=e148]
              - generic [ref=e149]: 来自历史走势的关键价格水平。
              - link "支撑与阻力指南" [ref=e150] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/support-and-resistance-trading-strategy
                - generic [ref=e151]: 支撑与阻力指南
      - generic [ref=e154]:
        - generic [ref=e155]:
          - heading "指標與震盪指標指南" [level=2] [ref=e156]
          - paragraph [ref=e158]: 深入了解預測市場價格變動的技術分析工具。
        - generic [ref=e159]:
          - generic [ref=e160]:
            - img "RSI" [ref=e162]
            - generic [ref=e163]:
              - heading "相對強弱指數 (RSI)" [level=3] [ref=e164]
              - generic [ref=e165]: 動能指標，用於衡量超買與超賣狀態。
              - link "相对强弱指数 (RSI) 指南" [ref=e166] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/relative-strength-index
                - generic [ref=e167]: 相对强弱指数 (RSI) 指南
          - generic [ref=e168]:
            - img "ADX" [ref=e170]
            - generic [ref=e171]:
              - heading "平均方向指数" [level=3] [ref=e172]
              - generic [ref=e173]: 趋势强度管理工具。
              - link "平均方向性指数 (ADX) 指南" [ref=e174] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/average-directional-index
                - generic [ref=e175]: 平均方向性指数 (ADX) 指南
          - generic [ref=e176]:
            - img "McGinley dynamic indicator" [ref=e178]
            - generic [ref=e179]:
              - heading "麦金利动态指标" [level=3] [ref=e180]
              - generic [ref=e181]: 平滑的价格动量指标。
              - link "McGinley 动态指标指南" [ref=e182] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/mcginley-dynamic-indicator
                - generic [ref=e183]: McGinley 动态指标指南
          - generic [ref=e184]:
            - img "ATR" [ref=e186]
            - generic [ref=e187]:
              - heading "平均真实范围" [level=3] [ref=e188]
              - generic [ref=e189]: 衡量交易中的波动性。
              - link "平均真实波幅 (ATR) 指南" [ref=e190] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/average-true-range-trading-strategy
                - generic [ref=e191]: 平均真实波幅 (ATR) 指南
          - generic [ref=e192]:
            - img "ADL" [ref=e194]
            - generic [ref=e195]:
              - heading "累积/派发线" [level=3] [ref=e196]
              - generic [ref=e197]: 用于基于成交量的价格趋势分析。
              - link "成交量积累/分布线指南" [ref=e198] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/accumulation-distribution-line
                - generic [ref=e199]: 成交量积累/分布线指南
          - generic [ref=e200]:
            - img "Mass Index" [ref=e202]
            - generic [ref=e203]:
              - heading "质量指数" [level=3] [ref=e204]
              - generic [ref=e205]: 用于检测潜在的趋势反转。
              - link "质量指数 (Mass Index) 指南" [ref=e206] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/mass-index
                - generic [ref=e207]: 质量指数 (Mass Index) 指南
          - generic [ref=e208]:
            - img "MACD image" [ref=e210]
            - generic [ref=e211]:
              - heading "MACD 指標" [level=3] [ref=e212]
              - generic [ref=e213]: 用於交易趨勢的動能震盪指標。
              - link "MACD 指南" [ref=e214] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/macd-trading-strategy
                - generic [ref=e215]: MACD 指南
          - generic [ref=e216]:
            - img "PSAR" [ref=e218]
            - generic [ref=e219]:
              - heading "抛物线SAR" [level=3] [ref=e220]
              - generic [ref=e221]: 追踪止损和趋势跟踪工具。
              - link "抛物线 SAR 指南" [ref=e222] [cursor=pointer]:
                - /url: /zh-hans/learn/technical-analysis/parabolic-sar
                - generic [ref=e223]: 抛物线 SAR 指南
      - generic [ref=e225]:
        - generic [ref=e226]:
          - heading "拓展您的交易能力" [level=2] [ref=e227]
          - generic [ref=e228]: 獲取更多資源，以提升您的交易技能並強化您的交易策略。
        - generic [ref=e231]:
          - heading "交易策略" [level=3] [ref=e232]
          - paragraph [ref=e234]: 了解關鍵的策略概念與技術，幫助您重新思考下一筆交易的方式。
          - link "查看交易策略指南" [ref=e235] [cursor=pointer]:
            - /url: https://capital.com/zh-hans/learn/trading-strategies
            - generic [ref=e236]: 查看交易策略指南
      - generic [ref=e239]:
        - heading "三步即可开始交易" [level=2] [ref=e241]
        - generic [ref=e242]:
          - button [ref=e244] [cursor=pointer]
          - generic [ref=e247]: 1. 创建您的账户（须符合资格要求）
          - generic [ref=e248]: 2. 按您的方式存款
          - generic [ref=e249]: 3. 准备就绪后即可开始交易
  - contentinfo [ref=e251]:
    - generic [ref=e252]:
      - link [ref=e253] [cursor=pointer]:
        - /url: /zh-hans
        - img [ref=e254]
      - generic [ref=e258]:
        - link [ref=e259] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e260] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e261] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e262] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e263] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e264] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e265]:
        - link [ref=e266] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e267] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e268] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e269]:
      - generic [ref=e270]:
        - generic [ref=e271]:
          - generic [ref=e272]:
            - generic [ref=e273]: "国家/地区:"
            - button "Singapore" [ref=e274] [cursor=pointer]:
              - generic [ref=e276]: Singapore
          - generic [ref=e277]: •
          - generic [ref=e278]:
            - generic [ref=e279]: "语言:"
            - button "Simplified Chinese" [ref=e280] [cursor=pointer]:
              - generic [ref=e281]: Simplified Chinese
        - generic [ref=e282]:
          - generic [ref=e283]: 您还可以联系：
          - link "+65 3125 2302" [ref=e286] [cursor=pointer]:
            - /url: tel:+65 3125 2302
            - strong [ref=e287]: +65 3125 2302
            - strong
          - generic [ref=e288]: •
          - link "support@capital.com" [ref=e290] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e291]: support@capital.com
      - generic [ref=e292]:
        - generic [ref=e293]:
          - strong [ref=e295]: 交易
          - generic [ref=e296]:
            - generic [ref=e297]:
              - generic [ref=e298]: 交易
              - generic [ref=e299]:
                - link "差价合约 (CFD)交易" [ref=e301] [cursor=pointer]:
                  - /url: /zh-hans/ways-to-trade/cfd-trading
                - link "模拟交易" [ref=e303] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/demo-account
                - link "专业账户" [ref=e305] [cursor=pointer]:
                  - /url: /zh-hans/professional
            - generic [ref=e306]:
              - generic [ref=e307]: 平台
              - generic [ref=e308]:
                - link "网页版平台" [ref=e310] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/web-platform
                - link "手机 App" [ref=e312] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mobile-apps
                - link "TradingView" [ref=e314] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/trading-view
                - link "MT4" [ref=e316] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt4
                - link "MT5" [ref=e318] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt5
            - generic [ref=e319]:
              - generic [ref=e320]: 学习
              - generic [ref=e321]:
                - link "交易策略" [ref=e323] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-strategies
                - link "技术分析" [ref=e325] [cursor=pointer]:
                  - /url: /zh-hans/learn/technical-analysis
                - link "交易心理" [ref=e327] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-psychology
                - link "学习" [ref=e329] [cursor=pointer]:
                  - /url: /zh-hans/learn
        - generic [ref=e330]:
          - strong [ref=e332]: 市场
          - generic [ref=e333]:
            - generic [ref=e334]:
              - generic [ref=e335]: 我们的市场
              - generic [ref=e336]:
                - link "市场" [ref=e338] [cursor=pointer]:
                  - /url: /zh-hans/markets
                - link "股票" [ref=e340] [cursor=pointer]:
                  - /url: /zh-hans/markets/shares
                - link "外汇" [ref=e342] [cursor=pointer]:
                  - /url: /zh-hans/markets/forex
                - link "指数" [ref=e344] [cursor=pointer]:
                  - /url: /zh-hans/markets/indices
                - link "大宗商品" [ref=e346] [cursor=pointer]:
                  - /url: /zh-hans/markets/commodities
                - link "加密货币" [ref=e348] [cursor=pointer]:
                  - /url: /zh-hans/markets/cryptocurrencies
                - link "债券" [ref=e350] [cursor=pointer]:
                  - /url: /zh-hans/markets/bonds
                - link "利率" [ref=e352] [cursor=pointer]:
                  - /url: /zh-hans/markets/interest-rates
            - generic [ref=e353]:
              - generic [ref=e354]: 市场洞察
              - link "市场分析" [ref=e357] [cursor=pointer]:
                - /url: /zh-hans/analysis
        - link "定价" [ref=e360] [cursor=pointer]:
          - /url: /zh-hans/ways-to-trade/fees-and-charges
          - strong [ref=e361]: 定价
        - generic [ref=e362]:
          - strong [ref=e364]: 关于我们
          - generic [ref=e365]:
            - generic [ref=e366]:
              - generic [ref=e367]: 关于我们
              - generic [ref=e368]:
                - link "公司简介" [ref=e370] [cursor=pointer]:
                  - /url: /zh-hans/about-us
                - link "我们的办公室" [ref=e372] [cursor=pointer]:
                  - /url: /zh-hans/about-us/our-offices
                - link "Capital.com 安全吗？" [ref=e374] [cursor=pointer]:
                  - /url: /zh-hans/security-measures
                - link "我们的商业模式" [ref=e376] [cursor=pointer]:
                  - /url: /zh-hans/about-us/how-capital-makes-money
            - generic [ref=e377]:
              - generic [ref=e378]: 与我们合作
              - generic [ref=e379]:
                - link "合作伙伴计划" [ref=e381] [cursor=pointer]:
                  - /url: /zh-hans/partnerships
                - link "推荐好友" [ref=e383] [cursor=pointer]:
                  - /url: /zh-hans/refer-a-friend
            - generic [ref=e384]:
              - generic [ref=e385]: 帮助
              - generic [ref=e386]:
                - link "帮助" [ref=e388] [cursor=pointer]:
                  - /url: /zh-hans/help
                - link "客户脆弱性" [ref=e390] [cursor=pointer]:
                  - /url: /zh-hans/help/client-vulnerability
                - link "联系我们" [ref=e392] [cursor=pointer]:
                  - /url: /zh-hans/contact-us
            - generic [ref=e393]:
              - generic [ref=e394]: 法律信息
              - generic [ref=e395]:
                - link "条款和政策" [ref=e397] [cursor=pointer]:
                  - /url: /zh-hans/terms-and-policies
                - link "投诉" [ref=e399] [cursor=pointer]:
                  - /url: /zh-hans/help/complaints
    - generic [ref=e401]:
      - paragraph [ref=e402]:
        - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。
        - generic [ref=e403]:
          - text: 数据显示，
          - strong [ref=e404]: 78.48% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
          - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
      - paragraph [ref=e405]
      - paragraph [ref=e406]: Capital Com Online Investments Ltd 是一家有限责任公司，公司注册号为 209236B。Capital Com Online Investments Ltd 在巴哈马国注册，由巴哈马证券委员会授权，许可证号为 SIA-F245。公司注册办事处地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
    - generic [ref=e407]:
      - paragraph [ref=e408]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e409]:
        - link "网站地图" [ref=e410] [cursor=pointer]:
          - /url: /zh-hans/sitemap
        - link "Cookie 设置" [ref=e411] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /zh-hans
        - link "条款和政策" [ref=e412] [cursor=pointer]:
          - /url: /zh-hans/terms-and-policies
        - link "投诉程序 (SCB)" [ref=e413] [cursor=pointer]:
          - /url: /zh-hans/help/complaints
  - generic [ref=e416]:
    - generic [ref=e417]:
      - heading "Important Notice:" [level=3] [ref=e419]
      - generic [ref=e420]:
        - paragraph [ref=e421]: "The information on this website is not intended for, or directed at, any person or entity who is a resident of Singapore or any jurisdiction where such distribution or use would be contrary to local laws or regulations. By clicking \"I Confirm\", you expressly acknowledge and agree to the following:"
        - paragraph [ref=e422]: 1. You are accessing this website on your own initiative.
        - paragraph [ref=e423]: 2. You understand and accept that Capital Com Online Investments Ltd is not licensed or regulated by the Monetary Authority of Singapore (MAS) and is not authorized to provide financial services or solicit business in Singapore.
        - paragraph [ref=e424]: 3. You are not a resident of Singapore, or, if you are, you acknowledge that the information and services on this website are not intended for you and are being accessed at your own risk and responsibility.
        - paragraph [ref=e425]: If you do not agree with any of the above statements, please exit this site immediately.
    - button "I Confirm" [disabled]
  - button [ref=e426] [cursor=pointer]
  - dialog "Cookie banner" [ref=e428]:
    - generic [ref=e429]:
      - paragraph [ref=e431]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [active] [ref=e432] [cursor=pointer]:
          - /url: https://capital.com/cookies_policy_bah
          - text: Cookie Policy
        - text: .
      - generic [ref=e433]:
        - button "Reject all" [ref=e434] [cursor=pointer]
        - button "Allow all cookies" [ref=e435] [cursor=pointer]
        - button "Cookie settings" [ref=e436] [cursor=pointer]
  - alert [ref=e437]
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