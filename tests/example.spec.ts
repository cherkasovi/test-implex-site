import { test, expect } from '@playwright/test';
import * as percySnapshot from '@percy/playwright';

test('Visual Comparison Test Demo', async ({ page }) => {
  await page.goto('https://implex.dev/', { waitUntil: 'networkidle' });

  //expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.02 });

  await percySnapshot.default(page, 'Coockies popup', { scope: '#cookiescript_injected' });

  await page.locator('#cookiescript_accept').click();
  await expect(page.locator('#cookiescript_accept')).toBeHidden();
  await expect(page.locator('#cookiescript_badgeimage')).toBeVisible();

  // added comment
  // another comment

  await percySnapshot.default(page, 'Home page');
  const h2 = 'div.text-content > h2.title';

  await page.locator(h2).scrollIntoViewIfNeeded();

  //expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
