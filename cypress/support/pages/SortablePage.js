class SortablePage {

  arrastar(origem, destino) {
    cy.contains('#demo-tabpane-list .list-group-item', origem)
      .arrastarPara('#demo-tabpane-list .list-group-item:contains("' + destino + '")')
  }

  itemNaPosicao(posicao) {
    return cy.get('#demo-tabpane-list .list-group-item').eq(posicao)
  }
}

export default new SortablePage()
