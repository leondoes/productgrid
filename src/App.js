import styled from "styled-components";
import "./styles.css";

import ProductGrid from "/src/components/ProductGrid";

const AppContainer = styled.div`
  font-family: Roboto;
  text-align: center;
`;

export default function App() {
  return (
    <AppContainer>
      <ProductGrid />
    </AppContainer>
  );
}
