import React from 'react';
import styled from 'styled-components';
import { boxShadow, colors } from '../../styles';
import ProductSmallCard from './ProductSmallCard';

const GridBox = styled.div`
  min-height: 300px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  margin: 20px 0;
  padding: 20px 0;
  border-radius: 6px;
  box-shadow: ${boxShadow('small')};

  display: flex;
  flex-direction: column;

  h4.title {
    padding: 20px 10px;
    text-align: center;
    font-size: 22px;
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
  }

  /* button.load-more {
    width: 30%;
    max-width: 200px;
    margin: 25px auto 15px;
    padding: 5px 0;
    font-size: 18px;
  } */

  .more-products {
    .arrows {
      display: flex;
      justify-content: flex-end;
      width: calc(100% - 20px);
      margin: 0 auto;

      i {
        padding: 5px;
        color: rgba(${colors.darkgrey2});
        cursor: pointer;
      }
    }
  }
`;

function ProductGrid() {
  return (
    <GridBox className="product-grid">
      <h4 className="title">najchętniej oglądane produkty</h4>
      <div className="more-products">
        <div className="arrows">
          <i className="fa fa-chevron-left"></i>
          <i className="fa fa-chevron-right"></i>
        </div>
      </div>
      <div className="product-list">
        <ProductSmallCard />
        <ProductSmallCard />
        <ProductSmallCard />
        <ProductSmallCard />
        <ProductSmallCard />
      </div>
      {/* <button className="load-more">więcej</button> */}
    </GridBox>
  );
}

export default ProductGrid;
