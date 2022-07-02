import React from "react";
import { PageContainer, ContentContainer } from "./styled";
import NavBar from "/src/components/NavBar";
import EnterpriseBar from "/src/components/EnterpriseBar";

const PageLayout = ({ children, ...props }) => {
  return (
    <PageContainer {...props}>
      <EnterpriseBar />
      <NavBar />
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  );
};

export default PageLayout;
