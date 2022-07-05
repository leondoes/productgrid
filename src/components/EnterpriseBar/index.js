import React from "react";
import { StyledBar, StyledImg, StyledText, StyledDivider } from "./styled";
import img from "/src/assets/PencilBanner.webp";

const EnterpriseBar = () => (
  <StyledBar>
    <StyledImg src={img} alt="Pencil Banner" />
    <StyledText>Made for life in Canada</StyledText>
    <StyledDivider />
    <StyledText>Credit offered*</StyledText>
  </StyledBar>
);

export default EnterpriseBar;
