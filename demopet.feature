Feature: To add pet details

  Scenario Outline: To add and check the pet details

    Given user has successfully landed on new pet UI screen
    When  user clicked on Add new pet button
    Then  user navigate to the add new pet page
    When  user has entered name, birth date and selected Pet type
    When  user clicked on Add pet button
    Then  Pet details should be successfully saved

    Examples:
      | name            | Birthdate            | Type  |
      | german shepherd | 2021-10-12           | dog   |
      