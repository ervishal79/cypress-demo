**Requirements**

Any computer: Mac, Windows, Linux
Download & Install node.js

In order to get the code and install dependencies

Clone : 
`https://github.com/ervishal79/cypress-demo.git`

goto the directory :
`cd CypressDemo`


**Install Cypress in the above directory**

`npm install cypress --save-dev`

`npm install`


**To launch cypress in UI mode, run the following command :** 

`npx cypress open`
 
**Running Tests:** 
Tests can be run from UI or through Terminal:

Through UI - _you can run all the spec files or any one of them alone._

**Run the following command in terminal to run the tests**

The below command will run all the test in 'examples' folder in headless mode :

`npx cypress run`


_To run the tests in browser run the following command._ : 

`npx cypress run --headed `

_To run the tests in Chrome Browser_ :

` npx cypress run --browser chrome` 

_To run a specific test_ :

` npx cypress run --spec ".\cypress\integration\firsttest.spec.js"`

_************************************************************************_ :

_To integrate mochawesome html reports with cypress Run following steps_ :
`npm install --save-dev mocha cypress-multi-reporters mochawesome`
`npm i --D mocha mochawesome mochawesome-merge mochawesome-report-generator`

_Add following configs to cypress.json file_ :    
`"reporter": "cypress-multi-reporters",`
  `"reporterOptions": {`
    `"reporterEnabled": "mochawesome",`
    `"mochawesomeReporterOptions": {`
      `"reportDir": "cypress/reports/mocha",`
      `"quite": true,`
      `"overwrite": false,`
      `"html": false,`
      `"json": true`
   ` }`
 ` },`

_Add following scripts to package.json file_ : 
    `"clean:reports": "rm -rf cypress/reports && mkdir cypress/reports && mkdir cypress/reports/mochareports",`
    `"pretest": "npm run clean:reports",`
    `"tests": "npx cypress run --spec cypress/integration/tests/userStory_spec.js",`
    `"merge:json-report": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochareports/report.json",`
    `"create:html-report": "marge cypress/reports/mochareports/report.json -f report -o cypress/reports/mochareports",`
    `"generate:html-report": "npm run merge:json-report && npm run create:html-report",`
    `"cypress:tests": "npm run pretest && npm run tests && npm run generate:html-report"`

Reference : 
`https://dev.to/cssoldiervoif/cypress-mochawesome-report-setup-made-easy-4bgp`