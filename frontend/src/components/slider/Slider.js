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
    width: 100%;
    height: 100%;

    overflow: hidden;

    &__items {
      display: flex;
      width: 100%;
      height: 100%;
      transition: all 0.2s;
    }
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
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState();

  const slidersLength = sliderArray.length;
  let sliderList = document.querySelector('.slider-list .slider-list__items');

  useEffect(() => {
    setLoaded(true);
    console.log(active);
    console.log(slidersLength - 1);
    if (loaded) sliderList.style.transform = `translateX(-${active * 100}%)`;
  }, [active]);

  const handleLeftArrow = (e) => {
    if (active > 0) {
      setActive((prev) => prev - 1);
      sliderList.style.transform = `translateX(-${active * 100}%)`;
    }
  };

  const handleRightArrow = (e) => {
    if (active < slidersLength - 1) {
      setActive((prev) => prev + 1);
      sliderList.style.transform = `translateX(-${active * 100}%)`;
    }
  };

  // <SliderList i tu w propsach sliderArray i activeSlide; margin={id*activeSlide}

  return (
    <SliderDiv>
      <div className="arrows">
        <i className="fa fa-chevron-left" onClick={handleLeftArrow}></i>
        <i className="fa fa-chevron-right" onClick={handleRightArrow}></i>
      </div>
      <div className="slider-list">
        <div className="slider-list__items">
          {sliderArray.map((item, i) => (
            <SliderItem
              title={item.title}
              key={item.id}
              numb={i}
              active={active}
            />
          ))}
        </div>
      </div>
    </SliderDiv>
  );
}

export default Slider;
