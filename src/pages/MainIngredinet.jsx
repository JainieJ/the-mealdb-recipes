import React, { Component } from "react";
import ListItem from "../components/ListItem";
import ImageToggler from "../components/ImageToggler";

class MainIngredient extends Component {
  constructor(props) {
    super(props);
    this.getRecipesByIngredient = this.getRecipesByIngredient.bind(this);
    this.showPreviousIngredient = this.showPreviousIngredient.bind(this);
    this.showNextIngredient = this.showNextIngredient.bind(this);
  }
  state = {
    meals: [],
    mealImg: "",
    mealArray: [],
    currentIndex: {}
  };
  componentDidMount() {
    this.getRecipesByIngredient();
  }
  async getRecipesByIngredient() {
    try {
      const { match } = this.props;
      const mealResponse = await fetch(
        `https://www.themealdb.com/api/json/v2/${
          process.env.REACT_APP_API_KEY
        }/filter.php?c=${match.params.name}`
      );
      const mealJson = await mealResponse.json();

      let imageResponse = await fetch(
        `https://www.themealdb.com/images/ingredients/${match.params.name}.png`
      );
      if (imageResponse.status === 404) {
        var image = "https://www.themealdb.com/images/ingredients/Lime.png";
      } else {
        image = imageResponse.url;
      }
      const ingredientsResponse = await fetch(
        `https://www.themealdb.com/api/json/v2/${
          process.env.REACT_APP_API_KEY
        }/categories.php`
      );
      const ingredientsArray = await ingredientsResponse.json();
      const filtered = ingredientsArray.categories.map(i => i.strCategory);
      const index = filtered.indexOf(match.params.name);
      this.setState({
        meals: mealJson.meals,
        mealImg: image,
        mealArray: filtered,
        currentIndex: index
      });
    } catch (err) {
      console.log(err);
    }
  }
  async showPreviousIngredient() {
    const previous = this.state.mealArray[this.state.currentIndex - 1];
    await this.props.history.push(`/recipes/main_ingredient/${previous}`);
    this.getRecipesByIngredient();
  }
  async showNextIngredient() {
    const next = this.state.mealArray[this.state.currentIndex + 1];
    await this.props.history.push(`/recipes/main_ingredient/${next}`);
    this.getRecipesByIngredient();
  }
  render() {
    const { match } = this.props;
    const { meals, mealImg, mealArray, currentIndex } = this.state;
    return (
      <div className="container">
        <div className="row">
          <ImageToggler
            img={mealImg}
            index={currentIndex}
            array={mealArray}
            showPreviousIngredient={this.showPreviousIngredient}
            showNextIngredient={this.showNextIngredient}
            name={match.params.name}
          />
          <div className="col-10 mx-auto col-sm-9 my-3 text-center text-slanted text-muted">
            <h1>List of Meals</h1>
            <div className="container">
              <div className="row">
                {meals.map(meal => (
                  <ListItem
                    key={meal.idMeal}
                    img={meal.strMealThumb}
                    title={meal.strMeal}
                    linkText="details"
                    linkUrl={`/recipes/${meal.idMeal}`}
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
