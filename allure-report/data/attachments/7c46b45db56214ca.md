# Test info

- Name: Autosuggested Dropdown - Google Search
- Location: C:\PlaywrightDemo\tests\PracticeTests\Dropdown\AutosuggestedDropdown.spec.js:2:5

# Error details

```
Error: page.waitForSelector: SyntaxError: The string did not match the expected pattern.
Call log:
  - waiting for locator('//div[@class=\'wM6W7d]/span') to be visible

    at C:\PlaywrightDemo\tests\PracticeTests\Dropdown\AutosuggestedDropdown.spec.js:6:16
```

# Page snapshot

```yaml
- navigation:
  - link "About":
    - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
  - link "Store":
    - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
  - link "Gmail":
    - /url: https://mail.google.com/mail/&ogbl
  - link "Search for Images":
    - /url: https://www.google.com/imghp?hl=en&ogbl
    - text: Images
  - button "Google apps":
    - img
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
- img
- search:
  - img
  - combobox "Search": playwright
  - button "Clear":
    - img
  - button "Search by voice":
    - img
  - button "Search by image":
    - img
  - button "Google Search"
  - button "I'm Feeling Lucky"
- text: "🏏 Today's Googly:"
- link "India made 183 in how many overs in the 1983 World Cup?"
- text: "Google offered in:"
- link "हिन्दी":
  - /url: https://www.google.com/setprefs?sig=0_RxUsN7x-3b-L-xmGnkDzMzRjCUE%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwiv3pSI9LGNAxV2SmwGHcrhMvkQ2ZgBCBc
- link "বাংলা":
  - /url: https://www.google.com/setprefs?sig=0_RxUsN7x-3b-L-xmGnkDzMzRjCUE%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwiv3pSI9LGNAxV2SmwGHcrhMvkQ2ZgBCBg
- link "తెలుగు":
  - /url: https://www.google.com/setprefs?sig=0_RxUsN7x-3b-L-xmGnkDzMzRjCUE%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwiv3pSI9LGNAxV2SmwGHcrhMvkQ2ZgBCBk
- link "मराठी":
  - /url: https://www.google.com/setprefs?sig=0_RxUsN7x-3b-L-xmGnkDzMzRjCUE%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwiv3pSI9LGNAxV2SmwGHcrhMvkQ2ZgBCBo
- link "தமிழ்":
  - /url: https://www.google.com/setprefs?sig=0_RxUsN7x-3b-L-xmGnkDzMzRjCUE%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwiv3pSI9LGNAxV2SmwGHcrhMvkQ2ZgBCBs
- link "ગુજરાતી":
  - /url: https://www.google.com/setprefs?sig=0_RxUsN7x-3b-L-xmGnkDzMzRjCUE%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwiv3pSI9LGNAxV2SmwGHcrhMvkQ2ZgBCBw
- link "ಕನ್ನಡ":
  - /url: https://www.google.com/setprefs?sig=0_RxUsN7x-3b-L-xmGnkDzMzRjCUE%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwiv3pSI9LGNAxV2SmwGHcrhMvkQ2ZgBCB0
- link "മലയാളം":
  - /url: https://www.google.com/setprefs?sig=0_RxUsN7x-3b-L-xmGnkDzMzRjCUE%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwiv3pSI9LGNAxV2SmwGHcrhMvkQ2ZgBCB4
- link "ਪੰਜਾਬੀ":
  - /url: https://www.google.com/setprefs?sig=0_RxUsN7x-3b-L-xmGnkDzMzRjCUE%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwiv3pSI9LGNAxV2SmwGHcrhMvkQ2ZgBCB8
- contentinfo:
  - text: India
  - link "Advertising":
    - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business":
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works":
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en-IN&fg=1
  - button "Settings"
```

# Test source

```ts
   1 | import{test, expect} from '@playwright/test'
   2 | test('Autosuggested Dropdown - Google Search', async({page}) =>{
   3 |     await page.goto('https://www.google.com/')
   4 |     await page.fill("#APjFqb","playwright")
   5 |     //await page.locator("#APjFqb").pressSequentially('selenium',{delay:500})
>  6 |     await page.waitForSelector("//div[@class='wM6W7d]/span")
     |                ^ Error: page.waitForSelector: SyntaxError: The string did not match the expected pattern.
   7 |     const options = await page.$$("//div[@class='wM6W7d]/span")
   8 |     for(const option of options){
   9 |         const text = await option.textContent()
  10 |         console.log('text:',text)
  11 |         if(text.includes('playwright tutorial')){
  12 |             await option.click()
  13 |             break
  14 |         }
  15 |     }
  16 |     await page.goto('https://playwright.dev/')
  17 |     await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern webapps|Playwright')
  18 |     await page.waitForTimeout(5000)
  19 |     await page.close()
  20 |
  21 | })
  22 |
```