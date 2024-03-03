import { test, expect } from '@playwright/test';

test.use({ launchOptions: { slowMo: 500 }})

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('menu', async ({ page }) => {
  // await page.getByRole('link', { name: process.env.UN }).click();
  // await expect(page.getByRole('heading', { name: process.env.UN })).toBeVisible();
  // await page.getByRole('link', { name: /alerts/i  }).click();
  // await page.getByText('Alerts', { exact: true }).click();
  // await page.getByRole('button', { name: /notice/i  }).click();
  // await page.getByText('Notices').click();
  // await page.getByRole('link', { name: /watchlist/i  }).click();

})

test('logs user out', async ({ page }) => {
  await page.getByRole('button', { name: /Personal tools/i }).check();
  await page.getByRole('link', { name:  /Log out/i }).click();
  await expect(page.getByRole('heading', { name: /Log out/i })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log in', exact: true })).toBeVisible();
})
