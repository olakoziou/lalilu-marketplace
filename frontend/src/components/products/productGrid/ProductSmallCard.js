import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles';

const SmallCard = styled.div`
  min-height: 200px;
  max-width: 250px;
  width: 90%;
  background-color: pink;
  margin: 10px auto;

  @media ${breakpoints('xsm')} {
    width: calc(50% - 20px);
  }
`;

function ProductSmallCard() {
  return <SmallCard>Small card</SmallCard>;
}

export default ProductSmallCard;
