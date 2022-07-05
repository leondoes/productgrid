import { css } from "styled-components";

export const commonlink = css`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const supportedResolutions = {
  xsMobile: "500px",
  mobile: "380px",
  desktop: "1080px",
  hdDesktop: "1440px",
  fourk: "4000px"
};

// get from canadian tire site and pass to layout components
// with media queries
export const layoutGutters = css`
  //padding: calc(100vw - 100px)

  @media screen ({supportedresolutions.xsmobile}) {
  }
`;
