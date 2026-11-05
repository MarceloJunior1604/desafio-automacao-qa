import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const senha = 'Teste@123'
let usuario
let userId
let token

Given('que eu crio um novo usuário', () => {
  usuario = 'marcelo' + Date.now()

  cy.request('POST', '/Account/v1/User', {
    userName: usuario,
    password: senha
  }).then((response) => {
    expect(response.status).to.eq(201)
    expect(response.body.username).to.eq(usuario)
    userId = response.body.userID
  })
})

Given('gero o token de acesso', () => {
  cy.request('POST', '/Account/v1/GenerateToken', {
    userName: usuario,
    password: senha
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.status).to.eq('Success')
    token = response.body.token
  })
})

Given('verifico que o usuário está autorizado', () => {
  cy.request('POST', '/Account/v1/Authorized', {
    userName: usuario,
    password: senha
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.be.true
  })
})
