//რეგისტრაცია სწორი მონაცემებით//
 
describe ('correct registration', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/register')
    cy.get(':nth-child(1) > .ismile').type('Tornike Abramishvili')
  cy.get(':nth-child(2) > .imail').type('Tornikeabrama@gmail.com')
  cy.get('.ipir').type('01001098563')
  cy.get(':nth-child(4) > .itel').type('9086167896')
  cy.get(':nth-child(5) > .ipass').type('toko123')
  cy.get('.reg-form-left > :nth-child(6) > .ipass').type('toko123')
  cy.get('input[name="agree"]').check({ force: true })
  cy.get('.regsub').click()
  cy.contains('successfully registration').should('not.be.visible')// Assertion #1
  cy.url().should('include', '/register') // Assertion #2
})
})   
//ავტორიზაცია არსებული მონაცემებით//
describe ('User Login - Valid Credentials', () => {
  it('should log in successfully with valid credentials', () => {
  cy.visit('https://testzootopia.loremipsum.ge/ka/register')
  cy.get('.menu-pop > .rprof').click()
  cy.get(':nth-child(5) > .imail').type('Tornikeabrama@gmail.com')
  cy.get('.input-shablon > :nth-child(6) > .ipass').type('toko123')
  cy.get('.avtorization > .input-shablon > .form-button').click()
  cy.get('.menu-pop > .active').click()
  cy.get('.menu-pop > .active').should('be.visible') // Assertion #1
  cy.url().should('include', '/ka') // Assertion #2
})
  })



//კალათაში ნივთის დამატება//
describe('add Product To The Cart ', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/')
    cy.get('.b1').click()
    cy.get('.pug > .seepro').click()
    cy.get(':nth-child(1) > .product-item-img > img').click()
    cy.get('.add-pro').click()
    cy.contains('დამატებულია').should('exist')//Assertion #1
   cy.get('.menu-pop > [href*="cart"]').should('exist') // Assertion #2
})
})

//დამატებული ნივთის წაშლა კალათიდან//
    describe('Delete Product From Cart ', () => {
      it('passes', () => {
        cy.visit('https://testzootopia.loremipsum.ge/ka/')
        cy.get('.b1').click()
        cy.get('.pug > .seepro').click()
        cy.get(':nth-child(1) > .product-item-img > img').click()
        cy.get('.add-pro').click()
        cy.contains('დამატებულია').should('exist')
        cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
        cy.get('.minus').click()
        cy.get('.empty > p').should('be.visible') //Assertion #1
        cy.url().should('include', '/cart') // Assertion #2
  
      })
  })

//ენის ცვლილება//
        describe('Change The Language', () => {
          it('passes', () => {
            cy.visit('https://testzootopia.loremipsum.ge/ka/')
            cy.get('.header > .lang > :nth-child(2) > a').click()
        
       
      
      })
        })