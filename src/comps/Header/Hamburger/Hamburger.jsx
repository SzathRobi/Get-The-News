import React from "react";
import "./Hamburger.css";

export default function Hamburger({ menuClicked, updateClicked }) {
  const goUp = {
    opacity: menuClicked === true ? 0 : 1,
    top: menuClicked === true ? "-0.5rem" : 0,
  };
  const goDown = {
    opacity: menuClicked === true ? 0 : 1,
    top: menuClicked === true ? "0.5rem" : 0,
  };
  const cross1 = {
    transform: menuClicked === true ? "rotate(45deg)" : "rotate(0)",
  };
  const cross2 = {
    transform: menuClicked === true ? "rotate(-45deg)" : "rotate(0)",
  };

  return (
    <div className="Hamburger" onClick={updateClicked}>
      <div style={goUp}></div>
      <div>
        <div style={cross1}></div>
        <div style={cross2}></div>
      </div>
      <div style={goDown}></div>
    </div>
  );
}
