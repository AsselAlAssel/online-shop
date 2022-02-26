import React, { useState } from "react";
import Categories from "./Categories";

import ShowItems from "./ShowItems";
const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
const Shop = (props) => {
  const [category, setCategory] = useState("all");
  let ItemList = [];
  //   to filter the data
  if (category === "all") {
    ItemList = props.products;
  } else {
    ItemList = props.products.filter((ele) => ele.category === category);
    console.log(ItemList);
  }
  //   function to change the categorie

  const chnageCategoryHandler = (newCategory) => {
    console.log(category);
    console.log(newCategory);
    setCategory(newCategory);
  };
  return (
    //   shop container
    <div>
      {/* categories */}
      <Categories categories={categories} onClick={chnageCategoryHandler} />
      {/* show the item  list after the filter */}
      <ShowItems ItemList={ItemList} />
    </div>
  );
};

export default Shop;
