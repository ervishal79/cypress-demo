/// <reference types="cypress" />
import 'cypress-iframe'

import DemoForm from './fillform'

import dataset from './testdatafile';
const form = new DemoForm()

describe ('Paremeterize Test', ()=>{
    beforeEach('Navigate to From', ()=>{
        cy.visit('http://demo.automationtesting.in/Register.html')
    })

    it('parameterize form', ()=>{ 
        
        cy.wrap(dataset).each(data => {
            form.fillFrom(data)
        });
        
    })







})