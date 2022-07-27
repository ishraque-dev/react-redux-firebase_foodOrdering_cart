import React, { useState } from 'react';
import style from './cart.module.css';
import Modal from '../UI/Module';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { cartActions } from '../../store/store';
import CheckOut from './CheckOut';
import LoadingSpinner from '../UI/LoadingSpinner';
const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount.toFixed(2));
  const hasItems = items.length > 0;
  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };
  const addItemHandler = (item) => {
    dispatch(cartActions.addItem(item));
  };
  const orderHandler = () => {
    setIsCheckOut(true);
  };
  // const time = new Date()
  //   .toLocaleString('en-US', { timeZone: 'UTC' })
  //   .toString();
  const submitHandler = async (userData) => {
    setIsSubmit(true);
    await fetch(
      'https://react-foods-28c4d-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderItems: items,
        }),
      }
    );
    setIsSubmit(false);
    setIsSubmitted(true);
    dispatch(cartActions.clearCart());
  };
  const cartItems = (
    <ul className={style['cart - items']}>
      {items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={removeItemHandler.bind(null, item.id)}
            onAdd={addItemHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {isCheckOut && !isSubmit && !isSubmitted && (
        <CheckOut onCancel={props.onClose} onConfirm={submitHandler} />
      )}
      <div className={style.actions}>
        {!isCheckOut && (
          <button className={style['button--alt']} onClick={props.onClose}>
            Close
          </button>
        )}
        {!isCheckOut && hasItems && (
          <button className={style.button} onClick={orderHandler}>
            Order
          </button>
        )}
        {!hasItems && (
          <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
            Your Cart is Empty
          </h1>
        )}
        {isSubmitted && (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Your Order is successfully sended</h2>
            <button className={style['button--alt']} onClick={props.onClose}>
              Okay
            </button>
          </div>
        )}
      </div>
      {isSubmit && <LoadingSpinner />}
    </Modal>
  );
};

export default Cart;
