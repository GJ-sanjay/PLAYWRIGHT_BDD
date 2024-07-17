@GW_BC_TC409
Feature: GW_BC_TC1_New Payment_New Direct Bill Credit Distribution
    Background:
        Given User launch the BC URL and enter the valid login details
    @GW_BC_TC409 @BillingCenter
    Scenario Outline: To vérifie whether the user is able to Create New Account with new policy
        And User click on Account in the header and click on New Account
        And User should Navigate to New Account Screen and enter all mandatory fields
        And User click on "Add New Person" in Contacts
        And User enter all mandatory fields in Add Account contact
        And User click on Create Account button
        Then User should able to view the Account Summary Page.
        And User should Navigate to New Policy creation screen and enter all mandatory fields
        Then User should able to create New Policy
        Then User should able to view the created New Policy
        Then User should able to view Account Details
