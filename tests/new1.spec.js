import { test, expect } from '@playwright/test';

test.use({
  recordHar: {
    mode: 'minimal',
    path: 'C:\\fiverr\\sessions\\new1-session.har'
  },
  serviceWorkers: 'block'
});

test('test1', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('hello');
  await page.getByText('Hello', { exact: true }).click();
  await page.getByRole('link', { name: 'Hello (Adele song) Wikipedia https://en.wikipedia.org › wiki › Hello_(Adele_song)' }).click();
});