import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";import classes from "./App.module.scss"
import Head from "./components/Head/Head";
// import Home from "./components/home";
const App = () => {
  return (
    <BrowserRouter>
      <Head/>
      <Routes>
      </Routes>
    </BrowserRouter>
  );
};
export default App;

