/// <reference types="cypress" />
import 'cypress-iframe'

import HomePage from '../locators/home-page-locators'
const homepage = new HomePage()

import formdata from './ks-form-data'

import KsCalculatorPage from '../locators/ks-calculator-screen-locators'
const ksCalPage = new KsCalculatorPage()

import KscalculatorForm from './kiwisaverCalculatorForm'
const form = new KscalculatorForm()

import KsFormLocators from '../locators/kiwisaver-form-locators'
const formElements= new KsFormLocators()


describe ('First Demo Testsuite', () => {

    beforeEach ('launch the website', () =>{
        // cy.visit('https://www.westpac.co.nz/kiwisaver/calculators/kiwisaver-calculator/')
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

    it('Calculate Projected KiwiSaver Balance', () => {

        cy.wrap(formdata).each(data => {
            form.fillKsForm(data)
        });
                
    })
})