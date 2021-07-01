import React from 'react';
import CategoryGrid from '../components/categories/CategoryGrid';
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
        <CategoryGrid />
      </Container>
    </div>
  );
}

export default HomePage;
