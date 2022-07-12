import React from "react";
import { LinkContainer, StyledLink } from "./styled";
import SortByName from "/src/components/SortByName";

// 1. style prop was not propagated to it's container, so the "Style" was "eaten" up and doing nothing.
// 2. the ({style}) notation is a shorthand of extracting keys from the props object which contains all props of components
const NavBarLinks = ({ style }) => (
  <LinkContainer style={style}>
    <StyledLink to="/ProductListPage">Product List Page</StyledLink>
    <StyledLink to="/Wishlist"> Wishlist</StyledLink>
    <StyledLink to="/Flyer"> Flyer</StyledLink>
    <StyledLink to="/cart"> Cart</StyledLink>
    <button onClick={SortByName}>SortByName</button>
  </LinkContainer>
);

export default NavBarLinks;
