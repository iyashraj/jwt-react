import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const Signup = () => {
  const navigate = useNavigate();

  const [signupDetails, setSignupDetails] = useState({
    email: [""],
    companyContactPerson: [""],
    companyName: [""],
    password: [""],
    cnfPassword: [""],
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupDetails);
    const { email, companyContactPerson, companyName, password, cnfPassword } =
      signupDetails;

    if (signupDetails.password !== signupDetails.cnfPassword) {
      setErrorMsg("Recheck entered Password");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else if (typeof(signupDetails.password) !== "string") {
      setErrorMsg("Integers are not allowed in password!");
    } else if (signupDetails.password.length > 8) {
      setErrorMsg("password must be 8-digit");  
    } else {
    }
    axios
      .post("http://103.171.181.146:7000/myapp/users/", {
        email: email,
        company_contact_person: companyContactPerson,
        company_name: companyName,
        password: password,
        password2: cnfPassword,
      })
      .then((response) => {
        console.log(response);

        navigate("/registered");
      });
  };

  function handleChange(e) {
    const value = e.target.value;
    setSignupDetails({
      ...signupDetails,
      [e.target.name]: value,
    });
  }
  // console.log(signupDetails, "gdusgudgsuhbsjb");

  return (
    <div className="signupMain">
      <form onSubmit={handleSubmit} className="signupForm">
        <label>
          Email ID :
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            value={signupDetails.email}
            onChange={handleChange}
            className="inputbox"
          />
        </label>
        <label>
          Company Contact Person :
          <input
            type="text"
            name="companyContactPerson"
            placeholder="Company Contact Person"
            value={signupDetails.companyContactPerson}
            onChange={handleChange}
            className="inputbox"
          />
        </label>
        <label>
          Company Name :
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={signupDetails.companyName}
            onChange={handleChange}
            className="inputbox"
          />
        </label>
        <label>
          Password :
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={signupDetails.password}
            onChange={handleChange}
            className="inputbox"
          />
        </label>
        <label>
          Confirm Password :
          <input
            type="password"
            name="cnfPassword"
            placeholder="Confirm password"
            value={signupDetails.cnfPassword}
            onChange={handleChange}
            className="inputbox"
          />
        </label>
        <p style={{ color: "red" }}>{errorMsg}</p>
        <button type="submit" className="signupBtn">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
