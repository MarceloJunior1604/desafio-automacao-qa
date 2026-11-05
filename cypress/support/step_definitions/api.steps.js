import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const senha = 'Teste@123'
let usuario
let userId
let token
let livro1
let livro2

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

When('eu listo os livros disponíveis', () => {
  cy.request('GET', '/BookStore/v1/Books').then((response) => {
    expect(response.status).to.eq(200)
    livro1 = response.body.books[0]
    livro2 = response.body.books[1]
  })
})

When('alugo dois livros', () => {
  cy.request({
    method: 'POST',
    url: '/BookStore/v1/Books',
    headers: {
      Authorization: 'Bearer ' + token
    },
    body: {
      userId: userId,
      collectionOfIsbns: [{ isbn: livro1.isbn }, { isbn: livro2.isbn }]
    }
  }).then((response) => {
    expect(response.status).to.eq(201)
  })
})

Then('os livros aparecem nos detalhes do usuário', () => {
  cy.request({
    method: 'GET',
    url: '/Account/v1/User/' + userId,
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.username).to.eq(usuario)
    expect(response.body.books).to.have.length(2)
      expect(response.body.books[0].title).to.eq(livro1.title)
    expect(response.body.books[1].title).to.eq(livro2.title)
  })
})
