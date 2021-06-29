import React from 'react';
import Container from '../components/Container';
import ProductGrid from '../components/products/productGrid/ProductGrid';

function HomePage() {
  return (
    <div className="main">
      <Container>
        <ProductGrid />
        <ProductGrid />
      </Container>
    </div>
  );
}

export default HomePage;
