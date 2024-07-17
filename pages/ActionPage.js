const {test, expect} = require("@playwright/test"); 

const DesktopMenuActions = '//a[@id="Desktop:DesktopMenuActions"]',
NewAccount = '//span[@id="Desktop:DesktopMenuActions:DesktopMenuActions_Create:DesktopMenuActions_NewAccount-textEl"]',
Actiontext = '//span[@id="Desktop:DesktopMenuActions-btnInnerEl"]',
EnterAccInfo = '//span[@id="NewAccount:NewAccountScreen:ttlBar"]';

class ActionPage{    
    
    async verifyActionClick(){        
        await expect (global.page.locator(Actiontext)).toHaveText('Actions');
        await global.page.locator(DesktopMenuActions).click();
        
       }
    async newAccountClick(){
        await global.page.locator(NewAccount).click();
    }
    
    async VerifyAccountPage(){
        await expect (global.page.locator(EnterAccInfo)).toHaveText('Enter Account Information');
    }
}
module.exports={ActionPage}