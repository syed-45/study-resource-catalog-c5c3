/// <reference types="cypress" />
// suppressed 'cannot find name "cy"'

describe('My Resource Study Site', () => {
    it('is available online', () => {
        cy.visit('https://study-resource-catalog-c5c3.netlify.app/')
        cy.get('select#user-dropdown').select('Sevgi')
        cy.contains('Login').click()
        cy.contains('My Study List')
        cy.contains('Submit Resource')
        cy.contains('LogOut').click()
        cy.contains('My Study List').should('not.exist')
        cy.contains('Submit Resource').should('not.exist')
    })
})