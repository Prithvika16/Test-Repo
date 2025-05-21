import{test} from '@playwright/test'
//test.describe.configure({mode:'serial})
test('Page Screenshot', async({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({path:'screenshots/'+Date.now()+'Homepage.png'})

})

test('Full page screenshot', async({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({path:'screenshots/'+Date.now()+'fullpage.png',fullPage:true})

})
test('Element screenshot', async({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html')
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").screenshot({path:'screenshots/'+Date.now()+'element.png'})
    // })
    
})