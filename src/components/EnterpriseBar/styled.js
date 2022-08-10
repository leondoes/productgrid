import styled from "styled-components";

export const BarContainer = styled.div`
  display: flex;
  background-color: #313131;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
`;

export const CanadasStoreImg = styled.img`
  margin-right: 10px;
`;

export const BarText = styled.div`
  color: #fff;
  text-align: left;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0;
  font-family: "Lato", sans-serif;
  margin: 0px 5px;
`;

export const LeftSideBar = styled.div`
  display: flex;
  flex-grow: 1;
`;
export const RightSideBar = styled.div`
  display: flex;
  text-align: right;
  margin-right: 10px;
`;

export const BarDivider = styled.div`
  width: 0.0625rem;
  height: 1rem;
  background: #525252 0 0 no-repeat padding-box;
  margin: 0 8px;
`;
