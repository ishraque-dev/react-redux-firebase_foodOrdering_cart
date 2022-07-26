import React from 'react';
import style from '../UI/input.module.css';
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={style.input}>
      <label htmlFrom={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});

export default Input;
