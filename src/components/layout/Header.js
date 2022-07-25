import React from 'react';
import style from './header.module.css';
import banner from '../../assets/banner.jpeg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={style['main-image']}>
        <img src={banner} alt="img" />
      </div>
    </React.Fragment>
  );
};

export default Header;
