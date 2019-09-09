Prerequisites
=============
1.install npm node.js package manager
2.install latest Cypress 3.4.1 using the below command
  npm install cypress

STEP 1: Install node module dependencies using the below command

npm install

STEP 2: Execute the below command to run the tests in headless mode

npm run cy:run

or

Execute the below command to run the tests in head mode

npm run cypress:open

Video file is located in the videos directory


Project Structure
=================

cypress/integration/test-data.js = Has the test data used for testing
cypress/integration/calculator.spec.js = Has the test cases
cypress/support/commands.js = Has the commands to execute the common tests


