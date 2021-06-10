Feature: Login

Scenario: I want to Login
    Given I am not logged in
    When I navigate to the home page
    And the home page has loaded
    Then I click in the sign in button
    And the login modal opens
    Then I type my username "popa@popa.com"
    And my password "Salut123"
    Then I click in the continue button
    And I see I am logged in