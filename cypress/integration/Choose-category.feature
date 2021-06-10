Feature: Choose a category

Scenario: I want to choose a category
    Given I am not logged in
    When I navigate to the home page
    And the home page has loaded
    Then I click in the choose a category button
    And the category menu slides in
    Then I click in "Japanese" category
    And I should see the restaurants filtered by "Japanese"
