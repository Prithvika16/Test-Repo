# Test info

- Name: Login with valid credentials using locators and validate title & URL
- Location: C:\PlaywrightDemo\tests\PracticeTests\Locators\locatorsPractice.spec.js:3:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected string: "https://practice.expandtesting.com/secure"
Received string: "https://practice.expandtesting.com/login"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    8 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://practice.expandtesting.com/login"

    at C:\PlaywrightDemo\tests\PracticeTests\Locators\locatorsPractice.spec.js:17:22
```

# Page snapshot

```yaml
- paragraph:
  - link "TestifyStack":
    - /url: https://testifystack.com/
  - text: "| Email, SMS, OTP and Webhooks Testing Stack for QA & Dev"
- banner:
  - navigation "Main navigation":
    - link "SUT":
      - /url: /
      - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman."'
      - text: Practice
    - list:
      - listitem:
        - button "Demos"
      - listitem:
        - link "Tools":
          - /url: /#tools
      - listitem:
        - link "Tips":
          - /url: /tips
      - listitem:
        - link "Test Cases":
          - /url: /test-cases
      - listitem:
        - link "API Testing":
          - /url: /notes/api/api-docs/
      - listitem:
        - link "About":
          - /url: /about
    - list
    - link "Free ISTQB Mock Exams":
      - /url: https://istqb.expandtesting.com/
- main:
  - insertion:
    - iframe
  - alert:
    - text: Your password is invalid!
    - button "Close"
  - paragraph:
    - text: Do you enjoy this platform? ❤️
    - link "Buy us a coffee":
      - /url: https://www.buymeacoffee.com/expandtesting
  - navigation "breadcrumb mb-2":
    - list:
      - listitem:
        - link "Home":
          - /url: /
      - listitem: / Login Page
  - heading "Test Login page for Automation Testing Practice" [level=1]
  - paragraph: This Test Login page is designed for automation testing practice. Test various positive and negative login scenarios in a testing environment.
  - paragraph: You can use this login page for practicing with Selenium or other tools like Playwright, Cypress, etc.
  - paragraph:
    - text: Register
    - link "here":
      - /url: /register
    - text: "or Log in to the secure area with these credentials:"
  - list:
    - listitem: "Username: practice"
    - listitem: "Password: SuperSecretPassword!"
  - paragraph
  - text: Username
  - textbox "Username"
  - insertion:
    - iframe
  - text: Password
  - textbox "Password"
  - button "Login"
  - heading "How to test the login page?" [level=2]
  - paragraph: If the credentials are correct, you should see a welcome message; otherwise, you will see an error message.
  - paragraph: The login feature is essential for secure websites and is commonly used. Automating the testing of various login scenarios, including different edge cases, is crucial to ensure reliability and security.
  - heading "How Does Form-Based Authentication Work?" [level=3]
  - paragraph: "Take a look at this diagram and review the different steps:"
  - img "How Does Form-Based Authentication Work"
  - list:
    - listitem: "Step 1: A client requests access to a protected resource"
    - listitem: "Step 2: If the client is unauthenticated, the server redirects the client to a login page"
    - listitem: "Step 3: The client submits the login form to the server"
    - listitem: "Step 4: If the login succeeds, the server redirects the client to the resource. If the login fails, the client is redirected to an error page"
- insertion:
  - iframe
- contentinfo:
  - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4]
  - paragraph:
    - text: "Version: 41a43bee | Copyright"
    - link "Expand Testing":
      - /url: https://expandtesting.com/
    - text: "2025"
- img
- insertion:
  - iframe
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test('Login with valid credentials using locators and validate title & URL', async ({ page }) => {
   4 |   // Step 1: Go to login page
   5 |   await page.goto('https://practice.expandtesting.com/login');
   6 |
   7 |   // Step 2: Fill username using id
   8 |   await page.locator('#username').fill('username');
   9 |
  10 |   // Step 3: Fill password using CSS selector
  11 |   await page.locator('#password').fill('SuperSecretPassword!');
  12 |
  13 |   // Step 4: Click login using XPath
  14 |   await page.locator('//button[@type="submit"]').click();
  15 |
  16 |   // Step 5: Assert URL has changed
> 17 |   await expect(page).toHaveURL('https://practice.expandtesting.com/secure');
     |                      ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
  18 |
  19 |   // Step 6: Assert success message is visible
  20 |   await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
  21 |
  22 |   //Step 7: Assert exact title (since it does NOT change)
  23 |   await expect(page).toHaveTitle('Test Login Page for Automation Testing Practice');
  24 | });
  25 |
```