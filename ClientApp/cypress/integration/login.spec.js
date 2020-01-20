/// <reference types="Cypress" />

describe('Login', () => {
  it("has title 'Login'", () => {
    cy.visit('/login')
    cy.get('h2')
      .should('have.text', 'Login')
    cy.get('.btn')
      .should('have.text', 'Login')
  })

  it("user logs in", () => {
    cy.get(':nth-child(1) > .form-control').type('test')
    cy.get(':nth-child(2) > .form-control').type('test')
    cy.get('.btn').click()
    cy.get('h1', { timeout: 7000 })
	    .should('have.text', 'Hi Test!')
	})
})
