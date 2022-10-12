import React, { useState } from "react";
import { Label } from "/src/components/ProfileInfo/styled";

const EditProfile = ({ profileData, toggleDisplayEdit }) => {
  const { first_name, email } = profileData;

  const [nameEmpty, setNameEmpty] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleNameOnChange = (e) =>
    setNameEmpty(e.target.value === "" ? true : false);
  const handleSave = () => {
    setErrors(["Current Password must match", "New Password Can't be blank"]);
  };

  const hasErrors = Boolean(errors.length);

  return (
    <>
      <Label>Name:</Label>{" "}
      <input
        defaultValue={first_name}
        onChange={(e) => handleNameOnChange(e)}
        placeholder="Name"
      />
      {nameEmpty && <div>Please enter a name</div>}
      <Label>Email:</Label>
      <div>{email}</div>
      <Label>Current Password:</Label>
      <input type="password" placeholder="Password" />
      <Label>New Password:</Label>
      <input type="password" placeholder="Password" />
      {hasErrors && (
        <>
          <div>Please, fix these errors:</div>
          <ul>
            {errors.map((error) => (
              <li>{error}</li>
            ))}
          </ul>
        </>
      )}
      <div>
        <button onClick={() => toggleDisplayEdit()}>CANCEL</button>
        <button onClick={() => handleSave()}>SAVE</button>
      </div>
    </>
  );
};

export default EditProfile;
