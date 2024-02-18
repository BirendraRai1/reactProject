import "./signup.css";
import React, { useState } from "react";
import urlConfig from "../../../../urlConfig";

//functions of authSlice are exposed by authSlice.actions property.actions keyword property is inbuilt
const actions = authSlice.actions;

function SignUp() {
  const handleSubmit = async () => {
    try {
      const resp = await axios.get(urlConfig.SIGNUP_URL);
      const ans = resp.data;
      console.log("ans is ", ans);
    } catch (err) {
      console.log("err is", err);
    }
  };
  return (
    <div className="signupscreen">
      <div className="container">
        <div className="innerContainer">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div>
              <i className="fas fa-arrow-circle-left fa-5x"></i>
            </div>
            <p>Signup</p>
          </div>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your email.." />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password.."
          />
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            name="confirmPassword"
            placeholder="Your ConfirmPassword.."
          />
          <br />
          <button onClick={handleSubmit}>Click Me</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
