import { test, expect } from '@playwright/test'

test('Mouse Hover and Click - Easy Calculation Website', async ({ page }) => {
    await page.goto('https://www.easycalculation.com/')

    // Hover over "Others"
    const othersMenu = page.locator("//a[@href='#']")
    await othersMenu.hover()

    // Click on "Facts"
    const factsLink = page.locator("//a[normalize-space()='Facts']")
    await factsLink.click()

    await page.waitForTimeout(5000)
    await page.close()
})
