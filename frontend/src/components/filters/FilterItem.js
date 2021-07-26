import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const Item = styled.div`
  position: relative;
  overflow: scroll;
  margin: 0 50px;
  border-bottom: 1px solid rgba(${colors.lightgrey4});
  transition: all 0.5s;
  height: ${(props) => (props.show ? '200px' : '80px')};

  .filter-item__name {
    padding: 30px 0;
    position: relative;

    display: flex;
    justify-content: space-between;
  }

  .filter-item__details {
    padding: 30px 0;
    transition: all 0.5s;
    min-height: 100px;
    height: ${(props) => (props.show ? '100px' : '0')};
    /* position: ${(props) => (props.show ? 'relative' : 'absolute')}; */
    /* visibility: ${(props) => (props.show ? 'visible' : 'hidden')}; */
  }
`;

function FilterItem({ title, id, show, handleClick, children }) {
  return (
    <Item show={show} className="filter-item">
      <div className="filter-item__name" id={id} onClick={handleClick}>
        <>
          {title}
          <i className="fa fa-chevron-right"></i>
        </>
      </div>
      <div className="filter-item__details">{children}</div>
    </Item>
  );
}

export default FilterItem;
