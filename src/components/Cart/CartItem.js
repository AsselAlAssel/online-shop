import React, { useContext } from "react";
import CartContext from "../Store/CatrContex";
import classes from "./CartItem.module.scss";
const CartItem = (props) => {

  const ctx = useContext(CartContext);
  const MinusOne=()=>{
    ctx.blusOrMinus({index:props.index,sign:-1});

  }
  const formSubmitHandler=(e)=>{
    e.preventDefault();
  }
  const AddOne=()=>{
    ctx.blusOrMinus({index:props.index,sign:1});
  }
  return (
    <div className={classes["cart-item"]}>
      <div className={classes["cart-item-img"]}>
        <img src={props.item.image} alt={props.item.title} />
      </div>
      
      <div className={classes["cart-item-information"]}>
        <p>{props.item.title}</p>
        <form action="" onSubmit={formSubmitHandler}>
          <button onClick={MinusOne}>-</button>
          {console.log(props.item.amount)}
          <input type="number" readOnly value={props.item.amount} />
          <button onClick={AddOne}>+</button>
        </form>
      </div>
    </div>
  );
};
export default CartItem;
