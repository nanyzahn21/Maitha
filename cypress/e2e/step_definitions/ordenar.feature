Feature: Ordenar

Scenario: Realizar a validação da ordenação por menor preço
Given que o usuario acessa a pagina inicial
When submeto a ordenação 'Preço Menor para Maior'
Then retorna a tela produtos ordenados dos preços menor para maior