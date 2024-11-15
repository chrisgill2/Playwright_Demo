import { type Locator, type Page } from "@playwright/test";
import { BasePage } from '../BasePage';

export class CartPage extends BasePage {
    readonly page: Page;
    private readonly buttonContinueShopping: Locator;
    private readonly buttonCheckout: Locator;
    private readonly buttonRemoveBackpack: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.buttonContinueShopping = page.locator('[data-test="continue-shopping"]');
        this.buttonCheckout = page.locator('[data-test="checkout"]');
        this.buttonRemoveBackpack = page.locator('[data-test="remove-sauce-labs-backpack"]');
    }
    
    async continueShopping() {
        await this.buttonContinueShopping.click();
    }

    async removeBackPackItem() {
        await this.buttonRemoveBackpack.click();
    }

    async proceedToCheckout() {
        await this.buttonCheckout.click();
    }
}