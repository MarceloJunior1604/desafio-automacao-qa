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

## Proximos passos

Se fosse um projeto real eu colocaria isso numa pipeline de CI/CD (github actions ou azure devops por exemplo). A ideia seria:

- rodar os testes de api e front depois de cada deploy em homologacao, e se falhar nao deixa subir pra producao
- deixar uma execucao agendada todo dia de manha pra pegar se algo quebrou de um dia pro outro
- gerar um relatorio (mochawesome ou o proprio do cucumber) e mandar o resumo no teams, slack ou discord com o link do relatorio e os prints dos testes que falharam
- separar as tags por suite (smoke, regressao) pra nao precisar rodar tudo sempre
