/// <reference types="cypress" />
describe('empty spec', () => {
  it('passes', () => {   
      cy.visit('https://study-resource-catalog-c5c3.netlify.app/')
      cy.get('select#user-dropdown').select('Yara')
      cy.contains('Login').click()
      cy.contains('My Study List')
      cy.contains('Submit Resource').click()
      cy.get('textarea').type('I found you')
      cy.get('input').eq(0).type('Title')
      cy.get('input').eq(1).type('Author')
      cy.get('input').eq(2).type('Link')
      cy.get('input').eq(3).type('Not sure')
      cy.get('select').eq(1).select('Article')
      cy.get('select').eq(2).select(4) // week
      cy.get('select').eq(3).select(1) // recc option
      cy.get('button').eq(10).click();
      // cy.contains('Submit').click()  
  })
})