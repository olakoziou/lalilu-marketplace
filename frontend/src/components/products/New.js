import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchProducts } from '../../redux/productsSlice';
import ProductGrid from './productGrid/ProductGrid';

function New() {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <ProductGrid title="nowości" limit={4} products={state.items.products} arrows={true} />
    </>
  );
}

export default New;
