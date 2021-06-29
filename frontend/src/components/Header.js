import React, { useState } from 'react';
import styled from 'styled-components';
import MobileNav from './MobileNav';
import { colors } from './styles';

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.5);

  .logo {
    background-color: rgba(${colors.mainblue});

    a {
      font-family: 'Sacramento', cursive;
      font-size: 40px;
      text-decoration: none;
      color: rgba(${colors.darkgrey1});
      display: block;
      padding: 15px 40px 5px;
    }
  }

  .menu-mobile {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    z-index: 100;
    position: absolute;
    right: 10px;

    .menu-mobile_icon {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 25px;
      width: 40px;
      z-index: 100;

      &.open {
        height: 40px;
      }

      div {
        width: 100%;
        height: 4px;
        background-color: rgba(${colors.darkgrey2});
        display: block;
        /* margin-bottom: 5px; */
        border-radius: 100px;
        transition: all 0.3s;

        &.open {
          position: absolute;
          top: 50%;

          &:nth-of-type(1) {
            transform: rotate(135deg);
          }

          &:nth-of-type(2) {
            transform: scale(0);
          }

          &:nth-of-type(3) {
            transform: rotate(-135deg);
          }
        }
      }
    }
    .nav-background {
      height: 30px;
      width: 30px;
      position: absolute;
      top: 20%;
      bottom: 0;
      right: 0;
      left: 20%;
      background: rgb(203, 245, 248);
      background: linear-gradient(
        328deg,
        rgba(203, 245, 248, 1) 0%,
        rgba(111, 211, 218, 1) 100%
      );
      border-radius: 50%;
      transform: scale(0);
      opacity: 0.5;
      transition: all 0.8s 0.2s;

      &.open {
        opacity: 1;
        transform: scale(75);
      }
    }
    nav {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      height: 100vh;
      width: 100vw;
      border-radius: 50%;
      margin-top: -39px;

      transform: translateX(100%);
      visibility: hidden;
      transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);

      &.open {
        transform: translateX(0);
        visibility: visible;
      }

      ul {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        li {
          z-index: 1000;
          padding: 25px;

          a {
            font-size: 32px;
            text-decoration: none;
          }
        }
      }
    }
  }
`;

function Header() {
  const [isOpened, setOpen] = useState(false);
  const root = document.querySelector('#root');

  const handleClick = (e) => {
    const nav = document.querySelector('nav');
    const navBgc = document.querySelector('.nav-background');
    root.style.overflow === 'hidden'
      ? Object.assign(root.style, { overflow: 'scroll', height: '' })
      : Object.assign(root.style, { overflow: 'hidden', height: '100vh' });

    navBgc.classList.contains('open')
      ? navBgc.classList.remove('open')
      : navBgc.classList.add('open');

    menuToggleIcon();

    !isOpened ? nav.classList.add('open') : nav.classList.remove('open');

    setOpen((prev) => !prev);
  };

  const menuToggleIcon = () => {
    const menuToggle = Array.from(
      document.querySelectorAll('.menu-mobile_icon div')
    );
    const menuIcon = document.querySelector('.menu-mobile_icon');

    !isOpened
      ? menuIcon.classList.add('open')
      : menuIcon.classList.remove('open');

    menuToggle.forEach((el, i, arr) => {
      !isOpened ? el.classList.add('open') : el.classList.remove('open');
    });
    console.log(menuToggle);
  };
  return (
    <Head isOpened={isOpened}>
      <div className="logo">
        <a href="#">lalilu</a>
      </div>
      <div className="menu-mobile">
        <div className="menu-mobile_icon" onClick={handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <MobileNav />
      </div>
    </Head>
  );
}

export default Header;
