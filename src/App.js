import React, { Fragment, useState } from 'react';
import Cart from './components/cart/Cart';
import Header from './components/layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShowing, setCartIsShowing] = useState(false);
  const showCartHandler = () => {
    setCartIsShowing(true);
  };
  const hideCartHandler = () => {
    setCartIsShowing(false);
  };
  return (
    <Fragment>
      {cartIsShowing && <Cart onClose={hideCartHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
