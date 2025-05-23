describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')

// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

// 5. Verify 'Login to your account' is visible
cy.get('.login-form > h2').should("be.visible")
// 6. Enter correct email address and password
cy.get('[data-qa="login-email"]').type('takotsikara@gmail.com')
cy.get('[data-qa="login-password"]').type("Wikara112")
// 7. Click 'login' button
cy.get('[data-qa="login-button"]').click()
// 8. Verify that 'Logged in as username' is visible
cy.get(':nth-child(10) > a').should("be.visible")
// 9. Click 'Delete Account' button
// cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
// // 10. Verify that 'ACCOUNT DELETED!' is visible
// cy.get('b').should("be.visible")
  })
})

