import infoText from "../testData/infoMsgs";
import formData from "../testData/formTestData";
import screenSize from "../testData/testconfig";

const { navigateToKsCalculator, validateInfoMsg, fillForm } = require("../utils/ksCalculator");

describe("Run Calculator Test Scenarios ", () => {
  beforeEach("Load the page before the entire tests runs", () => {
    cy.visit("/");
  });

  screenSize.forEach(size => {
    it(`TC01 : Check Info icon present on all the fields in Ks Ret Calculator -- ${size}`, () => {
      cy.viewport(size);
      navigateToKsCalculator();
      validateInfoMsg(infoText);
    });

    it(`TC02 : Users should able to calculate their projected KiwiSaver balance -- ${size}`, () => {
      cy.viewport(size);
      navigateToKsCalculator();
      formData.forEach(data => {    
        fillForm(data);
        cy.reload();
      });
    });
  });
});