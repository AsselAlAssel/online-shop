import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./Head.module.scss";
import headImg from "./imgs/headImg.png";
import people from "./imgs/people.svg";
import Nav from "./Nav";
const Head = () => {
  return (
    <div>
      {/* the navbar for the page */}
      <Nav />
      {/* the slider text */}
      <marquee>CHECK OUT OUR OFFICIAL PEANUTS COLLABORATION!</marquee>

      {/* head img  */}
      <div className={classes.headImg}>
       
      </div>

      {/* learn more */}
      <div className={classes["learn-more"]}>
        <img src={people} alt="people" />
        <h3>Establishing Connectivity In A Digital World</h3>
        <p>
          Our designs reflect a vibrant and colorful world of technology,<br/>
          communication and constant growth to always be changing with the
          world.
        </p>
        <NavLink to="/"><Button>LEARN MORE</Button></NavLink>
        
      </div>
    </div>
  );
};
export default Head;
