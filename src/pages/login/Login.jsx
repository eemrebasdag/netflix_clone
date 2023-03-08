import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import logo from "../../images/netflix_logo.png";

const Login = () => {
  return (
    <div className='login'>
      <div className='top'>
        <div className='wrapper'>
          <img className='logo' src={logo} alt='' />
        </div>
      </div>
      <div className='container'>
        <form>
          <h1>Sign In</h1>
          <input type='email' placeholder='Email or Phone Number' />
          <input type='password' placeholder='Password' />

          <Link className='loginButton' to='/'>
            Sign In
          </Link>

          <span>
            New to Netflix?
            <b>
              <Link className='registerLink' to='/register'>
                Sign Up now.
              </Link>
            </b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
