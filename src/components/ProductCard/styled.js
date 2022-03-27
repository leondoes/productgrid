import styled from "styled-components";

export const Price = styled.div`
  font-weight: 600;
  font-size: 24px;
  text-align: left;
  margin-top: 40px;
  margin-left: 20px;
`;

export const Sku = styled.div`
  font-weight: 300;
  font-size: 13px;
  text-align: left;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 18px;
  text-align: left;
  margin-left: 20px;
`;

export const Stock = styled.div`
  font-weight: 400;
  font-size: 10px;
  text-align: left;
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 40px;
`;

export const CartButton = styled.div`
  font-family: Roboto;
  font-weight: 500;
  cursor: pointer;
  color: rgba(0, 97, 35, 255);
  font-size: 20px;
  text-decoration: none;
  background-color: Transparent;
  background-repeat: no-repeat;
  display: inline-block;
  margin-top: 80px;
  &:hover {
    color: rgba(28, 150, 73, 255);
  }
`;

export const ProductImage = styled.div`
  object-fit: cover;
  margin-top: 10px;
  width: 200px;
  height: 150px;
`;
