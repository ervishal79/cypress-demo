import "cypress-iframe";
import locators from "../locators/elementIds";

export const navigateToKsCalculator = () => {
  cy.visit("kiwisaver/calculators/");
  cy.get(".btn")
    .contains("Click here to get started.")
    .should("be.visible")
    .and("have.attr", "href", "/kiwisaver/calculators/kiwisaver-calculator/")
    .click();
};

export const validateInfoMsg = msgs => {
  cy.frameLoaded(locators.iframeElement).should("be.visible");
  cy.enter(locators.iframeElement).then(getBody => {
    getBody()
      .find(locators.currentAge)
      .find(locators.infoIcon)
      .should("be.visible")
      .click();
    getBody()
      .find("p")
      .contains("age limit")
      .should("have.text", msgs.current_age);
    getBody()
      .find(locators.employmentStatus)
      .find(locators.infoIcon)
      .click();
    getBody()
      .find("p")
      .contains("3%")
      .should("have.text", msgs.emp_status);
    getBody()
      .find(locators.kiwisaverBalance)
      .find(locators.infoIcon)
      .click();
    getBody()
      .find("p")
      .contains("leave this field blank")
      .should("have.text", msgs.current_ks_balance);
    getBody()
      .find(locators.volContributions)
      .find(locators.infoIcon)
      .click();
    getBody()
      .find("p")
      .contains("'Self-Employed' or 'Not employed'")
      .should("have.text", msgs.vol_contribution);
    getBody()
      .find(locators.riskProfile)
      .find(locators.infoIcon)
      .click();
    getBody()
      .find("p")
      .contains(msgs.risk_profile)
      .should("be.visible");
    getBody()
      .find(locators.savingGoal)
      .find(locators.infoIcon)
      .click();
    getBody()
      .find("p")
      .contains(msgs.saving_goal)
      .should("be.visible");
  });
};

export const fillForm = data => {
  cy.frameLoaded(locators.iframeElement).should("be.visible");
  cy.enter(locators.iframeElement).then(getBody => {
    getBody()
      .find(locators.currentAge)
      .find(locators.txtInputElement)
      .clear()
      .type(data.age);
    getBody()
      .find(locators.employmentStatus)
      .find(locators.dropDownElement)
      .click();
    getBody()
      .find(locators.dropDownValueElement)
      .contains(data.employment_status)
      .click();
    if (data.employment_status === "Employed") {
      getBody()
        .find(locators.annualSalary)
        .find(locators.txtInputElement)
        .clear()
        .type(data.annual_wages);
      if (data.ks_contribution === "3%") {
        getBody()
          .find(".radio-control[value=3]")
          .click();
      } else if (data.ks_contribution === "4%") {
        getBody()
          .find(locators.ksContribution3percent)
          .click();
      } else if (data.ks_contribution === "6%") {
        getBody()
          .find(locators.ksContribution4percent)
          .click();
      } else if (data.ks_contribution === "8%") {
        getBody()
          .find(locators.ksContribution6percent)
          .click();
      } else if (data.ks_contribution === "10%") {
        getBody()
          .find(locators.ksContribution10percent)
          .click();
      }
    }
    getBody()
      .find(locators.kiwisaverBalance)
      .find(locators.txtInputElement)
      .clear()
      .type(data.ks_balance);
    getBody()
      .find(locators.volContributions)
      .find(locators.txtInputElement)
      .clear()
      .type(data.ks_balance);
    getBody()
      .find(locators.volContributions)
      .find(locators.volContridrpdwn)
      .click();
    getBody()
      .find(locators.dropDownValueElement)
      .contains(data.vol_contribution_frequency)
      .click();
    if (data.risk_profile === "Defensive") {
      getBody()
        .find(locators.defensiveRiskProfile)
        .click();
    } else if (data.risk_profile === "Conservative") {
      getBody()
        .find(locators.conservativeRiskProfile)
        .click();
    } else if (data.risk_profile === "Balanced") {
      getBody()
        .find(locators.balancedRiskProfile)
        .click();
    } else if (data.risk_profile === "Growth") {
      getBody()
        .find(locators.growthRishProfile)
        .click();
    }
    getBody()
      .find(locators.savingGoal)
      .find(locators.txtInputElement)
      .clear()
      .type(data.saving_goal);
    getBody()
      .find(locators.submitBtn)
      .contains(locators.submitBtnText)
      .click();
    getBody()
      .find(locators.resultHeadingText)
      .should("be.visible");
  });
};
