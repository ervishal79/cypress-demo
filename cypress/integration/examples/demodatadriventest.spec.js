/// <reference types="cypress" />
import 'cypress-iframe'

import HomePage from '../locators/home-page-locators'
const homepage = new HomePage()

import formdata from './ks-form-data'

import KsCalculatorPage from '../locators/ks-calculator-screen-locators'
const ksCalPage = new KsCalculatorPage()

import KscalculatorForm from '../examples/kiwisaverCalculatorForm'
const form = new KscalculatorForm()

import KsFormLocators from '../locators/kiwisaver-form-locators'
const formElements= new KsFormLocators()


describe ('First Demo Testsuite', () => {

    beforeEach ('launch the website', () =>{
        form.navigateToKsForm()
    })

    it('Valitdate Info Icon messages on KiwiSaver Retirement Calculator Page', () => {
        form.validateInfoIconMessages()
    })

    // it('Calculate Projected KiwiSaver Balance', () => {

    //     cy.wrap(formdata).each(data => {
    //         form.fillKsForm(data)
    //         cy.reload()
    //     });
                
    // })
})