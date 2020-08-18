import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar({ updateQuery }) {
  return (
    <form className="SearchBar" onSubmit={updateQuery}>
      <input type="text" />
      <button>
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;
