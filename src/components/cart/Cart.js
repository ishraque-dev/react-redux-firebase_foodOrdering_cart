import React from 'react';
import style from './cart.module.css';
import Modal from '../UI/Module';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { cartActions } from '../../store/store';
const Cart = (props) => {
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
      <div className={style.actions}>
        <button className={style['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={style.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
