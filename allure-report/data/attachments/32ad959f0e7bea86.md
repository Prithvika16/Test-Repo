# Test info

- Name: Assertions Test
- Location: C:\PlaywrightDemo\tests\PracticeTests\Locators\NopCommerceDemo.spec.js:2:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByAltText('nopCommerce demo store. Register')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByAltText('nopCommerce demo store. Register')

    at C:\PlaywrightDemo\tests\PracticeTests\Locators\NopCommerceDemo.spec.js:7:73
```

# Page snapshot

```yaml
- status
- link "Skip navigation":
  - /url: "#main"
- combobox "Currency selector":
  - option "US Dollar" [selected]
  - option "Euro"
- list:
  - listitem:
    - link "Register":
      - /url: /register?returnUrl=%2Fregister
  - listitem:
    - link "Log in":
      - /url: /login?returnUrl=%2Fregister
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
- link "nopCommerce demo store":
  - /url: /
  - img "nopCommerce demo store"
- textbox "Search store"
- button "Search"
- list:
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel":
      - /url: /apparel
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- main:
  - heading "Register" [level=1]
  - strong: Your Personal Details
  - text: "Gender:"
  - radio "Male"
  - text: Male
  - radio "Female"
  - text: "Female First name:"
  - textbox "First name:"
  - text: "* Last name:"
  - textbox "Last name:"
  - text: "* Email:"
  - textbox "Email:"
  - text: "*"
  - strong: Company Details
  - text: "Company name:"
  - textbox "Company name:"
  - strong: Options
  - text: "Newsletter:"
  - checkbox "Newsletter:" [checked]
  - strong: Your Password
  - text: "Password:"
  - textbox "Password:"
  - text: "* Confirm password:"
  - textbox "Confirm password:"
  - text: "*"
  - button "Register"
- strong: Information
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy notice":
      - /url: /privacy-notice
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- strong: Customer service
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- strong: My account
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /order/history
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
  - listitem:
    - link "Apply for vendor account":
      - /url: /vendor/apply
- strong: Follow us
- list:
  - listitem:
    - link "Facebook":
      - /url: https://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: https://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Instagram":
      - /url: https://www.instagram.com/nopcommerce_official
- strong: Newsletter
- textbox "Sign up for our newsletter"
- button "Subscribe"
- text: Copyright © 2025 nopCommerce demo store. All rights reserved. Powered by
- link "nopCommerce":
  - /url: https://www.nopcommerce.com/
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test'
   2 | test('Assertions Test', async({page}) =>{
   3 |
   4 |     await page.goto('https://demo.nopcommerce.com/register') 
   5 |     await expect(page).toHaveURL('https://demo.nopcommerce.com/register') //URL
   6 |     await expect(page).toHaveTitle('nopCommerce demo store. Register') //Title
>  7 |     await expect(page.getByAltText('nopCommerce demo store. Register')).toBeVisible() //Visible
     |                                                                         ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
   8 |     await expect(page.getByRole('button',{name: SEARCH})).toBeEnabled() //Enabled
   9 |     await expect(page.locator('#Newsletter')).toBeChecked() //Checked
  10 |     await expect(page.locator('#register-button')).toHaveAttribute('name','register-button') //Attribute
  11 |     await expect(page.getByText('Your Password')).toHaveText('Your Password') //Text
  12 |     await expect(page.getByText('Your Password')).toContainText('Password') //ContainText
  13 |
  14 |     const val = page.locator('#Company')//value
  15 |     val.fill('Prithvika')
  16 |     await expect(val).toHaveValue('Prithvika')
  17 |
  18 |     const count1 = page.locator('a')
  19 |     await expect(count1).toHaveCount(61) //Count
  20 |
  21 |     const count = await page.$$('a')
  22 |     expect(count.length).toBe(62)
  23 |
  24 |     await page.waitForTimeout(2000)
  25 |     await page.close()
  26 |
  27 |
  28 | })
```