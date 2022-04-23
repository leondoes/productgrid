import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarStyled = styled.div`
  position: fixed;
  background: white;
  border-bottom: 1px solid #f7dadc;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 49px;
`;

export const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
