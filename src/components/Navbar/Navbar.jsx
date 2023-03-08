import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "../../images/netflix_logo.png";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import avatar from "../../images/avatar.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  });

  const burgerClickHandler = () => {
    setOpened(!opened);
  };

  return (
    <div
      className={isScrolled ? "navbar scrolled" : "navbar"}
      style={opened ? { backgroundColor: "#000000" } : undefined}
    >
      <div className='container'>
        <div className='toggler' onClick={burgerClickHandler}>
          <span className={isClicked ? "burger upper" : "burger"}></span>
          <span className={isClicked ? "burger middle" : "burger"}></span>
          <span className={isClicked ? "burger lower" : "burger"}></span>

          <ul className={opened ? "sidebar opened" : "sidebar"}>
            <li className='profile'>
              <img src={avatar} alt='' />
              <h2>Emre</h2>
            </li>
            <li className='settings'>
              <Link className='routes' to='/settings'>
                Settings
              </Link>
            </li>
            <li className='logout'>
              <Link className='routes' to='/login'>
                Logout
              </Link>
            </li>
            <hr />
            <li>
              <Link className='routes' to='/'>
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className='left'>
          <img src={logo} alt='' />

          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <div className='searchbox'>
            <input type='text' class='searchbox__input' placeholder='Search' />
            <Search className='icon searchbox__icon'></Search>
          </div>
          <span className='kids'>Kids</span>
          <Notifications className='icon'></Notifications>
          <img src={avatar} alt='' />

          <div className='profile'>
            <ArrowDropDown className='icon'></ArrowDropDown>
            <div className='options'>
              <Link className='opt' to='/settings'>
                Settings
              </Link>
              <Link className='opt' to='/login'>
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
