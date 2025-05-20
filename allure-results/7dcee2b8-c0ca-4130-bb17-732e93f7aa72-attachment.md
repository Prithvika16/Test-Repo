# Test info

- Name: Full page screenshot
- Location: C:\PlaywrightDemo\tests\Demo\DemoScreenshots.spec.js:9:5

# Error details

```
Error: page.screenshot: Test timeout of 30000ms exceeded.
Call log:
  - taking page screenshot
  - waiting for fonts to load...
  - fonts loaded

    at C:\PlaywrightDemo\tests\Demo\DemoScreenshots.spec.js:12:16
```

# Test source

```ts
   1 | import { test } from '@playwright/test'
   2 |
   3 | test('Page Screenshot', async ({ page }) => {
   4 |     await page.goto('https://www.youtube.com/@testerstalk')
   5 |     await page.waitForTimeout(3000) // wait to ensure page loads
   6 |     await page.screenshot({ path: 'screenshot/' + Date.now() + 'Homepage.png' })
   7 | })
   8 |
   9 | test('Full page screenshot', async ({ page }) => {
  10 |     await page.goto('https://www.youtube.com/@testerstalk')
  11 |     await page.waitForTimeout(3000)
> 12 |     await page.screenshot({ path: 'screenshot/' + Date.now() + 'fullpage.png', fullPage: true })
     |                ^ Error: page.screenshot: Test timeout of 30000ms exceeded.
  13 | })
  14 |
  15 | test('Element screenshot', async ({ page }) => {
  16 |     await page.goto('https://www.youtube.com/@testerstalk')
  17 |     await page.waitForTimeout(3000)
  18 |     await page.locator("//ytd-topbar-logo-renderer[@id='logo']//div[@class='style-scope ytd-topbar-logo-renderer']//div")
  19 |         .screenshot({ path: 'screenshot/' + Date.now() + 'element.png' })
  20 | })
  21 |
```