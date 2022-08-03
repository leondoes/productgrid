import React, { useState, useRef, useEffect } from "react";
import { AccountMenuText, AccountButton, MenuContainer } from "./styled";
import { DropdownContainer, Top, Middle, Bottom, StyledLink } from "./styled";
import { MenuLink, TriangleRewards } from "./styled";
import img from "/src/assets/TriangleRewards.webp";

const DropdownMenu = () => {
  const [displayed, setDisplayed] = useState(false);
  const dropdownContainerRef = useRef(null);
  const handleOnClick = () => setDisplayed((prevDisplayed) => !prevDisplayed);
  const HideDropdownMenu = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          handleOnClick();
        }
      };
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  HideDropdownMenu(dropdownContainerRef, handleOnClick);
  return (
    <MenuContainer>
      <AccountButton onClick={handleOnClick}>
        <AccountMenuText>Account</AccountMenuText>
      </AccountButton>

      {displayed && (
        <DropdownContainer ref={dropdownContainerRef}>
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
