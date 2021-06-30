import React from 'react';
import Container from '../components/Container';
import ProductGrid from '../components/products/productGrid/ProductGrid';
import Slider from '../components/slider/Slider';

function HomePage() {
  return (
    <div className="main">
      <Container>
        <ProductGrid />
        <Slider />
        <ProductGrid />
      </Container>
    </div>
  );
}

export default HomePage;
