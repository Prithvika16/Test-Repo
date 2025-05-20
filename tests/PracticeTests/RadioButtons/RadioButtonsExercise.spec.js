const { test, expect } = require('@playwright/test');

test('Facebook Sign Up - Check Female Radio Button and Count All Radio Buttons', async ({ page }) => {
    await page.goto('https://www.facebook.com/r.php?entry_point=login');

    // Wait for the page to load properly
    await page.waitForLoadState('domcontentloaded');

    // Wait for the Female radio button to appear using better locator
    const femaleRadio = page.locator('input[value="1"]'); // '1' = Female, '2' = Male, '-1' = Custom
    await femaleRadio.waitFor({ state: 'visible', timeout: 10000 });

    // Check it if not already checked
    await femaleRadio.check();
    await expect(femaleRadio).toBeChecked();

    // Count all radio buttons
    const radioButtons = page.locator('input[type="radio"]');
    const count = await radioButtons.count();
    console.log(`✅ Total number of radio buttons: ${count}`);
});
