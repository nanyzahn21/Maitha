Feature: Realizar a inclusão de um ou mais produtos no carrinho

  Scenario: Usuário adiciona um  ou mais produtos ao carrinho com sucesso
    Given que o usuário está na página inicial com a listagem de  produtos
    When o usuário clica em Adicionar ao carrinho o ítem 'Camiseta do Batman' e 'Quadro do Marvel'
    Then retorna os produtos no Carrinho de Compras