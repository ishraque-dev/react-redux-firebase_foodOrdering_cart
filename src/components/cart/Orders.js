import React, { useEffect, useState } from 'react';
import style from './cart.module.css';
import Module from '../UI/Module';
import classes from './CartItem.module.css';
const Orders = (props) => {
  //   const price = `$${props.price.toFixed(2)}`;
  const [orders, setOrders] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      if (orders.length > 0) {
        setIsEmpty(false);
      }
      const response = await fetch(
        'https://react-foods-28c4d-default-rtdb.firebaseio.com/orders.json'
      );
      const responseData = await response.json();

      const data = [];
      const data2 = [];
      const data3 = [];
      const data4 = [];
      for (const key in responseData) {
        data.push({
          orders: responseData[key].orderItems,
        });
        // setOrders(data[0].orders);
      }

      data.forEach((order) => {
        data2.push(order);
      });
      data2.forEach((order) => {
        data3.push(order.orders);
      });
      data3.map((item) => {
        return data4.push(...item);
      });
      setOrders(data4);
    };
    fetchMeals();
  }, [orders.length]);
  console.log(orders);
  return (
    <Module>
      {orders.map((item) => {
        return (
          <div className={classes['cart-item']}>
            <div>
              <h2>{item.name}</h2>
              <div className={classes.summary}>
                <span className={classes.price}>{item.price}</span>
                <span className={classes.amount}>x {item.amount}</span>
                {/* <div>{item.time }</div> */}
              </div>
            </div>
          </div>
        );
      })}
      {isEmpty && (
        <h1 style={{ textAlign: 'center' }}>No previous orders found</h1>
      )}
      <div className={style.actions}>
        <button className={style['button--alt']} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Module>
  );
};

export default Orders;
