import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarStyle = styled.div`
  position: fixed;
  background: white;
  border-bottom: 1px solid #f7dadc;
  display: flex;
  justify-content: space-evenly;
  padding: 0.7rem 2rem;
  overflow: hidden;
  z-index: 1;
  width: 100%;

  top: 0;
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
