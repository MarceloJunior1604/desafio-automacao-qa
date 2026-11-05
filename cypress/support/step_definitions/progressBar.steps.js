import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import progressBarPage from '../pages/ProgressBarPage'

When('eu clico em Start', () => {
  progressBarPage.clicarStartStop()
})

When('paro a barra antes dos 25%', () => {
  progressBarPage.esperarChegarEm('15')
  progressBarPage.clicarStartStop()
})

Then('o valor da barra é menor ou igual a 25%', () => {
  progressBarPage.validarValorMenorOuIgual(25)
})

When('a barra chega em 100%', () => {
  progressBarPage.esperarChegarEm('100')
})

Then('eu reseto a barra', () => {
  progressBarPage.resetar()
})
