import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

Given("que estou na página de listagem de produtos", () => {
    cy.visit("http://localhost/")
})



When("seleciono a categoria 'Bolsas' no filtro de Categorias", () => {
   
    cy.get('select#categoryFilter').select('bags')
})

Then("devo ver apenas produtos da categoria 'Bolsas' na listagem de produtos", () => {
    cy.get('select#categoryFilter').select('bags')
})

And("a categoria selecionada deve estar destacada no filtro de Categorias", () => {
    cy.get('select#categoryFilter').select('bags')
})

