import "cypress-iframe";
import ksFormElements from "../locators/elementIds";

export const navigateToKsCalculator = () => {
  cy.visit("kiwisaver/calculators/");
  cy.get(".btn")
    .contains("Click here to get started.")
    .should("be.visible")
    .and("have.attr", "href", "/kiwisaver/calculators/kiwisaver-calculator/")
    .click();
};

export const validateInfoMsg = msgs => {
  cy.frameLoaded(ksFormElements.IFRAME_ELEMENT).should("be.visible");
  cy.enter(ksFormElements.IFRAME_ELEMENT).then(getBody => {
    getBody()
      .find(ksFormElements.CURRENT_AGE)
      .find(ksFormElements.INFO_ICON)
      .should("be.visible")
      .click();
    getBody()
      .find("p")
      .contains("age limit")
      .should("have.text", msgs.current_age);
    getBody()
      .find(ksFormElements.EMPLOYEMENT_STATUS)
      .find(ksFormElements.INFO_ICON)
      .click();
    getBody()
      .find("p")
      .contains("3%")
      .should("have.text", msgs.emp_status);
    getBody()
      .find(ksFormElements.KS_BALANCE)
      .find(ksFormElements.INFO_ICON)
      .click();
    getBody()
      .find("p")
      .contains("leave this field blank")
      .should("have.text", msgs.current_ks_balance);
    getBody()
      .find(ksFormElements.VOL_CONTRIBUTIONS)
      .find(ksFormElements.INFO_ICON)
      .click();
    getBody()
      .find("p")
      .contains("'Self-Employed' or 'Not employed'")
      .should("have.text", msgs.vol_contribution);
    getBody()
      .find(ksFormElements.RISK_PROFILE)
      .find(ksFormElements.INFO_ICON)
      .click();
    getBody()
      .find("p")
      .contains(msgs.risk_profile)
      .should("be.visible");
    getBody()
      .find(ksFormElements.SAVING_GOAL)
      .find(ksFormElements.INFO_ICON)
      .click();
    getBody()
      .find("p")
      .contains(msgs.saving_goal)
      .should("be.visible");
  });
};

export const fillForm = data => {
  cy.frameLoaded(ksFormElements.IFRAME_ELEMENT).should("be.visible");
  cy.enter(ksFormElements.IFRAME_ELEMENT).then(getBody => {
    getBody()
      .find(ksFormElements.CURRENT_AGE)
      .find(ksFormElements.TEXT_INPUT_ELEMENT)
      .clear()
      .type(data.AGE);
    getBody()
      .find(ksFormElements.EMPLOYEMENT_STATUS)
      .find(ksFormElements.DROPDOWN_ELEMENT)
      .click();
    getBody()
      .find(ksFormElements.DROPDOWN_VALUE)
      .contains(data.EMPLOYMENT_STATUS)
      .click();
    if (data.EMPLOYMENT_STATUS === "Employed") {
      getBody()
        .find(ksFormElements.ANNUAL_SALARY)
        .find(ksFormElements.TEXT_INPUT_ELEMENT)
        .clear()
        .type(data.ANNUAL_WAGES);
      if (data.KS_CONTRI === "3%") {
        getBody()
          .find(ksFormElements.KS_CONTRIBUTION_3PERCENT)
          .click();
      } else if (data.KS_CONTRI === "4%") {
        getBody()
          .find(ksFormElements.KS_CONTRIBUTION_4PERCENT)
          .click();
      } else if (data.KS_CONTRI === "6%") {
        getBody()
          .find(ksFormElements.KS_CONTRIBUTION_6PERCENT)
          .click();
      } else if (data.KS_CONTRI === "8%") {
        getBody()
          .find(ksFormElements.KS_CONTRIBUTION_8PERCENT)
          .click();
      } else if (data.KS_CONTRI === "10%") {
        getBody()
          .find(ksFormElements.KS_CONTRIBUTION_10PERCENT)
          .click();
      }
    }
    getBody()
      .find(ksFormElements.KS_BALANCE)
      .find(ksFormElements.TEXT_INPUT_ELEMENT)
      .clear()
      .type(data.KS_BAL);
    getBody()
      .find(ksFormElements.VOL_CONTRIBUTIONS)
      .find(ksFormElements.TEXT_INPUT_ELEMENT)
      .clear()
      .type(data.KS_BAL);
    getBody()
      .find(ksFormElements.VOL_CONTRIBUTIONS)
      .find(ksFormElements.VOL_CONTRI_DROPDOWN)
      .click();
    getBody()
      .find(ksFormElements.DROPDOWN_VALUE)
      .contains(data.VOL_CONTRI_FREQUENCY)
      .click();
    if (data.RISK_PROFILE === "Defensive") {
      getBody()
        .find(ksFormElements.DEFENSIVE_RISK_PROFILE)
        .click();
    } else if (data.RISK_PROFILE === "Conservative") {
      getBody()
        .find(ksFormElements.CONSERVATIVE_RISK_PROFILE)
        .click();
    } else if (data.RISK_PROFILE === "Balanced") {
      getBody()
        .find(ksFormElements.BALANCED_RISK_PROFILE)
        .click();
    } else if (data.RISK_PROFILE === "Growth") {
      getBody()
        .find(ksFormElements.GROWTH_RISK_PROFILE)
        .click();
    }
    getBody()
      .find(ksFormElements.SAVING_GOAL)
      .find(ksFormElements.TEXT_INPUT_ELEMENT)
      .clear()
      .type(data.SAVING_GOAL);
    getBody()
      .find(ksFormElements.SUBMIT_BTN)
      .contains(ksFormElements.SUBMIT_BTN_TEXT)
      .click();
    getBody()
      .find(ksFormElements.RESULT_HEADING_TEXT)
      .should("be.visible");
  });
};
