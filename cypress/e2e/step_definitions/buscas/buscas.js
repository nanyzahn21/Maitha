import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

Given("que estou na página inicial", () => {
    cy.visit("http://localhost/")
})

When("realizo a busca pelo produto 'Camiseta'", () => {
   cy.get("#searchInput").clear().type('Camiseta')
   cy.get('#button').click()
})

Then("devo ver produtos relacionados à busca 'Camiseta' na listagem de resultados", () => {
    
})




