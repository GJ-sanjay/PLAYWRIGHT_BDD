const { When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/LoginPage');

let lp = new LoginPage();

When('User is on login page', {timeout:2*5000}, async () => {
    await lp.navigate();
})

Then('User enter username and password', { timeout: 2 * 3000 }, async () => {
       await lp.loginpolicycenter();
})

Then('User verify LoginTitle', async () => {
    await lp.verifyLoginTitle();
})