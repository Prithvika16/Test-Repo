# Test info

- Name: Test 4 - leafground Dropdown
- Location: C:\PlaywrightDemo\tests\PracticeTests\Practice exercises\practice.spec.js:33:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected string: "http://www.leafground.com/pages/Dropdown.html"
Received string: "https://www.leafground.com/pages/Dropdown.html"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    8 × locator resolved to <html>…</html>
      - unexpected value "https://www.leafground.com/pages/Dropdown.html"

    at C:\PlaywrightDemo\tests\PracticeTests\Practice exercises\practice.spec.js:39:24
```

# Page snapshot

```yaml
- heading "HTTP ERROR 404 Not Found" [level=2]
- table:
  - rowgroup:
    - 'row "URI: /pages/Dropdown.html"':
      - cell "URI:"
      - cell "/pages/Dropdown.html"
    - 'row "STATUS: 404"':
      - cell "STATUS:"
      - cell "404"
    - 'row "MESSAGE: Not Found"':
      - cell "MESSAGE:"
      - cell "Not Found"
    - 'row "SERVLET: default"':
      - cell "SERVLET:"
      - cell "default"
- separator
- link "Powered by Jetty:// 9.4.36.v20210114":
  - /url: https://eclipse.org/jetty
- separator
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
>  39 |     await expect(page).toHaveURL('http://www.leafground.com/pages/Dropdown.html');
      |                        ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
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
```