
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
