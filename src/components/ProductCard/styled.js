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
  margin-top: 40px;
`;

export const Stock = styled.div`
  font-weight: 400;
  font-size: 12px;
  text-align: left;
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 40px;
`;

export const CartButton = styled.button`
  font-family: Roboto;
  font-weight: 500;
  cursor: pointer;
  color: rgba(0, 97, 35, 255);
  font-size: 20px;
  text-decoration: none;
  background-color: Transparent;
  background-repeat: no-repeat;
  display: inline-block;
  margin-top: 45px;
  margin-left: 20px;
  border: 0;
  &:hover {
    color: rgba(28, 150, 73, 255);
  }
`;

export const ProductImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  object-fit: cover;
  margin-top: 10px;
  width: 200px;
  height: 150px;
`;

export const ProductCardContainer = styled.div`
  box-shadow: 0 4px 9px -4px rgb(0 0 0 / 0.2);
  height: 500px;
  width: 300px;
  &:hover {
    border: 1px solid rgba(121, 129, 120, 0.4);
    margin: -1px;
  }
`;
