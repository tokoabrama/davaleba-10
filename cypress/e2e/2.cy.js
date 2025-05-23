describe('davaleba2', () => {
  it('passes', () => {
cy.visit('https://automationteststore.com/')
   
  //  2.მომხმარებლის დეტალებს შეცვლა -   Edit account details - + შეამოწმეთ რომ შენახვის
  //  შემდეგ ცვლილებები აისახა.
    cy.get('.side_account_list > :nth-child(3) > a').click()
    cy.get('#AccountFrm_firstname').clear()
    cy.get('#AccountFrm_firstname').type("Toko").should("have.value", "Toko")
    cy.get('#AccountFrm_telephone').clear()
    cy.get('#AccountFrm_telephone').type("+17153239724").should("have.value", "+17153239724")
    cy.get('.col-md-12 > .btn-orange').click()
    cy.get('.alert').should("be.visible")
  // 3.არსებული მისამართის შეცვლა ან ახალი მისამართის დამატება
    cy.get('.side_account_list > :nth-child(5) > a').click()
    cy.get('tr > .pull-right > .btn').click()
    cy.get('#AddressFrm_address_1').clear()
    cy.get('#AddressFrm_address_1').type("Lamgasse 9").should("have.value", "Lamgasse 9")
    cy.get('#AddressFrm_city').clear()
    cy.get('#AddressFrm_city').type("Vienna").should("have.value", "Vienna")
cy.get('#AddressFrm_country_id').select("Georgia")
cy.get('.col-md-12 > .btn-orange').click()
cy.get('.alert').should("be.visible")
// 4.პაროლის შეცვლა
cy.get('.side_account_list > :nth-child(4) > a').click()
cy.get('#PasswordFrm_current_password').type("Abrama1234")
cy.get('#PasswordFrm_password').type("Abrama1234")
cy.get('#PasswordFrm_confirm').type("Abrama1234")
cy.get('.col-md-12 > .btn-orange').click()
cy.get('.alert').should("be.visible")
})
})
