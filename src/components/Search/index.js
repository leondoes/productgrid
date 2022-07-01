import React from "react";
import ClearAll from "./clearAll";
import { SearchBarContainer, MagGlassButton, ExitSearchButton } from "./styled";

const SearchBar = () => (
  <SearchBarContainer>
    <MagGlassButton>
      <span role="img" aria-label="search">
        🔎
      </span>
    </MagGlassButton>
    <ClearAll />
    <ExitSearchButton>X</ExitSearchButton>
  </SearchBarContainer>
);

export default SearchBar;
