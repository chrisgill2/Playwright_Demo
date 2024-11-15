import { Given, When, Then } from "./fixtures";

Given("I am logged into the shopping site", async ({ poms }) => {
    poms.loginPage.loadTestData('demo-test.yml', 'test1');
    let data = poms.loginPage.data;

    // Log in to the shopping site
    await poms.loginPage.launchShoppingSite();
    await poms.loginPage.login(data);
});

When("I add an item to the cart", async ({ poms }) => {
    await poms.productPage.addBackPackToCart();
    await poms.productPage.proceedToCart();
    await poms.cartPage.proceedToCheckout();
});

When("I complete the checkout process", async ({ poms }) => {
    poms.checkoutPage.loadTestData('demo-test.yml', 'test1');
    let data = poms.productPage.data;

    await poms.checkoutPage.enterYourInformation(data.userDetails);
    await poms.checkoutPage.contineToCheckout()
});

Then("I receive confirmation that my purchase was successful", async ({ poms }) => {
    poms.checkoutPage.loadTestData('demo-test.yml', 'test1');
    let data = poms.productPage.data;

    // Verify the cart information and complete checkout
    poms.checkoutPage.verifyCheckoutInformation(data.checkoutDetails);
    poms.checkoutPage.finishCheckout();
});