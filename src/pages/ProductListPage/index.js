import React, { useState, useEffect } from "react";
import PageLayout from "/src/layout/PageLayout";
import ProductGrid from "/src/components/ProductGrid";
import { ListPageContainer, Filters, FilterLabel } from "./styled";
import StockFilterSwitch from "/src/components/StockFilterSwitch";
import SortByNameSwitch from "/src/components/SortByNameSwitch";
import { sortArrayAlphabetical } from "/src/common/helpers/sort";

import productData from "/src/data.js";

const ProductListPage = () => {
  const [inStockSwitchActive, setInStockSwitchActive] = useState(false);
  const [alphbeticalSortActive, setAlphbeticalSortActive] = useState(false);
  const [mutatedProductData, setMutatedProductData] = useState([]);
  const [rawProductData, setRawProductData] = useState([]);

  const handleOnChangeFilterInStock = () => {
    setInStockSwitchActive(() => !inStockSwitchActive);
  };

  const handleOnClickSortAlphabetical = () => {
    setAlphbeticalSortActive(() => !alphbeticalSortActive);
  };

  useEffect(() => {
    // "fetching" data from server
    setRawProductData(() => productData);

    // Creates a locally stored product data array
    let localMutatedData = [...rawProductData];

    // Checks if in stock switch is activated and filters array
    if (inStockSwitchActive) {
      localMutatedData = localMutatedData.filter(
        (product) => product.inventory > 0
      );
    }
    //checks if alphabetically sorting data is activated and sorts on the mutated array
    if (alphbeticalSortActive) {
      localMutatedData = sortArrayAlphabetical(localMutatedData, "name");
    }
    setMutatedProductData(() => localMutatedData);
  }, [inStockSwitchActive, alphbeticalSortActive, rawProductData]);

  return (
    <PageLayout>
      <ListPageContainer>
        <Filters>
          <StockFilterSwitch
            handleOnChangeFilterInStock={handleOnChangeFilterInStock}
            inStockSwitchActive={inStockSwitchActive}
          />
          <FilterLabel>In-Stock at my store</FilterLabel>
          <SortByNameSwitch
            handleOnClickSortAlphabetical={handleOnClickSortAlphabetical}
            alphbeticalSortActive={alphbeticalSortActive}
          />
          <FilterLabel>Sort A-Z</FilterLabel>
        </Filters>
        <ProductGrid products={mutatedProductData} />
      </ListPageContainer>
    </PageLayout>
  );
};

export default ProductListPage;
