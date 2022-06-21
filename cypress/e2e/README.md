Technical task – deployment guide

1.	For the cypress tasks you can get the repo from below git url
a
https://github.com/Sonal808/Cypress_Task/tree/master

Also I have attached the zip folder if the repo download in not success full.

Before running the cypress test these are prerequisites.

(i). install nodejs in the machine
(Ii). The navigate to the relevant folder (Cyprestest) enter the following command
		npm install

Running the cypress tests,
You can run cypress tests in the test runner as well as in the command line as well. Also in the machine you need to have the relevant updated browsers, chrome and firefox.

To run in cypress runner,
Navigate to the folder via command prompt enter the following command,
	npx cypress open
After that you will get the ui window with the relevant spec files.

If you do not want to run the tests in cypress runner you can run in headless mode.

npx cypress run
By default, it will loaded tests in electron browser if you need to load the tests in a specific browser you need to give the following command,
 For chrome
npx cypress run –browser chrome

for firefox,

npx cypress run —browser firefox	










