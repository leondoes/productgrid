import React from "react";
import { LinkContainer, StyledLink } from "./styled";

const NavBarLinks = () => (
  <LinkContainer>
    <StyledLink to="/ProductListPage">Product List Page</StyledLink>
    <StyledLink to="/Wishlist"> Wishlist</StyledLink>
    <StyledLink to="/Flyer"> Flyer</StyledLink>
    <StyledLink to="/cart"> Cart</StyledLink>
  </LinkContainer>
);

export default NavBarLinks;
