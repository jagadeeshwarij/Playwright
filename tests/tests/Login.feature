Feature: Amazon search and login flow

  Scenario: Search for electronics and attempt login
    Given I open the Amazon homepage
    Then I should see the Amazon link
    When I search for "Electr"
    And I click on the electronics button
    And I submit the search
    And I select delivery to India
    And I click sign in to see addresses
     And I enter email "jagadeeshwarij6@gmail.com"
    And I continue login
    And I change the claim input
    And I navigate to electronics search results
    And I delete Snap Circuits Jr item
    Then I should see the All Categories menu
    When I open the All Categories menu
    And I select Electronics category
    Then I should see Electronics section text