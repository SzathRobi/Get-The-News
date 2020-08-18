import React from "react";
import "./Header.css";
import Hamburger from "./Hamburger/Hamburger";
import Nav from "./Nav/Nav";
import SearchBar from "./SearchBar/SearchBar";

function Header({ menuClicked, updateClicked, updateQuery }) {
  return (
    <header className="Header">
      <Hamburger updateClicked={updateClicked} menuClicked={menuClicked} />
      <Nav
        updateClicked={updateClicked}
        menuClicked={menuClicked}
        updateQuery={updateQuery}
      />
      <h2>Get The News</h2>
      <SearchBar updateQuery={updateQuery} />
    </header>
  );
}

export default Header;
