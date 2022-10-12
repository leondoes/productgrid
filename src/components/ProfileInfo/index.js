// 1. Omer: correct form library
// 2. styling
// 3. animation on "EDIT"

import React, { useState } from "react";
import { Title, Label } from "./styled";
import EditProfile from "/src/components/ProfileInfo/EditProfile";

const profileData = {
  first_name: "Leon dobrescu",
  email: "leon.dobrescu@gmail.com",
  password: "******"
};

const ProfileInfo = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleDisplayEdit = () => {
    setIsEditing(() => !isEditing);
  };

  const { first_name, email, password } = profileData;

  return (
    <>
      <Title>{`Hello ${first_name}`}</Title>
      {!isEditing && (
        <>
          <div>
            <Label>Name:</Label>
            <div>{first_name}</div>
          </div>
          <div>
            <Label>Email:</Label>
            <div>{email}</div>
          </div>
          <div>
            <Label>Password:</Label>
            <div>{password}</div>
          </div>
          <div>
            <button
              onClick={() => {
                toggleDisplayEdit();
              }}
            >
              EDIT
            </button>
          </div>
        </>
      )}
      {isEditing && (
        <EditProfile
          profileData={profileData}
          toggleDisplayEdit={toggleDisplayEdit}
        />
      )}
    </>
  );
};

export default ProfileInfo;
