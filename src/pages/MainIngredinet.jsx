import React, { Component } from "react";
import { Link } from "react-router-dom";
import { meals } from "../data/meals";
import ListItem from "../components/ListItem";

class MainIngredient extends Component {
  state = {
    meals,
    mealImg: "https://www.themealdb.com/images/ingredients/Beef.png"
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-sm-3 my-3 text-center">
            <img
              src={this.state.mealImg}
              alt="main ingredient"
              className="d-block w-100 mt-5"
              style={{ maxHeight: "30rem" }}
            />
            <div>
              <Link
                to="/"
                className="btn btn-link"
                style={{ fontSize: "3rem" }}
              >
                <i className="fas fa-angle-left" />
              </Link>
              <Link
                to="/"
                className="btn btn-link"
                style={{ fontSize: "3rem" }}
              >
                <i className="fas fa-angle-right" />
              </Link>
            </div>
          </div>
          <div className="col-10 mx-auto col-sm-9 my-3 text-center text-slanted text-muted">
            <h1>List of Meals</h1>
            <div className="container">
              <div className="row">
                {this.state.meals.map(meal => (
                  <ListItem
                    key={meal.idMeal}
                    img={meal.strMealThumb}
                    title={meal.strMeal}
                    linkText="details"
                    linkUrl="/recipes/:id"
                    styleClass="col-sm-6 col-md-4"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainIngredient;
