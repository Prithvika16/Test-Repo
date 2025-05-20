import{test, expect } from '@playwright/test'
test('Radio Button', async({page}) =>{
    await page.goto('https://demo.nopcommerce.com/register')

    //await page.location('#gender-female').click()
    await page.locator('#gender-male').check()
    await page.waitForTimeout(5000)

    //Validation
    await expect(page.locator('#gender-male')).toBeChecked()
})
