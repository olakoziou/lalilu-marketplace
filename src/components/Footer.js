import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from './styles';

const FooterDiv = styled.div`
  background-color: rgba(${colors.darkgrey1});
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  padding: 30px;

  @media ${breakpoints('sm')} {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  > div {
    padding: 10px;
    text-align: center;

    h5 {
      padding: 10px;
      font-size: 18px;
    }

    li,
    > span {
      padding: 5px;
      font-size: 14px;

      span {
        color: rgba(${colors.pink1});
      }
    }

    span {
      display: inline-block;
    }
  }
`;

function Footer() {
  return (
    <footer>
      <FooterDiv className="footer">
        <div className="shop-policy">
          <h5>Przydatne linki</h5>
          <ul>
            <li>Regulamin</li>
            <li>Polityka prywatności</li>
          </ul>
        </div>
        <div className="contact">
          <h5>Kontakt</h5>
          <span>
            kontakt<span>@</span>marketplace.pl
          </span>
        </div>
      </FooterDiv>
    </footer>
  );
}

export default Footer;
