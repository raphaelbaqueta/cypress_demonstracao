describe('Pagina de cadastro', () => {
  beforeEach(() =>{
      cy.visit('https://adopet-frontend-iota.vercel.app/');
      cy.get('[data-test="register-button"]').click();
  })   
      it('Deve preencher os campos do cadastro corretamente e clicar no botao cadastrar', () => {
          cy.cadastrar('Raphael Baqueta','teste38@teste.com', 'Senha123')  
  })
})
