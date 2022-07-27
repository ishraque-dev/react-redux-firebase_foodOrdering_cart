import React from 'react';
import style from './headerCartButton.module.css';
const MyOrdersButton = (props) => {
  return (
    <button className={style.button} style={{ marginLeft: '10px' }} onClick={props.onClick}>
      My Orders
    </button>
  );
};

export default MyOrdersButton;
