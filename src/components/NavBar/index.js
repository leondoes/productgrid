import React, { useEffect, useState } from "react";
import { NavbarStyled, StyledLink } from "./styled";

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
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/ProductListPage">Product List Page</StyledLink>
      <StyledLink to="/Wishlist"> Wishlist</StyledLink>
      <StyledLink to="/Flyer"> Flyer</StyledLink>
      <StyledLink to="/cart"> Cart</StyledLink>
    </NavbarStyled>
  );
};

export default NavBar;
