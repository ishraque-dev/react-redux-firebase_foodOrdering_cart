import React, { useState, useEffect } from 'react';
import style from './headerCartButton.module.css';
import CartIcon from '../cart/CartIcon';
import { useSelector } from 'react-redux';
const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((curNum, item) => {
      return curNum + item.amount;
    }, 0)
  );
  const items = useSelector((state) => state.cart.items);
  useEffect(() => {
    if (items.length > 0) {
      setButtonIsHighlighted(true);
    }
    let timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const btnClass = `${style.button} ${buttonIsHighlighted ? style.bump : ''}`;
  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
