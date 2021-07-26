import React from 'react';
import styled from 'styled-components';
import LightBgc from '../../LightBgc';
import { boxShadow, colors } from '../../styles';
import ProductSmallCard from './ProductSmallCard';

const GridBox = styled.div`
  display: flex;
  flex-direction: column;
  transition: all .5s;

  .products-header {
    .products__title {
    padding: 20px 10px;
    text-align: center;
    font-size: 22px;
  }


  .products__arrows {
    div {
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
  
  }
  .products-list {
    display: flex;
    flex-wrap: wrap;
  }
`;

function ProductGrid({ products, title, arrows, children }) {
  return (
    <GridBox className="product-grid">
        <LightBgc>
      <div className="products-header">
      {children}
      <h4 className="products__title">{title}</h4>
      {arrows && <div className="products__arrows">
        <div>
          <i className="fa fa-chevron-left"></i>
          <i className="fa fa-chevron-right"></i>
        </div>
      </div>}
      </div>
      <div className="products-list">
        {products &&
          products.map((product) => (
            <ProductSmallCard data={product} key={product._id} />
          ))}
      </div>
      {!arrows && <div className="products__load-more"> load more</div>}
      {/* <button className="load-more">więcej</button> */}
    </LightBgc>
    </GridBox>
  );
}

export default ProductGrid;
