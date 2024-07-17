@GW_PC_TC005 
Feature: GW_PC_TC005_New Business_MotorVehicleRecord_VehicleTab
  Background:
    Given User is on login page   

  @Smoke @GW_PC_TC005 @Regression
  Scenario Outline: To verify the Auto generated data about Motor Vehicle Record in Vehicle Screen
    When User enter username and password
    And User should verify "Actions" in Dashboard page
    And User click New Account in Actions menu
    And User enter "<firstname>" and "<lastname>" click search
    And User should view The search returned zero results in Applicant Information page
    And User click Person in Create New Account dropdown
    And User click search icon in Organization column
    And User enter "Enigma Fire & Casualty" and click Select in Search Results
    And User enter all mandatory fields and click Update
    | Address 1 | ZIP Code | Address Type | Producer Code                    |
    | MVR qa Bot| 85001    | Billing      | INT-4 Internal Producer Code - 4 |
    And User click New Submission in Actions menu on Account Summary page
    And User should verify "Personal Auto" in LOB page
    And User select Personal Auto LOB in LOB page
    And User select "<Offering Selection>" in Offering Selection and click Next
    And User should verify "Qualification" in Qualification page
    And User click Next in Qualification page
    And User click Next in Policy Info page
    And User select Account Holder from Existing Driver in Add dropdown
    And User enter contact details of driver "<Date of Birth>" "<License No.>" "<License State>"
    And User enter details in roles and Retrive MVR "<Year First Licensed>"
    And User should verify MVR Status "Ordered"
    And User should view the MVR details in Motor Vehicle Record tab after click on Retrieve option
    And User click Next in Drivers page
    And User click Create Vehicle enter mandatory details "<VIN>" "<VLicense State>" "<CostNew>"
    And User Assign driver in Add dropdown and click Next
    And User click Next in Coverages page
    And User click Next in Risk Analysis page
    And User click Quote in Policy Review page
    Then User click Issue Policy in Bind Options dropdown and click OK
    And User should view "Submission Bound" in Submission Bound page      
    Examples:
     | firstname | lastname | AccountNumber | Offering Selection | Date of Birth | License No. | License State | Year First Licensed | VIN               | VLicense State | CostNew |
     | Automation| Test     | 2483984603    | Basic Program      | 02/07/1995    | A98765432   | Arizona       | 2015                | 2FMDK51C99BA83243 | Arizona        | 2000    |
   