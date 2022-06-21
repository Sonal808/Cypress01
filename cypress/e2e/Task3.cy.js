/// <reference types="Cypress" />
import AlertPage from '../e2e/pageObjects/AlertPage'
describe('Automation Task3', () => {
    it('Validate Alerts', () => {
      const alertpage = new AlertPage()
      cy.visit('https://the-internet.herokuapp.com/')
      alertpage.getalertlink().click()
      cy.title().should('eq','The Internet')

      alertpage.getalertbutton().click()
      cy.on('window:alert',(str)=>{

        expect(str).to.equal('I am a JS Alert')
      })

      alertpage.getalertconfirm().click()

      cy.on('window:confirm',(str)=>{

        expect(str).to.equal('I am a JS Confirm')
      })

      cy.window().then(function(p){
      
        cy.stub(p, "prompt").returns("Test Automation");
        
        alertpage.getpromptalertbutton().click()
        cy.get('#result').contains('Automation')
        
      });
   

    })
  })
