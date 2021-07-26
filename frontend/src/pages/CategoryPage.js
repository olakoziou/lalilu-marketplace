import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductGrid from '../components/products/productGrid/ProductGrid';
import { fetchCategoryProducts } from '../redux/singleCategorySlice';
import { polishSigns } from '../components/helpers';
import { colors } from '../components/styles';
import Filters from '../components/filters/Filters';

const CategoryDiv = styled.div`
  display: flex;
  position: relative;
  

  .products__filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

    .filters__length {
      font-size: 18px;
    }

    .filters__icon {
      i {
        font-size: 26px;
        color: rgba(${colors.darkgrey3});
        padding: 5px;
        cursor: pointer;
      }
    }
  }
`;

function CategoryPage() {
  const params = useParams();
  const state = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const removePolishSigns = polishSigns(params.name);

  useEffect(() => {
    dispatch(fetchCategoryProducts(removePolishSigns));
  }, []);

  const productGrid = document.querySelector('.product-grid');
  const sidebar = document.querySelector('.sidebar');

  const handleFilterIcon = e => {
productGrid.style.transform = 'translateX(-120%)';
sidebar.style.transform = 'translateX(0)';
  }

  return (
    <CategoryDiv className="category">
      <ProductGrid
        title="kategoria"
        products={state.items.products}
        title={params.name}
      >
        <div className="products__filters">
          <div className="filters__length">666 produktów</div>
          <div className="filters__icon" onClick={handleFilterIcon}>
            <i className="fa fa-filter"></i>
          </div>
        </div>
      </ProductGrid>
        <Filters />
    </CategoryDiv>
  );
}

export default CategoryPage;
