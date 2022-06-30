import React from "react";
import { StyledLink, StyledLogo } from "./styled";
import CanadianTirelogo from "/src/assets/logo";

const HomePageLogo = () => (
  <StyledLink to="/">
    <StyledLogo>
      <CanadianTirelogo />
    </StyledLogo>
  </StyledLink>
);

export default HomePageLogo;
