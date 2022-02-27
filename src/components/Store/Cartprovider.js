import React, { useReducer } from "react";
import CartContext from "./CatrContex";
import { updateCartLis, updateCartLisWhenRemove } from "./Functions";

const defaultState = {
  cartList: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "Add") {
    return {
      cartList: updateCartLis(state.cartList, action.value),
      totalAmount: state.totalAmount + action.value.price,
    };
  } else if (action.type === "BluseOrMinus") {
    if (action.value.sign === -1) {
      return {
        cartList: updateCartLisWhenRemove(state.cartList, action.value.index),
        totalAmount: state.totalAmounts - 1,
      };
    } else {
      state.cartList[action.value.index].amount += 1;
      return {
        cartList: state.cartList,
        totalAmounts: state.totalAmounts + 1,
      };
    }
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [CartState, cartDispatch] = useReducer(cartReducer, defaultState);

  // add item from btn add to cart
  const AddToCart = (data) => {
    cartDispatch({ type: "Add", value: data });
  };
  const BluseOrMinus = (data) => {
    cartDispatch({ type: "BluseOrMinus", value: data });
  };
  const context = {
    cartList: CartState.cartList,
    totalAmount: CartState.totalAmount,
    addItem: AddToCart,
    blusOrMinus: BluseOrMinus,
  };
  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
