# Test info

- Name: Test 14 - alaskatrips
- Location: C:\PlaywrightDemo\tests\PracticeTests\Practice exercises\practice.spec.js:133:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://alaskatrips.poweredbygps.com/
Call log:
  - navigating to "https://alaskatrips.poweredbygps.com/", waiting until "load"

    at C:\PlaywrightDemo\tests\PracticeTests\Practice exercises\practice.spec.js:134:16
```

# Test source

```ts
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
  129 |     await expect(page).toHaveURL('http://www.half.ebay.com');
  130 |     await page.close();
  131 | })
  132 |
  133 | test('Test 14 - alaskatrips', async ({ page }) => {
> 134 |     await page.goto('https://alaskatrips.poweredbygps.com/');
      |                ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://alaskatrips.poweredbygps.com/
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