Feature: Listagem

Scenario: Validar a Listagem com base na seleção do filtro de Categorias - Posters
Given que o usuario acessa a pagina inicial
When submeto o filtro categoria posters
Then retorna os produtos de categoria posters


Scenario: Validar a Listagem com base na seleção do filtro de Categorias - Todos
Given que o usuario acessa a pagina inicial
When submeto o filtro categoria todos
Then retorna todos os produtos da categoria