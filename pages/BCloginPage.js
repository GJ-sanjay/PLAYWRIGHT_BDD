const {test, expect} = require("@playwright/test");
const path = require('path');

require('dotenv').config({
    path: path.join(__dirname,'../.env')
})

class BCloginPage{    
    
    async BCnavigate(){
        await global.page.goto(process.env.WEB_URL1);
        await global.page.getByText('User name',{exact:true}).fill(process.env.WEB_USERNAME);
        await global.page.getByText('Password').fill(process.env.WEB_USERNAME);
        await global.page.getByText('Log In').click();

   } 
}


module.exports={BCloginPage}