class LoginPage
{
    getlink()
    {
        return cy.get("a[href='/login']")
    }

    getloginbutton()
    {
        return cy.get('i[class="fa fa-2x fa-sign-in"]')
    }

    getmessage()
    {
        return cy.get('#flash')
    }

    getusername()
    {
        return cy.get('#username')
    }

    getpassword()
    {
        return cy.get('#password')
    }

    getwelcome()
    {
        return cy.get('h4.subheader')
    }

    getlogout()
    {
        return cy.get('.icon-2x')
    }

    getloginheader()
    {
        return cy.get('h2')
    }

}
export default LoginPage;