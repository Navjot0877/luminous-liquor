import React, { useState } from "react";
import "./SignupInput.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../LoadingSpinner";

const SignupInput = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
  });
  const [loading, load] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,

      [name]: value,
    });
  };

  const registerMe = () => {
    const { name, email, password, phone, age } = user;
    if (name && email && password && phone && age) {
      load(false);
      axios.post("http://localhost:9005/register", user).then((res) => {
        load(true);
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("not posted");
    }
  };

  return loading ? (
    <div className="signup-input">
      <h1>Create Account</h1>
      <h3>Please enter your details below</h3>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          onChange={handleChange}
        />
        <br />
        <input type="button" value="CREATE ACCOUNT" onClick={registerMe} />
        <br />
      </form>
      <p>
        Already have an account? Please <a href="/login">Log In</a>
      </p>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default SignupInput;
