Feature: Create User
  As user I want to Create a user into GAP vactions application

  Scenario: Create User successfull
    Given an application
    And the user logs in with valid credentials
    When the user try to create a new employee
    Then User should be create
    And the user want to see where is your user register

  Scenario: Delete User
    Given an application
    And the user logs in with valid credentials
    When the user delete the user created previously
    Then the user should not exist         
