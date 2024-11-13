import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que o usuario acessa a pagina inicial", () => {
    cy.viewport(1680, 1220)
    cy.visit("http://localhost/index.html")
})

When("submeto a ordenação 'Preço Menor para Maior'", () => {
    cy.get('#sortOrder').select('priceAsc')
})

Then("retorna a tela produtos ordenados dos preços menor para maior", () => {
    cy.get('#productsContainer .product').then(products => {
        const priceValues = [...products].map(product => {
          const priceText = product.querySelector('p:nth-of-type(2)').innerText;
          return parseFloat(priceText.replace('Preço: R$', '').trim());
        });
        const sortedPrices = [...priceValues].sort((a, b) => a - b);
        expect(priceValues).to.deep.equal(sortedPrices);
      });
    cy.screenshot('captura_resultados_busca')
})