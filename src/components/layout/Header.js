import React from 'react';
import style from './header.module.css';
import banner from '../../assets/banner.jpeg';
import HeaderCartButton from './HeaderCartButton';
import MyOrdersButton from './MyOrdersButton';
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>Redux Shopping Cart</h1>
        <div style={{ display: 'flex' }}>
          <HeaderCartButton onClick={props.showCart} />
          <MyOrdersButton
            onClick={props.showOrders}
             
          />
        </div>
      </header>
      <div className={style['main-image']}>
        <img src={banner} alt="img" />
      </div>
    </React.Fragment>
  );
};

export default Header;
