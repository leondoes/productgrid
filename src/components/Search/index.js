import React from "react";
import {
  SearchBarInput,
  SearchBarContainer,
  MagGlassButton,
  ExitSearchButton
} from "./styled";

const SearchBar = () => (
  <SearchBarContainer>
    <MagGlassButton>
      <span role="img" aria-label="search">
        🔎
      </span>
    </MagGlassButton>
    <SearchBarInput
      type="text"
      id="header-search"
      placeholder="What are you looking for today?"
      name="Search"
    />
    <ExitSearchButton>X</ExitSearchButton>
  </SearchBarContainer>
);

export default SearchBar;
