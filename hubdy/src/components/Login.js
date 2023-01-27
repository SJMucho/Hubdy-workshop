import React, { useState, useEffect } from "react";
import {Form } from "reactstrap";
import * as yup from "yup";

function Login() {
  const [login, setlogin] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  return (
    <div>
      <Form>
        <input name="username" type="text" placeholder="Enter Username" />
        <input name="password" type="text" placeholder="Enter Password" />{" "}
      </Form>
    </div>
  );
}

export default Login;
