import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';
import img from '../../assets/img3.jpeg';

const Item = styled.div`
  height: 100%;
  width: 100%;
  min-width: 100%;
  min-height: 100%;

  .image {
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    box-shadow: 20px -20px #ddd;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 38px;
    text-align: center;
    position: relative;

    .title {
      background-color: rgba(${colors.lightgrey4}, 0.4);
      backdrop-filter: blur(5px);
      padding: 10px 0;
    }

    .dots {
      display: flex;
      position: absolute;
      bottom: 5%;

      .dot {
        width: 10px;
        height: 10px;
        margin: 5px;
        border-radius: 50%;
        background-color: rgba(${colors.yellow});
      }
    }
  }
`;

function SliderItem({ active, title, numb }) {
  // console.log(active);
  return (
    <Item active={active} numb={numb} className="slider">
      <div className="image">
        <div className="title">{title}</div>
      </div>
    </Item>
  );
}

export default SliderItem;
