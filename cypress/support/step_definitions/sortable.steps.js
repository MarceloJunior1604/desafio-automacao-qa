import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import sortablePage from '../pages/SortablePage'

Given('a lista está fora de ordem', () => {
  sortablePage.arrastar('Six', 'One')
  sortablePage.arrastar('Four', 'Six')

  sortablePage.itemNaPosicao(0).should('have.text', 'Four')
  sortablePage.itemNaPosicao(1).should('have.text', 'Six')
})

When('eu arrasto os itens para a ordem crescente', () => {
  sortablePage.arrastar('One', 'Four')
  sortablePage.arrastar('Two', 'Four')
  sortablePage.arrastar('Three', 'Four')
  sortablePage.arrastar('Five', 'Six')
})

Then('a lista fica em ordem crescente', () => {
  sortablePage.itemNaPosicao(0).should('have.text', 'One')
  sortablePage.itemNaPosicao(1).should('have.text', 'Two')
  sortablePage.itemNaPosicao(2).should('have.text', 'Three')
  sortablePage.itemNaPosicao(3).should('have.text', 'Four')
  sortablePage.itemNaPosicao(4).should('have.text', 'Five')
  sortablePage.itemNaPosicao(5).should('have.text', 'Six')
})
