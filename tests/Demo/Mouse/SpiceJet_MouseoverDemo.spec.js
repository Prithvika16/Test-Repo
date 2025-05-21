import { test, expect } from '@playwright/test'

test('Mouse Handover Test - SpiceJet Website', async ({ page }) => {
    await page.goto('https://www.spicejet.com/')

    // Hover over "SpiceClub" icon
    const spiceClubIcon = page.locator("//img[@src='https://sg-images.spicejet.com/website/MainComponent/common/ImportantLinks/clubIco.png']")
    await spiceClubIcon.hover()

    // Click on "Flights"
    const flightsLink = page.locator("//a[@class='nav-link'][normalize-space()='Flights']")
    await flightsLink.click()

    // Go back to spicejet.com home
    await page.goto('https://www.spicejet.com/')

    // Hover over "Add-ons"
    const addons = page.locator("//div[contains(text(),'Add-ons')]")
    await addons.hover()

    // Click on "SpicePlus"
    const spicePlus = page.locator("//div[@class='css-76zvg2 r-homxoj r-ubezar'][normalize-space()='SpicePlus']")
    await spicePlus.click()

    await page.waitForTimeout(5000)
    await page.close()
})
