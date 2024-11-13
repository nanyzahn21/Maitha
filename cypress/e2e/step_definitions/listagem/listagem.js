import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que o usuario acessa a pagina inicial", () => {
    cy.visit("http://localhost/index.html")
})

When("submeto o filtro categoria posters", () => {
    cy.get('#categoryFilter').select('Posters')
})

Then("retorna os produtos de categoria posters", () => {
    cy.get('.product-item span').should('contain.text', 'Posters')
    cy.screenshot('captura_resultados_busca')
})


When("submeto o filtro categoria todos", () => {
    cy.get('#categoryFilter').select('Todos')
})

Then("retorna todos os produtos da categoria", () => {
    cy.get('.product-item span').should('be.visible')
    cy.screenshot('captura_resultados_busca')
})