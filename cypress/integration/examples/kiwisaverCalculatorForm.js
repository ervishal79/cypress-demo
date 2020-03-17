


/// <reference types="cypress" />
import 'cypress-iframe'

import HomePage from '../locators/home-page-locators'
const homepage = new HomePage()

import KsCalculatorPage from '../locators/ks-calculator-screen-locators'
const ksCalPage = new KsCalculatorPage()

import KsFormLocators from '../locators/kiwisaver-form-locators'
const formElements= new KsFormLocators()


class KscalculatorForm{

    navigateToKsForm(){
        // cy.visit('/')
        // homepage.logo.should('be.visible')
        // homepage.ksField.should('be.visible').trigger('mouseover')
        // homepage.ksCalBtn.should('be.visible').click()
        // homepage.startHereBtn.should('be.visible').click()
        // To run on Windows comment out above code and use the below url
        cy.visit('/kiwisaver/calculators/kiwisaver-calculator/')
    }

    validateInfoIconMessages(){
        cy.frameLoaded(ksCalPage.iframeElement)
        cy.enter(ksCalPage.iframeElement).then(getBody => {
            getBody().find(ksCalPage.currentAge).find(ksCalPage.infoIcon).first().click()
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
    
    fillKsForm(testdata){      
        cy.frameLoaded(ksCalPage.iframeElement)
        cy.enter(ksCalPage.iframeElement).then(getBody => {    
        cy.wait(100)
        getBody().find(ksCalPage.currentAge).find(formElements.txtInputElement).clear().type(testdata.age) 
        cy.wait(100)
        getBody().find(ksCalPage.employmentStatus).find(formElements.dropdownElement).click() 
        getBody().find(formElements.element2).contains(testdata.employment_status).click() 
        cy.wait(100)
        if ((testdata.employment_status) == 'Employed') {
            getBody().find(ksCalPage.annualSalary).find(formElements.txtInputElement).clear().type(testdata.annual_wages) 
            cy.wait(100)
            if (testdata.ks_contribution == '3%') {
                getBody().find(formElements.ksContribution3percent).check() 
            } else if (testdata.ks_contribution == '4%') {
                getBody().find(formElements.ksContribution4percent).check() 
            }
            else if (testdata.ks_contribution == '6%') {
                getBody().find(formElements.ksContribution6percent).check() 
            }
            else if (testdata.ks_contribution == '8%') {
                getBody().find(formElements.ksContribution8percent).check() 
            }            
            else if (testdata.ks_contribution == '10%') {
                getBody().find(formElements.ksContribution10percent).check() 
            }
        } 
        cy.wait(100)
        getBody().find(ksCalPage.pir).find(formElements.dropdownElement).click() 
        getBody().find(formElements.element2).contains(testdata.pir).click() 
        cy.wait(100)
        getBody().find(ksCalPage.kiwisaverBalance).find(formElements.txtInputElement).clear().type(testdata.ks_balance)
        cy.wait(100)
        getBody().find(ksCalPage.volContributions).find(formElements.txtInputElement).clear().type(testdata.vol_contribution)
        cy.wait(100)
        getBody().find(ksCalPage.volContributions).find(formElements.volContridrpdwn).click()
        getBody().find(formElements.element2).contains(testdata.vol_contribution_frequency).click()
        cy.wait(100)
            if (testdata.risk_profile == 'Low') {
                getBody().find(formElements.lowRiskProfile).check() 
            } 
            else if (testdata.risk_profile == 'Medium') {
                getBody().find(formElements.medRiskProfile).check() 
            } 
            else if (testdata.risk_profile == 'High') {
                getBody().find(formElements.highRiskProfile).check() 
            } 
        cy.wait(100)
        getBody().find(ksCalPage.savingGoalAtRetirement).find(formElements.txtInputElement).clear().type(testdata.saving_goal)
        cy.wait(100)
        getBody().find(formElements.submitBtn).contains(formElements.submitBtnText).click()   
        getBody().find(formElements.resultHeadingText).should("be.visible")
    
    })
}


}
export default KscalculatorForm;