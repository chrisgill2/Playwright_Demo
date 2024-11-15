import { test as base, createBdd } from 'playwright-bdd';
import { CartPage } from '../../pages/demo/CartPage'; 
import { CheckoutPage } from '../../pages/demo/CheckoutPage'; 
import { LoginPage } from '../../pages/demo/LoginPage'; 
import { ProductPage } from '../../pages/demo/ProductPage'; 

type Fixtures = {
    poms: {
        loginPage: LoginPage;
        cartPage: CartPage;
        checkoutPage: CheckoutPage;
        productPage: ProductPage;
    }
};

export const test = base.extend<Fixtures>({
    poms: async ({ page }, use) => {
        const poms = {
        loginPage: new LoginPage(page),
        cartPage: new CartPage(page),
        checkoutPage: new CheckoutPage(page),
        productPage: new ProductPage(page),
    };
    await use(poms);
},
});

export const { Given, When, Then } = createBdd(test);