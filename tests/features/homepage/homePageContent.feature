Feature: Playwright site

    Scenario: Verify tiles present in our tools section on home page
        Given The user is navigated to selectors hub home page
        Then The user verifies that 'Our Tools' section is visible on homepage
        And The user verifies that 'SelectorsHub' tile is present under our tools section on homepage