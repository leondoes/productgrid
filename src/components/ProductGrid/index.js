import react, { useState } from "react";
import ProductCard from "/src/components/ProductCard";

import productData from "/src/data.js";

const ProductGrid = () => {
  return (
    <div class="gridContainer">
      {productData.map((product) => (
        <ProductCard ass="ass" productDetails={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
