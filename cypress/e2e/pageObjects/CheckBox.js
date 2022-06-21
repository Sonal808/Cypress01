class CheckBox
{
    getcheckboxlink()
    {
        return cy.get("a[href='/checkboxes']")
    }

    getcheckbox()
    {
        return cy.get('form input:nth-child(1)')
    }
    getallcheckbox()
    {
        return cy.get('form[id="checkboxes"]')
    }

}
export default CheckBox;