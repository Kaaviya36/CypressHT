

describe('Verification of Zillow Mortgage Calculator page', () => {

  it('Load URL of Mortagage Calculator Page', () => {
    cy.visit('https://www.zillow.com/mortgage-calculator/');
  });
  
  it('Verification of e2e case 1 for mortgage calculator', () => {

    //Verify the default value is displayed for all fields
   cy.verifyDefaultValuesInMortgageCalculator('6.62');

     //Enter value for Homeprice,downpayment and Loan program options
     cy.get('#homePrice').clear().type('450000')
     cy.get('#form-1_downPayment').clear().type('100000');
     cy.get('#form-1_downPaymentPercent').click().invoke('val').should('eq','22.22222222222222');
     //cy.get('select#form-1_term option:selected').should('have.text', '30 year fixed')
     cy.get('select').select('15 year fixed').should('have.value', 'Fixed15Year')
     cy.get('#rate').clear().type('9.50');

     //Payment calculation for above details entered by user
     cy.get('[y="20"]').invoke('text').should('eq','$3,454');

     cy.get('#breakdown-panel > div > div > div.pie-chart > svg > g > g:nth-child(2) > g > text.arc-label-value').invoke('text').should('eq','$458');
     cy.get('#breakdown-panel > div > div > div.pie-chart > svg > g > g:nth-child(3) > g > text.arc-label-value').invoke('text').should('eq','$105');
     cy.get('#breakdown-panel > div > div > div.pie-chart > svg > g > g:nth-child(1) > g > text.arc-label-value').invoke('text').should('eq','$2,891');
  });

  it('Verification of e2e case 2 for mortgage calculator', () => {

    //Verify the default value is displayed for all fields
   //cy.verifyDefaultValuesInMortgageCalculator('6.62');

     //Enter value for Homeprice,downpayment and Loan program options

     cy.get('#homePrice').clear().type('1000000');
     cy.get('#form-1_downPayment').clear().type('450000');
     cy.wait(5000);
     cy.get('#form-1_downPaymentPercent').click().invoke('val').should('eq','45');
     //cy.get('select#form-1_term option:selected').should('have.text', '30 year fixed')
     cy.get('select').select('5-year ARM').should('have.value', 'ARM5')
     cy.get('#rate').clear().type('16');

     //Payment calculation for above details entered by user
     cy.get('[y="20"]').invoke('text').should('eq','$5,746');

     cy.get('#breakdown-panel > div > div > div.pie-chart > svg > g > g:nth-child(2) > g > text.arc-label-value').invoke('text').should('eq','$1,017');
     cy.get('#breakdown-panel > div > div > div.pie-chart > svg > g > g:nth-child(3) > g > text.arc-label-value').invoke('text').should('eq','$105');
     cy.get('#breakdown-panel > div > div > div.pie-chart > svg > g > g:nth-child(1) > g > text.arc-label-value').invoke('text').should('eq','$4,625');
  });

  it('Verification of e2e case 3 for mortgage calculator', () => {

    //Verify the default value is displayed for all fields
   //cy.verifyDefaultValuesInMortgageCalculator('6.62');

     //Enter value for Homeprice,downpayment and Loan program options
     cy.get('#homePrice').clear().type('8000000')
     cy.get('#form-1_downPayment').clear().type('1000000');
     cy.get('#form-1_downPaymentPercent').click().invoke('val').should('eq','12.5');
     cy.get('select').select('30 year fixed').should('have.value', 'Fixed30Year')
     cy.wait(5000);
     cy.get('#rate').clear();
     cy.wait(5000);
     cy.get('#rate').type('0.00');
     cy.get('#breakdown').click()
    
     //Payment calculation for above details entered by user
     cy.get('[y="20"]').invoke('text').should('eq','$31,124');

     cy.get('#breakdown-panel > div > div > div.pie-chart > svg > g > g:nth-child(2) > g > text.arc-label-value').invoke('text').should('eq','$8,133');
     cy.get('#breakdown-panel > div > div > div.pie-chart > svg > g > g:nth-child(3) > g > text.arc-label-value').invoke('text').should('eq','$105');
     cy.get('#breakdown-panel > div > div > div.pie-chart > svg > g > g:nth-child(1) > g > text.arc-label-value').invoke('text').should('eq','$19,444');
     cy.get('#breakdown-panel > div > div > div.pie-chart > svg > g > g:nth-child(4) > g > text.arc-label-value').invoke('text').should('eq','$3,442');
  });
});
