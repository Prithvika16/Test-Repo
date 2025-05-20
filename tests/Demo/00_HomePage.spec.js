//const {test, expect}  = require('@playwright/test')
import {test, expect} from '@playwright/test'
test('Checking Browser Title', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://www.demoblaze.com/index.html')

    // Get and log the page title
    const pageTitle = await page.title();
    console.log('Page title is...:', pageTitle)

    // Assertions
    await expect(page).toHaveTitle('STORE')
    await page.close();
})

test('Checking the browser url',async({page})=>{
await page.goto('https://www.demoblaze.com/index.html')
const pageURL = await page.url();
console.log("Page URL is... :", pageURL);
 
 await expect(page).toHaveURL('https://www.hollandandbarrett.com/basket');
 await page.close();
}
)