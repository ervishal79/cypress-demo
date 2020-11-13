import "cypress-iframe";

export const navigateToKsCalculator = () => {
  cy.visit("kiwisaver/calculators/");
  cy.get(".btn")
    .contains("Click here to get started.")
    .should("be.visible")
    .and("have.attr", "href", "/kiwisaver/calculators/kiwisaver-calculator/")
    .click();
};

export const validateInfoMsg = msgs => {
  cy.frameLoaded("#calculator-embed > iframe").should("be.visible");
  cy.enter("#calculator-embed > iframe").then(getBody => {
    getBody()
      .find("div[help-id=CurrentAge]")
      .find("i.icon")
      .should("be.visible")
      .click();
    getBody()
      .find("p")
      .contains("age limit")
      .should("have.text", msgs.current_age);
    getBody()
      .find("div[help-id=EmploymentStatus]")
      .find("i.icon")
      .click();
    getBody()
      .find("p")
      .contains("3%")
      .should("have.text", msgs.emp_status);
    getBody()
      .find("div[help-id=KiwiSaverBalance]")
      .find("i.icon")
      .click();
    getBody()
      .find("p")
      .contains("leave this field blank")
      .should("have.text", msgs.current_ks_balance);
    getBody()
      .find("div[help-id=VoluntaryContributions]")
      .find("i.icon")
      .click();
    getBody()
      .find("p")
      .contains("'Self-Employed' or 'Not employed'")
      .should("have.text", msgs.vol_contribution);
    getBody()
      .find("div[help-id=RiskProfile]")
      .find("i.icon")
      .click();
    getBody()
      .find("p")
      .contains(msgs.risk_profile)
      .should("be.visible");
    getBody()
      .find("div[help-id=SavingsGoal]")
      .find("i.icon")
      .click();
    getBody()
      .find("p")
      .contains(msgs.saving_goal)
      .should("be.visible");
  });
};

export const fillForm = data => {
  cy.frameLoaded("#calculator-embed > iframe").should("be.visible");
  cy.enter("#calculator-embed > iframe").then(getBody => {
    getBody()
      .find("div[help-id=CurrentAge]")
      .find("div.control-well>input")
      .clear()
      .type(data.age);
    getBody()
      .find("div[help-id=EmploymentStatus]")
      .find("div.control-well")
      .click();
    getBody()
      .find("div.label")
      .contains(data.employment_status)
      .click();
    if (data.employment_status === "Employed") {
      getBody()
        .find("[help-id=AnnualIncome]")
        .find("div.control-well>input")
        .clear()
        .type(data.annual_wages);
      if (data.ks_contribution === "3%") {
        getBody()
          .find(".radio-control[value=3]")
          .click();
      } else if (data.ks_contribution === "4%") {
        getBody()
          .find(".radio-control[value=4]")
          .click();
      } else if (data.ks_contribution === "6%") {
        getBody()
          .find(".radio-control[value=6]")
          .click();
      } else if (data.ks_contribution === "8%") {
        getBody()
          .find(".radio-control[value=8]")
          .click();
      } else if (data.ks_contribution === "10%") {
        getBody()
          .find(".radio-control[value=10]")
          .click();
      }
    }
    getBody()
      .find(".wpnib-field-kiwi-saver-balance")
      .find("div.control-well>input")
      .clear()
      .type(data.ks_balance);
    getBody()
      .find(".wpnib-field-voluntary-contributions")
      .find("div.control-well>input")
      .clear()
      .type(data.ks_balance);
    getBody()
      .find(".wpnib-field-voluntary-contributions")
      .find("div.control-well>div.well-value")
      .click();
    getBody()
      .find("div.label")
      .contains(data.vol_contribution_frequency)
      .click();
    if (data.risk_profile === "Defensive") {
      getBody()
        .find("#radio-option-013")
        .click();
    } else if (data.risk_profile === "Conservative") {
      getBody()
        .find("#radio-option-016")
        .click();
    } else if (data.risk_profile === "Balanced") {
      getBody()
        .find("#radio-option-019")
        .click();
    } else if (data.risk_profile === "Growth") {
      getBody()
        .find("#radio-option-01C")
        .click();
    }
    getBody()
      .find(".wpnib-field-savings-goal")
      .find("div.control-well>input")
      .clear()
      .type(data.saving_goal);
    // getBody().find(formElements.submitBtn).contains(formElements.submitBtnText).click()
    // getBody().find(formElements.resultHeadingText).should("be.visible")
  });
};