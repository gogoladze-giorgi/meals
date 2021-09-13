import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Story/CartProvider";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const ShowButtonHandler = () => {
    setShowCart(true);
  };
  const CloseCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onCloseCart={CloseCartHandler} />}
      <Header onShowCart={ShowButtonHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
