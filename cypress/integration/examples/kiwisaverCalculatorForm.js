


/// <reference types="cypress" />
import 'cypress-iframe'
import KsCalculatorPage from '../locators/ks-calculator-screen-locators'
const ksCalPage = new KsCalculatorPage()

import KsFormLocators from '../locators/kiwisaver-form-locators'
const formElements= new KsFormLocators()


class KscalculatorForm{
    
    fillKsForm(testdata){
        cy.log('testdata', testdata);
        
        cy.frameLoaded(ksCalPage.iframeElement)
        cy.enter(ksCalPage.iframeElement).then(getBody => {    
        cy.log('typeof testdata.age', typeof testdata.age);
        getBody().find(ksCalPage.currentAge).find(formElements.element1).clear().type(testdata.age) 

        getBody().find(ksCalPage.employmentStatus).find(formElements.element1).click() 
        getBody().find(formElements.element2).contains(testdata.employment_status).click() 

        if ((testdata.employment_status) == 'Employed') {
            getBody().find(ksCalPage.annualSalary).find(formElements.element1).type(testdata.annual_wages) 

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
        else {       
            getBody().find(ksCalPage.pir).find(formElements.element1).click() 
            getBody().find(formElements.element2).contains(testdata.pir).click() 
            getBody().find(ksCalPage.kiwisaverBalance).find(formElements.element1).clear().type(testdata.ks_balance)
            getBody().find(ksCalPage.volContributions).find(formElements.volContriTxtInput).clear().type(testdata.vol_contribution)
            getBody().find(ksCalPage.volContributions).find(formElements.volContridrpdwn).click()
            getBody().find(formElements.element2).contains(testdata.vol_contribution_frequency).click()
            if (testdata.risk_profile == 'Low') {
                getBody().find(formElements.lowRiskProfile).check() 
            } 
            else if (testdata.risk_profile == 'Medium') {
                getBody().find(formElements.medRiskProfile).check() 
            } 
            else if (testdata.risk_profile == 'High') {
                getBody().find(formElements.highRiskProfile).check() 
            } 
            getBody().find(ksCalPage.savingGoalAtRetirement).find(formElements.element1).type(testdata.saving_goal)
            cy.wait(100)
            getBody().find(formElements.submitBtn).contains(formElements.submitBtnText).click()   
            getBody().find(formElements.resultHeadingText).should("be.visible")
        }
    })
}


}
export default KscalculatorForm;