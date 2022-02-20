import classes from "./Footer.module.scss";
import insta from "../assets/imgs/insta.svg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <p className={classes.title}>DON'T BE A STRANGER</p>
      <p className={classes.description}>
        Hit us up with any questions or comments you may have. We want <br /> to
        hear from you!
      </p>
      <div className={classes['footer-nav-link']}>
         <NavLink to="/ls,">
          <img src={insta} alt="insta for the shop" />
        </NavLink>
        <NavLink to="/ms">CONTACT</NavLink>
        <NavLink to="/ks">RETURNS</NavLink>
        <NavLink to="/s">PRIVACY</NavLink>
        <NavLink to="/sl">TERMS  CONDITIONS</NavLink>
      
      </div>
      <form action="">
        <input type="text" placeholder="EMAIL" />
        <input type="submit"  value="SUBSCRIBE"/> 
      </form>
    </div>
  );
};
export default Footer;
