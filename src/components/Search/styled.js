import styled, { css } from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  height: 3.5rem;
  *:focus {
    outline: none;
  }
`;

export const SearchBarInput = styled.input`
  height: 100%;
  border: 0;
  padding: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  font-family: "Lato", sans-serif;
  margin-top: 0;
`;

const commonButton = css`
  background-color: #fff;
  border: 0px;
  cursor: pointer;
`;

export const SearchIcon = styled.button`
  ${commonButton}
`;

export const ExitSearch = styled.button`
  ${commonButton}
`;

export const ClearAll = styled.button`
  ${commonButton}
  text-decoration: underline;
`;
