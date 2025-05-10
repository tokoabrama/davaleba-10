describe('registracia', () => {
    it('passes', () => {
      cy.visit('http://automationexercise.com')
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
      cy.contains('New User Signup!').should('be.visible')
      cy.get('[data-qa="signup-name"]').type('tornike')
      cy.get('[data-qa="signup-email"]').type('tornikeabram@gmail.com')
      cy.get('[data-qa="signup-button"]').click()
      cy.contains('Enter Account Information').should('be.visible')
      cy.get('#id_gender2').check()
      cy.get('[data-qa="password"]').type('Tornike123')
      cy.get('[data-qa="days"]').select('30')
      cy.get('[data-qa="months"]').select('April')
      cy.get('[data-qa="years"]').select('1997')
      cy.get('#newsletter').check()
      cy.get('#optin').check()
      cy.get('[data-qa="first_name"]').type('tornike')
      cy.get('[data-qa="last_name"]').type('abramishvili')
      cy.get('[data-qa="company"]').type('test')
      cy.get('[data-qa="address"]').type('test1')
      cy.get('[data-qa="address2"]').type('test2')
      cy.get('[data-qa="country"]').select("United States")
      cy.get('form > :nth-child(17)').type("NJ")
      cy.get('form > :nth-child(18)').type("clifton")
      cy.get('[data-qa="zipcode"]').type("07011")
      cy.get('[data-qa="mobile_number"]').type('7153239724')
      cy.get('[data-qa="create-account"]').click()
      cy.contains('Account Created!').should('be.visible')
      cy.get('[data-qa="continue-button"]').click()
      cy.contains(`Logged in as gvanca`).should('be.visible')







})
})
describe ('Login User with correct email and password', () => {
  it('passes', () => {
    cy.visit('http://automationexercise.com')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  cy.contains('Login to your account').should('be.visible')
  cy.get('[data-qa="login-email"]').type('tornikeabrama@gmail.com')
  cy.get('[data-qa="login-password"]').type('Tornike123')
  cy.get('[data-qa="login-button"]').click()




  })
})


describe ('Login User with incorrect email and password', () => {
  it('passes', () => {
    cy.visit('http://automationexercise.com')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.contains('Login to your account').should('be.visible')
    cy.get('[data-qa="login-email"]').type('tornikeabrama@@gmail.com')
    cy.get('[data-qa="login-password"]').type('tornike1234')
    cy.get('[data-qa="login-button"]').click()

    describe('Register New User', () => {
      beforeEach(() => {
        cy.fixture('userData').as('user');
      });
    
      it('should register user successfully', function () {
        cy.registerUser(this.user);
      })
    })

    describe('Login with Valid Credentials', () => {
      beforeEach(() => {
        cy.fixture('userData').as('user');
      })
    
      it('should login successfully', function () {
        cy.loginUser(this.user.email, this.user.password);
        cy.contains(`Logged in as ${this.user.name}`).should('be.visible')
      });
    });



  })
})


describe('Login with Invalid Credentials', () => {
  beforeEach(() => {
    cy.fixture('userData').as('user');
  })

  it('should show login error', function () {
    cy.loginUser(this.user.invalidEmail, this.user.invalidPassword);
    cy.contains('Your email or password is incorrect!').should('be.visible');
  })
})
