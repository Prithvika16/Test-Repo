import { test, expect } from '@playwright/test'

test('DatePicker on SpiceJet - Select and Validate Today\'s Date', async ({ page }) => {
    await page.goto('https://www.spicejet.com/')
    await page.waitForLoadState('load')

    const date = '21'
    const month = 'May'
    const year = '2025'

    // Click on Departure Date section
    await page.click("//div[normalize-space()='Departure Date']")

    // Wait for the calendar to load
    await page.waitForSelector("//div[contains(@data-testid,'calendar-day')]")

    // Navigate to May 2025 if not already there
    while (true) {
        const currentMonthYear = await page.locator("//div[@data-testid='undefined-month-title']").first().textContent()
        if (currentMonthYear?.includes(month) && currentMonthYear?.includes(year)) {
            break
        }
        await page.locator("[data-testid='undefined-calendar-picker-next-month-button']").click()
        await page.waitForTimeout(300) // small wait for transition
    }

    // Select the date
    await page.click(`//div[@data-testid='undefined-calendar-day-${date}']`)

    // Validate selected date displayed in Departure Date field
    const selectedDate = await page.locator("//div[normalize-space()='Departure Date']/following-sibling::div").textContent()
    console.log('Selected Date:', selectedDate)

    expect(selectedDate?.toLowerCase()).toContain(`${date} ${month}`.toLowerCase())

    await page.waitForTimeout(3000)
    await page.close()
})
