Feature: Demo Online Shopping

    Scenario: I am buying a backpack
        Given I am logged in to the shopping site
        When I add an item to the cart
        And I complete the checkout process
        Then I receive confirmation that my purchase was successful