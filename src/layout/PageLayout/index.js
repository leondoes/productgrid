import React from "react";
import { Container } from "./styled";
import NavBar from "/src/components/NavBar";

const PageLayout = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <NavBar />
      {children}
    </Container>
  );
};

export default PageLayout;
