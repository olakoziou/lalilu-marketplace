import React from 'react';
import styled from 'styled-components';
import img from '../../assets/clothes.png';
import { boxShadow, colors } from '../styles';

const CatCard = styled.div`
  display: flex;
  margin: 50px 10px;
  position: relative;
  z-index: 1000;
  width: calc(45% - 20px);

  .icon {
    max-width: 80px;
    position: absolute;
    top: 10%;
    left: -15%;
    img {
      width: 100%;
    }
  }

  .title {
    background-color: transparent;
    width: 100%;
    min-height: 100px;
    border: 1px solid rgba(${colors.darkgrey3});
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* z-index: 100000; */

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translate(10px, -10px);
      background-color: rgba(${colors.yellow});
      z-index: -100;
    }
  }
`;

function CategoryCard() {
  return (
    <CatCard>
      <div className="icon">
        <img src={img} alt="" />
      </div>
      <div className="title">ubrania</div>
    </CatCard>
  );
}

export default CategoryCard;
