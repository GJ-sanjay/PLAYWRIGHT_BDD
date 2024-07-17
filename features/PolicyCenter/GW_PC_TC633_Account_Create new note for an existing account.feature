@GW_PC_TC633
Feature: GW_PC_TC633_Account_Create new note for an existing account
  Background:
    Given User is on login page
    And User enter username and password
    And User verify LoginTitle
    Then User should verify "Actions" in Dashboard page
    When User click New Account in Actions menu
    Then User should verify "Enter Account Information" in Applicant Information page

  @GW_PC_TC633 @Regression @Smoke
  Scenario Outline: Account creation for Person
    When User enter "<firstname>" and "<lastname>" click search
    Then User should view The search returned zero results in Applicant Information page
    When User click Person in Create New Account dropdown
    Then User should verify Create account in Create Account page
    When User click search icon in Organization column
    Then User should Verify Organizations in Organizations page
    When User enter "Enigma Fire & Casualty" and click Select in Search Results
    When User enter all mandatory fields and click Update
      | Address 1 | ZIP Code | Address Type | Producer Code                    |
      | 123 ABC   | 85001    | Billing      | INT-3 Internal Producer Code - 3 |
    Then User should verify accountname in Account Summary page and save Account Number
    And User click on Actions button in left side menu bar and select Create New Note
    And User should navigates to New Note details screen and able to view "<Topic>" "<SL>" "<Text>"
    And User entered details and click on update the data will be saved
    And User selects Use Note Template option it navigates to keyword screen to select option based on "<Topic>" "<Type>" "<Product>"
    And User clicked on search the templates will get displayed and can able to select template and click on update
    And User can able to view the created Note from Note option from Left side menu

    Examples:
      | firstname | lastname | Topic   | SL           | Text | Topic   | Type          | Product       |
      | One       | 000      | General | Unrestricted | Test | General | Status report | Personal Auto |