import React, { useState } from "react";
import {
  AccountMenuText,
  AccountButton,
  MenuContainer,
  DropdownContainer,
  Top,
  Middle,
  Bottom,
  StyledLink,
  MenuLink,
  TriangleRewards
} from "./styled";
import img from "/src/assets/TriangleRewards.webp";

const DropdownMenu = () => {
  const [displayed, setDisplayed] = useState(false);
  const handleOnClick = () => setDisplayed((prevDisplayed) => !prevDisplayed);

  return (
    <MenuContainer>
      <AccountButton onClick={handleOnClick}>
        <AccountMenuText>Account</AccountMenuText>
      </AccountButton>

      {displayed && (
        <DropdownContainer>
          <Top>
            <StyledLink to="/">Sign in</StyledLink> or{" "}
            <StyledLink to="/">Register</StyledLink>
          </Top>
          <Middle>
            <TriangleRewards src={img} alt="Triangle Rewards logo" />
            Triangle Rewards™
            <p>
              The rewards program that lets you collect Canadian Tire Money®
              fast at the stores you love.{" "}
              <StyledLink to="">Register Now.</StyledLink>
            </p>
          </Middle>
          <Bottom>
            <MenuLink to="/">Payment Information</MenuLink>
            <MenuLink to="/">Rewards</MenuLink>
            <MenuLink to="/">Preferences</MenuLink>
            <MenuLink to="/">Order History</MenuLink>
            <MenuLink to="/">Personal Information</MenuLink>
            <MenuLink to="/">Addresses</MenuLink>
          </Bottom>
        </DropdownContainer>
      )}
    </MenuContainer>
  );
};

export default DropdownMenu;
