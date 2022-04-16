import React, { useState } from "react";
import {
  Price,
  Sku,
  Title,
  Stock,
  CartButton,
  ProductImage,
  ProductCardContainer
} from "./styled";

const ProductCard = ({ productDetails }) => {
  const {
    images,
    name,
    Id: sku,
    price: priceObject,
    inventory
  } = productDetails;

  const region = "Canada";
  const currency = region === "Canada" ? "cad" : "usd";

  const imageUrl = images[0];

  const [currentImage, setCurrentImage] = useState(imageUrl);

  const price = priceObject[currency];
  const inStock = inventory > 0 ? "✅ In-stock" : "❌ not available in store";

  const addToCartOnClick = () => alert(`hi, this ${name} and I cost $${price}`);

  const changeImageOnMouseEnter = () => setCurrentImage(() => images[1]);
  const changeImageOnMouseLeave = () => setCurrentImage(() => images[0]);

  return (
    <ProductCardContainer
      onMouseEnter={changeImageOnMouseEnter}
      onMouseLeave={changeImageOnMouseLeave}
    >
      <ProductImage src={currentImage} alt="scooter" />
      <Title>{name}</Title>
      <Sku>#{sku}</Sku>
      <Price>${price}</Price>
      <Stock>{inStock}</Stock>
      <CartButton onClick={addToCartOnClick}>
        <span role="img" aria-label="add to cart" alt="cart">
          🛒
        </span>{" "}
        ADD TO CART
      </CartButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
