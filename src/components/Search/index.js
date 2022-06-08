import React from "react";

const SearchBar = () => (
  <form action="/" method="get">
    <input
      type="text"
      id="header-search"
      placeholder="🔎 What are you looking for today?"
      name="s"
    />
  </form>
);

export default SearchBar;
