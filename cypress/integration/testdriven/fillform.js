/// <reference types="cypress" />
import 'cypress-iframe'

class DemoForm {

    fillFrom(testdata) { 
        cy.get('input[placeholder="First Name"]').should('be.visible').clear().type(testdata.fname)
        cy.get('input[placeholder="Last Name"]').should('be.visible').clear().type(testdata.lname)
        cy.get('textarea.form-control').should('be.visible').clear().type(testdata.address)
        cy.get('input[type="email"]').should('be.visible').clear().type(testdata.email)
        cy.get('input[type="tel"]').should('be.visible').clear().type(testdata.phone)
        cy.get('input[type="radio"]').check(testdata.gender)
        cy.get('#countries').select(testdata.contry)
    }

}
export default DemoForm;