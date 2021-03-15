import React from 'react';
import styled from 'styled-components';
import { boxShadow } from '../components/styles';

const Btn = styled.div`
  border-radius: ${(props) => props.br};
  padding: 10px;
  background-color: ${(props) => `rgba(${props.bgc})`};
  color: ${(props) => props.color};
  box-shadow: ${boxShadow('medium')};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: ${boxShadow('big')};
  }
`;

function Button(props) {
  return (
    <Btn bgc={props.bgc} color={props.color} br={props.br} className="button">
      {props.children}
    </Btn>
  );
}

export default Button;
