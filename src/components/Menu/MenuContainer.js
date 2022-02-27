import React from "react";
import ReactDOM from "react-dom";
import classes from "./Menu.module.scss";
import close from "../assets/imgs/close.png";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const showMenu = () => {
    document.getElementById("menu-container").style.marginLeft = "-250px";
  };
  return (
    <div className={`${classes.menu} show-menu-ssss`} id="menu-container">
      <img src={close} alt="close icon for close menu" onClick={showMenu} />
      <NavLink to="/" onClick={showMenu}>Home</NavLink>
      <NavLink to="/shop" onClick={showMenu}>Shop</NavLink>
      <NavLink to="/" onClick={showMenu}>Login</NavLink>
    </div>
  );
};
const MenuContainer = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Menu />, document.querySelector("#menu"))}
    </React.Fragment>
  );
};

export default MenuContainer;
