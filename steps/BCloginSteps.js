const { When, Then } = require('@cucumber/cucumber');
const { BCloginPage } = require('../pages/BCloginPage');

let BClp = new BCloginPage();

When('User launch the BC URL and enter the valid login details',{ timeout: 2 * 10000 },  async () => {
    await BClp.BCnavigate();
})