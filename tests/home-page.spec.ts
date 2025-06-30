import { test, expect } from '@playwright/test';
import * as percySnapshot from '@percy/playwright';
import { HomePage } from '../pages/home-page';



test('Visual Comparison Test Demo', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.cookiesPopup.verifyPopupVisible();

  await percySnapshot.default(page, 'Cookies popup', { scope: '#cookiescript_injected' });

  await homePage.cookiesPopup.verifyAcceptAllButtonVisible();
  await homePage.cookiesPopup.clickAcceptAllBtn();
  await homePage.cookiesPopup.verifyPopupNotVisible();

  await homePage.verifyCookiesBadgeVisible();

  // added comment
  // another commen

  await percySnapshot.default(page, 'Home page');
});

