import infoText from "../testData/infoMsgs";
import formData from "../testData/formTestData";

const { navigateToKsCalculator, validateInfoMsg, fillForm } = require("../utils/ksCalculator");

describe("Run Calculator Test Scenarios ", () => {
  beforeEach("Load the page before the entire tests runs", () => {
    cy.visit("/");
    navigateToKsCalculator();
  });

  it("TC01 : Check Info icon present on all the fields in Ks Ret Calculator", () => {
    validateInfoMsg(infoText);
  });

  it("TC02 : Users should able to calculate their projected KiwiSaver balance", () => {
    cy.wrap(formData).each(data => {
      fillForm(data);
      cy.reload();
    });
  });
});
