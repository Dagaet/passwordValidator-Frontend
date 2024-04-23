/* eslint-disable @typescript-eslint/no-unused-expressions */

// Div is shown in green if passord is valid 
// Div is shown in red if passord is not valid
// Clear button should clear the input 

describe('FrontEnd password should', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })
  it('Show a div in green when the password is valid', () => {
    cy.get('input').type("Pajarita_34")
    cy.get('#sendButton').click()
    cy.contains("Contraseña valida")
    cy.get("#isValidContainer")
      .should("contain", "Contraseña valida")
      .should("have.css", "background-color", "rgb(92, 201, 88)")
  }),
  it('Show a div in red when the password is not valid', () => {
    cy.get('input').type("Pajarita_")
    cy.get('#sendButton').click()
    cy.contains("Contraseña no valida")
    cy.get("#isValidContainer")
      .should("contain", "Contraseña no valida")
      .should("have.css", "background-color", "rgb(255, 147, 111)")
  }),
  it('Clear button should clear the input', () => {
    cy.get('input').type("Pajarita_")
    cy.get('#clearButton').click()
    cy.get('input').should('contain', "")
    cy.get("#isValidContainer").should("not.exist")
  })
})