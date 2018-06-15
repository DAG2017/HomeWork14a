@full
Feature: user should be able to login so that user can access his/her account

    @right
    Scenario Outline: User should be able to login with valid credentials

      Given user is on login page
      When user enter Username as "<username>" and Password as "<password>"
      Then user should be able to login successfully and see welcome as "<name>"
      Examples:
        | username  | password  | name  |
        | admin     | admin     | Welcome admin   |
        | Jagdish | test123     | Welcome jagdish |


    @wrong
    Scenario Outline: User should NOT be able to login with invalid credentials

      Given user is on login page

      When user enter Username as "<username>" and Password as "<password>"

      Then user should not login

      Examples:
        | username  | password  |
        | username1 | password1 |
        | username2 | password2 |