import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Default from "./pages/Default";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import MainIngredient from "./pages/MainIngredinet";

function App() {
  return (
    <Router>
      <div>
        {/* navbar here */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={Recipes} />
          <Route
            path="/recipes/main_ingredient"
            exact
            component={MainIngredient}
          />
          <Route path="/recipes/:id" component={SingleRecipe} />
          <Route component={Default} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
