import { Given } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../pages/HomePage'

Given('que eu acesso o site do demoqa', () => {
  homePage.acessar()
})

Given('escolho a opção {string} na página inicial', (opcao) => {
  homePage.clicarNoCard(opcao)
})

Given('clico no submenu {string}', (submenu) => {
  homePage.clicarNoSubmenu(submenu)
})
