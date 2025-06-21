export class RegisterPage
{
    webLocators={
        firstName : '#input-firstname',
        lastName : '#input-lastname',
        email : '#input-email',
        telephone : '#input-telephone',
        password : '#input-password',
        confirmPassword : '#input-confirm',
        subscribe : 'input[type="radio"]',
        checkbox : "input[name='agree']",
        btnContinue : "input[value='Continue']"

    }

    openUrl()
    {
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(fName)
    {
        cy.get(this.webLocators.firstName).type(fName)
    }

    enterLastName(lName)
    {
        cy.get(this.webLocators.lastName).type(lName)
    }

    enterEmail(email)
    {
        cy.get(this.webLocators.email).type(email)
    }

    entertelephone(phone)
    {
        cy.get(this.webLocators.telephone).type(phone)
    }

     enterPassword(password)
    {
        cy.get(this.webLocators.password).type(password)
        cy.get(this.webLocators.confirmPassword).type(password)
    }

    chooseSubscribeOption(subscribeOption)
    {
        cy.get(this.webLocators.subscribe).check(subscribeOption)
    }

     selectCheckbox()
    {
        cy.get(this.webLocators.checkbox).check()
    }

     clickOnContinue()
    {
        cy.get(this.webLocators.btnContinue).click()
    }


}


