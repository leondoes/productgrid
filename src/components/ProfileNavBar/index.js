import React from "react";
import { NavButton } from "./styled";

const ProfileNavBar = ({ setCurrentlyDisplayed }) => {
  const handleOnClick = (label) => {
    setCurrentlyDisplayed(label);
  };

  return (
    <>
      <NavButton onClick={() => handleOnClick("ProfileInfo")}>
        My Profile
      </NavButton>
      <NavButton onClick={() => handleOnClick("StoreCredit")}>
        Store Credit
      </NavButton>
      <NavButton onClick={() => handleOnClick("MyOrders")}>My Orders</NavButton>
      <NavButton onClick={() => handleOnClick("MyWishlist")}>
        My Wishlist
      </NavButton>
      <NavButton onClick={() => handleOnClick("ShippingInfo")}>
        Shipping Info
      </NavButton>
      <NavButton onClick={() => handleOnClick("BillingInfo")}>
        Billing Info
      </NavButton>
      <NavButton onClick={() => handleOnClick("GiftCardBalance")}>
        gift card Balance
      </NavButton>
    </>
  );
};

export default ProfileNavBar;
