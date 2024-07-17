const {test, expect} = require("@playwright/test");
const path = require('path');

require('dotenv').config({
    path: path.join(__dirname,'../.env')
})

const Username = '//input[@id="Login:LoginScreen:LoginDV:username-inputEl"]',
Password = '//input[@id="Login:LoginScreen:LoginDV:password-inputEl"]',
Login = '//span[@id="Login:LoginScreen:LoginDV:submit-btnInnerEl"]';

class LoginPage{    
    
    async navigate(){
        await global.page.goto(process.env.WEB_URL);
        //await global.page.waitForTimeout(5000);
   } 
    async loginpolicycenter(){
        // await global.page.locator(Username).fill(process.env.WEB_USERNAME);
        // await global.page.locator(Password).fill(process.env.WEB_PASSWROD);
        // await global.page.locator(Login).click();
        
        await global.page.getByText('User name').fill(process.env.WEB_USERNAME);
        await global.page.getByText('Password').fill(process.env.WEB_USERNAME);
        await global.page.getByText('Log In').click();
    }

    async verifyLoginTitle(){
        await expect(global.page).toHaveTitle('[DEV mode - 9.0.5.336] Guidewire PolicyCenter');
    }


}

module.exports={LoginPage}