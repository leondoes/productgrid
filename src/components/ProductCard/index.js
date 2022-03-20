import react, { useState } from "react";
import { Price, Sku } from "./styled";

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
  const inStock = inventory > 0 ? "✅In-stock" : "❌not available in store";

  const addToCartOnClick = () => alert(`hi, this ${name} and I cost $${price}`);

  const changeImageOnMouseEnter = () => setCurrentImage(() => images[1]);
  const changeImageOnMouseLeave = () => setCurrentImage(() => images[0]);

  return (
    <div
      class="prod1"
      onMouseEnter={changeImageOnMouseEnter}
      onMouseLeave={changeImageOnMouseLeave}
    >
      <img class="ProductImage" src={currentImage} alt="scooter" />
      <div class="titleStyle">{name}</div>
      <Sku>#{sku}</Sku>
      <Price>${price}</Price>
      <div class="stockStyle">{inStock}</div>
      <button onClick={addToCartOnClick}>addtocart</button>
    </div>
  );
};

export default ProductCard;
