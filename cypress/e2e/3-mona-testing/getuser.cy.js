/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Reqres API Testing - Get User List', () => {
  it('get list user',() => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2' 
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })
})
