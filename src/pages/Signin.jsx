import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Signin = () => {
  const navigate = useNavigate();
  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = signinDetails;
    axios
      .post("http://103.171.181.146:7000/myapp/user2/", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        console.log(response.status);
        if (response.data.token) {
          const access_token = response.data.token.access;
          localStorage.setItem("access_token", access_token);
        }
        navigate("/home");
        return response;
      })
    .then((response) => {
      const token = localStorage.getItem("access_token");
      const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
      if (response) {
        console.log(response, "2nd");
        axios
          .get("http://103.171.181.146:7000/myapp/Profilecard/",config)
          .then((response) => {
            console.log(response);
          });
      }
    });
    console.log(signinDetails);
  };

  function handleChange(e) {
    const value = e.target.value;
    setSigninDetails({
      ...signinDetails,
      [e.target.name]: value,
    });
  }

  return (
    <div className="signinMain">
      <form onSubmit={handleSubmit} className="signinForm">
        <label>
          Email ID :
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            value={signinDetails.email}
            onChange={handleChange}
            className="inputbox"
          />{" "}
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={signinDetails.password}
            onChange={handleChange}
            className="inputbox"
          />
        </label>
        <div className="btnWrapper">
          <button type="submit" className="signinBtn">
            Login
          </button>
          <button onClick={() => navigate("/signup")} className="signupBtn">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
