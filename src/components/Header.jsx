import React from "react";
import { Link } from "react-router-dom";

const Header = ({ styleClass, text, link, linkText }) => {
  return (
    <div className="container-fluid">
      <div className={`row ${styleClass} align-items-center`}>
        <div className="col-12 text-center">
          <h1 className="text-slanted text-uppercase text-light">{text}</h1>
          <Link to={link} className="btn btn-secondary text-uppercase mt-3">
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

Header.defaultProps = {
  styleClass: "default-hero"
};
