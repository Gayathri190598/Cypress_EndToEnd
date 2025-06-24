// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//custom command to login function
Cypress.Commands.add('login', (email, password) => {
    // Visit the login page using env (optional, otherwise use '')
    cy.visit(Cypress.env("LOGIN_URL") || '');

    // Ensure the email input is visible before typing
    cy.get('#input-email', { timeout: 10000 }).should('be.visible').type(email);
    cy.get('#input-password').should('be.visible').type(password);
    cy.get("input[type='submit']").should('be.visible').click();

    // Optionally wait for dashboard or user menu after login
    cy.url().should('not.include', 'login'); // confirms redirect
});
