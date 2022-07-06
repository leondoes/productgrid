import React, { useEffect, useState } from "react";
import { NavbarStyled, LogoSearchContainer } from "./styled";
import SearchBar from "/src/components/Search";
import HomePageLogo from "/src/components/HomePageLogo";
import NavBarLinks from "/src/components/NavBarLinks";

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
        <SearchBar />
      </LogoSearchContainer>
      <NavBarLinks
        customProp="hello"
        style={{ display: collapsed ? "none" : "flex" }}
      />
    </NavbarStyled>
  );
};

export default NavBar;
