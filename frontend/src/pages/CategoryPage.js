import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductGrid from '../components/products/productGrid/ProductGrid';
import { fetchCategoryProducts } from '../redux/singleCategorySlice';
import { polishSigns } from '../components/helpers';

const CategoryDiv = styled.div``;

function CategoryPage() {
  const params = useParams();
  console.log(params);

  const state = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const removePolishSigns = polishSigns(params.name);

  console.log(polishSigns(params.name));

  useEffect(() => {
    dispatch(fetchCategoryProducts(params.name));
  }, []);

  return (
    <CategoryDiv className="category">
      <ProductGrid title="kategoria" products={state.items.products}>
        <div className="filters-upper">
          <div className="products-length">666 produktów</div>
        </div>
      </ProductGrid>
    </CategoryDiv>
  );
}

export default CategoryPage;
