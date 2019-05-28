import React, { Component } from "react";
import Search from "../components/Search";
import ListItem from "./../components/ListItem";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.getRecipesByName = this.getRecipesByName.bind(this);
  }
  state = {
    search: "",
    ingredients: [],
    meals: [],
    recipeRequested: false
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
    e.preventDefault();
    this.getRecipesByName();
  };
  async getRecipesByName() {
    try {
      const { search } = this.state;
      const recipeResponse = await fetch(
        `https://www.themealdb.com/api/json/v2/${
          process.env.REACT_APP_API_KEY
        }/search.php?s=${search}`
      );
      const recipeJson = await recipeResponse.json();
      this.setState({ meals: recipeJson.meals, recipeRequested: true });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { meals, ingredients, search, recipeRequested } = this.state;
    return (
      <div className="container">
        <Search
          value={search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {/* row for recipes by name or ingredients */}
        <div className="row">
          {recipeRequested
            ? meals.map(meal => (
                <ListItem
                  key={meal.idMeal}
                  img={meal.strMealThumb}
                  title={meal.strMeal}
                  linkUrl={`/recipes/${meal.idMeal}`}
                  linkText="details"
                  styleClass="col-sm-6 col-md-4"
                />
              ))
            : ingredients.map(ingredient => (
                <ListItem
                  key={ingredient.idCategory}
                  img={ingredient.strCategoryThumb}
                  title={ingredient.strCategory}
                  linkUrl={`/recipes/main_ingredient/${ingredient.strCategory}`}
                  linkText="see more"
                  styleClass="col-md-6 col-lg-4"
                />
              ))}
        </div>
      </div>
    );
  }
}

export default Recipes;
