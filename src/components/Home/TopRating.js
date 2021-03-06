import Item from "../Item/Item";
import classes from "./TopRating.module.scss";
const TopRating = (props) => {
 let topRatingItems= props.topRating.map((ele , index) => {
    return <Item data={ele} key={index} />;
  });
  return (
    <div className={classes['top-rating']}>
      <h2>Top Rating</h2>
      <div className={classes['top-rating-items']}>
          {topRatingItems}
      </div>
    </div>
  );
};

export default TopRating;
