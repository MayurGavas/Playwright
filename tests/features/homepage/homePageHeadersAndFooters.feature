Feature: Playwright site

    Scenario: Home page headers and footers
        Given I am on home page
        When I click link "Get started"
        Then I see in title "Installation"