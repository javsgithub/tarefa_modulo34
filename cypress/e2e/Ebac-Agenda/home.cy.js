/// <reference types="cypress" />

describe("Testes para a página/agenda de contatos EBAC", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Deve incluir o novo contato na lista", () => {
        cy.get("input[type='text']").type("Jefferson Santos")
        cy.get("input[type='email']").type("jeffersonsantos@gmail.com")
        cy.get("input[type='tel']").type("71 999999999")
        cy.get(".adicionar").click()
        cy.get("#root").should("contain.text", "Jefferson Santos")
    })

    it("Deve alterar o novo contato e salvar a(s) alteração(ões)", () => {
        cy.get(".edit").last().click()
        cy.get("input[type='text']").should("contain.value", "Jefferson Santos")
        cy.get("input[type='email']").should("contain.value", "jeffersonsantos@gmail.com")
        cy.get("input[type='tel']").should("contain.value", "71 999999999")
        cy.get("input[type='tel']").clear()  
        cy.get("input[type='tel']").type("27 99199 70, se falhar, 70 de novo")  
        cy.get(".alterar").click()
        cy.get("#root").should("contain.text", "27 99199 70, se falhar, 70 de novo")        
    })
    
    it("Deve remover o contato adicionado da lista", () => {
        cy.get(".delete").last().click()
        cy.get("#root").should("not.contain.text", "Jefferson Santos")
    })
})