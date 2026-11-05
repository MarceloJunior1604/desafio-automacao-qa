# language: pt
Funcionalidade: Sortable

  Cenário: Colocar a lista em ordem crescente
    Dado que eu acesso o site do demoqa
    E escolho a opção "Interactions" na página inicial
    E clico no submenu "Sortable"
    E a lista está fora de ordem
    Quando eu arrasto os itens para a ordem crescente
    Então a lista fica em ordem crescente
