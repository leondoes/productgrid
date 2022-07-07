import styled from "styled-components";

export const BarText = styled.div`
  color: #fff;
  text-align: left;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0;
  font-family: "Lato", sans-serif;
  margin: 0px 5px;
`;

export const AccountButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;
export const DropdownContainer = styled.div`
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;
