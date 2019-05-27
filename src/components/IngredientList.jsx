import React from "react";
import Ingredient from "./Ingredient";

const IngredientList = ({ ingredients }) => {
  return (
    <div className="row">
      {ingredients.map(ingredient => {
        console.log(ingredient);
        return (
          <Ingredient key={ingredient.idCategory} ingredient={ingredient} />
        );
      })}
    </div>
  );
};

export default IngredientList;
