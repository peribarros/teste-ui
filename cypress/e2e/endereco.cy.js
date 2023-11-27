/// <reference types="cypress" />

describe('Funcionalidade endereços - faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
       
    });
    
    it('Deve fazer cadastro faturamento com sucesso', () => {
        
    });
});