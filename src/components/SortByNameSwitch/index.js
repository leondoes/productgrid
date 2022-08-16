import React from "react";
import {
  SortByNameCheckBoxWrapper,
  SortByNameCheckBox,
  SortByNameCheckBoxLabel
} from "./styled";

const SortByNameSwitch = ({
  handleOnClickSortAlphabetical,
  alphbeticalSortActive
}) => {
  return (
    <SortByNameCheckBoxWrapper>
      <SortByNameCheckBox
        checked={alphbeticalSortActive}
        onChange={handleOnClickSortAlphabetical}
        id="sortByNameCheckboxFilter"
        type="checkbox"
      />
      <SortByNameCheckBoxLabel htmlFor="sortByNameCheckboxFilter" />
    </SortByNameCheckBoxWrapper>
  );
};

export default SortByNameSwitch;
