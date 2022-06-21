class AlertPage
{

    getalertlink()
    {
        return cy.get("a[href='/javascript_alerts']")
    }

    getalertbutton()
    {
       return cy.get('button[onclick="jsAlert()"]')
    }

    getalertconfirm()
    {
        return cy.get('button[onclick="jsConfirm()"]')
    }

    getpromptalertbutton()
    {
        return cy.get('button[onclick="jsPrompt()"]')
    }

}
export default AlertPage;