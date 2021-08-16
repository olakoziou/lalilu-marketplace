import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints, colors } from '../components/styles';

const ProductPageContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  width: 90%;
  margin: 0 auto;
`;
const Product = styled.div`
  margin-bottom: 40px;
`;
const ImagesContainer = styled.div``;
const ImageBig = styled.div`
  /* background: #ddd; */
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 90%;
  height: 300px;
  margin: 0 auto;
`;

const ImagesSmallContainer = styled.div`
  display: flex;

  max-width: 90%;
  margin: 20px auto;
  overflow: hidden;

  @media ${breakpoints('xsm')} {
    max-width: 300px;
  }

  @media ${breakpoints('sm')} {
    max-width: 400px;
  }
`;
const ImageSmall = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 50%;
  min-width: calc(100% / 2 - 20px);
  height: 100px;
  margin: 0 10px;

  @media ${breakpoints('xsm')} {
    min-width: calc(100% / 3 - 20px);
  }

  @media ${breakpoints('sm')} {
    min-width: calc(100% / 4 - 20px);
  }
`;
const ProductInfoContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  span {
    display: inline-block;
    padding: 10px 0;
  }
`;
const ProductInfo = styled.div``;
const Button = styled.div`
  background-color: rgba(${colors.yellow});
  color: rgba(${colors.lightgrey1});
  font-weight: 700;
  width: max-content;
  padding: 8px 15px;
  border-radius: 20px;
`;
const Description = styled.div`
  width: 90%;
  margin: 20px auto;

  span {
    display: inline-block;
    padding: 10px 0;
  }
`;
const ProductDetails = styled.div`
  width: 90%;
  margin: 20px auto;

  span {
    display: inline-block;
    padding: 10px 0;
  }
`;

function ProductPage() {
  const loc = useLocation();
  const state = loc.state;

  console.log(state);

  const ex = [
    state.mainImageUrl,
    state.mainImageUrl,
    state.mainImageUrl,
    state.mainImageUrl,
  ];

  return (
    <ProductPageContainer>
      <Product>
        <ImagesContainer>
          <ImageBig img={state.mainImageUrl}></ImageBig>
          <ImagesSmallContainer>
            {ex.map((el, i) => (
              <ImageSmall img={el} key={i}></ImageSmall>
            ))}
          </ImagesSmallContainer>
        </ImagesContainer>
        <ProductInfoContainer>
          <ProductInfo>
            <span>{state.name.toLowerCase()}</span>
            <div>
              <span>{state.price} zł</span>
              <span>{state.salePrice} zł</span>
            </div>
            <span>rozmiary: {state.rozmiar} </span>
            <span>kolory: {state.color[0]} </span>
          </ProductInfo>
          <Button>zobacz w sklepie</Button>
        </ProductInfoContainer>
      </Product>
      <Description>
        <span>opis produktu</span>
        <p>{state.description}</p>
      </Description>
      <ProductDetails>
        <span>szczegóły produktu</span>
      </ProductDetails>
    </ProductPageContainer>
  );
}

export default ProductPage;
