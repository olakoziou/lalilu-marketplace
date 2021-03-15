import React from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import { boxShadow, breakpoints, colors } from '../../styles';

console.log(colors.pink1);

const ProductDiv = styled.div`
  width: 90%;
  max-width: 350px;
  height: 400px;
  margin: 10px;
  text-align: center;
  box-shadow: ${boxShadow('small')};
  transition: all 0.2s;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakpoints('xsm')} {
    width: 40%;
  }

  @media ${breakpoints('sm')} {
    width: 40%;
  }

  &:hover {
    box-shadow: ${boxShadow('medium')};
    transform: scale(1.005);
  }
  .product-card__image {
    background-image: url(${({ image }) => image});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 200px;
    flex-grow: 1;
  }

  .product-card__content {
    padding: 20px 0;
    > div {
      padding: 5px 0;
    }

    .title {
      font-weight: 700;
      font-size: 18px;
    }

    .shop-name {
      font-weight: 300;
    }
    .prices,
    .btns {
      display: flex;
      justify-content: center;

      > div {
        padding: 0 15px;
      }
    }

    .prices {
      .regular-price {
        color: rgba(${colors.pink1});
        text-decoration: line-through;
      }
    }

    .btns {
      flex-direction: column;
      width: 80%;
      max-width: 200px;
      min-width: 150px;
      margin: 0 auto;
      font-size: 14px;

      @media ${breakpoints('xsm')} {
        width: 70%;
        max-width: 200px;
      }

      > div {
        margin: 5px 0;
      }
    }
  }
`;

function ProductSmallCard({ image, product }) {
  return (
    <ProductDiv image={image} className="product-card">
      <div
        className="product-card__image"
        // style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="product-card__content">
        <div className="title">{product.title}</div>
        <div className="shop-name">{product.shop_name}</div>
        <div className="prices">
          <div className="regular-price">
            {product.price} {product.currency}
          </div>
          <div className="sale-price">
            {product.sale_price} {product.currency}
          </div>
        </div>
        <div className="btns">
          <div className="quick-view">
            <Button color={colors.darkgrey1} br="20px">
              Podgląd
            </Button>
          </div>
          <div className="see-more">
            <Button bgc={colors.pink1} color="#fff" br="20px">
              Zobacz
            </Button>
          </div>
        </div>
      </div>
    </ProductDiv>
  );
}

export default ProductSmallCard;
