const { test, expect } = require("@playwright/test");

const FirstName = '//input[@id="NewAccount:NewAccountScreen:NewAccountSearchDV:GlobalPersonNameInputSet:FirstName-inputEl"]',
    Lastname = '//input[@id="NewAccount:NewAccountScreen:NewAccountSearchDV:GlobalPersonNameInputSet:LastName-inputEl"]',
    companyName = '//input[@id="NewAccount:NewAccountScreen:NewAccountSearchDV:GlobalContactNameInputSet:Name-inputEl"]',
    Search = '//a[@id="NewAccount:NewAccountScreen:NewAccountSearchDV:SearchAndResetInputSet:SearchLinksInputSet:Search"]',
    CreateNewAccountButton = "//span[@id='NewAccount:NewAccountScreen:NewAccountButton-btnInnerEl']",
    NewPerson = '//a[@id="NewAccount:NewAccountScreen:NewAccountButton:NewAccount_Person-itemEl"]',
    NewAccount = '//span[@id="CreateAccount:CreateAccountScreen:ttlBar"]',
    NewCompany = '//span[@id="NewAccount:NewAccountScreen:NewAccountButton:NewAccount_Company-textEl"]',
    OrganizationSearch = "//div[@id='CreateAccount:CreateAccountScreen:CreateAccountDV:ProducerSelectionInputSet:Producer:SelectOrganization']",
    OrganizationSearchPopup = '//span[@id="OrganizationSearchPopup:OrganizationSearchPopupScreen:ttlBar"]',
    OrganizationName = "//input[@id='OrganizationSearchPopup:OrganizationSearchPopupScreen:OrganizationSearchDV:GlobalContactNameInputSet:Name-inputEl']",
    OrganizationSearchDV = "//a[@id='OrganizationSearchPopup:OrganizationSearchPopupScreen:OrganizationSearchDV:SearchAndResetInputSet:SearchLinksInputSet:Search']",
    OrgSelect = "//a[@id='OrganizationSearchPopup:OrganizationSearchPopupScreen:OrganizationSearchResultsLV:0:_Select']",
    OrgAddressLine1 = "//input[@id='CreateAccount:CreateAccountScreen:CreateAccountDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:AddressLine1-inputEl']",
    OrgZip = "//input[@id='CreateAccount:CreateAccountScreen:CreateAccountDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:PostalCode-inputEl']",
    AddressType = "//input[@id='CreateAccount:CreateAccountScreen:CreateAccountDV:AddressType-inputEl']",
    ProducerCode = "//input[@id='CreateAccount:CreateAccountScreen:CreateAccountDV:ProducerSelectionInputSet:ProducerCode-inputEl']",
    AccountUpdate = "//span[@id='CreateAccount:CreateAccountScreen:Update-btnInnerEl']",
    ZeroResultText = '//div[@class="message"]',
    AccountFile_Summary = '//span[@id="AccountFile_Summary:AccountFile_SummaryScreen:ttlBar"]',
    accountNumber = '//div[@id="AccountFile_Summary:AccountFile_SummaryScreen:AccountFile_Summary_BasicInfoDV:AccountNumber-inputEl"]',
    accountName = '//div[@id="AccountFile_Summary:AccountFile_SummaryScreen:AccountFile_Summary_BasicInfoDV:Name-inputEl"]',
    accountStatus = '//div[@id="AccountFile_Summary:AccountFile_SummaryScreen:AccountFile_Summary_BasicInfoDV:AccountStatus-inputEl"]',
    AccountFileMenuActions ="//span[@id='AccountFile:AccountFileMenuActions-btnInnerEl']",
    NewNote="//*[text()='New Note']",
    NewNoteTitle='//*[@id="NewAccountNoteWorksheet:NewNoteScreen:ttlBar"]',
    UpdateNote='//*[@id="NewAccountNoteWorksheet:NewNoteScreen:NewNoteScreen_UpdateButton-btnInnerEl"]',
    UseNotUpdate='//*[@id="NewAccountNoteWorksheet:NewNoteScreen:NewNoteWorksheet_UseTemplateButton-btnInnerEl"]',
    NoteTemplateTopic='//*[@id="PickNoteTemplatePopup:PickNoteTemplateScreen:NoteTemplateSearchDV:Topic-inputEl"]',
    NoteTemplateType='//*[@id="PickNoteTemplatePopup:PickNoteTemplateScreen:NoteTemplateSearchDV:Type-inputEl"]',
    NoteTemplateProduct='//*[@id="PickNoteTemplatePopup:PickNoteTemplateScreen:NoteTemplateSearchDV:Product-inputEl"]',
    NoteTemplateSearch='//*[@id="PickNoteTemplatePopup:PickNoteTemplateScreen:NoteTemplateSearchDV:SearchAndResetInputSet:SearchLinksInputSet:Search"]',
    NoteTemplateSelect="//*[text()='Select']",
    LeftmenuNotes="(//span[text()='Notes'])[1]",
    NotesINFOScreen='(//*[text()="Account File Notes"]/ancestor::div//tr)//div[@id="AccountFile_Notes:NotesScreen:NotesLV-body"]';

class AccountCreationPage {

    async enterFirstandLastName(firstname, lastname) {
        // await global.page.locator(FirstName).fill(firstname);
        // await global.page.locator(Lastname).fill(lastname);
        // await global.page.locator(Search).click();
        //const timestamp = new Date().toLocaleString();
        const timestamp = new Date().toLocaleString().replace(/[^\w\s]/gi,'');
        const LastName = lastname+timestamp;

        //const LastName = `${lastname}_${timestamp}`;
        await global.page.getByText('First name', { exact: true }).fill(firstname);
        await global.page.getByText('Last name', { exact: true }).fill(LastName);
        await global.page.getByRole('link', { name: 'Search' }).click();

    }

    async verifyZeroResult() {
        await expect(global.page.locator(ZeroResultText)).toHaveText('The search returned zero results.');
    }
    async createnewAccountClick() {
        await global.page.locator(CreateNewAccountButton).click();
        await global.page.locator(NewPerson).click();
    }
    async verifyCreatenewAccount() {
        await expect(global.page.locator(NewAccount)).toHaveText('Create account');
    }
    async organizationClick() {
        await global.page.locator(OrganizationSearch).click();
    }

    async verifyOrganizationClick() {
        await expect(global.page.locator(OrganizationSearchPopup)).toHaveText('Organizations');
        //await global.page.waitForTimeout(3000);
    }

    async enterOrganizationName() {
        await global.page.locator(OrganizationName).fill('Enigma Fire & Casualty');
        await global.page.locator(OrganizationSearchDV).click();
        await global.page.locator(OrgSelect).click();
    }

    async enterAllMandatoryFields(mandatoryDetails) {
        for (const userRow of mandatoryDetails) {
            const [address, zip, addresstype, productcode] = userRow;
            await global.page.locator(OrgAddressLine1).fill(address);
            await global.page.locator(OrgZip).fill(zip);
            await global.page.locator(AddressType).fill(addresstype);
            await global.page.waitForTimeout(3000);
            await global.page.locator(ProducerCode).fill(productcode);
            await global.page.locator(AccountUpdate).click();
            await global.page.screenshot({ path: 'enterAllMandatoryFields.png', fullPage: true });
        }
    }

    async verifyAccountname() {
        await expect(global.page.locator(AccountFile_Summary)).toHaveText('Account File Summary');
        await global.page.waitForTimeout(3000);
        const accName = await global.page.locator(accountName).textContent();
        const accNo = await global.page.locator(accountNumber).textContent();
        const accStatus = await global.page.locator(accountStatus).textContent();
        console.log("Account Name is " + accName);
        console.log("Account Number is " + accNo);
        console.log("Account Status is " + accStatus);
        await global.page.screenshot({ path: 'Screenshots/AccNo Page.png' });

    }

    async enterCompanyName(Cname) {
        const timestamp = new Date().toLocaleString().replace(/[^\w\s]/gi,'');
        const companyname = Cname+timestamp;

        await global.page.locator(companyName).fill(companyname);
        await global.page.locator(Search).click();

    }

    async createPersonAccountClick() {
        await global.page.locator(CreateNewAccountButton).click();
        await global.page.locator(NewCompany).click();
    }

    async verifyCreateaccountpage() {
        await expect(global.page.locator(NewAccount)).toHaveText('Create account');
    }

    async createNewNoteinActionsButton(){
        await global.page.locator(AccountFileMenuActions).click();
        await global.page.locator(NewNote).click();

    }
    async verifyNEWNotesDetails(Topic, SL, Text){
        await expect(global.page.locator(NewNoteTitle)).toHaveText('New Note');

        await global.page.getByText('Topic').fill(Topic);
        await global.page.getByText('Security Level').fill(SL);
        await global.page.getByText('Text').fill(Text);
        
    }

    async clickUpdate(){
        await global.page.locator(UpdateNote).click();
    }

    async clickNoteTemplate(Topic,Type,Product){
        await global.page.locator(AccountFileMenuActions).click();
        await global.page.locator(NewNote).click();
        await global.page.locator(UseNotUpdate).click();
        await global.page.waitForTimeout(3000);
        await global.page.locator(NoteTemplateTopic).fill(Topic);
        await global.page.locator(NoteTemplateType).fill(Type);
        await global.page.locator(NoteTemplateProduct).fill(Product);
        
    }
    async clicksearchTemplateandUpdate(){
        await global.page.locator(NoteTemplateSearch).click();
        await global.page.locator(NoteTemplateSelect).click();
        await global.page.locator(UpdateNote).click();

    }
    async verifyNoteOptionFromLeftsideMenu(){
        await global.page.locator(LeftmenuNotes).click();
        // const Noteinfodetails = await global.page.locator(NotesINFOScreen).textContent();
        // console.log("Notes info" + Noteinfodetails);

        await expect(global.page.locator(NotesINFOScreen)).toBeVisible();

        await global.page.screenshot({ path: 'Screenshots/Notes info screen.png' });


    }
}

module.exports = { AccountCreationPage }