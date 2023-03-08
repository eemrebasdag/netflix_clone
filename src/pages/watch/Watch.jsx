import { ArrowBackOutlined } from "@mui/icons-material";
import React from "react";
import "./watch.scss";
import video from "../../images/vikings.mp4";
import { Link } from "react-router-dom";

const Watch = () => {
  return (
    <div className='watch'>
      <div className='back'>
        <Link className='link' to='/'>
          <ArrowBackOutlined></ArrowBackOutlined>
          Home
        </Link>
      </div>
      <video className='video' autoPlay progress controls src={video} />
    </div>
  );
};

export default Watch;
