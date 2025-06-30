import { test, expect, Page } from '@playwright/test';

export class CookiesPopup {
    protected readonly _popup: string;
    protected readonly _acceptAllBtn: string;

    constructor(readonly page: Page) {
        this._popup = '#cookiescript_injected';
        this._acceptAllBtn = '#cookiescript_accept';
    }

    get popup() {
        return this._popup;

    }

    get acceptAllBtn() {
        return this._acceptAllBtn;
    }

    async verifyPopupVisible() {
        await test.step('Verify Cookies popup is visible', async () => {
            await expect(this.page.locator(this.popup)).toBeVisible();
        })
    }

    async verifyPopupNotVisible() {
        await test.step('Verify Cookies popup is visible', async () => {
            await expect(this.page.locator(this.popup)).toBeHidden();
        })
    }

    async verifyAcceptAllButtonVisible() {
        await test.step('Verify Accept All button is visible', async () => {
            await expect(this.page.locator(this.acceptAllBtn)).toBeVisible();
        })
    }

    async clickAcceptAllBtn() {
        await test.step('Click the Accept All button', async () => {
            await this.page.locator(this.acceptAllBtn).click();
        })
    }
}

export class HomePage {
    private readonly _url: string;
    private readonly _logo: string;
    private readonly _bookCallBtn: string;
    private readonly _cookiesPopup: CookiesPopup;
    private readonly _cookiesBadge: string;

    constructor(readonly page: Page) {
        this._url = 'https://implex.dev/';
        this._logo = 'div#mainLogo > a > div > svg';
        this._cookiesPopup = new CookiesPopup(this.page);
        this._cookiesBadge = '#cookiescript_badgeimage';
        this._bookCallBtn = 'button.green';
    };

    get url() {
        return this._url;
    }

    get logo() {
        return this._logo;
    }

    get bookCallBtn() {
        return this._bookCallBtn;
    }

    get cookiesPopup() {
        return this._cookiesPopup;
    }

    get cookiesBadge() {
        return this._cookiesBadge;
    }

    async goto() {
        await test.step('Navigate to Home page', async () => {
            await this.page.goto('https://implex.dev/', { waitUntil: 'networkidle' });
        })
    }

    async verifyLogo() {
        await test.step('Verify Logo', async () => {
            await expect(this.page.locator(this.logo)).toBeVisible();
        })
    }

    async verifyCookiesBadgeVisible() {
        await test.step('Verify Cookies badge is visible', async () => {
            await expect(this.page.locator(this.cookiesBadge)).toBeVisible();
        })
    }

}