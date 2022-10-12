import React from "react";
import { NavButton } from "./styled";

const ProfileNavBar = ({ setCurrentlyDisplayed, currentlyDisplayed }) => {
  const handleOnClick = (label) => {
    setCurrentlyDisplayed(label);
  };

  return (
    <>
      <NavButton
        selected={currentlyDisplayed === "ProfileInfo"}
        onClick={() => handleOnClick("ProfileInfo")}
      >
        My Profile
      </NavButton>
      <NavButton
        selected={currentlyDisplayed === "StoreCredit"}
        onClick={() => handleOnClick("StoreCredit")}
      >
        Store Credit
      </NavButton>
      <NavButton
        selected={currentlyDisplayed === "MyOrders"}
        onClick={() => handleOnClick("MyOrders")}
      >
        My Orders
      </NavButton>
      <NavButton
        selected={currentlyDisplayed === "MyWishlist"}
        onClick={() => handleOnClick("MyWishlist")}
      >
        My Wish list
      </NavButton>
      <NavButton
        selected={currentlyDisplayed === "ShippingInfo"}
        onClick={() => handleOnClick("ShippingInfo")}
      >
        Shipping Info
      </NavButton>
      <NavButton
        selected={currentlyDisplayed === "BillingInfo"}
        onClick={() => handleOnClick("BillingInfo")}
      >
        Billing Info
      </NavButton>
      <NavButton
        selected={currentlyDisplayed === "GiftCardBalance"}
        onClick={() => handleOnClick("GiftCardBalance")}
      >
        gift card Balance
      </NavButton>
    </>
  );
};

export default ProfileNavBar;
