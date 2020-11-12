import 'cypress-iframe'
import info_texts from "../testData/infoMsgs"

export const navigateToKsCalculator = () => {
    cy.visit("kiwisaver/calculators/");
    cy.get(".btn").contains("Click here to get started.")
      .should("be.visible")
      .and('have.attr', 'href', '/kiwisaver/calculators/kiwisaver-calculator/')
      .click()
}

export const validateInfoMsg = (msgs) => {
    cy.frameLoaded("#calculator-embed > iframe")
    cy.enter("#calculator-embed > iframe").then(getBody => {
        getBody().find("[label=Current age]").find("i.icon").first().click()
        getBody().find('p').contains(ksCalPage.currentAgeMsg).should('be.visible')


        getBody().find(ksCalPage.employmentStatus).find(ksCalPage.infoIcon).first().click()
        getBody().find('p').contains(ksCalPage.employmentStatusMsg).should('be.visible')
        getBody().find(ksCalPage.pir).find(ksCalPage.infoIcon).first().click()
        getBody().find('p').contains(ksCalPage.pirMsg).should('be.visible')
        getBody().find(ksCalPage.kiwisaverBalance).find(ksCalPage.infoIcon).first().click()
        getBody().find('p').contains(ksCalPage.kiwisaverBalanceMsg).should('be.visible')
        getBody().find(ksCalPage.volContributions).find(ksCalPage.infoIcon).first().click()
        getBody().find('p').contains(ksCalPage.volContributionsMsg).should('be.visible')
        getBody().find(ksCalPage.riskProfile).find(ksCalPage.infoIcon).first().click()          
        getBody().find(ksCalPage.savingGoalAtRetirement).find(ksCalPage.infoIcon).first().click()
        getBody().find('p').contains(ksCalPage.savingGoalAtRetirementMsg).should('be.visible')
    })
}
