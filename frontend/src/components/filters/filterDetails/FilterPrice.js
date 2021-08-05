import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { boxShadow, colors } from '../../styles';

const Details = styled.div`
  max-width: 60%;
  margin: 0 auto;

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

      .price-value {
        width: 40px;
        height: 40px;
        background-color: red;
        transform: rotate(45deg);

        span {
          transform: rotate(-45deg);
          position: absolute;
        }
      }

      input[type='range'] {
        -webkit-appearance: none;
        width: 100%;
        height: 12px;
        background: linear-gradient(
          90deg,
          rgba(${colors.yellow}) ${(props) => props.value}%,
          rgba(${colors.lightgrey4}) ${(props) => props.value}%
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

        background: red;
        border-color: transparent;
        color: transparent;
      }
    }
  }
`;

function FilterPrice({ price, prices, handleRangeChange }) {
  const [value, setValue] = useState(prices.max);
  let rangeValue = Math.round((value / prices.max) * 100);

  const handleRange = (e) => {
    setValue(parseInt(e.target.value));
    // setPrices((prev) => ({ ...prev, max: parseInt(e.target.value) }));
    // handleRangeChange(value);
  };

  // useEffect(() => {
  //   console.log(rangeValue);
  // }, [value]);

  return (
    <Details value={rangeValue}>
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
          <div className="price-value">
            <span>{rangeValue}</span>
          </div>
          {/* <label htmlFor="max">{prices.max}</label> */}
        </form>
      </div>
    </Details>
  );
}

export default FilterPrice;
