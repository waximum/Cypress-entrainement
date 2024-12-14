describe('entrainement', () =>{
    it('entr',() => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-email').type('wax.com')
        cy.get('.action-email').should('have.value', 'wax.com').clear()


        // Delay each keypress by 0.1 sec

cy.get('.action-email').type('slow.typing@email.com', { delay: 100 })
cy.get('.action-email').should('have.value', 'slow.typing@email.com')

cy.get('.action-disabled')
  // Ignore error checking prior to type
  // like whether the input is visible or disabled
  .type('disabled error checking',{force: true})

  cy.get('.action-focus').focus()
cy.get('.action-focus').should('have.class', 'focus')

cy.get('.action-blur').type('About to blur')
cy.get('.action-blur').blur()
cy.get('.action-blur').should('have.class', 'error')
  .prev().should('have.attr', 'style', 'color: red;')

  cy.get('.action-form')
  .find('[type="text"]').type('HALFOFF')
      
cy.get('.action-form').submit()
cy.get('.action-form').next().should('contain', 'Your form has been submitted!')

  cy.get('#description').type('adebolla')
  cy.get('#action-canvas').click('center')

  cy.get('.action-select').select('fr-apples')
  cy.get('.action-select-multiple')
  .select(['fr-apples', 'fr-oranges', 'fr-bananas'])
  
cy.get('.trigger-input-range')
  .invoke('val', 38)
  cy.get('.trigger-input-range')
  .trigger('change')
cy.get('.trigger-input-range')
  .get('input[type=range]').siblings('p')
  .should('have.text', '38')


                

    })
})