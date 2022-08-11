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
  /*Why is there a function "() => images[1]" in the setState()? and not just setState(images[1])?

  Due to "execution stack". The order of the state update can be misordered if this isn't used. Due to the async nature of javascript
  without a proper function stack, JS will try and execute the functions asap (async) and you cannot gurantee the order is correct or optamized.
  By putting it into a function, JS will create a "call stack" that gurantees order and optamization.

*/
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
      <CartButton onClick={addToCartOnClick}>ADD TO CART</CartButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
