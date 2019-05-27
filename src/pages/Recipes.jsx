import React, { Component } from "react";
import Search from "../components/Search";
import IngredientList from "./../components/IngredientList";

class Recipes extends Component {
  state = {
    search: "",
    ingredients: []
  };

  async componentDidMount() {
    try {
      const ingredientsResponse = await fetch(
        `https://www.themealdb.com/api/json/v2/${
          process.env.REACT_APP_API_KEY
        }/categories.php`
      );
      const ingredientsJSON = await ingredientsResponse.json();
      this.setState({ ingredients: ingredientsJSON.categories });
    } catch (err) {
      console.log(err);
    }
  }
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
