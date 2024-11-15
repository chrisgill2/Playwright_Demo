import { test } from "../../features/steps/fixtures.ts";

test.describe("Demo Online Shopping", () => {

    test("I am buying a backpack", async ({Given, poms, When, Then }) => {
        await Given("I am logged in to the shopping site", null, { poms });
        await When("I add an item to the cart", null, { poms });
        await When("I complete the checkout process", null, { poms });
        await Then("I receive confirmation that my purchase was successful", null, { poms });
    });
});

test.use({
    $test: ({}, use) => use(test),
    $uri: ({}, use) => use("features\\demo.feature"),
    $test: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
    "Set Goals and Objectives:" : {"pickleLocation": "3:5"},
}