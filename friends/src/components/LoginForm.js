import React, { useState } from "react";
import axios from "axios";

const LoginForm = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = () => {
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => console.log(err.message));
  };

  const submitForm = e => {
    e.preventDefault();
    login();
    setCredentials({ username: "", password: "" });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          placeholder="Username"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={credentials.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
