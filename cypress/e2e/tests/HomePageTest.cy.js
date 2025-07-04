import { HomePage } from "../../pageObjects/HomePage";
const homeObj=new HomePage();

import TestData from "../../fixtures/TestData.json";

describe("Add To Cart", ()=>{

   before(() => {
    cy.login(TestData.login.email, TestData.login.password);

    // Wait for something that only appears when logged in
    cy.contains('My Account', { timeout: 10000 }).should('be.visible');
});


    it("add to cart test", ()=>{
        homeObj.enterSearchInput(TestData.product.searchInput);
        homeObj.clickOnSearch();
        homeObj.selectProduct();
        homeObj.clickOnAddToCart();
        homeObj.verifyMessage().should('contain' , TestData.message.text);
    })
})
