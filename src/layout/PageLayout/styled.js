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
  &:before {
    content: "";
    background-color: #313131;
    grid-row: 1;
    grid-column: 1;
  }
  &:after {
    content: "";
    background-color: #313131;
    grid-row: 1;
    grid-column: 3;
  }
`;
export const ColorDiv = styled.div`
  background: #262626;
  grid-row: 2;
  grid-column: 1;
`;
export const ColorDivEnd = styled.div`
  background: #262626;
  grid-row: 2;
  grid-column: 3;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${navBarHeight + "px"}; /* take into account navbar height */
`;
