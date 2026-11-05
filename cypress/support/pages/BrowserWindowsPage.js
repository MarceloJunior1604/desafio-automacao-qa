class BrowserWindowsPage {

  clicarEmNewWindow() {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('novaJanela')
    })
    cy.get('#windowButton').click()
  }

  validarNovaJanela(mensagem) {
    cy.get('@novaJanela').should('be.calledWith', '/sample')
    cy.visit('/sample')
    cy.get('#sampleHeading').should('have.text', mensagem)
  }

  fecharNovaJanela() {
    cy.go('back')
    cy.url().should('include', '/browser-windows')
  }
}

export default new BrowserWindowsPage()
