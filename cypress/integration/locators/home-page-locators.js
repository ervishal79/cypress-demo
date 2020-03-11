
class HomePage {
    
    get logo() {
        return cy.get('#logo');
    }
    
    get ksField() {
        return cy.get('#ubermenu-section-link-kiwisaver-ps');
    }

    get ksCalBtn() {
        return cy.get('#ubermenu-item-cta-kiwisaver-calculators-ps');
    }
    
    get startHereBtn() {
        return cy.contains('Click here to get started.')
    }
}

export default HomePage;