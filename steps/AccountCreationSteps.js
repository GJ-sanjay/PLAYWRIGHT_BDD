const { When, Then } = require('@cucumber/cucumber');
const { AccountCreationPage } = require('../pages/AccountCreationPage');

let acp = new AccountCreationPage();


When('User enter {string} and {string} click search', async (firstname,lastname) => {
        await acp.enterFirstandLastName(firstname,lastname);
})

When('User should view The search returned zero results in Applicant Information page', async () => {
    await acp.verifyZeroResult();
})

When('User click Person in Create New Account dropdown', async () => {
    await acp.createnewAccountClick();
})

When('User should verify Create account in Create Account page', async () => {
    await acp.verifyCreatenewAccount();
})

Then('User click search icon in Organization column', async () => {
    await acp.organizationClick();
})

Then('User should Verify Organizations in Organizations page', async () => {
    await acp.verifyOrganizationClick();
})

When('User enter "Enigma Fire & Casualty" and click Select in Search Results', async () => {
    await acp.enterOrganizationName();

})

Then('User enter all mandatory fields and click Update', async (dataTable) => {
    const mandatoryDetails = dataTable.rawTable.slice(1);
    await acp.enterAllMandatoryFields(mandatoryDetails);
})

When('User should verify accountname in Account Summary page and save Account Number', async () => {
    await acp.verifyAccountname();
    
})

When('User enter {string} and click search', async (cname) => {
    await acp.enterCompanyName(cname);
})

When('User click Company in Create New Account dropdown', async () => {
    await acp.createPersonAccountClick();
})

When('User should verify "Create account" in Create Account page', async () => {
    await acp.verifyCreateaccountpage();
})

When('User click on Actions button in left side menu bar and select Create New Note', async()=>{
    await acp.createNewNoteinActionsButton();
})

When('User should navigates to New Note details screen and able to view {string} {string} {string}', async(Topic, SL, Text)=>{
    await acp.verifyNEWNotesDetails(Topic, SL, Text);
})
When('User entered details and click on update the data will be saved', async()=>{
    await acp.clickUpdate();
})
When('User selects Use Note Template option it navigates to keyword screen to select option based on {string} {string} {string}', async(Topic,Type,Product)=>{
    await acp.clickNoteTemplate(Topic,Type,Product);
})
When('User clicked on search the templates will get displayed and can able to select template and click on update',async()=>{
    await acp.clicksearchTemplateandUpdate();
})
When('User can able to view the created Note from Note option from Left side menu',async()=>{
    await acp.verifyNoteOptionFromLeftsideMenu();
})