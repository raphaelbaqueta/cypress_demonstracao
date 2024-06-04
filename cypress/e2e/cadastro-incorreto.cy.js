describe('Pagina de cadastro', () => {
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-iota.vercel.app/');
        cy.get('[data-test="register-button"]').click();
        cy.get('[data-test="submit-button"]').click();
    })   
    it('Preencher os campos do formulario incorretamente e exibir mensagens ao usuario', () => {
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');  
    })
})
