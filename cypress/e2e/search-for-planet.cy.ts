describe('Search for planet', ()=> {
    it('should find a valid planet', () => {
        cy.visit('/') 
        cy.get('input[value="planets"]').check()
        cy.search('Hoth')
        cy.get('#planet_name').should('contain','Hoth')
    })

    it('should return not found for invalid planet', () => {
        cy.visit('/') 
        cy.get('input[value="planets"]').check()
        cy.search('Invalid')
        cy.get('[type="submit"]').click()
        cy.get('#message').should('contain','Not found.')
    })

    it('switch to search for a planet with a character name', () => {
        cy.visit('/') 
        cy.get('#query').type('Dart{enter}');
        cy.get('app-character').should('have.length', 2);

        cy.get('input[value="planets"]').check()
        cy.get('[type="submit"]').click()
        cy.get('#message').should('contain','Not found.')
    })
})
