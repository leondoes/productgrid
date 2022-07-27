import React, { useEffect, useState } from "react";
import {
  NavbarStyled,
  LogoSearchContainer,
  ClosestStore,
  RightIcon
} from "./styled";
import SearchBar from "/src/components/Search";
import HomePageLogo from "/src/components/HomePageLogo";
import NavBarLinks from "/src/components/NavBarLinks";
import { withTheme } from "styled-components";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const navBarListener = () => {
      if (window.scrollY > 100) {
        setCollapsed(() => true);
      } else {
        setCollapsed(() => false);
      }
    };

    document.addEventListener("scroll", navBarListener);

    return () => window.removeEventListener("scroll", navBarListener);
  }, []);

  return (
    <NavbarStyled style={{ height: collapsed ? "80px" : "102px" }}>
      <LogoSearchContainer>
        <HomePageLogo />
        <ClosestStore>
          <div>
            Sheppard Ave., ON <div>Closed⋅ Opens at 8:00 a.m.</div>
          </div>
        </ClosestStore>
        <SearchBar />
        <RightIcon>♡</RightIcon>
        <RightIcon>
          <span role="img" aria-label="cart">
            🛒
          </span>
        </RightIcon>
      </LogoSearchContainer>
      <NavBarLinks
        customProp="hello"
        style={{ display: collapsed ? "none" : "flex" }}
      />
    </NavbarStyled>
  );
};

export default NavBar;
