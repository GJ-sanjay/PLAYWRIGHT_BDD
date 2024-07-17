const {test, expect} = require("@playwright/test");

const AccountTab='//*[@id="TabBar:AccountsTab-btnInnerEl"]',
ActionMenu='//*[@id="AccountsGroup:AccountsMenuActions-btnInnerEl"]',
NewAccount='//*[@id="AccountsGroup:AccountsMenuActions:AccountsMenuActions_NewAccount-textEl"]',
AccountName='//input[@id="NewAccount:NewAccountScreen:NewAccountDV:AccountName-inputEl"]',
BillingPlan='//input[@id="NewAccount:NewAccountScreen:NewAccountDV:BillingPlan-inputEl"]',
DelinquencyPlan='//input[@id="NewAccount:NewAccountScreen:NewAccountDV:DelinquencyPlan-inputEl"]',
SendInvoicesBy='//input[@id="NewAccount:NewAccountScreen:NewAccountDV:SendInvoicesBy-inputEl"]',
AddContact='//*[@id="NewAccount:NewAccountScreen:NewAccountDV:NewAccountContactsLV_tb:addNewContact-btnInnerEl"]',
AddNewPerson='//*[@id="NewAccount:NewAccountScreen:NewAccountDV:NewAccountContactsLV_tb:addNewContact:addNewPerson-textEl"]',
FirstName='//input[@id="NewAccountContactPopup:NewAccountContactScreen:AccountContactCV:AccountContactDetailDV:NameInputSet:GlobalPersonNameInputSet:FirstName-inputEl"]',
LastName='//input[@id="NewAccountContactPopup:NewAccountContactScreen:AccountContactCV:AccountContactDetailDV:NameInputSet:GlobalPersonNameInputSet:LastName-inputEl"]',
Address1='//input[@id="NewAccountContactPopup:NewAccountContactScreen:AccountContactCV:AccountContactDetailDV:globalAddressContainer:GlobalAddressInputSet:AddressLine1-inputEl"]',
City='//input[@id="NewAccountContactPopup:NewAccountContactScreen:AccountContactCV:AccountContactDetailDV:globalAddressContainer:GlobalAddressInputSet:City-inputEl"]',
PrimaryPayer="//*[text()='Primary Payer']/parent::label/following::div[3]",
RolesADD='//*[@id="NewAccountContactPopup:NewAccountContactScreen:AccountContactCV:AccountContactDetailDV:RolesLV_tb:Add-btnInnerEl"]',
RoleTableAdd='(//label[text()="Roles"]/parent::td/following::div//td)[2]',
OK='//*[@id="NewAccountContactPopup:NewAccountContactScreen:Update-btnInnerEl"]',
CreateAccount='//span[@id="NewAccount:NewAccountScreen:Update-btnInnerEl"]',
AccountSummary="//span[@id='AccountSummary:AccountSummaryScreen:ttlBar']",
AccountDetailMenuActions='//span[@id="AccountGroup:AccountDetailMenuActions-btnInnerEl"]',
ADDPolicy="//*[text()='Add Policy']",
NewPolicyDV="//input[@id='NewPolicyWizard:NewPolicyWizardSummaryStepScreen:NewPolicyDV:PolicyNumber-inputEl']",
PolicyPeriodsScreen="//label[text()='Policy Periods']",
PolicyNo="//*[text()='Policy Periods']/parent::td/following::div//table//td[4]",
EffectiveDate="//*[text()='Policy Periods']/parent::td/following::div//table//td[6]",
ExpirationDate="//*[text()='Policy Periods']/parent::td/following::div//table//td[7]",
Policyperiodforce="//*[text()='Policy Periods']/parent::td/following::div//table//td[3]",
AccountDetailsleft='//td[@id="AccountGroup:MenuLinks:AccountGroup_AccountOverview:AccountOverview_AccountDetailSummary"]',
AccountNumber = '//div[@id="AccountDetailSummary:AccountDetailSummaryScreen:AccountDetailDV:AccountNumber-inputEl"]',
AccountNumberCriterion='//input[@id="Accounts:AccountSearchScreen:AccountSearchDV:AccountNumberCriterion-inputEl"]',
AccountSearch='//a[@id="Accounts:AccountSearchScreen:AccountSearchDV:SearchAndResetInputSet:SearchLinksInputSet:Search"]',
Accountnoclick='(//*[@id="Accounts:AccountSearchScreen:ttlBar"]//ancestor::td/following::div/a)[5]',
AccountDetailMenuActions_Payments='//*[@id="AccountGroup:AccountDetailMenuActions:AccountDetailMenuActions_Payments-textEl"]',
AccountDetailMenuActions_NewDirectBillPayment='//*[@id="AccountGroup:AccountDetailMenuActions:AccountDetailMenuActions_Payments:AccountDetailMenuActions_NewDirectBillPayment-textEl"]',
CreateNewPaymentInstrument='//a[@id="NewDirectBillPayment:EditDBPaymentScreen:PaymentDetailsDV:PaymentInstrument:CreateNewPaymentInstrument"]',
PaymentMethodInput='//input[@id="NewPaymentInstrumentPopup:PaymentMethod-inputEl"]',
PaymentUpdate="//a[@id='NewPaymentInstrumentPopup:Update']",
PaymentDetailsAmount="//input[@id='NewDirectBillPayment:EditDBPaymentScreen:PaymentDetailsDV:Amount-inputEl']",
ExecuteWithoutDistribution='//*[@id="NewDirectBillPayment:EditDBPaymentScreen:ExecuteWithoutDistribution-btnInnerEl"]',
PaymentsLeft="//span[text()='Payments']",
PaymentInstrumentValue='(//*[@id="AccountPayments:AccountDetailPaymentsScreen:ttlBar"]/ancestor::div)//td[4]//div';



class BCAccountCreationPage{

    async clickNewAccount(){
        await global.page.locator(AccountTab).click();
        await global.page.locator(ActionMenu).click();
        await global.page.locator(NewAccount).click();

        //await expect(global.page).toHaveText('New Account');
    }
    async enterAccountScreenMandatoryfields(){
        await global.page.locator(AccountName).fill('TestAccount');    
        await global.page.locator(BillingPlan).fill('DB_New Billing'); 
    }
    async clickonADDNewPerson(){
        await global.page.locator(AddContact).click();
        await global.page.locator(AddNewPerson).click();
    }

    async enterAddAccountContactDetail(){
        await global.page.locator(FirstName).fill('Test');
        await global.page.locator(LastName).fill('One');
        await global.page.locator(Address1).fill('113 ABC');
        await global.page.locator(City).fill('Chennai');
        await global.page.locator(PrimaryPayer).click();
        await global.page.locator(OK).click();
        await global.page.locator(SendInvoicesBy).fill('Email');         
        await global.page.locator(DelinquencyPlan).fill('DAVID LEONARD');
        await global.page.locator(BillingPlan).fill('DB_New Billing'); 
        await global.page.locator(CreateAccount).click();
       
    }
    async selectInsuredandOK(){
        await global.page.locator(RolesADD).click();
        await global.page.locator(RoleTableAdd).click();       
        await page.locator('//li[text()="Insured"]').click();
        await global.page.locator(OK).click();
            }
    async clickCreateAccount(){
        await global.page.locator(CreateAccount).click();
    }
    async  verifyAccountsummaryPage(){
      // await expect(global.page.locator(AccountSummary)).toHaveText('Account Summary');
    }
    async NewPolicyCreationandEnterDetails(){
        await global.page.locator(AccountDetailMenuActions).click();
        await global.page.locator(ADDPolicy).click();
        const timestamp =  Date.now();
        
        await global.page.locator(NewPolicyDV).fill('03'+timestamp);
        await global.page.getByText('Payment Plan').fill('A Monthly 10% Down, 9 Max installments');
    }
    async createNewPolicy(){
        await global.page.getByText('Next >').click();
        await global.page.getByText('inish').click();
    }
    async verifyCreatedNewPolicy(){
        //await expect(global.page.locator(PolicyPeriodsScreen)).toHaveText('Policy Periods');
        await global.page.waitForTimeout(3000);
        const PolicyNumber = await global.page.locator(PolicyNo).textContent();
        const PolicypeiodForce = await global.page.locator(Policyperiodforce).textContent();
        const Effectivedate = await global.page.locator(EffectiveDate).textContent();
        const Expirationdate = await global.page.locator(ExpirationDate).textContent();

        console.log('Policy No :' + PolicyNumber);
        console.log('Policy Period Force :' + PolicypeiodForce);
        console.log('Effective Date :' + Effectivedate);
        console.log('Expiration Date :' + Expirationdate);

    }

    

    async verifyAccountDetails(){
        await global.page.waitForTimeout(3000);
        await global.page.locator(AccountDetailsleft).click();
        const accountno = await global.page.locator(AccountNumber).textContent();
    
        console.log('Account No :' + accountno);
    }

    async clickOnAccount(){
        
        await global.page.locator(AccountTab).click();
        await global.page.locator(AccountNumberCriterion).fill('1000007575');
        await global.page.locator(AccountSearch).click();
        await global.page.waitForTimeout(2000);
        await global.page.locator(Accountnoclick).click();
    }
    async verifyAccountsummaryscreen(){
        //await expect(global.page.locator(AccountSummary)).toHaveText('Account Summary');
    }
    async clickNewDirectBillPayment(){
        await global.page.waitForTimeout(5000);
        await global.page.locator(AccountDetailMenuActions).click();
        await global.page.locator(AccountDetailMenuActions_Payments).click();
        await global.page.locator(AccountDetailMenuActions_NewDirectBillPayment).click();
    }
    async clickNEWHyperlinkPaymentInstrument(){
        await global.page.locator(CreateNewPaymentInstrument).click();
    }
    async clickPaymentasACHEFT(){
        await global.page.locator(PaymentMethodInput).fill('ACH/EFT');
        await global.page.locator(PaymentUpdate).click();
    }
    async enterDesiredAmount(){
        await global.page.locator(PaymentDetailsAmount).fill('23000');
        await global.page.locator(ExecuteWithoutDistribution).click();
    }
    async verifypaymentsection(){
        await global.page.locator(PaymentsLeft).click();
        
        const paymentElement = await global.page.locator(PaymentInstrumentValue).textContent();
        console.log('payment',paymentElement );

       
      
    }
}

module.exports={
    BCAccountCreationPage
}