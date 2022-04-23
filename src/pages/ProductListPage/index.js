import React, { useState, useEffect } from "react";
import PageLayout from "/src/layout/PageLayout";
import ProductGrid from "/src/components/ProductGrid";
import FilterButtons from "/src/components/FilterButtons";
import { ListPageContainer } from "./styled";

import productData from "/src/data.js";

const ProductListPage = () => {
  const [inStockSwitch, setInStockSwitch] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleOnClickFilterInStock = () => {
    setInStockSwitch(() => !inStockSwitch);
  };

  useEffect(() => {
    let filteredProductData;
    if (inStockSwitch) {
      filteredProductData = productData.filter(
        (product) => product.inventory > 0
      );
    } else {
      filteredProductData = productData;
    }
    setFilteredProducts(filteredProductData);
  }, [inStockSwitch]);

  return (
    <PageLayout>
      <ListPageContainer>
        <FilterButtons
          handleOnClickFilterInStock={handleOnClickFilterInStock}
          inStockSwitch={inStockSwitch}
        />
        <ProductGrid products={filteredProducts} />
      </ListPageContainer>
    </PageLayout>
  );
};

export default ProductListPage;
