/// <reference types="Cypress" />
import DropDownPage from '../e2e/pageObjects/DropDownPage'
describe('Automation Task1', () => {
  const dropdownpage = new DropDownPage()
    it('passes', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      dropdownpage.getdropdownlink().click()
      cy.title().should('eq','The Internet')

      dropdownpage.getdropdown().select('1').should('have.value','1')
      dropdownpage.getdropdown().select('2').should('have.value','2')
   

    })
  })