# Test info

- Name: OpenCart Registration, Logout, Login and Logout again
- Location: C:\PlaywrightDemo\tests\PracticeTests\Practice exercises\DemoOpencart.spec.js:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByAltText('Your Store')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByAltText('Your Store')

    at C:\PlaywrightDemo\tests\PracticeTests\Practice exercises\DemoOpencart.spec.js:9:49
```

# Page snapshot

```yaml
- main:
  - heading "demo.opencart.com" [level=1]
  - paragraph: Verifying you are human. This may take a few seconds.
  - text: demo.opencart.com needs to review the security of your connection before proceeding.
- contentinfo:
  - text: "Ray ID:"
  - code: 942b50728e93a7a9
  - text: Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=l
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('OpenCart Registration, Logout, Login and Logout again', async ({ page }) => {
   4 |
   5 |   // 1. Navigate to the OpenCart website
   6 |   await page.goto('https://demo.opencart.com/en-gb?route=account/register');
   7 |
   8 |   // 2. Check if the logo is visible using alt text
>  9 |   await expect(page.getByAltText('Your Store')).toBeVisible();
     |                                                 ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  10 |
  11 |   // 3. Click on My Account and Register
  12 |   await page.getByText('My Account').click();
  13 |   await page.getByRole('link', { name: 'Register' }).click();
  14 |
  15 |   // 4. Fill out the registration form
  16 |   await page.getByLabel('First Name').fill('Prithvika');
  17 |   await page.getByLabel('Last Name').fill('Venkateswaran');
  18 |   await page.getByLabel('E-Mail').fill('prithvikav372@gmail.com');
  19 |   await page.getByLabel('Password').fill('Prithvika@16');
  20 |
  21 |   // 5. Agree to terms and click Continue
  22 |   await page.getByLabel('I have read and agree to the Privacy Policy').check();
  23 |   await page.getByRole('button', { name: 'Continue' }).click();
  24 |
  25 |   // 6. Validate registration success page
  26 |   await expect(page).toHaveTitle(/Your Account Has Been Created/i);
  27 |   await expect(page).toHaveURL(/.*success/);
  28 |
  29 |   // 7. Click on My Account and Logout
  30 |   await page.getByText('My Account').click();
  31 |   await page.getByRole('link', { name: 'Logout' }).click();
  32 |
  33 |   // 8. Validate logout message
  34 |   await expect(page.getByRole('heading', { name: 'Account Logout' })).toBeVisible();
  35 |   await expect(page.getByText('You have been logged off your account.')).toBeVisible();
  36 |   await expect(page.getByRole('button', { name: 'Continue' })).toBeVisible();
  37 |
  38 |   // 9. Click on Continue after logout
  39 |   await page.getByRole('button', { name: 'Continue' }).click();
  40 |
  41 |   // 10. Click on My Account and Login
  42 |   await page.getByText('My Account').click();
  43 |   await page.getByRole('link', { name: 'Login' }).click();
  44 |
  45 |   // 11. Fill in login details and submit
  46 |   await page.getByLabel('E-Mail Address').fill('prithvikav372@gmail.com');
  47 |   await page.getByLabel('Password').fill('Prithvika@16');
  48 |   await page.getByRole('button', { name: 'Login' }).click();
  49 |
  50 |   // 12. Validate login (e.g., check presence of My Account link again)
  51 |   await expect(page.getByText('My Account')).toBeVisible();
  52 |
  53 |   // 13. Logout again
  54 |   await page.getByText('My Account').click();
  55 |   await page.getByRole('link', { name: 'Logout' }).click();
  56 |
  57 |   // 14. Close the browser
  58 |   await page.close();
  59 | });
  60 |
```