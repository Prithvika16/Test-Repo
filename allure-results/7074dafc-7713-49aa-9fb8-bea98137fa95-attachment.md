# Test info

- Name: Autosuggested Dropdown - Easy Calculation Search
- Location: C:\PlaywrightDemo\tests\PracticeTests\Dropdown\autosuggestedExercide.spec.js:3:5

# Error details

```
Error: page.goto: Stream error in the HTTP/2 framing layer
Call log:
  - navigating to "https://www.easycalculation.com/", waiting until "load"

    at C:\PlaywrightDemo\tests\PracticeTests\Dropdown\autosuggestedExercide.spec.js:4:16
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Autosuggested Dropdown - Easy Calculation Search', async ({ page }) => {
>  4 |     await page.goto('https://www.easycalculation.com/');
     |                ^ Error: page.goto: Stream error in the HTTP/2 framing layer
   5 |
   6 |     // Fill in the search box
   7 |     await page.fill('#searchform input[type="search"]', 'age');
   8 |
   9 |     // Wait for autosuggestions to appear
  10 |     await page.waitForSelector('.searchbox-result li');
  11 |
  12 |     // Get all autosuggested options
  13 |     const suggestions = await page.$$('.searchbox-result li');
  14 |
  15 |     for (const suggestion of suggestions) {
  16 |         const text = await suggestion.textContent();
  17 |         console.log('Suggestion:', text);
  18 |
  19 |         // Click on a matching suggestion
  20 |         if (text.toLowerCase().includes('age calculator')) {
  21 |             await suggestion.click();
  22 |             break;
  23 |         }
  24 |     }
  25 |
  26 |     // Expect the title or URL to confirm navigation
  27 |     await page.waitForLoadState('networkidle');
  28 |     await expect(page).toHaveURL(/.*age-calculator.*/i);
  29 |
  30 |     // Optional wait before closing
  31 |     await page.waitForTimeout(5000);
  32 |     await page.close();
  33 | });
  34 |
```