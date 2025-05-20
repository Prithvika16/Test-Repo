import { test, expect } from '@playwright/test'

test('Test 1 - themeforest.net', async ({ page }) => {
    await page.goto('https://themeforest.net/');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('https://themeforest.net/');
    await page.close();
})

test('Test 2 - demo.opencart.com', async ({ page }) => {
    await page.goto('https://demo.opencart.com/');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('https://demo.opencart.com/');
    await page.close();
})

test('Test 3 - www.rediff.com', async ({ page }) => {
    await page.goto('https://www.rediff.com/');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('https://www.rediff.com/');
    await page.close();
})

test('Test 4 - leafground Dropdown', async ({ page }) => {
    await page.goto('http://www.leafground.com/pages/Dropdown.html');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('http://www.leafground.com/pages/Dropdown.html');
    await page.close();
})

test('Test 5 - tizag JavaScript Alert', async ({ page }) => {
    await page.goto('http://www.tizag.com/javascriptT/javascriptalert.php');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('http://www.tizag.com/javascriptT/javascriptalert.php');
    await page.close();
})

test('Test 6 - echoecho Forms', async ({ page }) => {
    await page.goto('http://www.echoecho.com/htmlforms10.htm');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('http://www.echoecho.com/htmlforms10.htm');
    await page.close();
})

test('Test 7 - leafground Home', async ({ page }) => {
    await page.goto('http://www.leafground.com/home.html');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('http://www.leafground.com/home.html');
    await page.close();
})

test('Test 8 - automationpractice.com', async ({ page }) => {
    await page.goto('http://automationpractice.com/index.php');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('http://automationpractice.com/index.php');
    await page.close();
})

test('Test 9 - Salesforce Login', async ({ page }) => {
    await page.goto('https://login.salesforce.com/?locale=in');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('https://login.salesforce.com/?locale=in');
    await page.close();
})

test('Test 10 - filehosting.org', async ({ page }) => {
    await page.goto('http://www.filehosting.org');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('http://www.filehosting.org');
    await page.close();
})

test('Test 11 - bing.com', async ({ page }) => {
    await page.goto('http://www.bing.com');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('http://www.bing.com');
    await page.close();
})

test('Test 12 - freecrm.com', async ({ page }) => {
    await page.goto('https://www.freecrm.com/');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('https://www.freecrm.com/');
    await page.close();
})

test('Test 13 - half.ebay.com', async ({ page }) => {
    await page.goto('http://www.half.ebay.com');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('http://www.half.ebay.com');
    await page.close();
})

test('Test 14 - alaskatrips', async ({ page }) => {
    await page.goto('https://alaskatrips.poweredbygps.com/');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('https://alaskatrips.poweredbygps.com/');
    await page.close();
})

test('Test 15 - qaclickacademy', async ({ page }) => {
    await page.goto('http://www.qaclickacademy.com/interview.php');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('http://www.qaclickacademy.com/interview.php');
    await page.close();
})

test('Test 16 - saucelabs login', async ({ page }) => {
    await page.goto('https://app.saucelabs.com/login');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('https://app.saucelabs.com/login');
    await page.close();
})

test('Test 17 - orangehrmlive', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/');
    await page.close();
})

test('Test 18 - only-testing-blog', async ({ page }) => {
    await page.goto('http://only-testing-blog.blogspot.com/2014/05/form.html');
    const pageTitle = await page.title();
    const pageURL = await page.url();
    console.log("Title: ", pageTitle);
    console.log("URL: ", pageURL);
    await expect(page).toHaveURL('http://only-testing-blog.blogspot.com/2014/05/form.html');
    await page.close();
})
