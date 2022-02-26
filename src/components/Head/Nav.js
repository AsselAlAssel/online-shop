import React from "react";
import classes from "./Nav.module.scss";
import menu from "../assets/imgs/menu.png" ;
import logo from "../assets/imgs/logo.png";
import cart from "../assets/imgs/cart.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  // show the menu
  const showMenu = () => {
  
    document.getElementById("menu-container").style.marginLeft = "0px";
  };
  // show the cart
  const showCart = () => {
    document.getElementById("cart-container").style.marginRight = "0px";
  };
  return (
    <nav className={classes.nav}>
      <div className={classes.menu}>
        <img src={menu} alt="menu icon" onClick={showMenu}/>
      </div>

      <div className={classes.logo}>
        <NavLink to="/">
          <img src={logo} alt="logo fot the shop" />
        </NavLink>
      </div>
      <div className={classes.cart}>
        <img src={cart} alt="cart icon" onClick={showCart} />
      </div>
    </nav>
  );
};
export default Nav;
