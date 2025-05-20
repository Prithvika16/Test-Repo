# Test info

- Name: Login to PracticeTestAutomation using locators and validate title & URL
- Location: C:\PlaywrightDemo\tests\PracticeTests\Locators\PracticeTestAutomation.spec.js:3:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)

Locator: locator('a.button')
Expected string: "Log out"
Received: <element(s) not found>
Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('a.button')

    at C:\PlaywrightDemo\tests\PracticeTests\Locators\PracticeTestAutomation.spec.js:26:42
```

# Page snapshot

```yaml
- link "Press \"Enter\" to skip to content":
  - /url: "#main-container"
- banner:
  - navigation
  - link "Practice Test Automation":
    - /url: https://practicetestautomation.com/
    - img "Practice Test Automation"
  - navigation:
    - navigation:
      - list:
        - listitem:
          - link "Home":
            - /url: https://practicetestautomation.com/
        - listitem:
          - link "Practice":
            - /url: https://practicetestautomation.com/practice/
        - listitem:
          - link "Courses":
            - /url: https://practicetestautomation.com/courses/
        - listitem:
          - link "Blog":
            - /url: https://practicetestautomation.com/blog/
        - listitem:
          - link "Contact":
            - /url: https://practicetestautomation.com/contact/
- main:
  - article:
    - heading "Logged In Successfully" [level=1]
    - paragraph:
      - strong: Congratulations student. You successfully logged in!
    - link "Log out":
      - /url: https://practicetestautomation.com/practice-test-login/
    - paragraph
- contentinfo:
  - text: © Copyright 2020
  - link "Practice Test Automation.":
    - /url: https://practicetestautomation.com/
  - text: All rights reserved |
  - link "Privacy Policy":
    - /url: https://practicetestautomation.com/privacy-policy/
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test('Login to PracticeTestAutomation using locators and validate title & URL', async ({ page }) => {
   4 |   // Step 1: Navigate to login page
   5 |   await page.goto('https://practicetestautomation.com/practice-test-login/');
   6 |
   7 |   // Step 2: Fill username using ID
   8 |   await page.locator('#username').fill('student');
   9 |
  10 |   // Step 3: Fill password using name attribute
  11 |   await page.locator('[name="password"]').fill('Password123');
  12 |
  13 |   // Step 4: Click login using XPath
  14 |   await page.locator('//button[@id="submit"]').click();
  15 |
  16 |   // Step 5: Validate post-login URL
  17 |   await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
  18 |
  19 |   // Step 6: Validate page title (post-login title is known)
  20 |   await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
  21 |
  22 |   // Step 7: Assert success message or heading
  23 |   await expect(page.locator('h1')).toHaveText('Logged In Successfully');
  24 |
  25 |   // Optional: Check for logout button (extra confidence)
> 26 |   await expect(page.locator('a.button')).toHaveText('Log out');
     |                                          ^ Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)
  27 | });
  28 |
```