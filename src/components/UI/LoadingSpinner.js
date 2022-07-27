import React from 'react';
import style from './LoadingSpinner.module.css';
const LoadingSpinner = () => {
  return (
    <>
      <div className={style['lds-ring']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default LoadingSpinner;
