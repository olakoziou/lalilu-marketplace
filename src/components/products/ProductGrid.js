import React, { useEffect } from 'react';
import ProductSmallCard from './smallCardGrid/ProductSmallCard';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { productsState, getData, fetchApi } from '../../redux/productsSlice';

const GridDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-around;
  padding: 30px 0;
`;

function ProductGrid() {
  const products = useSelector(productsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, []);
  return (
    <GridDiv className="product-grid">
      {products.map((product) => (
        <ProductSmallCard
          key={product.id}
          product={product}
          image={product.image}
          sale={true}
        />
      ))}
    </GridDiv>
  );
}

export default ProductGrid;
