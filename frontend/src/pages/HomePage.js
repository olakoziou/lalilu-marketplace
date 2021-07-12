import React from 'react';
import CategoryGrid from '../components/categories/CategoryGrid';
import Container from '../components/Container';
import ProductGrid from '../components/products/productGrid/ProductGrid';
import Top from '../components/products/Top';
import New from '../components/products/New';
import Slider from '../components/slider/Slider';

function HomePage() {
  return (
    <div className="main">
      <Top />
      <Slider />
      <New />
      <CategoryGrid />
    </div>
  );
}

export default HomePage;
