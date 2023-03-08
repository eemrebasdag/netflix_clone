import {
  InfoOutlined,
  PlayArrow,
  VolumeOffOutlined,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./featured.scss";
import movieImage from "../../images/vikings.webp";
import movieLogo from "../../images/vikings_logo.webp";
import movieVideo from "../../images/vikings_cover.mp4";

const Featured = ({ type }) => {
  const [play, setPlay] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPlay(true);
    }, 2000);
  });

  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name='genre' id='genre'>
            <option>Genre</option>
            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fantasy</option>
            <option value='historical'>Historical</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
          </select>
        </div>
      )}
      <div className='movieImage'>
        {play && (
          <video className='movieVideo' src={movieVideo} autoPlay loop></video>
        )}
      </div>
      <div className='info'>
        <img src={movieLogo} alt='' />
        <span className='description'>
          Vikings transports us to the brutal and mysterious world of Ragnar
          Lothbrok, a Viking warrior and farmer who yearns to explore--and
          raid--the distant shores across the ocean.
        </span>
        <div className='buttons'>
          <Link to='/watch' className='play'>
            <PlayArrow className='icon'></PlayArrow>
            <span>Play</span>
          </Link>
          <Link to='/modal' className='more' onClick={() => setIsClicked(true)}>
            <InfoOutlined className='icon'></InfoOutlined>
            <span>More Info</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
