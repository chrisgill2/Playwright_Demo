import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from '../BasePage';

export class CheckoutPage extends BasePage {

    readonly page: Page;
    private readonly buttonBackHome: Locator;
    private readonly buttonContinue: Locator;
    private readonly buttonCancel: Locator;
    private readonly buttonFinish: Locator;
    private readonly textboxFirstName: Locator;
    private readonly textboxLastName: Locator;
    private readonly textboxPostalCode: Locator;
    private readonly textPaymentInformation: Locator;
    private readonly textboxShippingInformation: Locator;
    private readonly textPriceTotal: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.buttonBackHome = page.locator('["data-test=back-to-products"]');
        this.buttonContinue = page.locator('["data-test=continue"]');
        this.buttonCancel = page.locator('["data-test=cancel"]');
        this.buttonFinish = page.locator('["data-test=finish"]');
        this.textboxFirstName = page.locator('["data-test=firstName"]');
        this.textboxLastName = page.locator('["data-test=lastName"]');
        this.textboxPostalCode = page.locator('["data-test=postalCode"]');
        this.textPaymentInformation = page.locator('["data-test=payment-info-value"]');
        this.textPriceTotal = page.locator('["data-test=total-label"]');
        this.textboxShippingInformation = page.locator('["data-test=shipping-info-value"]');
    }

    async enterYourInformation(data: any) {
        await this.textboxFirstName.fill(data.firstName);
        await this.textboxLastName.fill(data.lastName);
        await this.textboxPostalCode.fill(data.postalCode);
    }

    async cancelCheckout() {
        await this.buttonCancel.click();
    }

    async continueCheckout() {
        await this.buttonContinue.click();
    }

    async finishCheckout() {
        await this.buttonFinish.click();
        await expect(this.page.getByText('Thank you for your order!')).toBeVisible();
        await this.buttonBackHome.click();
    }

    async verifyCheckoutInformation(data: any) {
        await expect(this.textPaymentInformation).toHaveValue(this.data.paymentInfo);
        await expect(this.textboxShippingInformation).toHaveValue(this.data.paymentInfo);
        await expect(this.textPriceTotal).toHaveValue(this.data.priceTotal);
    }
}