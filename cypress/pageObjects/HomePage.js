export class HomePage
{
    webLocators={
        search_input : "input[name='search']",
        clickSearch : "#search > span > button",
        product : "img.img-responsive[title='MacBook']",
        addToCart : "button#button-cart",
        successMessage : "#product-product > div.alert.alert-success.alert-dismissible1"
    } 

    enterSearchInput(productName)
    {
        cy.get(this.webLocators.search_input).type(productName);
    }

    clickOnSearch()
    {
        cy.get(this.webLocators.clickSearch).click();
    }

    selectProduct()
    {
        cy.get(this.webLocators.product).click();
    }

    clickOnAddToCart()
    {
        cy.get(this.webLocators.addToCart).click();
    }

    verifyMessage()
    {
     return cy.get(this.webLocators.successMessage);
    }
    
}