import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('search').locator('div').first().click();
  await page.getByRole('combobox', { name: 'Search' }).fill('data driven testing in playwright');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright data driven testing javascript');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.locator('.ytSearchboxComponentInputBox').click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright test data management');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.locator('.ytSearchboxComponentInputBox').click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright performance github');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
});