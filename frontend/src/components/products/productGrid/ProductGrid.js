import React from 'react';
import styled from 'styled-components';
import { boxShadow } from '../../styles';
import ProductSmallCard from './ProductSmallCard';

const GridBox = styled.div`
  min-height: 300px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  margin: 20px 0;
  border-radius: 6px;
  box-shadow: ${boxShadow('small')};

  display: flex;
  flex-direction: column;

  h4.title {
    padding: 20px 10px;
    text-align: center;
    font-size: 18px;
  }

  .products {
    display: flex;
    flex-wrap: wrap;
  }
`;

function ProductGrid() {
  return (
    <GridBox className="product-grid">
      <h4 className="title">Najchętniej oglądane produkty</h4>
      <div className="products">
        <ProductSmallCard />
        <ProductSmallCard />
        <ProductSmallCard />
        <ProductSmallCard />
        <ProductSmallCard />
      </div>
    </GridBox>
  );
}

export default ProductGrid;
