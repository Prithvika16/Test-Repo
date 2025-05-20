# Test info

- Name: Javascript Alert, confirm, Prompt in Playwright >> JS confirm - Validate confirm Text and click ok
- Location: C:\PlaywrightDemo\tests\PracticeTests\Alerts\alerts.spec.js:17:9

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('text= Click for JS confirm')
    - locator resolved to <button onclick="jsConfirm()">Click for JS Confirm</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

    at C:\PlaywrightDemo\tests\PracticeTests\Alerts\alerts.spec.js:20:59
```

# Test source

```ts
   1 | import{test,expect} from '@playwright/test'
   2 |
   3 | test.describe('Javascript Alert, confirm, Prompt in Playwright',() =>{
   4 |     test.beforeEach(async({page}) =>{
   5 |         await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
   6 |     
   7 |     })
   8 |
   9 |     test('JS Alert Validate Alert Text and Click OK', async({page}) =>{
  10 |         page.on('dialog',async(dialog) => {
  11 |         })
  12 |         await page.locator('text = Click for JS Alert').click()
  13 |         await expect(page.locator('#result')).toHaveText('You successfully clicked on Alert')
  14 |
  15 |     })
  16 |
  17 |     test('JS confirm - Validate confirm Text and click ok', async({page}) => {
  18 |         page.on('dialog', async(dialog) => {
  19 |         })
> 20 |         await page.locator('text = Click for JS confirm').click()
     |                                                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21 |         await expect(page.locator('#result')).toHaveText('You clicked: OK')
  22 |
  23 |     })
  24 |
  25 |     test('JS confirm - Validate confirm Text and click Cancel', async({page}) => {
  26 |         page.on('dialog', async(dialog) => {
  27 |         })
  28 |         await page.locator('text = Click for JS confirm').click()
  29 |         await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
  30 |
  31 |     })
  32 |
  33 |     test('JS Prompt - Input text in prompt, click OK and Validate Input Text', async({page}) => {
  34 |         page.on('dialog', async(dialog) => {
  35 |             expect(dialog.message()).toEqual('I am JS prompt')
  36 |             await dialog.accept('Welcome to Playwright Learning...!')
  37 |         })
  38 |         await page.locator('text = Click for JS confirm').click()
  39 |         await expect(page.locator('#result')).toHaveText('You entered: Welcome to Playwright Learning...!')
  40 |     })
  41 |
  42 | })
```