import styled from "styled-components";

// in px
export const navBarHeight = 120; // default bar height

export const NavbarStyled = styled.div`
  position: fixed;
  flex-wrap: wrap;
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

export const LogoSearchContainer = styled.div`
  display: flex;
`;

export const NavBarColumn = styled.div`
  flex: 1;
`;
