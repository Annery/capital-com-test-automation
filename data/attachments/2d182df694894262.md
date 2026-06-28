# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/about.spec.ts >> [SCB ZH_HANS | unregistered] About / Help / Contact us >> [banner_with_steps] -> signUpForm
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
      - text: 联系我们
    - generic [ref=e45]:
      - generic [ref=e51]:
        - heading "联系我们" [level=1] [ref=e52]
        - paragraph [ref=e54]: 我们的支持团队可通过电子邮件、电话和在线聊天为您提供帮助。 我们会尽快回复您。
      - generic [ref=e58]:
        - generic [ref=e60]:
          - heading "电子邮件" [level=3] [ref=e61]
          - link "support@capital.com" [ref=e62] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - generic [ref=e63]: support@capital.com
        - generic [ref=e65]:
          - heading "电话" [level=3] [ref=e66]
          - link "+65 3125 2302" [ref=e67] [cursor=pointer]:
            - /url: tel:+6531252302
            - generic [ref=e68]: +65 3125 2302
        - generic [ref=e70]:
          - heading "在线聊天" [level=3] [ref=e71]
          - link "WhatsApp" [ref=e72] [cursor=pointer]:
            - /url: https://wa.me/447897000276
            - generic [ref=e73]: WhatsApp
        - generic [ref=e75]:
          - heading "支持中心" [level=3] [ref=e76]
          - link "前往" [ref=e77] [cursor=pointer]:
            - /url: /zh-hans/help
            - generic [ref=e78]: 前往
        - generic [ref=e80]:
          - heading "提交请求" [level=3] [ref=e81]
          - link "前往" [ref=e82] [cursor=pointer]:
            - /url: https://help.capitalccbah.com/hc/zh-tw/requests/new
            - generic [ref=e83]: 前往
      - generic [ref=e92]:
        - strong [ref=e93]: 我们的巴哈马办公室
        - generic [ref=e94]:
          - paragraph [ref=e95]:
            - text: Capital Com Online Investments Ltd
            - text: "#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012,"
            - text: Nassau, The Bahamas
          - paragraph [ref=e96]
      - generic [ref=e98]:
        - heading "进一步了解我们" [level=2] [ref=e100]
        - generic [ref=e101]:
          - generic [ref=e103]:
            - heading "我们的全球办公室" [level=3] [ref=e104]
            - paragraph [ref=e106]: 我们的办公室遍布欧洲、中东和亚太地区。 在七个司法管辖区受到监管。
            - link "查看所有办公地点" [ref=e107] [cursor=pointer]:
              - /url: /zh-hans/about-us/our-offices
              - generic [ref=e108]: 查看所有办公地点
          - generic [ref=e110]:
            - heading "关于我们" [level=3] [ref=e111]
            - paragraph [ref=e113]: 了解 Capital.com 背后的故事、塑造平台运作方式的理念，以及打造这一平台的团队。
            - link "了解更多" [ref=e114] [cursor=pointer]:
              - /url: /zh-hans/about-us
              - generic [ref=e115]: 了解更多
      - generic [ref=e116]:
        - generic [ref=e118]:
          - heading "用户反馈与评分" [level=2] [ref=e119]
          - generic [ref=e120]: 阅读我们的客户反馈，无论他们的经验水平如何。
        - generic [ref=e121]:
          - region [ref=e122]:
            - generic [ref=e124]:
              - group [ref=e125]:
                - link [ref=e126] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e129]: 2025-06-30
                  - strong [ref=e130]: b**************
                  - paragraph [ref=e132]: 好，杠杆自由
              - group [ref=e134]:
                - link [ref=e135] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e138]: 2025-02-15
                  - strong [ref=e139]: j**
                  - paragraph [ref=e141]: 不错！页面简洁实用，用起来顺畅
              - group [ref=e143]:
                - link [ref=e144] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e147]: 2024-06-22
                  - strong [ref=e148]: Y******
                  - paragraph [ref=e150]: 一个好喜欢平台，操作方便
              - group [ref=e152]:
                - link [ref=e153] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e156]: 2022-01-05
                  - strong [ref=e157]: 峻**
                  - paragraph [ref=e159]: 不错好用，如果可以添加更多货币会更加多投资者用这个软件，还有就是平台的涨跌能和别的一致那就最好不过了
              - group [ref=e161]:
                - link [ref=e162] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e165]: 2024-05-30
                  - strong [ref=e166]: A*
                  - paragraph [ref=e168]: 简单快捷的的交易软件 很好，操作简单特别方便。
              - group [ref=e170]:
                - link [ref=e171] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e174]: 2024-04-02
                  - strong [ref=e175]: Y*
                  - paragraph [ref=e177]: 点差有点大 其他满分 一样能改善点差谢谢
              - group [ref=e179]:
                - link [ref=e180] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e183]: 2021-03-11
                  - strong [ref=e184]: r*********
                  - paragraph [ref=e186]: 非常好 我赚了不少钱
              - group [ref=e188]:
                - link [ref=e189] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e192]: 2021-07-29
                  - strong [ref=e193]: s******* c***
                  - paragraph [ref=e195]: 客服很好，解决了问题。简单好用
              - group "1 of 8" [ref=e197]:
                - link "2025-06-30 b************** 好，杠杆自由" [ref=e198] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e201]: 2025-06-30
                  - strong [ref=e202]: b**************
                  - paragraph [ref=e204]: 好，杠杆自由
              - group "2 of 8" [ref=e206]:
                - link "2025-02-15 j** 不错！页面简洁实用，用起来顺畅" [ref=e207] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e210]: 2025-02-15
                  - strong [ref=e211]: j**
                  - paragraph [ref=e213]: 不错！页面简洁实用，用起来顺畅
              - group "3 of 8" [ref=e215]:
                - link "2024-06-22 Y****** 一个好喜欢平台，操作方便" [ref=e216] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e219]: 2024-06-22
                  - strong [ref=e220]: Y******
                  - paragraph [ref=e222]: 一个好喜欢平台，操作方便
              - group [ref=e224]:
                - link [ref=e225] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=b55b702b-f923-48e0-b88d-11c1457c2db5&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e228]: 2022-01-05
                  - strong [ref=e229]: 峻**
                  - paragraph [ref=e231]: 不错好用，如果可以添加更多货币会更加多投资者用这个软件，还有就是平台的涨跌能和别的一致那就最好不过了
              - group [ref=e233]:
                - link [ref=e234] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e237]: 2024-05-30
                  - strong [ref=e238]: A*
                  - paragraph [ref=e240]: 简单快捷的的交易软件 很好，操作简单特别方便。
              - group [ref=e242]:
                - link [ref=e243] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e246]: 2024-04-02
                  - strong [ref=e247]: Y*
                  - paragraph [ref=e249]: 点差有点大 其他满分 一样能改善点差谢谢
              - group [ref=e251]:
                - link [ref=e252] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=b55b702b-f923-48e0-b88d-11c1457c2db5&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e255]: 2021-03-11
                  - strong [ref=e256]: r*********
                  - paragraph [ref=e258]: 非常好 我赚了不少钱
              - group [ref=e260]:
                - link [ref=e261] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=b55b702b-f923-48e0-b88d-11c1457c2db5&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                  - generic [ref=e264]: 2021-07-29
                  - strong [ref=e265]: s******* c***
                  - paragraph [ref=e267]: 客服很好，解决了问题。简单好用
              - group [ref=e269]:
                - link [ref=e270] [cursor=pointer]:
                  - /url: https://www.tradingview.com/broker/Capitalcom/
                  - generic [ref=e273]: 2025-06-30
                  - strong [ref=e274]: b**************
                  - paragraph [ref=e276]: 好，杠杆自由
              - group [ref=e278]:
                - link [ref=e279] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e282]: 2025-02-15
                  - strong [ref=e283]: j**
                  - paragraph [ref=e285]: 不错！页面简洁实用，用起来顺畅
              - group [ref=e287]:
                - link [ref=e288] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e291]: 2024-06-22
                  - strong [ref=e292]: Y******
                  - paragraph [ref=e294]: 一个好喜欢平台，操作方便
              - group [ref=e296]:
                - link [ref=e297] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e300]: 2022-01-05
                  - strong [ref=e301]: 峻**
                  - paragraph [ref=e303]: 不错好用，如果可以添加更多货币会更加多投资者用这个软件，还有就是平台的涨跌能和别的一致那就最好不过了
              - group [ref=e305]:
                - link [ref=e306] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e309]: 2024-05-30
                  - strong [ref=e310]: A*
                  - paragraph [ref=e312]: 简单快捷的的交易软件 很好，操作简单特别方便。
              - group [ref=e314]:
                - link [ref=e315] [cursor=pointer]:
                  - /url: https://www.trustpilot.com/review/capital.com
                  - generic [ref=e318]: 2024-04-02
                  - strong [ref=e319]: Y*
                  - paragraph [ref=e321]: 点差有点大 其他满分 一样能改善点差谢谢
              - group [ref=e323]:
                - link [ref=e324] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e327]: 2021-03-11
                  - strong [ref=e328]: r*********
                  - paragraph [ref=e330]: 非常好 我赚了不少钱
              - group [ref=e332]:
                - link [ref=e333] [cursor=pointer]:
                  - /url: https://app.appsflyer.com/com.capital.trading
                  - generic [ref=e336]: 2021-07-29
                  - strong [ref=e337]: s******* c***
                  - paragraph [ref=e339]: 客服很好，解决了问题。简单好用
            - generic:
              - button "Go to last slide" [ref=e341] [cursor=pointer]
              - button "Next slide" [ref=e342] [cursor=pointer]
          - paragraph [ref=e343]: 展示我们的 4 星和 5 星好评。为遵守 GDPR 要求并保护用户隐私，用户的具体信息已被匿名处理
        - generic [ref=e345]:
          - link "4.6" [ref=e346] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - strong [ref=e349]: "4.6"
          - link "评分与评论 4.7" [ref=e352] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=b55b702b-f923-48e0-b88d-11c1457c2db5&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - strong [ref=e354]: 评分与评论
            - strong [ref=e356]: "4.7"
          - link "评分与评论 4.7" [ref=e359] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=b55b702b-f923-48e0-b88d-11c1457c2db5&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - strong [ref=e361]: 评分与评论
            - strong [ref=e363]: "4.7"
          - link "4.6" [ref=e366] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - strong [ref=e369]: "4.6"
      - generic [ref=e373]:
        - heading "三步即可开始交易" [level=2] [ref=e375]
        - generic [ref=e376]:
          - button [ref=e378] [cursor=pointer]
          - generic [ref=e381]: 1. 创建您的账户（须符合资格要求）
          - generic [ref=e382]: 2. 按您的方式存款
          - generic [ref=e383]: 3. 准备就绪后即可开始交易
  - contentinfo [ref=e385]:
    - generic [ref=e386]:
      - link [ref=e387] [cursor=pointer]:
        - /url: /zh-hans
        - img [ref=e388]
      - generic [ref=e392]:
        - link [ref=e393] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e394] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e395] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e396] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e397] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e398] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e399]:
        - link [ref=e400] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=b55b702b-f923-48e0-b88d-11c1457c2db5&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e401] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=b55b702b-f923-48e0-b88d-11c1457c2db5&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e402] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=b55b702b-f923-48e0-b88d-11c1457c2db5&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e403]:
      - generic [ref=e404]:
        - generic [ref=e405]:
          - generic [ref=e406]:
            - generic [ref=e407]: "国家/地区:"
            - button "Singapore" [ref=e408] [cursor=pointer]:
              - generic [ref=e410]: Singapore
          - generic [ref=e411]: •
          - generic [ref=e412]:
            - generic [ref=e413]: "语言:"
            - button "Simplified Chinese" [ref=e414] [cursor=pointer]:
              - generic [ref=e415]: Simplified Chinese
        - generic [ref=e416]:
          - generic [ref=e417]: 您还可以联系：
          - link "+65 3125 2302" [ref=e420] [cursor=pointer]:
            - /url: tel:+65 3125 2302
            - strong [ref=e421]: +65 3125 2302
            - strong
          - generic [ref=e422]: •
          - link "support@capital.com" [ref=e424] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e425]: support@capital.com
      - generic [ref=e426]:
        - generic [ref=e427]:
          - strong [ref=e429]: 交易
          - generic [ref=e430]:
            - generic [ref=e431]:
              - generic [ref=e432]: 交易
              - generic [ref=e433]:
                - link "差价合约 (CFD)交易" [ref=e435] [cursor=pointer]:
                  - /url: /zh-hans/ways-to-trade/cfd-trading
                - link "模拟交易" [ref=e437] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/demo-account
                - link "专业账户" [ref=e439] [cursor=pointer]:
                  - /url: /zh-hans/professional
            - generic [ref=e440]:
              - generic [ref=e441]: 平台
              - generic [ref=e442]:
                - link "网页版平台" [ref=e444] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/web-platform
                - link "手机 App" [ref=e446] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mobile-apps
                - link "TradingView" [ref=e448] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/trading-view
                - link "MT4" [ref=e450] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt4
                - link "MT5" [ref=e452] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt5
            - generic [ref=e453]:
              - generic [ref=e454]: 学习
              - generic [ref=e455]:
                - link "交易策略" [ref=e457] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-strategies
                - link "技术分析" [ref=e459] [cursor=pointer]:
                  - /url: /zh-hans/learn/technical-analysis
                - link "交易心理" [ref=e461] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-psychology
                - link "学习" [ref=e463] [cursor=pointer]:
                  - /url: /zh-hans/learn
        - generic [ref=e464]:
          - strong [ref=e466]: 市场
          - generic [ref=e467]:
            - generic [ref=e468]:
              - generic [ref=e469]: 我们的市场
              - generic [ref=e470]:
                - link "市场" [ref=e472] [cursor=pointer]:
                  - /url: /zh-hans/markets
                - link "股票" [ref=e474] [cursor=pointer]:
                  - /url: /zh-hans/markets/shares
                - link "外汇" [ref=e476] [cursor=pointer]:
                  - /url: /zh-hans/markets/forex
                - link "指数" [ref=e478] [cursor=pointer]:
                  - /url: /zh-hans/markets/indices
                - link "大宗商品" [ref=e480] [cursor=pointer]:
                  - /url: /zh-hans/markets/commodities
                - link "加密货币" [ref=e482] [cursor=pointer]:
                  - /url: /zh-hans/markets/cryptocurrencies
                - link "债券" [ref=e484] [cursor=pointer]:
                  - /url: /zh-hans/markets/bonds
                - link "利率" [ref=e486] [cursor=pointer]:
                  - /url: /zh-hans/markets/interest-rates
            - generic [ref=e487]:
              - generic [ref=e488]: 市场洞察
              - link "市场分析" [ref=e491] [cursor=pointer]:
                - /url: /zh-hans/analysis
        - link "定价" [ref=e494] [cursor=pointer]:
          - /url: /zh-hans/ways-to-trade/fees-and-charges
          - strong [ref=e495]: 定价
        - generic [ref=e496]:
          - strong [ref=e498]: 关于我们
          - generic [ref=e499]:
            - generic [ref=e500]:
              - generic [ref=e501]: 关于我们
              - generic [ref=e502]:
                - link "公司简介" [ref=e504] [cursor=pointer]:
                  - /url: /zh-hans/about-us
                - link "我们的办公室" [ref=e506] [cursor=pointer]:
                  - /url: /zh-hans/about-us/our-offices
                - link "Capital.com 安全吗？" [ref=e508] [cursor=pointer]:
                  - /url: /zh-hans/security-measures
                - link "我们的商业模式" [ref=e510] [cursor=pointer]:
                  - /url: /zh-hans/about-us/how-capital-makes-money
            - generic [ref=e511]:
              - generic [ref=e512]: 与我们合作
              - generic [ref=e513]:
                - link "合作伙伴计划" [ref=e515] [cursor=pointer]:
                  - /url: /zh-hans/partnerships
                - link "推荐好友" [ref=e517] [cursor=pointer]:
                  - /url: /zh-hans/refer-a-friend
            - generic [ref=e518]:
              - generic [ref=e519]: 帮助
              - generic [ref=e520]:
                - link "帮助" [ref=e522] [cursor=pointer]:
                  - /url: /zh-hans/help
                - link "客户脆弱性" [ref=e524] [cursor=pointer]:
                  - /url: /zh-hans/help/client-vulnerability
                - link "联系我们" [ref=e526] [cursor=pointer]:
                  - /url: /zh-hans/contact-us
            - generic [ref=e527]:
              - generic [ref=e528]: 法律信息
              - generic [ref=e529]:
                - link "条款和政策" [ref=e531] [cursor=pointer]:
                  - /url: /zh-hans/terms-and-policies
                - link "投诉" [ref=e533] [cursor=pointer]:
                  - /url: /zh-hans/help/complaints
    - generic [ref=e535]:
      - paragraph [ref=e536]:
        - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。
        - generic [ref=e537]:
          - text: 数据显示，
          - strong [ref=e538]: 78.48% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
          - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
      - paragraph [ref=e539]
      - paragraph [ref=e540]: Capital Com Online Investments Ltd 是一家有限责任公司，公司注册号为 209236B。Capital Com Online Investments Ltd 在巴哈马国注册，由巴哈马证券委员会授权，许可证号为 SIA-F245。公司注册办事处地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
    - generic [ref=e541]:
      - paragraph [ref=e542]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e543]:
        - link "网站地图" [ref=e544] [cursor=pointer]:
          - /url: /zh-hans/sitemap
        - link "Cookie 设置" [ref=e545] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /zh-hans
        - link "条款和政策" [ref=e546] [cursor=pointer]:
          - /url: /zh-hans/terms-and-policies
        - link "投诉程序 (SCB)" [ref=e547] [cursor=pointer]:
          - /url: /zh-hans/help/complaints
  - generic [ref=e550]:
    - generic [ref=e551]:
      - heading "Important Notice:" [level=3] [ref=e553]
      - generic [ref=e554]:
        - paragraph [ref=e555]: "The information on this website is not intended for, or directed at, any person or entity who is a resident of Singapore or any jurisdiction where such distribution or use would be contrary to local laws or regulations. By clicking \"I Confirm\", you expressly acknowledge and agree to the following:"
        - paragraph [ref=e556]: 1. You are accessing this website on your own initiative.
        - paragraph [ref=e557]: 2. You understand and accept that Capital Com Online Investments Ltd is not licensed or regulated by the Monetary Authority of Singapore (MAS) and is not authorized to provide financial services or solicit business in Singapore.
        - paragraph [ref=e558]: 3. You are not a resident of Singapore, or, if you are, you acknowledge that the information and services on this website are not intended for you and are being accessed at your own risk and responsibility.
        - paragraph [ref=e559]: If you do not agree with any of the above statements, please exit this site immediately.
    - button "I Confirm" [disabled]
  - button [ref=e560] [cursor=pointer]
  - dialog "Cookie banner" [ref=e562]:
    - generic [ref=e563]:
      - paragraph [ref=e565]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [active] [ref=e566] [cursor=pointer]:
          - /url: https://capital.com/cookies_policy_bah
          - text: Cookie Policy
        - text: .
      - generic [ref=e567]:
        - button "Reject all" [ref=e568] [cursor=pointer]
        - button "Allow all cookies" [ref=e569] [cursor=pointer]
        - button "Cookie settings" [ref=e570] [cursor=pointer]
  - alert [ref=e571]
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