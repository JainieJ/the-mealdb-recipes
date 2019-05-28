import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleRecipe extends Component {
  state = { meal: {} };
  async componentDidMount() {
    try {
      const { match } = this.props;
      const recipeResponse = await fetch(
        `https://www.themealdb.com/api/json/v2/${
          process.env.REACT_APP_API_KEY
        }/lookup.php?i=${match.params.id}`
      );
      const recipeJson = await recipeResponse.json();
      this.setState({ meal: recipeJson.meals[0] });
    } catch (err) {
      console.log(err);
    }
  }
  getIngredients = () => {
    const { meal } = this.state;
    const ingredientsArr = Object.keys(meal)
      .filter(key => key.startsWith("strIngredient"))
      .filter(ingredient => Boolean(meal[ingredient]) === true)
      .map(ingredient => meal[ingredient]);
    const measureArr = Object.keys(meal)
      .filter(key => key.startsWith("strMeasure"))
      .filter(measure => Boolean(meal[measure]) === true)
      .map(measure => meal[measure]);
    let ingredients = [];
    for (let i = 0; i < ingredientsArr.length; i++) {
      ingredients.push(`${ingredientsArr[i]} ${measureArr[i]}`);
    }
    return ingredients;
  };
  render() {
    const {
      strMealThumb: img,
      strMeal: title,
      strYoutube: linkYoutube,
      strInstructions
    } = this.state.meal;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-4 my-3 text-center">
            <Link to="/recipes" className="btn btn-warning text-uppercase my-3">
              back to search
            </Link>
            <img
              src={img}
              alt="meal"
              className="d-block w-100 mx-auto mt-2"
              style={{ maxHeight: "18rem", maxWidth: "18rem" }}
            />
            <ul className="text-slanted mt-3">
              {this.getIngredients().map((i, index) => {
                return (
                  <li
                    key={index}
                    style={{ fontSize: "1rem", listStyle: "none" }}
                  >
                    {i}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-10 mx-auto col-md-8 my-3 text-center">
            <h2 className="text-muted text-slanted">{title}</h2>
            <a
              href={linkYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger my-2"
            >
              YouTube
            </a>
            <h3 className="text-slanted text-orange my-2">Instructions</h3>
            <p style={{ fontSize: "1rem" }}>{strInstructions}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleRecipe;
