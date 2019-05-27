import React, { Component } from "react";
import Search from "../components/Search";
import { data } from "../data/data";
import IngredientList from "../components/IngredientList";

class Recipes extends Component {
  state = {
    search: "",
    ingredients: data
  };
  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
  };
  handleSubmit = e => {
    // e.preventDefault();
    console.log(this.state.search);
  };
  render() {
    return (
      <div className="container">
        <Search
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {/* row for ingredients */}
        <IngredientList ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default Recipes;
