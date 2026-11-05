# language: pt
Funcionalidade: Progress Bar

  Cenário: Parar antes de 25% e depois resetar
    Dado que eu acesso o site do demoqa
    E escolho a opção "Widgets" na página inicial
    E clico no submenu "Progress Bar"
    Quando eu clico em Start
    E paro a barra antes dos 25%
    Então o valor da barra é menor ou igual a 25%
    Quando eu clico em Start
    E a barra chega em 100%
    Então eu reseto a barra
