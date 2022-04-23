import styled from "styled-components";
import { navBarHeight } from "/src/components/NavBar/styled";

export const PageContainer = styled.div`
  font-family: Roboto;
  text-align: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${navBarHeight + "px"}; /* take into account navbar height */
`;
