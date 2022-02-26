import React from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.scss";
import close from "../assets/imgs/close.png";

const Cart = () => {
  const showCart = () => {
    document.getElementById("cart-container").style.marginRight = "-300px";
  };
  return (
    <div className={classes.cart} id="cart-container">
      <img src={close} alt="close icon for close menu" onClick={showCart} />
    </div>
  );
};
const CartContainer = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Cart />, document.getElementById("cart"))}
    </React.Fragment>
  );
};
export default CartContainer;
