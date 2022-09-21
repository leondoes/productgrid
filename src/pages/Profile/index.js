import React from "react";
import PageLayout from "/src/layout/PageLayout";
import { ProfileContainer, Sidebar, DisplayedContent } from "./styled";

import ProfileSideBar from "/src/components/ProfileSideBar";

const Profile = () => {
  return (
    <PageLayout>
      <ProfileContainer>
        <Sidebar>
          <ProfileSideBar />
        </Sidebar>
        <DisplayedContent></DisplayedContent>
      </ProfileContainer>
    </PageLayout>
  );
};

export default Profile;
