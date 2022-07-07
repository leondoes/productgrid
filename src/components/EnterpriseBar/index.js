import React from "react";
import {
  BarContainer,
  CanadasStoreImg,
  BarText,
  BarDivider,
  LeftSideBar,
  RightSideBar
} from "./styled";
import img from "/src/assets/PencilBanner.webp";
import DropdownMenu from "/src/components/DropdownMenu";

const EnterpriseBar = () => (
  <BarContainer>
    <CanadasStoreImg src={img} alt="Pencil Banner" />
    <LeftSideBar>
      <BarText>Made for life in Canada</BarText>
      <BarDivider />
      <BarText>Credit offered*</BarText>
    </LeftSideBar>
    <RightSideBar>
      <BarText>
        <DropdownMenu />
      </BarText>
      <BarText>Support</BarText>
      <BarDivider />
      <BarText>FR</BarText>
    </RightSideBar>
  </BarContainer>
);

export default EnterpriseBar;
