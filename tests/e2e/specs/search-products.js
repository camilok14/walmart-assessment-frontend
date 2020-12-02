describe('Search products', () => {
  before(() => {
    cy.visit('/');
  });
  it('should find single product using product id', () => {
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
  it('should find a product using a palindrome strig', () => {
    cy.get('#search-input').clear();
    cy.get('#search-input').type('171');
    cy.get('#product-171-brand').should('contain', 'tvgbggj');
    cy.get('#product-171-description').should('contain', 'trcwl iagxxh');
    cy.get('#product-171-price').should('contain', '$176.293');
    cy.get('#product-171-id').should('contain', 'Id: 171');
    cy.get('#product-171-price-with-discount').should('contain', '$88.146');
  });
});
