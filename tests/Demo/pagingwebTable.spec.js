import{test,expect} from '@playwright/test'
test('Handling webtable', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //1.
    console.log('-----total number of rows and columns----')

    const table = page.locator("//table[@id='productTable']")
    const columns = page.locator("//table[@id='productTable']//th")
    console.log('no. of columns:',await columns.count())
    expect(await columns.count()).toBe(4)

    const rows = page.locator("//table[@id='productTable']/tbody/tr")
    console.log('no. of rows:',await rows.count())
    expect(await rows.count()).toBe(5)

    //2. select checkbox for smartwatch
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch',
    })
    await matchedRow.locator('input').check()

    //3.
    console.log('-----select multiple products by re-use function---')
    await selectProduct(rows,page, 'Tablet')
    await selectProduct(rows,page, 'Smartphone')
    await selectProduct(rows,page, 'Laptop')


    console.log('----print all product details using loop same page---------------')
//4. print all product details using loop same page
for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i)
        const tds = row.locator('td')
        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent())
        }
    }


    await page.waitForTimeout(5000)
    await page.close()

})