# Test info

- Name: Test 10 - filehosting.org
- Location: C:\PlaywrightDemo\tests\PracticeTests\Practice exercises\practice.spec.js:93:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected string: "http://www.filehosting.org/"
Received string: "https://www.filesharing.com/"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    3 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://www.filesharing.com/"

    at C:\PlaywrightDemo\tests\PracticeTests\Practice exercises\practice.spec.js:99:24
```

# Page snapshot

```yaml
- banner:
  - link "Filesharing.com":
    - /url: https://www.filesharing.com/
    - img "Filesharing.com"
  - link "Editor":
    - /url: /editor
  - link "Log in":
    - /url: https://www.filesharing.com/login
- main:
  - heading "Share large files securely and privately Filesharing - Fast and Simple to Use Create a free account now." [level=2]
  - link "Get started":
    - /url: https://www.filesharing.com/login
  - link "Log in":
    - /url: https://www.filesharing.com/login
  - text: Secure
  - paragraph: Our platform is built with security in mind. We use the latest technologies to ensure your data is safe.
  - paragraph: All our servers are located in the EU and we do not share our data with third parties.
  - text: Ease of use
  - paragraph: Just create a free account, upload some files and share them with anyone.
  - paragraph:
    - text: We allow up to 50 files per upload and a total of
    - strong: 1GB
    - text: of storage per user. Files that have not been accessed for more than 30 days will be deleted.
  - text: Share your files
  - paragraph: Share multiple files with one download link. You can even share large files up to 1GB.
  - paragraph: Please note that we do not allow any illegal, explicit or copyrighted content on this platform. If you violate our guidelines we have to suspend your account and your files will be deleted.
  - text: Magic-Login
  - paragraph: Just enter your email address and we will send you a magic link to log in.
  - paragraph: There is no need to create a password or remember one. Just click the link and you are logged in.
  - 'heading "Our guarantee: Your email address will not be shared with third parties." [level=2]'
  - paragraph: However, if you violate our terms and conditions and share files that violate applicable laws, trademarks and copyrights (e.g. pirated copies, pornography, etc.), we will fully cooperate with the authorities and rights holders. So please only upload files to our file sharing service if you are authorized to do so and are not committing any infringement.
  - heading "FAQ" [level=2]
  - heading "How do I share a file?" [level=2]
  - paragraph: Just create a free Account, upload your files and create a download Link
  - heading "How does the login process work?" [level=2]
  - paragraph:
    - text: We use a magic link login system. Go to the
    - link "Login Page":
      - /url: /login
    - text: and enter your email address. We will then send you a login link that is valid for 60 minutes. Please do not share this link, it can be used by anyone to access your account
  - heading "How many files can i upload?" [level=2]
  - paragraph: We allow up to 50 files per upload and a total of 1 GB per user
  - heading "How long are my files stored?" [level=2]
  - paragraph: If a file was not accessed for more than 30 days, it will be deleted
- contentinfo:
  - link "Imprint / Legal Notice":
    - /url: /imprint
  - separator
  - link "2025 — KV GmbH":
    - /url: https://www.kv-gmbh.de
    - text: 2025 —
    - strong: KV GmbH
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test'
   2 |
   3 | test('Test 1 - themeforest.net', async ({ page }) => {
   4 |     await page.goto('https://themeforest.net/');
   5 |     const pageTitle = await page.title();
   6 |     const pageURL = await page.url();
   7 |     console.log("Title: ", pageTitle);
   8 |     console.log("URL: ", pageURL);
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
>  99 |     await expect(page).toHaveURL('http://www.filehosting.org');
      |                        ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
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