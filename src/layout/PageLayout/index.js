import React from "react";
import styled from "styled-components";

import NavBar from "/src/components/NavBar";

const Container = styled.div`
  color: red;
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
