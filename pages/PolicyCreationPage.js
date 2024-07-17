const { test, expect } = require("@playwright/test");
const { PassThrough } = require("stream");


const PersonalAuto = "(//div[text()='Personal Auto'])[1]",
    PAProductSelection = "//div[text()='Personal Auto']/parent::td/parent::tr/td[1]//a[text()='Select']",
    OfferingScreen = '//span[@id="SubmissionWizard:OfferingScreen:ttlBar"]',
    OfferingSelection = '//input[@id="SubmissionWizard:OfferingScreen:OfferingSelection-inputEl"]',
    Next = '//span[@id="SubmissionWizard:Next-btnInnerEl"]',
    QualificationScreen = '//span[@id="SubmissionWizard:SubmissionWizard_PreQualificationScreen:ttlBar"]',
    PolicyInfoScreen = '//span[@id="SubmissionWizard:LOBWizardStepGroup:SubmissionWizard_PolicyInfoScreen:ttlBar"]',
    PADriversScreen = "//span[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:ttlBar']",
    AddDriver = "//span[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriversLV_tb:AddDriver-btnWrap']",
    AddExistingContact = '//span[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriversLV_tb:AddDriver:AddExistingContact-textEl"]',
    UnassignedDriver = '//span[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriversLV_tb:AddDriver:AddExistingContact:0:UnassignedDriver-textEl"]',
    DateOfBirth = '//input[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:PolicyContactDetailsDV:PolicyContactRoleNameInputSet:DateOfBirth-inputEl"]',
    LicenseNumber = "//input[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:PolicyContactDetailsDV:LicenseInputSet:LicenseNumber-inputEl']",
    LicenseState = "//input[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:PolicyContactDetailsDV:LicenseInputSet:LicenseState-inputEl']",
    RolesCardTab = "//span[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:RolesCardTab-btnInnerEl']",
    Newyearlicensed = "//input[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:1:PolicyContactRolePanelSet:PolicyDriverInfoDV:yearlicensed-inputEl']",
    PADriversPanelSet = '//*[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailTitle"]/ancestor::div//img[1]',
    NumberofAccidents_policy = "(//div[@id='centerPanel']//tr//td//div//table[@class='x-grid-item']//div)[2]",
    NumberofAccidents_Account = "(//div[@id='centerPanel']//tr//td//div//table[@class='x-grid-item']//div)[3]",
    NumberofViolations_policy1 = "(//div[@id='centerPanel']//tr//td//div//table[@class='x-grid-item x-grid-item-alt']//div)[2]",
    NumberofViolations_Account1 = "(//div[@id='centerPanel']//tr//td//div//table[@class='x-grid-item x-grid-item-alt']//div)[3]",
    NumberofAV_policydropdown1 = "//li[text()='0']",
    NumberofAV_policydropdown2 = "(//li[text()='0'])[2]",
    NumberofAV_policydropdown3 = '(//*[text()="Accident/Violation Summary"]/ancestor::tr[1]/following::tr[1]//div[1]//td[3]//parent::div[1]/following::ul//li[text()="0"])[2]',
    DriversListDetailPanel = "//span[text()='Driver Details']/parent::div/following::td[1]/div",
    DriversListDetailPanel2 = '(//div[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriversLV-body"]//tr//td//div[1]//img[@class="x-grid-checkcolumn "])[2]',
    yearlicensed = "//input[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:0:PolicyContactRolePanelSet:PolicyDriverInfoDV:yearlicensed-inputEl']",
    newDriverNumberofAccidents_policy = '(//*[text()="Accident/Violation Summary"]/ancestor::tr[1]/following::tr[1]//div[1]//td[3]//parent::tr/td[2])[1]',
    newDriverNumberofViolations_policy = '(//*[text()="Accident/Violation Summary"]/ancestor::tr[1]/following::tr[1]//div[1]//td[3]//parent::tr/td[2])[2]',
    newDriverNumberofAccidents_policy1 = '(//*[text()="Accident/Violation Summary"]/ancestor::tr[1]/following::tr[1]//div[1]//td[1]//parent::tr/td[3])[1]',
    newDriverNumberofViolations_policy1 = '(//*[text()="Accident/Violation Summary"]/ancestor::tr[1]/following::tr[1]//div[1]//td[1]//parent::tr/td[3])[2]',
    mvrName = "//span[text()='Driver Details']/parent::div/following::td[2]/div",
    mvrLicense = "//span[text()='Driver Details']/parent::div/following::td[3]/div",
    mvrLicenseState = "//span[text()='Driver Details']/parent::div/following::td[4]/div",
    mvrStatus = "//span[text()='Driver Details']/parent::div/following::td[5]/div",
    mvrStatusDate = "//span[text()='Driver Details']/parent::div/following::td[6]/div",
    RetrieveMVRButton = "//span[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriversLV_tb:RetrieveMVRButton-btnInnerEl']",
    Received = '//div[text()="Received"]',
    addDriver = '//span[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriversLV_tb:AddDriver-btnInnerEl"]',
    NewPersonDriver = '//span[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriversLV_tb:AddDriver:0:ContactType-textEl"]',
    NewPersonFirstName = '//input[@id="NewPolicyDriverPopup:ContactDetailScreen:NewPolicyContactRoleDetailsCV:PolicyContactDetailsDV:PolicyContactRoleNameInputSet:GlobalPersonNameInputSet:FirstName-inputEl"]',
    PAVehiclesScreen = "//span[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:ttlBar']",
    CreateVehicle = "//span[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:PAVehiclesPanelSet:VehiclesListDetailPanel_tb:Add-btnInnerEl']",
    VIN = "//input[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:PAVehiclesPanelSet:VehiclesListDetailPanel:VehiclesDetailsCV:PersonalAuto_VehicleDV:Vin_DV-inputEl']",
    VLicenseState = "//*[@name='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:PAVehiclesPanelSet:VehiclesListDetailPanel:VehiclesDetailsCV:PersonalAuto_VehicleDV:LicenseState_DV']",
    CostNew = "//input[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:PAVehiclesPanelSet:VehiclesListDetailPanel:VehiclesDetailsCV:PersonalAuto_VehicleDV:CostNew_DV-inputEl']",
    AddassignDriver = "//span[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:PAVehiclesPanelSet:VehiclesListDetailPanel:VehiclesDetailsCV:PersonalAuto_AssignDriversDV:DriverPctLV_tb:AddDriver-btnInnerEl']",
    ExAddDriver = "//span[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:PAVehiclesPanelSet:VehiclesListDetailPanel:VehiclesDetailsCV:PersonalAuto_AssignDriversDV:DriverPctLV_tb:AddDriver:0:Driver-textEl']",
    PersonalAutoScreen = "//span[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PersonalAutoScreen:ttlBar']",
    RiskAnalysisScreen = "//span[text()='Risk Analysis']",
    PolicyReviewScreen = "//span[@id='SubmissionWizard:SubmissionWizard_PolicyReviewScreen:ttlBar']",
    PolicyReviewPage = "//span[text()='Policy Review']",
    QuoteOrReview = "//span[@id='SubmissionWizard:SubmissionWizard_PolicyReviewScreen:JobWizardToolbarButtonSet:QuoteOrReview-btnInnerEl']",
    Clear = '//span[@id="WebMessageWorksheet:WebMessageWorksheetScreen:WebMessageWorksheet_ClearButton-btnInnerEl"]',
    QuoteScreen = "//span[@id='SubmissionWizard:SubmissionWizard_QuoteScreen:ttlBar']",
    BindOptions = "//span[@id='SubmissionWizard:SubmissionWizard_QuoteScreen:JobWizardToolbarButtonSet:BindOptions-btnInnerEl']",
    BindAndIssuepolicy = "//span[@id='SubmissionWizard:SubmissionWizard_QuoteScreen:JobWizardToolbarButtonSet:BindOptions:BindAndIssue-textEl']",
    SubmissionBoundScreen = "//span[@id='JobComplete:JobCompleteScreen:ttlBar']",
    ViewPolicy = '//div[@id="JobComplete:JobCompleteScreen:JobCompleteDV:ViewPolicy-inputEl"]',
    PolicyFile = "//span[text()='Policy File']",
    PName = "//div[@id='PolicyFile_Summary:Policy_SummaryScreen:Policy_Summary_PolicyDV:Product-inputEl']",
    PolicyNumber = "//div[@id='PolicyFile_Summary:Policy_SummaryScreen:Policy_Summary_PolicyDV:PolicyNumber-inputEl']",
    effective_Date = "//*[@id='PolicyFile_Summary:Policy_SummaryScreen:Policy_Summary_DatesDV:PolicyPerEffDate-inputEl']",
    expiry_Date = "//*[@id='PolicyFile_Summary:Policy_SummaryScreen:Policy_Summary_DatesDV:PolicyPerExpirDate-inputEl']",
    policy_Transactions = "//*[@id='PolicyFile:MenuLinks:PolicyFile_PolicyFile_Jobs']",
    policy_Current_Status = "//div[@id='PolicyFile_Jobs/DetailsTitleCard']//table//table[1]//tr//td[5]//div",
    CommercialAutoScreen = "(//div[text()='Commercial Auto'])[1]",
    CommercialAutoLineLeftpage = "//span[text()='Commercial Auto Line']",
    CommercialAutoSelect = "//div[text()='Commercial Auto']/parent::td/parent::tr/td[1]//a[text()='Select']",
    OrganizationType = "//input[@id='SubmissionWizard:LOBWizardStepGroup:SubmissionWizard_PolicyInfoScreen:SubmissionWizard_PolicyInfoDV:AccountInfoInputSet:OrganizationType-inputEl']",
    AdditionalCoveragesCardTab = '//span[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BALineScreen:BALinePanelSet:AdditionalCoveragesCardTab-btnInnerEl"]',
    AdditionalCoveragesDV_tb = '//span[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BALineScreen:BALinePanelSet:AdditionalCoveragesPanelSet:AdditionalCoveragesDV_tb:Add-btnInnerEl"]',
    SearchLinksInputSet = '//a[@id="CoveragePatternSearchPopup:CoveragePatternSearchScreen:CoveragePatternSearchDV:SearchAndResetInputSet:SearchLinksInputSet:Search"]',
    AddSelectedCoverages = '(//span[text()="Add Selected Coverages"]/ancestor::div//img[1])[2]',
    AddSelectedCoverages1 = '(//span[text()="Add Selected Coverages"]/ancestor::div//img[1])[3]',
    BALineScreen = "//span[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BALineScreen:ttlBar']",
    ProductPolicyType = "//input[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BALineScreen:BALinePanelSet:BALineCoveragePanelSet:BALineDV:PolicyType-inputEl']",
    Fleet = "//input[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BALineScreen:BALinePanelSet:BALineCoveragePanelSet:BALineDV:Fleet-inputEl']",
    BALineCoveragePanelClick = "//DIV[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BALineScreen:BALinePanelSet:BALineCoveragePanelSet:BALineDV:Fleet-trigger-picker']",
    LocationsScreen = "//span[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:LocationsScreen:ttlBar']",
    BAVehiclesScreen = "//span[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BAVehiclesScreen:ttlBar']",
    CreateBAVehiclesScreen = "//a[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BAVehiclesScreen:BAVehiclesLV_tb:Add']",
    VehicleInfoScreen = "//span[@id='BAVehiclePopup:VehicleScreen:ttlBar']",
    BAGarageLocationInput = "//input[@id='BAVehiclePopup:VehicleScreen:BAVehicleCV:BAGarageLocationInputSet:BAGarageLocationInput-inputEl']",
    BAVehicleTypeInput = "//input[@id='BAVehiclePopup:VehicleScreen:BAVehicleCV:VehicleDV:Type-inputEl']",
    BAVin = "//input[@id='BAVehiclePopup:VehicleScreen:BAVehicleCV:VehicleDV:Vin-inputEl']",
    BACost = "//input[@id='BAVehiclePopup:VehicleScreen:BAVehicleCV:VehicleDV:Cost-inputEl']",
    VehicleTypepicker = "//div[@id='BAVehiclePopup:VehicleScreen:BAVehicleCV:VehicleDV:Type-trigger-picker']",
    Licensestatepicker = '//div[@id="BAVehiclePopup:VehicleScreen:BAVehicleCV:VehicleDV:LicenseState-trigger-picker"]',
    SelectClassCode = '//*[@id="BAVehiclePopup:VehicleScreen:BAVehicleCV:VehicleDV:ClassCode:SelectClassCode"]',
    SelectSearch = "//*[text()='Classification Information']/parent::*/following::div[5]",
    VehicleClassCodeSearchScreen = "//span[@id='VehicleClassCodeSearchPopup:VehicleClassCodeSearchScreen:ttlBar']",
    SizeClass = "//input[@id='VehicleClassCodeSearchPopup:VehicleClassCodeSearchScreen:VehicleClassCodeSearchDV:SizeClass-inputEl']",
    SearchLinks = "//a[@id='VehicleClassCodeSearchPopup:VehicleClassCodeSearchScreen:VehicleClassCodeSearchDV:SearchAndResetInputSet:SearchLinksInputSet:Search']",
    Vehicleselect = "//a[@id='VehicleClassCodeSearchPopup:VehicleClassCodeSearchScreen:VehicleClassCodeSearchResultsLV:0:_Select']",
    VehicleScreenOK = "//span[@id='BAVehiclePopup:VehicleScreen:Update-btnInnerEl']",
    BAStateInfoScreen = '//*[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BAStateInfoScreen:ttlBar"]',
    BADriversScreen = '//span[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BADriversScreen:ttlBar"]',
    BADriverDetailsScreen = '//span[@id="BADriverPopup:BADriverScreen:ttlBar"]',
    CoveredAutoSymbolsScreen = '//span[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:CoveredAutoSymbolsScreen:ttlBar"]',
    ModifiersScreen = '//span[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:ModifiersScreen:ttlBar"]',
    MotorVehicleRecordTab = "//span[text()='Motor Vehicle Record']",
    MotodriverName = '//div[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MotorVehicleRecordCard:PersonalMotorVehicleRecordsDV:Name-inputEl"]',
    MotordriverDOB = '//div[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MotorVehicleRecordCard:PersonalMotorVehicleRecordsDV:DOB1-inputEl"]',
    MotordriverGender = '//div[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MotorVehicleRecordCard:PersonalMotorVehicleRecordsDV:Gender-inputEl"]',
    Motordriverlicensestate = '//div[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MotorVehicleRecordCard:PersonalMotorVehicleRecordsDV:LicenseState-inputEl"]',
    Motordriverlicensenumber = '//div[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MotorVehicleRecordCard:PersonalMotorVehicleRecordsDV:LicenseNumber-inputEl"]',
    MVRReportName = '//div[@id="DriverMVRInfoPopup:MVRList:MVRDriverDV:GlobalPersonNameInputSet:NameSummary-inputEl"]',
    MVRReportDOB = '//div[@id="DriverMVRInfoPopup:MVRList:MVRDriverDV:DOB-inputEl"]',
    MVRReportGender = '//div[@id="DriverMVRInfoPopup:MVRList:MVRDriverDV:Gender-inputEl"]',
    MVRReportAddress = '//div[@id="DriverMVRInfoPopup:MVRList:MVRDriverDV:Address-inputEl"]',
    MVRReportDate = '(//span[@id="DriverMVRInfoPopup:ttlBar"]/parent::div/following::td[2])//td[1]',
    MVRRequestDate = '(//span[@id="DriverMVRInfoPopup:ttlBar"]/parent::div/following::td[2])//td[2]',
    MVRYearRequested = '(//span[@id="DriverMVRInfoPopup:ttlBar"]/parent::div/following::td[2])//td[3]',
    MVRDriverTab = '//span[@id="DriverMVRInfoPopup:MVRList:DriverCardTab-btnInnerEl"]',
    MVRIncidentsTab = '//span[@id="DriverMVRInfoPopup:MVRList:IncidentsTab-btnInnerEl"]',
    MVRAdditionalInfoTab = '//*[@id="DriverMVRInfoPopup:MVRList:AdditionalInfoTab-btnInnerEl"]',
    MotorVehicleRecordsTab = '//span[text()="Motor Vehicle Records"]',
    MVRRiskAnalysisName = "((//span[text()='Motor Vehicle Records']/ancestor::tr[2]//div)//div//tr[1])[2]//td[1]",
    MVRRiskAnalysisGender = "((//span[text()='Motor Vehicle Records']/ancestor::tr[2]//div)//div//tr[1])[2]//td[2]",
    MVRRiskAnalysisAge = "((//span[text()='Motor Vehicle Records']/ancestor::tr[2]//div)//div//tr[1])[2]//td[3]",
    MVRRiskAnalysisLicenseState = "((//span[text()='Motor Vehicle Records']/ancestor::tr[2]//div)//div//tr[1])[2]//td[4]",
    MVRRiskAnalysisMVRStatus = "((//span[text()='Motor Vehicle Records']/ancestor::tr[2]//div)//div//tr[1])[2]//td[5]",
    MVRRiskAnalysisReportDate = "((//span[text()='Motor Vehicle Records']/ancestor::tr[2]//div)//div//tr[1])[2]//td[6]",
    MVRRiskAnalysisAccidents = "((//span[text()='Motor Vehicle Records']/ancestor::tr[2]//div)//div//tr[1])[2]//td[7]",
    MVRRiskAnalysisViolations = "((//span[text()='Motor Vehicle Records']/ancestor::tr[2]//div)//div//tr[1])[2]//td[8]",
    MVRRiskAnalysisPoints = "((//span[text()='Motor Vehicle Records']/ancestor::tr[2]//div)//div//tr[1])[2]//td[9]",
    MVRRiskAnalysisDonotOrderMVR = "((//span[text()='Motor Vehicle Records']/ancestor::tr[2]//div)//div//tr[1])[2]//td[10]",
    MVRReportDetailsButton = '//span[@id="SubmissionWizard:Job_RiskAnalysisScreen:RiskAnalysisCV:MotorVehicleRecordSummary:MVRReportButton-btnInnerEl"]',
    underinsured_motorist_pd_option = '//li[normalize-space()="$50,000"]',
    Underinsured_motorist_bi_limits_dropdown = '//*[text()="Underinsured Motorist BI Limits"]/parent::label/following::div[1]',
    Auto_liability_dropdown = '//*[text()="Auto Liability Package"]/parent::label/following::div[1]',
    Medical_limit_dropdown = '//*[text()="Medical Limit"]/parent::label/following::div[1]',
    Uninsured_motorist_bi_limits_dropdown = '//*[text()="Uninsured Motorist - BI Limits"]/parent::label/following::div[1]',
    Underinsured_motorist_property_damage_dropdown = '//*[text()="Underinsured Motorist - Property Damage Limit"]/parent::label/following::div[4]',
    //checkbox values for TC072 
    no_option_stacked_limits_1 = '//*[text()="Medical Payments"]//preceding::input[1]',
    no_option_stacked_limits_2 = '//*[text()="Uninsured Motorist - Bodily Injury"]//preceding::input[1]',
    no_option_stacked_limits_3 = '//*[text()="Underinsured Motorist - Bodily Injury"]//preceding::input[1]',
    no_option_stacked_limits_4 = '//*[text()="Underinsured Motorist - Property Damage"]//preceding::input[1]',
    no_option_stacked_limits_5 = '//*[text()="Mexico Coverage - Limited"]//preceding::input[1]',
    Underinsured_motorist_property_damage_visibility = '//span[normalize-space()="Underinsured Motorist - Property Damage Limit"]',
    //79
    collision_coverage='(//*[text()="Collision"])[2]//preceding::input[1]',
    //81
    collision_coverage_dropdown='//*[text()="Collision Deductible"]//following::div[4]',
    no_deductible_option='//*[text()="No Deductible"]',
    PolicyMenuItemSet_Drivers = '//td[@id="PolicyFile:PolicyFileAcceleratedMenuActions:PolicyMenuItemSet:PolicyMenuItemSet_Drivers"]',
    MVRDetailCardTab = '//span[@id="PolicyFile_PersonalAuto_Drivers:PolicyFile_PersonalAuto_DriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MVRDetailCardTab-btnInnerEl"]',
    PersonalMotorVehicleRecords_Name = '//div[@id="PolicyFile_PersonalAuto_Drivers:PolicyFile_PersonalAuto_DriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MotorVehicleRecordCard:PersonalMotorVehicleRecordsDV:Name-inputEl"]',
    PersonalMotorVehicleRecords_DOB1 = '//div[@id="PolicyFile_PersonalAuto_Drivers:PolicyFile_PersonalAuto_DriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MotorVehicleRecordCard:PersonalMotorVehicleRecordsDV:DOB1-inputEl"]',
    PersonalMotorVehicleRecords_Gender = '//div[@id="PolicyFile_PersonalAuto_Drivers:PolicyFile_PersonalAuto_DriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MotorVehicleRecordCard:PersonalMotorVehicleRecordsDV:Gender-inputEl"]',
    PersonalMotorVehicleRecords_LicenseNumber = '//div[@id="PolicyFile_PersonalAuto_Drivers:PolicyFile_PersonalAuto_DriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MotorVehicleRecordCard:PersonalMotorVehicleRecordsDV:LicenseNumber-inputEl"]',
    PersonalMotorVehicleRecords_LicenseState = '//div[@id="PolicyFile_PersonalAuto_Drivers:PolicyFile_PersonalAuto_DriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MotorVehicleRecordCard:PersonalMotorVehicleRecordsDV:LicenseState-inputEl"]',
    PersonalMotorVehicleRecords_ReportDate = '//div[@id="PolicyFile_PersonalAuto_Drivers:PolicyFile_PersonalAuto_DriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MotorVehicleRecordCard:PersonalMotorVehicleRecordsDV:ReportDate-inputEl"]',
    PersonalMotorVehicleRecordsDV = '(//tbody[@id="PolicyFile_PersonalAuto_Drivers:PolicyFile_PersonalAuto_DriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MotorVehicleRecordCard:PersonalMotorVehicleRecordsDV-tbody"]//table//tbody//div)[2]',
    LOBWizardStepGroup_Driver = '//td[@id="SubmissionWizard:LOBWizardStepGroup:PADrivers"]',
    LOBWizardStepGroup_MVRDetailCardTab = '//a[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MVRDetailCardTab"]',
    LineWizardStepSet_MotorVehicleRecordCard = '(//tbody[@id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MotorVehicleRecordCard:PersonalMotorVehicleRecordsDV-tbody"]//table//tbody//div)[2]',
    ViewQuote = '//td[@id="SubmissionWizard:ViewQuote"]',
    TowingandLanbourcheckbox = "//input[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PersonalAutoScreen:PAPerVehiclePanelSet:VehicleCoverageDetailsCV:PersonalAuto_VehicleCoverageDetailDV:2:CoverageInputSet:CovPatternInputGroup:_checkbox']",
    TowAndLabourDropdown = "//div[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PersonalAutoScreen:PAPerVehiclePanelSet:VehicleCoverageDetailsCV:PersonalAuto_VehicleCoverageDetailDV:2:CoverageInputSet:CovPatternInputGroup:0:CovTermInputSet:OptionTermInput-inputWrap']",
    SubmissionWizard_RiskAnalysis='//td[@id="SubmissionWizard:RiskAnalysis"]',
    RiskAnalysisCV_MotorVehicleRecordTab='//a[@id="SubmissionWizard:Job_RiskAnalysisScreen:RiskAnalysisCV:MotorVehicleRecordTab"]',
    MVRdetailsinRiskAnalysistab="((//span[text()='Motor Vehicle Records']/ancestor::tr[2]//div)//div//tr[1])[1]",
    PolicyFile_RiskAnalysis='//td[@id="PolicyFile:MenuLinks:PolicyFile_PolicyFile_RiskAnalysis"]',
    PolicyFile_RiskAnalysisCV_MotorVehicleRecordTab='//span[@id="PolicyFile_RiskAnalysis:PolicyFile_RiskAnalysisScreen:PolicyFile_RiskAnalysisCV:MotorVehicleRecordTab-btnInnerEl"]',
    PolicyFileMenuActions = '//span[@id="PolicyFile:PolicyFileMenuActions-btnInnerEl"]',
    PolicyFileMenuActions_ChangePolicy = '//span[@id="PolicyFile:PolicyFileMenuActions:PolicyFileMenuActions_NewWorkOrder:PolicyFileMenuActions_ChangePolicy-textEl"]',
    StartPolicyChangeScreen = '//*[@id="StartPolicyChange:StartPolicyChangeScreen:NewPolicyChange-btnInnerEl"]',
    PolicyChangeWizard_Next = '//*[@id="PolicyChangeWizard:Next-btnInnerEl"]',
    PolicyChangeWizard_AddDriver = '//span[@id="PolicyChangeWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriversLV_tb:AddDriver-btnInnerEl"]',
    PolicyChangeWizard_AddNewPerson = "//span[text()='New Person']",
    PolicyChange_OK = '//span[@id="NewPolicyDriverPopup:ContactDetailScreen:Update-btnInnerEl"]',
    NumberofAccidentsAddedDriver = "//div[text()='Number of Accidents']/following::div[1]",
    NumberofAccidentsAddedDriver2 = "//div[text()='Number of Accidents']/following::div[2]",
    DriverDetailsPanellist2 = "(//span[text()='Driver Details']/parent::div/following::td//div/img)[3]",
    PolicyChangeWizard_MVRpanel = '(//tbody[@id="PolicyChangeWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:MotorVehicleRecordCard:PersonalMotorVehicleRecordsDV-tbody"]//div/table)[3]',
    PolicyChangeWizard_Quote = '//*[@id="PolicyChangeWizard:PolicyChangeWizard_DifferencesScreen:JobWizardToolbarButtonSet:QuoteOrReview-btnInnerEl"]',
    BindPolicyChange = '//*[@id="PolicyChangeWizard:PolicyChangeWizard_PaymentScreen:JobWizardBillingToolbarButtonSet:BindPolicyChange-btnInnerEl"]',
    PolicyChangeWizard_ViewPolicy = '//*[@id="JobComplete:JobCompleteScreen:JobCompleteDV:ViewPolicy-inputEl"]';







class PolicyCreationPage {

    async verifyPA() {
        await expect(global.page.locator(PersonalAuto)).toHaveText('Personal Auto');
    }
    async selectPALOB() {
        await global.page.locator(PAProductSelection).click();
    }
    async verifyOfferingScreen() {
        await expect(global.page.locator(OfferingScreen)).toHaveText('Offerings');
    }
    async selectOfferingScreen(offSelect) {
        await global.page.locator(OfferingSelection).fill(offSelect);
        await global.page.locator(Next).click();
    }
    async verifyQualificationScreen() {
        await expect(global.page.locator(QualificationScreen)).toHaveText('Qualification');
    }

    async NextQualificationScreen() {
        await global.page.locator(Next).click();
    }
    async verifyPolicyInfoScreen() {
        await expect(global.page.locator(PolicyInfoScreen)).toHaveText('Policy Info');
    }
    async NextPoolicyInfoScreen() {
        await global.page.locator(Next).click();
    }
    async verifyDriversScreen() {
        await expect(global.page.locator(PADriversScreen)).toHaveText('Drivers');
    }
    async selectExDriver() {
        await global.page.locator(AddDriver).click();
        await global.page.locator(AddExistingContact).click();
        await global.page.locator(UnassignedDriver).click();
    }
    async enterContactDetails(DOB, LNumber, LState) {
        await global.page.locator(DateOfBirth).fill(DOB);
        await global.page.locator(LicenseNumber).fill(LNumber);
        await global.page.locator(LicenseState).fill(LState);
    }
    async enterRolesDetails(Year) {
        await global.page.locator(RolesCardTab).click();
        //await global.page.locator(yearlicensed).fill(Year);
        await global.page.getByText('Year First Licensed').fill(Year);
        await global.page.locator(NumberofAccidents_policy).click();
        await global.page.locator(NumberofAV_policydropdown1).click();
        await global.page.locator(NumberofViolations_policy1).click();
        await global.page.locator(NumberofAV_policydropdown1).click();
        await global.page.locator(NumberofAccidents_Account).click();
        await global.page.locator(NumberofAV_policydropdown2).click();
        await global.page.locator(NumberofViolations_Account1).click();
        await global.page.locator(NumberofAV_policydropdown2).click();

        // const parent = await page.locator("//*[text()='Accident/Violation Summary']/ancestor::tr[1]/following::tr[1]");
        // const gettable = await parent.locator("//*[text()='Accident/Violation Summary']/ancestor::tr[1]/following::tr[1]//table");
        // console.log("gettable" , gettable);

    }

    async verifyMVRStatus() {
        await global.page.locator(DriversListDetailPanel).click();

        await global.page.locator(RetrieveMVRButton).click();
        await global.page.locator(DriversListDetailPanel).click();

        await global.page.locator(RetrieveMVRButton).click();

        await expect(global.page.locator(Received)).toHaveText('Received');
    }
    async verifyRetrieveMVRoptioninDriverScreen() {
        await expect(global.page.locator(RetrieveMVRButton)).toHaveText('Retrieve MVR');
        const MVRName = await global.page.locator(mvrName).textContent();
        const MVRLicense = await global.page.locator(mvrLicense).textContent();
        const MVRLicenseState = await global.page.locator(mvrLicenseState).textContent();
        const MVRStatus = await global.page.locator(mvrStatus).textContent();
        const MVRStatusDate = await global.page.locator(mvrStatusDate).textContent();
        console.log("MVR Name is " + MVRName);
        console.log("MVR License is " + MVRLicense);
        console.log("MVR License State is " + MVRLicenseState);
        console.log("MVR Status is " + MVRStatus);
        console.log("MVR Status Date " + MVRStatusDate);
        await global.page.screenshot({ path: 'Screenshots/Retrive MVR Driver Details screen .png' });
    }
    async verifyRetriveDetailsInMotorVehicleRecordtab() {
        await global.page.locator(MotorVehicleRecordTab).click();

        const pageName = await global.page.locator(MotodriverName).textContent();
        const pageDOB = await global.page.locator(MotordriverDOB).textContent();
        const pageGender = await global.page.locator(MotordriverGender).textContent();
        const pageLicenseState = await global.page.locator(Motordriverlicensestate).textContent();
        const pageLicenseNumber = await global.page.locator(Motordriverlicensenumber).textContent();

        console.log('Driver details match!');
        console.log('Name :' + pageName);
        console.log('DOB :' + pageDOB);
        console.log('Gender :' + pageGender);
        console.log('License State :' + pageLicenseState);
        console.log('License Number :' + pageLicenseNumber);

        await global.page.screenshot({ path: 'Screenshots/Retrive MVR Motor Vehicle Record tab .png' });

    }
    async verifyRetriveDetailsmorethanOneDriver(newdriverDetails) {
        await global.page.locator(addDriver).click();
        await global.page.locator(NewPersonDriver).click();
        for (const userRow of newdriverDetails) {
            const [Firstname, Lastname, DOB, Address1, ZIP, AddressType, LicenseNo, LicenseState] = userRow;
            await global.page.getByText('First name').fill(Firstname);
            await global.page.getByText('Last name').fill(Lastname);
            await global.page.getByText('Date of Birth').fill(DOB);
            await global.page.getByText('Address 1').fill(Address1);
            await global.page.getByText('ZIP Code').fill(ZIP);
            await global.page.getByText('Address Type').fill(AddressType);
            await global.page.waitForTimeout(3000);
            await global.page.getByText('License #').fill(LicenseNo);
            await global.page.getByText('License State').fill(LicenseState);
            await global.page.getByText('OK', { exact: true }).click();
        }
        await global.page.screenshot({ path: 'Screenshots/Retrive Details more than One Driver.png' });
    }
    async enterNewDriverDetails(Year) {
        //await global.page.getByText('Year First Licensed').fill(Year);
        await global.page.locator(yearlicensed).fill(Year);
        await global.page.locator(DriversListDetailPanel2).click();
        await global.page.locator(RetrieveMVRButton).click();
        await global.page.locator(newDriverNumberofAccidents_policy).click();
        await global.page.locator(NumberofAV_policydropdown1).click();
        await global.page.locator(newDriverNumberofViolations_policy).click();
        await global.page.locator(NumberofAV_policydropdown1).click();
        await global.page.locator(newDriverNumberofAccidents_policy1).click();
        await global.page.locator(NumberofAV_policydropdown2).click();
        await global.page.locator(newDriverNumberofViolations_policy1).click();
        await global.page.locator(NumberofAV_policydropdown2).click();
    }
    async NextDriverScreen() {
        await global.page.locator(Next).click();
    }
    async verifyVehiclesScreen() {
        await expect(global.page.locator(PAVehiclesScreen)).toHaveText('Vehicles');
    }
    async enterVehicleDetails(vin, vLS, costn) {
        await global.page.locator(CreateVehicle).click();
        await global.page.locator(VIN).fill(vin);
        await global.page.locator(VLicenseState).fill(vLS);
        await global.page.waitForTimeout(3000);
        await global.page.locator(CostNew).fill(costn);

    }
    async addAssignDriverToVehicles() {
        await global.page.locator(AddassignDriver).click();
        await global.page.locator(ExAddDriver).click();
        await global.page.locator(Next).click();
    }
    async verifyPACoveragesScreen() {
        await expect(global.page.locator(PersonalAutoScreen)).toHaveText('PA Coverages');
    }
    async validatePACoveragesScreen() {
        console.log("present values.")

    }
    async UpdatePACOveragesScreen(ALO, MLO, UMO) {
        function generateXPath(value) {
            return `//li[normalize-space()="${value}"]`;
        }

        const Auto_liability_option = generateXPath(ALO);
        const Medical_limit_option = generateXPath(MLO);
        const Uninsured_motorist_bi_limits_option = generateXPath(UMO);

        console.log("values changed")
        await global.page.click(Auto_liability_dropdown);
        await global.page.waitForSelector(Auto_liability_option);
        await global.page.click(Auto_liability_option);

        await global.page.click(Medical_limit_dropdown);
        await global.page.waitForSelector(Medical_limit_option);
        await global.page.click(Medical_limit_option);


        await global.page.click(Uninsured_motorist_bi_limits_dropdown);
        await global.page.waitForSelector(Uninsured_motorist_bi_limits_option);
        await global.page.click(Uninsured_motorist_bi_limits_option);
    }

    async selectNoLimits() {
        await global.page.locator(no_option_stacked_limits_1).click();
        await global.page.locator(no_option_stacked_limits_2).click();
        await global.page.locator(no_option_stacked_limits_3).click();
        await global.page.locator(no_option_stacked_limits_4).click();
        await global.page.locator(no_option_stacked_limits_5).click();
    }

    async viewUnderInsProDmg() {
        try {
            await global.page.locator(no_option_stacked_limits_4).click();
            await global.page.waitForSelector(Underinsured_motorist_property_damage_visibility, { state: 'visible' });
            console.log('Underinsured_motorist_property_damage is visible');
        }
        catch {
            console.log('Underinsured_motorist_property_damage is not visible');
        }
    }
    async changeUMPD(UMPD) {
        try {
            await global.page.locator(no_option_stacked_limits_4).click();
            await global.page.waitForSelector(Underinsured_motorist_property_damage_dropdown);
            await global.page.locator(Underinsured_motorist_property_damage_dropdown).click();
            await global.page.click(underinsured_motorist_pd_option);
            console.log("076 value changed to $50,000")
        } catch {
            console.log("unable to change value")
        }

    }
    async selectyesstacklimits() {
        await global.page.locator(no_option_stacked_limits_1).click();
        await global.page.locator(no_option_stacked_limits_2).click();
        await global.page.locator(no_option_stacked_limits_3).click();
        await global.page.locator(no_option_stacked_limits_4).click();
        await global.page.locator(no_option_stacked_limits_5).click();
    }
    async unselectunderinsured(){
        await global.page.locator(no_option_stacked_limits_4).click();
    }
    async collisioncvrgvisible() {
        await global.page.waitForSelector(collision_coverage, { state: 'visible' });
        console.log('the collision coverage is visible');
    }
    async collisioncoveragecheckbox(){
        await global.page.waitForSelector(collision_coverage,{state: 'visible'});
        await global.page.locator(collision_coverage).click();
        console.log('the checkbox is visible and checked');
    }
    async viewcollisiondeductible(){
        await global.page.waitForSelector(collision_coverage_dropdown,{state: 'visible'});
        console.log("dropdown is visible")
        await global.page.locator(collision_coverage_dropdown).click();
    }
    async selectnodeductible(){
        await global.page.locator(no_deductible_option).click();
        console.log("value changed to no deductible")
    }
    async select250deductible(deductible){
        function generateXPath(value) {
            return `//*[text()="${value}"]`;
        }
        const deduct = generateXPath(deductible);
        await global.page.waitForSelector(deduct);
        await global.page.locator(deduct).click();
    }
        
    async clickNextCoverages() {
        await global.page.locator(Next).click();
    }
    async verifyRiskAnalysisScreen() {
        await expect(global.page.locator(RiskAnalysisScreen)).toHaveText('Risk Analysis');
    }
    async clickNextRiskAnalysis() {
        await global.page.locator(Next).click();
    }
    async clickPolicyReviewPage() {
        await global.page.locator(PolicyReviewPage).click();
    }
    async verifyPolicyReview() {
        await expect(global.page.locator(PolicyReviewScreen)).toHaveText('Policy Review');
    }
    async clickQuote() {
        //await global.page.locator(QuoteOrReview).click();
        await global.page.locator(QuoteOrReview).click();

    }
    async clickPRQuote() {
        await global.page.locator(QuoteOrReview).click();

    }
    async verifyQUOTEscreen() {
        await expect(global.page.locator(QuoteScreen)).toHaveText('Quote');
    }

    async IssuePolicy() {
        await global.page.locator(BindOptions).click();
        await global.page.locator(BindAndIssuepolicy).click();
        await global.page.locator('//span[text()="OK"]').click();
    }
    async verifySubmissionBond() {
        //await expect(global.page.locator(SubmissionBoundScreen)).toHaveText('Submission Bound');
    }
    async clickYourPolicyinSubmissionBond() {
        await global.page.locator(ViewPolicy).click();
    }
    async verifyPolicyFile() {
        await expect(global.page.locator(PolicyFile)).toHaveText('Policy File');
        await global.page.waitForTimeout(3000);
        const ProductName = await global.page.locator(PName).textContent();
        const PolicyNo = await global.page.locator(PolicyNumber).textContent();
        const EffectiveDate = await global.page.locator(effective_Date).textContent();
        const ExpiryDate = await global.page.locator(expiry_Date).textContent();
        await global.page.locator(policy_Transactions).click();
        const policyCurrentStatus = await global.page.locator(policy_Current_Status).textContent();
        console.log("Product Name is " + ProductName);
        console.log("Policy Number is " + PolicyNo);
        console.log("Effective Date is " + EffectiveDate);
        console.log("Expiry Date is " + ExpiryDate);
        console.log("Policy Current Statusis " + policyCurrentStatus);
        await global.page.screenshot({ path: 'Screenshots/Policy File Page.png' });
    }
    async clickCommercialAutoLine() {
        await global.page.locator(Clear).click();
        await global.page.locator(CommercialAutoLineLeftpage).click();
        await global.page.locator(Clear).click();
        await global.page.locator(Next).click();
    }
    async verifyCommercialAuto() {
        await expect(global.page.locator(CommercialAutoScreen)).toHaveText('Commercial Auto');
    }
    async selectCommercialAutoLOB() {
        await global.page.locator(CommercialAutoSelect).click();
    }
    async selectOrganizationType(OT) {
        await global.page.locator(OrganizationType).fill(OT);
    }
    async verifyCommercialAutoLine() {
        await expect(global.page.locator(BALineScreen)).toHaveText('Commercial Auto Line');
    }
    async enterCALineDetails(product, fleet) {
        await global.page.getByText('Fleet').fill(fleet);
        await global.page.getByText('Product').fill(product);
        await global.page.locator(AdditionalCoveragesCardTab).click();
        await global.page.locator(AdditionalCoveragesDV_tb).click();
        await global.page.locator(SearchLinksInputSet).click();
        await global.page.locator(AddSelectedCoverages).click();
        await global.page.locator(AddSelectedCoverages1).click();
        await global.page.getByText('Add Selected Coverages').click();
        await global.page.getByText('Next').click();
    }
    async verifyLocation() {
        await expect(global.page.locator(LocationsScreen)).toHaveText('Locations');
    }
    async NextLocationpage() {
        await global.page.locator(Next).click();
    }
    async verifyBAVehiclespage() {
        await expect(global.page.locator(BAVehiclesScreen)).toHaveText('Vehicles');
    }
    async createBAVehicle() {
        await global.page.locator(CreateBAVehiclesScreen).click();
    }
    async verifyVehicleInformation() {
        await expect(global.page.locator(VehicleInfoScreen)).toHaveText('Vehicle Information');
    }
    async enterVehicle(GaragedAt) {
        await global.page.getByText('Garaged At').fill(GaragedAt);
        await global.page.waitForTimeout(3000);

    }
    async enterVehicleInformationDetails(VehicleType) {
        await global.page.locator(BAVehicleTypeInput).click();
        await global.page.locator(VehicleTypepicker).click();
        await global.page.getByText('Vehicle Type').fill(VehicleType);

    }
    async clickSearchClass() {
        await global.page.waitForTimeout(3000);
        await global.page.locator(SelectSearch).click();
        await global.page.locator(SelectSearch).click();
    }
    async verifyVehicleClassCodeSearchScreen() {
        await expect(global.page.locator(VehicleClassCodeSearchScreen)).toHaveText('Vehicle Class Code Search');
    }
    async selectSizeClass(sizeclass) {
        await global.page.locator(SizeClass).fill(sizeclass);
        await global.page.locator(SearchLinks).click();
        await global.page.locator(Vehicleselect).click();

    }
    async clickOKVehicleinfo(VIN, LicenseState, CostNew) {

        await global.page.getByText('VIN', { exact: true }).fill(VIN);
        await global.page.locator(Licensestatepicker).click();
        await global.page.getByText('License State', { exact: true }).fill(LicenseState);
        await global.page.waitForTimeout(3000);
        await global.page.locator(BACost).fill(CostNew);
        //await global.page.getByText('Cost' , { exact: true }).fill(CostNew);
        await global.page.locator(VehicleScreenOK).click();

    }
    async NextVehiclesPage() {
        await global.page.locator(Next).click();
    }
    async verifyStateInfoPage() {
        await expect(global.page.locator(BAStateInfoScreen)).toHaveText('State Info');
    }
    async NextStateInfoPage() {
        await global.page.locator(Next).click();
    }
    async verifyBADriverPage() {
        await expect(global.page.locator(BADriversScreen)).toHaveText('Drivers');
    }
    async addDriver() {
        await global.page.getByText('Add Driver').click();
    }
    async verifyBADriverDetailsPage() {
        await expect(global.page.locator(BADriverDetailsScreen)).toHaveText('Driver Details');
    }
    async enterDriverDetails(userDetails) {
        for (const userRow of userDetails) {
            const [Firstname, Lastname, Gender, DOB, LicenseNo, LicenseState, LicenseYear] = userRow;
            await global.page.getByText('First name').fill(Firstname);
            await global.page.getByText('Last name').fill(Lastname);
            await global.page.getByText('Gender').fill(Gender);
            await global.page.getByText('Date of Birth').fill(DOB);
            await global.page.getByText('License #').fill(LicenseNo);
            await global.page.getByText('License State').fill(LicenseState);
            await global.page.getByText('License Year').fill(LicenseYear);
            await global.page.getByText('OK').click();
        }

    }
    async verifyCoveredVehiclesPage() {
        await expect(global.page.locator(CoveredAutoSymbolsScreen)).toHaveText('Covered Vehicles');
    }
    async verifyModifiersPage() {
        await expect(global.page.locator(ModifiersScreen)).toHaveText('Modifiers');
    }
    async NextModifiersPage() {
        await global.page.locator(Next).click();
    }
    async verifyMotorVehicleRecordMatch(DOB, LicenseNumber, LicenseState) {
        const Name = await global.page.locator(mvrName).textContent();

        await global.page.locator(MotorVehicleRecordTab).click();
        // Extract details from the driver page
        const pageName = await global.page.locator(MotodriverName).textContent();
        const pageDOB = await global.page.locator(MotordriverDOB).textContent();
        const pageGender = await global.page.locator(MotordriverGender).textContent();
        const pageLicenseState = await global.page.locator(Motordriverlicensestate).textContent();
        const pageLicenseNumber = await global.page.locator(Motordriverlicensenumber).textContent();

        // Validate details
        if (pageName == Name && pageDOB == DOB && pageLicenseNumber == LicenseNumber && pageLicenseState == LicenseState) {
            console.log('Driver details match!');
            console.log('Name :' + pageName);
            console.log('DOB :' + pageDOB);
            console.log('Gender :' + pageGender);
            console.log('License State :' + pageLicenseState);
            console.log('License Number :' + pageLicenseNumber);
            await global.page.screenshot({ path: 'Screenshots/Driver Details match.png' });

        } else {
            console.error('Driver details do not match.');
            console.log('Name' + pageName);
        }
    }
    async verifyMVRReportDetailsScreen() {
        await global.page.locator(MotorVehicleRecordTab).click();
        await global.page.getByText('MVR Report Details').click();

        const mvrReportname = await global.page.locator(MVRReportName).textContent();
        const mvrReportDOB = await global.page.locator(MVRReportDOB).textContent();
        const mvrReportGender = await global.page.locator(MVRReportGender).textContent();
        const mvrReportAddress = await global.page.locator(MVRReportAddress).textContent();

        console.log('Driver details match!');
        console.log('MVR Report Name :' + mvrReportname);
        console.log('MVR Report DOB :' + mvrReportDOB);
        console.log('MVR Report Gender :' + mvrReportGender);
        console.log('MVR Report Address:' + mvrReportAddress);

        await global.page.screenshot({ path: 'Screenshots/MVR Report Details.png' });

        await global.page.getByText('Return to Drivers').click();
    }
    async verifyMVRScreenandMVRreportDetailsTabs() {
        await global.page.locator(MotorVehicleRecordTab).click();
        await global.page.getByText('MVR Report Details').click();

        const mvrReportDate = await global.page.locator(MVRReportDate).textContent();
        const mvrRequestDate = await global.page.locator(MVRRequestDate).textContent();
        const mvrYearRequested = await global.page.locator(MVRYearRequested).textContent();

        console.log('MVR screen should displayes report date ,requested date ,Years Requested, driver tab , Incident tab and Additional info tab in Motor Vehicle Record Screen');
        console.log('MVR Report Date :' + mvrReportDate);
        console.log('MVR Request Date :' + mvrRequestDate);
        console.log('MVR Year Requested :' + mvrYearRequested);

        await expect(global.page.locator(MVRDriverTab)).toBeVisible();
        await expect(global.page.locator(MVRIncidentsTab)).toBeVisible();
        await expect(global.page.locator(MVRAdditionalInfoTab)).toBeVisible();

        await global.page.getByText('Return to Drivers').click();


    }

    async verifyMVRTabinRiskAnalysisPage() {
        await global.page.locator(MotorVehicleRecordsTab).click();

        const mvrRiskAnalysisName = await global.page.locator(MVRRiskAnalysisName).textContent();
        const mvrRiskAnalysisGender = await global.page.locator(MVRRiskAnalysisGender).textContent();
        const mvrRiskAnalysisAge = await global.page.locator(MVRRiskAnalysisAge).textContent();
        const mvrRiskAnalysisLicenseState = await global.page.locator(MVRRiskAnalysisLicenseState).textContent();
        const mvrRiskAnalysisMVRStatus = await global.page.locator(MVRRiskAnalysisMVRStatus).textContent();
        const mvrRiskAnalysisReportDate = await global.page.locator(MVRRiskAnalysisReportDate).textContent();
        const mvrRiskAnalysisAccidents = await global.page.locator(MVRRiskAnalysisAccidents).textContent();
        const mvrRiskAnalysisViolations = await global.page.locator(MVRRiskAnalysisViolations).textContent();
        const mvrRiskAnalysisPoints = await global.page.locator(MVRRiskAnalysisPoints).textContent();
        const mvrRiskAnalysisDonotOrderMVR = await global.page.locator(MVRRiskAnalysisDonotOrderMVR).textContent();

        console.log('MVR deatils in Risk Analysis Page');
        console.log('Name :' + mvrRiskAnalysisName);
        console.log('Gender :' + mvrRiskAnalysisGender);
        console.log('Age :' + mvrRiskAnalysisAge);
        console.log('License State :' + mvrRiskAnalysisLicenseState);
        console.log('Status :' + mvrRiskAnalysisMVRStatus);
        console.log('ReportDate :' + mvrRiskAnalysisReportDate);
        console.log('Accidents :' + mvrRiskAnalysisAccidents);
        console.log('Violations :' + mvrRiskAnalysisViolations);
        console.log('Points :' + mvrRiskAnalysisPoints);
        console.log('Do not Order MVR :' + mvrRiskAnalysisDonotOrderMVR);

        await expect(global.page.locator(MVRReportDetailsButton)).toBeVisible();
    }


    async verifyMVRdetailsafterPolicyIssued() {

        await global.page.locator(PolicyMenuItemSet_Drivers).click();
        await global.page.locator(MVRDetailCardTab).click();

        await expect(global.page.locator(PersonalMotorVehicleRecordsDV)).toBeVisible();
        const mvrNAME = await global.page.locator(PersonalMotorVehicleRecords_Name).textContent();
        const mvrDOB = await global.page.locator(PersonalMotorVehicleRecords_DOB1).textContent();
        const mvrGENDER = await global.page.locator(PersonalMotorVehicleRecords_Gender).textContent();
        const mvrLicenseNumber = await global.page.locator(PersonalMotorVehicleRecords_LicenseNumber).textContent();
        const mvrLicenseState = await global.page.locator(PersonalMotorVehicleRecords_LicenseState).textContent();
        const mvrReportDate = await global.page.locator(PersonalMotorVehicleRecords_ReportDate).textContent();

        console.log('MVR deatils after after the policy is Issued');
        console.log('Name :' + mvrNAME);
        console.log('DOB :' + mvrDOB);
        console.log('Gender :' + mvrGENDER);
        console.log('License Number :' + mvrLicenseNumber);
        console.log('License State :' + mvrLicenseState);
        console.log('Report Date :' + mvrReportDate);

    }
    async verifyMVRdetailsafterPolicyQuoted() {

        await global.page.locator(LOBWizardStepGroup_Driver).click();
        await global.page.locator(LOBWizardStepGroup_MVRDetailCardTab).click();

        await expect(global.page.locator(LineWizardStepSet_MotorVehicleRecordCard)).toBeVisible();

        const MVRTabDetails = await global.page.locator(LineWizardStepSet_MotorVehicleRecordCard).textContent();

        console.log('\n MVR Details', MVRTabDetails);

        await global.page.locator(ViewQuote).click();
    }
    async clickTowingAndLabourCheckbox(){
        await global.page.locator(TowingandLanbourcheckbox).click()
    }
    async uncheckTowingAndLabourCheckbox(){
        await global.page.locator(TowingandLanbourcheckbox).click()
    }
    async verifytowingandlobourdropdown(){
        await expect(global.page.locator(TowAndLabourDropdown)).toBeHidden()
    }
    async verifyMVRdetailsinRiskAnalysistabafterPolicyQuoted(){
        await global.page.locator(SubmissionWizard_RiskAnalysis).click();
        await global.page.locator(RiskAnalysisCV_MotorVehicleRecordTab).click();

        await expect(global.page.locator(MVRdetailsinRiskAnalysistab)).toBeVisible();

        const MVRTabDetails = await global.page.locator(MVRdetailsinRiskAnalysistab).textContent();

        console.log('\n MVR Details \n', MVRTabDetails);   

        await global.page.locator(ViewQuote).click();

    }
    async verifyMVRdetailsinRiskAnalysistabafterPolicyIssued(){
        await global.page.locator(PolicyFile_RiskAnalysis).click();
        await global.page.locator(PolicyFile_RiskAnalysisCV_MotorVehicleRecordTab).click();

        await expect(global.page.locator(MVRdetailsinRiskAnalysistab)).toBeVisible();

        const MVRTabDetails = await global.page.locator(MVRdetailsinRiskAnalysistab).textContent();

        console.log('\n MVR Details \n', MVRTabDetails);   

    }
    async naviagteToPolicyChange() {
        await global.page.locator(PolicyFileMenuActions).click();
        await global.page.locator(PolicyFileMenuActions_ChangePolicy).click();
        await global.page.locator(StartPolicyChangeScreen).click();
        await global.page.locator(PolicyChangeWizard_Next).click();
        await global.page.locator(PolicyChangeWizard_Next).click();
        
    }
    async naviagteTodriverTAB(driverDetails) {     
        await global.page.locator(PolicyChangeWizard_AddDriver).click();
        await global.page.locator(PolicyChangeWizard_AddNewPerson).click();
        await global.page.waitForTimeout(3000);
        for (const userRow of driverDetails) {
            const [Firstname, Lastname, DOB, Address1, ZIP, AddressType, LicenseNo, LicenseState] = userRow;
            
            await global.page.getByText('First name',  { exact: true }).fill(Firstname);
            await global.page.getByText('Last name',  { exact: true }).fill(Lastname);
            await global.page.getByText('Date of Birth').fill(DOB);
            await global.page.getByText('Address 1').fill(Address1);
            await global.page.getByText('ZIP Code').fill(ZIP);            
            await global.page.getByText('Address Type').fill(AddressType);  
            await global.page.waitForTimeout(2000);         
            await global.page.getByText('License #').fill(LicenseNo);
            await global.page.getByText('License State').fill(LicenseState);
            await global.page.locator(PolicyChange_OK).click();
        }
        await global.page.getByText('Roles', { exact: true }).click();
        await global.page.getByText('Year First Licensed').fill('2015');
        await global.page.locator(NumberofAccidentsAddedDriver).click();
        await global.page.locator(NumberofAV_policydropdown1).click();
        await global.page.locator(NumberofAccidentsAddedDriver2).click();
        await global.page.locator(NumberofAV_policydropdown2).click();
        await global.page.locator(NumberofViolations_policy1).click();
        await global.page.locator(NumberofAV_policydropdown2).click();
        await global.page.locator(NumberofViolations_Account1).click();
        await global.page.locator(NumberofAV_policydropdown2).click();
        await global.page.locator(DriverDetailsPanellist2).click();
        await global.page.getByText('Retrieve MVR', { exact: true }).click();
        await global.page.getByText('Motor Vehicle Record', { exact: true }).click();
        await expect(global.page.locator(PolicyChangeWizard_MVRpanel)).toBeVisible();
        await global.page.locator(PolicyChangeWizard_Next).click();
        await global.page.locator(PolicyChangeWizard_Next).click();
        await global.page.locator(PolicyChangeWizard_Next).click();
        await global.page.locator(PolicyChangeWizard_Next).click();
        await global.page.locator(PolicyChangeWizard_Quote).click();
        await global.page.locator(PolicyChangeWizard_Next).click();
        await global.page.locator(PolicyChangeWizard_Next).click();
        

    }
    async verifyIssuePolicy() {
       
        await global.page.locator(BindPolicyChange).click();
        await global.page.getByText('OK', { exact: true }).click();
        await global.page.locator(PolicyChangeWizard_ViewPolicy).click();
    }

}

module.exports = { PolicyCreationPage }