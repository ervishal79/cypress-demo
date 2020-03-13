


/// <reference types="cypress" />
import 'cypress-iframe'
import KsCalculatorPage from '../locators/ks-calculator-screen-locators'
const ksCalPage = new KsCalculatorPage()

import KsFormLocators from '../locators/kiwisaver-form-locators'
const formElements= new KsFormLocators()


class KscalculatorForm{
    
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