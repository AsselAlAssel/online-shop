import React from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.scss";
import close from "../assets/imgs/close.png";
import ShowCartList from "./ShowCartList";

const Cart = () => {
  const showCart = () => {
    document.getElementById("cart-container").style.marginRight = "-400px";
  };
  return (
    <div className={classes.cart} id="cart-container">
      <img src={close} alt="close icon for close menu" onClick={showCart} />
      <ShowCartList/>
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
