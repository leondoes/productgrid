import react, { useState } from "react";

import productData from "/src/data.js";

const ProductCard = () => {
  const region = "Canada";
  const currency = region === "Canada" ? "cad" : "usd";

  const imageUrl = productData[0].images[0];
  const name = productData[0].name;
  const sku = productData[0].Id;
  const price = productData[0].price[currency];
  const inStock = productData[0].inventory > 0 ? "inStock" : "Out Of stock";

  return (
    <>
      <img class="ProductImage" src={imageUrl} alt="scooter" />
      <div>{name}</div>
      <div>{sku}</div>
      <div>${price}</div>
      <div>{inStock}</div>
      <button>addtocart</button>
    </>
  );
};

export default ProductCard;
