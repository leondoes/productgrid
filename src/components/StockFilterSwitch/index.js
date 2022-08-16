import React from "react";
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./styled";

const StockFilterSwitch = ({
  handleOnChangeFilterInStock,
  inStockSwitchActive
}) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        checked={inStockSwitchActive}
        onChange={handleOnChangeFilterInStock}
        id="checkboxFilter"
        type="checkbox"
      />
      <CheckBoxLabel htmlFor="checkboxFilter" />
    </CheckBoxWrapper>
  );
};

export default StockFilterSwitch;
