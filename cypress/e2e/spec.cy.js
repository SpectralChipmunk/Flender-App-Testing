/// <reference types="cypress" />



describe('Testing the Flender Reportheld App', () => { 
})
const customTimeout = {timeout:1000000}
let targeturl = 'https://flender.beta.reportheld.com/office/main.html'
let longwait = 25000
beforeEach(()=>{
    cy.visit(targeturl, customTimeout)
    
    
    })
    it('visit and access the website and create a new protocol', () => {
      //input the username
      cy.get("input[placeholder='Enter username']", customTimeout)
        .type("t-alvin")
      //input the password
      cy.get("input[placeholder='Enter password']", customTimeout)
        .type("123")
      //click the login button
      cy.get("[class='gxs-button-default']", customTimeout)
        .click()
      cy.wait(longwait)
      
      cy.get("[class='btn btn-large btn-block btn-primary']", customTimeout)
        .click()
      cy.get("[class='menu-item-icon fa fa-check-square-o']", customTimeout)
        .click()
      cy.wait(longwait)
      cy.get("[class='groupxs-btn btn-outline btn-default']").contains("Create protocol")
        .click()
      cy.wait(longwait)
      cy.get("[title='---']")
        .eq(0)
        .click()
      cy.get("[class='dropdown-menu inner > li']")
        .its('length')
        .should('eq', 1)
      cy.get("[class='btn btn-large btn-block btn-primary']")
        .click()
      cy.get("data-bind='click: ok']")
        .click()
    })