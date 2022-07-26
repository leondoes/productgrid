import React from "react";
import {
  PageContainer,
  ContentContainer,
  ColorDiv,
  ColorDivEnd
} from "./styled";
import NavBar from "/src/components/NavBar";
import EnterpriseBar from "/src/components/EnterpriseBar";

const PageLayout = ({ children, ...props }) => {
  return (
    <PageContainer {...props}>
      <ColorDiv />
      <ColorDivEnd />
      <EnterpriseBar />
      <NavBar />
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  );
};

export default PageLayout;
