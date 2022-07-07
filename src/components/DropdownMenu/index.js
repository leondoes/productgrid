import React, { useState } from "react";
import {
  BarText,
  AccountButton,
  MenuContainer,
  DropdownContainer
} from "./styled";

const DropdownMenu = () => {
  const [displayed, setDisplayed] = useState(false);
  const handleOnClick = () => setDisplayed((prevDisplayed) => !prevDisplayed);

  return (
    <MenuContainer>
      <AccountButton onClick={handleOnClick}>
        <BarText>Account</BarText>
      </AccountButton>

      {displayed && (
        <DropdownContainer>
          <div>Option 1</div>
          <div>Option 2</div>
          <div>Option 3</div>
          <div>Option 4</div>
        </DropdownContainer>
      )}
    </MenuContainer>
  );
};

export default DropdownMenu;
