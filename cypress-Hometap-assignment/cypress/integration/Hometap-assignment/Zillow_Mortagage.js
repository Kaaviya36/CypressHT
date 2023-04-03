

describe('Verification of Zillow Mortgage Calculator page', () => {

  it('Load URL of Mortagage Calculator Page', () => {
    cy.visit('https://www.zillow.com/mortgage-calculator/');
  });
  
  it('Verification of Acceptance tests related to Interest rate Field', () => {

    //Verify the default value is displayed for all fields
   cy.verifyDefaultValuesInMortgageCalculator('6.62');

    //Verify all the dropdown values for Loan program field
    var loanprogram_Array = ['30 year fixed', '15 year fixed','5-year ARM'];
    cy.get('#form-1_term')
      .children()
      .each(($ele_loanprogram) => {
        if (!loanprogram_Array.includes($ele_loanprogram.text())) {
          assert.isTrue(loanprogram_Array.includes($ele_loanprogram.text()), 'values not matchced');
        }
      });


    //Verify the new input field is displayed with right label name as "Interest rate""
    cy.get('#label_4').contains('Interest rate');

    //Verify that the (%) sign is displayed inside the input field as per the mockup
    cy.get('#__c11n_kv8o').contains('%');

    //Tooltip verification adjacent to Interest rate field
    cy.get('.zgmi__sc-1hfey7w-0 > .Flex-c11n-8-64-1__sc-n94bjd-0 > .TriggerButton-c11n-8-64-1__sc-19o64qd-0').trigger('mouseover').click();
    cy.contains('Representative interest rates are based upon a national, or state specific average from lenders quoting on Zillow for preliminary research purposes only. Actual available rates and monthly payment amounts are subject to market fluctuations and will depend on a number of factors, including geography and loan characteristics.');// Verify tooltip text
    cy.get('.CloseButton-sc-sqbalp-0').click();

   
    //Verify that the "See current rates" link is getting displayed adjacent to tooltip
    cy.get('.zgmi__sc-1hfey7w-0 > .StyledTextButton-c11n-8-64-1__sc-n1gfmh-0').should("have.attr", "href", "https://www.zillow.com/mortgage-rates/?value=300000&down=60000&auto=true&va=false&source=Z_Mortgage_Calc_rates")
    .should("have.text", "See current rates");
    
    //Verify clicking on "See current rates" link takes the user to a new tab with right url
    cy.contains('See current rates').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'https://www.zillow.com/mortgage-rates/?value=300000&down=60000&auto=true&va=false&source=Z_Mortgage_Calc_rates') // verify tab url
    cy.go('back'); // shift to parent window

     //Payment calculation for details entered by user
     cy.get('[y="20"]').invoke('text').should('eq','$1,946');

  });
});
