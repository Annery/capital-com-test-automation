# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/pricing.spec.ts >> [SCB ES | authorized] Pricing / Pricing >> [banner_with_steps] -> platformPage
- Location: src/fixtures/content-section.ts:41:25

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-type="banner_with_steps"]').filter({ visible: true }).first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-type="banner_with_steps"]').filter({ visible: true }).first()

```

```yaml
- banner:
  - text: Los CFD son instrumentos complejos y conllevan un alto riesgo de perder dinero rápidamente debido al apalancamiento.
  - strong: El 78.48 % de las cuentas de los inversores minoristas pierde dinero al operar con CFD con este proveedor.
  - text: Debes plantearte si entiendes cómo funcionan los CFD y si puedes permitirte asumir el elevado riesgo de perder tu dinero.
  - link:
    - /url: /es-int
    - img
  - navigation:
    - button "Trading":
      - button "Trading"
    - button "Mercados":
      - button "Mercados"
    - link "Precios":
      - /url: /es-int/ways-to-trade/fees-and-charges
    - button "Sobre nosotros":
      - button "Sobre nosotros"
  - button "es"
  - link "Abrir plataforma":
    - /url: /trading/platform/
- paragraph:
  - link "Inicio":
    - /url: /es-int
  - text: •
  - link "Trading":
    - /url: /es-int/ways-to-trade
  - text: •Precios
- heading "Cargos y tarifas" [level=1]
- paragraph: Todos los cargos y tarifas se documentan y comunican antes de abrir cualquier posición.
- main:
  - heading "Tarifas de la cuenta" [level=2]
  - table:
    - rowgroup:
      - row "Apertura de cuenta SIN COSTO":
        - cell "Apertura de cuenta":
          - paragraph:
            - strong: Apertura de cuenta
        - cell "SIN COSTO":
          - paragraph:
            - strong: SIN COSTO
      - row "Cierre de cuenta SIN COSTO":
        - cell "Cierre de cuenta":
          - paragraph:
            - strong: Cierre de cuenta
        - cell "SIN COSTO":
          - paragraph:
            - strong: SIN COSTO
      - row "Cuenta demo SIN COSTO":
        - cell "Cuenta demo":
          - paragraph:
            - strong: Cuenta demo
        - cell "SIN COSTO":
          - paragraph:
            - strong: SIN COSTO
  - heading "Tarifas de depósitos y retiros" [level=2]
  - table:
    - rowgroup:
      - row "Tarifa de depósito SIN COSTO":
        - cell "Tarifa de depósito":
          - paragraph:
            - strong: Tarifa de depósito
        - cell "SIN COSTO":
          - paragraph:
            - strong: SIN COSTO
      - row "Depósito mínimo 10 USD/EUR/GBP para tarjetas bancarias y Apple Pay.* *Los montos mínimos de depósito varían según el método de pago. Las transferencias bancarias tienen un mínimo de 50 EUR o su equivalente en la moneda base de la cuenta.":
        - cell "Depósito mínimo":
          - paragraph:
            - strong: Depósito mínimo
        - cell "10 USD/EUR/GBP para tarjetas bancarias y Apple Pay.* *Los montos mínimos de depósito varían según el método de pago. Las transferencias bancarias tienen un mínimo de 50 EUR o su equivalente en la moneda base de la cuenta.":
          - paragraph:
            - strong: 10 USD/EUR/GBP para tarjetas bancarias y Apple Pay.*
          - paragraph:
            - strong: "*Los montos mínimos de depósito varían según el método de pago. Las transferencias bancarias tienen un mínimo de 50 EUR o su equivalente en la moneda base de la cuenta."
      - row "Tarifa de retiro SIN COSTO":
        - cell "Tarifa de retiro":
          - paragraph:
            - strong: Tarifa de retiro
        - cell "SIN COSTO":
          - paragraph:
            - strong: SIN COSTO
      - row "Retiro mínimo 20 USD/EUR/GBP para tarjetas bancarias* *Los montos mínimos de retiro varían según el método de pago. Consulta todos los detalles [aquí]. Si el saldo de una cuenta es inferior al límite mínimo de retiro, solo podrás retirar el saldo total.":
        - cell "Retiro mínimo":
          - strong: Retiro mínimo
        - cell "20 USD/EUR/GBP para tarjetas bancarias* *Los montos mínimos de retiro varían según el método de pago. Consulta todos los detalles [aquí]. Si el saldo de una cuenta es inferior al límite mínimo de retiro, solo podrás retirar el saldo total.":
          - paragraph:
            - strong: 20 USD/EUR/GBP para tarjetas bancarias*
          - paragraph:
            - strong:
              - text: "*Los montos mínimos de retiro varían según el método de pago. Consulta todos los detalles ["
              - link "aquí":
                - /url: https://help.capitalccbah.com/hc/es/articles/9626872797074-What-is-the-minimum-withdrawal-amount
              - text: "]. Si el saldo de una cuenta es inferior al límite mínimo de retiro, solo podrás retirar el saldo total."
  - heading "Tarifas de trading" [level=2]
  - table:
    - rowgroup:
      - row "El spread El spread es la diferencia entre el precio de compra y el de venta de un instrumento. Es el costo de ejecutar una posición. Conocer más Los spreads son dinámicos y se ajustan a las condiciones del mercado subyacente.Consulta el spread de un instrumento específico aquí.":
        - cell "El spread El spread es la diferencia entre el precio de compra y el de venta de un instrumento. Es el costo de ejecutar una posición. Conocer más":
          - paragraph:
            - strong: El spread
            - text: El spread es la diferencia entre el precio de compra y el de venta de un instrumento. Es el costo de ejecutar una posición.
          - paragraph:
            - link "Conocer más":
              - /url: /es-int/ways-to-trade/fees-and-charges#part_3
        - cell "Los spreads son dinámicos y se ajustan a las condiciones del mercado subyacente.Consulta el spread de un instrumento específico aquí.":
          - paragraph:
            - text: Los spreads son dinámicos y se ajustan a las condiciones del mercado subyacente.Consulta el spread de un instrumento específico
            - link "aquí":
              - /url: /es-int/ways-to-trade/fees-and-charges#part_3
            - text: .
      - row "Comisión de trading SIN COSTO":
        - cell "Comisión de trading":
          - paragraph:
            - strong: Comisión de trading
        - cell "SIN COSTO":
          - paragraph:
            - strong: SIN COSTO
      - row "Tarifa nocturna* Un ajuste de interés que se aplica cuando mantienes una posición abierta de un día para otro. *Las posiciones de CFD con apalancamiento 1:1 (sin apalancamiento) no están sujetas a financiamiento nocturno, excepto en un número limitado de mercados. La tarifa se paga o se recibe según la dirección de la posición. Las tarifas de cada instrumento aparecen en la tabla de instrumentos a continuación.":
        - cell "Tarifa nocturna* Un ajuste de interés que se aplica cuando mantienes una posición abierta de un día para otro. *Las posiciones de CFD con apalancamiento 1:1 (sin apalancamiento) no están sujetas a financiamiento nocturno, excepto en un número limitado de mercados.":
          - paragraph:
            - strong: Tarifa nocturna*
            - text: Un ajuste de interés que se aplica cuando mantienes una posición abierta de un día para otro. *Las posiciones de CFD con apalancamiento 1:1 (sin apalancamiento) no están sujetas a financiamiento nocturno, excepto en un número limitado de mercados.
        - cell "La tarifa se paga o se recibe según la dirección de la posición. Las tarifas de cada instrumento aparecen en la tabla de instrumentos a continuación.":
          - paragraph: La tarifa se paga o se recibe según la dirección de la posición. Las tarifas de cada instrumento aparecen en la tabla de instrumentos a continuación.
      - row "Conversión de divisas Se aplica una tarifa de conversión en mercados denominados en una divisa distinta a la de la cuenta de trading. Se aplica el mismo margen de divisas al transferir fondos entre subcuentas en diferentes monedas. 0.7% de la tasa de divisas spot para inversionistas minoristas 0.5% de la tasa de divisas spot para clientes profesionales":
        - cell "Conversión de divisas Se aplica una tarifa de conversión en mercados denominados en una divisa distinta a la de la cuenta de trading. Se aplica el mismo margen de divisas al transferir fondos entre subcuentas en diferentes monedas.":
          - paragraph:
            - strong: Conversión de divisas
            - text: Se aplica una tarifa de conversión en mercados denominados en una divisa distinta a la de la cuenta de trading.
          - paragraph: Se aplica el mismo margen de divisas al transferir fondos entre subcuentas en diferentes monedas.
        - cell "0.7% de la tasa de divisas spot para inversionistas minoristas 0.5% de la tasa de divisas spot para clientes profesionales":
          - strong: 0.7% de la tasa de divisas spot para inversionistas minoristas 0.5% de la tasa de divisas spot para clientes profesionales
      - row "Órdenes stop-loss garantizadas (GSL)* Un GSL cierra una posición al precio especificado, lo que elimina el riesgo de deslizamiento al momento de la ejecución. Se aplica una tarifa cuando se activa. Conocer más La tarifa del GSL varía según el mercado, el precio de entrada y el tamaño de la posición. La tarifa se muestra en el ticket de operación antes de abrir la posición.":
        - cell "Órdenes stop-loss garantizadas (GSL)* Un GSL cierra una posición al precio especificado, lo que elimina el riesgo de deslizamiento al momento de la ejecución. Se aplica una tarifa cuando se activa. Conocer más":
          - paragraph:
            - strong: Órdenes stop-loss garantizadas (GSL)*
            - text: Un GSL cierra una posición al precio especificado, lo que elimina el riesgo de deslizamiento al momento de la ejecución. Se aplica una tarifa cuando se activa.
          - paragraph:
            - link "Conocer más":
              - /url: /es-int/ways-to-trade/fees-and-charges#part_5
        - cell "La tarifa del GSL varía según el mercado, el precio de entrada y el tamaño de la posición. La tarifa se muestra en el ticket de operación antes de abrir la posición.":
          - paragraph: La tarifa del GSL varía según el mercado, el precio de entrada y el tamaño de la posición. La tarifa se muestra en el ticket de operación antes de abrir la posición.
  - heading "Spreads y tarifas nocturnas por instrumento" [level=2]
  - button "Todos Todos Materias primas Criptoactivos Divisas Índices Acciones Bonos Tipos de interés":
    - button "Todos":
      - textbox "name": Todos
    - button "Todos"
    - button "Materias primas"
    - button "Criptoactivos"
    - button "Divisas"
    - button "Índices"
    - button "Acciones"
    - button "Bonos"
    - button "Tipos de interés"
  - button:
    - textbox "marketlist_search":
      - /placeholder: Search
  - separator
  - text: Nombre Vender Comprar Spread Ajuste de financiamiento nocturno de posición larga Ajuste de financiamiento nocturno de posición corta Prima por orden stop-loss garantizada
  - link "Gold Gold Spot 4045.20 4045.70 0.50 -0.01553% 0.00731% 0.03":
    - /url: /es-int/markets/commodities/gold-spot-materia-prima
  - link "US100 US Tech 100 29287.9 29289.7 1.8 -0.02154% -0.00068% 0.02":
    - /url: /es-int/markets/indices/us-tech-100-indice-1
  - link "BTC/USD Bitcoin to US Dollar 59608.35 59658.35 50.00 -0.06164% 0.01370% 0.25":
    - /url: /es-int/markets/cryptocurrencies/bitcoin-to-us-dollar-grafico
  - link "XRP/USD Ripple to US Dollar 1.03762 1.04282 0.00520 -0.06164% 0.01370% 0.25":
    - /url: /es-int/markets/cryptocurrencies/ripple-to-us-dollar-grafico
  - link "ETH/USD Ethereum to US Dollar 1569.01 1570.76 1.75 -0.06164% 0.01370% 0.25":
    - /url: /es-int/markets/cryptocurrencies/ethereum-to-us-dollar-grafico
  - link "Oil - Crude US Crude Oil Spot 69.391 69.423 0.032 -0.01096% -0.01096% 0.03":
    - /url: /es-int/markets/commodities/us-crude-oil-spot-materia-prima-1
  - link "Silver Silver Spot 57.915 57.965 0.050 -0.01557% 0.00735% 0.03":
    - /url: /es-int/markets/commodities/silver-spot-materia-prima
  - text: Los precios de las acciones son indicativos y pueden diferir de los reales.
  - heading "Tarifa de spread" [level=2]
  - paragraph: El spread bid-ask es la diferencia entre el precio de venta (bid) y el de compra (ask) de un instrumento. El precio ask siempre es más alto que el bid, lo que significa que el mercado debe moverse más allá del spread para que una posición genere ganancias.
  - paragraph: Los spreads reflejan las condiciones del mercado subyacente, incluyendo la oferta, la demanda y la liquidez. En mercados con mayor liquidez, los spreads tienden a ser más ajustados.
  - heading "Ejemplo de spread en CFD" [level=3]
  - list:
    - listitem: • Tienes 1 contrato del US Tech 100, cotizado a 12475/76.
    - listitem: • El spread es de 1 punto.
    - listitem: • La mitad del spread se paga al abrir y la otra mitad al cerrar. El costo total del spread es £1 × 1 punto = £1.
  - heading "Tarifa de financiamiento nocturno" [level=2]
  - paragraph: Cuando mantienes una posición de un día para otro, se aplica un ajuste de interés. Si este monto se paga o se recibe depende de la dirección de la posición y de la tasa subyacente. El cálculo se basa en tasas definidas y factores de mercado, como se detalla en los ejemplos a continuación.
  - paragraph: "En la mayoría de los mercados, una posición de CFD con apalancamiento 1:1 (sin apalancamiento) no generará una tarifa de financiamiento nocturno. Los siguientes instrumentos son excepciones, donde el financiamiento nocturno se aplica sin importar el apalancamiento:"
  - list:
    - listitem: • Gas natural
    - listitem: • Cacao de EE. UU.
    - listitem: • Índice de volatilidad (VIX)
    - listitem: • Pares de divisas con lira turca (TRY)
  - button "Índices"
  - button "Materias primas"
  - button "Divisas"
  - button "Acciones"
  - button "Criptomonedas"
  - button "Bonos/Tasas de interés"
  - heading "Fórmula" [level=3]
  - paragraph: Nuestra tarifa diaria +/- Referencia de tasa de interés
  - paragraph: La referencia* sigue la moneda del mercado subyacente. Los índices denominados en USD usan SOFR. Los índices denominados en GBP usan SONIA.
  - paragraph: "Nuestra tarifa diaria es del 4% anual. La tasa anual se divide entre 360 o 365 días, según la convención de la moneda:"
  - paragraph: "GBP, CAD, SGD y monedas similares: 4% / 365 = 0.01096% diario USD, EUR, CHF, JPY y monedas similares: 4% / 360 = 0.01111% diario"
  - paragraph: El divisor coincide con el estándar de conteo de días aplicado en el mercado de cada moneda.
  - paragraph: "*La referencia de tasa de interés correspondiente ya incluye un ajuste de spread subyacente. Esto se refleja dentro de la tasa publicada (por ejemplo, SOFR o SONIA)."
  - heading "Ejemplo de CFD" [level=3]
  - list:
    - listitem: "• Se mantienen 0.6 contratos del US Tech 100, con un precio de 20,140. Exposición total: $12,084."
    - listitem: • El US Tech 100 está denominado en USD. La tasa de referencia correspondiente es SOFR, que aquí se asume en 5.01448% anual, o 0.01393% diario.
    - listitem: • La tarifa diaria de la plataforma es del 0.01111%.
    - listitem: "• Para una posición larga: 0.02504% (SOFR + tarifa de la plataforma) = $3.03 pagados."
    - listitem: "• Para una posición corta: 0.00282% (SOFR − tarifa de la plataforma) = $0.34 recibidos."
  - heading "Tarifa de stop-loss garantizado" [level=2]
  - paragraph: "Una orden stop-loss estándar cierra una posición a un nivel determinado. No se garantiza su ejecución exactamente a ese precio: si hay un salto en el mercado, la ejecución podría ocurrir al siguiente precio disponible. El deslizamiento puede ocurrir en condiciones volátiles o de baja liquidez."
  - paragraph: Una orden stop-loss garantizada (GSL) cierra una posición exactamente al precio especificado, sin importar el deslizamiento o los saltos del mercado. Se aplica una tarifa (la prima de GSL) si la orden se activa.
  - paragraph: "La tarifa del GSL se calcula usando tres componentes: la prima del stop garantizado (porcentaje), el precio de apertura de la posición y la cantidad."
  - strong: Tarifa GSL = prima de GSL × precio de apertura de la posición × cantidad
  - paragraph: La tarifa GSL correspondiente se muestra en el ticket de operación al seleccionar un GSL.
  - heading "Tarifa de conversión de divisas" [level=2]
  - paragraph: Se aplica cuando una transacción se realiza en una moneda distinta a la moneda base de la cuenta. La tarifa se integra en el tipo de cambio utilizado para la conversión; no se cobra por separado. Los clientes pagan un margen del 0.7%.
  - paragraph: "Se aplica a:"
  - list:
    - listitem: • Ganancias y pérdidas realizadas
    - listitem: • Ajustes de financiamiento nocturno
    - listitem: • Tarifas de órdenes stop-loss garantizadas
    - listitem: • Dividendos
    - listitem: • Conversiones de divisas independientes (conversiones manuales del saldo de la cuenta)
  - 'heading "Ejemplo: cierre de una operación" [level=3]'
  - list:
    - listitem: "• Moneda de la cuenta: USD. Operación con acciones europeas cerrada con una ganancia de €10.00."
    - listitem: "• A tasa spot (1.1300): $11.30"
    - listitem: "• A tasa total incluyendo la tarifa del 0.7% (1.1221): $11.22"
    - listitem: "• Tarifa de conversión: $0.08"
  - 'heading "Ejemplo: ajuste de financiamiento nocturno" [level=3]'
  - list:
    - listitem: • Posición en acciones europeas. Ajuste de financiamiento nocturno de -€4.00 aplicado en EUR.
    - listitem: "• A tasa spot (1.1300): $4.52"
    - listitem: "• A tasa total incluyendo la tarifa del 0.7% (1.1379): $4.55"
    - listitem: "• Tarifa de conversión: $0.03"
  - paragraph: El tipo de cambio total utilizado para cada conversión es visible en la sección de Informes y al cerrar una posición.
  - heading "Más sobre nuestros precios" [level=2]
  - heading "Entiende los precios de Capital.com" [level=3]
  - paragraph: Un desglose detallado de todos los costos que se aplican al operar con nosotros.
  - link "Conocer más":
    - /url: /es-int/ways-to-trade/pricing
- complementary:
  - navigation:
    - strong: Contenido
    - separator
    - link "Tarifas de la cuenta":
      - /url: "#part_0"
    - link "Tarifas de depósitos y retiros":
      - /url: "#part_1"
    - link "Tarifas de trading":
      - /url: "#part_2"
    - link "Tarifa de spread":
      - /url: "#part_3"
    - link "Tarifa de financiamiento nocturno":
      - /url: "#part_4"
    - link "Tarifa de stop-loss garantizado":
      - /url: "#part_5"
    - link "Tarifa de conversión de divisas":
      - /url: "#part_6"
- contentinfo:
  - link:
    - /url: /es-int
    - img
  - link:
    - /url: https://twitter.com/capitalcom
  - link:
    - /url: https://www.linkedin.com/company/capital.com/
  - link:
    - /url: https://www.instagram.com/capitalcom/
  - link:
    - /url: https://www.tiktok.com/@capitalcom_international
  - link:
    - /url: https://www.facebook.com/capitalcom/
  - link:
    - /url: https://www.reddit.com/r/capitalcom/
  - link:
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=cc5683e3-419a-4856-9c78-44388ebdbf67&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=cc5683e3-419a-4856-9c78-44388ebdbf67&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=cc5683e3-419a-4856-9c78-44388ebdbf67&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "País:"
  - button "Mexico"
  - text: "• Idioma:"
  - button "Spanish"
  - text: "También puedes contactarnos:"
  - link "+52 55 9417 8887":
    - /url: tel:+52 55 9417 8887
    - strong: +52 55 9417 8887
    - strong
  - text: •
  - link "support@capital.com":
    - /url: mailto:support@capital.com
    - strong: support@capital.com
  - strong: Trading
  - text: Trading
  - link "Trading de CFD":
    - /url: /es-int/ways-to-trade/cfd-trading
  - link "Trading en cuenta demo":
    - /url: /es-int/trading-platforms/demo-account
  - link "Profesional":
    - /url: /es-int/professional
  - text: Plataformas
  - link "Plataforma web":
    - /url: /es-int/trading-platforms/web-platform
  - link "Aplicaciones móviles":
    - /url: /es-int/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /es-int/trading-platforms/trading-view
  - link "MT4":
    - /url: /es-int/trading-platforms/mt4
  - link "MT5":
    - /url: /es-int/trading-platforms/mt5
  - text: Aprende
  - link "Estrategias de trading":
    - /url: /es-int/learn/trading-strategies
  - link "Análisis técnico":
    - /url: /es-int/learn/technical-analysis
  - link "Psicología del trading":
    - /url: /es-int/learn/trading-psychology
  - link "Aprende":
    - /url: /es-int/learn
  - strong: Mercados
  - text: Nuestros mercados
  - link "Mercados":
    - /url: /es-int/markets
  - link "Acciones":
    - /url: /es-int/markets/shares
  - link "Divisas":
    - /url: /es-int/markets/forex
  - link "Índices":
    - /url: /es-int/markets/indices
  - link "Materias primas":
    - /url: /es-int/markets/commodities
  - link "Criptomonedas":
    - /url: /es-int/markets/cryptocurrencies
  - link "Bonos":
    - /url: /es-int/markets/bonds
  - link "Tasas de interés":
    - /url: /es-int/markets/interest-rates
  - text: Perspectivas del mercado
  - link "Análisis de mercado":
    - /url: /es-int/analysis
  - link "Precios":
    - /url: /es-int/ways-to-trade/fees-and-charges
    - strong: Precios
  - strong: Sobre nosotros
  - text: Quiénes somos
  - link "Quiénes somos":
    - /url: /es-int/about-us
  - link "Nuestras oficinas":
    - /url: /es-int/about-us/our-offices
  - link "¿Es seguro Capital.com?":
    - /url: /es-int/security-measures
  - link "Nuestro modelo de negocio":
    - /url: /es-int/about-us/how-capital-makes-money
  - text: Trabaja con nosotros
  - link "Programas de colaboración":
    - /url: /es-int/partnerships
  - link "Recomiende a un amigo":
    - /url: /es-int/refer-a-friend
  - text: Ayuda
  - link "Ayuda":
    - /url: /es-int/help
  - link "Vulnerabilidad del cliente":
    - /url: /es-int/help/client-vulnerability
  - link "Contáctanos":
    - /url: /es-int/contact-us
  - text: Legal
  - link "Condiciones y políticas":
    - /url: /es-int/terms-and-policies
  - link "Quejas":
    - /url: /es-int/help/complaints
  - paragraph:
    - text: Los CFD son instrumentos complejos y conllevan un alto riesgo de perder dinero rápidamente debido al apalancamiento.
    - strong: El 78.48 % de las cuentas de los inversores minoristas pierde dinero al operar con CFD con este proveedor.
    - text: Debes plantearte si entiendes cómo funcionan los CFD y si puedes permitirte asumir el elevado riesgo de perder tu dinero.
  - paragraph
  - paragraph: "Capital Com Online Investments Ltd es una compañía de responsabilidad limitada con número de sociedad 209236B. Capital Com Online Investments Ltd es una compañía registrada en la Commonwealth de las Bahamas y autorizada por la Comisión de Valores de las Bahamas con el número de licencia SIA-F245. El domicilio social de la compañía se encuentra en #3 Bayside Executive Park, Blake Road y West Bay Street, P. O. Box CB 13012, Nassau (Bahamas)."
  - paragraph: © 2026 Capital Com Online Investments Ltd
  - link "Mapa del sitio":
    - /url: /es-int/sitemap
  - link "Configuración de cookies":
    - /url: ""
  - link:
    - /url: /es-int
  - link "Términos y condiciones":
    - /url: /es-int/terms-and-policies
  - link "Procedimiento de reclamaciones (SCB)":
    - /url: /es-int/help/complaints
- button
- dialog "Cookie banner":
  - paragraph:
    - text: We use cookies to enhance site navigation, personalise content and ads, and analyse site usage. You can change your cookie settings at any time. For more information, please see our
    - link "More information about your privacy, opens in a new tab":
      - /url: https://capital.com/cookies_policy_bah
      - text: Cookie Policy
    - text: .
  - button "Reject all"
  - button "Allow all cookies"
  - button "Cookie settings"
- alert
```

# Test source

```ts
  1  | import { test, expect, describePerLocaleState, clickUntilUrl, clickUntilVisible } from './test';
  2  | import { Cta, ExpectedResult, type MenuPage } from '../config/content/content-page';
  3  | import { userStates, UserState } from '../config/auth';
  4  | import { SignUpModal } from '../page-objects/modal-windows/SignUpModal';
  5  | import { Page } from '@playwright/test';
  6  | import { ContentPage } from '../page-objects/pages/ContentPage';
  7  | import { PLATFORM_URL } from '../config/site';
  8  | 
  9  | const expectedFor = (cta: Cta, state: UserState): ExpectedResult =>
  10 |     state === 'authorized' ? (cta.authorized ?? 'platformPage') : (cta.anonymous ?? 'signUpForm');
  11 | 
  12 | async function expectCtaOutcome(
  13 |     result: ExpectedResult,
  14 |     ctaType: string,
  15 |     {
  16 |         contentPage,
  17 |         signUpModal,
  18 |         page,
  19 |     }: { contentPage: ContentPage; signUpModal: SignUpModal; page: Page },
  20 | ): Promise<void> {
  21 |     if (result === 'platformPage') {
  22 |         await clickUntilUrl(page, () => contentPage.clickCta(ctaType), PLATFORM_URL);
  23 |     } else {
  24 |         await clickUntilVisible(() => contentPage.clickCta(ctaType), signUpModal.root);
  25 |     }
  26 | }
  27 | 
  28 | export function describeContentSection(section: string, pages: MenuPage[]): void {
  29 |     for (const menuPage of pages) {
  30 |         describePerLocaleState(
  31 |             `${section} / ${menuPage.title}`,
  32 |             userStates,
  33 |             (locale, state) => {
  34 |                 test.beforeEach(async ({ contentPage, dismissInterstitials }) => {
  35 |                     await contentPage.open(menuPage.path);
  36 |                     await dismissInterstitials();
  37 |                 });
  38 | 
  39 |                 for (const cta of menuPage.ctas) {
  40 |                     const result = expectedFor(cta, state);
  41 |                     test(`[${cta.type}] -> ${result}`, async ({
  42 |                         contentPage,
  43 |                         signUpModal,
  44 |                         page,
  45 |                     }) => {
  46 |                         test.skip(
  47 |                             cta.unavailable?.includes(locale.license) ?? false,
  48 |                             `${cta.type} is N/A for ${locale.license}`,
  49 |                         );
  50 | 
> 51 |                         await expect(contentPage.cta(cta.type)).toBeVisible();
     |                                                                 ^ Error: expect(locator).toBeVisible() failed
  52 | 
  53 |                         await expectCtaOutcome(result, cta.type, {
  54 |                             contentPage,
  55 |                             signUpModal,
  56 |                             page,
  57 |                         });
  58 |                     });
  59 |                 }
  60 |             },
  61 |             menuPage.filter,
  62 |         );
  63 |     }
  64 | }
  65 | 
```