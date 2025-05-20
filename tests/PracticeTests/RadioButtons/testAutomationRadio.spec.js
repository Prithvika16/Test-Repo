const { test, expect } = require('@playwright/test');

test('Blog Practice Site - Check Female Radio Button and Count All Radio Buttons', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/#');

    // Wait for the Female radio button to appear
    const femaleRadio = page.locator('//input[@id="female"]');
    await femaleRadio.waitFor({ state: 'visible', timeout: 10000 });

    // Check the Female radio button
    await femaleRadio.check();
    await expect(femaleRadio).toBeChecked();

    // Count and print the number of radio buttons
    const radioButtons = page.locator('input[type="radio"]');
    const count = await radioButtons.count();
    console.log(`✅ Total number of radio buttons: ${count}`);
});

