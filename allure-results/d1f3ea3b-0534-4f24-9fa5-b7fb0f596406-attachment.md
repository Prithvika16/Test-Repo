# Test info

- Name: Google search test: selenium vs cucumber
- Location: C:\PlaywrightDemo\tests\Demo\googleParameterize.spec.js:13:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('//*[name()=\'path\' and contains(@d,\'M70 8.56v1\')]')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('//*[name()=\'path\' and contains(@d,\'M70 8.56v1\')]')
    - waiting for" https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dselenium%2Bvs%2Bcucumber%26sca_esv%3De7ca8cbc53cd9f33%26source%3Dhp%26ei%3Du7ctaPawG82rvr0P6f-ssQI%26iflsig%3DACkRmUkAA…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dselenium%2Bvs%2Bcucumber%26sca_esv%3De7ca8cbc53cd9f33%26source%3Dhp%26ei%3Du7ctaPawG82rvr0P6f-ssQI%26iflsig%3DACkRmUkAA…"

    at C:\PlaywrightDemo\tests\Demo\googleParameterize.spec.js:30:28
```

# Page snapshot

```yaml
- separator
- iframe
- separator
- text: About this page Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
- link "Why did this happen?":
  - /url: "#"
- text: "IP address: 2401:4900:1f2c:79ac:3c55:cff8:bf28:5604 Time: 2025-05-21T11:23:44Z URL: https://www.google.com/search?q=selenium+vs+cucumber&sca_esv=e7ca8cbc53cd9f33&source=hp&ei=u7ctaPawG82rvr0P6f-ssQI&iflsig=ACkRmUkAAAAAaC3Fy8lLmIaxFm84hdY7lzWJI0WK7qoV&ved=0ahUKEwi2-p_GubSNAxXNla8BHek_KyYQ4dUDCA8&uact=5&oq=selenium+vs+cucumber&gs_lp=Egdnd3Mtd2l6IhRzZWxlbml1bSB2cyBjdWN1bWJlcjIKEC4YAxjqAhiPATIKEC4YAxjqAhiPATIKEC4YAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPAUjbAVCkAVikAXABeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgGgAiCoAgqYAyDxBW3x2a9mjflykgcBMaAHALIHALgHAA&sclient=gws-wiz&sei=v7ctaNT6Cf6e4-EPxaWbiAg"
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
  16 |         // Accept cookies if the consent popup appears
  17 |         const agreeButton = page.locator('button:has-text("Accept all")');
  18 |         if (await agreeButton.isVisible()) {
  19 |             await agreeButton.click();
  20 |         }
  21 |
  22 |         // Use the exact XPath to locate the search bar
  23 |         const searchBox = page.locator('//textarea[@id="APjFqb"]');
  24 |         await searchBox.click();
  25 |         await searchBox.fill(searchKeyword);
  26 |         await searchBox.press('Enter');
  27 |
  28 |         // Validate the Google logo using your SVG path locator
  29 |         const logo = page.locator("//*[name()='path' and contains(@d,'M70 8.56v1')]");
> 30 |         await expect(logo).toBeVisible();
     |                            ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  31 |
  32 |         await page.waitForTimeout(5000);
  33 |     });
  34 | }
  35 |
```