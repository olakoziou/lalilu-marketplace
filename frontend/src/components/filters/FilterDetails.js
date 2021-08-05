import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { boxShadow, colors } from '../styles';

const Details = styled.div`
  /* padding: 0 30px; */
  max-width: 60%;
  margin: 0 auto;

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between; */
  > div {
    padding: 15px 0;
  }

  .price-boxes {
    form {
      display: flex;
      justify-content: space-between;

      width: 100%;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25%;

        input[type='number'] {
          width: 100%;
          height: 25px;
          text-align: center;
          /* color: rgba(${colors.lightgrey4}); */
          border: 2px solid rgba(${colors.lightgrey4});
          /* margin: 0 5px; */
          /* box-shadow: ${boxShadow('xsmall')}; */
        }

        input[type='number']::placeholder {
          color: rgba(${colors.darkgrey4});
        }

        input[type='number']:focus {
          outline: 1px solid rgba(${colors.darkgrey3});
          box-shadow: ${boxShadow('big', '82, 77, 172')};
        }
      }
    }
  }

  .price-range {
    display: flex;
    justify-content: center;

    form {
      width: 100%;

      label {
      }

      input[type='range'] {
        -webkit-appearance: none;
        width: 100%;
        height: 12px;
        background: linear-gradient(
          90deg,
          rgba(${colors.yellow}) 60%,
          rgba(${colors.lightgrey4}) 60%
        );
        border-radius: 20px;
        box-shadow: ${boxShadow('small')};
      }

      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 22px;
        width: 22px;
        border-radius: 50%;
        background: rgba(${colors.darkgrey3});
        opacity: 0.95;
      }

      input[type='range']:focus {
        outline: none;
      }

      input[type='range']::-ms-track {
        width: 100%;
        cursor: pointer;

        /* Hides the slider so custom styles can be added */
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
    }
  }
`;

function FilterDetails({
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
    // setPrices((prev) => ({ ...prev, max: parseInt(e.target.value) }));

    // handleRangeChange(value);
  };

  useEffect(() => {
    // console.log(prices);
  }, []);

  if (price) {
    return (
      <Details>
        <div className="price-boxes">
          <form>
            <div className="price__min">
              <input type="number" name="min" id="min" placeholder="od:" />
            </div>
            <div className="price__max">
              <input type="number" name="max" id="max" placeholder="do:" />
            </div>
          </form>
        </div>
        <div className="price-range">
          <form action="">
            {/* <label htmlFor="">{prices.min}</label> */}
            <input
              type="range"
              //   name="max"
              id=""
              min={prices.min}
              max={prices.max}
              value={value}
              onChange={handleRange}
            />
            {/* <label htmlFor="max">{prices.max}</label> */}
          </form>
        </div>
      </Details>
    );
  } else if (subcategory) {
    return (
      <div className="subcategories">
        <ul>
          <li>
            <Link to="link">link</Link>
          </li>
          <li>
            <Link to="link">link</Link>
          </li>
          <li>
            <Link to="link">link</Link>
          </li>
          <li>
            <Link to="link">link</Link>
          </li>
        </ul>
      </div>
    );
  } else if (color) {
    return (
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
    );
  } else if (size) {
    return (
      <div className="sizes">
        <form action="">
          <div className="size">
            <input type="checkbox" name="74" id="74" />
            <label>74</label>
          </div>
        </form>
      </div>
    );
  } else if (shops) {
    return (
      <div className="shops">
        <form action="">
          <div className="shop">
            <input type="checkbox" name="zalando" id="zalando" />
            <label>zalando</label>
          </div>
        </form>
      </div>
    );
  }
}

export default FilterDetails;
