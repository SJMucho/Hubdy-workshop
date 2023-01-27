import React, { useState, useEffect } from "react";
import { Form } from "reactstrap";
import * as yup from "yup";

function CreateAccount() {
  const [memberData, setMemberData] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div>
      <h1>Create Account</h1>
      <input
        name="fname"
        id="fname"
        type="text"
        value={memberData.fname}
        placeholder="First name"
      />
      <input
        name="lname"
        id="lname"
        type="text"
        value={memberData.lname}
        placeholder="Last name"
      />
      <input
        name="email"
        id="email"
        type="email"
        value={memberData.email}
        placeholder="Email address"
      />
      <input
        name="username"
        id="username"
        type="text"
        value={memberData.username}
        placeholder="Create username"
      />
      <input
        name="password"
        id="password"
        type="password"
        value={memberData.password}
        placeholder="Create password"
      />
      <input
        name="confirmPassword"
        id="confirmPassword"
        type="text"
        value={memberData.confirmPassword}
        placeholder="Comfirm password"
      />
    </div>
  );
}

export default CreateAccount;
