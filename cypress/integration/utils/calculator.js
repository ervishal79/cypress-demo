import 'cypress-iframe'

export const navigateToKsCalculator = () => {
    cy.visit("kiwisaver/calculators/");
    cy.get(".btn").contains("Click here to get started.")
      .should("be.visible")
      .and('have.attr', 'href', '/kiwisaver/calculators/kiwisaver-calculator/')
      .click()
}

export const validateInfoMsg = (msgs) => {
    cy.frameLoaded("#calculator-embed > iframe").should("be.visible");
    cy.enter("#calculator-embed > iframe").then(getBody => {
        getBody().find("div[help-id=CurrentAge]").find("i.icon").should("be.visible").click();
        getBody().find("p").contains("age limit").should("have.text", msgs.current_age);
        getBody().find("div[help-id=EmploymentStatus]").find("i.icon").click();
        getBody().find('p').contains("3%").should("have.text", msgs.emp_status);
        getBody().find("div[help-id=KiwiSaverBalance]").find("i.icon").click();
        getBody().find('p').contains("leave this field blank").should("have.text", msgs.current_ks_balance);
        getBody().find("div[help-id=VoluntaryContributions]").find("i.icon").click();
        getBody().find('p').contains("'Self-Employed' or 'Not employed'").should("have.text", msgs.vol_contribution);
        getBody().find("div[help-id=RiskProfile]").find("i.icon").click();
        getBody().find('p').contains(msgs.risk_profile).should("be.visible");
        getBody().find("div[help-id=SavingsGoal]").find("i.icon").click();
        getBody().find('p').contains(msgs.saving_goal).should("be.visible");
    })
}
