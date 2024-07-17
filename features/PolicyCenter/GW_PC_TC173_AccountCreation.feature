@accountCreation
Feature: GW_PC_TC173_AccountCreation_Person&Company
  Background:
    Given User is on login page
    And User enter username and password
    And User verify LoginTitle


   @Smoke @GW_AccountCreation_Person @Regression @GW_PC_TC173 @GW_PC_TC923
  Scenario Outline: Account creation for Person
    When User should verify "Actions" in Dashboard page
    And User click New Account in Actions menu
    Then User should verify "Enter Account Information" in Applicant Information page
    When User enter "<firstname>" and "<lastname>" click search
    Then User should view The search returned zero results in Applicant Information page
    When User click Person in Create New Account dropdown
    Then User should verify Create account in Create Account page
    When User click search icon in Organization column
    Then User should Verify Organizations in Organizations page
    When User enter "Enigma Fire & Casualty" and click Select in Search Results
    And User enter all mandatory fields and click Update
      | Address 1 | ZIP Code | Address Type | Producer Code                    |
      | 123 ABC   | 85001    | Billing      | INT-3 Internal Producer Code - 3 |
    Then User should verify accountname in Account Summary page and save Account Number
    Examples:

      | firstname | lastname |
      | One       | 000      |


  @Smoke @GW_AccountCreation_Company @Regression
  Scenario Outline: Account creation for Company
    When User should verify "Actions" in Dashboard page
    And User click New Account in Actions menu
    Then User should verify "Enter Account Information" in Applicant Information page
    When User enter "<companyname>" and click search
    Then User should view The search returned zero results in Applicant Information page
    When User click Company in Create New Account dropdown
    Then User should verify "Create account" in Create Account page
    When User click search icon in Organization column
    Then User should Verify Organizations in Organizations page
    When User enter "Enigma Fire & Casualty" and click Select in Search Results
    When User enter all mandatory fields and click Update
      | Address 1 | ZIP Code | Address Type | Producer Code                    |
      | 123 ABC   | 85001    | Billing      | INT-3 Internal Producer Code - 3 |
    Then User should verify accountname in Account Summary page and save Account Number
    Examples:
      | companyname |
      | Inc.        |

