import React from "react";

const addToCart = (cart, product) => {
  const updatedCart = [cart, ...product];
  return updatedCart;
};

/* JSFiddle:

const addToCart = (cart, product) => {
  const {
    id: productkey
  } = product;

  result = cart.map((product) => {
    if (cart.productkey !== productkey) {
      return {
        productkey,
        quantity: 1
      }
    } else {
      return cart
    }
  })
  return result;
}

const cart = [{
  productkey: "123",
  quantity: 4
}, {
  productkey: "234",
  quantity: 2
}]

//[{productkey:"123", quantity:4},{productkey:"234", quantity:2},{productkey: "soup", quantity:1} ]

const product = {
  id: "fuck",
  inventory: 5,
  price: 10
}


console.log(addToCart(cart, product))

<!--1.[ 1, 4, 9, 16, 25]
      const input = [ 1, 2, 3, 4, 5 ];
      console.log(input.map(x => Math.pow(x, 2)))
      
    2.const input = [ 1, -4, 12, 0, -3, 29, -150];
      console.log(input.filter(x => x > 0).reduce((sum, val) => (sum + val),0))
    
    3.const input = [12, 46, 32, 64]
      const input = [12, 46, 32, 64];

const meanAndMedian = (input) => {
  const mean = input.reduce((sum, val) => (sum + val)) / input.length;
  const mid = Math.floor(input.length / 2)
  const sorted = input.sort((a, b) => (a - b));

  const median = (sorted) => {
    if (sorted % 2 !== 0) {
      const middle = sorted[mid] + sorted[mid -1];
      return middle/2
    } else {
      return sorted[Math.floor(input.length / 2)];
    }
  }
console.log(`{mean: ${mean}, median: ${median(sorted)}`)
};

meanAndMedian(input);

4.const input = 'George Raymond Richard Martin';
const input = 'George Raymond Richard Martin';
const intoArray = input.split(" ");
const firstLetter = intoArray.map(x => {
  return x[0]
});
console.log(firstLetter.join(''))


<!--  5. [13, 67, 54] 
    const input = [{
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];

  const ageDiff = (arr) => {
    const ages = []

    agesArray = arr.map(x => {
      return x.age;
    })

    const youngest = Math.min(...agesArray);
    const oldest = Math.max(...agesArray);
    ages.push(youngest, oldest, oldest - youngest)

    console.log(ages);
  }



  ageDiff(input);

  5.const input = 'Every developer likes to mix kubernetes and javascript';

const shortenedWords = (sentence) => {
  let arr = sentence.split(" ")
  let result = []
  arr.map(word => {
    if (word.length > 4) {
      result.push(`${word[0]}${word.length-2}${word[word.length-1]}`)
    } else {
      result.push(word)
    }
  });

  console.log(result.join(" "));
}

shortenedWords(input);

.6 const input = 6; output =  720 

const input = 6;

const factorial = (input) => {

const expandedArray = Array(input).fill().map((num, i) => i+1);

const factorializedArray = expandedArray.reduce((prev, cur) => prev*cur)

return factorializedArray;

}


console.log(factorial(input));

.7  const input = [
   ['a', 'b', 'c'],
   ['c', 'd', 'f'],
   ['d', 'f', 'g'],
 ];

const elementCounter = (input) => {

const flattenedArray = input.flat()

const counter = flattenedArray.reduce((obj, i)=> {
  obj[i] = ++obj[i] || 1;
  return obj;
}, {})
return counter
};

console.log(elementCounter(input))




-->



*/

const cartContext = React.createContext({});

export default cartContext;
