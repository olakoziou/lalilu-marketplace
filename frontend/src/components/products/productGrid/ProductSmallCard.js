import React from 'react';
import styled from 'styled-components';
import { boxShadow, breakpoints, colors } from '../../styles';
import img from '../../../assets/img1.webp';
import img2 from '../../../assets/img2.jpg';

const SmallCard = styled.div`
  min-height: 200px;
  max-width: 250px;
  width: 90%;
  margin: 10px auto;
  text-align: center;
  font-size: 14px;

  box-shadow: ${boxShadow('xsmall')};

  @media ${breakpoints('xsm')} {
    width: calc(50% - 20px);
  }

  .image {
    height: 200px;
    width: 100%;

    background-image: url(${img2});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .details {
    > div {
      margin: 4px 0;
    }
    .title {
      font-weight: 700;
    }
    .shop-name {
      color: rgba(${colors.darkgrey3});
      font-size: 14px;
    }
    .prices {
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        padding: 0 5px;
      }

      &__regular {
        text-decoration: line-through;
        font-size: 12px;
        color: rgba(${colors.darkgrey3});
      }

      &__sale {
        font-weight: 700;
      }
    }

    .btns {
      display: flex;
      justify-content: center;
      padding: 5px 0 10px;

      div {
        a {
          padding: 5px;
          text-decoration: none;
        }
      }

      .see-more {
        /* background-color: rgba(${colors.mainblue}); */
        a {
          color: rgba(${colors.yellow});
          font-weight: 700;
        }
      }
    }
  }
`;

function ProductSmallCard() {
  return (
    <SmallCard className="product-list__item">
      <div className="image">{/* <img src={img2} alt="" /> */}</div>
      <div className="details">
        <div className="title">buty niemowlęce</div>
        <div className="shop-name">domodi</div>
        <div className="prices">
          <div className="prices__regular">79 zł</div>
          <div className="prices__sale">59 zł</div>
        </div>
        <div className="btns">
          <div className="quick-view">
            <a href="">podgląd</a>
          </div>
          <div className="see-more">
            <a href="">zobacz</a>
          </div>
        </div>
      </div>
    </SmallCard>
  );
}

export default ProductSmallCard;
