//JDoc is used to explain what the code does and uses @param to describe specific parameters of the code

/**  this function sorts an array alphabetically given a key
 *   @param {Array} inputArray Array the array to be sorted (will not be mutated)
 *   @param {String} sortByKey String the key to sort by
 *
 *   @returns a new array sorted
 */
export const sortArrayAlphabetical = (inputArray, sortByKey) => {
  //Check to see if input is an array and if the length of the array > 0,
  //if either of this is true it will throw an error and exit early
  if (!Array.isArray(inputArray) || !inputArray.length) {
    return new Error("did not supply array or array has length 0");
  }

  //Uses built-in JS feature "typeof" to make sure the sorted key is a string and exits early if it isn't
  if (typeof sortByKey !== "string") {
    return new Error("did not specify a key");
  }

  //Creates a shallow copy of the array so that the original isn't mutated by this function
  const copyArray = [...inputArray];

  //Sorts the array alphbetirally by key provided
  //localeCompare is used in case of uncommon letters (like accents) and converts them to "regular" letters before sorting
  const sortedArray = copyArray.sort((a, b) =>
    a[sortByKey].localeCompare(b[sortByKey])
  );

  return sortedArray;
};
