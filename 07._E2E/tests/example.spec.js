// @ts-check
import { test, expect } from '@playwright/test';

test('can search for java in search bar', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('textbox', { name: 'Search...' }).click();
  await page.getByRole('textbox', { name: 'Search...' }).fill('java');
  await page.getByRole('button', { name: 'Search' }).click();
});
