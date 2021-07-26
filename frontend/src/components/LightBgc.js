import React from 'react';
import styled from 'styled-components';
import { boxShadow } from './styles';

const Bgc = styled.div`
  min-height: 300px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  margin: 20px 0;
  padding: 20px 0;
  border-radius: 6px;
  box-shadow: ${boxShadow('small')};
`;

function LightBgc({ children }) {
  return <Bgc>{children}</Bgc>;
}

export default LightBgc;
