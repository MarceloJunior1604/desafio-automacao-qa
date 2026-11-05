class WebTablesPage {

  clicarEmAdd() {
    cy.get('#addNewRecordButton').click()
  }

  preencherCadastro(pessoa) {
    cy.get('#firstName').type(pessoa.nome)
    cy.get('#lastName').type(pessoa.sobrenome)
    cy.get('#userEmail').type(pessoa.email)
    cy.get('#age').type(pessoa.idade)
    cy.get('#salary').type(pessoa.salario)
    cy.get('#department').type(pessoa.departamento)
    cy.get('#submit').click()
  }

  editarSalario(email, salario) {
    cy.contains('tr', email).find('[title="Edit"]').click()
    cy.get('#salary').clear().type(salario)
    cy.get('#submit').click()
  }

  validarRegistro(email, texto) {
    cy.contains('tr', email).should('contain', texto)
  }

  deletar(email) {
    cy.contains('tr', email).find('[title="Delete"]').click()
  }

  mostrar20Linhas() {
    cy.get('.pagination select').select('20')
  }

  linhas() {
    return cy.get('.web-tables-wrapper tbody tr')
  }

  tabela() {
    return cy.get('.web-tables-wrapper tbody')
  }
}

export default new WebTablesPage()
