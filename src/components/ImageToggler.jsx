import React from "react";

const ImageToggler = ({
  img,
  index,
  array,
  showPreviousIngredient,
  showNextIngredient,
  name
}) => {
  return (
    <div className="col-10 mx-auto col-sm-3 my-3 text-center">
      <img
        src={img}
        alt="main ingredient"
        className="d-block w-100 mt-5"
        style={{ maxHeight: "18rem", maxWidth: "18rem" }}
      />
      <div>
        <button
          className={`btn btn-link ${index === 0 ? "disabled" : "null"}`}
          style={{ fontSize: "3rem" }}
          onClick={showPreviousIngredient}
        >
          <i className="fas fa-angle-left" />
        </button>
        <button
          className={`btn btn-link ${
            index === array.length - 1 ? "disabled" : "null"
          }`}
          style={{ fontSize: "3rem" }}
          onClick={showNextIngredient}
        >
          <i className="fas fa-angle-right" />
        </button>
      </div>
      <h2 className="text-orange text-slanted text-orange">{name}</h2>
    </div>
  );
};

export default ImageToggler;
