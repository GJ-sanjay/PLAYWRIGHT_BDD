const { When, Then } = require('@cucumber/cucumber');
const { NewSubmissionsPage } = require('../pages/NewSubmissionsPage');


let acp = new NewSubmissionsPage();


When('User click New Submission in Actions menu', async()=>{
    await acp.newSubmissionClick();
})

When('User should verify "New Submissions" in Select Account page', async()=>{
    await acp.verifySubmissionScreen();
})

When('User search account by Account Number {string} and select existing account', async(accNo)=>{
    await acp.enterAccNoandSelect(accNo);
})


When('User should view "Account File Summary" in Account Summary page', async()=>{
    await acp.verifyAcccScreen();
})

When('User click New Submission in Actions menu on Account Summary page', async()=>{
    await acp.accountFileMenuActions();
})
