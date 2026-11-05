class BookStoreApi {

  criarUsuario(usuario, senha) {
    return cy.request('POST', '/Account/v1/User', {
      userName: usuario,
      password: senha
    })
  }

  gerarToken(usuario, senha) {
    return cy.request('POST', '/Account/v1/GenerateToken', {
      userName: usuario,
      password: senha
    })
  }

  verificarAutorizacao(usuario, senha) {
    return cy.request('POST', '/Account/v1/Authorized', {
      userName: usuario,
      password: senha
    })
  }

  listarLivros() {
    return cy.request('GET', '/BookStore/v1/Books')
  }

  alugarLivros(userId, token, isbns) {
    return cy.request({
      method: 'POST',
      url: '/BookStore/v1/Books',
      headers: {
        Authorization: 'Bearer ' + token
      },
      body: {
        userId: userId,
        collectionOfIsbns: isbns
      }
    })
  }

  buscarUsuario(userId, token) {
    return cy.request({
      method: 'GET',
      url: '/Account/v1/User/' + userId,
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
}

export default new BookStoreApi()
