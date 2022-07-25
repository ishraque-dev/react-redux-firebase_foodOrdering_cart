import React from 'react';
import style from './headerCartButton.module.css';
import CartIcon from '../cart/CartIcon';
const HeaderCartButton = (props) => {
  return (
    <button className={style.button}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
