import React from "react";
import ClearAll from "./clearAll";
import { SearchBarContainer, SearchInputButton } from "./styled";

const SearchBar = () => (
  <SearchBarContainer>
    <SearchInputButton>
      <span role="img" aria-label="search">
        🔎
      </span>
    </SearchInputButton>
    <ClearAll />
    <SearchInputButton>X</SearchInputButton>
  </SearchBarContainer>
);

export default SearchBar;
