import react, { useState } from "react";
import ProductCard from "/src/components/ProductCard";

const ProductGrid = () => {
  return (
    <div class="gridContainer">
      <ProductCard />

      <div class="prod2"></div>
      <div class="prod3"></div>
      <div class="prod3"></div>
      <div class="prod1"></div>
      <div class="prod2"></div>
    </div>
  );
};

export default ProductGrid;
