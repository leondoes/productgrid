import React from "react";
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./styled";

const FilterSwitch = ({ handleOnClickFilterInStock, inStockSwitchActive }) => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox
          checked={inStockSwitchActive}
          onClick={handleOnClickFilterInStock}
          id="checkboxFilter"
          type="checkbox"
        />
        <CheckBoxLabel htmlFor="checkboxFilter" />
      </CheckBoxWrapper>
    </div>
  );
};

export default FilterSwitch;
