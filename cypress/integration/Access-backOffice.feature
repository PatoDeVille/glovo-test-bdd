Feature: Access back office

Scenario: I want to access backOffice
    Given I am logged as a restaurant
    When I navigate to the backOffice page
    And the back office page has loaded
    Then I see the back office page
