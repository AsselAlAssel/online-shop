import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";
import Home from "./components/Home/Home";
import Loading from "./components/Loading/Loading";
// import Home from "./components/home";
const App = () => {
  const [products, setProducts] = useState([]);
  // fetch the data from fake api
  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      {products.length === 0 ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Head />
          <Routes>
            <Route exact path="/" element={<Home products={products} />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </React.Fragment>
  );
};
export default App;
