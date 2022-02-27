import React, { useContext } from "react";
import CartContext from "../Store/CatrContex";
import CartItem from "./CartItem";
import classes from './ShowCart.module.scss'

const ShowCartList = () => {
  const ctx = useContext(CartContext);
  console.log(ctx.cartList);
  let CartItems = ctx.cartList.map((item, index) => {
    return <CartItem key={index} index={index} item={item} />;
  });

  return <div className={classes['cart-items-list']}>{CartItems}</div>;
};

export default ShowCartList;
