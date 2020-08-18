import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ menuClicked, updateMenuClicked, updateQuery }) {
  const navSlide = {
    left: menuClicked === true ? 0 : "-9rem",
    borderTopRightRadius: menuClicked === true ? "8px" : "60px",
    borderBottomRightRadius: menuClicked === true ? "8px" : "60px",
  };

  const navItemSlide = {
    transform: menuClicked === true ? "translateX(0)" : "translateX(-100%)",
  };

  return (
    <nav className="Nav" style={navSlide}>
      <ul>
        <Link to="/" onClick={updateMenuClicked}>
          <h3 style={navItemSlide} onClick={updateQuery}>
            All
          </h3>
        </Link>
        <Link to="/" onClick={updateMenuClicked}>
          <h3 style={navItemSlide} onClick={updateQuery}>
            Culture
          </h3>
        </Link>
        <Link to="/" onClick={updateMenuClicked}>
          <h3 style={navItemSlide} onClick={updateQuery}>
            Education
          </h3>
        </Link>
        <Link to="/" onClick={updateMenuClicked}>
          <h3 style={navItemSlide} onClick={updateQuery}>
            Environment
          </h3>
        </Link>
        <Link to="/" onClick={updateMenuClicked}>
          <h3 style={navItemSlide} onClick={updateQuery}>
            Health and Fitness
          </h3>
        </Link>
        <Link to="/" onClick={updateMenuClicked}>
          <h3 style={navItemSlide} onClick={updateQuery}>
            Science
          </h3>
        </Link>
        <Link to="/" onClick={updateMenuClicked}>
          <h3 style={navItemSlide} onClick={updateQuery}>
            Travel
          </h3>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
