import React from "react";
import {
  FilterButtonsContainer,
  InStockSwitchContainer,
  InStockSwitch
} from "./styled";

const FilterButtons = ({ inStockSwitch, handleOnChangeFilterInStock }) => (
  <FilterButtonsContainer>
    <InStockSwitchContainer>
      <InStockSwitch
        onClick={handleOnChangeFilterInStock}
        style={{ background: inStockSwitch ? "red" : "blue" }}
      >
        In Stock?
      </InStockSwitch>
    </InStockSwitchContainer>
  </FilterButtonsContainer>
);

export default FilterButtons;
