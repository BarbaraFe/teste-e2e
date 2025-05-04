/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/minha-conta')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        produtosPage.visitarUrl()
        cy.fixture('produtos').then(dados => {
            for (let i = 0; i < dados.length; i++) {
                produtosPage.buscarProduto(dados[i].nomeProduto)
                produtosPage.addProdutoCarrinho(
                    dados[i].tamanho,
                    dados[i].cor,
                    dados[i].quantidade)
                cy.get('.woocommerce-message')
                    .should('contain', dados[i].nomeProduto)
            }
        })
    });
})