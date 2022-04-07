import React from 'react';

import HeaderCartButton from '../header-cart-button/header-cart-button.component';

import mealsImg from './../../../assets/meals.jpg';

import './header.styles.css';

const Header = () => {
  return (
    <>
      <div className="main-image">
        <img src={mealsImg} alt="Meals" />
      </div>
      <div className="header">
        <h1>React Meals</h1>
        <HeaderCartButton />
      </div>
    </>
  );
};

export default Header;
