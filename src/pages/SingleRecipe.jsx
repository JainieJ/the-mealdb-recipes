import React, { Component } from "react";
import { meal } from "../data/meal";
import { Link } from "react-router-dom";

class SingleRecipe extends Component {
  state = { meal };
  render() {
    const {
      strMealThumb: img,
      strMeal: title,
      strYoutube: linkYoutube,
      strInstructions
    } = this.state.meal;
    const ingredientsArr = Object.keys(this.state.meal)
      .filter(key => key.startsWith("strIngredient"))
      .filter(ingredient => Boolean(this.state.meal[ingredient]) === true)
      .map(ingredient => this.state.meal[ingredient]);
    const measureArr = Object.keys(this.state.meal)
      .filter(key => key.startsWith("strMeasure"))
      .filter(measure => Boolean(this.state.meal[measure]) === true)
      .map(measure => this.state.meal[measure]);
    let ingredients = [];
    for (let i = 0; i < ingredientsArr.length; i++) {
      ingredients.push(`${ingredientsArr[i]} ${measureArr[i]}`);
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-4 my-3">
            <Link to="/recipes" className="btn btn-warning text-uppercase my-3">
              back to search
            </Link>
            <img
              src={img}
              alt="meal"
              className="d-block w-100 mt-2"
              style={{ maxHeight: "30rem" }}
            />
            <ul className="text-slanted mt-3">
              {ingredients.map((i, index) => {
                return (
                  <li
                    key={index}
                    style={{ fontSize: "0.8rem", listStyle: "none" }}
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
