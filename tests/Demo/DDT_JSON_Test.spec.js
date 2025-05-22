import{test,expect} from '@playwright/test'
//JSON -->string-->JS Object
const testdata = JSON.parse(JSON.stringify(require('../testdata/LoginTestData.json')))

for(const data of testdata){
    //1.Login to demo cart
    test(`DDT JSON LoginPage Test ${data.id} `,async({page}) =>{
        await page.goto('https://www.demoblaze.com/index.html')
        await page.getByRole('link',{name: 'Log in'}).click()
        await page.fill('#loginusername',data.username)
        await page.fill('#loginpassword',data.password)
        await page.getByRole('button',{name:'Log in'}).click()

    //2. Add items to cart
        // Add Samsung galaxy s6
        await page.click("//a[normalize-space()='Samsung galaxy s6']")
        await page.click("//a[@class='btn btn-success btn-lg']")
        await page.waitForEvent('dialog').then(dialog => dialog.accept())

        // Go back to homepage
        await page.goto('https://www.demoblaze.com/index.html')

        // Add Nokia lumia 1520
        await page.click("//a[normalize-space()='Nokia lumia 1520']")
        await page.click("//a[@class='btn btn-success btn-lg']")
        await page.waitForEvent('dialog').then(dialog => dialog.accept())

    //3. Place the order from cart
    await page.getByRole('link',{name:'Log out'}).click()
    await expect(page.getByRole('link',{name:'Log in'})).toBeVisible()
    await page.waitForTimeout(5000)
    await page.close()

    })
}