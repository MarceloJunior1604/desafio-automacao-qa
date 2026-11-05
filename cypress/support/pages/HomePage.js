class HomePage {

  acessar() {
    cy.visit('/')
  }

  clicarNoCard(nome) {
    cy.contains('.card', nome).click()
  }

  clicarNoSubmenu(nome) {
    cy.contains('.element-list.show a', nome).click()
  }
}

export default new HomePage()
