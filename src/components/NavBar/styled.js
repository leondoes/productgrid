import styled from "styled-components";

// in px
export const navBarHeight = 102; // default bar height

export const NavbarStyled = styled.div`
  position: sticky;
  top: 0;
  flex-direction: column;
  z-index: 1;
  background: #262626;
  border-bottom: 1px solid #f7dadc;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: ${navBarHeight - 1 + "px"}; /* subtract 1 for border*/
  transition: height 0.4s ease 0s;
`;

export const LogoSearchContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
