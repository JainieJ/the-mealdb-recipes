import React from "react";
import { Link } from "react-router-dom";

const Ingredient = ({ ingredient }) => {
  const { strCategoryThumb, strCategory } = ingredient;
  return (
    <div className="col-10 mx-auto col-md-6 col-lg-4">
      <div className="card my-2">
        <img src={strCategoryThumb} alt="ingredient" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-slanted text-capitalize">
            {strCategory}
          </h5>
          <Link
            to="recipes/main_ingredient"
            className="btn btn-primary text-capitalize"
          >
            see more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
