import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker'
import practiceFormPage from '../pages/PracticeFormPage'

let aluno

When('eu preencho o formulário com dados aleatórios', () => {
  aluno = {
    nome: faker.person.firstName(),
    sobrenome: faker.person.lastName(),
    email: faker.internet.email().toLowerCase(),
    celular: faker.string.numeric(10),
    endereco: faker.location.streetAddress()
  }

  practiceFormPage.preencherFormulario(aluno)
})

When('envio o formulário', () => {
  practiceFormPage.enviar()
})

Then('o popup de confirmação é exibido', () => {
  practiceFormPage.validarPopup(aluno)
})

Then('eu fecho o popup', () => {
  practiceFormPage.fecharPopup()
})
