# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/about.spec.ts >> [SCB ZH_HANS | authorized] About / Help / Contact us >> [banner_with_steps] -> platformPage
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
      - text: 联系我们
    - generic [ref=e43]:
      - generic [ref=e49]:
        - heading "联系我们" [level=1] [ref=e50]
        - paragraph [ref=e52]: 我们的支持团队可通过电子邮件、电话和在线聊天为您提供帮助。 我们会尽快回复您。
      - generic [ref=e56]:
        - generic [ref=e58]:
          - heading "电子邮件" [level=3] [ref=e59]
          - link "support@capital.com" [ref=e60] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - generic [ref=e61]: support@capital.com
        - generic [ref=e63]:
          - heading "电话" [level=3] [ref=e64]
          - link "+65 3125 2302" [ref=e65] [cursor=pointer]:
            - /url: tel:+6531252302
            - generic [ref=e66]: +65 3125 2302
        - generic [ref=e68]:
          - heading "在线聊天" [level=3] [ref=e69]
          - link "WhatsApp" [ref=e70] [cursor=pointer]:
            - /url: https://wa.me/447897000276
            - generic [ref=e71]: WhatsApp
        - generic [ref=e73]:
          - heading "支持中心" [level=3] [ref=e74]
          - link "前往" [ref=e75] [cursor=pointer]:
            - /url: /zh-hans/help
            - generic [ref=e76]: 前往
        - generic [ref=e78]:
          - heading "提交请求" [level=3] [ref=e79]
          - link "前往" [ref=e80] [cursor=pointer]:
            - /url: https://help.capitalccbah.com/hc/zh-tw/requests/new
            - generic [ref=e81]: 前往
      - generic [ref=e90]:
        - strong [ref=e91]: 我们的巴哈马办公室
        - generic [ref=e92]:
          - paragraph [ref=e93]:
            - text: Capital Com Online Investments Ltd
            - text: "#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012,"
            - text: Nassau, The Bahamas
          - paragraph [ref=e94]
      - generic [ref=e96]:
        - heading "进一步了解我们" [level=2] [ref=e98]
        - generic [ref=e99]:
          - generic [ref=e101]:
            - heading "我们的全球办公室" [level=3] [ref=e102]
            - paragraph [ref=e104]: 我们的办公室遍布欧洲、中东和亚太地区。 在七个司法管辖区受到监管。
            - link "查看所有办公地点" [ref=e105] [cursor=pointer]:
              - /url: /zh-hans/about-us/our-offices
              - generic [ref=e106]: 查看所有办公地点
          - generic [ref=e108]:
            - heading "关于我们" [level=3] [ref=e109]
            - paragraph [ref=e111]: 了解 Capital.com 背后的故事、塑造平台运作方式的理念，以及打造这一平台的团队。
            - link "了解更多" [ref=e112] [cursor=pointer]:
              - /url: /zh-hans/about-us
              - generic [ref=e113]: 了解更多
      - generic [ref=e114]:
        - generic [ref=e116]:
          - heading "用户反馈与评分" [level=2] [ref=e117]
          - generic [ref=e118]: 阅读我们的客户反馈，无论他们的经验水平如何。
        - generic [ref=e119]:
          - region [ref=e120]:
            - generic [ref=e122]:
              - group [ref=e123]:
                - link [ref=e124] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e127]: 2025-06-30
                  - strong [ref=e128]: b**************
                  - paragraph [ref=e130]: 好，杠杆自由
              - group [ref=e132]:
                - link [ref=e133] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e136]: 2025-02-15
                  - strong [ref=e137]: j**
                  - paragraph [ref=e139]: 不错！页面简洁实用，用起来顺畅
              - group [ref=e141]:
                - link [ref=e142] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e145]: 2024-06-22
                  - strong [ref=e146]: Y******
                  - paragraph [ref=e148]: 一个好喜欢平台，操作方便
              - group [ref=e150]:
                - link [ref=e151] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e154]: 2022-01-05
                  - strong [ref=e155]: 峻**
                  - paragraph [ref=e157]: 不错好用，如果可以添加更多货币会更加多投资者用这个软件，还有就是平台的涨跌能和别的一致那就最好不过了
              - group [ref=e159]:
                - link [ref=e160] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e163]: 2024-05-30
                  - strong [ref=e164]: A*
                  - paragraph [ref=e166]: 简单快捷的的交易软件 很好，操作简单特别方便。
              - group [ref=e168]:
                - link [ref=e169] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e172]: 2024-04-02
                  - strong [ref=e173]: Y*
                  - paragraph [ref=e175]: 点差有点大 其他满分 一样能改善点差谢谢
              - group [ref=e177]:
                - link [ref=e178] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e181]: 2021-03-11
                  - strong [ref=e182]: r*********
                  - paragraph [ref=e184]: 非常好 我赚了不少钱
              - group [ref=e186]:
                - link [ref=e187] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e190]: 2021-07-29
                  - strong [ref=e191]: s******* c***
                  - paragraph [ref=e193]: 客服很好，解决了问题。简单好用
              - group "1 of 8" [ref=e195]:
                - link "2025-06-30 b************** 好，杠杆自由" [ref=e196] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e199]: 2025-06-30
                  - strong [ref=e200]: b**************
                  - paragraph [ref=e202]: 好，杠杆自由
              - group "2 of 8" [ref=e204]:
                - link "2025-02-15 j** 不错！页面简洁实用，用起来顺畅" [ref=e205] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e208]: 2025-02-15
                  - strong [ref=e209]: j**
                  - paragraph [ref=e211]: 不错！页面简洁实用，用起来顺畅
              - group "3 of 8" [ref=e213]:
                - link "2024-06-22 Y****** 一个好喜欢平台，操作方便" [ref=e214] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e217]: 2024-06-22
                  - strong [ref=e218]: Y******
                  - paragraph [ref=e220]: 一个好喜欢平台，操作方便
              - group [ref=e222]:
                - link [ref=e223] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e226]: 2022-01-05
                  - strong [ref=e227]: 峻**
                  - paragraph [ref=e229]: 不错好用，如果可以添加更多货币会更加多投资者用这个软件，还有就是平台的涨跌能和别的一致那就最好不过了
              - group [ref=e231]:
                - link [ref=e232] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e235]: 2024-05-30
                  - strong [ref=e236]: A*
                  - paragraph [ref=e238]: 简单快捷的的交易软件 很好，操作简单特别方便。
              - group [ref=e240]:
                - link [ref=e241] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e244]: 2024-04-02
                  - strong [ref=e245]: Y*
                  - paragraph [ref=e247]: 点差有点大 其他满分 一样能改善点差谢谢
              - group [ref=e249]:
                - link [ref=e250] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e253]: 2021-03-11
                  - strong [ref=e254]: r*********
                  - paragraph [ref=e256]: 非常好 我赚了不少钱
              - group [ref=e258]:
                - link [ref=e259] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e262]: 2021-07-29
                  - strong [ref=e263]: s******* c***
                  - paragraph [ref=e265]: 客服很好，解决了问题。简单好用
              - group [ref=e267]:
                - link [ref=e268] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e271]: 2025-06-30
                  - strong [ref=e272]: b**************
                  - paragraph [ref=e274]: 好，杠杆自由
              - group [ref=e276]:
                - link [ref=e277] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e280]: 2025-02-15
                  - strong [ref=e281]: j**
                  - paragraph [ref=e283]: 不错！页面简洁实用，用起来顺畅
              - group [ref=e285]:
                - link [ref=e286] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e289]: 2024-06-22
                  - strong [ref=e290]: Y******
                  - paragraph [ref=e292]: 一个好喜欢平台，操作方便
              - group [ref=e294]:
                - link [ref=e295] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e298]: 2022-01-05
                  - strong [ref=e299]: 峻**
                  - paragraph [ref=e301]: 不错好用，如果可以添加更多货币会更加多投资者用这个软件，还有就是平台的涨跌能和别的一致那就最好不过了
              - group [ref=e303]:
                - link [ref=e304] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e307]: 2024-05-30
                  - strong [ref=e308]: A*
                  - paragraph [ref=e310]: 简单快捷的的交易软件 很好，操作简单特别方便。
              - group [ref=e312]:
                - link [ref=e313] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e316]: 2024-04-02
                  - strong [ref=e317]: Y*
                  - paragraph [ref=e319]: 点差有点大 其他满分 一样能改善点差谢谢
              - group [ref=e321]:
                - link [ref=e322] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e325]: 2021-03-11
                  - strong [ref=e326]: r*********
                  - paragraph [ref=e328]: 非常好 我赚了不少钱
              - group [ref=e330]:
                - link [ref=e331] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e334]: 2021-07-29
                  - strong [ref=e335]: s******* c***
                  - paragraph [ref=e337]: 客服很好，解决了问题。简单好用
            - generic:
              - button "Go to last slide" [ref=e339] [cursor=pointer]
              - button "Next slide" [ref=e340] [cursor=pointer]
          - paragraph [ref=e341]: 展示我们的 4 星和 5 星好评。为遵守 GDPR 要求并保护用户隐私，用户的具体信息已被匿名处理
        - generic [ref=e343]:
          - link "4.6" [ref=e344] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - strong [ref=e347]: "4.6"
          - link "评分与评论 4.7" [ref=e350] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - strong [ref=e352]: 评分与评论
            - strong [ref=e354]: "4.7"
          - link "评分与评论 4.7" [ref=e357] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - strong [ref=e359]: 评分与评论
            - strong [ref=e361]: "4.7"
          - link "4.6" [ref=e364] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - strong [ref=e367]: "4.6"
      - generic [ref=e371]:
        - heading "三步即可开始交易" [level=2] [ref=e373]
        - generic [ref=e374]:
          - button [ref=e376] [cursor=pointer]
          - generic [ref=e379]: 1. 创建您的账户（须符合资格要求）
          - generic [ref=e380]: 2. 按您的方式存款
          - generic [ref=e381]: 3. 准备就绪后即可开始交易
  - contentinfo [ref=e383]:
    - generic [ref=e384]:
      - link [ref=e385] [cursor=pointer]:
        - /url: /zh-hans
        - img [ref=e386]
      - generic [ref=e390]:
        - link [ref=e391] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e392] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e393] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e394] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e395] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e396] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e397]:
        - link [ref=e398] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e399] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e400] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=f776c38b-8ffa-46e3-a9b7-cf1a7aaac58d&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e401]:
      - generic [ref=e402]:
        - generic [ref=e403]:
          - generic [ref=e404]:
            - generic [ref=e405]: "国家/地区:"
            - button "Singapore" [ref=e406] [cursor=pointer]:
              - generic [ref=e408]: Singapore
          - generic [ref=e409]: •
          - generic [ref=e410]:
            - generic [ref=e411]: "语言:"
            - button "Simplified Chinese" [ref=e412] [cursor=pointer]:
              - generic [ref=e413]: Simplified Chinese
        - generic [ref=e414]:
          - generic [ref=e415]: 您还可以联系：
          - link "+65 3125 2302" [ref=e418] [cursor=pointer]:
            - /url: tel:+65 3125 2302
            - strong [ref=e419]: +65 3125 2302
            - strong
          - generic [ref=e420]: •
          - link "support@capital.com" [ref=e422] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e423]: support@capital.com
      - generic [ref=e424]:
        - generic [ref=e425]:
          - strong [ref=e427]: 交易
          - generic [ref=e428]:
            - generic [ref=e429]:
              - generic [ref=e430]: 交易
              - generic [ref=e431]:
                - link "差价合约 (CFD)交易" [ref=e433] [cursor=pointer]:
                  - /url: /zh-hans/ways-to-trade/cfd-trading
                - link "模拟交易" [ref=e435] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/demo-account
                - link "专业账户" [ref=e437] [cursor=pointer]:
                  - /url: /zh-hans/professional
            - generic [ref=e438]:
              - generic [ref=e439]: 平台
              - generic [ref=e440]:
                - link "网页版平台" [ref=e442] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/web-platform
                - link "手机 App" [ref=e444] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mobile-apps
                - link "TradingView" [ref=e446] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/trading-view
                - link "MT4" [ref=e448] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt4
                - link "MT5" [ref=e450] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt5
            - generic [ref=e451]:
              - generic [ref=e452]: 学习
              - generic [ref=e453]:
                - link "交易策略" [ref=e455] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-strategies
                - link "技术分析" [ref=e457] [cursor=pointer]:
                  - /url: /zh-hans/learn/technical-analysis
                - link "交易心理" [ref=e459] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-psychology
                - link "学习" [ref=e461] [cursor=pointer]:
                  - /url: /zh-hans/learn
        - generic [ref=e462]:
          - strong [ref=e464]: 市场
          - generic [ref=e465]:
            - generic [ref=e466]:
              - generic [ref=e467]: 我们的市场
              - generic [ref=e468]:
                - link "市场" [ref=e470] [cursor=pointer]:
                  - /url: /zh-hans/markets
                - link "股票" [ref=e472] [cursor=pointer]:
                  - /url: /zh-hans/markets/shares
                - link "外汇" [ref=e474] [cursor=pointer]:
                  - /url: /zh-hans/markets/forex
                - link "指数" [ref=e476] [cursor=pointer]:
                  - /url: /zh-hans/markets/indices
                - link "大宗商品" [ref=e478] [cursor=pointer]:
                  - /url: /zh-hans/markets/commodities
                - link "加密货币" [ref=e480] [cursor=pointer]:
                  - /url: /zh-hans/markets/cryptocurrencies
                - link "债券" [ref=e482] [cursor=pointer]:
                  - /url: /zh-hans/markets/bonds
                - link "利率" [ref=e484] [cursor=pointer]:
                  - /url: /zh-hans/markets/interest-rates
            - generic [ref=e485]:
              - generic [ref=e486]: 市场洞察
              - link "市场分析" [ref=e489] [cursor=pointer]:
                - /url: /zh-hans/analysis
        - link "定价" [ref=e492] [cursor=pointer]:
          - /url: /zh-hans/ways-to-trade/fees-and-charges
          - strong [ref=e493]: 定价
        - generic [ref=e494]:
          - strong [ref=e496]: 关于我们
          - generic [ref=e497]:
            - generic [ref=e498]:
              - generic [ref=e499]: 关于我们
              - generic [ref=e500]:
                - link "公司简介" [ref=e502] [cursor=pointer]:
                  - /url: /zh-hans/about-us
                - link "我们的办公室" [ref=e504] [cursor=pointer]:
                  - /url: /zh-hans/about-us/our-offices
                - link "Capital.com 安全吗？" [ref=e506] [cursor=pointer]:
                  - /url: /zh-hans/security-measures
                - link "我们的商业模式" [ref=e508] [cursor=pointer]:
                  - /url: /zh-hans/about-us/how-capital-makes-money
            - generic [ref=e509]:
              - generic [ref=e510]: 与我们合作
              - generic [ref=e511]:
                - link "合作伙伴计划" [ref=e513] [cursor=pointer]:
                  - /url: /zh-hans/partnerships
                - link "推荐好友" [ref=e515] [cursor=pointer]:
                  - /url: /zh-hans/refer-a-friend
            - generic [ref=e516]:
              - generic [ref=e517]: 帮助
              - generic [ref=e518]:
                - link "帮助" [ref=e520] [cursor=pointer]:
                  - /url: /zh-hans/help
                - link "客户脆弱性" [ref=e522] [cursor=pointer]:
                  - /url: /zh-hans/help/client-vulnerability
                - link "联系我们" [ref=e524] [cursor=pointer]:
                  - /url: /zh-hans/contact-us
            - generic [ref=e525]:
              - generic [ref=e526]: 法律信息
              - generic [ref=e527]:
                - link "条款和政策" [ref=e529] [cursor=pointer]:
                  - /url: /zh-hans/terms-and-policies
                - link "投诉" [ref=e531] [cursor=pointer]:
                  - /url: /zh-hans/help/complaints
    - generic [ref=e533]:
      - paragraph [ref=e534]:
        - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。
        - generic [ref=e535]:
          - text: 数据显示，
          - strong [ref=e536]: 78.48% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
          - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
      - paragraph [ref=e537]
      - paragraph [ref=e538]: Capital Com Online Investments Ltd 是一家有限责任公司，公司注册号为 209236B。Capital Com Online Investments Ltd 在巴哈马国注册，由巴哈马证券委员会授权，许可证号为 SIA-F245。公司注册办事处地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
    - generic [ref=e539]:
      - paragraph [ref=e540]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e541]:
        - link "网站地图" [ref=e542] [cursor=pointer]:
          - /url: /zh-hans/sitemap
        - link "Cookie 设置" [ref=e543] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /zh-hans
        - link "条款和政策" [ref=e544] [cursor=pointer]:
          - /url: /zh-hans/terms-and-policies
        - link "投诉程序 (SCB)" [ref=e545] [cursor=pointer]:
          - /url: /zh-hans/help/complaints
  - generic [ref=e548]:
    - generic [ref=e549]:
      - heading "Important Notice:" [level=3] [ref=e551]
      - generic [ref=e552]:
        - paragraph [ref=e553]: "The information on this website is not intended for, or directed at, any person or entity who is a resident of Singapore or any jurisdiction where such distribution or use would be contrary to local laws or regulations. By clicking \"I Confirm\", you expressly acknowledge and agree to the following:"
        - paragraph [ref=e554]: 1. You are accessing this website on your own initiative.
        - paragraph [ref=e555]: 2. You understand and accept that Capital Com Online Investments Ltd is not licensed or regulated by the Monetary Authority of Singapore (MAS) and is not authorized to provide financial services or solicit business in Singapore.
        - paragraph [ref=e556]: 3. You are not a resident of Singapore, or, if you are, you acknowledge that the information and services on this website are not intended for you and are being accessed at your own risk and responsibility.
        - paragraph [ref=e557]: If you do not agree with any of the above statements, please exit this site immediately.
    - button "I Confirm" [disabled]
  - button [ref=e558] [cursor=pointer]
  - dialog "Cookie banner" [ref=e560]:
    - generic [ref=e561]:
      - paragraph [ref=e563]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [active] [ref=e564] [cursor=pointer]:
          - /url: https://capital.com/cookies_policy_bah
          - text: Cookie Policy
        - text: .
      - generic [ref=e565]:
        - button "Reject all" [ref=e566] [cursor=pointer]
        - button "Allow all cookies" [ref=e567] [cursor=pointer]
        - button "Cookie settings" [ref=e568] [cursor=pointer]
  - alert [ref=e569]
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