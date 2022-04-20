import React from "react";
import styled from "styled-components";
import NavBar from "/src/components/NavBar";

const Container = styled.div`
  font-family: Roboto;
  text-align: center;
`;

const PageLayout = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <NavBar />
      {children}
    </Container>
  );
};

export default PageLayout;
