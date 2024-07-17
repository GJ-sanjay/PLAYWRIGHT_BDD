const {When, Then} = require('@cucumber/cucumber');
const{ActionPage} = require('../pages/ActionPage');

let ap = new ActionPage();

When('User should verify "Actions" in Dashboard page', async()=>{
    await ap.verifyActionClick();
})

Then('User click New Account in Actions menu', async()=>{
    await ap.newAccountClick();
})

Then('User should verify "Enter Account Information" in Applicant Information page', async()=>{
    await ap.VerifyAccountPage();
})
