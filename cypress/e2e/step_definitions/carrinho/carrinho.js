import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário está na página inicial com a listagem de  produtos", () => {
  cy.viewport(1280, 720)
  cy.visit("http://localhost/index.html")
});

When("o usuário clica em Adicionar ao carrinho o ítem 'Camiseta do Batman' e 'Quadro do Marvel'", () => {
  cy.get('#searchInput').clear().type('Camiseta do Batman')
  cy.contains('button', 'Buscar').click()
  cy.get('.product-item span').should('be.visible')
  cy.contains('button', 'Adicionar ao Carrinho').click()
  cy.get('#searchInput').clear().type('Quadro do Marvel')
  cy.contains('button', 'Buscar').click()
  cy.get('.product-item span').should('be.visible')
  cy.contains('button', 'Adicionar ao Carrinho').click()
});

Then("retorna os produtos no Carrinho de Compras", () => {
  cy.get('.cart-item span').should('be.visible')
  cy.screenshot('captura_resultados_busca')
  
});

