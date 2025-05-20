const { test, expect } = require('@playwright/test');

test('Facebook Dropdown Options Count - Day, Month, Year', async ({ page }) => {
    await page.goto('https://www.facebook.com/r.php?entry_point=login');

    // Wait for dropdowns to be available
    await page.waitForSelector('#day');
    await page.waitForSelector('#month');
    await page.waitForSelector('#year');

    // Count the number of options in Day dropdown
    const dayOptions = await page.$$('#day option');
    console.log(`Total Days: ${dayOptions.length}`);
    expect(dayOptions.length).toBeGreaterThan(0);

    // Count the number of options in Month dropdown
    const monthOptions = await page.$$('#month option');
    console.log(`Total Months: ${monthOptions.length}`);
    expect(monthOptions.length).toBeGreaterThan(0);

    // Count the number of options in Year dropdown
    const yearOptions = await page.$$('#year option');
    console.log(`Total Years: ${yearOptions.length}`);
    expect(yearOptions.length).toBeGreaterThan(0);

    await page.waitForTimeout(3000); // Optional pause
    await page.close()
});
