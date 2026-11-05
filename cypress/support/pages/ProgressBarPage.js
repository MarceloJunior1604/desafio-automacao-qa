class ProgressBarPage {

  clicarStartStop() {
    cy.get('#startStopButton').click()
  }

  esperarChegarEm(valor) {
    cy.get('[role="progressbar"]', { timeout: 20000 }).should('have.attr', 'aria-valuenow', valor)
  }

  validarValorMenorOuIgual(valor) {
    cy.get('[role="progressbar"]').invoke('attr', 'aria-valuenow').then((atual) => {
      expect(Number(atual)).to.be.at.most(valor)
    })
  }

  resetar() {
    cy.get('#resetButton').click()
    cy.get('#resetButton').should('not.exist')
    cy.get('#startStopButton').should('have.text', 'Start')
  }
}

export default new ProgressBarPage()
