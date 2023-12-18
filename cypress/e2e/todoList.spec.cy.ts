describe('Todo List Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should create a task', () => {
    cy.get('[data-cy=input-title]').eq(1).type('Task 01')
    cy.get('[data-cy=input-difficulty]').eq(1).type('5')
    cy.get('[data-cy=input-button]').eq(1).click()
    cy.get('[data-cy=list-task]').should('be.visible')
  })

  it('Should edit a task', () => {
    cy.get('[data-cy=input-title]').eq(1).type('Old Task')
    cy.get('[data-cy=input-difficulty]').eq(1).type('3')
    cy.get('[data-cy=input-button]').eq(1).click()
    cy.get('[data-cy=list-task]').should('be.visible')
    cy.get('[data-cy=icon-edit]').click()
    cy.get('[data-cy=input-title]').eq(0).clear().type('New Task')
    cy.get('[data-cy=input-difficulty]').eq(0).clear().type('5')
    cy.get('[data-cy=input-button]').eq(0).click()
  })

  it('Should delete a task', () => {
    cy.get('[data-cy=input-title]').eq(1).type('Old Task')
    cy.get('[data-cy=input-difficulty]').eq(1).type('10')
    cy.get('[data-cy=input-button]').eq(1).click()
    cy.get('[data-cy=list-task]').should('be.visible')
    cy.get('[data-cy=icon-delete]').click()
  })
})