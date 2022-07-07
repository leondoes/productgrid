import React, { useState } from "react";
import {
  BarText,
  AccountButton,
  MenuContainer,
  DropdownContainer
} from "./styled";

const DropdownMenu = () => {
  const [displayed, setDisplayed] = useState(false);
  const onClick = () => setDisplayed((menuActive) => !menuActive);

  let accountMenu;
  if (displayed) {
    accountMenu = (
      <DropdownContainer>
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
        <div>Option 4</div>
      </DropdownContainer>
    );
  }

  return (
    <MenuContainer>
      <AccountButton onClick={onClick}>
        <BarText>Account</BarText>
      </AccountButton>

      {accountMenu}
    </MenuContainer>
  );
};

export default DropdownMenu;
