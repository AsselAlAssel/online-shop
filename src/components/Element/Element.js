import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import classes from "./Element.module.scss";
import classesBtn from "../UI/Button.module.scss";
import CartContext from "../Store/CatrContex";
import Loading from "../Loading/Loading";

const Element = () => {
  const ctx = useContext(CartContext);
  const location = useLocation();
  // use hash because the state dont wook
  const id = location.hash.substring(1);
  const [element, setElement] = useState(null);
  useEffect(() => {
    setElement(null);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setElement(json));
  }, []);

  // add to cart
  const AddToCartHandler = () => {
    ctx.addItem(element);
  };

  return (
        <div className={classes.element}>
        {!element?
        <Loading/>:
        (
          <>
          <div className={classes.container}>
            <div className={classes["element-img"]}>
              <img src={element.image} alt="the products that u click it" />
            </div>
            <div className={classes["element-desc"]}>
              <p className={classes.title}>{element.title}</p>
              <p>{element.description}</p>
              <p>${element.price}</p>
              <div style={{textAlign:"center"}}>
              <button className={classesBtn.button} onClick={AddToCartHandler}>
                Add To Cart
              </button>
              </div>
           
            </div>
          </div>
        
        </>
      )}
    </div>
  );
};

export default Element;
