import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker'
import webTablesPage from '../pages/WebTablesPage'

let pessoa

When('eu crio um novo registro', () => {
  pessoa = {
    nome: faker.person.firstName(),
    sobrenome: faker.person.lastName(),
    email: faker.internet.email().toLowerCase(),
    idade: '28',
    salario: '4500',
    departamento: 'QA'
  }

  webTablesPage.clicarEmAdd()
  webTablesPage.preencherCadastro(pessoa)
  webTablesPage.validarRegistro(pessoa.email, pessoa.nome)
})

When('edito o registro criado', () => {
  webTablesPage.editarSalario(pessoa.email, '9000')
  webTablesPage.validarRegistro(pessoa.email, '9000')
})

When('deleto o registro criado', () => {
  webTablesPage.deletar(pessoa.email)
})

Then('o registro não aparece mais na tabela', () => {
  webTablesPage.tabela().should('not.contain', pessoa.email)
})

When('eu crio {int} novos registros', (quantidade) => {
  webTablesPage.mostrar20Linhas()

  for (let i = 1; i <= quantidade; i++) {
    webTablesPage.clicarEmAdd()
    webTablesPage.preencherCadastro({
      nome: 'Usuario' + i,
      sobrenome: 'Teste',
      email: 'usuario' + i + '@teste.com',
      idade: '25',
      salario: '3000',
      departamento: 'QA'
    })
  }
})

Then('os {int} registros aparecem na tabela', (quantidade) => {
  webTablesPage.linhas().should('have.length', quantidade + 3)
  webTablesPage.tabela().should('contain', 'usuario1@teste.com')
  webTablesPage.tabela().should('contain', 'usuario' + quantidade + '@teste.com')
})

When('eu deleto todos os registros novos', () => {
  webTablesPage.deletar('usuario1@teste.com')
})

Then('a tabela fica só com os registros iniciais', () => {
  webTablesPage.linhas().should('have.length', 3)
  webTablesPage.tabela().should('not.contain', '@teste.com')
})
