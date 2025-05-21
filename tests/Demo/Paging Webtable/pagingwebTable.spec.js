import{test,expect} from '@playwright/test'
test('Handling webtable', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log('-----total number of rows and columns----')

    const table = page.locator("//table[@id='productTable']")
    const columns = page.locator("//table[@id='productTable']//th")
    console.log('no. of columns:',await columns.count())
    expect(await columns.count()).toBe(4)

    const rows = page.locator("//table[@id='productTable']/tbody/tr")
    console.log('no. of rows:',await rows.count())
    expect(await rows.count()).toBe(5)

    await page.waitForTimeout(5000)
    await page.close()

})