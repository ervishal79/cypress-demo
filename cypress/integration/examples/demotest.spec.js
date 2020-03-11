/// <reference types="cypress" />
import 'cypress-iframe'

import HomePage from '../locators/home-page-locators'
const homepage = new HomePage()

import KsCalculatorPage from '../locators/ks-calculator-screen-locators'
const ksCalPage = new KsCalculatorPage()

import KsFormLocators from '../locators/kiwisaver-form-locators'
const formElements= new KsFormLocators()

describe ('First Demo Testsuite', () => {

    beforeEach ('launch the website', () =>{
        cy.visit('https://westpac.co.nz')
        homepage.logo.should('be.visible')
        homepage.ksField.should('be.visible').trigger('mouseover')
        homepage.ksCalBtn.should('be.visible').click()
        homepage.startHereBtn.should('be.visible').click()
    })

    it('Valitdate Info Icon messages on KiwiSaver Retirement Calculator Page', () => {
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
    })

    it('Calculate Projected KiwiSaver Balance -- Use Case 1', () => {
        cy.frameLoaded(ksCalPage.iframeElement)
        cy.enter(ksCalPage.iframeElement).then(getBody => {    
        getBody().find(ksCalPage.currentAge).find(formElements.element1).type('30')
        getBody().find(ksCalPage.employmentStatus).find(formElements.element1).click()
        getBody().find(formElements.element2).contains(formElements.employementStatus1).click()
        getBody().find(ksCalPage.annualSalary).find(formElements.element1).type('82000')
        getBody().find(formElements.ksContribution4percent).check()
        getBody().find(ksCalPage.pir).find(formElements.element1).click()
        getBody().find(formElements.element2).contains(formElements.pirOption2).click()
        getBody().find(formElements.highRiskProfile).check()
        cy.wait(100)
        getBody().find(formElements.submitBtn).contains(formElements.submitBtnText).click()   
        getBody().find(formElements.resultHeadingText).should("be.visible")
        })

    })

    it('Calculate Projected KiwiSaver Balance -- Use Case 2', () => {
        cy.frameLoaded(ksCalPage.iframeElement)
        cy.enter(ksCalPage.iframeElement).then(getBody => {    
        getBody().find(ksCalPage.currentAge).find(formElements.element1).type('45')
        getBody().find(ksCalPage.employmentStatus).find(formElements.element1).click()
        getBody().find(formElements.element2).contains(formElements.employementStatus2).click()     
        getBody().find(ksCalPage.pir).find(formElements.element1).click()
        getBody().find(formElements.element2).contains(formElements.pirOption1).click()
        getBody().find(ksCalPage.kiwisaverBalance).find(formElements.element1).type('100000')
        getBody().find(ksCalPage.volContributions).find(formElements.volContriTxtInput).type('90')
        getBody().find(ksCalPage.volContributions).find(formElements.volContridrpdwn).click()
        getBody().find(formElements.element2).contains(formElements.frequency3).click()
        getBody().find(formElements.medRiskProfile).check()
        getBody().find(ksCalPage.savingGoalAtRetirement).find(formElements.element1).type('290000')
        cy.wait(100)
        getBody().find(formElements.submitBtn).contains(formElements.submitBtnText).click()   
        getBody().find(formElements.resultHeadingText).should("be.visible")
        })

    })

    it('Calculate Projected KiwiSaver Balance -- Use Case 3', () => {
        cy.frameLoaded(ksCalPage.iframeElement)
        cy.enter(ksCalPage.iframeElement).then(getBody => {    
        getBody().find(ksCalPage.currentAge).find(formElements.element1).type('55')
        getBody().find(ksCalPage.employmentStatus).find(formElements.element1).click()
        getBody().find(formElements.element2).contains(formElements.employementStatus3).click()     
        getBody().find(ksCalPage.pir).find(formElements.element1).click()
        getBody().find(formElements.element2).contains(formElements.pirOption1).click()
        getBody().find(ksCalPage.kiwisaverBalance).find(formElements.element1).type('140000')
        getBody().find(formElements.medRiskProfile).check()
        getBody().find(ksCalPage.savingGoalAtRetirement).find(formElements.element1).type('200000')
        cy.wait(100)
        getBody().find(formElements.submitBtn).contains(formElements.submitBtnText).click()   
        getBody().find(formElements.resultHeadingText).should("be.visible")
        })

    })


})