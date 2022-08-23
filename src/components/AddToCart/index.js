import React, { useState, useEffect } from "react";

const AddToCart = (el) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const cartItems = cart.map((el) => (
    <div key={el.id}>{`${el.name}: $${el.price}`}</div>
  ));

  return (
    <div>
      <div>{cartItems}</div>
      <div>Total: ${cartTotal}</div>
    </div>
  );
};
export default AddToCart;
