import {test, expect} from '@playwright/test'
test('Links and Products Test', async ({page}) => {

    await page.goto('https://www.demoblaze.com/index.html')
    //Products
    //await page.waitForSelector("//div[@id='tbodyid']//div/h4/a")
    const products = await page.$$("//div[@id = 'tbodyid']//div/h4/a")

    for(const product of products){
        const textProduct = await product.textContent()
        console.log(textProduct)
        if(textProduct.includes('Sony vaio i5')){
            await product.click()
            break
        }

    }
    await expect(page.getByRole('heading',{name: 'Sony vaio i5'})).toBeVisible()
    await page.waitForTimeout(2000)
    await page.close()

})