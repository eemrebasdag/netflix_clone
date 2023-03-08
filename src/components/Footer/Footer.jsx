import React from "react";
import "../Footer/footer.scss";
import { Link } from "react-router-dom";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className='Footer'>
      <div className='footer_container'>
        <div className='social'>
          <Facebook className='icon'></Facebook>
          <Instagram className='icon'></Instagram>
          <YouTube className='icon'></YouTube>
        </div>

        <div className='directions'>
          <div className='col-1 cols'>
            <ul>
              <li>
                <Link className='links' to='/'>
                  Audio Description
                </Link>
              </li>
              <li>
                <Link className='links' to='/'>
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link className='links' to='/'>
                  Legal Notices
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-2 cols'>
            <ul>
              <li>
                <Link className='links' to='/'>
                  Help Center
                </Link>
              </li>
              <li>
                <Link className='links' to='/'>
                  Jobs
                </Link>
              </li>
              <li>
                <Link className='links' to='/'>
                  Cookie Preferences
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-3 cols'>
            <ul>
              <li>
                <Link className='links' to='/'>
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link className='links' to='/'>
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link className='links' to='/'>
                  Corporate Information
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-4 cols'>
            <ul>
              <li>
                <Link className='links' to='/'>
                  Media Center
                </Link>
              </li>
              <li>
                <Link className='links' to='/'>
                  Privacy
                </Link>
              </li>
              <li>
                <Link className='links' to='/'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='service'>
          <span>Service Code</span>
        </div>

        <small className='small'>&copy; 1997-2023 Netflix, Inc. </small>
      </div>
    </div>
  );
};

export default Footer;
