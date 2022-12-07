import styled from "styled-components";
import { navBarHeight } from "/src/components/NavBar/styled";

export const PageContainer = styled.div`
  font-family: Roboto;
  text-align: center;
  display: grid;
  grid-template-columns:
    1fr
    min(145ch, 100%)
    1fr;
  > * {
    grid-column: 2;
  }
  /* Colouring of LEFT side of enterprise bar */
  &:before {
    content: "";
    background-color: #313131;
    grid-row: 1;
    grid-column: 1;
  }
  /* Colouring of RIGHT side of enterprise bar */
  &:after {
    content: "";
    background-color: #313131;
    grid-row: 1;
    grid-column: 3;
    z-index: 2;
  }
`;
export const LeftNavBarGrid = styled.div`
  background: #262626;
  grid-row: 2;
  grid-column: 1;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #f7dadc;
`;
export const RightNavBarGrid = styled.div`
  background: #262626;
  grid-row: 2;
  grid-column: 3;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #f7dadc;
  z-index: 2;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;
