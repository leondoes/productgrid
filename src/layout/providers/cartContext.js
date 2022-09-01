import React from "react";

const addToCart = (cart, product) => {
  const updatedCart = [cart, ...product];
  return updatedCart;
};

/* JSFiddle:

const addToCart = (cart,product) => {
const {id:productkey} = product;

result = cart.map((product) => {
if (cart.productkey !== productkey) {return {productkey, quantity:1}}
})

  const updatedCart = [...cart, result]
  return updatedCart;
  }

const cart = [{productkey:"123", quantity:4},{productkey:"234", quantity:2}]

//[{productkey:"123", quantity:4},{productkey:"234", quantity:2},{productkey: "soup", quantity:1} ]

const product = {id: "fuck", inventory:5, price:10}


console.log(addToCart(cart, product))

*/

const removeFromCart = () => {};

const cartContext = React.createContext({
  cart: [
    { productkey: "123", quantity: 0 },
    { productkey: "234", quantity: 2 }
  ],

  addToCart,

  removeFromCart
});

export default cartContext;
