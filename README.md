Requirements
Any computer: Mac, Windows, Linux
Download & Install node.js

In order to get the code and install dependencies

git clone git@github.com:ervishal79/CypressDemo
cd CypressDemo
npm install


Install the following dependency. It adds iframe support to Cypress 
npm install -D cypress-iframe


To launch cypress run the following command: 
npx cypress open
 
 Running Tests:

Tests can be run from UI or through Terminal:

Through UI - you can run all the spec files or any one of them alone.

Run the following command in terminal to run the tests
The below command will run all the test in 'examples' folder in headless mode
npx cypress run


To run the tests in browser run the following command.
npx cypress run --headed 

To run the tests in Chrome Browser
 npx cypress run --browser chrome 

To run a specific test 
 npx cypress run --spec ".\cypress\integration\firsttest.spec.js"
