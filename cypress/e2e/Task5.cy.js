/// <reference types="Cypress" />
import LoginPage from '../e2e/pageObjects/LoginPage'

describe('Automation Task1', () => {



it('passes', () => {
  const loginpage = new LoginPage()
      cy.visit('https://the-internet.herokuapp.com/')
      
      loginpage.getlink().click()
      cy.title().should('eq','The Internet')

      loginpage.getloginbutton().click()
      loginpage.getmessage().contains('Your username is invalid')

      loginpage.getusername().type('tomsmith').should('have.value','tomsmith')
      loginpage.getpassword().type('SuperSecretPassword!').should('have.value','SuperSecretPassword!')
      loginpage.getloginbutton().click()
      cy.url().should('include','secure')
      loginpage.getwelcome().contains('Welcome to the Secure Area. When you are done click logout below.')
      loginpage.getlogout().click()
      loginpage.getloginheader().contains('Login Page')

     


    

      
      

      

      
   

    })
  })