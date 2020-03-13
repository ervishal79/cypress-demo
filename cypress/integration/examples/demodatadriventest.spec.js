/// <reference types="cypress" />
import 'cypress-iframe'

import dataset from './form-testdata'
import KscalculatorForm from './kiwisaverCalculatorForm'
const form = new KscalculatorForm()

import KsFormLocators from '../locators/kiwisaver-form-locators'
const formElements= new KsFormLocators()


describe ('First Demo Testsuite', () => {

    beforeEach ('launch the website', () =>{
        cy.visit('https://www.westpac.co.nz/kiwisaver/calculators/kiwisaver-calculator/')
    })

    it('Valitdate Info Icon messages on KiwiSaver Retirement Calculator Page', () => {

        cy.wrap(dataset).each(data => {
            form.fillKsForm(data)
        });
                
    })

  


})