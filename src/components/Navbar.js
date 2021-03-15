import React from 'react';
import styled from 'styled-components';
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
        padding: 5px 10px;
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
            <li className="active">Główna</li>
            <li>Kategorie</li>
            <li>Prasa</li>
            <li>Wyprzedaż</li>
          </ul>
        </nav>
      </div>
    </NavbarDiv>
  );
}

export default Navbar;
