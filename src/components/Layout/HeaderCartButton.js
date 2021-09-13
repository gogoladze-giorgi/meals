import React, { useContext } from "react";
import CartContext from "../../Story/Cart-Context";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);
  const numberOfCartItems = CartCtx.item.reduce((currNum, items) => {
    return currNum + items;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
