import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que estou logado na pagina principal", () => {
    cy.visit("http://localhost/index.html")
})

When("submeto a opção 'Modo Escuro'", () => {
    cy.get('#themeToggleBtn').click()
})

Then("retorna a tela com o fundo escuro", () => {
    cy.get('#main').should('be.visible')
    cy.screenshot('captura_resultados_busca')
})
