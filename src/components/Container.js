import React from 'react';
import styled from 'styled-components';
import { colors } from './styles';

const ContainerDiv = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: rgba(${colors.darkgrey1});
`;

function Container(props) {
  return <ContainerDiv>{props.children}</ContainerDiv>;
}

export default Container;
