Feature: Filtro de Categorias

  Scenario: Validar a listagem de produtos com base na seleção de uma categoria específica
    Given que estou na página de listagem de produtos
    When seleciono a categoria 'Bolsas' no filtro de Categorias
    Then devo ver apenas produtos da categoria 'Bolsas' na listagem de produtos
    And a categoria selecionada deve estar destacada no filtro de Categorias

  