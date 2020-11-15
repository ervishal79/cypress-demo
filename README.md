**Requirements**

Any computer: Mac, Windows, Linux
Download & Install node.js

In order to get the code and install dependencies

Clone : 
`https://github.com/ervishal79/cypress-demo.git`

goto the directory :
`cd CypressDemo`
`npm install`

**To launch cypress in UI mode, run the following command :** 

`npx cypress open`

**If cypress fails to start then Install Cypress in the above directory**

`npm install cypress --save-dev`
OR
`npx cypress install --force`

_************************************************************************_ :

_This cypress demo is integrated with mochawesome HTML reporter To RUN cypress tests with HTML reporter on MAC/LINUX_
    `npm run cypress:tests`


_************************************************************************_ :
_In WINDOWS replace the above script in package.json with the following_
    `"clean:reports": "mkdir cypress\\reports\\mochareports"`

_To RUN cypress tests with HTML reporter on WINDOWS_
    `if (Test-Path -Path ".\cypress\reports\") {Remove-Item -Path ".\cypress\reports\" -recurse }`
    `npm run cypress:tests`

_************************************************************************_ :

**Running Tests in NORMAL Mode through UI or Terminal:** 

_To run tests through UI_
`npx cypress open`


**Run the following command in terminal to run the tests**

_The below command will run all the spec files in cypress/integration folder in headless mode :_

`npx cypress run`


_To run the tests in browser run the following command._ : 

`npx cypress run --headed `

_To run the tests in Chrome Browser_ :

` npx cypress run --browser chrome` 

_To run a specific test_ :

` npx cypress run --spec ".\cypress\integration\userStory_spec.js.spec.js"`


Reference : 
`https://dev.to/cssoldiervoif/cypress-mochawesome-report-setup-made-easy-4bgp`
