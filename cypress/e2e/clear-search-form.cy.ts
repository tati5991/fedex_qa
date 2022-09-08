describe('Clear search result',()=>{
    it('clear search result',()=>{
        cy.visit('/') ;
        cy.get('#query').type('Darth');
        cy.get('[type="submit"]').click();
        cy.get('app-character').should('have.length', 2);

        cy.get('#query').clear();
        cy.get('[type="submit"]').click();
        cy.get('app-character').should('not.exist');
    })
})