import React, { useReducer } from "react";
import CartContext from "./CatrContex";

const cartReducer = (state, action) => {};

const CartProvider = (props) => {
  const [CartState, cartDispatch] = useReducer(cartReducer, {
    cartList: [],
    totalAmount: 0,
  });
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};
export default CartProvider;
