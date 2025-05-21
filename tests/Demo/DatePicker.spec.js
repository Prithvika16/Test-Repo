import{test,expect} from '@playwright/test'
test('DatePicker',async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //approach1 await page.fill('#datepicker','16/03/2002')if not work will go below approach
    const year = '2025'
    const month = 'March'
    const date = '16'
    await page.click('#datepicker')
    while(true){
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        const currentYear =  await page.locator('.ui-datepicker-year').textContent()
        if( currentMonth == month && currentYear == year){
            break
        }
        //await page.locator("[title='Next']").click()
        await page.locator("[title='Prev']").click()

    } // approach1 select date without loop
    await page.click(`//a[@class='ui-state-default' and text()='${date}']`);

})