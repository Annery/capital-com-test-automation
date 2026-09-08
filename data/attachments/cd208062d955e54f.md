# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/trading.spec.ts >> [SCB RU | unregistered] Trading / Learn / Trading strategies >> [tiles_w_img_btn2_signup] -> signUpForm
- Location: src/fixtures/content-section.ts:41:25

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('button[data-type="wrong_location_cancel"]') to be hidden
    13 × locator resolved to visible <button color="black" type="button" data-type="wrong_location_cancel" class="rZW9e cCezE mdnI js-analyticsClick">Остаться</button>

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]:
      - text: CFD — это сложные инструменты, которые связаны с высоким риском быстрой потери средств из-за левереджа.
      - generic [ref=e8]:
        - strong [ref=e9]: 78.48% аккаунтов розничных инвесторов теряют деньги при торговле CFD с этим брокером.
        - text: Убедитесь, что вы понимаете, как работают CFD, и можете позволить себе высокий риск потери средств.
    - generic [ref=e11]:
      - link [ref=e12]:
        - /url: /ru-int
        - img [ref=e13]
      - generic [ref=e18]:
        - navigation [ref=e19]:
          - button "Трейдинг" [ref=e20]:
            - button "Трейдинг" [ref=e21]:
              - generic [ref=e22]: Трейдинг
          - button "Рынки" [ref=e23]:
            - button "Рынки" [ref=e24]:
              - generic [ref=e25]: Рынки
          - link "Ценообразование" [ref=e28]:
            - /url: /ru-int/ways-to-trade/fees-and-charges
          - button "О нас" [ref=e29]:
            - button "О нас" [ref=e30]:
              - generic [ref=e31]: О нас
        - button "ru" [ref=e32] [cursor=pointer]:
          - generic [ref=e34]: ru
      - generic [ref=e36]:
        - button "Войти" [ref=e37] [cursor=pointer]: Войти
        - button "Открыть аккаунт" [ref=e38] [cursor=pointer]: Открыть аккаунт
  - generic [ref=e39]:
    - paragraph [ref=e42]:
      - generic [ref=e43]:
        - link "Главная страница" [ref=e44]:
          - /url: /ru-int
        - text: •
      - generic [ref=e45]:
        - link "Обучение" [ref=e46]:
          - /url: /ru-int/learn
        - text: •
      - text: Торговые стратегии
    - generic [ref=e47]:
      - generic [ref=e51]:
        - generic [ref=e52]:
          - heading "Стратегии торговли" [level=1] [ref=e53]
          - paragraph [ref=e55]: Торговая стратегия может стать важнейшим помощником в навигации по рискованным финансовым рынкам. Отточите свои техники с помощью наших торговых стратегий и руководств, представленных ниже.
        - generic [ref=e56]:
          - button "Создать аккаунт" [ref=e57] [cursor=pointer]
          - button "Попробовать демо-аккаунт" [ref=e58] [cursor=pointer]
      - generic [ref=e62]:
        - generic [ref=e63]:
          - heading "Популярные торговые стратегии" [level=2] [ref=e64]
          - generic [ref=e65]: Усовершенствуйте свои навыки с помощью наших подробных руководств по торговым стратегиям.
        - generic [ref=e66]:
          - generic [ref=e68]:
            - heading "Свинг-трейдинг" [level=3] [ref=e69]
            - paragraph [ref=e71]: Узнайте о ключевых приемах среднесрочной стратегии.
            - link "Руководство по свинг-трейдингу" [ref=e72] [cursor=pointer]:
              - /url: /ru-int/learn/trading-strategies/swing-trading
              - generic [ref=e73]: Руководство по свинг-трейдингу
          - generic [ref=e75]:
            - heading "Позиционная торговля" [level=3] [ref=e76]
            - paragraph [ref=e78]: Изучите принципы удержания долгосрочных позиций.
            - link "Руководство по позиционной торговле" [ref=e79] [cursor=pointer]:
              - /url: /ru-int/learn/trading-strategies/position-trading
              - generic [ref=e80]: Руководство по позиционной торговле
          - generic [ref=e82]:
            - heading "Трендовая торговля" [level=3] [ref=e83]
            - paragraph [ref=e85]: Узнайте, как выявлять, отслеживать и реагировать на рыночные тенденции.
            - link "Руководство по трендовой торговле" [ref=e86] [cursor=pointer]:
              - /url: /ru-int/learn/trading-strategies/trend-trading
              - generic [ref=e87]: Руководство по трендовой торговле
          - generic [ref=e89]:
            - heading "Дневная торговля" [level=3] [ref=e90]
            - paragraph [ref=e92]: Откройте для себя основные понятия, связанные с открытием и закрытием позиций в течение дня.
            - link "Руководство по дневной торговле" [ref=e93] [cursor=pointer]:
              - /url: /ru-int/learn/trading-strategies/day-trading
              - generic [ref=e94]: Руководство по дневной торговле
      - generic [ref=e96]:
        - generic [ref=e97]:
          - heading "Наши самые читаемые руководства по торговле" [level=2] [ref=e98]
          - generic [ref=e99]: Ознакомьтесь с ключевыми понятиями маржи, торговли и инвестирования.
        - generic [ref=e100]:
          - generic [ref=e102]:
            - heading "Маржинальная торговля" [level=3] [ref=e103]
            - paragraph [ref=e105]: Торговля с использованием заемных средств (маржи) требует стратегического мышления.
            - link "Руководство по маржинальной торговле" [ref=e106] [cursor=pointer]:
              - /url: /ru-int/learn/trading-strategies/margin-trading
              - generic [ref=e107]: Руководство по маржинальной торговле
          - generic [ref=e109]:
            - heading "Руководство по трейдингу и инвестированию" [level=3] [ref=e110]
            - paragraph [ref=e112]: Узнайте о ключевых различиях между трейдингом и инвестированием.
            - link "Трейдинг против инвестирования" [ref=e113] [cursor=pointer]:
              - /url: /ru-int/learn/trading-strategies/trading-vs-investing
              - generic [ref=e114]: Трейдинг против инвестирования
      - generic [ref=e116]:
        - generic [ref=e117]:
          - heading "Раскройте свои торговые способности" [level=2] [ref=e118]
          - generic [ref=e119]: Откройте для себя дополнительные ресурсы, позволяющие повысить эффективность ваших стратегий и управлять вашими доходами и расходами.
        - generic [ref=e120]:
          - generic [ref=e122]:
            - heading "Технический анализ" [level=3] [ref=e123]
            - paragraph [ref=e125]: Изучайте скользящие средние, выявляйте закономерности и стратегии с помощью наших руководств по техническому анализу.
            - link "Ознакомьтесь с руководствами по техническому анализу" [ref=e126] [cursor=pointer]:
              - /url: /ru-int/learn/technical-analysis
              - generic [ref=e127]: Ознакомьтесь с руководствами по техническому анализу
          - generic [ref=e129]:
            - heading "Анализ рынка" [level=3] [ref=e130]
            - paragraph [ref=e132]:
              - text: Посетите наш
              - link "раздел аналитики" [ref=e133]:
                - /url: /ru-int/analysis
              - text: ", чтобы узнать и о других стратегиях."
              - strong
            - link "Ознакомьтесь с нашим анализом" [ref=e134] [cursor=pointer]:
              - /url: /ru-int/analysis
              - generic [ref=e135]: Ознакомьтесь с нашим анализом
      - generic [ref=e138]:
        - heading "Три шага для начала торговли" [level=2] [ref=e140]
        - generic [ref=e141]:
          - button [ref=e143] [cursor=pointer]
          - generic [ref=e146]: 1. Создайте аккаунт (применяется проверка)
          - generic [ref=e147]: 2. Внесите депозит удобным способом
          - generic [ref=e148]: 3. Приступайте к торговле, когда будете готовы
  - contentinfo [ref=e150]:
    - generic [ref=e151]:
      - link [ref=e152]:
        - /url: /ru-int
        - img [ref=e153]
      - generic [ref=e157]:
        - link [ref=e158]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e159]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e160]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e161]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e162]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e163]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e164]:
        - link [ref=e165]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=7bf05558-958b-486e-8aac-a83dc8a110ec&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e166]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=7bf05558-958b-486e-8aac-a83dc8a110ec&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e167]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=7bf05558-958b-486e-8aac-a83dc8a110ec&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e168]:
      - generic [ref=e169]:
        - generic [ref=e170]:
          - generic [ref=e171]:
            - generic [ref=e172]: "Страна / Область:"
            - button "Kazakhstan" [ref=e173] [cursor=pointer]:
              - generic [ref=e175]: Kazakhstan
          - generic [ref=e176]: •
          - generic [ref=e177]:
            - generic [ref=e178]: "Язык:"
            - button "Russian" [ref=e179] [cursor=pointer]:
              - generic [ref=e180]: Russian
        - generic [ref=e181]:
          - generic [ref=e182]: "Вы также можете связаться с нами:"
          - link "+7 727 357 4671" [ref=e185]:
            - /url: tel:+7 727 357 4671
            - strong [ref=e186]: +7 727 357 4671
            - strong
          - generic [ref=e187]: •
          - link "support@capital.com" [ref=e189]:
            - /url: mailto:support@capital.com
            - strong [ref=e190]: support@capital.com
      - generic [ref=e191]:
        - generic [ref=e192]:
          - strong [ref=e194]: Трейдинг
          - generic [ref=e195]:
            - generic [ref=e196]:
              - generic [ref=e197]: Трейдинг
              - generic [ref=e198]:
                - link "Торговля CFD" [ref=e200]:
                  - /url: /ru-int/ways-to-trade/cfd-trading
                - link "Демо-трейдинг" [ref=e202]:
                  - /url: /ru-int/trading-platforms/demo-account
                - link "Профессиональный аккаунт" [ref=e204]:
                  - /url: /ru-int/professional
            - generic [ref=e205]:
              - generic [ref=e206]: Платформы
              - generic [ref=e207]:
                - link "Веб-платформа" [ref=e209]:
                  - /url: /ru-int/trading-platforms/web-platform
                - link "Мобильные приложения" [ref=e211]:
                  - /url: /ru-int/trading-platforms/mobile-apps
                - link "TradingView" [ref=e213]:
                  - /url: /ru-int/trading-platforms/trading-view
                - link "MT4" [ref=e215]:
                  - /url: /ru-int/trading-platforms/mt4
                - link "MT5" [ref=e217]:
                  - /url: /ru-int/trading-platforms/mt5
            - generic [ref=e218]:
              - generic [ref=e219]: Обучение
              - generic [ref=e220]:
                - link "Торговые стратегии" [ref=e222]:
                  - /url: /ru-int/learn/trading-strategies
                - link "Технический анализ" [ref=e224]:
                  - /url: /ru-int/learn/technical-analysis
                - link "Психология трейдинга" [ref=e226]:
                  - /url: /ru-int/learn/trading-psychology
                - link "Обучение" [ref=e228]:
                  - /url: /ru-int/learn
        - generic [ref=e229]:
          - strong [ref=e231]: Рынки
          - generic [ref=e232]:
            - generic [ref=e233]:
              - generic [ref=e234]: Наши рынки
              - generic [ref=e235]:
                - link "Рынки" [ref=e237]:
                  - /url: /ru-int/markets
                - link "Акции" [ref=e239]:
                  - /url: /ru-int/markets/shares
                - link "Форекс" [ref=e241]:
                  - /url: /ru-int/markets/forex
                - link "Индексы" [ref=e243]:
                  - /url: /ru-int/markets/indices
                - link "Сырьевые товары" [ref=e245]:
                  - /url: /ru-int/markets/commodities
                - link "Криптовалюты" [ref=e247]:
                  - /url: /ru-int/markets/cryptocurrencies
                - link "Облигации" [ref=e249]:
                  - /url: /ru-int/markets/bonds
                - link "Процентные ставки" [ref=e251]:
                  - /url: /ru-int/markets/interest-rates
            - generic [ref=e252]:
              - generic [ref=e253]: Аналитика рынка
              - link "Анализ рынка" [ref=e256]:
                - /url: /ru-int/analysis
        - link "Ценообразование" [ref=e259]:
          - /url: /ru-int/ways-to-trade/fees-and-charges
          - strong [ref=e260]: Ценообразование
        - generic [ref=e261]:
          - strong [ref=e263]: О нас
          - generic [ref=e264]:
            - generic [ref=e265]:
              - generic [ref=e266]: О нас
              - generic [ref=e267]:
                - link "О нас" [ref=e269]:
                  - /url: /ru-int/about-us
                - link "Наши офисы" [ref=e271]:
                  - /url: /ru-int/about-us/our-offices
                - link "Безопасна ли платформа Capital.com?" [ref=e273]:
                  - /url: /ru-int/security-measures
                - link "Наша бизнес-модель" [ref=e275]:
                  - /url: /ru-int/about-us/how-capital-makes-money
            - generic [ref=e276]:
              - generic [ref=e277]: Работайте с нами
              - generic [ref=e278]:
                - link "Партнерские программы" [ref=e280]:
                  - /url: /ru-int/partnerships
                - link "Пригласите друга" [ref=e282]:
                  - /url: /ru-int/refer-a-friend
            - generic [ref=e283]:
              - generic [ref=e284]: Помощь
              - generic [ref=e285]:
                - link "Помощь" [ref=e287]:
                  - /url: /ru-int/help
                - link "Уязвимость клиента" [ref=e289]:
                  - /url: /ru-int/help/client-vulnerability
                - link "Связаться с нами" [ref=e291]:
                  - /url: /ru-int/contact-us
            - generic [ref=e292]:
              - generic [ref=e293]: Правовая информация
              - generic [ref=e294]:
                - link "Условия и правила" [ref=e296]:
                  - /url: /ru-int/terms-and-policies
                - link "Жалобы" [ref=e298]:
                  - /url: /ru-int/help/complaints
    - generic [ref=e300]:
      - paragraph [ref=e301]:
        - text: CFD — это сложные инструменты, которые связаны с высоким риском быстрой потери средств из-за левереджа.
        - generic [ref=e302]:
          - strong [ref=e303]: 78.48% аккаунтов розничных инвесторов теряют деньги при торговле CFD с этим брокером.
          - text: Убедитесь, что вы понимаете, как работают CFD, и можете позволить себе высокий риск потери средств.
      - paragraph
      - paragraph [ref=e304]: "Capital Com Online Investments Ltd — это компания с ограниченной ответственностью, зарегистрированная под номером 209236B. Capital Com Online Investments Ltd зарегистрирована в Содружестве Багамских Островов и имеет разрешение Комиссии по ценным бумагам Багамских Островов (номер лицензии SIA-F245). Юридический адрес компании: #3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Нассау, Багамские Острова."
    - generic [ref=e305]:
      - paragraph [ref=e306]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e307]:
        - link "Карта сайта" [ref=e308]:
          - /url: /ru-int/sitemap
        - link "Настройки файлов cookie" [ref=e309]:
          - /url: ""
        - link:
          - /url: /ru-int
        - link "Условия и положения" [ref=e310]:
          - /url: /ru-int/terms-and-policies
        - link "Процедура рассмотрения жалоб (SCB)" [ref=e311]:
          - /url: /ru-int/help/complaints
  - generic [ref=e314]:
    - generic [ref=e315]:
      - heading "Здравствуйте. Похоже, вы находитесь в United States of America" [level=3] [ref=e317]
      - paragraph [ref=e318]: Представленные на этом веб-сайте продукты и услуги недоступны в United States of America.
    - button "Остаться" [active] [ref=e320] [cursor=pointer]
  - button [ref=e321] [cursor=pointer]
  - dialog "Cookie banner" [ref=e323]:
    - generic [ref=e324]:
      - paragraph [ref=e326]:
        - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
        - link "More information about your privacy, opens in a new tab" [ref=e327] [cursor=pointer]:
          - /url: https://capital.com/cookies_policy_bah
          - text: Cookie Policy
        - text: .
      - generic [ref=e328]:
        - button "Reject all" [ref=e329] [cursor=pointer]
        - button "Allow all cookies" [ref=e330] [cursor=pointer]
        - button "Cookie settings" [ref=e331] [cursor=pointer]
  - alert [ref=e332]
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | import { TIMEOUTS } from '../../config/timeouts';
  3  | 
  4  | export abstract class BaseModal {
  5  |     protected readonly page: Page;
  6  |     readonly root: Locator;
  7  | 
  8  |     protected constructor(page: Page, root: Locator) {
  9  |         this.page = page;
  10 |         this.root = root;
  11 |     }
  12 | 
  13 |     async waitUntilClosed(): Promise<void> {
> 14 |         await this.root.waitFor({ state: 'hidden', timeout: TIMEOUTS.modalDisappearance });
     |                         ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  15 |     }
  16 | 
  17 |     protected async isPresent(timeout = TIMEOUTS.modalAppearance): Promise<boolean> {
  18 |         return this.root
  19 |             .waitFor({ state: 'visible', timeout })
  20 |             .then(() => true)
  21 |             .catch(() => false);
  22 |     }
  23 | }
  24 | 
```