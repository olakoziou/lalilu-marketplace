import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeMain, navState } from '../redux/navSlice';
import { boxShadow, breakpoints, colors } from './styles';

const NavbarDiv = styled.div`
  padding: 10px 30px 10px;
  box-shadow: ${boxShadow('small')};
  font-family: 'Montserrat', sans-serif;
  color: rgba(${colors.darkgrey1});

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      li {
        padding: 8px;
        margin-top: 4px 0;
      }
    }
  }

  .login-panel {
    padding: 25px 0;
    display: flex;
    flex-direction: column;

    @media ${breakpoints('sm')} {
      flex-direction: row;
    }

    .logo {
      font-size: 24px;
    }
  }

  .navigation {
    nav {
      width: 100%;
      margin: 0 auto;

      @media ${breakpoints('sm')} {
        width: 80%;
      }

      ul {
        justify-content: space-evenly;

        li {
          position: relative;
          cursor: pointer;
          color: rgba(${colors.darkgrey2});

          &::after {
            content: '';
            position: absolute;
            height: 2px;
            bottom: 0;
            left: 0;
            right: 0;
            width: 0;
            margin: auto;
            background-color: rgba(${colors.pink1});
            transition: all 0.2s;
          }

          &.active {
            &::after {
              width: 100%;
            }
          }

          &:hover {
            color: rgba(${colors.darkgrey1});
            &::after {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

function Navbar() {
  const [state, setState] = useState({ active: 'top' });
  const navigation = useSelector(navState);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const active = e.target.dataset.name;
    const items = Array.from(e.target.parentNode.children);
    const clicked = e.target;

    setState({ active });
    items.forEach((item) => item.classList.remove('active'));
    clicked.classList.add('active');
  };

  useEffect(() => {
    dispatch(changeMain(state.active));
  }, [state]);

  return (
    <NavbarDiv className="navbar">
      <div className="login-panel">
        <div className="logo">Marketplace</div>
        <div className="login-nav">
          <nav>
            <ul>
              <li>Login</li>
              <li>Heart</li>
              <li>Logout</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="navigation">
        <nav>
          <ul>
            <li className="active" data-name="top" onClick={handleClick}>
              Główna
            </li>
            <li data-name="categories" onClick={handleClick}>
              Kategorie
            </li>
            <li data-name="news" onClick={handleClick}>
              Prasa
            </li>
            <li data-name="sale" onClick={handleClick}>
              Wyprzedaż
            </li>
          </ul>
        </nav>
      </div>
    </NavbarDiv>
  );
}

export default Navbar;
