import { test, expect } from '@playwright/test';

test('Autosuggested Dropdown - Easy Calculation Search', async ({ page }) => {
    await page.goto('https://www.easycalculation.com/');

    // Fill in the search box
    await page.fill('#searchform input[type="search"]', 'age');

    // Wait for autosuggestions to appear
    await page.waitForSelector('.searchbox-result li');

    // Get all autosuggested options
    const suggestions = await page.$$('.searchbox-result li');

    for (const suggestion of suggestions) {
        const text = await suggestion.textContent();
        console.log('Suggestion:', text);

        // Click on a matching suggestion
        if (text.toLowerCase().includes('age calculator')) {
            await suggestion.click();
            break;
        }
    }

    // Expect the title or URL to confirm navigation
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/.*age-calculator.*/i);

    // Optional wait before closing
    await page.waitForTimeout(5000);
    await page.close();
});
