/// <reference types="cypress" />

describe('Funcionalidade página de produto', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it("Deve selecionar um produto na lista", () => {
        cy.get('.product-block').contains('Frankie Sweatshirt').click()
        //.first()
        //.last()
        //.eq(3) - o 4º da lista


    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3
        
        cy.get('.product-block')
            .contains('Frankie Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Yellow').click()
        // clear - limpar o campo de texto
        cy.get('.input-text').clear()
        cy.get('.input-text').type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)


    })

   it.only('Adicionar produtos usando comandos customizados', () => {
    cy.addProdutos('Frankie Sweatshirt', 3)
   });

});