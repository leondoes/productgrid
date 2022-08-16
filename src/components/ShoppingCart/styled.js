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
  z-index: 4;
  background: #fff 0 0 no-repeat padding-box;
  box-shadow: 0 8px 24px rgb(38 38 38 / 10%);
  border-radius: 2px;
  font-family: "Lato", sans-serif;
  position: fixed;
  right: 0;
  z-index: 3;
  height: 100%;
  width: 400px;
`;

export const OverlayShadow = styled.div`
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.3;
`;
