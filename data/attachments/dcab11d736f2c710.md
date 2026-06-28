# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: header/header-navigation.spec.ts >> [SCB ZH_HANS | unregistered] Header navigation >> Logo opens main page
- Location: tests/header/header-navigation.spec.ts:5:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
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
      - text: 专业账户
    - generic [ref=e45]:
      - generic [ref=e49]:
        - generic [ref=e50]:
          - heading "专业交易，由您主导" [level=1] [ref=e51]
          - paragraph [ref=e53]: 最高可享 20% 现金返佣、低至 0.2% 的保证金要求以及专属客户经理服务。 适用于符合资格要求的散户客户。
          - button "确认" [ref=e55] [cursor=pointer]
        - img "laptop" [ref=e58]
      - generic [ref=e60]:
        - heading "专业账户专享" [level=2] [ref=e62]
        - generic [ref=e63]:
          - generic [ref=e65]:
            - heading "现金返佣" [level=3] [ref=e66]
            - paragraph [ref=e68]: 每月从首笔交易开始，您支付的部分点差将返还至您的账户。
          - generic [ref=e70]:
            - heading "更低的保证金要求" [level=3] [ref=e71]
            - paragraph [ref=e73]: 部分市场的保证金要求低至 0.2%。 完整明细请见下方表格。 杠杆会同时放大潜在收益和潜在亏损。
          - generic [ref=e75]:
            - heading "尊享专属活动邀请" [level=3] [ref=e76]
            - paragraph [ref=e78]: 获邀参加全球各地的高端礼宾活动。
          - generic [ref=e80]:
            - heading "专属客户经理" [level=3] [ref=e81]
            - paragraph [ref=e83]: 全天候支持与账户协助。
          - generic [ref=e85]:
            - heading "专业客户推荐" [level=3] [ref=e86]
            - paragraph [ref=e88]: 推荐其他专业交易者。 根据符合条件的交易活动，每成功推荐一位客户，最高可赚取 2,500 美元。 适用相关条款和条件。
      - generic [ref=e90]:
        - generic [ref=e91]:
          - heading "专业账户返佣等级" [level=2] [ref=e92]
          - paragraph [ref=e94]: 返佣将按交易量分级，并根据已支付点差的一定比例计算。 每月首笔交易开始即可享受对应返佣。
        - generic [ref=e96]:
          - button "股票" [ref=e97]: 股票
          - button "大宗商品" [ref=e98] [cursor=pointer]: 大宗商品
          - button "外汇与贵金属" [ref=e99] [cursor=pointer]: 外汇与贵金属
          - button "指数" [ref=e100] [cursor=pointer]: 指数
          - button "加密货币" [ref=e101] [cursor=pointer]: 加密货币
        - table [ref=e104]:
          - rowgroup [ref=e105]:
            - row "持仓量 $0-5m $5m-$10m >$10m" [ref=e106]:
              - cell "持仓量" [ref=e107]
              - cell "$0-5m" [ref=e108]
              - cell "$5m-$10m" [ref=e109]
              - cell ">$10m" [ref=e110]
            - row "返佣比率 5% 10% 20%" [ref=e111]:
              - cell "返佣比率" [ref=e112]
              - cell "5%" [ref=e113]
              - cell "10%" [ref=e114]
              - cell "20%" [ref=e115]
        - paragraph [ref=e117]:
          - text: 您可以在
          - link "此处" [ref=e118] [cursor=pointer]:
            - /url: https://capital.com/bah-pro-rebates-tc
          - text: 查看返佣计划的条款与条件。
      - generic [ref=e120]:
        - generic [ref=e121]:
          - heading "更低保证金要求" [level=2] [ref=e122]
          - generic [ref=e123]: 更低的保证金要求意味着更高杠杆。 杠杆会同时放大潜在亏损和潜在收益。 所示杠杆代表当前展示资产可用的最高杠杆。 杠杆限制会因交易品种而异，并可能相应地有所不同。
        - generic [ref=e124]:
          - generic [ref=e126]:
            - heading "主要外汇" [level=3] [ref=e127]
            - generic [ref=e128]:
              - paragraph [ref=e129]:
                - text: 专业账户最高杠杆
                - strong [ref=e130]: 500:1
              - paragraph [ref=e131]:
                - text: 保证金比例
                - strong [ref=e132]: 0.2%
          - generic [ref=e134]:
            - heading "主要股指" [level=3] [ref=e135]
            - generic [ref=e136]:
              - paragraph [ref=e137]:
                - text: 专业账户最高杠杆
                - strong [ref=e138]: 500:1
              - paragraph [ref=e139]:
                - text: 保证金比例
                - strong [ref=e140]: 0.2%
          - generic [ref=e142]:
            - heading "黃金" [level=3] [ref=e143]
            - generic [ref=e144]:
              - paragraph [ref=e145]:
                - text: 专业账户最高杠杆
                - strong [ref=e146]: 500:1
              - paragraph [ref=e147]:
                - text: 保证金比例
                - strong [ref=e148]: 0.2%
          - generic [ref=e150]:
            - heading "石油" [level=3] [ref=e151]
            - generic [ref=e152]:
              - paragraph [ref=e153]:
                - text: 专业账户最高杠杆
                - strong [ref=e154]: 500:1
              - paragraph [ref=e155]:
                - text: 保证金比例
                - strong [ref=e156]: "0.2"
          - generic [ref=e158]:
            - heading "加密货币" [level=3] [ref=e159]
            - generic [ref=e160]:
              - paragraph [ref=e161]:
                - text: 专业账户最高杠杆
                - strong [ref=e162]: 100:1
              - paragraph [ref=e163]:
                - text: 保证金比例
                - strong [ref=e164]: 1%
          - generic [ref=e166]:
            - heading "主要股票" [level=3] [ref=e167]
            - generic [ref=e168]:
              - paragraph [ref=e169]:
                - text: 专业账户最高杠杆
                - strong [ref=e170]: 33:1
              - paragraph [ref=e171]:
                - text: 保证金比例
                - strong [ref=e172]: 3.03%
      - generic [ref=e174]:
        - generic [ref=e175]:
          - heading "专业账户适用条件" [level=2] [ref=e176]
          - generic [ref=e177]: 专业客户身份附带特定条件。 这些条件不同于散户账户适用的条件。
        - generic [ref=e178]:
          - generic [ref=e180]:
            - heading "更高杠杆" [level=3] [ref=e181]
            - paragraph [ref=e183]: 更高的杠杆会增加您面对的市场风险。 它会同时放大潜在收益和潜在亏损。
          - generic [ref=e185]:
            - heading "更专业的语言，并默认客户具备相应的交易经验" [level=3] [ref=e186]
            - paragraph [ref=e188]: 与面向散户客户的通讯内容相比，为专业客户提供的相关信息会默认客户具备更高水平的市场知识。
      - generic [ref=e190]:
        - generic [ref=e191]:
          - heading "专业客户推荐" [level=2] [ref=e192]
          - generic [ref=e193]: 推荐其他专业交易者。 根据符合条件的交易活动，每成功推荐一位客户，最高可赚取 2,500 美元。 适用相关条款和条件。返佣将根据被推荐客户在 90 天内产生的有效交易点差进行计算。
        - generic [ref=e194]:
          - generic [ref=e196]:
            - heading "推荐奖励的结构" [level=3] [ref=e197]
            - generic [ref=e198]:
              - paragraph [ref=e199]: 当被推荐客户满足以下所有条件时，即可收到 200 美元奖励：
              - list [ref=e200]:
                - listitem [ref=e201]: • 开设并完成专业账户验证
                - listitem [ref=e202]: • 存入至少 200 美元（或等值货币）
                - listitem [ref=e203]: • 完成至少 3 笔交易
          - generic [ref=e205]:
            - heading "额外奖励" [level=3] [ref=e206]
            - generic [ref=e207]:
              - paragraph [ref=e208]: 随着被推荐客户持续支付符合条件的点差，将继续适用后续奖励：
              - list [ref=e209]:
                - listitem [ref=e210]: • 符合条件的点差达到 500 美元后，可获得 300 美元奖励
                - listitem [ref=e211]: • 符合条件的点差达到 1,000 美元后，可获得 500 美元奖励
                - listitem [ref=e212]: • 符合条件的点差达到 5,000 美元后，可获得 1,500 美元奖励
              - paragraph [ref=e213]: 奖励可累计发放。每成功推荐一位客户，推荐人最高可获得 2,500 美元奖励。
      - generic [ref=e215]:
        - heading "推荐返佣示例" [level=2] [ref=e217]
        - generic [ref=e218]:
          - paragraph [ref=e219]: 一位被推荐客户符合专业账户申请资格，并完成基本要求。推荐人可获得 200 美元返佣。
          - paragraph [ref=e220]: 在 90 天内，被推荐客户累计产生 1,000 美元的有效交易点差。 推荐人将额外获得 800 美元奖励，使奖励总额达到 1,000 美元。
          - paragraph [ref=e221]:
            - text: 您可以在
            - link "此处" [ref=e222] [cursor=pointer]:
              - /url: https://capital.com/refer-a-pro-friend-terms-bah
            - text: 查看推荐计划的完整条款与条件。
      - generic [ref=e224]:
        - heading "申请成为专业交易客户" [level=2] [ref=e226]
        - generic [ref=e227]:
          - generic [ref=e228]:
            - generic [ref=e229]:
              - generic [ref=e230]:
                - heading "首次使用 Capital.com？" [level=2] [ref=e231]
                - list [ref=e233]:
                  - listitem [ref=e234]: 开设散户账户
                  - listitem [ref=e235]: 登录并前往“账户”，或选择右上角的“真实账户”
                  - listitem [ref=e236]: 选择“升级至专业账户”并完成申请
                  - listitem [ref=e237]: 申请通过后您将收到邮件通知
                  - listitem [ref=e238]: 如有需要，可能会要求提供其他文件
              - button "开立账户" [ref=e240] [cursor=pointer]
            - img "Image" [ref=e243]
          - generic [ref=e244]:
            - generic [ref=e245]:
              - generic [ref=e246]:
                - heading "现有散户账户" [level=2] [ref=e247]
                - list [ref=e249]:
                  - listitem [ref=e250]: 登录 Capital.com 手机 APP 或网页版交易平台
                  - listitem [ref=e251]: 前往“账户”，或选择右上角的“真实账户”
                  - listitem [ref=e252]: 选择“升级至专业账户”并完成申请
                  - listitem [ref=e253]: 申请通过后您将收到邮件通知
                  - listitem [ref=e254]: 如有需要，可能会要求提供其他文件
              - link "登录" [ref=e256] [cursor=pointer]:
                - /url: https://capital.com/trading/login
            - img "Image" [ref=e259]
  - contentinfo [ref=e261]:
    - generic [ref=e262]:
      - link [ref=e263] [cursor=pointer]:
        - /url: /zh-hans
        - img [ref=e264]
      - generic [ref=e268]:
        - link [ref=e269] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e270] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e271] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e272] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e273] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e274] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e275]:
        - link [ref=e276] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=7eaf16ff-d302-449a-a601-d56fbf534b5c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e277] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=7eaf16ff-d302-449a-a601-d56fbf534b5c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e278] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=7eaf16ff-d302-449a-a601-d56fbf534b5c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e279]:
      - generic [ref=e280]:
        - generic [ref=e281]:
          - generic [ref=e282]:
            - generic [ref=e283]: "国家/地区:"
            - button "Singapore" [ref=e284] [cursor=pointer]:
              - generic [ref=e286]: Singapore
          - generic [ref=e287]: •
          - generic [ref=e288]:
            - generic [ref=e289]: "语言:"
            - button "Simplified Chinese" [ref=e290] [cursor=pointer]:
              - generic [ref=e291]: Simplified Chinese
        - generic [ref=e292]:
          - generic [ref=e293]: 您还可以联系：
          - link "+65 3125 2302" [ref=e296] [cursor=pointer]:
            - /url: tel:+65 3125 2302
            - strong [ref=e297]: +65 3125 2302
            - strong
          - generic [ref=e298]: •
          - link "support@capital.com" [ref=e300] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e301]: support@capital.com
      - generic [ref=e302]:
        - generic [ref=e303]:
          - strong [ref=e305]: 交易
          - generic [ref=e306]:
            - generic [ref=e307]:
              - generic [ref=e308]: 交易
              - generic [ref=e309]:
                - link "差价合约 (CFD)交易" [ref=e311] [cursor=pointer]:
                  - /url: /zh-hans/ways-to-trade/cfd-trading
                - link "模拟交易" [ref=e313] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/demo-account
                - link "专业账户" [ref=e315] [cursor=pointer]:
                  - /url: /zh-hans/professional
            - generic [ref=e316]:
              - generic [ref=e317]: 平台
              - generic [ref=e318]:
                - link "网页版平台" [ref=e320] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/web-platform
                - link "手机 App" [ref=e322] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mobile-apps
                - link "TradingView" [ref=e324] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/trading-view
                - link "MT4" [ref=e326] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt4
                - link "MT5" [ref=e328] [cursor=pointer]:
                  - /url: /zh-hans/trading-platforms/mt5
            - generic [ref=e329]:
              - generic [ref=e330]: 学习
              - generic [ref=e331]:
                - link "交易策略" [ref=e333] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-strategies
                - link "技术分析" [ref=e335] [cursor=pointer]:
                  - /url: /zh-hans/learn/technical-analysis
                - link "交易心理" [ref=e337] [cursor=pointer]:
                  - /url: /zh-hans/learn/trading-psychology
                - link "学习" [ref=e339] [cursor=pointer]:
                  - /url: /zh-hans/learn
        - generic [ref=e340]:
          - strong [ref=e342]: 市场
          - generic [ref=e343]:
            - generic [ref=e344]:
              - generic [ref=e345]: 我们的市场
              - generic [ref=e346]:
                - link "市场" [ref=e348] [cursor=pointer]:
                  - /url: /zh-hans/markets
                - link "股票" [ref=e350] [cursor=pointer]:
                  - /url: /zh-hans/markets/shares
                - link "外汇" [ref=e352] [cursor=pointer]:
                  - /url: /zh-hans/markets/forex
                - link "指数" [ref=e354] [cursor=pointer]:
                  - /url: /zh-hans/markets/indices
                - link "大宗商品" [ref=e356] [cursor=pointer]:
                  - /url: /zh-hans/markets/commodities
                - link "加密货币" [ref=e358] [cursor=pointer]:
                  - /url: /zh-hans/markets/cryptocurrencies
                - link "债券" [ref=e360] [cursor=pointer]:
                  - /url: /zh-hans/markets/bonds
                - link "利率" [ref=e362] [cursor=pointer]:
                  - /url: /zh-hans/markets/interest-rates
            - generic [ref=e363]:
              - generic [ref=e364]: 市场洞察
              - link "市场分析" [ref=e367] [cursor=pointer]:
                - /url: /zh-hans/analysis
        - link "定价" [ref=e370] [cursor=pointer]:
          - /url: /zh-hans/ways-to-trade/fees-and-charges
          - strong [ref=e371]: 定价
        - generic [ref=e372]:
          - strong [ref=e374]: 关于我们
          - generic [ref=e375]:
            - generic [ref=e376]:
              - generic [ref=e377]: 关于我们
              - generic [ref=e378]:
                - link "公司简介" [ref=e380] [cursor=pointer]:
                  - /url: /zh-hans/about-us
                - link "我们的办公室" [ref=e382] [cursor=pointer]:
                  - /url: /zh-hans/about-us/our-offices
                - link "Capital.com 安全吗？" [ref=e384] [cursor=pointer]:
                  - /url: /zh-hans/security-measures
                - link "我们的商业模式" [ref=e386] [cursor=pointer]:
                  - /url: /zh-hans/about-us/how-capital-makes-money
            - generic [ref=e387]:
              - generic [ref=e388]: 与我们合作
              - generic [ref=e389]:
                - link "合作伙伴计划" [ref=e391] [cursor=pointer]:
                  - /url: /zh-hans/partnerships
                - link "推荐好友" [ref=e393] [cursor=pointer]:
                  - /url: /zh-hans/refer-a-friend
            - generic [ref=e394]:
              - generic [ref=e395]: 帮助
              - generic [ref=e396]:
                - link "帮助" [ref=e398] [cursor=pointer]:
                  - /url: /zh-hans/help
                - link "客户脆弱性" [ref=e400] [cursor=pointer]:
                  - /url: /zh-hans/help/client-vulnerability
                - link "联系我们" [ref=e402] [cursor=pointer]:
                  - /url: /zh-hans/contact-us
            - generic [ref=e403]:
              - generic [ref=e404]: 法律信息
              - generic [ref=e405]:
                - link "条款和政策" [ref=e407] [cursor=pointer]:
                  - /url: /zh-hans/terms-and-policies
                - link "投诉" [ref=e409] [cursor=pointer]:
                  - /url: /zh-hans/help/complaints
    - generic [ref=e411]:
      - paragraph [ref=e412]:
        - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。
        - generic [ref=e413]:
          - text: 数据显示，
          - strong [ref=e414]: 78.48% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
          - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
      - paragraph [ref=e415]
      - paragraph [ref=e416]: Capital Com Online Investments Ltd 是一家有限责任公司，公司注册号为 209236B。Capital Com Online Investments Ltd 在巴哈马国注册，由巴哈马证券委员会授权，许可证号为 SIA-F245。公司注册办事处地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
    - generic [ref=e417]:
      - paragraph [ref=e418]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e419]:
        - link "网站地图" [ref=e420] [cursor=pointer]:
          - /url: /zh-hans/sitemap
        - link "Cookie 设置" [ref=e421] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /zh-hans
        - link "条款和政策" [ref=e422] [cursor=pointer]:
          - /url: /zh-hans/terms-and-policies
        - link "投诉程序 (SCB)" [ref=e423] [cursor=pointer]:
          - /url: /zh-hans/help/complaints
  - generic [ref=e426]:
    - generic [ref=e427]:
      - heading "Important Notice:" [level=3] [ref=e429]
      - generic [ref=e430]:
        - paragraph [ref=e431]: "The information on this website is not intended for, or directed at, any person or entity who is a resident of Singapore or any jurisdiction where such distribution or use would be contrary to local laws or regulations. By clicking \"I Confirm\", you expressly acknowledge and agree to the following:"
        - paragraph [ref=e432]: 1. You are accessing this website on your own initiative.
        - paragraph [ref=e433]: 2. You understand and accept that Capital Com Online Investments Ltd is not licensed or regulated by the Monetary Authority of Singapore (MAS) and is not authorized to provide financial services or solicit business in Singapore.
        - paragraph [ref=e434]: 3. You are not a resident of Singapore, or, if you are, you acknowledge that the information and services on this website are not intended for you and are being accessed at your own risk and responsibility.
        - paragraph [ref=e435]: If you do not agree with any of the above statements, please exit this site immediately.
    - button "I Confirm" [disabled]
  - button [ref=e436] [cursor=pointer]
  - dialog "Cookie banner" [ref=e438]:
    - generic [ref=e439]:
      - paragraph [ref=e441]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [active] [ref=e442] [cursor=pointer]:
          - /url: https://capital.com/cookies_policy_bah
          - text: Cookie Policy
        - text: .
      - generic [ref=e443]:
        - button "Reject all" [ref=e444] [cursor=pointer]
        - button "Allow all cookies" [ref=e445] [cursor=pointer]
        - button "Cookie settings" [ref=e446] [cursor=pointer]
  - alert [ref=e447]
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
     |                                  ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
  28 |         await this.root.click();
  29 |         await this.waitUntilClosed();
  30 |     }
  31 | }
  32 | 
```