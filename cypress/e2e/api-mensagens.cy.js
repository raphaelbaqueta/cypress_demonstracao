describe('Api Adopet', () => {
       const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNTQxOWI1Yy1mNjg3LTQyZDktODAwOC1iNGI3MjczMGViMGUiLCJhZG9wdGVyTmFtZSI6IlJhcGhhZWwgQmFxdWV0YSIsImlhdCI6MTcxNzg3MTIxMiwiZXhwIjoxNzE4MTMwNDEyfQ.7TOXi24aUpMw3_xjIkEa5VYWYlDcZJKgMaFRlQWTUjo`
    
 it('Mensagens da API', () => {
        cy.request({
         method: 'GET' ,
         url: 'https://adopet-api-i8qu.onrender.com/mensagem/25419b5c-f687-42d9-8008-b4b72730eb0e',
         headers: { authorization }
       }).then((res) => {
              expect(res.status).to.be.equal(200)
              expect(res.body).is.not.empty
              expect(res.body).to.have.property('msg')       
          })
      })
  })
