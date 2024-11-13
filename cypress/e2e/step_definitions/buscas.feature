Feature: Filtro de Busca

  Scenario: Realizar a busca de um produto específico
    Given que estou na página inicial
    When realizo a busca pelo produto 'Camiseta'
    Then devo ver produtos relacionados à busca 'Camiseta' na listagem de resultados
   
  