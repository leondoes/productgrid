import styled from "styled-components";
import "./styles.css";
import PageLayout from "/src/layout/PageLayout";

const AppContainer = styled.div`
  font-family: Roboto;
  text-align: center;
`;

export default function App() {
  return (
    <AppContainer>
      <PageLayout />
      <div>homepage - welcome to our shop</div>
    </AppContainer>
  );
}
