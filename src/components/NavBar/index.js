import React from "react";
import { Link } from "react-router-dom";
import { NavbarStyle, StyledLink } from "./styled";

const NavBar = () => (
  <NavbarStyle>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/ProductListPage">Product List Page</StyledLink>
    <StyledLink to="/Wishlist"> Wishlist</StyledLink>
    <StyledLink to="/Flyer"> Flyer</StyledLink>
    <StyledLink to="/cart"> Cart</StyledLink>
  </NavbarStyle>
);

export default NavBar;
