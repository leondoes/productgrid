import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template: 500px / 300px 300px 300px;
  grid-column-gap: 50px;
  grid-row-gap: 50px;

  /* media queries, controls under which "screen-width conditions" certain CSS will active
  - Very normal to use it to control 4k vs desktop vs mobile or different column layouts
  - USUALLY never hard-coded numbers, should be defined in theme of the app where all the 
  different supported screen widthes are
   */
  @media (max-width: 1100px) {
    grid-template: 500px / 300px 300px;
  }

  @media (max-width: 600px) {
    grid-template: 500px / 300px;
  }
`;
