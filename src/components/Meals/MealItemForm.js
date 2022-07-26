import React, { useRef } from 'react';
import Input from '../UI/Input';
import style from './mealitemForm.module.css';
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          min: 1,
          max: 5,
          defaultValue: 1,
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
