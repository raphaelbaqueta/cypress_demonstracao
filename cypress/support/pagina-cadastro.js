import { ELEMENTS } from "./elements";

const el = ELEMENTS ;

class Cadastro {
    acessarPaginaDeCadastro(){
        cy.visit('https://adopet-frontend-iota.vercel.app/');
        cy.get(el.registerButton).click();

    }
    preencherFormulario(){
        cy.get(el.nome).type('Raphael Baqueta');
        cy.get(el.email).type('teste38@teste.com');
        cy.get(el.inputPassword).type('Senha123');
        cy.get(el.confirmPassword).type('Senha123');
    }
    submeterCadastro(){
        cy.get(el.submitButton).click();
    }
}

export default new Cadastro();
