import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from './styles';

const ContainerDiv = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: rgba(${colors.darkgrey1});
  width: 95%;
  margin: 0 auto;
  position: relative;

  background-position: center;
  background-size: contain;
`;

function Container(props) {
  return <ContainerDiv className="container">{props.children}</ContainerDiv>;
}

export default Container;
