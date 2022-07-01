import React, { useState } from "react";
import { SearchBarInputStyle } from "./styled";

export default function ClearAll() {
  const [EmptyInput, setEmptyInput] = useState();

  return (
    <div>
      <SearchBarInputStyle
        type="text"
        id="header-search"
        placeholder="What are you looking for today?"
        name="Search"
        value={EmptyInput}
      />
      <button onClick={() => setEmptyInput(() => "")}>Reset</button>
    </div>
  );
}
