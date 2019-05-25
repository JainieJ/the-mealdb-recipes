import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Default from "./pages/Default";
import Recipe from "./pages/Recipe";
import SingleRecipe from "./pages/SingleRecipe";
import MainIngredient from "./pages/MainIngredinet";

function App() {
  return (
    <>
      <Home />
      <Default />
      <Recipe />
      <SingleRecipe />
      <MainIngredient />
    </>
  );
}

export default App;
