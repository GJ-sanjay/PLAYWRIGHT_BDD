const { test, expect } = require("@playwright/test");

const DesktopMenuActions = '//span[@id="Desktop:DesktopMenuActions-btnInnerEl"]',
    NewSubmission = "//span[@id='Desktop:DesktopMenuActions:DesktopMenuActions_Create:DesktopMenuActions_NewSubmission-textEl']",
    NewSubmissionScreen = '//span[@id="NewSubmission:NewSubmissionScreen:ttlBar"]',
    AccountInput = '//input[@id="NewSubmission:NewSubmissionScreen:SelectAccountAndProducerDV:Account-inputEl"]',
    SelectAccount = '//div[@id="NewSubmission:NewSubmissionScreen:SelectAccountAndProducerDV:Account:SelectAccount"]',
    SelectAccountName = '//div[@id="NewSubmission:NewSubmissionScreen:SelectAccountAndProducerDV:AccountName-inputEl"]',
    AccountFile_SummaryScreen = '//span[@id="AccountFile_Summary:AccountFile_SummaryScreen:ttlBar"]',
    AccountFileMenuActions = "//span[@id='AccountFile:AccountFileMenuActions-btnInnerEl']",
    ActionNewSubmission = "//span[@id='AccountFile:AccountFileMenuActions:AccountFileMenuActions_Create:AccountFileMenuActions_NewSubmission-textEl']",
    ReturnNewAccountPopup = "//a[@id='NewAccountPopup:__crumb__']";
    

class NewSubmissionsPage {
    
    async newSubmissionClick() {
        await global.page.locator(DesktopMenuActions).click();
        await global.page.locator(NewSubmission).click();
    }
    async verifySubmissionScreen() {
        await expect(global.page.locator(NewSubmissionScreen)).toHaveText('New Submissions');
    }

    async enterAccNoandSelect(accountNumber) {
       await global.page.locator(AccountInput).fill(accountNumber);
       await global.page.locator(SelectAccount).click();
       await global.page.locator(ReturnNewAccountPopup).click();
       await global.page.locator(SelectAccountName).click();
   }

    async verifyAcccScreen() {
        await expect(global.page.locator(AccountFile_SummaryScreen)).toHaveText('Account File Summary');
        console.log("Account Number:", this.accountNumber);
    }

    async accountFileMenuActions() {
        await global.page.locator(AccountFileMenuActions).click();
        await global.page.locator(ActionNewSubmission).click();
    }

}

module.exports = {
    NewSubmissionsPage
}
