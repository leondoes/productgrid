import React from "react";
import {
  FilterButtonsContainer,
  InStockSwitchContainer,
  InStockSwitch
} from "./styled";

const FilterButtons = ({ inStockSwitch, handleOnClickFilterInStock }) => (
  <FilterButtonsContainer>
    <InStockSwitchContainer>
      <InStockSwitch
        onClick={handleOnClickFilterInStock}
        style={{ background: inStockSwitch ? "red" : "blue" }}
      >
        In Stock?
      </InStockSwitch>
    </InStockSwitchContainer>
  </FilterButtonsContainer>
);

export default FilterButtons;
