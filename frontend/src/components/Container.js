import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from './styles';

const ContainerDiv = styled.div`
  /* font-family: 'Arial', sans-serif; */
  color: rgba(${colors.darkgrey1});
  width: 95%;
  margin: 0 auto;
  position: relative;

  background-position: center;
  background-size: contain;

  /* &::before {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(${colors.darkgrey3}, 0.5);
    backdrop-filter: blur(10px);
    z-index: 10;
  } */

  @media ${breakpoints('sm')} {
    width: 90%;
  }
`;

function Container(props) {
  return <ContainerDiv className="container">{props.children}</ContainerDiv>;
}

export default Container;
