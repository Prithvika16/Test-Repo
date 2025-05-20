const { test, expect } = require('@playwright/test');

test('Rediffmail Login - Missing Username Validation', async ({ page }) => {
    // Handle the alert popup
    page.on('dialog', async dialog => {
        console.log('Dialog message:', dialog.message());
        await dialog.accept();  // Accept the popup
    });

    // Navigate to Rediffmail login page
    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

    // Fill in only the password field
    await page.locator("//input[@id='password']").fill('dummyPassword123');

    // Leave username blank and click on Login
    await page.locator("//button[@name='proceed']").click();

    // Wait for the alert to show and get handled
    await page.waitForTimeout(1000);
});
