import productData from "/src/data.js";

const SortByName = () => {
  return console.log(
    productData.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    )
  );
};

export default SortByName;
