import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <img
        src="https://www.themealdb.com/images/logo-small.png"
        alt="mealdb logo"
        className="navbar-brand"
      />
      <div className="collapse navbar-collapse show">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/recipes" className="nav-link">
              Recipes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
