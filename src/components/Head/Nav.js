import React from "react";
import classes from "./Nav.module.scss";
import menu from "../assets/imgs/menu.png" ;
import logo from "../assets/imgs/logo.png";
import cart from "../assets/imgs/cart.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.menu}>
        <img src={menu} alt="menu" />
      </div>

      <div className={classes.logo}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className={classes.cart}>
        <img src={cart} alt="cart" />
      </div>
    </nav>
  );
};
export default Nav;
