const { When, Then } = require('@cucumber/cucumber');
const { BCAccountCreationPage } = require('../pages/BCAccountCreationPage');

let BCac = new BCAccountCreationPage();

When('User click on Account in the header and click on New Account', async()=>{
    BCac.clickNewAccount();
})

When('User should Navigate to New Account Screen and enter all mandatory fields', async()=>{
    BCac.enterAccountScreenMandatoryfields();
})

When('User click on "Add New Person" in Contacts', async()=>{
    BCac.clickonADDNewPerson();
})

When('User enter all mandatory fields in Add Account contact',async()=>{
    BCac.enterAddAccountContactDetail();
})

When('User Select "Insured" and click on "Ok" from the top', async()=>{
    BCac.selectInsuredandOK();
})

When('User click on Create Account button', async()=>{
    BCac.clickCreateAccount();
})

When('User should able to view the Account Summary Page.', async()=>{
    BCac.verifyAccountsummaryPage();
})
When('User should Navigate to New Policy creation screen and enter all mandatory fields', async()=>{
    BCac.NewPolicyCreationandEnterDetails();
})
When('User should able to create New Policy', async()=>{
    BCac.createNewPolicy();
})
When('User should able to view the created New Policy', async()=>{
    BCac.verifyCreatedNewPolicy();
})
When('User should able to view Account Details', async()=>{
    BCac.verifyAccountDetails();
})
When('User click on Account in the header and enter the Account number in the search field', async()=>{
    BCac.clickOnAccount();
})
When('User should be navigated to the Account summary screen', async()=>{
    BCac.verifyAccountsummaryscreen();
})
When('User click on Actions -> New Payment-> New direct Bill Payment',async()=>{
    BCac.clickNewDirectBillPayment();
})
When('User "New" hyperlink should be clicked against the payment instrument field', async()=>{
    BCac.clickNEWHyperlinkPaymentInstrument();
})
When('User click on payment method dropdown and choose ACHEFT payment', async()=>{
    BCac.clickPaymentasACHEFT();
})
When('User Enter the desired amount in the amount field and click on execute with out distribution button',async()=>{
    BCac.enterDesiredAmount();
})
When('User should navigate to the Payment section and verify that the ACHEFT payment was added to the list', async()=>{
    BCac.verifypaymentsection();
})