import { type Locator, type Page } from "@playwright/test";
import { BasePage } from '../BasePage';

export class ProductPage extends BasePage {
    readonly page: Page;
    private readonly buttonAddCartToBackPack: Locator;
    private readonly buttonAddToCartBikeLight: Locator;
    private readonly buttonCartIcon: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.buttonAddCartToBackPack = page.locator('[data-test="button-add-to-cart-sauce-labs-backpack"]');
        this.buttonAddToCartBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.buttonCartIcon = page.locator('[data-test="shopping-cart-link"]');
    }

    async addBackPackToCart() {
        await this.buttonAddCartToBackPack.click();
    }

    async addBikeLightToCart() {
        this.buttonAddToCartBikeLight.click();
    }

    async proceedToCart() {
        this.buttonCartIcon.click();
    }
}