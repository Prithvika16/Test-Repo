const { test, expect } = require('@playwright/test');
test('Checkboxes - In Playwright', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/#')
    await page.locator('#sunday').check()
    await expect(page.locator('#sunday')).toBeChecked()
    await page.waitForTimeout(5000)

    await page.locator('#sunday').uncheck()
    expect(await page.locator('#sunday').isChecked()).toBeFalsy()
    await page.waitForTimeout(5000)

    const checkboxes = ["//input[@id='monday']", "//input[@id='sunday']","//input[@id='friday']"]

    for (const check of checkboxes){
        await page.locator(check).check()
    }
    await page.waitForTimeout(5000)
    for(const check of checkboxes){
        await page.locator(check).uncheck()
    }
    await page.waitForTimeout(5000)
    await page.close()
})