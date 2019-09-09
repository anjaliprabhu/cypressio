import * as CONSTANT from "./test-data";

context('calculator', () => {

  it('Google search and open calculator', () => {
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf')
      .type('calculator{enter}')
  })

  it('Test calculator has all the buttons', () => {
    for (let [button, buttonCss] of CONSTANT.buttons) {
      cy.get(buttonCss).should('have.text', button)
    }
  })

  it('Addition Test Cases', () => {
    cy.calculate(CONSTANT.additionTestCases, CONSTANT)
  })

  it('Subtraction Test Cases', () => {
    cy.calculate(CONSTANT.subtractionTestCases, CONSTANT)
  })

  it('Multiplication Test Cases', () => {
    cy.calculate(CONSTANT.multiplicationTestCases, CONSTANT)
  })

  it('Division Test Cases', () => {
    cy.calculate(CONSTANT.divisionTestCases, CONSTANT)
  })

  it('Decimal Test Cases', () => {
    cy.calculate(CONSTANT.decimalNumberTestCases, CONSTANT)
  })

  it('Clear Entry Test Cases', () => {
    cy.calculate(CONSTANT.clearEntryTestCases, CONSTANT)
  })

  it('All Clear Test Cases', () => {
    cy.calculate(CONSTANT.allClearTestCases, CONSTANT)
  })

  it('Negative TestCases', () => {
    cy.calculate(CONSTANT.negativeTestCases, CONSTANT)
  })

})
