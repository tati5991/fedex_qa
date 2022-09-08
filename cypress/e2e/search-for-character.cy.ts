describe('Search for character', ()=> {
    it('should find a valid character', () => {
        cy.visit('/') 
        cy.search('luke')
        cy.get('#character_name').should('contain','Luke Skywalker')
    })

    it('should return not found for invalid character', () => {
        cy.visit('/') 
        cy.search('invalid')
        cy.get('#message').should('contain','Not found.')
    })

    it('search for character by pressing enter', () => {
        cy.visit('/') 
        cy.get('#query').type('luke').type('{enter}');
        cy.get('#character_name').should('contain','Luke Skywalker')
    })

    it('switch to search for a character with a planet name', () => {
        cy.visit('/') 
        cy.get('input[value="planets"]').check()
        cy.get('#query').type('Alderaan').type('{enter}');;
        cy.get('app-planet').should('have.length', 1);

        cy.get('input[value="people"]').check()
        cy.get('[type="submit"]').click()
        cy.get('#message').should('contain','Not found.')
    })
})
