import React, { useState } from "react";
import { NavButton } from "./styled";

import ProfileInfo from "/src/components/ProfileInfo";
import StoreCredit from "/src/components/StoreCredit";
import MyOrders from "/src/components/MyOrders";
import MyWishlist from "/src/components/MyWishlist";
import ShippingInfo from "/src/components/ShippingInfo";
import BillingInfo from "/src/components/BillingInfo";
import GiftCardBalance from "/src/components/GiftCardBalance";

const ProfileSideBar = () => {
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState(ProfileInfo);

  return (
    <>
      <NavButton
        onClick={() => {
          setCurrentlyDisplayed(ProfileInfo);
        }}
      >
        My Profile
      </NavButton>
      <NavButton
        onClick={() => {
          setCurrentlyDisplayed(StoreCredit);
        }}
      >
        Store Credit
      </NavButton>
      <NavButton
        onClick={() => {
          setCurrentlyDisplayed(MyOrders);
        }}
      >
        My Orders
      </NavButton>
      <NavButton
        onClick={() => {
          setCurrentlyDisplayed(MyWishlist);
        }}
      >
        My Wishlist
      </NavButton>
      <NavButton
        onClick={() => {
          setCurrentlyDisplayed(ShippingInfo);
        }}
      >
        Shipping Info
      </NavButton>
      <NavButton
        onClick={() => {
          setCurrentlyDisplayed(BillingInfo);
        }}
      >
        Billing Info
      </NavButton>
      <NavButton
        onClick={() => {
          setCurrentlyDisplayed(GiftCardBalance);
        }}
      >
        gift card Balance
      </NavButton>
    </>
  );
};

export default ProfileSideBar;
