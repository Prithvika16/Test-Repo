import{test,expect} from '@playwright/test'
import fs from 'fs'
import path from 'path'
import {parse} from 'csv-parse/sync'

const testdata = parse(
    fs.readFileSync(path.join(__dirname,"../testdata/LoginTestData.csv")),
    {
        columns: true,
        skip_empty_lines: true
    }
)
for(const fata of testdata){
    test(`DDT CSV Loginpage Test ${data.id}`, async({page}) =>{
        await page.goto('https://www.demoblaze.com/index.html')
        await page.getByRole('link',{name:'Login'}).click()
        await page.fill('#loginusername',data.username)
        await page.fill('#loginpassword',data.password)
        await page.getByRole('button',{name:'Log in'}).click()
        await page.getByRole('link',{name:'Log in'}).click()

        //u can also add items to cart and place order from cart
        await expect(page.getByRole('link',{name:'Log in'})).toBeVisible()

        await page.waitForTimeout(5000)
        await page.close()
    })
}