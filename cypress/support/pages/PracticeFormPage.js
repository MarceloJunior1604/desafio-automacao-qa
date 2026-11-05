class PracticeFormPage {

  preencherFormulario(aluno) {
    cy.get('#firstName').type(aluno.nome)
    cy.get('#lastName').type(aluno.sobrenome)
    cy.get('#userEmail').type(aluno.email)
    cy.get('label[for="gender-radio-1"]').click()
    cy.get('#userNumber').type(aluno.celular)

    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__year-select').select('1996')
    cy.get('.react-datepicker__month-select').select('March')
    cy.get('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)').click()

    cy.get('#subjectsInput').type('Maths')
    cy.get('#react-select-2-option-0').click()
    cy.get('label[for="hobbies-checkbox-1"]').click()
    cy.get('#uploadPicture').selectFile('cypress/fixtures/arquivo.txt')
    cy.get('#currentAddress').type(aluno.endereco)

    cy.get('#state').click()
    cy.get('#react-select-3-option-0').click()
    cy.get('#city').click()
    cy.get('#react-select-4-option-0').click()
  }

  enviar() {
    cy.get('#submit').click()
  }

  validarPopup(aluno) {
    cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')
    cy.get('.modal-body').should('contain', aluno.nome + ' ' + aluno.sobrenome)
    cy.get('.modal-body').should('contain', aluno.email)
    cy.get('.modal-body').should('contain', aluno.celular)
    cy.get('.modal-body').should('contain', 'arquivo.txt')
      cy.get('.modal-body').should('contain', 'NCR Delhi')
  }

  fecharPopup() {
    cy.get('body').type('{esc}')
    cy.get('.modal-content').should('not.exist')
  }
}

export default new PracticeFormPage()
