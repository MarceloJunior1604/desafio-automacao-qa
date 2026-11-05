import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import bookStoreApi from '../api/BookStoreApi'

const senha = 'Teste@123'
let usuario
let userId
let token
let livro1
let livro2

Given('que eu crio um novo usuário', () => {
  usuario = 'marcelo' + Date.now()

  bookStoreApi.criarUsuario(usuario, senha).then((response) => {
    expect(response.status).to.eq(201)
    expect(response.body.username).to.eq(usuario)
    userId = response.body.userID
  })
})

Given('gero o token de acesso', () => {
  bookStoreApi.gerarToken(usuario, senha).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.status).to.eq('Success')
    token = response.body.token
  })
})

Given('verifico que o usuário está autorizado', () => {
  bookStoreApi.verificarAutorizacao(usuario, senha).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.be.true
  })
})

When('eu listo os livros disponíveis', () => {
  bookStoreApi.listarLivros().then((response) => {
    expect(response.status).to.eq(200)
    livro1 = response.body.books[0]
    livro2 = response.body.books[1]
  })
})

When('alugo dois livros', () => {
  bookStoreApi.alugarLivros(userId, token, [{ isbn: livro1.isbn }, { isbn: livro2.isbn }]).then((response) => {
    expect(response.status).to.eq(201)
  })
})

Then('os livros aparecem nos detalhes do usuário', () => {
  bookStoreApi.buscarUsuario(userId, token).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.username).to.eq(usuario)
    expect(response.body.books).to.have.length(2)
      expect(response.body.books[0].title).to.eq(livro1.title)
    expect(response.body.books[1].title).to.eq(livro2.title)
  })
})
