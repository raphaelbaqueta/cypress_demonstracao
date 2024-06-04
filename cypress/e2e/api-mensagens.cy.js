describe('API Adopet', () => {
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNTQxOWI1Yy1mNjg3LTQyZDktODAwOC1iNGI3MjczMGViMGUiLCJhZG9wdGVyTmFtZSI6IlJhcGhhZWwgQmFxdWV0YSIsImlhdCI6MTcxNzQ1MzU5MSwiZXhwIjoxNzE3NzEyNzkxfQ.h4-sRqSWKeFSQGPiiI_dfDGO1n3TkYxJQUzLlYmvFHo'

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-frontend-cypress.vercel.app/static/media/message-hover.585ef151de5fe106e8eb',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
    })
})