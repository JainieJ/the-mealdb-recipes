import React from "react";

const Search = ({ value, handleChange, handleSubmit }) => {
  return (
    <div className="row">
      <div className="col-12 mx-auto col-md-8 text-center">
        <h1 className="text-slanted text-orange text-capitalize mt-5">
          Search for recipes with the MealDB
        </h1>
        <label
          htmlFor="meal-name"
          className="mt-3 mb-4 text-slanted text-capitalize"
          style={{ fontSize: "1.6rem", color: "grey" }}
        >
          Enter meal name
        </label>
        <div className="input-group">
          <input
            type="text"
            id="meal-name"
            className="form-control"
            placeholder="omelette"
            value={value}
            onChange={handleChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
