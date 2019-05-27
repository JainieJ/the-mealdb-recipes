import React from "react";
import ListItem from "./ListItem";

const IngredientList = ({ ingredients }) => {
  return (
    <div className="row">
      {ingredients.map(ingredient => {
        return (
          <ListItem
            key={ingredient.idCategory}
            img={ingredient.strCategoryThumb}
            title={ingredient.strCategory}
            linkText="see more"
          />
        );
      })}
    </div>
  );
};

export default IngredientList;
