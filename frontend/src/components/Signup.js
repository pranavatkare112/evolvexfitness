import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/users/register",
        user
      );
      console.log(res.data);
      alert("User Registered Successfully!");
    } catch (err) {
      console.error(err);
      alert("Error registering user");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        /><br/><br/>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        /><br/><br/>

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        /><br/><br/>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;