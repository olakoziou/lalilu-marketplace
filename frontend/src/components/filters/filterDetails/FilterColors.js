import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { boxShadow, colors } from '../../styles';

const Details = styled.div`
  max-width: 60%;
  margin: 0 auto;

  > div {
    padding: 15px 0;
  }
`;

function FilterColors({
  price,
  prices,
  handleRangeChange,
  setPrices,
  subcategory,
  color,
  size,
  shops,
}) {
  const [value, setValue] = useState(0);

  const handleRange = (e) => {
    setValue(parseInt(e.target.value));
  };

  useEffect(() => {
    console.log(prices);
  }, []);

  return (
    <Details>
      <div className="colors">
        <form action="">
          <div className="color">
            <input type="checkbox" name="blue" id="blue" />
            <label>niebieski</label>
          </div>
          <div className="color">
            <input type="checkbox" name="blue" id="blue" />
            <label>niebieski</label>
          </div>
          <div className="color">
            <input type="checkbox" name="blue" id="blue" />
            <label>niebieski</label>
          </div>
          <div className="color">
            <input type="checkbox" name="blue" id="blue" />
            <label>niebieski</label>
          </div>
          <div className="color">
            <input type="checkbox" name="blue" id="blue" />
            <label>niebieski</label>
          </div>
        </form>
      </div>
    </Details>
  );
}
export default FilterColors;
