import React, { useEffect, useState } from "react";
import {
  NavbarStyled,
  StyledLink,
  StyledLogo,
  LogoSearchContainer,
  NavBarColumn,
  LinkSpacing
} from "./styled";
import SearchBar from "/src/components/Search";

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
    <NavbarStyled style={{ height: collapsed ? "49px" : "119px" }}>
      <NavBarColumn>
        <LogoSearchContainer>
          <StyledLink to="/">
            <StyledLogo>
              <img
                src={
                  "https://media-www.canadiantire.ca/logo/ct-brandmark-standard-primary-rgw-pos-hex-5f6ce5ad-aadc-44da-9d55-a06d4c6273bb.svg"
                }
                alt="Logo"
              />
            </StyledLogo>
          </StyledLink>
          <SearchBar></SearchBar>
        </LogoSearchContainer>
        <LinkSpacing>
          <StyledLink to="/ProductListPage">Product List Page</StyledLink>
          <StyledLink to="/Wishlist"> Wishlist</StyledLink>
          <StyledLink to="/Flyer"> Flyer</StyledLink>
          <StyledLink to="/cart"> Cart</StyledLink>
        </LinkSpacing>
      </NavBarColumn>
    </NavbarStyled>
  );
};

export default NavBar;
