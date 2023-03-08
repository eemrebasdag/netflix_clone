import React from "react";
import "./errorPage.scss";
import { Link } from "react-router-dom";
import logo from "../../images/netflix_logo.png";

const ErrorPage = () => {
  return (
    <>
      <div className='bar'>
        <img src={logo} alt='' />
      </div>

      <div className='error'>
        <h1>Lost your way?</h1>
        <p>
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>

        <Link to='/'>
          <button>Netflix Home</button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
