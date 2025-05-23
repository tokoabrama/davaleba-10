Cypress.Commands.add('registerUser', (user) => {
    cy.visit('http://automationexercise.com');
    cy.get('a[href="/login"]').click();
    cy.contains('New User Signup!').should('be.visible');
    
    cy.get('[data-qa="signup-name"]').type(user.name);
    cy.get('[data-qa="signup-email"]').type(user.email);
    cy.get('[data-qa="signup-button"]').click();
  
    cy.contains('Enter Account Information').should('be.visible');
    cy.get('#id_gender2').check();
    cy.get('[data-qa="password"]').type(user.password);
    cy.get('[data-qa="days"]').select('30');
    cy.get('[data-qa="months"]').select('April');
    cy.get('[data-qa="years"]').select('1997');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
  
    cy.get('[data-qa="first_name"]').type(user.firstName);
    cy.get('[data-qa="last_name"]').type(user.lastName);
    cy.get('[data-qa="company"]').type(user.company);
    cy.get('[data-qa="address"]').type(user.address1);
    cy.get('[data-qa="address2"]').type(user.address2);
    cy.get('[data-qa="country"]').select(user.country);
    cy.get('[data-qa="state"]').type(user.state);
    cy.get('[data-qa="city"]').type(user.city);
    cy.get('[data-qa="zipcode"]').type(user.zipcode);
    cy.get('[data-qa="mobile_number"]').type(user.mobileNumber);
  
    cy.get('[data-qa="create-account"]').click();
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  
    cy.contains(`Logged in as ${user.firstName}`).should('be.visible');
  });
