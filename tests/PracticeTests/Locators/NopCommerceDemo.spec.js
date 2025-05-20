import {test, expect} from '@playwright/test'
test('Assertions Test', async({page}) =>{

    await page.goto('https://demo.nopcommerce.com/register') 
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register') //URL
    await expect(page).toHaveTitle('nopCommerce demo store. Register') //Title
    await expect(page.getByAltText('nopCommerce demo store. Register')).toBeVisible() //Visible
    await expect(page.getByRole('button',{name: SEARCH})).toBeEnabled() //Enabled
    await expect(page.locator('#Newsletter')).toBeChecked() //Checked
    await expect(page.locator('#register-button')).toHaveAttribute('name','register-button') //Attribute
    await expect(page.getByText('Your Password')).toHaveText('Your Password') //Text
    await expect(page.getByText('Your Password')).toContainText('Password') //ContainText

    const val = page.locator('#Company')//value
    val.fill('Prithvika')
    await expect(val).toHaveValue('Prithvika')

    const count1 = page.locator('a')
    await expect(count1).toHaveCount(61) //Count

    const count = await page.$$('a')
    expect(count.length).toBe(62)

    await page.waitForTimeout(2000)
    await page.close()


})