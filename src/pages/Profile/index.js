import React, { useState } from "react";
import PageLayout from "/src/layout/PageLayout";
import { ProfileContainer, Sidebar, DisplayedContent } from "./styled";

import ProfileNavBar from "/src/components/ProfileNavBar";

import ProfileInfo from "/src/components/ProfileInfo";
import StoreCredit from "/src/components/StoreCredit";
import MyOrders from "/src/components/MyOrders";
import MyWishlist from "/src/components/MyWishlist";
import ShippingInfo from "/src/components/ShippingInfo";
import BillingInfo from "/src/components/BillingInfo";
import GiftCardBalance from "/src/components/GiftCardBalance";

const Profile = () => {
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState("ProfileInfo");

  return (
    <PageLayout>
      <ProfileContainer>
        <Sidebar>
          <ProfileNavBar
            setCurrentlyDisplayed={setCurrentlyDisplayed}
            currentlyDisplayed={currentlyDisplayed}
          />
        </Sidebar>
        <DisplayedContent>
          {currentlyDisplayed === "ProfileInfo" && <ProfileInfo />}
          {currentlyDisplayed === "StoreCredit" && <StoreCredit />}
          {currentlyDisplayed === "MyOrders" && <MyOrders />}
          {currentlyDisplayed === "MyWishlist" && <MyWishlist />}
          {currentlyDisplayed === "ShippingInfo" && <ShippingInfo />}
          {currentlyDisplayed === "BillingInfo" && <BillingInfo />}
          {currentlyDisplayed === "GiftCardBalance" && <GiftCardBalance />}
        </DisplayedContent>
      </ProfileContainer>
    </PageLayout>
  );
};

export default Profile;
