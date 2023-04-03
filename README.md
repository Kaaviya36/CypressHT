Steps to run the project:

1. Download the project from Github
2. Make sure the cypress is installed. Please refer below link for installing and opening cypress for first time
      https://docs.cypress.io/guides/getting-started/installing-cypress
      https://docs.cypress.io/guides/getting-started/opening-the-app
3. Select the project that you want to run in cypress and select the files from the project to start the execution
4. You can select the browser in which you have to run the scripts as well

Note: You can trigger the scripts directly from terminal(https://docs.cypress.io/guides/guides/command-line) or directly from cypress application.


Future Enhancements:
1. To run the tests in multiple environment we have to configure the values in cypress.json  and use in our test file as “ cy.visit(Cypress.env('url' + Cypress.env('host')) + '/apply’);” to visit the url for different environments.
Note: You can alter the values of host from command line as well. Basically whatever value we give in terminal will overwrite the value mentioned in cypress.json 

        Below is the sample cypress.json file
        {
           “url”:”https://xxx.com”
           "host": "uat",
        }


2. When the application big and we have to handle large amount of test data we need to use fixtures file to store them as JSON files. Make sure to load the fixture file using beforeEach().

3. All the common functions should be in commands.js file so that we can reuse across any tests file whenever required and easy for maintenance as well.  Handling the code this way will avoid modifying the same changes in multiple files.

4. As the application grows and we are in a place where we need to use multiple it() for different scenarios and for easy readability preserving the cookies might be a problem. Adding below code in beforeEach() will avoid this issue.

            Cypress.Cookies.defaults({
                preserve: (cookie) => {
                return true;
                },
            });
            
 5. Scripts can be easily integrated to CI/CD pipelines and notifications can be send to slack about failures if needed.           
