describe('Assignment 14', () => {
  it('Should OK', () => {
    cy.visit('/')
    cy.get('video').should('exist')
    cy.get('video').should('have.prop', 'paused', false);

    cy.wait(5000)

    cy.get('[data-test-id="buttonVideoPlayer"]').click()
    cy.get('video').should('have.prop', 'paused', true);

    cy.get('[data-test-id="buttonHospital"]').click()
    cy.get('img').should('have.length.at.least', 3)
  })
})