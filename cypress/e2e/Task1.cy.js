/// <reference types="Cypress" />
import CheckBox from '../e2e/pageObjects/CheckBox'
describe('Automation Task1', () => {
    it('Validate Checkboxes', () => {

      const checkbox = new CheckBox()
      cy.visit('https://the-internet.herokuapp.com/')
      checkbox.getcheckboxlink().click()
      cy.title().should('eq','The Internet')

      checkbox.getcheckbox().check().should('be.checked').and('have.value','on')
      checkbox.getcheckbox().uncheck().should('not.be.checked')
      //cy.get('form[id="checkboxes"]').eq(2).contains('checkbox 2').should('be.checked').and('have.value','on')
      checkbox.getallcheckbox().each(($el, index, $list) =>{

        const textname=$el.find('form[id="checkboxes"]').text()
        if(textname.includes('checkbox 2')){

            $el.should('be.checked').and('have.value','on')
            $el.uncheck().should('not.be.checked')
        }

    })



    })
  })
