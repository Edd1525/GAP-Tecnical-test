Feature: Login
  As user I want to login into GAP vactions application 

  Scenario: login successfull
    Given an application
    When the user logs in with valid credentials 
    Then the user see available information from home
