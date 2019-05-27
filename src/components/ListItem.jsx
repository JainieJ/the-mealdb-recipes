import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ img, title, linkText, styleClass }) => {
  return (
    <div className={`col-10 mx-auto my-3 ${styleClass}`}>
      <div className="card" style={{ height: "100%" }}>
        <img src={img} alt="meal" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-slanted text-capitalize">{title}</h5>
          <Link
            to="recipes/main_ingredient/:name"
            className="btn btn-primary text-capitalize"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListItem;

ListItem.defaultProps = {
  styleClass: "col-md-6 col-lg-4"
};
