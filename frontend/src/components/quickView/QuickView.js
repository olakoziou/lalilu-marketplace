import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../styles';

const QuickViewContainer = styled.div`
  width: 90%;
  min-height: 150px;
  height: 260px;
  padding: 10px 0;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  position: fixed;
  border: 1px solid #000;
  background: #fff;
  z-index: 1000;

  @media ${breakpoints('xsm')} {
    height: 350px;
  }

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;

    @media ${breakpoints('sm')} {
      flex-direction: row;
      width: 70%;
      margin: 0 auto;
    }
  }

  &::after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(100% 0, 100% 100%, 46% 100%, 0 100%, 68% 59%, 63% 27%);
    background-color: rgba(${colors.mainblue});
    z-index: -1;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 50%;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: none;

  @media ${breakpoints('xsm')} {
    display: block;
  }
`;
const ContentBox = styled.div`
  height: 50%;
  padding: 15px;
  > * {
    padding: 5px 0;
  }
`;
const Title = styled.h4`
  color: rgba(${colors.darkgrey2});
  font-weight: 700;
  font-size: 18px;
`;
const Span = styled.span`
  display: inline-block;
  width: 100%;
  color: rgba(${colors.darkgrey2});
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 95%;
  margin: auto;

  > div {
    padding: 5px 20px;
    margin: 5px;
    border-radius: 20px;
    font-weight: 700;
    box-shadow: 0 0 12px -4px rgba(${colors.darkgrey4});
    transition: all 0.3s;

    &:hover {
      transform: scale(1.015);
      box-shadow: 0 0 15px -3px rgba(${colors.darkgrey4});
    }
  }
`;
const Button = styled.div`
  &:nth-of-type(1) {
    background-color: rgba(${colors.darkgrey3});
    color: rgba(${colors.lightgrey2});
  }

  &:nth-of-type(2) {
    background-color: rgba(${colors.yellow});
    color: rgba(${colors.lightgrey2});
  }
`;
const Close = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

function QuickView() {
  const [state, setState] = useState();
  return (
    <QuickViewContainer>
      <Close>X</Close>
      <div>
        <Image img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7LKU2iEoaspX9tRXyvLWj_Jwp0hIMti2jhPO6NUEk9IU8B5ncs44RcSC-qDa8iGmDy0YknBrG&usqp=CAc"></Image>
        <ContentBox>
          <Title>t-shirt</Title>
          <Span>sklep: h&m</Span>
          <Span>rozmiary: 62, 68, 74</Span>
          <Span>kolory: czarny, różowy, mix</Span>
          <ButtonsContainer>
            <Button>zobacz</Button>
            <Button>sklep</Button>
          </ButtonsContainer>
        </ContentBox>
      </div>
    </QuickViewContainer>
  );
}

export default QuickView;
