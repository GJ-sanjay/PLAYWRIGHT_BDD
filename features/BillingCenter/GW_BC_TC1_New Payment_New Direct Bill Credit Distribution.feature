@GW_BC_TC1
Feature: GW_BC_TC1_New Payment_New Direct Bill Credit Distribution
    Background:
        Given User launch the BC URL and enter the valid login details
    @GW_BC_TC1 @BillingCenter
    Scenario Outline: To Verify if a Creation of payment in Billing Center can be made
        And User click on Account in the header and enter the Account number in the search field
        And User should be navigated to the Account summary screen
        And User click on Actions -> New Payment-> New direct Bill Payment
        And User "New" hyperlink should be clicked against the payment instrument field
        And User click on payment method dropdown and choose ACHEFT payment
        And User Enter the desired amount in the amount field and click on execute with out distribution button
        And User should navigate to the Payment section and verify that the ACHEFT payment was added to the list