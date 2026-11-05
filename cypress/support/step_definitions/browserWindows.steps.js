import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import browserWindowsPage from '../pages/BrowserWindowsPage'

When('eu clico no botão New Window', () => {
  browserWindowsPage.clicarEmNewWindow()
})

Then('uma nova janela é aberta com a mensagem {string}', (mensagem) => {
  browserWindowsPage.validarNovaJanela(mensagem)
})

Then('eu fecho a nova janela', () => {
  browserWindowsPage.fecharNovaJanela()
})
