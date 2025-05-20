import { test, expect } from '@playwright/test';

test('OpenCart Registration, Logout, Login and Logout again', async ({ page }) => {

  // 1. Navigate to the OpenCart website
  await page.goto('https://demo.opencart.com/en-gb?route=account/register');

  // 2. Check if the logo is visible using alt text
  await expect(page.getByAltText('Your Store')).toBeVisible();

  // 3. Click on My Account and Register
  await page.getByText('My Account').click();
  await page.getByRole('link', { name: 'Register' }).click();

  // 4. Fill out the registration form
  await page.getByLabel('First Name').fill('Prithvika');
  await page.getByLabel('Last Name').fill('Venkateswaran');
  await page.getByLabel('E-Mail').fill('prithvikav372@gmail.com');
  await page.getByLabel('Password').fill('Prithvika@16');

  // 5. Agree to terms and click Continue
  await page.getByLabel('I have read and agree to the Privacy Policy').check();
  await page.getByRole('button', { name: 'Continue' }).click();

  // 6. Validate registration success page
  await expect(page).toHaveTitle(/Your Account Has Been Created/i);
  await expect(page).toHaveURL(/.*success/);

  // 7. Click on My Account and Logout
  await page.getByText('My Account').click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // 8. Validate logout message
  await expect(page.getByRole('heading', { name: 'Account Logout' })).toBeVisible();
  await expect(page.getByText('You have been logged off your account.')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Continue' })).toBeVisible();

  // 9. Click on Continue after logout
  await page.getByRole('button', { name: 'Continue' }).click();

  // 10. Click on My Account and Login
  await page.getByText('My Account').click();
  await page.getByRole('link', { name: 'Login' }).click();

  // 11. Fill in login details and submit
  await page.getByLabel('E-Mail Address').fill('prithvikav372@gmail.com');
  await page.getByLabel('Password').fill('Prithvika@16');
  await page.getByRole('button', { name: 'Login' }).click();

  // 12. Validate login (e.g., check presence of My Account link again)
  await expect(page.getByText('My Account')).toBeVisible();

  // 13. Logout again
  await page.getByText('My Account').click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // 14. Close the browser
  await page.close();
});
