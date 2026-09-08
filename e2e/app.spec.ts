import { expect, test } from '@playwright/test';

test('application loads in Chromium', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('LifePlanner');
});
