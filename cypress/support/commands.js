Cypress.Commands.add('arrastarPara', { prevSubject: 'element' }, (origem, destino) => {
  const dataTransfer = new DataTransfer()

  cy.wrap(origem).trigger('dragstart', { dataTransfer })
  cy.get(destino).trigger('dragenter', { dataTransfer })
  cy.get(destino).trigger('dragover', { dataTransfer })
  cy.get(destino).trigger('drop', { dataTransfer })
  cy.wrap(origem).trigger('dragend', { force: true })
})
