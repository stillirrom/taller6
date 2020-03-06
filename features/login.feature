Feature: Login into Ghost
    As an user I want to authenticate myself within Ghost website in order to administrate my blog

    Scenario Outline: Login failed with wrong inputs
        Given I go to Ghost login screen
        And I fill with <email> and <password>
        When I try to login
        Then I expect to see <error>
        Then The button text should be <text>

        Examples:
            | email          | password | error                                  | text      |
            |                |          | "Please fill out the form to sign in." | "Retry"   |
            | miso@gmail.com | 1234     | "Access denied."                       | "Sign in" |

    Scenario Outline: Login success with correct inputs
        Given I go to Ghost login screen
        And I fill with <email> and <password>
        When I try to login
        Then The title "Prueba" should be displayed
        And The url should be <url>

        Examples:
            | email                   | password        | url                                  |
            | jc.piza@uniandes.edu.co | tRjX$FapKvGsz5G | "http://localhost:2368/ghost/#/site" |