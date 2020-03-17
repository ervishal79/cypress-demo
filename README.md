**Requirements**

Any computer: Mac, Windows, Linux
Download & Install node.js

In order to get the code and install dependencies

Clone : 
`https://github.com/ervishal79/cypress-demo.git`

goto the directory :
`cd CypressDemo`


**Install Cypress in the above directory**

`npm install cypress`

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
