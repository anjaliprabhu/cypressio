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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('calculate', (testCases, constant) => {

  for (let [testCase, expected] of testCases) {

    testCase.forEach(button => {
      console.log('Clicking button: ', constant.buttons.get(button));
      cy.get(constant.buttons.get(button)).click()
    });

    cy.get('#cwos').should('have.text', expected)

    //All clear
    cy.get(constant.buttons.get('AC')).click()
  }
})
