Feature: Ghost UI is linking right
    As an user I want to click the options to be linked to different pages

    Scenario Outline: Should navigate to right urls when clicking options
        Given I go to Ghost login screen
        And I fill with jc.piza@uniandes.edu.co and tRjX$FapKvGsz5G
        And I login
        When I click the option <optionId>
        Then The url should be <url>

        Examples:
            | optionId    | url                                  |
            | "View site" | "http://localhost:2368/ghost/#/site" |