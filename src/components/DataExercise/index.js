import React from "react";

import productData from "/src/data.js";

// 1. sort products by price
const PriceSort = () => {
  const extractedPriceData = productData.map((product) => {
    return [product.name, product.price.cad];
  });

  const sortedPriceArray = extractedPriceData.sort(
    (higherPrice, lowerPrice) => {
      return higherPrice[1] - lowerPrice[1];
    }
  );

  return <>{console.log(...sortedPriceArray)}</>;
};

export default PriceSort;
// 2. return array of IDs
// 3. return array of objects with { Id, name, sku, inventory, images }
// 3a. return array of obj but rename { Id -> id, name -> displayName, rest is same}
// 4. Same as 3, but only return 1 image { id, name, sku, inventory, IMAGE }
// 5. return array of objects with price, and calculate taxes on it
// 6. CHANGE the tax calculation. If the name of the product starts from A-J use Ontario tax, if J-P use Quebec, P-Z, use Alberta
