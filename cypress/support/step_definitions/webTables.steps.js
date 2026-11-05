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
