import info_text from "../testData/infoMsgs"
const { navigateToKsCalculator, validateInfoMsg } = require("../utils/calculator");

describe("Run Calculator Test Scenarios ", () => {
    beforeEach("Load the page before the entire tests runs", () => {
        cy.visit("/");
        navigateToKsCalculator();
    })

    it("TC01 : Check Info icon present on all the fields in Ks Ret Calculator", () => {

        validateInfoMsg(info_text);  
    })

    // it("TC02 : Users should able to calculate their projected KiwiSaver balance", () => {
    //     navigateToKsCalculator();
    //     validateInfoMsg(info_text);  
    // })



})

