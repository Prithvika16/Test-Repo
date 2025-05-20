const { test, expect } = require('@playwright/test');

test('Login with valid credentials using locators and validate title & URL', async ({ page }) => {
  // Step 1: Go to login page
  await page.goto('https://practice.expandtesting.com/login');

  // Step 2: Fill username using id
  await page.locator('#username').fill('username');

  // Step 3: Fill password using CSS selector
  await page.locator('#password').fill('SuperSecretPassword!');

  // Step 4: Click login using XPath
  await page.locator('//button[@type="submit"]').click();

  // Step 5: Assert URL has changed
  await expect(page).toHaveURL('https://practice.expandtesting.com/secure');

  // Step 6: Assert success message is visible
  await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');

  //Step 7: Assert exact title (since it does NOT change)
  await expect(page).toHaveTitle('Test Login Page for Automation Testing Practice');
});
