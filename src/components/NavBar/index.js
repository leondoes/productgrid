import React from "react";
import { NavbarStyled, StyledLink } from "./styled";

const NavBar = () => (
  <NavbarStyled>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/ProductListPage">Product List Page</StyledLink>
    <StyledLink to="/Wishlist"> Wishlist</StyledLink>
    <StyledLink to="/Flyer"> Flyer</StyledLink>
    <StyledLink to="/cart"> Cart</StyledLink>
  </NavbarStyled>
);

export default NavBar;
