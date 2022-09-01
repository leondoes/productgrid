import React, { useState, useRef, useEffect } from "react";
import { CartButton, ActiveCart, OverlayShadow } from "./styled";

const Cart = () => {
  const [displayed, setDisplayed] = useState(false);
  const outsideContainerRef = useRef(null);
  const handleOnClick = () => setDisplayed((prevDisplayed) => !prevDisplayed);
  const CartContainer = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          handleOnClick();
        }
      };
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  CartContainer(outsideContainerRef, handleOnClick);
  return (
    <>
      <CartButton onClick={handleOnClick}>CART</CartButton>

      {displayed && (
        <>
          <OverlayShadow />{" "}
          <ActiveCart ref={outsideContainerRef}>Hello</ActiveCart>
        </>
      )}
    </>
  );
};

export default Cart;
