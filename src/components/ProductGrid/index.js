import React from "react";
import ProductCard from "/src/components/ProductCard";
import { GridContainer } from "./styled";

import productData from "/src/data.js";

const ProductGrid = () => {
  return (
    /* REACT COMPONENTS must return a single component at top-level. 
      - Parent component with children
      - Can't return brothers/sisters with no parent
      <div>
      <div>
      - You can use "fragments" <> </> if you dont need a style and it reduces nesting in DOM structure
      - USUALLY, parent components are "wrappers" or "containers" with styles for the entire comp
      */
    <GridContainer>
      {productData.map((product) => (
        <ProductCard key={`card-${product.Id}`} productDetails={product} />
      ))}
    </GridContainer>
  );
};

export default ProductGrid;
