/// <reference types="Cypress" />
import HoverPage from '../e2e/pageObjects/HoverPage'
describe('Automation Task4', () => {
    it('Validate Mouse Hover', () => {
      const hoverpage = new HoverPage()
      cy.visit('https://the-internet.herokuapp.com/')
      hoverpage.gethoverlink().click()
      cy.title().should('eq','The Internet')

      hoverpage.getimage().invoke('show')
      
      hoverpage.getimagelink().click({force: true})
      cy.url().should('include','1')


    })
  })
