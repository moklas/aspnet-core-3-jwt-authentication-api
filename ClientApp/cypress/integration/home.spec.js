/// <reference types="Cypress" />

describe('Home', () => {
  before(() => {
    cy.login()
    cy.saveLocalStorage()
  });

  beforeEach(() => {
    cy.restoreLocalStorage()
    cy.visit('/')
  });

  it("has title 'Hi Test!'", () => {
    cy.get('h1')
	    .should('have.text', 'Hi Test!')
  })
})
