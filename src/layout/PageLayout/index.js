import React from "react";
import {
  PageContainer,
  ContentContainer,
  LeftNavBarGrid,
  RightNavBarGrid
} from "./styled";
import NavBar from "/src/components/NavBar";
import EnterpriseBar from "/src/components/EnterpriseBar";

const PageLayout = ({ children, ...props }) => {
  return (
    <PageContainer {...props}>
      <EnterpriseBar />
      <LeftNavBarGrid />
      <NavBar />
      <RightNavBarGrid />
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  );
};

export default PageLayout;
