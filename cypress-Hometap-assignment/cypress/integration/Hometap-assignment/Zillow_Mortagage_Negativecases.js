describe('Verification of Zillow Mortgage Calculator page', () => {

  it('Load URL of Mortagage Calculator Page', () => {
    cy.visit('https://www.zillow.com/mortgage-calculator/');
  });
  
  it('Verification of Negative scenarios releated to Interest Rate field', () => {

    //Verify the default value is displayed for all fields
    cy.verifyDefaultValuesInMortgageCalculator('6.62');


    //Enter value for Homeprice,downpayment and Loan program options
    cy.get('#homePrice').clear().type('450000')
    cy.get('#form-1_downPayment').clear().type('75000');
    cy.get('select#form-1_term option:selected').should('have.text', '30 year fixed')
  

    //scenario 1 (Verify the error message "Rate must be greater than or equal to 0" when Interest rate value is entered as "-1"))
    cy.get('#rate').clear().type('-1');
    cy.contains('Advanced').click();
    cy.contains('Rate must be greater than or equal to 0');

    //scenario 2 (Verify the error message ""Rate must be less than or equal to 100"" when Interest rate value is entered as "101")
    cy.get('#rate').clear().type('101');
    cy.contains('Simple').click();
    cy.contains('Rate must be less than or equal to 100');

    //scenario 3 (Verify the error message ""XXXX not a valid number"" when alphanumeric and letters are entered by user in Interest rate field")
    cy.get('#rate').clear().type('abc');
    cy.contains('Advanced').click();
    cy.contains('\'abc\' is not a valid number');

    //scenario 4 (Verify the error message ""Invalid value"" when the Interest rate field is left blank by the user")
    cy.get('#rate').clear();
    cy.contains('Simple').click();
    cy.contains('Invalid value');

  
  });

});
