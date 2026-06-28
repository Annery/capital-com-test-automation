# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: header/header-auth.spec.ts >> [SCB ZH_HANS | authorized] Header auth entry >> Open platform opens the trading platform
- Location: tests/header/header-auth.spec.ts:23:9

# Error details

```
Error: locator.click: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('#header-panel').locator('a[data-type="btn_header_my_account"]').filter({ visible: true }).first()
    - locator resolved to <a href="/trading/platform/" data-type="btn_header_my_account" class="rZW9e cCezE qIlmS Tb1of rMXd4 js-analyticsClick qAcWB">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="yPY0D oE9vH">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="yPY0D oE9vH">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    8 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="yPY0D oE9vH">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms


Call Log:
- Timeout 15000ms exceeded while waiting on the predicate
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
  - generic [ref=e39]:
    - generic [ref=e40]:
      - generic [ref=e44]:
        - heading "本地支持。 全球连通。" [level=2] [ref=e45]:
          - generic [ref=e46]: 本地支持。
          - text: 全球连通。
        - paragraph [ref=e47]: 本平台由巴哈马证券委员会 (SCB) 授权并监管
      - generic [ref=e51]:
        - generic [ref=e55]:
          - generic [ref=e57]:
            - heading "洞察市场、 明智交易" [level=1] [ref=e58]
            - generic [ref=e60]:
              - text: 全球范围
              - text: 差价合约 (CFD) 交易平台
              - text: 5500+ 交易品种
            - button "开立账户" [ref=e61] [cursor=pointer]: 开立账户
          - generic [ref=e62]:
            - generic:
              - generic:
                - img "Hero slide 1 Bottom"
          - generic [ref=e64]:
            - link "Android" [ref=e65] [cursor=pointer]:
              - /url: /zh-hans/trading-platforms/mobile-apps
            - link "iOS" [ref=e66] [cursor=pointer]:
              - /url: /zh-hans/trading-platforms/mobile-apps
            - link "MT4" [ref=e67] [cursor=pointer]:
              - /url: /zh-hans/trading-platforms/mt4
            - link "MT5" [ref=e68] [cursor=pointer]:
              - /url: /zh-hans/trading-platforms/mt5
            - link "TradingView" [ref=e69] [cursor=pointer]:
              - /url: /zh-hans/trading-platforms/trading-view
            - link "网页终端" [ref=e70] [cursor=pointer]:
              - /url: /zh-hans/trading-platforms/web-platform
        - generic [ref=e73]:
          - img [ref=e74]
          - generic [ref=e75]:
            - generic [ref=e76]:
              - heading "5500+ 交易品种 一个决策环境" [level=2] [ref=e77]:
                - text: 5500+ 交易品种
                - text: 一个决策环境
              - link "探索 CFD 市场" [ref=e78] [cursor=pointer]:
                - /url: /zh-hans/markets
            - list [ref=e82]:
              - listitem [ref=e83]:
                - button "大宗商品" [ref=e84] [cursor=pointer]:
                  - heading "大宗商品" [level=3] [ref=e87]
              - listitem [ref=e88]:
                - button "加密货币" [ref=e89] [cursor=pointer]:
                  - heading "加密货币" [level=3] [ref=e92]
              - listitem [ref=e93]:
                - button "股票" [ref=e94] [cursor=pointer]:
                  - heading "股票" [level=3] [ref=e97]
              - listitem [ref=e98]:
                - button "债券" [ref=e99] [cursor=pointer]:
                  - heading "债券" [level=3] [ref=e102]
              - listitem [ref=e103]:
                - button "ETF" [ref=e104] [cursor=pointer]:
                  - heading "ETF" [level=3] [ref=e107]
              - listitem [ref=e108]:
                - button "指数" [ref=e109] [cursor=pointer]:
                  - heading "指数" [level=3] [ref=e112]
              - listitem [ref=e113]:
                - button "利率" [ref=e114] [cursor=pointer]:
                  - heading "利率" [level=3] [ref=e117]
              - listitem [ref=e118]:
                - button "大宗商品" [ref=e119] [cursor=pointer]:
                  - heading "大宗商品" [level=3] [ref=e122]
              - listitem [ref=e123]:
                - button "加密货币" [ref=e124] [cursor=pointer]:
                  - heading "加密货币" [level=3] [ref=e127]
              - listitem [ref=e128]:
                - button "股票" [ref=e129] [cursor=pointer]:
                  - heading "股票" [level=3] [ref=e132]
              - listitem [ref=e133]:
                - button "债券" [ref=e134] [cursor=pointer]:
                  - heading "债券" [level=3] [ref=e137]
              - listitem [ref=e138]:
                - button "ETF" [ref=e139] [cursor=pointer]:
                  - heading "ETF" [level=3] [ref=e142]
              - listitem [ref=e143]:
                - button "指数" [ref=e144] [cursor=pointer]:
                  - heading "指数" [level=3] [ref=e147]
              - listitem [ref=e148]:
                - button "利率" [ref=e149] [cursor=pointer]:
                  - heading "利率" [level=3] [ref=e152]
              - listitem [ref=e153]:
                - button "大宗商品" [ref=e154] [cursor=pointer]:
                  - heading "大宗商品" [level=3] [ref=e157]
              - listitem [ref=e158]:
                - button "加密货币" [ref=e159] [cursor=pointer]:
                  - heading "加密货币" [level=3] [ref=e162]
              - listitem [ref=e163]:
                - button "股票" [ref=e164] [cursor=pointer]:
                  - heading "股票" [level=3] [ref=e167]
              - listitem [ref=e168]:
                - button "债券" [ref=e169] [cursor=pointer]:
                  - heading "债券" [level=3] [ref=e172]
              - listitem [ref=e173]:
                - button "ETF" [ref=e174] [cursor=pointer]:
                  - heading "ETF" [level=3] [ref=e177]
              - listitem [ref=e178]:
                - button "指数" [ref=e179] [cursor=pointer]:
                  - heading "指数" [level=3] [ref=e182]
              - listitem [ref=e183]:
                - button "利率" [ref=e184] [cursor=pointer]:
                  - heading "利率" [level=3] [ref=e187]
    - generic [ref=e188]:
      - generic [ref=e190]:
        - heading "不同页面， 同一系统。" [level=2] [ref=e191]:
          - text: 不同页面，
          - generic [ref=e192]: 同一系统。
        - paragraph [ref=e193]: 多平台、全市场、任意设备。为您打造方便智能的交易环境。
        - generic [ref=e194]:
          - link [ref=e195] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
          - link [ref=e196] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
          - link [ref=e197] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
      - generic:
        - generic:
          - generic:
            - img "Mobile platform"
        - generic:
          - generic:
            - img "Web platform"
    - generic [ref=e198]:
      - img [ref=e199]
      - generic [ref=e201]:
        - heading "透明的费用结构，让您安心交易" [level=2] [ref=e202]
        - generic [ref=e203]:
          - list [ref=e204]:
            - listitem [ref=e205]:
              - heading "我们的收益来自已执行交易中的点差" [level=3] [ref=e206]
              - paragraph [ref=e207]: 清晰透明、一目了然。
            - listitem [ref=e208]:
              - heading "无手续费存款和提款" [level=3] [ref=e209]
              - paragraph [ref=e210]: 安全的支付方式。支持银行转账、银行卡和数字钱包。
          - generic [ref=e211]:
            - generic [ref=e212]: 我们的完整费用结构可在我们的
            - link "收费及费用页面查阅。" [ref=e213] [cursor=pointer]:
              - /url: /zh-hans/ways-to-trade/fees-and-charges
    - generic [ref=e214]:
      - generic [ref=e216]:
        - img "risk graph 1" [ref=e218]
        - img "risk graph 2" [ref=e220]
      - generic [ref=e221]:
        - generic [ref=e223]:
          - heading "大多数交易者都会亏损" [level=2] [ref=e225]
          - heading "市场环境会影响投资结果" [level=2] [ref=e227]
          - heading "但真正拉开差距的，是每一次决策" [level=2] [ref=e229]
        - generic [ref=e230]:
          - generic [ref=e232]:
            - heading "蓄势待发。" [level=2] [ref=e233]
            - heading "处变不惊。" [level=2] [ref=e234]
          - generic [ref=e235]:
            - generic [ref=e236]:
              - heading "交易前设置止损" [level=3] [ref=e237]
              - img "trading" [ref=e239]
            - generic [ref=e240]:
              - heading "选择杠杆" [level=3] [ref=e241]
              - img "cfd" [ref=e243]
              - img "leverage" [ref=e245]
            - generic [ref=e246]:
              - heading "确认订单" [level=3] [ref=e247]
              - img "bottomSheet" [ref=e249]
    - generic [ref=e250]:
      - generic [ref=e251]:
        - heading "数据会说话。 信任，同样经得起验证。" [level=2] [ref=e253]:
          - text: 数据会说话。
          - text: 信任，同样经得起验证。
        - generic [ref=e254]:
          - img "Secondary phone" [ref=e257]
          - img "Main phone" [ref=e260]
      - list [ref=e266]:
        - listitem [ref=e267]:
          - link "4.7 评分与评价" [ref=e268] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e269]: "4.7"
            - generic [ref=e270]: 评分与评价
        - listitem [ref=e271]:
          - link "4.7 评分与评价" [ref=e272] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e273]: "4.7"
            - generic [ref=e274]: 评分与评价
        - listitem [ref=e275]:
          - link "4.6 TradingView" [ref=e276] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - generic [ref=e277]: "4.6"
            - generic [ref=e278]: TradingView
        - listitem [ref=e279]:
          - link "4.6 Trustpilot" [ref=e280] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - generic [ref=e281]: "4.6"
            - generic [ref=e282]: Trustpilot
        - listitem [ref=e283]:
          - link "4.7 评分与评价" [ref=e284] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e285]: "4.7"
            - generic [ref=e286]: 评分与评价
        - listitem [ref=e287]:
          - link "4.7 评分与评价" [ref=e288] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e289]: "4.7"
            - generic [ref=e290]: 评分与评价
        - listitem [ref=e291]:
          - link "4.6 TradingView" [ref=e292] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - generic [ref=e293]: "4.6"
            - generic [ref=e294]: TradingView
        - listitem [ref=e295]:
          - link "4.6 Trustpilot" [ref=e296] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - generic [ref=e297]: "4.6"
            - generic [ref=e298]: Trustpilot
        - listitem [ref=e299]:
          - link "4.7 评分与评价" [ref=e300] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e301]: "4.7"
            - generic [ref=e302]: 评分与评价
        - listitem [ref=e303]:
          - link "4.7 评分与评价" [ref=e304] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e305]: "4.7"
            - generic [ref=e306]: 评分与评价
        - listitem [ref=e307]:
          - link "4.6 TradingView" [ref=e308] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - generic [ref=e309]: "4.6"
            - generic [ref=e310]: TradingView
        - listitem [ref=e311]:
          - link "4.6 Trustpilot" [ref=e312] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - generic [ref=e313]: "4.6"
            - generic [ref=e314]: Trustpilot
  - contentinfo [ref=e316]:
    - generic [ref=e317]:
      - link [ref=e318] [cursor=pointer]:
        - /url: /zh-hans
        - img [ref=e319]
      - generic [ref=e323]:
        - link [ref=e324] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e325] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e326] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e327] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e328] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e329] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e330]:
        - link [ref=e331] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e332] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e333] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e334]:
      - generic [ref=e335]:
        - generic [ref=e336]:
          - generic [ref=e337]:
            - generic [ref=e338]: "国家/地区:"
            - button "Singapore" [ref=e339] [cursor=pointer]:
              - generic [ref=e341]: Singapore
          - generic [ref=e342]: •
          - generic [ref=e343]:
            - generic [ref=e344]: "语言:"
            - button "Simplified Chinese" [ref=e345] [cursor=pointer]:
              - generic [ref=e346]: Simplified Chinese
        - generic [ref=e347]:
          - generic [ref=e348]: 您还可以联系：
          - link "+65 3125 2302" [ref=e351] [cursor=pointer]:
            - /url: tel:+65 3125 2302
            - strong [ref=e352]: +65 3125 2302
            - strong
          - generic [ref=e353]: •
          - link "support@capital.com" [ref=e355] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e356]: support@capital.com
      - generic [ref=e357]:
        - generic [ref=e358]:
          - strong [ref=e360]: 交易
          - generic [ref=e361]:
            - generic [ref=e362]:
              - generic [ref=e363]: 交易
              - generic [ref=e364]:
                - link "差价合约 (CFD)交易" [ref=e366] [cursor=pointer]:
                  - /url: /zh-hans/ways-to-trade/cfd-trading
                - link "模拟交易" [ref=e368] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/demo-account
                - link "专业账户" [ref=e370] [cursor=pointer]:
                  - /url: /zh-hans/professional
            - generic [ref=e371]:
              - generic [ref=e372]: 平台
              - generic [ref=e373]:
                - link "网页版平台" [ref=e375] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/web-platform
                - link "手机 App" [ref=e377] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mobile-apps
                - link "TradingView" [ref=e379] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/trading-view
                - link "MT4" [ref=e381] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt4
                - link "MT5" [ref=e383] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt5
            - generic [ref=e384]:
              - generic [ref=e385]: 学习
              - generic [ref=e386]:
                - link "交易策略" [ref=e388] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-strategies
                - link "技术分析" [ref=e390] [cursor=pointer]:
                  - /url: /zh-hans/learn/technical-analysis
                - link "交易心理" [ref=e392] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-psychology
                - link "学习" [ref=e394] [cursor=pointer]:
                  - /url: /zh-hans/learn
        - generic [ref=e395]:
          - strong [ref=e397]: 市场
          - generic [ref=e398]:
            - generic [ref=e399]:
              - generic [ref=e400]: 我们的市场
              - generic [ref=e401]:
                - link "市场" [ref=e403] [cursor=pointer]:
                  - /url: /zh-hans/markets
                - link "股票" [ref=e405] [cursor=pointer]:
                  - /url: /zh-hans/markets/shares
                - link "外汇" [ref=e407] [cursor=pointer]:
                  - /url: /zh-hans/markets/forex
                - link "指数" [ref=e409] [cursor=pointer]:
                  - /url: /zh-hans/markets/indices
                - link "大宗商品" [ref=e411] [cursor=pointer]:
                  - /url: /zh-hans/markets/commodities
                - link "加密货币" [ref=e413] [cursor=pointer]:
                  - /url: /zh-hans/markets/cryptocurrencies
                - link "债券" [ref=e415] [cursor=pointer]:
                  - /url: /zh-hans/markets/bonds
                - link "利率" [ref=e417] [cursor=pointer]:
                  - /url: /zh-hans/markets/interest-rates
            - generic [ref=e418]:
              - generic [ref=e419]: 市场洞察
              - link "市场分析" [ref=e422] [cursor=pointer]:
                - /url: /zh-hans/analysis
        - link "定价" [ref=e425] [cursor=pointer]:
          - /url: /zh-hans/ways-to-trade/fees-and-charges
          - strong [ref=e426]: 定价
        - generic [ref=e427]:
          - strong [ref=e429]: 关于我们
          - generic [ref=e430]:
            - generic [ref=e431]:
              - generic [ref=e432]: 关于我们
              - generic [ref=e433]:
                - link "公司简介" [ref=e435] [cursor=pointer]:
                  - /url: /zh-hans/about-us
                - link "我们的办公室" [ref=e437] [cursor=pointer]:
                  - /url: /zh-hans/about-us/our-offices
                - link "Capital.com 安全吗？" [ref=e439] [cursor=pointer]:
                  - /url: /zh-hans/security-measures
                - link "我们的商业模式" [ref=e441] [cursor=pointer]:
                  - /url: /zh-hans/about-us/how-capital-makes-money
            - generic [ref=e442]:
              - generic [ref=e443]: 与我们合作
              - generic [ref=e444]:
                - link "合作伙伴计划" [ref=e446] [cursor=pointer]:
                  - /url: /zh-hans/partnerships
                - link "推荐好友" [ref=e448] [cursor=pointer]:
                  - /url: /zh-hans/refer-a-friend
            - generic [ref=e449]:
              - generic [ref=e450]: 帮助
              - generic [ref=e451]:
                - link "帮助" [ref=e453] [cursor=pointer]:
                  - /url: /zh-hans/help
                - link "客户脆弱性" [ref=e455] [cursor=pointer]:
                  - /url: /zh-hans/help/client-vulnerability
                - link "联系我们" [ref=e457] [cursor=pointer]:
                  - /url: /zh-hans/contact-us
            - generic [ref=e458]:
              - generic [ref=e459]: 法律信息
              - generic [ref=e460]:
                - link "条款和政策" [ref=e462] [cursor=pointer]:
                  - /url: /zh-hans/terms-and-policies
                - link "投诉" [ref=e464] [cursor=pointer]:
                  - /url: /zh-hans/help/complaints
    - generic [ref=e466]:
      - paragraph [ref=e467]:
        - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。
        - generic [ref=e468]:
          - text: 数据显示，
          - strong [ref=e469]: 78.48% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
          - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
      - paragraph [ref=e470]
      - paragraph [ref=e471]: Capital Com Online Investments Ltd 是一家有限责任公司，公司注册号为 209236B。Capital Com Online Investments Ltd 在巴哈马国注册，由巴哈马证券委员会授权，许可证号为 SIA-F245。公司注册办事处地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
    - generic [ref=e472]:
      - paragraph [ref=e473]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e474]:
        - link "网站地图" [ref=e475] [cursor=pointer]:
          - /url: /zh-hans/sitemap
        - link "Cookie 设置" [ref=e476] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /zh-hans
        - link "条款和政策" [ref=e477] [cursor=pointer]:
          - /url: /zh-hans/terms-and-policies
        - link "投诉程序 (SCB)" [ref=e478] [cursor=pointer]:
          - /url: /zh-hans/help/complaints
  - generic [ref=e481]:
    - generic [ref=e482]:
      - heading "Important Notice:" [level=3] [ref=e484]
      - generic [ref=e485]:
        - paragraph [ref=e486]: "The information on this website is not intended for, or directed at, any person or entity who is a resident of Singapore or any jurisdiction where such distribution or use would be contrary to local laws or regulations. By clicking \"I Confirm\", you expressly acknowledge and agree to the following:"
        - paragraph [ref=e487]: 1. You are accessing this website on your own initiative.
        - paragraph [ref=e488]: 2. You understand and accept that Capital Com Online Investments Ltd is not licensed or regulated by the Monetary Authority of Singapore (MAS) and is not authorized to provide financial services or solicit business in Singapore.
        - paragraph [ref=e489]: 3. You are not a resident of Singapore, or, if you are, you acknowledge that the information and services on this website are not intended for you and are being accessed at your own risk and responsibility.
        - paragraph [ref=e490]: If you do not agree with any of the above statements, please exit this site immediately.
    - button "I Confirm" [disabled]
  - button [ref=e491] [cursor=pointer]
  - dialog "Cookie banner" [ref=e493]:
    - generic [ref=e494]:
      - paragraph [ref=e496]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [active] [ref=e497] [cursor=pointer]:
          - /url: https://capital.com/cookies_policy_bah
          - text: Cookie Policy
        - text: .
      - generic [ref=e498]:
        - button "Reject all" [ref=e499] [cursor=pointer]
        - button "Allow all cookies" [ref=e500] [cursor=pointer]
        - button "Cookie settings" [ref=e501] [cursor=pointer]
  - alert [ref=e502]
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