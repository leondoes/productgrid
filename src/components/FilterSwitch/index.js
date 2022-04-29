import React from "react";
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./styled";

const FilterSwitch = ({ handleOnClickFilterInStock }) => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox
          onClick={handleOnClickFilterInStock}
          id="checkbox"
          type="checkbox"
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
  );
};

export default FilterSwitch;
