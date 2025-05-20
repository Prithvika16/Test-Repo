# Test info

- Name: Test 11 - bing.com
- Location: C:\PlaywrightDemo\tests\PracticeTests\Practice exercises\practice.spec.js:103:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected string: "http://www.bing.com/"
Received string: "https://www.bing.com/"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    7 × locator resolved to <html lang="en" dir="ltr">…</html>
      - unexpected value "https://www.bing.com/"

    at C:\PlaywrightDemo\tests\PracticeTests\Practice exercises\practice.spec.js:109:24
```

# Page snapshot

```yaml
- main:
  - heading "Microsoft Logo Image" [level=1]:
    - img "Microsoft Logo Image"
  - navigation:
    - menubar:
      - menuitem "Search":
        - link "Search":
          - /url: /copilotsearch?FORM=HPCSSC
      - menuitem "Images":
        - link "Images":
          - /url: /images?FORM=Z9LH
      - menuitem "Videos":
        - link "Videos":
          - /url: /videos?FORM=Z9LH1
      - menuitem "Shopping":
        - link "Shopping":
          - /url: /shop?FORM=Z9LHS4
      - menuitem "Maps":
        - link "Maps":
          - /url: /maps?FORM=Z9LH2
      - menuitem "News":
        - link "News":
          - /url: /news/search?q=Top+stories&nvaug=%5bNewsVertical+Category%3d%22rt_MaxClass%22%5d&FORM=Z9LH3
      - menuitem ". . . More":
        - text: . . .
        - tooltip "More"
  - complementary "Account Rewards and Preferences":
    - link "Sign in":
      - /url: javascript:void(0)
    - button "Microsoft Rewards":
      - text: Rewards
      - img
      - img
      - img
    - button "Mobile":
      - text: Mobile
      - img
    - button "Settings and quick links"
  - search:
    - textbox "0 characters out of 2000"
    - button "Search using voice":
      - img
      - text: Search using voice
    - button "Search using an image"
    - group "Languages:":
      - text: "Languages:"
      - link "Hindi":
        - /url: /?setlang=hi&cc=in&cc=IN
        - text: हिंदी
      - link "Bangla":
        - /url: /?setlang=bn&cc=in&cc=IN
        - text: বাংলা
      - link "Urdu":
        - /url: /?setlang=ur&cc=in&cc=IN
        - text: اردو
      - link "Punjabi (Gurmukhi)":
        - /url: /?setlang=pa-guru&cc=in&cc=IN
        - text: ਪੰਜਾਬੀ
      - link "Marathi":
        - /url: /?setlang=mr&cc=in&cc=IN
        - text: मराठी
      - link "Telugu":
        - /url: /?setlang=te&cc=in&cc=IN
        - text: తెలుగు
      - link "Tamil":
        - /url: /?setlang=ta&cc=in&cc=IN
        - text: தமிழ்
      - link "Kannada":
        - /url: /?setlang=kn&cc=in&cc=IN
        - text: ಕನ್ನಡ
      - link "Gujarati":
        - /url: /?setlang=gu&cc=in&cc=IN
        - text: ગુજરાતી
      - link "Malayalam":
        - /url: /?setlang=ml&cc=in&cc=IN
        - text: മലയാളം
      - link "Odia":
        - /url: /?setlang=or&cc=in&cc=IN
        - text: ଓଡ଼ିଆ
- dialog:
  - group "Today, we celebrate bees. Which statement about these insects is true?":
    - text: Bing homepage quiz Today, we celebrate bees. Which statement about these insects is true?
    - list:
      - listitem:
        - 'link "Answer: A, Only female bees can sting"':
          - /url: /search?q=Honey+Bee&filters=IsConversation%3A%22True%22+btrequestsource%3A%22homepage%22+WQOskey%3A%22HPQuiz_20250520_HoneyBeeLavender%22+WQId%3A%221%22+WQQI%3A%220%22+WQCI%3A%220%22+UserChoices%3A%220%22+ShowTimesTaskPaneTrigger%3A%22false%22+WQSCORE%3A%221%22&FORM=HPQUIZ
          - text: A Only female bees can sting
      - listitem:
        - 'link "Answer: B, All bees produce honey"':
          - /url: /search?q=Honey+Bee&filters=IsConversation%3A%22True%22+btrequestsource%3A%22homepage%22+WQOskey%3A%22HPQuiz_20250520_HoneyBeeLavender%22+WQId%3A%221%22+WQQI%3A%220%22+WQCI%3A%221%22+UserChoices%3A%221%22+ShowTimesTaskPaneTrigger%3A%22false%22+WQSCORE%3A%220%22&FORM=HPQUIZ
          - text: B All bees produce honey
      - listitem:
        - 'link "Answer: C, Bees have four legs"':
          - /url: /search?q=Honey+Bee&filters=IsConversation%3A%22True%22+btrequestsource%3A%22homepage%22+WQOskey%3A%22HPQuiz_20250520_HoneyBeeLavender%22+WQId%3A%221%22+WQQI%3A%220%22+WQCI%3A%222%22+UserChoices%3A%222%22+ShowTimesTaskPaneTrigger%3A%22false%22+WQSCORE%3A%220%22&FORM=HPQUIZ
          - text: C Bees have four legs
- link "Get the new Bing Wallpaper app":
  - /url: https://go.microsoft.com/fwlink/?linkid=2127455
- 'heading "Image of the day: Honey bee on lavender flowers" [level=3]':
  - 'link "Image of the day: Honey bee on lavender flowers"':
    - /url: /search?q=World+Bee+Day&form=hpcapt&filters=HpDate:"20250519_1830"
    - text: Honey bee on lavender flowers
- text: © Anthony Brown/Alamy Stock Photo
- list:
  - listitem:
    - button "Download this image. Use of this image is restricted to wallpaper only."
- link "Small wings, big job":
  - /url: /search?q=World+Bee+Day&form=hpcapt&filters=HpDate:"20250519_1830"
  - heading "Small wings, big job" [level=2]
- button "Previous image"
- button "Next image" [disabled]
- button "Feedback":
  - img
  - text: Feedback
- region "Trending on Bing":
  - button "The taskbar was expanded. Press to collapse taskbar" [expanded]
  - button "Previous news" [disabled]
  - button "More news"
  - list:
    - listitem:
      - list:
        - listitem:
          - link "5 Lord Narasimha Temples in South India Where Miracles Still Happen © Timeslife":
            - /url: /search?q=5+Lord+Narasimha+Temples+in+South+India+Where+Miracles+Still+Happen&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_C40618F0B40423E948A2D3D9BD6612F7%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%220%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - heading "5 Lord Narasimha Temples in South India Where Miracles Still Happen" [level=2]
            - img "© Timeslife"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/5-lord-narasimha-temples-in-south-india-where-miracles-still-happen/ar-AA1F4d0a?ocid=TobArticle
              - img
        - listitem:
          - 'link "From Jyoti Malhotra to Devender Singh: 11 ''Pak spies'' caught in India over 3 days © India Today"':
            - /url: /search?q=From+Jyoti+Malhotra+to+Devender+Singh%3a+11+%27Pak+spies%27+caught+in+India+over+3+days&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_110FD801D62D0E0B923C22BF078A3DBC%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%221%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - 'heading "From Jyoti Malhotra to Devender Singh: 11 ''Pak spies'' caught in India over 3 days" [level=2]'
            - img "© India Today"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/from-jyoti-malhotra-to-devender-singh-11-pak-spies-caught-in-india-over-3-days/ar-AA1F3KoS?ocid=TobArticle
              - img
        - listitem:
          - link "Bigg Boss Star Shilpa Shirodkar Tests COVID Positive — Early Signs You Need To Watch Out For © Times Now":
            - /url: /search?q=Bigg+Boss+Star+Shilpa+Shirodkar+Tests+COVID+Positive+%e2%80%94+Early+Signs+You+Need+To+Watch+Out+For&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_2F65CCDCB4084E8ACB8DF22033581B66%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%222%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - heading "Bigg Boss Star Shilpa Shirodkar Tests COVID Positive — Early Signs You Need To Watch Out For" [level=2]
            - img "© Times Now"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/health/health-news/bigg-boss-star-shilpa-shirodkar-tests-covid-positive-early-signs-you-need-to-watch-out-for/ar-AA1F39jw?ocid=TobArticle
              - img
        - listitem:
          - 'link "Bengal Weather: Thunderstorm, Heavy Rain To Lash Cooch Behar, Darjeeling In Next Few Days; Kolkata To See Showers From May 21 | Forecast © Jagran English"':
            - /url: /search?q=Bengal+Weather%3a+Thunderstorm%2c+Heavy+Rain+To+Lash+Cooch+Behar%2c+Darjeeling+In+Next+Few+Days%3b+Kolkata+To+See+Showers+From+May+21+%7c+Forecast&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_33F8E1487EABADF5C49F171B2F78B2C7%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%223%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - 'heading "Bengal Weather: Thunderstorm, Heavy Rain To Lash Cooch Behar, Darjeeling In Next Few Days; Kolkata To See Showers From May 21 | Forecast" [level=2]'
            - img "© Jagran English"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/bengal-weather-thunderstorm-heavy-rain-to-lash-cooch-behar-darjeeling-in-next-few-days-kolkata-to-see-showers-from-may-21-forecast/ar-AA1F3vZL?ocid=TobArticle
              - img
        - listitem:
          - 'link "LSG vs SRH: Eshan Malinga''s stunning catch compounds Rishabh Pant''s horror show © India Today"':
            - /url: /search?q=LSG+vs+SRH%3a+Eshan+Malinga%27s+stunning+catch+compounds+Rishabh+Pant%27s+horror+show&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_29DFF2ABE7F7773F9701751C7230BEA1%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%224%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - 'heading "LSG vs SRH: Eshan Malinga''s stunning catch compounds Rishabh Pant''s horror show" [level=2]'
            - img "© India Today"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/sports/cricket/lsg-vs-srh-eshan-malinga-s-stunning-catch-compounds-rishabh-pant-s-horror-show/ar-AA1F4r39?ocid=TobArticle
              - img
        - listitem:
          - 'link "Breaking: Supreme Court Begins Hearing on Waqf Law, Debate Over Scope of Interim Relief | ABP NEWS © ABP - Live"':
            - /url: /search?q=Breaking%3a+Supreme+Court+Begins+Hearing+on+Waqf+Law%2c+Debate+Over+Scope+of+Interim+Relief+%7c+ABP+NEWS&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_554B77170BE94C3C0B7E014C74599B1C%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%225%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - 'heading "Breaking: Supreme Court Begins Hearing on Waqf Law, Debate Over Scope of Interim Relief | ABP NEWS" [level=2]'
            - img "© ABP - Live"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/breaking-supreme-court-begins-hearing-on-waqf-law-debate-over-scope-of-interim-relief-abp-news/vi-AA1F6GPh?ocid=TobArticle
              - img
        - listitem:
          - 'link "Sensex down over 500 points: Why is stock market falling? © India Today"':
            - /url: /search?q=Sensex+down+over+500+points%3a+Why+is+stock+market+falling%3f&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_0E01D429C01CCE845177258965892153%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%226%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - 'heading "Sensex down over 500 points: Why is stock market falling?" [level=2]'
            - img "© India Today"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/money/markets/sensex-down-over-500-points-why-is-stock-market-falling/ar-AA1F6QLt?ocid=TobArticle
              - img
        - listitem:
          - 'link "''Pakistan army commander was hiding in mosque ...'': Army officials recall intercepted call from PoK amid Op Sindoor strikes © Moneycontrol"':
            - /url: /search?q=%27Pakistan+army+commander+was+hiding+in+mosque+...%27%3a+Army+officials+recall+intercepted+call+from+PoK+amid+Op+Sindoor+strikes&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_5666B4F02D2CA01B8762A5BF77EABFA3%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%227%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - 'heading "''Pakistan army commander was hiding in mosque ...'': Army officials recall intercepted call from PoK amid Op Sindoor strikes" [level=2]'
            - img "© Moneycontrol"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/pakistan-army-commander-was-hiding-in-mosque-army-officials-recall-intercepted-call-from-pok-amid-op-sindoor-strikes/ar-AA1F76iL?ocid=TobArticle
              - img
        - listitem:
          - link "India Logs 164 New Covid-19 Cases In A Week; Govt Reviews Situation As New Wave Hits Asia © News18":
            - /url: /search?q=India+Logs+164+New+Covid-19+Cases+In+A+Week%3b+Govt+Reviews+Situation+As+New+Wave+Hits+Asia&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_32AFE41C4906951ED150412D3CF9B020%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%228%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - heading "India Logs 164 New Covid-19 Cases In A Week; Govt Reviews Situation As New Wave Hits Asia" [level=2]
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/health/health-news/india-logs-164-new-covid-19-cases-in-a-week-govt-reviews-situation-as-new-wave-hits-asia/ar-AA1F5Qv6?ocid=TobArticle
              - img
        - listitem:
          - 'link "When the Cast Changed: How Bollywood’s biggest franchises witnessed surprising actor exits and replacements © The Times of India"':
            - /url: /search?q=When+the+Cast+Changed%3a+How+Bollywood%e2%80%99s+biggest+franchises+witnessed+surprising+actor+exits+and+replacements&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_CD17A4A3FD27ABB8B5C491340C745D23%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%229%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - 'heading "When the Cast Changed: How Bollywood’s biggest franchises witnessed surprising actor exits and replacements" [level=2]'
            - img "© The Times of India"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/entertainment/bollywood/when-the-cast-changed-how-bollywood-s-biggest-franchises-witnessed-surprising-actor-exits-and-replacements/ar-AA1F6eu4?ocid=TobArticle
              - img
        - listitem:
          - 'link "‘Courts cannot interfere unless glaring case made out’: CJI Gavai''s remark on Waqf Act © Hindustan Times"':
            - /url: /search?q=%e2%80%98Courts+cannot+interfere+unless+glaring+case+made+out%e2%80%99%3a+CJI+Gavai%27s+remark+on+Waqf+Act&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_A9EA4B40118B99070CC2149606EF8500%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2210%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - 'heading "‘Courts cannot interfere unless glaring case made out’: CJI Gavai''s remark on Waqf Act" [level=2]'
            - img "© Hindustan Times"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/courts-cannot-interfere-unless-glaring-case-made-out-cji-gavai-s-remark-on-waqf-act/ar-AA1F7iXK?ocid=TobArticle
              - img
        - listitem:
          - link "Mamata Banerjee names Abhishek Banerjee to represent AITC in all-party delegation © The Economic Times":
            - /url: /search?q=Mamata+Banerjee+names+Abhishek+Banerjee+to+represent+AITC+in+all-party+delegation&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_57E5043F1DB55E788F2B2EEAEA57DEA3%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2211%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - heading "Mamata Banerjee names Abhishek Banerjee to represent AITC in all-party delegation" [level=2]
            - img "© The Economic Times"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/mamata-banerjee-names-abhishek-banerjee-to-represent-aitc-in-all-party-delegation/ar-AA1F6P4A?ocid=TobArticle
              - img
        - listitem:
          - 'link "The pressure of a price tag: How difficult was it for Rishabh Pant and Venkatesh Iyer? © Moneycontrol"':
            - /url: /search?q=The+pressure+of+a+price+tag%3a+How+difficult+was+it+for+Rishabh+Pant+and+Venkatesh+Iyer%3f&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_D1A9F76DF63C5484150CDAB95D1484F1%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2212%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - 'heading "The pressure of a price tag: How difficult was it for Rishabh Pant and Venkatesh Iyer?" [level=2]'
            - img "© Moneycontrol"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/money/topstories/the-pressure-of-a-price-tag-how-difficult-was-it-for-rishabh-pant-and-venkatesh-iyer/ar-AA1F6jrZ?ocid=TobArticle
              - img
        - listitem:
          - 'link "Watch: Rohit Sharma Hands Over His Lamborghini Urus To Dream11 Contest Winner © News18"':
            - /url: /search?q=Watch%3a+Rohit+Sharma+Hands+Over+His+Lamborghini+Urus+To+Dream11+Contest+Winner&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_788BD7267B0B25B12F4E5A84CAB79DA9%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2213%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - 'heading "Watch: Rohit Sharma Hands Over His Lamborghini Urus To Dream11 Contest Winner" [level=2]'
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/autos/news/watch-rohit-sharma-hands-over-his-lamborghini-urus-to-dream11-contest-winner/ar-AA1F6IFY?ocid=TobArticle
              - img
        - listitem:
          - link "Russia Unveils First AI-Powered Sukhoi Su-57M Fighter Jet. Here's How India Benefits © News18":
            - /url: /search?q=Russia+Unveils+First+AI-Powered+Sukhoi+Su-57M+Fighter+Jet.+Here%27s+How+India+Benefits&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_D6825DF8776C94B9B34F33ECE6024393%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2214%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - heading "Russia Unveils First AI-Powered Sukhoi Su-57M Fighter Jet. Here's How India Benefits" [level=2]
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/russia-unveils-first-ai-powered-sukhoi-su-57m-fighter-jet-here-s-how-india-benefits/ar-AA1F6RyK?ocid=TobArticle
              - img
        - listitem:
          - link "How can Mumbai Indians and Delhi Capitals qualify for IPL 2025 Playoffs? Full scenarios explained © Live Mint":
            - /url: /search?q=How+can+Mumbai+Indians+and+Delhi+Capitals+qualify+for+IPL+2025+Playoffs%3f+Full+scenarios+explained&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_7CCE13C15BADF76F686897C7806E51BE%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2215%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - heading "How can Mumbai Indians and Delhi Capitals qualify for IPL 2025 Playoffs? Full scenarios explained" [level=2]
            - img "© Live Mint"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/sports/cricket/how-can-mumbai-indians-and-delhi-capitals-qualify-for-ipl-2025-playoffs-full-scenarios-explained/ar-AA1F5WPd?ocid=TobArticle
              - img
        - listitem:
          - link "Mumbai Indians announce 3 replacements for IPL 2025 playoffs, rope in ex-PBKS opener, ex-CSK pacer and Sri Lankan captain © Sports Tak":
            - /url: /search?q=Mumbai+Indians+announce+3+replacements+for+IPL+2025+playoffs%2c+rope+in+ex-PBKS+opener%2c+ex-CSK+pacer+and+Sri+Lankan+captain&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_F6343AB61CD25F029DB9C824F2CD2BE6%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2216%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - heading "Mumbai Indians announce 3 replacements for IPL 2025 playoffs, rope in ex-PBKS opener, ex-CSK pacer and Sri Lankan captain" [level=2]
            - img "© Sports Tak"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/sports/cricket/mumbai-indians-announce-3-replacements-for-ipl-2025-playoffs-rope-in-ex-pbks-opener-ex-csk-pacer-and-sri-lankan-captain/ar-AA1F6oT3?ocid=TobArticle
              - img
        - listitem:
          - link "Why It's Difficult For India To Recognise Balochistan As A Separate Country | Explained © News18":
            - /url: /search?q=Why+It%27s+Difficult+For+India+To+Recognise+Balochistan+As+A+Separate+Country+%7c+Explained&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_94876A012B268815C278A5930F255520%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2217%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - heading "Why It's Difficult For India To Recognise Balochistan As A Separate Country | Explained" [level=2]
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/why-it-s-difficult-for-india-to-recognise-balochistan-as-a-separate-country-explained/ar-AA1F6PyY?ocid=TobArticle
              - img
        - listitem:
          - 'link "IPL Points Table 2025: Updated standing after Lucknow Super Giants vs Sunrisers Hyderabad © Moneycontrol"':
            - /url: /search?q=IPL+Points+Table+2025%3a+Updated+standing+after+Lucknow+Super+Giants+vs+Sunrisers+Hyderabad&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_F18972E001C9816EC0F6A03AA3AE08AE%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2218%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - 'heading "IPL Points Table 2025: Updated standing after Lucknow Super Giants vs Sunrisers Hyderabad" [level=2]'
            - img "© Moneycontrol"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/sports/cricket/ipl-points-table-2025-updated-standing-after-lucknow-super-giants-vs-sunrisers-hyderabad/ar-AA1F5GqL?ocid=TobArticle
              - img
        - listitem:
          - 'link "Akshay Kumar to sue Paresh Rawal for Rs 25 crore for walking out of ‘Hera Pheri 3’: Report © The Times of India"':
            - /url: /search?q=Akshay+Kumar+to+sue+Paresh+Rawal+for+Rs+25+crore+for+walking+out+of+%e2%80%98Hera+Pheri+3%e2%80%99%3a+Report&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_4FD2D1C1C778AE8D1E77F32E6A4DDEF1%22+tnVersion%3a%229c0f03c5-a6df-4108-ac78-b6b487d24bb9%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2219%22+tnOrder%3a%22d24d9975-40bd-4e6e-80bc-3f269b0847db%22&form=HPNN01
            - 'heading "Akshay Kumar to sue Paresh Rawal for Rs 25 crore for walking out of ‘Hera Pheri 3’: Report" [level=2]'
            - img "© The Times of India"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/entertainment/bollywood/akshay-kumar-to-sue-paresh-rawal-for-rs-25-crore-for-walking-out-of-hera-pheri-3-report/ar-AA1F6Bmi?ocid=TobArticle
              - img
- complementary:
  - text: DISCOVER
  - main:
    - tablist:
      - tab [selected]
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
      - tab
    - article "Tamil Actor Vishal To Marry Sai Dhanshika On August 29; Know All About The 'Bride'":
      - text: News18 16h
      - link "Tamil Actor Vishal To Marry Sai Dhanshika On August 29; Know All About The 'Bride'":
        - /url: https://www.msn.com/en-in/entertainment/other/tamil-actor-vishal-to-marry-sai-dhanshika-on-august-29-know-all-about-the-bride/ar-AA1F4ZfJ
      - button "289 Like":
        - img
        - text: "289"
      - button "Dislike":
        - img
      - link "View comments 4 Comment":
        - /url: https://www.msn.com/en-in/entertainment/other/tamil-actor-vishal-to-marry-sai-dhanshika-on-august-29-know-all-about-the-bride/ar-AA1F4ZfJ#comments
        - button "View comments 4 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - 'article "COVID-19 Surge: How Many Active Cases Are There in India? 5 Things We Know About the Spike"':
      - text: Times Now 8h
      - 'link "COVID-19 Surge: How Many Active Cases Are There in India? 5 Things We Know About the Spike"':
        - /url: https://www.msn.com/en-in/health/health-news/covid-19-surge-how-many-active-cases-are-there-in-india-5-things-we-know-about-the-spike/ar-AA1F5ZID
      - button "90 Like":
        - img
        - text: "90"
      - button "Dislike":
        - img
      - link "View comments 1 Comment":
        - /url: https://www.msn.com/en-in/health/health-news/covid-19-surge-how-many-active-cases-are-there-in-india-5-things-we-know-about-the-spike/ar-AA1F5ZID#comments
        - button "View comments 1 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - article:
      - img "Watchlist suggestions"
      - link "Watchlist suggestions":
        - /url: https://www.msn.com/en-in/money/watchlist?ocid=BingHp01
        - heading "Watchlist suggestions" [level=2]
      - button "More options"
      - link "Nifty MidCap NIFTY Midcap 100 Dropping fast ‎-1.62%‎ 56,182.65":
        - /url: https://www.msn.com/en-in/money/watchlist?id=ahktar&noti=Price&ocid=BingHp01
        - text: Nifty MidCap
        - img "NIFTY Midcap 100"
        - text: Dropping fast ‎-1.62%‎ 56,182.65
        - button "Add to watchlist":
          - img
      - link "Tata Motors Ltd TATAMOTORS ‎-1.45%‎ 718.90":
        - /url: https://www.msn.com/en-in/money/watchlist?id=ahk9xm&ocid=BingHp01
        - text: Tata Motors Ltd TATAMOTORS ‎-1.45%‎ 718.90
        - button "Add to watchlist":
          - img
      - link "Reliance Industries Ltd RELIANCE ‎-1.12%‎ 1,424.60":
        - /url: https://www.msn.com/en-in/money/watchlist?id=ahjo52&ocid=BingHp01
        - text: Reliance Industries Ltd RELIANCE ‎-1.12%‎ 1,424.60
        - button "Add to watchlist":
          - img
      - link "Yes Bank Ltd Yes Bank Ltd Dropping fast ‎-1.79%‎ 20.82":
        - /url: https://www.msn.com/en-in/money/watchlist?id=ahkpar&noti=Price&ocid=BingHp01
        - text: Yes Bank Ltd
        - img "Yes Bank Ltd"
        - text: Dropping fast ‎-1.79%‎ 20.82
        - button "Add to watchlist":
          - img
      - link "Adani Power Ltd ADANIPOWER ‎-1.08%‎ 556.20":
        - /url: https://www.msn.com/en-in/money/watchlist?id=ahgr9c&ocid=BingHp01
        - text: Adani Power Ltd ADANIPOWER ‎-1.08%‎ 556.20
        - button "Add to watchlist":
          - img
      - tablist:
        - tab "tab-0" [selected]
        - tab "tab-1"
        - tab "tab-2"
        - tab "tab-3"
      - link "See watchlist suggestions":
        - /url: https://www.msn.com/en-in/money/watchlist?ocid=BingHp01
    - article:
      - link "Top stories":
        - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=bbde0731f3cc40e1db634e678efefca0&ocid=BingHp01
        - heading "Top stories" [level=2]
      - button "More options"
      - link "The Times of India 1h Centre urges SC to confine waqf hearing to three issues, Sibal-Singhvi oppose 'piecemeal hearing'":
        - /url: https://www.msn.com/en-in/news/other/centre-urges-sc-to-confine-waqf-hearing-to-three-issues-sibal-singhvi-oppose-piecemeal-hearing/ar-AA1F7vD0
      - 'link "NDTV 24x7 2h Yusuf Pathan Out, Abhishek Banerjee In: Trinamool Switch In India Outreach"':
        - /url: https://www.msn.com/en-in/news/india/yusuf-pathan-out-abhishek-banerjee-in-trinamool-switch-in-india-outreach/ar-AA1F6M00
      - 'link "Hindustan Times 1h ‘We weren’t watchful'': Jyoti Malhotra''s video on Pahalgam terror attack resurfaces post arrest over spying for Pakistan"':
        - /url: https://www.msn.com/en-in/news/india/we-weren-t-watchful-jyoti-malhotra-s-video-on-pahalgam-terror-attack-resurfaces-post-arrest-over-spying-for-pakistan/ar-AA1F7sVy
      - tablist:
        - tab "tab-0" [selected]
        - tab "tab-1"
        - tab "tab-2"
      - link "See more":
        - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=bbde0731f3cc40e1db634e678efefca0&ocid=BingHp01
    - article "3BHK Homes at ₹89.80 Lakhs":
      - text: Hiranandani Communities
      - link "3BHK Homes at ₹89.80 Lakhs":
        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=379753&auId=9fb4fcdf-8bf7-48c5-b54b-bdb5e0974ceb&bidId=15000&bidderId=4&cmExpId=LV1&impId=5&oAdUnit=1732768568&publisherId=17160724&rId=ac131b58-4593-497b-8b1d-c780b8d0b94f&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8g0y-KOIhCjAsxjDVC4tswTVUCUyonblcmi_1e5AwCBk7dpUL29Ko_OY1xcn8_dxMhO7loD_PlxZA8_Y751hUUHcGwWmcYh6wfv3neV5hBxKcf6e-1P4KtUOq5tzZZZgo9m_ty4L2SKhUjv3DTGph7L6BP6rQi1dHQAh119LXTr6H0yjVUebV0rV_nFUPyuMDxOzi3Q%26u%3DaHR0cHMlM2ElMmYlMmZhcGFydG1lbnRzLmhpcmFuYW5kYW5pcGFya3MuY29tJTNmdXRtX3NvdXJjZSUzZE1pY3Jvc29mdEJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkSGlyYW5hbmRhbmlBcGFydG1lbnRQZXJmb3JtYW5jZURlYzI0U1dUJTI2dXRtX3Rlcm0lM2QlN2J0ZXJtJTdkJTI2dXRtX2NvbnRlbnQlM2RFVEElMjZjc3RtX3BwY19rZXl3b3JkJTNkJTI2Y3N0bV9wcGNfcGxhY2VtZW50JTNkJTdiUGxhY2VtZW50JTdkJTI2Y3N0bV9wcGNfZGV2aWNlJTNkYyUyNmNzdG1fcHBjX2NhbXBhaWduJTNkSGlyYW5hbmRhbmlBcGFydG1lbnRQZXJmb3JtYW5jZUJpbmdTV1QlMjZjc3RtX3BwY19jaGFubmVsJTNkUGVyZm9ybWFuY2VCaW5nJTI2Z2NsaWQlM2QlN2JnY2xpZCU3ZCUyNnV0bV9zb3VyY2UlM2RNaWNyb3NvZnROYXRpdmUlMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkQmluZyUyNm1zY2xraWQlM2RjZWUyMWMxYWEwMjgxZDVmNTQ1Zjc0MzZjMDc2MGJiNg%26rlid%3Dcee21c1aa0281d5f545f7436c0760bb6&rtype=targetURL&tagId=binghp-river-1&trafficGroup=zfa_vagy_yngnz&trafficSubGroup=ego
      - link "Ad":
        - /url: https://account.microsoft.com/privacy/ad-settings
      - link "Ad Choice":
        - /url: https://account.microsoft.com/privacy/ad-settings
      - button "See more"
    - 'article "‘War 2’ teaser drops on Jr NTR’s birthday: Netizens say “The face-off we wanted!” as Hrithik Roshan welcomes him to ‘Hell’"':
      - text: The Times of India 4h
      - 'link "‘War 2’ teaser drops on Jr NTR’s birthday: Netizens say “The face-off we wanted!” as Hrithik Roshan welcomes him to ‘Hell’"':
        - /url: https://www.msn.com/en-in/entertainment/bollywood/war-2-teaser-drops-on-jr-ntr-s-birthday-netizens-say-the-face-off-we-wanted-as-hrithik-roshan-welcomes-him-to-hell/ar-AA1F6CXN
      - button "89 Like":
        - img
        - text: "89"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/entertainment/bollywood/war-2-teaser-drops-on-jr-ntr-s-birthday-netizens-say-the-face-off-we-wanted-as-hrithik-roshan-welcomes-him-to-hell/ar-AA1F6CXN#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - 'article "From Jyoti Malhotra to Devender Singh: 11 ''Pak spies'' caught in India over 3 days"':
      - text: India Today 22h
      - 'link "From Jyoti Malhotra to Devender Singh: 11 ''Pak spies'' caught in India over 3 days"':
        - /url: https://www.msn.com/en-in/news/india/from-jyoti-malhotra-to-devender-singh-11-pak-spies-caught-in-india-over-3-days/ar-AA1F3KoS
      - button "184 Like":
        - img
        - text: "184"
      - button "Dislike":
        - img
      - link "View comments 1 Comment":
        - /url: https://www.msn.com/en-in/news/india/from-jyoti-malhotra-to-devender-singh-11-pak-spies-caught-in-india-over-3-days/ar-AA1F3KoS#comments
        - button "View comments 1 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - article "The 10 Most Powerful Planes ever":
      - text: Autocar 10h
      - link "The 10 Most Powerful Planes ever":
        - /url: https://www.msn.com/en-in/money/technology/the-10-most-powerful-planes-ever/ss-AA1F5Ctn
      - button "3 Like":
        - img
        - text: "3"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/money/technology/the-10-most-powerful-planes-ever/ss-AA1F5Ctn#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - article:
      - link "Tambaram":
        - /url: https://www.msn.com/en-in/weather/forecast/in-Tambaram,Tamil-Nadu?loc=eyJsIjoiVGFtYmFyYW0iLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjEzMzQ3NjI1NzMyNDIyLCJ5IjoxMi45NzM4MTQ5NjQyOTQ0MzR9&weadegreetype=C&ocid=BingHp01&cvid=bbde0731f3cc40e1db634e678efefca0&content=TeaserRainAccCurrent_wxnwrnaccc
        - heading "Tambaram" [level=2]
      - button "My location"
      - button "More options"
      - link "Heavy rain":
        - /url: https://www.msn.com/en-in/weather/forecast/in-Tambaram,Tamil-Nadu?loc=eyJsIjoiVGFtYmFyYW0iLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjEzMzQ3NjI1NzMyNDIyLCJ5IjoxMi45NzM4MTQ5NjQyOTQ0MzR9&weadegreetype=C&ocid=BingHp01&cvid=bbde0731f3cc40e1db634e678efefca0&content=TeaserRainAccCurrent_wxnwrnaccc
        - img "Heavy rain"
      - link "32°C":
        - /url: https://www.msn.com/en-in/weather/forecast/in-Tambaram,Tamil-Nadu?loc=eyJsIjoiVGFtYmFyYW0iLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjEzMzQ3NjI1NzMyNDIyLCJ5IjoxMi45NzM4MTQ5NjQyOTQ0MzR9&weadegreetype=C&ocid=BingHp01&cvid=bbde0731f3cc40e1db634e678efefca0&content=TeaserRainAccCurrent_wxnwrnaccc
        - text: ‎32‎ ‎°C‎
      - link "About 2 cm of rain expected to fall in the next 3 hours":
        - /url: https://www.msn.com/en-in/weather/hourlyforecast/in-Tambaram,Tamil-Nadu?loc=eyJsIjoiVGFtYmFyYW0iLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjEzMzQ3NjI1NzMyNDIyLCJ5IjoxMi45NzM4MTQ5NjQyOTQ0MzR9&weadegreetype=C&ocid=BingHp01&cvid=bbde0731f3cc40e1db634e678efefca0&fcsttab=precipitation4h
      - link "See full forecast":
        - /url: https://www.msn.com/en-in/weather/hourlyforecast/in-Tambaram,Tamil-Nadu?loc=eyJsIjoiVGFtYmFyYW0iLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjEzMzQ3NjI1NzMyNDIyLCJ5IjoxMi45NzM4MTQ5NjQyOTQ0MzR9&weadegreetype=C&ocid=BingHp01&cvid=bbde0731f3cc40e1db634e678efefca0&fcsttab=precipitation4h
        - img "arrow"
      - link "Weather forecast Today High temperature 36° Low temperature 28° Weather forecast Wed High temperature 35° Low temperature 29° Weather forecast Thu High temperature 35° Low temperature 29° Weather forecast Fri High temperature 36° Low temperature 29° Weather forecast Sat High temperature 36° Low temperature 29°":
        - /url: https://www.msn.com/en-in/weather/forecast/in-Tambaram,Tamil-Nadu?loc=eyJsIjoiVGFtYmFyYW0iLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjEzMzQ3NjI1NzMyNDIyLCJ5IjoxMi45NzM4MTQ5NjQyOTQ0MzR9&weadegreetype=C&ocid=BingHp01&cvid=bbde0731f3cc40e1db634e678efefca0&content=TeaserRainAccCurrent_wxnwrnaccc
        - list:
          - listitem:
            - link "Weather forecast Today High temperature 36° Low temperature 28°":
              - /url: https://www.msn.com/en-in/weather/forecast/in-Tambaram,Tamil-Nadu?loc=eyJsIjoiVGFtYmFyYW0iLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjEzMzQ3NjI1NzMyNDIyLCJ5IjoxMi45NzM4MTQ5NjQyOTQ0MzR9&weadegreetype=C&ocid=BingHp01&cvid=bbde0731f3cc40e1db634e678efefca0&content=TeaserRainAccCurrent_wxnwrnaccc&day=1
              - text: Today
              - img "Heavy t-storms"
              - text: ‎36°‎ ‎28°‎
          - listitem:
            - link "Weather forecast Wed High temperature 35° Low temperature 29°":
              - /url: https://www.msn.com/en-in/weather/forecast/in-Tambaram,Tamil-Nadu?loc=eyJsIjoiVGFtYmFyYW0iLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjEzMzQ3NjI1NzMyNDIyLCJ5IjoxMi45NzM4MTQ5NjQyOTQ0MzR9&weadegreetype=C&ocid=BingHp01&cvid=bbde0731f3cc40e1db634e678efefca0&content=TeaserRainAccCurrent_wxnwrnaccc&day=2
              - text: Wed
              - img "Partly sunny"
              - text: ‎35°‎ ‎29°‎
          - listitem:
            - link "Weather forecast Thu High temperature 35° Low temperature 29°":
              - /url: https://www.msn.com/en-in/weather/forecast/in-Tambaram,Tamil-Nadu?loc=eyJsIjoiVGFtYmFyYW0iLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjEzMzQ3NjI1NzMyNDIyLCJ5IjoxMi45NzM4MTQ5NjQyOTQ0MzR9&weadegreetype=C&ocid=BingHp01&cvid=bbde0731f3cc40e1db634e678efefca0&content=TeaserRainAccCurrent_wxnwrnaccc&day=3
              - text: Thu
              - img "Partly sunny"
              - text: ‎35°‎ ‎29°‎
          - listitem:
            - link "Weather forecast Fri High temperature 36° Low temperature 29°":
              - /url: https://www.msn.com/en-in/weather/forecast/in-Tambaram,Tamil-Nadu?loc=eyJsIjoiVGFtYmFyYW0iLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjEzMzQ3NjI1NzMyNDIyLCJ5IjoxMi45NzM4MTQ5NjQyOTQ0MzR9&weadegreetype=C&ocid=BingHp01&cvid=bbde0731f3cc40e1db634e678efefca0&content=TeaserRainAccCurrent_wxnwrnaccc&day=4
              - text: Fri
              - img "Partly sunny"
              - text: ‎36°‎ ‎29°‎
          - listitem:
            - link "Weather forecast Sat High temperature 36° Low temperature 29°":
              - /url: https://www.msn.com/en-in/weather/forecast/in-Tambaram,Tamil-Nadu?loc=eyJsIjoiVGFtYmFyYW0iLCJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOjgwLjEzMzQ3NjI1NzMyNDIyLCJ5IjoxMi45NzM4MTQ5NjQyOTQ0MzR9&weadegreetype=C&ocid=BingHp01&cvid=bbde0731f3cc40e1db634e678efefca0&content=TeaserRainAccCurrent_wxnwrnaccc&day=5
              - text: Sat
              - img "Partly sunny"
              - text: ‎36°‎ ‎29°‎
      - button "See full forecast"
    - article:
      - link "Top Engaging News":
        - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d ?? ""?ocid=BingHp01&cvid=bbde0731f3cc40e1db634e678efefca0
        - heading "Top Engaging News" [level=2]
      - button "More options"
      - link "1 UK, France, Canada Threaten Action Against Israel's Continued Offensive In Gaza, Netanyahu Hits Back":
        - /url: https://www.msn.com/en-in/news/world/uk-france-canada-threaten-action-against-israel-s-continued-offensive-in-gaza-netanyahu-hits-back/ar-AA1F5Txl
        - paragraph: "1"
        - paragraph: UK, France, Canada Threaten Action Against Israel's Continued Offensive In Gaza, Netanyahu Hits Back
      - link "17":
        - /url: https://www.msn.com/en-in/news/world/uk-france-canada-threaten-action-against-israel-s-continued-offensive-in-gaza-netanyahu-hits-back/ar-AA1F5Txl#comments
        - paragraph: "17"
      - 'link "2 ‘Hand Over Hafiz Saeed And It’s Over’: Message To Pakistan From ''The Diplomat''"':
        - /url: https://www.msn.com/en-in/news/india/hand-over-hafiz-saeed-and-it-s-over-message-to-pakistan-from-the-diplomat/ar-AA1F66Qq
        - paragraph: "2"
        - paragraph: "‘Hand Over Hafiz Saeed And It’s Over’: Message To Pakistan From 'The Diplomat'"
      - link "13":
        - /url: https://www.msn.com/en-in/news/india/hand-over-hafiz-saeed-and-it-s-over-message-to-pakistan-from-the-diplomat/ar-AA1F66Qq#comments
        - paragraph: "13"
      - 'link "3 China Boosts Pakistan''s Arsenal: Beijing Fast-Tracks J-35A Fighter Jet Delivery, Signals Deepening Defence Ties"':
        - /url: https://www.msn.com/en-in/news/india/china-boosts-pakistan-s-arsenal-beijing-fast-tracks-j-35a-fighter-jet-delivery-signals-deepening-defence-ties/ar-AA1F6uDv
        - paragraph: "3"
        - paragraph: "China Boosts Pakistan's Arsenal: Beijing Fast-Tracks J-35A Fighter Jet Delivery, Signals Deepening Defence Ties"
      - link "11":
        - /url: https://www.msn.com/en-in/news/india/china-boosts-pakistan-s-arsenal-beijing-fast-tracks-j-35a-fighter-jet-delivery-signals-deepening-defence-ties/ar-AA1F6uDv#comments
        - paragraph: "11"
      - 'link "4 Bengaluru city roads ''caused mental trauma'': Man sends Rs 50 lakh notice to BBMP"':
        - /url: https://www.msn.com/en-in/health/health-news/bengaluru-city-roads-caused-mental-trauma-man-sends-rs-50-lakh-notice-to-bbmp/ar-AA1F691O
        - paragraph: "4"
        - paragraph: "Bengaluru city roads 'caused mental trauma': Man sends Rs 50 lakh notice to BBMP"
      - link "9":
        - /url: https://www.msn.com/en-in/health/health-news/bengaluru-city-roads-caused-mental-trauma-man-sends-rs-50-lakh-notice-to-bbmp/ar-AA1F691O#comments
        - paragraph: "9"
      - 'link "5 Pleas against Waqf Act in SC: Once a Waqf, always a Waqf, says Kapil Sibal | All you need to know"':
        - /url: https://www.msn.com/en-in/news/india/pleas-against-waqf-act-in-sc-once-a-waqf-always-a-waqf-says-kapil-sibal-all-you-need-to-know/ar-AA1F72qD
        - paragraph: "5"
        - paragraph: "Pleas against Waqf Act in SC: Once a Waqf, always a Waqf, says Kapil Sibal | All you need to know"
      - link "8":
        - /url: https://www.msn.com/en-in/news/india/pleas-against-waqf-act-in-sc-once-a-waqf-always-a-waqf-says-kapil-sibal-all-you-need-to-know/ar-AA1F72qD#comments
        - paragraph: "8"
      - link "6 'Nishan-e-Pakistan next for Rahul Gandhi?' BJP slams Congress leader over Operation Sindoor controversy":
        - /url: https://www.msn.com/en-in/news/india/nishan-e-pakistan-next-for-rahul-gandhi-bjp-slams-congress-leader-over-operation-sindoor-controversy/ar-AA1F6AyP
        - paragraph: "6"
        - paragraph: "'Nishan-e-Pakistan next for Rahul Gandhi?' BJP slams Congress leader over Operation Sindoor controversy"
      - link "14":
        - /url: https://www.msn.com/en-in/news/india/nishan-e-pakistan-next-for-rahul-gandhi-bjp-slams-congress-leader-over-operation-sindoor-controversy/ar-AA1F6AyP#comments
        - paragraph: "14"
      - tablist:
        - tab "tab-0" [selected]
        - tab "tab-1"
        - tab "tab-2"
    - article
    - article "Is overnight hair oiling right for you? Know what experts say":
      - text: Hindustan Times
      - link "Is overnight hair oiling right for you? Know what experts say":
        - /url: https://www.msn.com/en-in/health/other/is-overnight-hair-oiling-right-for-you-know-what-experts-say/ar-AA1zJUZH
      - button "280 Like":
        - img
        - text: "280"
      - button "Dislike":
        - img
      - link "View comments 1 Comment":
        - /url: https://www.msn.com/en-in/health/other/is-overnight-hair-oiling-right-for-you-know-what-experts-say/ar-AA1zJUZH#comments
        - button "View comments 1 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - article:
      - img
      - link "Games":
        - /url: https://www.msn.com/en-in/play?ocid=msedgntp&cgfrom=cg_ntp_sd_cardtitle
        - heading "Games" [level=2]
      - button "More options"
      - grid:
        - gridcell "Krakax.com":
          - img
          - text: Krakax.com
        - 'gridcell "10x10: fill the grid"':
          - img
          - text: "10x10: fill the grid"
        - gridcell "Butterfly Shimai":
          - img
          - text: Butterfly Shimai
        - gridcell "Fruity Fiesta":
          - img
          - text: Fruity Fiesta
        - gridcell "Sudoku Blocks":
          - img
          - text: Sudoku Blocks
        - gridcell "Dominoes FRVR":
          - img
          - text: Dominoes FRVR
      - tablist:
        - tab "tab-0" [selected]
        - tab "tab-1"
        - tab "tab-2"
      - link "Explore more games":
        - /url: https://www.msn.com/en-in/play?ocid=msedgntp&cgfrom=cg_ntp_sd_cardseemore
    - 'article "9 Planets, 9 Avatars: The Divine Link Between Navagrahas and Lord Vishnu"':
      - text: Moneycontrol 1w
      - 'link "9 Planets, 9 Avatars: The Divine Link Between Navagrahas and Lord Vishnu"':
        - /url: https://www.msn.com/en-in/news/india/9-planets-9-avatars-the-divine-link-between-navagrahas-and-lord-vishnu/ss-AA1EBEIx
      - button "478 Like":
        - img
        - text: "478"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/news/india/9-planets-9-avatars-the-divine-link-between-navagrahas-and-lord-vishnu/ss-AA1EBEIx#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - article "See the universe like never before captured by a 609 megapixel camera":
      - text: Metro
      - link "See the universe like never before captured by a 609 megapixel camera":
        - /url: https://www.msn.com/en-in/news/techandscience/see-the-universe-like-never-before-captured-by-a-609-megapixel-camera/vi-AA1BeCUB
      - button "8k Like":
        - img
        - text: 8k
      - button "Dislike":
        - img
      - link "View comments 9 Comment":
        - /url: https://www.msn.com/en-in/news/techandscience/see-the-universe-like-never-before-captured-by-a-609-megapixel-camera/vi-AA1BeCUB#comments
        - button "View comments 9 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - article
    - 'article "Explained: How Can RCB, PBKS, GT Seal Elusive Top Two Spot In IPL 2025 After Playoff Qualification"':
      - text: Times Now 20h
      - 'link "Explained: How Can RCB, PBKS, GT Seal Elusive Top Two Spot In IPL 2025 After Playoff Qualification"':
        - /url: https://www.msn.com/en-in/sports/cricket/explained-how-can-rcb-pbks-gt-seal-elusive-top-two-spot-in-ipl-2025-after-playoff-qualification/ar-AA1F4hzh
      - button "30 Like":
        - img
        - text: "30"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/sports/cricket/explained-how-can-rcb-pbks-gt-seal-elusive-top-two-spot-in-ipl-2025-after-playoff-qualification/ar-AA1F4hzh#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - 'article "''I''ve Visited Churches, Dargahs...'': CJI Gavai Counters Kapil Sibal During Waqf Hearing"':
      - text: News18 4h
      - 'link "''I''ve Visited Churches, Dargahs...'': CJI Gavai Counters Kapil Sibal During Waqf Hearing"':
        - /url: https://www.msn.com/en-in/news/india/i-ve-visited-churches-dargahs-cji-gavai-counters-kapil-sibal-during-waqf-hearing/ar-AA1F6z4K
      - button "75 Like":
        - img
        - text: "75"
      - button "Dislike":
        - img
      - link "View comments 9 Comment":
        - /url: https://www.msn.com/en-in/news/india/i-ve-visited-churches-dargahs-cji-gavai-counters-kapil-sibal-during-waqf-hearing/ar-AA1F6z4K#comments
        - button "View comments 9 Comment":
          - img
      - button "Hide this story"
      - button "See more"
    - article
    - article "Jofra Archer mimics Ravindra Jadeja's bowling and nails it perfectly - WATCH":
      - text: The Times of India 3h
      - link "Jofra Archer mimics Ravindra Jadeja's bowling and nails it perfectly - WATCH":
        - /url: https://www.msn.com/en-in/sports/cricket/jofra-archer-mimics-ravindra-jadeja-s-bowling-and-nails-it-perfectly-watch/ar-AA1F6Q73
      - button "20 Like":
        - img
        - text: "20"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/sports/cricket/jofra-archer-mimics-ravindra-jadeja-s-bowling-and-nails-it-perfectly-watch/ar-AA1F6Q73#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - 'article "Gold Rate Today (May 20): Check Out Gold Prices In Delhi, Mumbai, Bengaluru, Ahmedabad, More Cities"':
      - text: ABP - Live 5h
      - 'link "Gold Rate Today (May 20): Check Out Gold Prices In Delhi, Mumbai, Bengaluru, Ahmedabad, More Cities"':
        - /url: https://www.msn.com/en-in/autos/photos/gold-rate-today-may-20-check-out-gold-prices-in-delhi-mumbai-bengaluru-ahmedabad-more-cities/ar-AA1F6lyr
      - button "37 Like":
        - img
        - text: "37"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/autos/photos/gold-rate-today-may-20-check-out-gold-prices-in-delhi-mumbai-bengaluru-ahmedabad-more-cities/ar-AA1F6lyr#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - article:
      - link "Recommended videos":
        - /url: https://www.msn.com/en-in/video?ocid=BingHp01
        - img
      - link "Recommended videos":
        - /url: https://www.msn.com/en-in/video?ocid=BingHp01
      - link "See more":
        - /url: https://www.msn.com/en-in/video?ocid=BingHp01
      - button "More options":
        - img
      - tabpanel:
        - 'article "Trump 5% ''Remittance Tax'' Explained: Who Will Be Impacted And What It Means For Indians In US"':
          - 'img "Trump 5% ''Remittance Tax'' Explained: Who Will Be Impacted And What It Means For Indians In US"'
          - text: 05:58
          - img
          - img "Live Mint"
          - text: Live Mint now
          - 'link "Trump 5% ''Remittance Tax'' Explained: Who Will Be Impacted And What It Means For Indians In US"':
            - /url: https://www.msn.com/en-in/money/topstories/trump-5-remittance-tax-explained-who-will-be-impacted-and-what-it-means-for-indians-in-us/vi-AA1F6TII?ocid=BingHp01
            - 'heading "Trump 5% ''Remittance Tax'' Explained: Who Will Be Impacted And What It Means For Indians In US" [level=2]'
          - button "See more"
        - 'article "Russian Leader''s Bombshell Interview: Putin Unveils True Aim of Ukraine War After Turkey Talks Fail"':
          - 'img "Russian Leader''s Bombshell Interview: Putin Unveils True Aim of Ukraine War After Turkey Talks Fail"'
          - text: 03:42
          - img
          - img "Hindustan Times"
          - text: Hindustan Times 20h
          - 'link "Russian Leader''s Bombshell Interview: Putin Unveils True Aim of Ukraine War After Turkey Talks Fail"':
            - /url: https://www.msn.com/en-in/video/watch/russian-leader-s-bombshell-interview-putin-unveils-true-aim-of-ukraine-war-after-turkey-talks-fail/vi-AA1F2Y5a?ocid=BingHp01
            - 'heading "Russian Leader''s Bombshell Interview: Putin Unveils True Aim of Ukraine War After Turkey Talks Fail" [level=2]'
          - button "See more"
        - article "How Jake Paul transformed from a skinny internet star to a boxing powerhouse":
          - img "How Jake Paul transformed from a skinny internet star to a boxing powerhouse"
          - text: 02:33
          - img
          - img "India Today"
          - text: India Today
          - link "How Jake Paul transformed from a skinny internet star to a boxing powerhouse":
            - /url: https://www.msn.com/en-in/money/topstories/how-jake-paul-transformed-from-a-skinny-internet-star-to-a-boxing-powerhouse/vi-AA1umzBJ?ocid=BingHp01
            - heading "How Jake Paul transformed from a skinny internet star to a boxing powerhouse" [level=2]
          - button "See more"
        - 'article "The Story of Chhatrapati Shivaji’s Kingdom Surrender: A Lesson in Humility and Faith"':
          - 'img "The Story of Chhatrapati Shivaji’s Kingdom Surrender: A Lesson in Humility and Faith"'
          - text: 07:16
          - img
          - img "The Times of India"
          - text: The Times of India
          - 'link "The Story of Chhatrapati Shivaji’s Kingdom Surrender: A Lesson in Humility and Faith"':
            - /url: https://www.msn.com/en-in/news/india/the-story-of-chhatrapati-shivaji-s-kingdom-surrender-a-lesson-in-humility-and-faith/vi-AA1xTHFc?ocid=BingHp01
            - 'heading "The Story of Chhatrapati Shivaji’s Kingdom Surrender: A Lesson in Humility and Faith" [level=2]'
          - button "See more"
        - article "Discover Interlaken, Switzerland in 4K – Alpine Beauty & Lake Views":
          - img "Interlaken, Switzerland in 4K – Between Lakes and Mountains"
          - text: 05:00
          - img
          - img "The Flying Dutchman"
          - text: The Flying Dutchman 1w
          - link "Discover Interlaken, Switzerland in 4K – Alpine Beauty & Lake Views":
            - /url: https://www.msn.com/en-in/travel/news/discover-interlaken-switzerland-in-4k-alpine-beauty-lake-views/vi-AA1EioU2?ocid=BingHp01
            - heading "Discover Interlaken, Switzerland in 4K – Alpine Beauty & Lake Views" [level=2]
          - button "See more"
        - article "Sundar Pichai Reveals The Big Changes AI Will Bring In The Next 2-4 Years":
          - img "Sundar Pichai Reveals The Big Changes AI Will Bring In The Next 2-4 Years"
          - text: 02:13
          - img
          - img "BT TV"
          - text: BT TV
          - link "Sundar Pichai Reveals The Big Changes AI Will Bring In The Next 2-4 Years":
            - /url: https://www.msn.com/en-in/money/news/sundar-pichai-reveals-the-big-changes-ai-will-bring-in-the-next-2-4-years/vi-AA1yS0Ei?ocid=BingHp01
            - heading "Sundar Pichai Reveals The Big Changes AI Will Bring In The Next 2-4 Years" [level=2]
          - button "See more"
        - article:
          - 'img "India’s Forgotten Temples: Mysteries of Hampi and Khajuraho"'
          - text: 05:04
          - img
          - img "Travel Bucketlist"
          - text: Travel Bucketlist
          - 'link "India’s Forgotten Temples: Mysteries of Hampi and Khajuraho"':
            - /url: https://www.msn.com/en-in/news/india/india-s-forgotten-temples-mysteries-of-hampi-and-khajuraho/vi-AA1BCF21?ocid=BingHp01
            - 'heading "India’s Forgotten Temples: Mysteries of Hampi and Khajuraho" [level=2]'
          - button "See more"
        - article "Maruti Suzuki E-Vitara walk-around | The EV that can disrupt the market":
          - img "Maruti Suzuki E-Vitara walk-around | The EV that can disrupt the market"
          - text: 04:15
          - img
          - img "The Economic Times"
          - text: The Economic Times
          - link "Maruti Suzuki E-Vitara walk-around | The EV that can disrupt the market":
            - /url: https://www.msn.com/en-in/autos/news/maruti-suzuki-e-vitara-walk-around-the-ev-that-can-disrupt-the-market/vi-AA1xwm4F?ocid=BingHp01
            - heading "Maruti Suzuki E-Vitara walk-around | The EV that can disrupt the market" [level=2]
          - button "See more"
        - article:
          - img "Superman official trailer"
          - text: 02:57
          - img
          - img "Metro"
          - text: Metro 5d
          - link "Superman official trailer":
            - /url: https://www.msn.com/en-in/news/world/superman-official-trailer/vi-AA1EMm0Y?ocid=BingHp01
            - heading "Superman official trailer" [level=2]
          - button "See more"
        - article "Putin Invites Arab Leaders For Moscow Summit; Big Outreach Days After Trump Wins Huge Gulf Investments":
          - img "Putin Invites Arab Leaders For Moscow Summit; Big Outreach Days After Trump Wins Huge Gulf Investments"
          - text: 03:11
          - img
          - img "The Times of India"
          - text: The Times of India 1d
          - link "Putin Invites Arab Leaders For Moscow Summit; Big Outreach Days After Trump Wins Huge Gulf Investments":
            - /url: https://www.msn.com/en-in/news/world/putin-invites-arab-leaders-for-moscow-summit-big-outreach-days-after-trump-wins-huge-gulf-investments/vi-AA1F1cKK?ocid=BingHp01
            - heading "Putin Invites Arab Leaders For Moscow Summit; Big Outreach Days After Trump Wins Huge Gulf Investments" [level=2]
          - button "See more"
        - article "DIY Wall Hanging Toran & Peacock – Beautiful Handmade Decoration Ideas 🪔🦚":
          - img "DIY Wall Hanging Toran & Peacock – Beautiful Handmade Decoration Ideas 🪔🦚"
          - text: 09:33
          - img
          - img "Crafts From Wastes"
          - text: Crafts From Wastes 2w
          - link "DIY Wall Hanging Toran & Peacock – Beautiful Handmade Decoration Ideas 🪔🦚":
            - /url: https://www.msn.com/en-in/travel/news/diy-wall-hanging-toran-peacock-beautiful-handmade-decoration-ideas/vi-AA1DTzcY?ocid=BingHp01
            - heading "DIY Wall Hanging Toran & Peacock – Beautiful Handmade Decoration Ideas 🪔🦚" [level=2]
          - button "See more"
        - 'article "Sunita Williams in space: What Laika, Chimps, and fruit flies reveal about long-duration missions"':
          - 'img "Sunita Williams in space: What Laika, Chimps, and fruit flies reveal about long-duration missions"'
          - text: 03:29
          - img
          - img "India Today"
          - text: India Today
          - 'link "Sunita Williams in space: What Laika, Chimps, and fruit flies reveal about long-duration missions"':
            - /url: https://www.msn.com/en-in/news/world/sunita-williams-in-space-what-laika-chimps-and-fruit-flies-reveal-about-long-duration-missions/vi-AA1psA5Z?ocid=BingHp01
            - 'heading "Sunita Williams in space: What Laika, Chimps, and fruit flies reveal about long-duration missions" [level=2]'
          - button "See more"
        - article:
          - img "U.S. States With Highest Panther Populations!"
          - text: 08:04
          - img
          - img "Weather-Fox"
          - text: Weather-Fox 1w
          - link "U.S. States With Highest Panther Populations!":
            - /url: https://www.msn.com/en-in/news/world/u-s-states-with-highest-panther-populations/vi-AA1EB0Xe?ocid=BingHp01
            - heading "U.S. States With Highest Panther Populations!" [level=2]
          - button "See more"
        - article:
          - img "Linkedin 'Jobs On The Rise' Report Key Highlights | Watch"
          - text: 02:07
          - img
          - img "Live Mint"
          - text: Live Mint
          - link "Linkedin 'Jobs On The Rise' Report Key Highlights | Watch":
            - /url: https://www.msn.com/en-in/money/news/linkedin-jobs-on-the-rise-report-key-highlights-watch/vi-AA1xpG6E?ocid=BingHp01
            - heading "Linkedin 'Jobs On The Rise' Report Key Highlights | Watch" [level=2]
          - button "See more"
        - article:
          - img "Sonlerto, Cevio, Switzerland"
          - text: 05:00
          - img
          - img "The Flying Dutchman"
          - text: The Flying Dutchman 2w
          - link "Sonlerto, Bavona Valley – A Hidden Gem in the Swiss Alps (4K)":
            - /url: https://www.msn.com/en-in/travel/news/sonlerto-bavona-valley-a-hidden-gem-in-the-swiss-alps-4k/vi-AA1E496n?ocid=BingHp01
            - heading "Sonlerto, Bavona Valley – A Hidden Gem in the Swiss Alps (4K)" [level=2]
          - button "See more"
        - article:
          - img "7 Easy-to-do things that burn more fat"
          - text: 03:48
          - img
          - img "The Times of India"
          - text: The Times of India
          - link "7 Easy-to-do things that burn more fat":
            - /url: https://www.msn.com/en-in/health/fitness/7-easy-to-do-things-that-burn-more-fat/vi-AA1ri3Rc?ocid=BingHp01
            - heading "7 Easy-to-do things that burn more fat" [level=2]
          - button "See more"
        - article "Reviewing Hyundai's New Electric Creta-SUV | Take A Look | N18V":
          - img "Reviewing Hyundai's New Electric Creta-SUV | Take A Look | N18V"
          - text: 07:00
          - img
          - img "CNBCTV18"
          - text: CNBCTV18
          - link "Reviewing Hyundai's New Electric Creta-SUV | Take A Look | N18V":
            - /url: https://www.msn.com/en-in/autos/news/reviewing-hyundai-s-new-electric-creta-suv-take-a-look-n18v/vi-AA1xhIob?ocid=BingHp01
            - heading "Reviewing Hyundai's New Electric Creta-SUV | Take A Look | N18V" [level=2]
          - button "See more"
        - article "Gulzar on youth, creativity, and iconic collaborations with RD Burman":
          - img "Gulzar on youth, creativity, and iconic collaborations with RD Burman"
          - text: 70:13
          - img
          - img "India Today"
          - text: India Today
          - link "Gulzar on youth, creativity, and iconic collaborations with RD Burman":
            - /url: https://www.msn.com/en-in/money/topstories/gulzar-on-youth-creativity-and-iconic-collaborations-with-rd-burman/vi-AA1uCPmT?ocid=BingHp01
            - heading "Gulzar on youth, creativity, and iconic collaborations with RD Burman" [level=2]
          - button "See more"
        - link "See more":
          - /url: https://www.msn.com/en-in/video?ocid=BingHp01
          - img
          - text: See more
        - button "next":
          - img
    - 'article "Sensex crashes over 800 pts, Nifty below 24,700: Weak global cues among 8 key factors behind market decline"':
      - text: Moneycontrol 3h
      - 'link "Sensex crashes over 800 pts, Nifty below 24,700: Weak global cues among 8 key factors behind market decline"':
        - /url: https://www.msn.com/en-in/money/topstories/sensex-crashes-over-800-pts-nifty-below-24-700-weak-global-cues-among-8-key-factors-behind-market-decline/ar-AA1F6XeI
      - button "2 Like":
        - img
        - text: "2"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/money/topstories/sensex-crashes-over-800-pts-nifty-below-24-700-weak-global-cues-among-8-key-factors-behind-market-decline/ar-AA1F6XeI#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - 'article "NSDL IPO Listing: Latest update on DHRP; size, sellers, total shares"':
      - text: ET Now 4h
      - 'link "NSDL IPO Listing: Latest update on DHRP; size, sellers, total shares"':
        - /url: https://www.msn.com/en-in/lifestyle/style/nsdl-ipo-listing-latest-update-on-dhrp-size-sellers-total-shares/ar-AA1F6HSZ
      - button "5 Like":
        - img
        - text: "5"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/lifestyle/style/nsdl-ipo-listing-latest-update-on-dhrp-size-sellers-total-shares/ar-AA1F6HSZ#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
    - article
    - article "Rosengartenschlucht – A Must-See Nature Walk in Imst, Tyrol, Austria (4K)":
      - text: The Flying Dutchman 1w
      - link "Rosengartenschlucht – A Must-See Nature Walk in Imst, Tyrol, Austria (4K)":
        - /url: https://www.msn.com/en-in/travel/news/rosengartenschlucht-a-must-see-nature-walk-in-imst-tyrol-austria-4k/vi-AA1EAo1D
      - button "218 Like":
        - img
        - text: "218"
      - button "Dislike":
        - img
      - link "Start the conversation":
        - /url: https://www.msn.com/en-in/travel/news/rosengartenschlucht-a-must-see-nature-walk-in-imst-tyrol-austria-4k/vi-AA1EAo1D#comments
        - button "Start the conversation":
          - img
      - button "Hide this story"
      - button "See more"
- contentinfo:
  - text: © 2025 Microsoft
  - list:
    - listitem:
      - link "Privacy and Cookies":
        - /url: //go.microsoft.com/fwlink/?LinkId=521839
    - listitem:
      - link "Legal":
        - /url: //go.microsoft.com/fwlink/?LinkID=246338
    - listitem:
      - link "Advertise":
        - /url: //go.microsoft.com/fwlink/?linkid=868923
    - listitem:
      - link "About our ads":
        - /url: //go.microsoft.com/fwlink/?LinkID=286759
    - listitem:
      - link "Help":
        - /url: //support.microsoft.com/topic/82d20721-2d6f-4012-a13d-d1910ccf203f
    - listitem:
      - link "Feedback":
        - /url: "#"
```

# Test source

```ts
   9 |     await expect(page).toHaveURL('https://themeforest.net/');
   10 |     await page.close();
   11 | })
   12 |
   13 | test('Test 2 - demo.opencart.com', async ({ page }) => {
   14 |     await page.goto('https://demo.opencart.com/');
   15 |     const pageTitle = await page.title();
   16 |     const pageURL = await page.url();
   17 |     console.log("Title: ", pageTitle);
   18 |     console.log("URL: ", pageURL);
   19 |     await expect(page).toHaveURL('https://demo.opencart.com/');
   20 |     await page.close();
   21 | })
   22 |
   23 | test('Test 3 - www.rediff.com', async ({ page }) => {
   24 |     await page.goto('https://www.rediff.com/');
   25 |     const pageTitle = await page.title();
   26 |     const pageURL = await page.url();
   27 |     console.log("Title: ", pageTitle);
   28 |     console.log("URL: ", pageURL);
   29 |     await expect(page).toHaveURL('https://www.rediff.com/');
   30 |     await page.close();
   31 | })
   32 |
   33 | test('Test 4 - leafground Dropdown', async ({ page }) => {
   34 |     await page.goto('http://www.leafground.com/pages/Dropdown.html');
   35 |     const pageTitle = await page.title();
   36 |     const pageURL = await page.url();
   37 |     console.log("Title: ", pageTitle);
   38 |     console.log("URL: ", pageURL);
   39 |     await expect(page).toHaveURL('http://www.leafground.com/pages/Dropdown.html');
   40 |     await page.close();
   41 | })
   42 |
   43 | test('Test 5 - tizag JavaScript Alert', async ({ page }) => {
   44 |     await page.goto('http://www.tizag.com/javascriptT/javascriptalert.php');
   45 |     const pageTitle = await page.title();
   46 |     const pageURL = await page.url();
   47 |     console.log("Title: ", pageTitle);
   48 |     console.log("URL: ", pageURL);
   49 |     await expect(page).toHaveURL('http://www.tizag.com/javascriptT/javascriptalert.php');
   50 |     await page.close();
   51 | })
   52 |
   53 | test('Test 6 - echoecho Forms', async ({ page }) => {
   54 |     await page.goto('http://www.echoecho.com/htmlforms10.htm');
   55 |     const pageTitle = await page.title();
   56 |     const pageURL = await page.url();
   57 |     console.log("Title: ", pageTitle);
   58 |     console.log("URL: ", pageURL);
   59 |     await expect(page).toHaveURL('http://www.echoecho.com/htmlforms10.htm');
   60 |     await page.close();
   61 | })
   62 |
   63 | test('Test 7 - leafground Home', async ({ page }) => {
   64 |     await page.goto('http://www.leafground.com/home.html');
   65 |     const pageTitle = await page.title();
   66 |     const pageURL = await page.url();
   67 |     console.log("Title: ", pageTitle);
   68 |     console.log("URL: ", pageURL);
   69 |     await expect(page).toHaveURL('http://www.leafground.com/home.html');
   70 |     await page.close();
   71 | })
   72 |
   73 | test('Test 8 - automationpractice.com', async ({ page }) => {
   74 |     await page.goto('http://automationpractice.com/index.php');
   75 |     const pageTitle = await page.title();
   76 |     const pageURL = await page.url();
   77 |     console.log("Title: ", pageTitle);
   78 |     console.log("URL: ", pageURL);
   79 |     await expect(page).toHaveURL('http://automationpractice.com/index.php');
   80 |     await page.close();
   81 | })
   82 |
   83 | test('Test 9 - Salesforce Login', async ({ page }) => {
   84 |     await page.goto('https://login.salesforce.com/?locale=in');
   85 |     const pageTitle = await page.title();
   86 |     const pageURL = await page.url();
   87 |     console.log("Title: ", pageTitle);
   88 |     console.log("URL: ", pageURL);
   89 |     await expect(page).toHaveURL('https://login.salesforce.com/?locale=in');
   90 |     await page.close();
   91 | })
   92 |
   93 | test('Test 10 - filehosting.org', async ({ page }) => {
   94 |     await page.goto('http://www.filehosting.org');
   95 |     const pageTitle = await page.title();
   96 |     const pageURL = await page.url();
   97 |     console.log("Title: ", pageTitle);
   98 |     console.log("URL: ", pageURL);
   99 |     await expect(page).toHaveURL('http://www.filehosting.org');
  100 |     await page.close();
  101 | })
  102 |
  103 | test('Test 11 - bing.com', async ({ page }) => {
  104 |     await page.goto('http://www.bing.com');
  105 |     const pageTitle = await page.title();
  106 |     const pageURL = await page.url();
  107 |     console.log("Title: ", pageTitle);
  108 |     console.log("URL: ", pageURL);
> 109 |     await expect(page).toHaveURL('http://www.bing.com');
      |                        ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
  110 |     await page.close();
  111 | })
  112 |
  113 | test('Test 12 - freecrm.com', async ({ page }) => {
  114 |     await page.goto('https://www.freecrm.com/');
  115 |     const pageTitle = await page.title();
  116 |     const pageURL = await page.url();
  117 |     console.log("Title: ", pageTitle);
  118 |     console.log("URL: ", pageURL);
  119 |     await expect(page).toHaveURL('https://www.freecrm.com/');
  120 |     await page.close();
  121 | })
  122 |
  123 | test('Test 13 - half.ebay.com', async ({ page }) => {
  124 |     await page.goto('http://www.half.ebay.com');
  125 |     const pageTitle = await page.title();
  126 |     const pageURL = await page.url();
  127 |     console.log("Title: ", pageTitle);
  128 |     console.log("URL: ", pageURL);
  129 |     await expect(page).toHaveURL('http://www.half.ebay.com');
  130 |     await page.close();
  131 | })
  132 |
  133 | test('Test 14 - alaskatrips', async ({ page }) => {
  134 |     await page.goto('https://alaskatrips.poweredbygps.com/');
  135 |     const pageTitle = await page.title();
  136 |     const pageURL = await page.url();
  137 |     console.log("Title: ", pageTitle);
  138 |     console.log("URL: ", pageURL);
  139 |     await expect(page).toHaveURL('https://alaskatrips.poweredbygps.com/');
  140 |     await page.close();
  141 | })
  142 |
  143 | test('Test 15 - qaclickacademy', async ({ page }) => {
  144 |     await page.goto('http://www.qaclickacademy.com/interview.php');
  145 |     const pageTitle = await page.title();
  146 |     const pageURL = await page.url();
  147 |     console.log("Title: ", pageTitle);
  148 |     console.log("URL: ", pageURL);
  149 |     await expect(page).toHaveURL('http://www.qaclickacademy.com/interview.php');
  150 |     await page.close();
  151 | })
  152 |
  153 | test('Test 16 - saucelabs login', async ({ page }) => {
  154 |     await page.goto('https://app.saucelabs.com/login');
  155 |     const pageTitle = await page.title();
  156 |     const pageURL = await page.url();
  157 |     console.log("Title: ", pageTitle);
  158 |     console.log("URL: ", pageURL);
  159 |     await expect(page).toHaveURL('https://app.saucelabs.com/login');
  160 |     await page.close();
  161 | })
  162 |
  163 | test('Test 17 - orangehrmlive', async ({ page }) => {
  164 |     await page.goto('https://opensource-demo.orangehrmlive.com/');
  165 |     const pageTitle = await page.title();
  166 |     const pageURL = await page.url();
  167 |     console.log("Title: ", pageTitle);
  168 |     console.log("URL: ", pageURL);
  169 |     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/');
  170 |     await page.close();
  171 | })
  172 |
  173 | test('Test 18 - only-testing-blog', async ({ page }) => {
  174 |     await page.goto('http://only-testing-blog.blogspot.com/2014/05/form.html');
  175 |     const pageTitle = await page.title();
  176 |     const pageURL = await page.url();
  177 |     console.log("Title: ", pageTitle);
  178 |     console.log("URL: ", pageURL);
  179 |     await expect(page).toHaveURL('http://only-testing-blog.blogspot.com/2014/05/form.html');
  180 |     await page.close();
  181 | })
  182 |
```