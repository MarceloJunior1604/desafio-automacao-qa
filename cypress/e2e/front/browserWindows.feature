# language: pt
Funcionalidade: Browser Windows

  Cenário: Abrir uma nova janela
    Dado que eu acesso o site do demoqa
    E escolho a opção "Alerts, Frame & Windows" na página inicial
    E clico no submenu "Browser Windows"
    Quando eu clico no botão New Window
    Então uma nova janela é aberta com a mensagem "This is a sample page"
    E eu fecho a nova janela
