import React, { useState } from 'react';
import styled from 'styled-components';
import LightBgc from '../LightBgc';
import FilterDetails from './FilterDetails';
import FilterColors from './filterDetails/FilterColors';
import FilterPrice from './filterDetails/FilterPrice';
import FilterItem from './FilterItem';

const FilterDiv = styled.div`
  position: absolute;
  width: 100%;
  transform: translateX(120%);
  transition: all 0.5s;
`;

function Filters() {
  const [state, setstate] = useState({ price: false, color: false });
  const [prices, setPrices] = useState({ min: 23, max: 666 });

  // console.log(prices);

  const handleClick = (e) => {
    setstate((prev) => ({ ...prev, [e.target.id]: !prev[e.target.id] }));
  };

  const handleRangeChange = (input) => {
    setPrices((prev) => ({ ...prev, max: input }));
  };
  return (
    <FilterDiv className="sidebar">
      <LightBgc>
        <FilterItem
          title="cena"
          id="price"
          show={state.price}
          handleClick={handleClick}
        >
          {' '}
          <FilterPrice
            price
            prices={prices}
            handleRangeChange={handleRangeChange}
            setPrices={setPrices}
          />
        </FilterItem>
        <FilterItem
          title="podkategoria"
          id="subcategory"
          show={state.subcategory}
          handleClick={handleClick}
        >
          <FilterDetails subcategory />
        </FilterItem>
        <FilterItem
          title="kolor"
          id="colors"
          show={state.colors}
          handleClick={handleClick}
        >
          <FilterDetails color />
        </FilterItem>
        <FilterItem
          title="rozmiary"
          id="sizes"
          show={state.sizes}
          handleClick={handleClick}
        >
          <FilterDetails size />
        </FilterItem>
        <FilterItem
          title="sklepy"
          id="shops"
          show={state.shops}
          handleClick={handleClick}
        >
          <FilterDetails shops />
        </FilterItem>
      </LightBgc>
    </FilterDiv>
  );
}

export default Filters;
