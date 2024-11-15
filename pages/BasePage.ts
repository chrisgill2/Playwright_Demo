import { Page } from "@playwright/test";
import { YamlLoader } from '../helpers/yaml-loader';

export class BasePage {
    readonly page: Page;
    protected yamlLoader: YamlLoader | undefined;
    protected testPassed: boolean = true;
    protected properties: any;
    data: any;

    constructor(page: Page) {
        this.page = page;
        var PropertiesReader = require('properties-reader');
        this.properties = PropertiesReader('config/demo.properties');
    }

    async setTestData(testData: any, testName: string) {
        this.data = testData[testName];
    }

    public loadTestData(fileName: string, testName: string) {
        this.yamlLoader = new YamlLoader(fileName);
        var testData = this.yamlLoader.getData();
        this.data = testData[testName];
    }

    public async goto(url: string) {
        await this.page.goto(url);
    }

    protected async clickButtonByLabelText(detail: string) {
        await this.page.locator('label').filter({hasText: detail}).click();
    }

    protected async clickButtonByExactText(detail: string) {
        await this.page.getByText(detail, { exact: true }).click();
    }
}