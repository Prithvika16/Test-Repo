import { test } from '@playwright/test'

test('Page Screenshot', async ({ page }) => {
    await page.goto('https://www.youtube.com/@testerstalk')
    await page.waitForTimeout(3000) // wait to ensure page loads
    await page.screenshot({ path: 'screenshot/' + Date.now() + 'Homepage.png' })
})

test('Full page screenshot', async ({ page }) => {
    await page.goto('https://www.youtube.com/@testerstalk')
    await page.waitForTimeout(3000)
    await page.screenshot({ path: 'screenshot/' + Date.now() + 'fullpage.png', fullPage: true })
})

test('Element screenshot', async ({ page }) => {
    await page.goto('https://www.youtube.com/@testerstalk')
    await page.waitForTimeout(3000)
    await page.locator("//ytd-topbar-logo-renderer[@id='logo']//div[@class='style-scope ytd-topbar-logo-renderer']//div")
        .screenshot({ path: 'screenshot/' + Date.now() + 'element.png' })
})
