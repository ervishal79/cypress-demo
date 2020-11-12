const { navigateToKsCalculator } = require("../utils/calculator");

describe("Run Calculator Test Scenarios ", () => {
    beforeEach("Load the page before the entire tests runs", () => {
        cy.visit("/");
    })

    it("Check Info icon present on all the fields in Ks Ret Calculator", () => {
        navigateToKsCalculator();
    
    })





})

