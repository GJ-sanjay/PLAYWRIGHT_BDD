@GW_PC_ExistingPolicies
Feature: GW_PC_TC634_ExistingPolicies_PA&CA

    Background:
        Given User is on login page
        And User enter username and password
        And User verify LoginTitle


    @Sanity @GW_PC_ExistingPA @Regression
    Scenario Outline: Creating Policy for PA LOB in Existing Account
        When User click New Submission in Actions menu
        Then User should verify "New Submissions" in Select Account page
        When User search account by Account Number "<AccountNumber>" and select existing account
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
            | AccountNumber | Offering Selection | Date of Birth | License No. | License State | Year First Licensed | VIN               | VLicense State | CostNew |
            | 6542064324    | Basic Program      | 02/07/1996    | A98765432   | Arizona       | 2015                | 2FMDK51C99BA83243 | Arizona        | 2000    |

    @GW_PC_ExistingCA @GW_PC_TC646 @Regression
    Scenario Outline: Creating Policy for CA LOB in Existing Account
        When User click New Submission in Actions menu
        Then User should verify "New Submissions" in Select Account page
        When User search account by Account Number "<AccountNumber>" and select existing account
        Then User should view "Account File Summary" in Account Summary page
        When User click New Submission in Actions menu on Account Summary page
        Then User should verify "Commercial Auto" in LOB page
        When User select Commercial Auto LOB in LOB page
        Then User should view "Offerings" in Offering page
        When User select "<Offering Selection>" in Offering Selection and click Next
        Then User should verify "Qualification" in Qualification page
        When User click Next in Qualification page
        Then User should view "Policy Info" in Policy Info page
        Then User enter organization "<Organization Type>" type
        When User click Next in Policy Info page
        Then User should verify "Commercial Auto Line" in Commercial Auto Line page
        When User enter mandatory details in Commercial Auto Line Page "<Product>" "<Fleet>" and click Next
        Then User should view "Locations" in Location Details page
        When User click Next in Location Details page
        Then User should view "BAVehicles" in Vehicles page
        When User click Create BAVehicle
        Then User verify "Vehicle Information" in Vehicle Information page
        When User enter vehicle details "<GaragedAt>"
        Then User enter Basic Vehicle Information "<VehicleType>"
        And User click Search in Class column
        Then User should view "Vehicle Class Code Search" in VCC Search page
        When User select Size Class dropdown "<SizeClass>" click Search and select
        Then User verify "Vehicle Information" in Vehicle Information page
        When User click OK in Vehicle Information page "<VIN>" "<LicenseState>" "<CostNew>"
        Then User should view "BAVehicles" in Vehicles page
        When User click Next in Vehicles page
        Then User veiw "State Info" in State Info page
        When User click Next in State Info page
        Then User should view "BADriver" in Drivers page
        When User click Add Driver
        Then User should view "BADriver Details" in Driver Details page
        When User enter mandatory details and click OK
            | Firstname | Lastname | Gender | DOB        | LicenseNo | LicenseState | LicenseYear |
            | John      | Doe      | Male   | 01/01/1990 | A98765432 | Arizona      | 2015        |

        Then User should view "BADriver" in Drivers page
        When User click Next in Drivers page
        Then User should view "Covered Vehicles" in Covered Vehicles page
        When User click Next in Coverages page
        Then User should view "Modifiers" in Modifiers page
        When User click Next in Modifiers page
        Then User should view "Risk Analysis" in Risk Analysis page
        When User click Next in Risk Analysis page
        Then User should view "Policy Review" in Policy Review page
        When User click Quote in Policy Review page
        When User click "Commercial Auto Line" in Commercial Auto Line page
        Then User should verify "Commercial Auto Line" in Commercial Auto Line page
        When User click Policy Review in Policy Review page
        Then User should view "Policy Review" in Policy Review page
        When User click PRQuote in Policy Review page
        When User click Issue Policy in Bind Options dropdown and click OK
        Then User should view "Submission Bound" in Submission Bound page
        When User click View Your Policy in Submission Bound page
        Then User should verify "Policy File" and save Policy Number


        Examples:
            | AccountNumber | Offering Selection | Organization Type | Product                    | Fleet               | GaragedAt               | VehicleType              | VIN               | LicenseState | CostNew | SizeClass   |
            | 6782917561    | Standard           | Common ownership  | Motor Carrier and Truckers | Fewer than 10 units | 1: 123 ABC, Phoenix, AZ | Trucks,Tractors,Trailers | 5NPE34AF4FH023266 | Arizona      | 2000    | Light truck |




