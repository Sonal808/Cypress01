class HoverPage
{
    gethoverlink()
    {
        return cy.get("a[href='/hovers']")
    }

    getimage(){

        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > img:nth-child(1)')
    }

    getimagelink(){

        return cy.get('a[href="/users/1"]')
    }


}
export default HoverPage;