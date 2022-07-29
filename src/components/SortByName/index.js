import productData from "/src/data.js";
import { sortArrayAlphabetical } from "/src/common/helpers/sort";

const SortByName = () => {
  return console.log(sortArrayAlphabetical(productData, "name"));
};

export default SortByName;
