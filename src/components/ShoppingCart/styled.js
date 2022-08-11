import styled from "styled-components";

export const CartButton = styled.button`
  transform: rotate(-90deg);
  line-height: 5px;
  position: fixed;
  top: 50%;
  right: 0;
  height: 30px;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  cursor: pointer;
  color: white;
  border: 3px;
  border-color: white;
  text-decoration: none;
  background-color: black;
  display: inline-block;
  &:hover {
    transition: 0.3s;
    background: #4c4d4f;
  }
`;

export const ActiveCart = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  z-index: 0;
  height: 100%;
  width: 50%;
  background-color: #555;
`;
