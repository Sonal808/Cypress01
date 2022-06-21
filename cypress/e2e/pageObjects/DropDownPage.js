class DropDownPage
{
    getdropdownlink()
    {
        return cy.get("a[href='/dropdown']")
    }

    getdropdown()
    {
       return cy.get('select[id="dropdown"]')
    }

}
export default DropDownPage;