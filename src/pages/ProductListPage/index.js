import React, { useState, useEffect } from "react";
import PageLayout from "/src/layout/PageLayout";
import ProductGrid from "/src/components/ProductGrid";
import { ListPageContainer } from "./styled";
import FilterSwitch from "/src/components/FilterSwitch";

import productData from "/src/data.js";

const ProductListPage = () => {
  const [inStockSwitchActive, setInStockSwitchActive] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleOnClickFilterInStock = () => {
    setInStockSwitchActive(() => !inStockSwitchActive);
  };

  useEffect(() => {
    let filteredProductData;
    if (inStockSwitchActive) {
      filteredProductData = productData.filter(
        (product) => product.inventory > 0
      );
    } else {
      filteredProductData = productData;
    }
    setFilteredProducts(filteredProductData);
  }, [inStockSwitchActive]);

  return (
    <PageLayout>
      <ListPageContainer>
        <FilterSwitch
          handleOnClickFilterInStock={handleOnClickFilterInStock}
          inStockSwitchActive={inStockSwitchActive}
        />
        <ProductGrid products={filteredProducts} />
      </ListPageContainer>
    </PageLayout>
  );
};

export default ProductListPage;
