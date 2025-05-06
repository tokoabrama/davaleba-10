
Cypress.Commands.add('fillRegistrationForm', (user) => {
    cy.get(':nth-child(1) > .ismile').type(user.name)
    cy.get(':nth-child(2) > .imail').type(user.email)
    cy.get('.ipir').type(user.personalNumber)
    cy.get(':nth-child(4) > .itel').type(user.phone)
    cy.get(':nth-child(5) > .ipass').type(user.password)
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type(user.password)
    cy.get('input[name="agree"]').check({ force: true })
  })
  
  Cypress.Commands.add('login', (user) => {
    cy.get('.menu-pop > .rprof').click()
    cy.get(':nth-child(5) > .imail').type(user.email)
    cy.get('.input-shablon > :nth-child(6) > .ipass').type(user.password)
    cy.get('.avtorization > .input-shablon > .form-button').click()
  })

