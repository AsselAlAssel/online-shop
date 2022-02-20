import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./Home.module.scss";
import people from "../Head/imgs/people.svg";
import TopRating from "./TopRating";
const Home = (props) => {
  let topRating = props.products.filter((ele) => ele.rating.rate > 4.7);
  
  
  return (
    <div>
      {/* head img  */}
      <div className={classes.headImg}></div>

      {/* learn more */}
      <div className={classes["learn-more"]}>
        <img src={people} alt="people" />
        <h3>Establishing Connectivity In A Digital World</h3>
        <p>
          Our designs reflect a vibrant and colorful world of technology,
          <br />
          communication and constant growth to always be changing with the
          world.
        </p>
        <NavLink to="/">
          <Button>LEARN MORE</Button>
        </NavLink>
      </div>
<TopRating topRating={topRating}/>

    </div>
  );
};
export default Home;
