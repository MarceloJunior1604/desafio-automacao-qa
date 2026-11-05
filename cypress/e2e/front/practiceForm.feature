# language: pt
Funcionalidade: Practice Form

  Cenário: Preencher e enviar o formulário
    Dado que eu acesso o site do demoqa
    E escolho a opção "Forms" na página inicial
    E clico no submenu "Practice Form"
    Quando eu preencho o formulário com dados aleatórios
    E envio o formulário
    Então o popup de confirmação é exibido
    E eu fecho o popup
