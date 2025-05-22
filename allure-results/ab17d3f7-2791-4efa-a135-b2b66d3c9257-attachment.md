# Test info

- Name: Google search test: playwright automation
- Location: C:\PlaywrightDemo\tests\Demo\googleParameterize.spec.js:13:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="q"]')

    at C:\PlaywrightDemo\tests\Demo\googleParameterize.spec.js:23:25
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
  - combobox "Search"
  - button "Search by voice":
    - img
  - button "Search by image":
    - img
  - button "Google Search"
  - button "I'm Feeling Lucky"
- text: "I/O Recap:"
- link "See how we're making AI more helpful with Gemini"
- text: "Google offered in:"
- link "हिन्दी":
  - /url: https://www.google.com/setprefs?sig=0_ys1M-EEGeMiHlYGocgyzSm4JzWQ%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjN897tuLSNAxWkk68BHW2IEzkQ2ZgBCBc
- link "বাংলা":
  - /url: https://www.google.com/setprefs?sig=0_ys1M-EEGeMiHlYGocgyzSm4JzWQ%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwjN897tuLSNAxWkk68BHW2IEzkQ2ZgBCBg
- link "తెలుగు":
  - /url: https://www.google.com/setprefs?sig=0_ys1M-EEGeMiHlYGocgyzSm4JzWQ%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwjN897tuLSNAxWkk68BHW2IEzkQ2ZgBCBk
- link "मराठी":
  - /url: https://www.google.com/setprefs?sig=0_ys1M-EEGeMiHlYGocgyzSm4JzWQ%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwjN897tuLSNAxWkk68BHW2IEzkQ2ZgBCBo
- link "தமிழ்":
  - /url: https://www.google.com/setprefs?sig=0_ys1M-EEGeMiHlYGocgyzSm4JzWQ%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwjN897tuLSNAxWkk68BHW2IEzkQ2ZgBCBs
- link "ગુજરાતી":
  - /url: https://www.google.com/setprefs?sig=0_ys1M-EEGeMiHlYGocgyzSm4JzWQ%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwjN897tuLSNAxWkk68BHW2IEzkQ2ZgBCBw
- link "ಕನ್ನಡ":
  - /url: https://www.google.com/setprefs?sig=0_ys1M-EEGeMiHlYGocgyzSm4JzWQ%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwjN897tuLSNAxWkk68BHW2IEzkQ2ZgBCB0
- link "മലയാളം":
  - /url: https://www.google.com/setprefs?sig=0_ys1M-EEGeMiHlYGocgyzSm4JzWQ%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwjN897tuLSNAxWkk68BHW2IEzkQ2ZgBCB4
- link "ਪੰਜਾਬੀ":
  - /url: https://www.google.com/setprefs?sig=0_ys1M-EEGeMiHlYGocgyzSm4JzWQ%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwjN897tuLSNAxWkk68BHW2IEzkQ2ZgBCB8
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
- dialog "Sign in to Google":
  - text: Sign in to Google Get the most from your Google account
  - button "Stay signed out"
  - button "Sign in"
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | const testParameters = [
   4 |     'selenium vs playwright',
   5 |     'selenium vs playwright vs cypress',
   6 |     'selenium vs cucumber',
   7 |     'selenium vs robot framework',
   8 |     'playwright automation',
   9 |     'playwright automation framework'
  10 | ];
  11 |
  12 | for (const searchKeyword of testParameters) {
  13 |     test(`Google search test: ${searchKeyword}`, async ({ page }) => {
  14 |         await page.goto('https://www.google.com/');
  15 |
  16 |         // Accept cookies if needed (handles dynamic consent popup)
  17 |         const agreeButton = page.locator('button:has-text("Accept all")');
  18 |         if (await agreeButton.isVisible()) {
  19 |             await agreeButton.click();
  20 |         }
  21 |
  22 |         const searchBox = page.locator('input[name="q"]');
> 23 |         await searchBox.click();
     |                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24 |         await searchBox.fill(searchKeyword);
  25 |         await searchBox.press('Enter');
  26 |
  27 |         // Validate Google logo after search
  28 |         const logoPath = page.locator("//*[name()='path' and contains(@d,'M70 8.56v1')]");
  29 |         await expect(logoPath).toBeVisible();
  30 |
  31 |         await page.waitForTimeout(5000);
  32 |     });
  33 | }
  34 |
```