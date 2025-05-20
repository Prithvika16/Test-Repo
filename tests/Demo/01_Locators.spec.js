import { test, expect } from '@playwright/test'
test('PlayWright Locators Test', async ({page}) => {
await page.goto ('https://www.demoblaze.com/index.html');
await page.click('id=login2')//click on login button - property
await page.locator('#loginusername').fill('RaghuChaithu')// provide username - CSS
//await page.fill('#loginusername', 'RaghuChaithu')
//await page.type('#loginusername', 'RaghuChaithu')
await page.fill("input[id='loginpassword']", 'raghubn@123')// CSS
await page.click("(//button[normalize-space()='Log in'])[1]")//Xpath
const logoutlink = await page.locator("//a[normalize-space()='Log out'])[1]")
await expect(logoutlink).toBeVisible
await page.close()
})