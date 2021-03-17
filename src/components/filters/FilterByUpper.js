import React from 'react';
import styled from 'styled-components';
import { boxShadow, breakpoints, colors } from '../styles';

const FilterBy = styled.div`
  padding: 20px 0;
  overflow-y: hidden;
  ul {
    padding: 0 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media ${breakpoints('sm')} {
      justify-content: center;
    }

    li {
      padding: 8px 13px;
      margin: 0 10px;
      border-radius: 20px;
      box-shadow: ${boxShadow('medium')};
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;

      &.active {
        background-color: rgba(${colors.pink1});
        color: rgba(${colors.lightgrey1});
        font-weight: 700;
      }

      &:hover {
        box-shadow: ${boxShadow('big')};
        transform: scale(1.007);
      }
    }
  }
`;

function FilterByUpper() {
  return (
    <FilterBy
      className="filterBy-upper
  "
    >
      <nav>
        <ul>
          <li className="active">Topy</li>
          <li>Ubranka</li>
          <li>Akcesoria</li>
          <li>Kosmetyki</li>
        </ul>
      </nav>
    </FilterBy>
  );
}

export default FilterByUpper;
