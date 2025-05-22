import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('selenium vs ');
  await page.getByText('selenium vs playwrightAmerican actress and singerSee more').click();
  await page.locator('iframe[name="a-7rujhfap1onl"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-7rujhfap1onl"]').contentFrame().locator('td:nth-child(3)').first().click();
  await page.locator('iframe[name="c-7rujhfap1onl"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-7rujhfap1onl"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-7rujhfap1onl"]').contentFrame().locator('tr:nth-child(3) > td').first().click();
  await page.locator('iframe[name="c-7rujhfap1onl"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('selenium vs cy');
  await page.locator('div').filter({ hasText: /^selenium vs cypress$/ }).first().click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByText('vs cucumber', { exact: true }).click();
});