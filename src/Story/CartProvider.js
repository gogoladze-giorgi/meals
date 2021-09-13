import CartContext from "./Cart-Context";
import { useReducer } from "react";

const defaultCartState = {
  item: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const updateItems = state.item.concat(action.item);
    const updateTotalAmount =
      state.totoalAmount + action.item.price * action.item.amount;
    return {
      item: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const AddItemCartHandler = (item) => {
    dispatchCartAction({ type: "Add", item: item });
  };
  const removeItemCartHandler = (id) => {
    dispatchCartAction({ type: "Remove", id: id });
  };

  const CartContexts = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: AddItemCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContext.Provider value={CartContexts}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
