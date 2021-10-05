import React from "react";

import "./styles/SignUpPage.css";
import "./styles/SignInScreen.css";
import { Link } from "react-router-dom";
const SignUpPage = (props) => {
  return (
    <div className="signuppage">
      <div className="signupcontents">
        <div className="logo signup">
          <Link to="/">
            <h1>EduTech..</h1>
          </Link>
        </div>
        <SignUpContainer setloggedIn={props.setloggedIn} />
        <div className="signupcontainer"></div>
      </div>
    </div>
  );
};

export default SignUpPage;

const SignUpContainer = (props) => {
  return (
    <div className="signUpContainer">
      <form className="signInForm">
        <h1 className="signinTitle">Sign In</h1>
        <div className="emailInputSignIn inputt">
          <input type="email" placeholder="Email or mobile number" />
        </div>
        <div className="passwordInputSignIn inputt">
          <input type="email" placeholder="Mobile number" />
        </div>
        <div className="passwordInputSignIn inputt">
          <input type="number" placeholder="Password" />
        </div>
        <small>Minimum of 6 caharacters</small>
        <button className="signInBtn" onclick={props.setloggedIn(true)}>
          Sign In
        </button>
        <p className="signBtmPara">Forgot your email or password?</p>
        <p className="signBtmPara">
          Already have an account?
          <span className="signBtmParaLink">Sign in</span>
        </p>
      </form>
    </div>
  );
};
