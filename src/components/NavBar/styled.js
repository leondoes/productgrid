import styled from "styled-components";
import { Link } from "react-router-dom";

// in px
export const navBarHeight = 120; // default bar height

export const StyledLogo = styled.div`
  height: auto;
  width: 62px;
`;

export const NavbarStyled = styled.div`
  position: fixed;
  z-index: 1;
  background: #262626;
  border-bottom: 1px solid #f7dadc;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: ${navBarHeight - 1 + "px"}; /* subtract 1 for border*/
  transition: height 0.4s ease 0s;
`;

export const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
