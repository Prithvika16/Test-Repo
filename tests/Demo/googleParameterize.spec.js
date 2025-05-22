const { test, expect } = require('@playwright/test');

const testParameters = [
    'selenium vs playwright',
    'selenium vs playwright vs cypress',
    'selenium vs cucumber',
    'selenium vs robot framework',
    'playwright automation',
    'playwright automation framework'
];

for (const searchKeyword of testParameters) {
    test(`Google search test: ${searchKeyword}`, async ({ page }) => {
        await page.goto('https://www.google.com/');

        // Accept cookies if the consent popup appears
        const agreeButton = page.locator('button:has-text("Accept all")');
        if (await agreeButton.isVisible()) {
            await agreeButton.click();
        }

        // Use the exact XPath to locate the search bar
        const searchBox = page.locator('//textarea[@id="APjFqb"]');
        await searchBox.click();
        await searchBox.fill(searchKeyword);
        await searchBox.press('Enter');

        // Validate the Google logo using your SVG path locator
        const logo = page.locator("//*[name()='path' and contains(@d,'M70 8.56v1')]");
        await expect(logo).toBeVisible();

        await page.waitForTimeout(5000);
    });
}
