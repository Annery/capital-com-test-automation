# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content/pricing.spec.ts >> [SCB FR | unregistered] Pricing / Pricing >> [banner_with_steps] -> signUpForm
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
  - text: Les CFD sont des instruments complexes et présentent un risque élevé de perte rapide en raison de l\'effet de levier.
  - strong: 78.48 % des comptes d’investisseurs particuliers perdent de l’argent en tradant des CFD avec ce fournisseur.
  - text: Vous devez vous demander si vous comprenez le fonctionnement des CFD et si vous pouvez vous permettre de prendre le risque élevé de perdre votre argent.
  - link:
    - /url: /fr-int
    - img
  - navigation:
    - button "Trading":
      - button "Trading"
    - button "Marchés":
      - button "Marchés"
    - link "Tarification":
      - /url: /fr-int/ways-to-trade/fees-and-charges
    - button "À propos de nous":
      - button "À propos de nous"
  - button "fr"
  - button "Se connecter"
  - button "Ouvrir un compte"
- paragraph:
  - link "Accueil":
    - /url: /fr-int
  - text: •
  - link "Trading":
    - /url: /fr-int/ways-to-trade
  - text: •Tarification
- heading "Frais et commissions" [level=1]
- paragraph: Tous les frais et commissions sont documentés et divulgués avant l’ouverture de toute position.
- main:
  - heading "Frais de compte" [level=2]
  - table:
    - rowgroup:
      - row "Ouvrir un compte AUCUN FRAIS":
        - cell "Ouvrir un compte":
          - paragraph:
            - strong: Ouvrir un compte
        - cell "AUCUN FRAIS":
          - paragraph:
            - strong: AUCUN FRAIS
      - row "Clôturer un compte AUCUN FRAIS":
        - cell "Clôturer un compte":
          - paragraph:
            - strong: Clôturer un compte
        - cell "AUCUN FRAIS":
          - paragraph:
            - strong: AUCUN FRAIS
      - row "Compte de démo AUCUN FRAIS":
        - cell "Compte de démo":
          - paragraph:
            - strong: Compte de démo
        - cell "AUCUN FRAIS":
          - paragraph:
            - strong: AUCUN FRAIS
  - heading "Frais de dépôt et de retrait" [level=2]
  - table:
    - rowgroup:
      - row "Frais de dépôt AUCUN FRAIS":
        - cell "Frais de dépôt":
          - paragraph:
            - strong: Frais de dépôt
        - cell "AUCUN FRAIS":
          - paragraph:
            - strong: AUCUN FRAIS
      - row "Dépôt minimum 10 USD/EUR/GBP pour les cartes bancaires et Apple Pay.* *Les montants de dépôt minimum varient en fonction du mode de paiement. Les virements ont un minimum de 50 EUR ou l'équivalent dans la devise de base du compte.":
        - cell "Dépôt minimum":
          - paragraph:
            - strong: Dépôt minimum
        - cell "10 USD/EUR/GBP pour les cartes bancaires et Apple Pay.* *Les montants de dépôt minimum varient en fonction du mode de paiement. Les virements ont un minimum de 50 EUR ou l'équivalent dans la devise de base du compte.":
          - paragraph:
            - strong: 10 USD/EUR/GBP pour les cartes bancaires et Apple Pay.*
          - paragraph:
            - strong: "*Les montants de dépôt minimum varient en fonction du mode de paiement. Les virements ont un minimum de 50 EUR ou l'équivalent dans la devise de base du compte."
      - row "Frais de retrait AUCUN FRAIS":
        - cell "Frais de retrait":
          - paragraph:
            - strong: Frais de retrait
        - cell "AUCUN FRAIS":
          - paragraph:
            - strong: AUCUN FRAIS
      - row "Retrait minimum 20 USD/EUR/GBP pour les cartes bancaires* *Les montants minimaux de retrait varient selon le moyen de paiement. Les détails complets sont disponibles [ici]. Lorsque le solde d'un compte tombe en dessous du montant minimum de retrait, seul un retrait du solde total est disponible.":
        - cell "Retrait minimum":
          - strong: Retrait minimum
        - cell "20 USD/EUR/GBP pour les cartes bancaires* *Les montants minimaux de retrait varient selon le moyen de paiement. Les détails complets sont disponibles [ici]. Lorsque le solde d'un compte tombe en dessous du montant minimum de retrait, seul un retrait du solde total est disponible.":
          - paragraph:
            - strong: 20 USD/EUR/GBP pour les cartes bancaires*
          - paragraph:
            - strong:
              - text: "*Les montants minimaux de retrait varient selon le moyen de paiement. Les détails complets sont disponibles ["
              - link "ici":
                - /url: https://help.capitalccbah.com/hc/fr/articles/9626872797074-What-is-the-minimum-withdrawal-amount
              - text: "]. Lorsque le solde d'un compte tombe en dessous du montant minimum de retrait, seul un retrait du solde total est disponible."
  - heading "Frais de trading" [level=2]
  - table:
    - rowgroup:
      - row "Le spread Le spread est la différence entre le prix d'achat et le prix de vente d'un instrument. C'est le coût d'exécution d'une position. En savoir plus Les spreads sont dynamiques et s’ajustent aux conditions du marché sous-jacent. Consultez le spread pour un instrument spécifique ici.":
        - cell "Le spread Le spread est la différence entre le prix d'achat et le prix de vente d'un instrument. C'est le coût d'exécution d'une position. En savoir plus":
          - paragraph:
            - strong: Le spread
            - text: Le spread est la différence entre le prix d'achat et le prix de vente d'un instrument. C'est le coût d'exécution d'une position.
          - paragraph:
            - link "En savoir plus":
              - /url: /fr-int/ways-to-trade/fees-and-charges#part_3
        - cell "Les spreads sont dynamiques et s’ajustent aux conditions du marché sous-jacent. Consultez le spread pour un instrument spécifique ici.":
          - paragraph:
            - text: Les spreads sont dynamiques et s’ajustent aux conditions du marché sous-jacent. Consultez le spread pour un instrument spécifique
            - link "ici":
              - /url: /fr-int/ways-to-trade/fees-and-charges#part_3
            - text: .
      - row "Commission de trading AUCUN FRAIS":
        - cell "Commission de trading":
          - paragraph:
            - strong: Commission de trading
        - cell "AUCUN FRAIS":
          - paragraph:
            - strong: AUCUN FRAIS
      - row "Frais overnight* Un ajustement d’intérêt appliqué lorsqu’une position est maintenue overnight. *Les positions CFD à effet de levier 1:1 (sans effet de levier) ne sont pas soumises aux frais de financement overnight, sauf sur un nombre limité de marchés. Les frais sont payés ou reçus en fonction de la direction de la position. Les frais pour chaque instrument sont indiqués dans le tableau des instruments ci-dessous.":
        - cell "Frais overnight* Un ajustement d’intérêt appliqué lorsqu’une position est maintenue overnight. *Les positions CFD à effet de levier 1:1 (sans effet de levier) ne sont pas soumises aux frais de financement overnight, sauf sur un nombre limité de marchés.":
          - paragraph:
            - strong: Frais overnight*
            - text: Un ajustement d’intérêt appliqué lorsqu’une position est maintenue overnight. *Les positions CFD à effet de levier 1:1 (sans effet de levier) ne sont pas soumises aux frais de financement overnight, sauf sur un nombre limité de marchés.
        - cell "Les frais sont payés ou reçus en fonction de la direction de la position. Les frais pour chaque instrument sont indiqués dans le tableau des instruments ci-dessous.":
          - paragraph: Les frais sont payés ou reçus en fonction de la direction de la position. Les frais pour chaque instrument sont indiqués dans le tableau des instruments ci-dessous.
      - row "Conversion de devises Des frais de conversion sont dus sur le marché libellé dans une devise différente de celle du compte de trading. Le même supplément de change est appliqué lors du transfert de fonds entre sous-comptes dans différentes devises. 0,7 % du taux spot forex pour les clients particuliers 0,5 % du taux spot forex pour les clients Pro":
        - cell "Conversion de devises Des frais de conversion sont dus sur le marché libellé dans une devise différente de celle du compte de trading. Le même supplément de change est appliqué lors du transfert de fonds entre sous-comptes dans différentes devises.":
          - paragraph:
            - strong: Conversion de devises
            - text: Des frais de conversion sont dus sur le marché libellé dans une devise différente de celle du compte de trading.
          - paragraph: Le même supplément de change est appliqué lors du transfert de fonds entre sous-comptes dans différentes devises.
        - cell "0,7 % du taux spot forex pour les clients particuliers 0,5 % du taux spot forex pour les clients Pro":
          - strong: 0,7 % du taux spot forex pour les clients particuliers 0,5 % du taux spot forex pour les clients Pro
      - row "Ordres stop-loss garantis (GSL)* Un GSL ferme une position au prix spécifié, éliminant ainsi le risque de slippage lors de l’exécution. Des frais s’appliquent en cas de déclenchement. En savoir plus Les frais GSL varient selon le marché, le prix d'entrée et la taille de la position. Les frais sont indiqués sur le ticket de transaction avant qu'une position ne soit ouverte.":
        - cell "Ordres stop-loss garantis (GSL)* Un GSL ferme une position au prix spécifié, éliminant ainsi le risque de slippage lors de l’exécution. Des frais s’appliquent en cas de déclenchement. En savoir plus":
          - paragraph:
            - strong: Ordres stop-loss garantis (GSL)*
            - text: Un GSL ferme une position au prix spécifié, éliminant ainsi le risque de slippage lors de l’exécution. Des frais s’appliquent en cas de déclenchement.
          - paragraph:
            - link "En savoir plus":
              - /url: /fr-int/ways-to-trade/fees-and-charges#part_5
        - cell "Les frais GSL varient selon le marché, le prix d'entrée et la taille de la position. Les frais sont indiqués sur le ticket de transaction avant qu'une position ne soit ouverte.":
          - paragraph: Les frais GSL varient selon le marché, le prix d'entrée et la taille de la position. Les frais sont indiqués sur le ticket de transaction avant qu'une position ne soit ouverte.
  - heading "Frais de spread et de financement overnight par instrument" [level=2]
  - button "Tout Tout Commodités Cryptomonnaies Forex Indices Actions Obligations Taux d'intérêt":
    - button "Tout":
      - textbox "name": Tout
    - button "Tout"
    - button "Commodités"
    - button "Cryptomonnaies"
    - button "Forex"
    - button "Indices"
    - button "Actions"
    - button "Obligations"
    - button "Taux d'intérêt"
  - button:
    - textbox "marketlist_search":
      - /placeholder: Search
  - separator
  - text: Nom Vendre Acheter Écart Frais de session nocturne pour une position longue Frais de session nocturne pour une position courte Garantie de stop premium
  - link "Gold Gold Spot 4010.04 4010.34 0.30 -0.01719% 0.00897% 0.03":
    - /url: /fr-int/markets/commodities/produit-de-base-gold-spot
  - link "US100 US Tech 100 29724.4 29726.2 1.8 -0.02148% -0.00074% 0.02":
    - /url: /fr-int/markets/indices/us-tech-100-index-1
  - link "BTC/USD Bitcoin to US Dollar 60076.55 60126.55 50.00 -0.06164% 0.01370% 0.25":
    - /url: /fr-int/markets/cryptocurrencies/graphique-de-bitcoin-to-us-dollar
  - link "XRP/USD Ripple to US Dollar 1.06031 1.06562 0.00531 -0.06164% 0.01370% 0.25":
    - /url: /fr-int/markets/cryptocurrencies/graphique-de-ripple-to-us-dollar
  - link "ETH/USD Ethereum to US Dollar 1614.51 1616.26 1.75 -0.06164% 0.01370% 0.25":
    - /url: /fr-int/markets/cryptocurrencies/graphique-de-ethereum-to-us-dollar
  - link "Oil - Crude US Crude Oil Spot 70.406 70.438 0.032 -0.01096% -0.01096% 0.03":
    - /url: /fr-int/markets/commodities/produit-de-base-us-crude-oil-spot-1
  - link "Silver Silver Spot 58.069 58.119 0.050 -0.01690% 0.00868% 0.03":
    - /url: /fr-int/markets/commodities/produit-de-base-silver-spot
  - text: Les cours des actions sont donnés à titre indicatif et peuvent différer des prix du marché en direct.
  - heading "Frais de spread" [level=2]
  - paragraph: Le spread est la différence entre le prix d'achat et le prix de vente d'un instrument. Le cours vendeur est toujours supérieur au cours acheteur, ce qui signifie que le marché doit évoluer au-delà du spread avant qu’une position ne devienne positive.
  - paragraph: Les spreads reflètent les conditions du marché sous-jacent, notamment l’offre, la demande et la liquidité. Sur les marchés les plus liquides, les spreads ont tendance à être plus serrés.
  - heading "Exemple de spread sur CFD" [level=3]
  - list:
    - listitem: • 1 contrat est détenu sur le US Tech 100, coté à 12475/76.
    - listitem: • Le spread est de 1 point.
    - listitem: • La moitié du spread est payée à l’ouverture et l’autre moitié à la clôture. Le coût total du spread est de 1 £ x 1 point = 1 £.
  - heading "Frais de financement overnight" [level=2]
  - paragraph: Lorsqu’une position est maintenue overnight, un ajustement d’intérêt s’applique. Que ce montant soit payé ou reçu dépend de la direction de la position et du taux sous-jacent. Le calcul est basé sur des taux définis et des facteurs de marché, décrits dans les exemples ci-dessous.
  - paragraph: "Pour la plupart des marchés, une position CFD à effet de levier 1:1 (sans effet de levier) ne génère pas de frais de financement overnight. Les instruments suivants font exception, pour lesquels le financement overnight s’applique quel que soit l’effet de levier :"
  - list:
    - listitem: • Gaz Naturel
    - listitem: • Cacao US
    - listitem: • Indice de Volatilité (VIX)
    - listitem: • Paires Forex avec la Lira turque (TRY)
  - button "Indices"
  - button "Matières premières"
  - button "Forex"
  - button "Actions"
  - button "Crypto"
  - button "Obligations/taux d'intérêt"
  - heading "Formule" [level=3]
  - paragraph: Nos frais journaliers +/- Taux d’intérêt de référence
  - paragraph: Le benchmark* suit la devise du marché sous-jacent. Les indices libellés en USD utilisent le SOFR. Les indices libellés en GBP utilisent le SONIA.
  - paragraph: "Nos frais journaliers sont de 4 % par an. Le taux annuel est divisé par 360 ou 365 jours selon la convention de la devise :"
  - paragraph: "GBP, CAD, SGD et devises similaires : 4 % / 365 = 0,01096 % par jour USD, EUR, CHF, JPY et devises similaires : 4 % / 360 = 0,01111 % par jour"
  - paragraph: Le diviseur correspond au calcul du nombre de jours standard appliqué sur le marché de chaque devise.
  - paragraph: "*Le taux d’intérêt de référence pertinent inclut déjà un ajustement du spread sous-jacent. Cela se reflète dans le taux publié (par exemple, SOFR ou SONIA)."
  - heading "Exemple pour les CFD" [level=3]
  - list:
    - listitem: • 0,6 contrat sont détenus sur le US Tech 100, à un prix de 20 140. L’exposition totale est de 12 084 $.
    - listitem: • Le US Tech 100 est libellé en USD. Le taux de référence pertinent est le SOFR, supposé ici à 5,01448 % par an, soit 0,01393 % par jour.
    - listitem: • Les frais journaliers de la plateforme sont de 0,01111 %.
    - listitem: "• Pour une position acheteuse (long) : 0,02504 % (SOFR + frais plateforme) = 3,03 $ payés."
    - listitem: "• Pour une position vendeuse (short) : 0,00282 % (SOFR − frais plateforme) = 0,34 $ reçus."
  - heading "Frais de stop-loss garanti" [level=2]
  - paragraph: Un ordre stop-loss standard ferme une position à un niveau spécifié. Il n’est pas garanti de s’exécuter exactement à ce prix — en cas de gap de marché, l’exécution peut avoir lieu au prochain prix disponible. Le slippage peut se produire dans des conditions de forte volatilité ou de faible liquidité.
  - paragraph: Un ordre stop-loss garanti (GSL) ferme une position exactement au prix spécifié, quel que soit le slippage ou les gaps de marché. Des frais — la prime GSL — s’appliquent si l’ordre est déclenché.
  - paragraph: "Les frais GSL sont calculés à partir de trois éléments : la prime de stop garanti (pourcentage), le prix d’ouverture de la position et la quantité."
  - strong: Frais GSL = prime GSL × prix d’ouverture de la position × quantité
  - paragraph: Les frais GSL applicables sont affichés dans le ticket d’ordre lorsqu’un GSL est sélectionné.
  - heading "Frais de conversion de devises" [level=2]
  - paragraph: S’applique lorsqu’une transaction est libellée dans une devise différente de la devise de base du compte. Ces frais sont intégrés au taux de change utilisé pour la conversion — ils ne sont pas facturés séparément. Les clients paient un supplément de 0,7 %.
  - paragraph: "S’applique à :"
  - list:
    - listitem: • Profit et perte réalisés
    - listitem: • Les ajustements de financement overnight
    - listitem: • Frais d’ordre stop-loss garanti
    - listitem: • Dividendes
    - listitem: • Conversions de devises autonomes (conversions manuelles du solde du compte)
  - heading "Exemple — clôture d’un trade" [level=3]
  - list:
    - listitem: "• Devise du compte : USD. Trade sur action européenne clôturé avec un profit de 10,00 €."
    - listitem: "• Au taux spot (1,1300) : 11,30 $."
    - listitem: "• Au taux tout compris incluant les frais de 0,7 % (1,1221) : 11,22 $."
    - listitem: "• Frais de conversion : 0,08 $."
  - heading "Exemple — ajustement de financement overnight" [level=3]
  - list:
    - listitem: • Position sur action européenne. Ajustement de financement overnight de -4,00 € appliqué en EUR.
    - listitem: "• Au taux spot (1,1300) : 4,52 $."
    - listitem: "• Au taux tout compris incluant les frais de 0,7 % (1,1379) : 4,55 $."
    - listitem: "• Frais de conversion : 0,03 $."
  - paragraph: Le taux de change tout compris utilisé pour chaque conversion est visible dans la section Rapports ainsi qu’au moment de la clôture d’une position.
  - heading "En savoir plus sur nos tarifs" [level=2]
  - heading "Comprendre les tarifs de Capital.com" [level=3]
  - paragraph: Un détail complet de tous les frais qui s’appliquent lorsque vous tradez chez nous.
  - link "En savoir plus":
    - /url: /fr-int/ways-to-trade/pricing
- complementary:
  - navigation:
    - strong: Sommaire
    - separator
    - link "Frais de compte":
      - /url: "#part_0"
    - link "Frais de dépôt et de retrait":
      - /url: "#part_1"
    - link "Frais de trading":
      - /url: "#part_2"
    - link "Frais de spread":
      - /url: "#part_3"
    - link "Frais de financement overnight":
      - /url: "#part_4"
    - link "Frais de stop-loss garanti":
      - /url: "#part_5"
    - link "Frais de conversion de devises":
      - /url: "#part_6"
- contentinfo:
  - link:
    - /url: /fr-int
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
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=ba668345-aba9-47c5-aa4b-eaaa25708b52&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=ba668345-aba9-47c5-aa4b-eaaa25708b52&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=ba668345-aba9-47c5-aa4b-eaaa25708b52&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "Pays / Région:"
  - button "Côte d'Ivoire"
  - text: "• Langue:"
  - button "French"
  - text: "Vous pouvez également nous contacter :"
  - link "+442080899989":
    - /url: tel:+442080899989
    - strong: "+442080899989"
    - strong
  - text: •
  - link "support@capital.com":
    - /url: mailto:support@capital.com
    - strong: support@capital.com
  - strong: Trading
  - text: Trading
  - link "Trading de CFD":
    - /url: /fr-int/ways-to-trade/cfd-trading
  - link "Calculateur de trading CFD":
    - /url: /fr-int/ways-to-trade/cfd-trading/cfd-calculator
  - link "Trading démo":
    - /url: /fr-int/trading-platforms/demo-account
  - link "Professionnel":
    - /url: /fr-int/professional
  - link "Remises pour tous les traders":
    - /url: /fr-int/ways-to-trade/rebates
  - text: Plateformes
  - link "Plateforme web":
    - /url: /fr-int/trading-platforms/web-platform
  - link "Applications mobiles":
    - /url: /fr-int/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /fr-int/trading-platforms/trading-view
  - link "MT4":
    - /url: /fr-int/trading-platforms/mt4
  - text: Apprendre
  - link "Stratégies de trading":
    - /url: /fr-int/learn/trading-strategies
  - link "Analyse technique":
    - /url: /fr-int/learn/technical-analysis
  - link "La psychologie du trading":
    - /url: /fr-int/learn/trading-psychology
  - link "Apprendre":
    - /url: /fr-int/learn
  - link "Trading d’IPO":
    - /url: /fr-int/learn/ipo
  - strong: Marchés
  - text: Nos marchés
  - link "Les marchés":
    - /url: /fr-int/markets
  - link "Actions":
    - /url: /fr-int/markets/shares
  - link "Forex":
    - /url: /fr-int/markets/forex
  - link "Indices":
    - /url: /fr-int/markets/indices
  - link "Matières premières":
    - /url: /fr-int/markets/commodities
  - link "Cryptomonnaies":
    - /url: /fr-int/markets/cryptocurrencies
  - link "Obligations":
    - /url: /fr-int/markets/bonds
  - link "Taux d’intérêt":
    - /url: /fr-int/markets/interest-rates
  - text: Aperçus du marché
  - link "Analyse du marché":
    - /url: /fr-int/analysis
  - link "Tarification":
    - /url: /fr-int/ways-to-trade/fees-and-charges
    - strong: Tarification
  - strong: À propos de nous
  - text: Qui nous sommes
  - link "À propos":
    - /url: /fr-int/about-us
  - link "Viktor Prokopenya":
    - /url: /fr-int/about-us/viktor-prokopenya
  - link "Nos bureaux":
    - /url: /fr-int/about-us/our-offices
  - link "Capital.com est-il sûr ?":
    - /url: /fr-int/security-measures
  - link "Notre modèle économique":
    - /url: /fr-int/about-us/how-capital-makes-money
  - text: Travaillez avec nous
  - link "Programmes de partenariat":
    - /url: /fr-int/partnerships
  - link "Parrainez un(e) ami(e)":
    - /url: /fr-int/refer-a-friend
  - text: Aide
  - link "Aide":
    - /url: /fr-int/help
  - link "Vulnérabilité du client":
    - /url: /fr-int/help/client-vulnerability
  - link "Nous contacter":
    - /url: /fr-int/contact-us
  - text: Mentions légales
  - link "Conditions générales et politiques":
    - /url: /fr-int/terms-and-policies
  - link "Réclamations":
    - /url: /fr-int/help/complaints
  - paragraph:
    - text: Les CFD sont des instruments complexes et présentent un risque élevé de perte rapide en raison de l\'effet de levier.
    - strong: 78.48 % des comptes d’investisseurs particuliers perdent de l’argent en tradant des CFD avec ce fournisseur.
    - text: Vous devez vous demander si vous comprenez le fonctionnement des CFD et si vous pouvez vous permettre de prendre le risque élevé de perdre votre argent.
  - paragraph
  - paragraph: "Capital Com Online Investments Ltd est une société à responsabilité limitée portant le numéro d\\'enregistrement 209236B. Capital Com Online Investments Ltd est une société enregistrée dans le Commonwealth des Bahamas et autorisée par la Commission des valeurs mobilières des Bahamas sous le numéro de licence SIA-F245. Le bureau enregistré de la société se situe au #3 Bayside Executive Park, Blake Road et West Bay Street, P. O. Box CB 13012, Nassau, Bahamas."
  - paragraph: © 2026 Capital Com Online Investments Ltd
  - link "Plan du site":
    - /url: /fr-int/sitemap
  - link "Paramètres des cookies":
    - /url: ""
  - link:
    - /url: /fr-int
  - link "Conditions Générales et Politiques":
    - /url: /fr-int/terms-and-policies
  - link "Procédure de réclamations (SCB)":
    - /url: /fr-int/help/complaints
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