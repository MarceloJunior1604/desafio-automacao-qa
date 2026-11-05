# desafio-automacao-qa

Desafio de automação usando Cypress com Cucumber no site demoqa.com

Parte 1 é a API do Book Store e a parte 2 são os testes de front (practice form, browser windows, web tables, progress bar e sortable)

## Como rodar

```
npm install
npm test
```

ou `npm run cy:open` pra abrir a interface do cypress

## Algumas observações

- o cypress nao abre uma nova janela de verdade, entao no browser windows eu fiz um stub do window.open e acessei a pagina /sample pra validar o texto
- o botao Close do popup do practice form ta com erro no proprio site, por isso fechei com ESC
- no web tables quando voce deleta um registro novo ele apaga todos os novos junto (bug do site), entao no cenario dos 12 registros um delete ja limpa tudo
- a progress bar continua andando depois do reset, tambem é bug do site
- bloqueei os anuncios no cypress.config.js pq eles ficavam na frente dos botoes as vezes
- o arquivo do upload fica em cypress/fixtures/arquivo.txt
