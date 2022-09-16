import React from "react";
import PageLayout from "/src/layout/PageLayout";
import {
  Username,
  ProfileNavigation,
  NavButton,
  ProfileInfo,
  DisplayedContent
} from "./styled";

const Profile = () => {
  return (
    <PageLayout>
      <ProfileNavigation>
        <NavButton>Store Credit</NavButton>
        <NavButton>My Orders</NavButton>
        <NavButton>My Wishlist</NavButton>
        <NavButton>Shipping Info</NavButton>
        <NavButton>Billing Info</NavButton>
        <NavButton>gift card Balance</NavButton>
      </ProfileNavigation>
      <DisplayedContent>
        <Username>Hello, Leon Dobrescu</Username>
        <ProfileInfo>
          Name:Leon Dobrescu Email:leon.dobrescu@gmail.com Password:*******
        </ProfileInfo>
      </DisplayedContent>
    </PageLayout>
  );
};

export default Profile;
