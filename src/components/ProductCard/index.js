import react, { useState } from "react";

import productData from "/src/data.js";

const ProductCard = () => {
  const region = "Canada";
  const currency = region === "Canada" ? "cad" : "usd";

  const imageUrl = productData[0].images[0];

  const [currentImage, setCurrentImage] = useState(imageUrl);

  const name = productData[0].name;
  const sku = productData[0].Id;
  const price = productData[0].price[currency];
  const inStock =
    productData[0].inventory > 0 ? "✅In-stock" : "❌not available in store";

  const addToCartOnClick = () => alert(`hi, this ${name} and I cost $${price}`);

  const changeImageOnMouseEnter = () =>
    setCurrentImage(() => productData[0].images[1]);
  const changeImageOnMouseLeave = () =>
    setCurrentImage(() => productData[0].images[0]);

  return (
    <div
      class="prod1"
      onMouseEnter={changeImageOnMouseEnter}
      onMouseLeave={changeImageOnMouseLeave}
    >
      <img class="ProductImage" src={currentImage} alt="scooter" />
      <div class="titleStyle">{name}</div>
      <div class="skuStyle">#{sku}</div>
      <div class="priceStyle">${price}</div>
      <div class="stockStyle">{inStock}</div>
      <button onClick={addToCartOnClick}>addtocart</button>
    </div>
  );
};

export default ProductCard;
