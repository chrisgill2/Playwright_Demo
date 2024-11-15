import { type Locator, type Page } from "@playwright/test";
import { BasePage } from '../BasePage';

export class LoginPage extends BasePage {
    readonly page: Page;
    private readonly textboxUserName: Locator;
    private readonly textboxPassword: Locator;
    private readonly buttonLogin: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.textboxUserName = page.locator('[data-test="username"]');
        this.textboxPassword = page.locator('[data-test="password"]');
        this.buttonLogin = page.locator('[data-test="login-button"]');
    }

    async launchShoppingSite() {
        await this.page.goto(this.properties.get('homepage'));
    }

    async login(data: any) {
        await this.textboxUserName.fill(data.username);
        await this.textboxPassword.fill(data.password);
        await this.buttonLogin.click();
    }
}