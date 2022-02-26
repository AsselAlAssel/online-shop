import classes from "./Categories.module.scss";
import Button from "../UI/Button"
const Categories = (props) => {
    let categories=props.categories.map((ele,index)=>{
      return  <Button className={classes['btn-categorie']} onClick={props.onClick} key={index}>{ele}</Button>
    })
  return (
    <div className={classes['categories']}>
    {categories}
    
    </div>
  );
};
export default Categories;
