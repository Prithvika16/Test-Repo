# Test info

- Name: Test 13 - half.ebay.com
- Location: C:\PlaywrightDemo\tests\PracticeTests\Practice exercises\practice.spec.js:123:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected string: "http://www.half.ebay.com/"
Received string: "https://www.ebay.com/"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    6 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://www.ebay.com/"

    at C:\PlaywrightDemo\tests\PracticeTests\Practice exercises\practice.spec.js:129:24
```

# Page snapshot

```yaml
- img
- img
- banner:
  - button "Scroll to top"
  - link "Skip to main content":
    - /url: "#mainContent"
  - navigation:
    - text: Hi!
    - link "Sign in":
      - /url: https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&sgfl=gh&ru=https%3A%2F%2Fwww.ebay.com%2F
    - text: or
    - link "register":
      - /url: https://signup.ebay.com/pa/crte?ru=https%3A%2F%2Fwww.ebay.com%2F
    - link "Daily Deals":
      - /url: https://www.ebay.com/deals
    - link "Brand Outlet":
      - /url: https://www.ebay.com/b/Brand-Outlet/bn_7115532402
    - link "Gift Cards":
      - /url: https://www.ebay.com/giftcards
    - link "Help & Contact":
      - /url: https://www.ebay.com/help/home
    - link "Sell":
      - /url: https://www.ebay.com/sl/sell
    - link "Watchlist":
      - /url: https://www.ebay.com/mye/myebay/watchlist
    - button "Expand Watch List"
    - link "My eBay":
      - /url: https://www.ebay.com/mys/home?source=GBH
    - button "Expand My eBay"
    - button "Expand Notifications"
    - link "Cart":
      - /url: https://cart.ebay.com
    - button "Expand Cart"
  - link "eBay Home":
    - /url: https://www.ebay.com
    - img "eBay Home"
  - button "Shop by category"
  - text: Enter your search keyword
  - combobox "Search for anything"
  - combobox "Select a category for search":
    - option "All Categories" [selected]
    - option "Antiques"
    - option "Art"
    - option "Baby"
    - option "Books"
    - option "Business & Industrial"
    - option "Cameras & Photo"
    - option "Cell Phones & Accessories"
    - option "Clothing, Shoes & Accessories"
    - option "Coins & Paper Money"
    - option "Collectibles"
    - option "Computers/Tablets & Networking"
    - option "Consumer Electronics"
    - option "Crafts"
    - option "Dolls & Bears"
    - option "Movies & TV"
    - option "eBay Motors"
    - option "Entertainment Memorabilia"
    - option "Gift Cards & Coupons"
    - option "Health & Beauty"
    - option "Home & Garden"
    - option "Jewelry & Watches"
    - option "Music"
    - option "Musical Instruments & Gear"
    - option "Pet Supplies"
    - option "Pottery & Glass"
    - option "Real Estate"
    - option "Specialty Services"
    - option "Sporting Goods"
    - option "Sports Mem, Cards & Fan Shop"
    - option "Stamps"
    - option "Tickets & Experiences"
    - option "Toys & Hobbies"
    - option "Travel"
    - option "Video Games & Consoles"
    - option "Everything Else"
  - button "Search"
  - link "Advanced":
    - /url: https://www.ebay.com/sch/ebayadvsearch
  - status
- region "Use eBay with Google":
  - alert
  - iframe
- main:
  - list:
    - listitem:
      - link "eBay Live":
        - /url: https://www.ebay.com/ebaylive
    - listitem:
      - link "Saved":
        - /url: https://www.ebay.com/mye/myebay/saved
    - listitem:
      - link "Electronics":
        - /url: https://www.ebay.com/b/Electronics/bn_7000259124
      - 'button "Expand: Electronics"'
    - listitem:
      - link "Motors":
        - /url: https://www.ebay.com/b/Auto-Parts-Accessories/6028/bn_569479
      - 'button "Expand: Motors"'
    - listitem:
      - link "Fashion":
        - /url: https://www.ebay.com/b/Fashion/bn_7000259856
      - 'button "Expand: Fashion"'
    - listitem:
      - link "Collectibles and Art":
        - /url: https://www.ebay.com/b/Collectibles-Art/bn_7000259855
      - 'button "Expand: Collectibles and Art"'
    - listitem:
      - link "Sports":
        - /url: https://www.ebay.com/b/Sporting-Goods/888/bn_1865031
      - 'button "Expand: Sports"'
    - listitem:
      - link "Health & Beauty":
        - /url: https://www.ebay.com/b/Health-Beauty/26395/bn_1865479
      - 'button "Expand: Health & Beauty"'
    - listitem:
      - link "Industrial equipment":
        - /url: https://www.ebay.com/b/Business-Industrial/12576/bn_1853744
      - 'button "Expand: Industrial equipment"'
    - listitem:
      - link "Home & Garden":
        - /url: https://www.ebay.com/b/Home-Garden/11700/bn_1853126
      - 'button "Expand: Home & Garden"'
    - listitem:
      - link "Deals":
        - /url: https://www.ebay.com/globaldeals
    - listitem:
      - link "Sell":
        - /url: https://export.ebay.com/en/
      - 'button "Expand: Sell"'
  - group:
    - button "Go to previous banner"
    - list:
      - listitem:
        - text: All your faves are here Refresh your space, elevate your style and power your work.
        - link "Do your thing":
          - /url: https://www.ebay.com/deals?_trkparms=pageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cparentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Ciid%3A2%7Cvlpname%3Avlp_homepage
        - link "Home and Garden":
          - /url: https://www.ebay.com/b/Home-Garden/11700/bn_1853126?_trkparms=pageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cparentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Ciid%3A2%7Cvlpname%3Avlp_homepage
          - img "Home and Garden"
        - link "Home and Garden":
          - /url: https://www.ebay.com/b/Home-Garden/11700/bn_1853126?_trkparms=pageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cparentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Ciid%3A2%7Cvlpname%3Avlp_homepage
        - link "Fashion":
          - /url: https://ebay.com/b/Fashion/bn_7000259856?_trkparms=pageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cparentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Ciid%3A2%7Cvlpname%3Avlp_homepage
          - img "Fashion"
        - link "Fashion":
          - /url: https://ebay.com/b/Fashion/bn_7000259856?_trkparms=pageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cparentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Ciid%3A2%7Cvlpname%3Avlp_homepage
        - link "Business & Industrial":
          - /url: https://www.ebay.com/b/Business-Industrial/12576/bn_1853744?_trkparms=pageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cparentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Ciid%3A2%7Cvlpname%3Avlp_homepage
          - img "Business & Industrial"
        - link "Business & Industrial":
          - /url: https://www.ebay.com/b/Business-Industrial/12576/bn_1853744?_trkparms=pageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cparentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Ciid%3A2%7Cvlpname%3Avlp_homepage
    - button "Go to next banner"
    - button "Pause Banner Carousel"
  - list:
    - listitem
    - listitem
    - listitem
    - listitem
  - heading "Explore Popular Categories" [level=2]
  - group:
    - list:
      - listitem:
        - link "Luxury":
          - /url: https://www.ebay.com/b/Luxury-on-eBay/bn_7109710914?_trkparms=parentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Cpageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cc%3A1%7Ciid%3A1%7Cli%3A8874
          - heading "Luxury" [level=3]
      - listitem:
        - link "Sneakers":
          - /url: https://www.ebay.com/b/Collectible-Sneakers/bn_7000259435?_trkparms=parentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Cpageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cc%3A2%7Ciid%3A1%7Cli%3A8874
          - heading "Sneakers" [level=3]
      - listitem:
        - link "P&A":
          - /url: https://www.ebay.com/b/Auto-Parts-Accessories/6028/bn_569479?_trkparms=parentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Cpageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cc%3A3%7Ciid%3A1%7Cli%3A8874
          - heading "P&A" [level=3]
      - listitem:
        - link "Refurbished":
          - /url: https://br.ebay.com/b/eBay-Refurbished/bn_7040708936?_trkparms=parentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Cpageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cc%3A4%7Ciid%3A1%7Cli%3A8874
          - heading "Refurbished" [level=3]
      - listitem:
        - link "Trading cards":
          - /url: https://www.ebay.com/e/row/ccgrow?_trkparms=parentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Cpageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cc%3A5%7Ciid%3A1%7Cli%3A8874
          - heading "Trading cards" [level=3]
      - listitem:
        - link "Pre-loved Luxury":
          - /url: https://www.ebay.com/e/row/pre-loved-row?_trkparms=parentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Cpageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cc%3A6%7Ciid%3A1%7Cli%3A8874
          - heading "Pre-loved Luxury" [level=3]
      - listitem:
        - link "Toys":
          - /url: https://www.ebay.com/b/Toys-Hobbies/220/bn_1865497?_trkparms=parentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Cpageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cc%3A7%7Ciid%3A1%7Cli%3A8874
          - heading "Toys" [level=3]
  - link "Shopping made easy":
    - /url: https://pages.ebay.com/international-shipping/?_trkparms=pageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cparentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Ciid%3A1
    - heading "Shopping made easy" [level=2]
  - text: Enjoy reliability, secure deliveries and hassle-free returns.
  - link "Start now":
    - /url: https://pages.ebay.com/international-shipping/?_trkparms=pageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cparentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Ciid%3A1
  - link "Help":
    - /url: https://www.ebay.com/help/home?_trkparms=pageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cparentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Ciid%3A5%7Cvlpname%3Avlp_homepage
  - text: Get help exactly when you need it From shipping to returns, find answers to all of your questions.
  - link "Start here":
    - /url: https://www.ebay.com/help/home?_trkparms=pageci%3Adfed1f33-356a-11f0-befd-8a9e6e01249d%7Cparentrq%3Aed6236221960ad5aa1d503b5fffefb9e%7Ciid%3A5%7Cvlpname%3Avlp_homepage%7Cii%3A0481cba9-ab0f-47f4-877f-671045246122
  - button "Help, opens dialogs":
    - img
- img
- contentinfo:
  - heading "Buy" [level=3]:
    - link "Buy":
      - /url: https://www.ebay.com/n/all-categories
  - list:
    - listitem:
      - link "Registration":
        - /url: https://www.ebay.com/help/account/default/ebay-account?id=4188
    - listitem:
      - link "Bidding & buying help":
        - /url: https://www.ebay.com/help/buying
    - listitem:
      - link "Stores":
        - /url: https://www.ebay.com/b/Stores-HUB/bn_7004224522
    - listitem:
      - link "Creator Collections":
        - /url: https://storefronts.ebay.com/
    - listitem:
      - link "eBay for Charity":
        - /url: https://www.charity.ebay.com/
    - listitem:
      - link "Charity Shop":
        - /url: https://www.ebay.com/b/Charity/bn_7114598164
    - listitem:
      - link "Seasonal Sales and events":
        - /url: https://www.ebay.com/b/Sales-Events/bn_7115049177
    - listitem:
      - link "eBay Gift Cards":
        - /url: https://www.ebay.com/giftcards
  - heading "Sell" [level=3]:
    - link "Sell":
      - /url: https://www.ebay.com/sl/sell
  - list:
    - listitem:
      - link "Start selling":
        - /url: https://www.ebay.com/sl/sell
    - listitem:
      - link "How to sell":
        - /url: https://pages.ebay.com/seller-center/get-started/selling-basics.html?utm_source=gf-learn-to-sell&utm_medium=onsite
    - listitem:
      - link "Business sellers":
        - /url: https://pages.ebay.com/seller-center/listing-and-marketing/seller-hub.html
    - listitem:
      - link "Affiliates":
        - /url: https://partnernetwork.ebay.com/
  - heading "Tools & apps" [level=3]
  - list:
    - listitem:
      - link "Developers":
        - /url: https://developer.ebay.com/
    - listitem:
      - link "Security center":
        - /url: https://pages.ebay.com/securitycenter/index.html
    - listitem:
      - link "Site map":
        - /url: https://pages.ebay.com/sitemap.html
  - heading "eBay companies" [level=3]
  - link "TCGplayer":
    - /url: https://www.tcgplayer.com/
  - heading "Stay connected" [level=3]
  - list:
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/ebay/
    - listitem:
      - link "X (Twitter)":
        - /url: https://twitter.com/eBay
  - heading "About eBay" [level=3]:
    - link "About eBay":
      - /url: https://www.ebayinc.com/
  - list:
    - listitem:
      - link "Company info":
        - /url: https://www.ebayinc.com/company/
    - listitem:
      - link "News":
        - /url: https://www.ebayinc.com/stories/news/
    - listitem:
      - link "Deferred Prosecution Agreement with District of Massachusetts":
        - /url: https://www.ebayinc.com/stories/press-room/#assets-settlements
    - listitem:
      - link "Investors":
        - /url: https://investors.ebayinc.com/overview/default.aspx
    - listitem:
      - link "Careers":
        - /url: https://careers.ebayinc.com/
    - listitem:
      - link "Diversity & Inclusion":
        - /url: https://www.ebayinc.com/company/diversity-equity-inclusion/
    - listitem:
      - link "Global Impact":
        - /url: https://www.ebayinc.com/impact/
    - listitem:
      - link "Government relations":
        - /url: https://www.ebaymainstreet.com/
    - listitem:
      - link "Advertise with us":
        - /url: https://www.ebayads.com/
    - listitem:
      - link "Policies":
        - /url: https://www.ebay.com/help/policies/default/ebays-rules-policies?id=4205
    - listitem:
      - link "Verified Rights Owner (VeRO) Program":
        - /url: https://pages.ebay.com/seller-center/listing-and-marketing/verified-rights-owner-program.html#what-is-the-vero-program
    - listitem:
      - link "eCI Licenses":
        - /url: https://pages.ebay.com/ebayCommerce/mtl.html
  - heading "Help & Contact" [level=3]:
    - link "Help & Contact":
      - /url: https://www.ebay.com/help/home
  - list:
    - listitem:
      - link "Seller Center":
        - /url: https://pages.ebay.com/seller-center/index.html?utm_source=gf&utm_medium=onsite
    - listitem:
      - link "Contact Us":
        - /url: https://www.ebay.com/help/home
    - listitem:
      - link "eBay Returns":
        - /url: https://pages.ebay.com/returns/
    - listitem:
      - link "eBay Money Back Guarantee":
        - /url: https://pages.ebay.com/ebay-money-back-guarantee/
  - heading "Community" [level=3]:
    - link "Community":
      - /url: https://community.ebay.com/
  - list:
    - listitem:
      - link "Announcements":
        - /url: https://community.ebay.com/t5/Announcements/bg-p/Announcements
    - listitem:
      - link "eBay Community":
        - /url: https://community.ebay.com/
    - listitem:
      - link "eBay for Business Podcast":
        - /url: https://community.ebay.com/t5/Podcasts/ct-p/Podcasts
  - heading "eBay Sites" [level=3]
  - button "eBay Sites - United States - change site": United States
  - text: Copyright © 1995-2025 eBay Inc. All Rights Reserved.
  - link "Accessibility":
    - /url: https://www.ebayinc.com/accessibility/
  - text: ","
  - link "User Agreement":
    - /url: https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259
  - text: ","
  - link "Privacy":
    - /url: https://www.ebay.com/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy?id=4260
  - text: ","
  - link "Consumer Health Data":
    - /url: https://www.ebayinc.com/company/privacy-center/privacy-notice/consumer-health-data-privacy-policy/
  - text: ","
  - link "Payments Terms of Use":
    - /url: https://pages.ebay.com/payment/2.0/terms.html
  - text: ","
  - link "Cookies":
    - /url: https://www.ebay.com/help/policies/member-behaviour-policies/ebay-cookie-notice?id=4267
  - text: ","
  - link "CA Privacy Notice":
    - /url: https://www.ebayinc.com/company/privacy-center/privacy-notice/state-privacy-disclosures/#california
  - text: ","
  - link "Your Privacy Choices":
    - /url: https://www.ebay.com/adchoice/ccpa
  - text: and
  - link "AdChoice":
    - /url: https://www.ebay.com/adchoice
- img
```

# Test source

```ts
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
  109 |     await expect(page).toHaveURL('http://www.bing.com');
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
> 129 |     await expect(page).toHaveURL('http://www.half.ebay.com');
      |                        ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
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