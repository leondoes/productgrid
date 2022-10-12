import React, { useState } from "react";

const EditProfile = () => (
  <>
    <Label>Name:</Label> <input defaultValue={first_name} />
    <Label>Email:</Label>
    <div>{email}</div>
    <Label>Current Password:</Label>
    <input type="password" placeholder="Password" />
    <Label>New Password:</Label>
    <input type="password" placeholder="Password" />
    <div>
      <button
        onClick={() => {
          setIsEditing(false);
        }}
      >
        CANCEL
      </button>
      <button
        onClick={() => {
          setIsEditing(false);
        }}
      >
        SAVE
      </button>
    </div>
  </>
);

export default EditProfile;
