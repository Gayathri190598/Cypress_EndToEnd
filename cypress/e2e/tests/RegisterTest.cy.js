import { RegisterPage } from "../../pageObjects/RegisterPage"
const regObj =new RegisterPage();

import RegisterData from "../../fixtures/RegisterData.json"


describe("TestAutomation", ()=>{

    it("RegisterFlow", ()=>{

        regObj.openUrl();
        regObj.enterFirstName(RegisterData.fname);
        regObj.enterLastName(RegisterData.lname);
        regObj.enterEmail(RegisterData.email);
        regObj.entertelephone(RegisterData.phone);
        regObj.enterPassword(RegisterData.password);
        regObj.chooseSubscribeOption(RegisterData.subscription);
        regObj.selectCheckbox();
        regObj.clickOnContinue();



    })
})