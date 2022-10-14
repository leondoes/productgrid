// 1. Omer: correct form library
// 2. styling
// 3. animation on "EDIT"

import React, { useState } from "react";
import {
  Title,
  Label,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  EditButton
} from "./styled";
import EditProfile from "/src/components/ProfileInfo/EditProfile";

const profileData = {
  first_name: "Leon Dobrescu",
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
      <Title>{`Hello, ${first_name}`}</Title>
      {!isEditing && (
        <TableContainer>
          <TableBody>
            <TableRow>
              <TableCell>
                <Label>Name:</Label>
              </TableCell>
              <TableCell>{first_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Label>Email:</Label>
              </TableCell>
              <TableCell>{email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Label>Password:</Label>
              </TableCell>
              <TableCell>{password}</TableCell>
            </TableRow>
          </TableBody>
          <EditButton
            onClick={() => {
              toggleDisplayEdit();
            }}
          >
            EDIT
          </EditButton>
        </TableContainer>
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
