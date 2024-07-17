const { When, Then } = require('@cucumber/cucumber');
const { PolicyCreationPage } = require('../pages/PolicyCreationPage');

let pcp = new PolicyCreationPage();

When('User should verify "Personal Auto" in LOB page', async () => {
    await pcp.verifyPA();
})

When('User select Personal Auto LOB in LOB page', async () => {
    await pcp.selectPALOB();
})

When('User should view "Offerings" in Offering page', async () => {
    await pcp.verifyOfferingScreen();
})
When('User select {string} in Offering Selection and click Next', async (offSele) => {
    await pcp.selectOfferingScreen(offSele);
})

When('User should verify "Qualification" in Qualification page', async () => {
    await pcp.verifyQualificationScreen();
})
When('User click Next in Qualification page', async () => {
    await pcp.NextQualificationScreen();
})
When('User should view "Policy Info" in Policy Info page', async () => {
    await pcp.verifyPolicyInfoScreen();
})
When('User click Next in Policy Info page', async () => {
    await pcp.NextPoolicyInfoScreen();
})
When('User should view "Drivers" in Drivers page', async () => {
    await pcp.verifyDriversScreen();
})
When('User select Account Holder from Existing Driver in Add dropdown', async () => {
    await pcp.selectExDriver();
})
When('User enter contact details of driver {string} {string} {string}', async (DOB, LNumber, LState) => {
    await pcp.enterContactDetails(DOB, LNumber, LState);
})
When('User enter details in roles and Retrive MVR {string}', async (Year) => {
    await pcp.enterRolesDetails(Year);
})
When('User should view the Retrieve MVR option in Driver Screen after adding the driver details', async()=>{
    await pcp.verifyRetrieveMVRoptioninDriverScreen();
})
When('User should view the MVR details in Motor Vehicle Record tab after click on Retrieve option', async()=>{
    await pcp.verifyRetriveDetailsInMotorVehicleRecordtab();
})
When('User should be able to view the Retrieve MVR option in Driver Screen after adding the more than one drivers', async(dataTable)=>{
    const newdriverDetails = dataTable.rawTable.slice(1);
    await pcp.verifyRetriveDetailsmorethanOneDriver(newdriverDetails);
})
When('User should verify MVR Status "Ordered"', async () => {
    await pcp.verifyMVRStatus();
})
When('User enter the New Driver deatils in Drivers Page {string}', async(year)=>{
    await pcp.enterNewDriverDetails(year);
})
When('User click Next in Drivers page', async () => {
    await pcp.NextDriverScreen();
})

When('User should view "Vehicles" in Vehicles page', async () => {
    await pcp.verifyVehiclesScreen();
})
When('User click Create Vehicle enter mandatory details {string} {string} {string}', async (vin, vLS, costn) => {
    await pcp.enterVehicleDetails(vin, vLS, costn);
})
When('User Assign driver in Add dropdown and click Next', async () => {
    await pcp.addAssignDriverToVehicles();
})
When('User should view "PA Coverages" in Coverages page', async () => {
    await pcp.verifyPACoveragesScreen();
})

When('User Validates the values present in PA-coverages screen', async()=>{
    await pcp.validatePACoveragesScreen();
})

When('User updates the values present in PA-coverages screen {string} {string} {string}',async(ALO,MLO,UMO)=>{
    await pcp.UpdatePACOveragesScreen(ALO,MLO,UMO);
})

When('User should be able to select no options under stacked limits', async ()=> {       
    await pcp.selectNoLimits();
  })

When('User should be able to select UnderInsured Motorist-property damage Limit and view it.', async ()=> {
    await pcp.viewUnderInsProDmg();
});

Then('User updates the values present in PA-coverages screen {string}', async(UMPD) =>{
    await pcp.changeUMPD();
  });
Then('User should be able to select yes under no options stacked limits', async ()=> {
    await pcp.selectyesstacklimits();
});
Then('check whether user is able to quote policy after unselecting underinsured_motorist', async ()=> {
    await pcp.unselectunderinsured();
  });

Then('User is able to see whether collision coverage is displayed or not', async()=>{
    await pcp.collisioncvrgvisible();
  });


Then('User verifies checkbox and is able to click on it', async ()=> {
    await pcp.collisioncoveragecheckbox();
  });

  
  Then('User is able to view Collision deductible', async()=> {
    await pcp.viewcollisiondeductible();
  });

  Then('User is able to select No deductible from the dropdown', async()=> {
    await pcp.selectnodeductible();
  });

  Then('User is able to select {string} from the dropdown', async (deductible)=> {
    await pcp.select250deductible(deductible);
  });

When('User click Next in Coverages page', async () => {
    await pcp.clickNextCoverages();
})
When('User should view "Risk Analysis" in Risk Analysis page', async () => {
    await pcp.verifyRiskAnalysisScreen();
})
When('User click Next in Risk Analysis page', async () => {
    await pcp.clickNextRiskAnalysis();
})
When('User click Policy Review in Policy Review page',async()=>{
    await pcp.clickPolicyReviewPage();
})
When('User should view "Policy Review" in Policy Review page', async () => {
    await pcp.verifyPolicyReview();
})
When('User click Quote in Policy Review page', async () => {
    await pcp.clickQuote();
})
When('User click PRQuote in Policy Review page', async () => {
    await pcp.clickPRQuote();
})
When('User should view "Quote" in Quote page', async () => {
    await pcp.verifyQUOTEscreen();
})
When('User click Issue Policy in Bind Options dropdown and click OK', async () => {
    await pcp.IssuePolicy();
})
When('User should view "Submission Bound" in Submission Bound page', async () => {
    await pcp.verifySubmissionBond();
})
When('User click View Your Policy in Submission Bound page', async () => {
    await pcp.clickYourPolicyinSubmissionBond();
})
When('User should verify "Policy File" and save Policy Number' ,{ timeout: 2 * 3000 }, async () => {
    await pcp.verifyPolicyFile();
})

When('User click "Commercial Auto Line" in Commercial Auto Line page', async()=>{
    await pcp.clickCommercialAutoLine();
})

When('User should verify "Commercial Auto" in LOB page', async () => {
    await pcp.verifyCommercialAuto();
})
When('User select Commercial Auto LOB in LOB page', async () => {
    await pcp.selectCommercialAutoLOB();
})
When('User enter organization {string} type', async (OT) => {
    await pcp.selectOrganizationType(OT);
})
When('User should verify "Commercial Auto Line" in Commercial Auto Line page', async () => {
    await pcp.verifyCommercialAutoLine();
})
When('User enter mandatory details in Commercial Auto Line Page {string} {string} and click Next', async (product, fleet) => {
    await pcp.enterCALineDetails(product, fleet);
})
When('User should view "Locations" in Location Details page', async () => {
    await pcp.verifyLocation();
})
When('User click Next in Location Details page', async () => {
    await pcp.NextLocationpage();
})
When('User should view "BAVehicles" in Vehicles page', async () => {
    await pcp.verifyBAVehiclespage();
})
When('User click Create BAVehicle', async () => {
    await pcp.createBAVehicle();
})
When('User verify "Vehicle Information" in Vehicle Information page', async () => {
    await pcp.verifyVehicleInformation();
})
When('User enter vehicle details {string}', async (GaragedAt) => {
    await pcp.enterVehicle(GaragedAt);
})
When('User enter Basic Vehicle Information {string}', async (VehicleType) => {
    await pcp.enterVehicleInformationDetails(VehicleType);
})
When('User click Search in Class column', async () => {
    await pcp.clickSearchClass();
})
When('User should view "Vehicle Class Code Search" in VCC Search page', async () => {
    await pcp.verifyVehicleClassCodeSearchScreen();
})
When('User select Size Class dropdown {string} click Search and select', async (sizeclass) => {
    await pcp.selectSizeClass(sizeclass);
})
When('User click OK in Vehicle Information page {string} {string} {string}', async ( VIN, LicenseState, CostNew) => {
    await pcp.clickOKVehicleinfo( VIN, LicenseState, CostNew);
})
When('User click Next in Vehicles page', async () => {
    await pcp.NextVehiclesPage();
})
When('User veiw "State Info" in State Info page', async () => {
    await pcp.verifyStateInfoPage();
})
When('User click Next in State Info page', async () => {
    await pcp.NextStateInfoPage();
})
When('User should view "BADriver" in Drivers page', async () => {
    await pcp.verifyBADriverPage();
})

When('User click Add Driver', async () => {
    await pcp.addDriver();
})
When('User should view "BADriver Details" in Driver Details page', async () => {
    await pcp.verifyBADriverDetailsPage();
})
When('User enter mandatory details and click OK', async (dataTable) => {
    const userDetails = dataTable.rawTable.slice(1);
    await pcp.enterDriverDetails(userDetails);
})
When('User should view "Covered Vehicles" in Covered Vehicles page', async () => {
    await pcp.verifyCoveredVehiclesPage();
})
When('User should view "Modifiers" in Modifiers page', async () => {
    await pcp.verifyModifiersPage();
})
When('User click Next in Modifiers page', async () => {
    await pcp.NextModifiersPage();
})

When('user should view the listed fields in Motor Vehicle Records tab and should be match with the driver details {string} {string} {string}', async(DOB,LicenseState,LicenseNumber)=>{
    await pcp.verifyMotorVehicleRecordMatch(DOB,LicenseState,LicenseNumber);
})

When('User should able to navigate to Motor Vehicle Records Screen after clicking on the MVR Report Details', async()=>{
    await pcp.verifyMVRReportDetailsScreen();
})
When('User should able to navigated the Motor Vehicle Record Screen and able to view report date ,requested date ,Years Requested, driver tab , Incident tab and Additional info tab in Motor Vehicle Record Screen', async()=>{
    await pcp.verifyMVRScreenandMVRreportDetailsTabs();
})
When('User should able to see the Mentioned columns in the MVR tab in Risk Analysis Page',async()=>{
    await pcp.verifyMVRTabinRiskAnalysisPage();
})
When('User again Navigate to Drivers tab and Check the details in Motor Vehicle Record tab', async()=>{
    await pcp.verifyMVRdetailsafterPolicyIssued();
})
When('User again Navigate to Drivers tab in Quote Page and Check the details in Motor Vehicle Record tab', async()=>{
    await pcp.verifyMVRdetailsafterPolicyQuoted();
})
When('User should click pn TowingAndLabourCheckbox', async () => {
    await pcp.clickTowingAndLabourCheckbox();
})
When('user should uncheck TowingAndLabourCheckbox', async () => {
    await pcp.uncheckTowingAndLabourCheckbox();
})
Then('Verify dropdown is not listed', async () => {
    await pcp.verifytowingandlobourdropdown();
})
When('User should view the MVR details in Risk Analysis tab after the policy is Quoted', async()=>{
    await pcp.verifyMVRdetailsinRiskAnalysistabafterPolicyQuoted();
})
When('User should view the MVR details in Risk Analysis tab after the policy is Issued', async()=>{
    await pcp.verifyMVRdetailsinRiskAnalysistabafterPolicyIssued();
})
When('User click on Actions Tab and "Navigate to the Policy Change"', async()=>{
    await pcp.naviagteToPolicyChange();
})
When('User Navigate to the drivers tab and add one more drivers and click on Retrieve MVR', async(dataTable)=>{
    let driverDetails = dataTable.rawTable.slice(1);
    await pcp.naviagteTodriverTAB(driverDetails);
})
When('User should Verify if the user is able to Quote and issue the policy', async()=>{
    await pcp.verifyIssuePolicy();
})