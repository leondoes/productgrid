import React, { useState, useRef } from "react";
import {
  SearchBarContainer,
  SearchIcon,
  ExitSearch,
  ClearAll,
  SearchBarInput
} from "./styled";

const SearchBar = () => {
  const inputRef = useRef(null);
  const [visibilityClearAll, setVisibilityClearAll] = useState(false);
  const handleOnChange = () => {
    console.log(`Sending ${inputRef.current.value} to search server`);
    setVisibilityClearAll(true);

    if (inputRef.current.value === "") {
      setVisibilityClearAll(false);
    }
  };
  const handleClearAll = () => {
    inputRef.current.value = "";
    setVisibilityClearAll(false);
  };
  return (
    <SearchBarContainer>
      <SearchIcon>
        <span role="img" aria-label="search">
          🔎
        </span>
      </SearchIcon>
      <SearchBarInput
        ref={inputRef}
        type="text"
        id="header-search"
        placeholder="What are you looking for today?"
        name="Search"
        onChange={handleOnChange}
      />
      <ClearAll
        style={{ visibility: visibilityClearAll ? "visible" : "hidden" }}
        onClick={handleClearAll}
      >
        ClearAll
      </ClearAll>
      <ExitSearch>X</ExitSearch>
    </SearchBarContainer>
  );
};

export default SearchBar;
