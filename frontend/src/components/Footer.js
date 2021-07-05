import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from './styles';

const FooterDiv = styled.div`
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  /* background-color: rgba(${colors.darkgrey3}, 0.5);
  box-shadow: ; */

  @media ${breakpoints('xsm')} {
    flex-direction: row;
    flex-wrap: wrap;
  }
  > div {
    padding: 10px 0;
    min-width: 50%;

    h5 {
      padding: 5px 0;
    }

    ul {
      li {
        padding: 3px;
        a {
          text-decoration: none;
          font-size: 14px;
        }
      }
    }

    &.copy {
      width: 100%;

      p {
        font-size: 10px;
      }
    }
  }
  /* min-height: 300px; */
  /* background-color: rgba(${colors.mainblue}); */
`;

function Footer() {
  return (
    <FooterDiv>
      <div className="links">
        <h5>przydatne linki</h5>
        <ul>
          <li>
            <a href="">polityka prywatności</a>
          </li>
          <li>
            <a href="">regulamin</a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h5>kontakt</h5>
        <ul>
          <li>
            <a href="mailto:kontakt@lalilu.pl">kontakt@lalilu.pl</a>
          </li>
          <li>
            <a href="tel:+48 503307613">555555666</a>
          </li>
        </ul>
      </div>
      <div className="copy">
        <p>copyright &copy; Aleksandra Kozioł {new Date().getFullYear()}</p>
      </div>
    </FooterDiv>
  );
}

export default Footer;
