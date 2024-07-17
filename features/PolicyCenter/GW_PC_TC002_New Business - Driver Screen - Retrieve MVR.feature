@GW_PC_TC002
Feature: GW_PC_TC002_New Business_MVR details in Motor Vehicle Record
    Background:
        Given User is on login page
        And User enter username and password
        And User verify LoginTitle

    @Smoke @GW_PC_TC002 @Regression
    Scenario Outline: To verify that user is able to see the MVR details in Motor Vehicle Record tab after click on Retrieve option
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
        When User enter all mandatory fields and click Update
            | Address 1 | ZIP Code | Address Type | Producer Code                    |
            | 123 ABC   | 85001    | Billing      | INT-3 Internal Producer Code - 3 |
        Then User should verify accountname in Account Summary page and save Account Number
        Then User should view "Account File Summary" in Account Summary page
        When User click New Submission in Actions menu on Account Summary page
        When User should verify "Personal Auto" in LOB page
        When User select Personal Auto LOB in LOB page
        Then User should view "Offerings" in Offering page
        When User select "<Offering Selection>" in Offering Selection and click Next
        Then User should verify "Qualification" in Qualification page
        When User click Next in Qualification page
        Then User should view "Policy Info" in Policy Info page
        When User click Next in Policy Info page
        Then User should view "Drivers" in Drivers page
        When User select Account Holder from Existing Driver in Add dropdown
        And User enter contact details of driver "<Date of Birth>" "<License No.>" "<License State>"
        And User enter details in roles and Retrive MVR "<Year First Licensed>"
        Then User should verify MVR Status "Ordered"
        And User should view the MVR details in Motor Vehicle Record tab after click on Retrieve option
        When User click Next in Drivers page
        Then User should view "Vehicles" in Vehicles page
        When User click Create Vehicle enter mandatory details "<VIN>" "<VLicense State>" "<CostNew>"
        And User Assign driver in Add dropdown and click Next
        Then User should view "PA Coverages" in Coverages page
        When User click Next in Coverages page
        Then User should view "Risk Analysis" in Risk Analysis page
        When User click Next in Risk Analysis page
        Then User should view "Policy Review" in Policy Review page
        When User click Quote in Policy Review page
        Then User should view "Quote" in Quote page
        When User click Issue Policy in Bind Options dropdown and click OK
        Then User should view "Submission Bound" in Submission Bound page
        When User click View Your Policy in Submission Bound page
        Then User should verify "Policy File" and save Policy Number

        Examples:
            | firstname | lastname | Offering Selection | Date of Birth | License No. | License State | Year First Licensed | VIN               | VLicense State | CostNew |
            | Test      | Policy   | Basic Program      | 02/07/1996    | A98765432   | Arizona       | 2015                | 2FMDK51C99BA83243 | Arizona        | 2000    |


