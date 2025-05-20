const { test, expect } = require('@playwright/test');

test('Login to PracticeTestAutomation using locators and validate title & URL', async ({ page }) => {
  // Step 1: Navigate to login page
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Step 2: Fill username using ID
  await page.locator('#username').fill('student');

  // Step 3: Fill password using name attribute
  await page.locator('[name="password"]').fill('Password123');

  // Step 4: Click login using XPath
  await page.locator('//button[@id="submit"]').click();

  // Step 5: Validate post-login URL
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

  // Step 6: Validate page title (post-login title is known)
  await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');

  // Step 7: Assert success message or heading
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');

  // Optional: Check for logout button (extra confidence)
  await expect(page.locator('a.button')).toHaveText('Log out');
});
