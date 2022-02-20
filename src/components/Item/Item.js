import { NavLink } from "react-router-dom";
import classes from "./Item.module.scss";
const Item = (props) => {
    console.log(props.data)
  return (
    <div className={classes["item"]}>
      <NavLink to="/d">
        <img src={props.data.image} alt="" />    
      </NavLink>
      <p>{props.data.title}</p>
      <p>$ {props.data.price}</p>
    </div>
  );
};
export default Item;
