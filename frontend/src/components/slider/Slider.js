import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

import SliderItem from './SliderItem';

const SliderDiv = styled.div`
  width: 85%;
  height: 250px;
  margin: 0 auto;
  position: relative;
  margin: 50px auto;

  /* .slider-background {
    width: 100%;
    height: 80%;
    background-color: rgba(${colors.lightgrey4});
    position: absolute;
    top: 0;
    right: -5%;
  } */

  /* .slider-frame {
    border: 1px solid #000;
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 5%;
    right: -8%;
    z-index: 1000;
  } */

  .arrows {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-31px);
    font-size: 62px;
    z-index: 1000;

    i {
      color: rgba(${colors.yellow});
      position: absolute;
      cursor: pointer;

      &:nth-of-type(1) {
        left: -30px;
      }

      &:nth-of-type(2) {
        right: -30px;
      }
    }
  }

  .slider-list {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;

function Slider() {
  const [sliderArray] = useState([
    { id: 1, title: 'ciekawy tytuł artykułu 1' },
    { id: 2, title: 'ciekawy tytuł artykułu 2' },
    { id: 3, title: 'ciekawy tytuł artykułu 3' },
    { id: 4, title: 'ciekawy tytuł artykułu 4' },
  ]);
  const [loaded, setLoaded] = useState(false);

  let activeSlide = 0;
  const slidersLength = sliderArray.length;
  let sliderItems;

  useEffect(() => {
    sliderItems = Array.from(document.querySelectorAll('.slider-list .slider'));
    setLoaded(true);
  }, []);

  const handleLeftArrow = (e) => {};

  const handleRightArrow = (e) => {
    console.log(sliderArray);
    activeSlide++;

    sliderItems[activeSlide].style.transform = 'translateX(-100%)';
  };

  // <SliderList i tu w propsach sliderArray i activeSlide; margin={id*activeSlide}

  return (
    <SliderDiv>
      <div className="slider-background"></div>
      <div className="slider-frame"></div>
      <div className="arrows">
        <i className="fa fa-chevron-left" onClick={handleLeftArrow}></i>
        <i className="fa fa-chevron-right" onClick={handleRightArrow}></i>
      </div>
      <div className="slider-list">
        {loaded &&
          sliderArray.map((item) => (
            <SliderItem title={item.title} key={item.id} />
          ))}
      </div>
    </SliderDiv>
  );
}

export default Slider;
