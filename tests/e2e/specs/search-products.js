describe('Search products', () => {
  it('should find single product using product id', () => {
    cy.visit('/');
    cy.get('#search-input').type('123');
    cy.get('#product-123-brand').should('contain', 'weñxoab');
    cy.get('#product-123-description').should('contain', 'ljñkv bmfwuq');
    cy.get('#product-123-price').should('contain', '$581.042');
    cy.get('#product-123-id').should('contain', 'Id: 123');
  });
  it('should find products by brand', () => {
    cy.get('#search-input').clear();
    cy.get('#search-input').type('weñxoab');
    cy.get('#products-grid').find('.column.is-3').should('have.length', 15);
  });
  it('should find products by description', () => {
    cy.get('#search-input').clear();
    cy.get('#search-input').type('ljñkv bmfwuq');
    cy.get('#products-grid').find('.column.is-3').should('have.length', 11);
  });
});
