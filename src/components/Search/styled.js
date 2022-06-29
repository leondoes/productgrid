import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  background: #fff;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  width: 70%;
  height: 3.5rem;
  *:focus {
    outline: none;
  }
`;

export const SearchBarInput = styled.input`
  height: 100%;
  border: 0;
  padding: 0;
  flex-grow: 100;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  font-family: "Lato", sans-serif;
  margin-top: 0;
`;

export const MagGlassButton = styled.button`
  background-color: #fff;
  border: 0px;
  cursor: pointer;
`;

export const ExitSearchButton = styled.button`
  background-color: #fff;
  border: 0px;
  cursor: pointer;
`;
