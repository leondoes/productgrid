import styled from "styled-components";
import { Link } from "react-router-dom";

export const AccountMenuText = styled.div`
  color: #fff;
  text-align: left;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0;
  font-family: "Lato", sans-serif;
  margin: 0px 5px;

  &:hover {
    text-decoration: underline;
  }
`;

export const AccountButton = styled.button`
  background: none;
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
  display: block;
  top: 40px;
  left: inherit;
  z-index: 4;
  width: 13.75rem;
  background: #fff 0 0 no-repeat padding-box;
  box-shadow: 0 8px 24px rgb(38 38 38 / 10%);
  border-radius: 2px;
  height: inherit;
  align-items: center;
  text-align: left;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0;
  font-family: "Lato", sans-serif;
`;

export const Top = styled.div`
  text-align: left;
  font-size: 14px;
  height: 1.0625rem;
  line-height: 16px;
  letter-spacing: 0;
  color: #737373;
  border-bottom: 1px solid #d4d4d4;
  padding: 24px;
`;

export const Middle = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Lato-Bold", sans-serif;
  color: #262626;
  padding: 24px 24px 32px;
  border-bottom: 1px solid #d4d4d4;

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: left;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin: 0;
  text-align: left;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0;
`;

export const StyledLink = styled(Link)`
  text-align: left;
  text-decoration: underline;
  height: 1.0625rem;
  line-height: 16px;
  letter-spacing: 0;
  color: #262626;
  background: 0;
  border: 0;
  padding: 0 0 1px 0;
  cursor: pointer;
`;

export const TriangleRewards = styled.img`
  margin-right: 5px;
  width: 1rem;
  height: 1rem;
  margin-right: 8px;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  letter-spacing: 0;
  color: #262626;
  margin-bottom: 24px;
  text-transform: capitalize;
  background: 0;
  border: 0;
  padding: 0 0 1px 0;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;
