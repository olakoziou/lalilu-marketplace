import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { boxShadow, breakpoints, colors } from '../../styles';

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

    background-image: ${(props) => `url(${props.img})`};
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .details {
    > div {
      margin: 4px 0;
    }
    .title {
      font-size: 12px;
    }
    .shop-name {
      font-weight: 700;
      color: rgba(${colors.darkgrey3});
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

function ProductSmallCard({ data }) {
  const nameSlice =
    data.name.length > 30 ? data.name.slice(0, 30) + '...' : data.name;

  const nameUrl = data.name
    .toLowerCase()
    .split(' ')
    .map((el) => {
      return el
        .split('')
        .filter((el) => el !== ',' && el !== ' ')
        .join('');
    })
    .join('-');

  return (
    <SmallCard img={data.mainImageUrl} className="product-list__item">
      <div className="image">{/* <img src={img2} alt="" /> */}</div>
      <div className="details">
        <div className="shop-name">{data.shopName}</div>
        <div className="title">{nameSlice}</div>

        <div className="prices">
          <div className="prices__regular">{data.price} z??</div>
          <div className="prices__sale"> {data.salePrice} z??</div>
        </div>
        <div className="btns">
          <div className="quick-view">
            <a href="">podgl??d</a>
          </div>
          <div className="see-more">
            <Link to={{ pathname: `${data.category}/${nameUrl}`, state: data }}>
              zobacz
            </Link>
          </div>
        </div>
      </div>
    </SmallCard>
  );
}

export default ProductSmallCard;
