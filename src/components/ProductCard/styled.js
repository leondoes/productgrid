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
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  cursor: pointer;
  color: white;
  border: none;
  text-decoration: none;
  background-color: black;
  display: inline-block;
  margin-top: 30px;
  margin-left: 20px;
  padding: 5% 25% 5% 25%;
  &:hover {
    transition: 0.3s;
    background: #4c4d4f;
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
