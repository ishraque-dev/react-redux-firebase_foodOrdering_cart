import React, { Fragment, useState } from 'react';
import Cart from './components/cart/Cart';
import Orders from './components/cart/Orders';
import Header from './components/layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShowing, setCartIsShowing] = useState(false);
  const [ordersIsShowing, setOrdersIsShowing] = useState(false);
  const showCartHandler = () => {
    setCartIsShowing(true);
  };
  const hideCartHandler = () => {
    setCartIsShowing(false);
  };
  const showOrdersHandler = () => {
    setOrdersIsShowing(true);
  };
  const hideOrdersHandler = () => {
    setOrdersIsShowing(false);
  };

  return (
    <Fragment>
      {cartIsShowing && <Cart onClose={hideCartHandler} />}
      {ordersIsShowing && <Orders onClose={hideOrdersHandler} />}
      <Header
        showCart={showCartHandler}
        showOrders={showOrdersHandler}
        hideOrders={hideOrdersHandler}
      />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
