import styled, { createGlobalStyle } from "styled-components";

import ProductGrid from "/src/components/ProductGrid";

import RobotoWoff2 from "/public/fonts/roboto-v29-latin-regular.woff2";
import RobotoWoff from "/public/fonts/roboto-v29-latin-regular.woff";

const GlobalFonts = createGlobalStyle`
@font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url(${RobotoWoff2}) format('woff2'),
        url(${RobotoWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;

const AppContainer = styled.div`
  font-family: Roboto;
  text-align: center;
`;

export default function App() {
  return (
    <div>
      <GlobalFonts />
      <AppContainer>
        <ProductGrid />
      </AppContainer>
    </div>
  );
}
