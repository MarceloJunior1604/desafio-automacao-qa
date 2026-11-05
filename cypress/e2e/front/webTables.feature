# language: pt
Funcionalidade: Web Tables

  Contexto:
    Dado que eu acesso o site do demoqa
    E escolho a opção "Elements" na página inicial
    E clico no submenu "Web Tables"

  Cenário: Criar, editar e deletar um registro
    Quando eu crio um novo registro
    E edito o registro criado
    E deleto o registro criado
    Então o registro não aparece mais na tabela
