describe('Api Adopet', () => {
    
 it('Mensagens da API', () => {
        cy.request({
         method: 'GET' ,
         url: 'https://adopet-api-i8qu.onrender.com/mensagem/25419b5c-f687-42d9-8008-b4b72730eb0e',
         headers: Cypress.env()
       }).then((res) => {
              expect(res.status).to.be.equal(200)
              expect(res.body).is.not.empty
              expect(res.body).to.have.property('msg')       
          })
      })
  })
