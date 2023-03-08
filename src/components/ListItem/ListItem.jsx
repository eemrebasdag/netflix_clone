import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./listItem.scss";
import smallMovie from "../../images/vikings_small.jpg";
import Modal from "../../pages/Modal/Modal";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
  PlayCircleFilledWhite,
  KeyboardArrowDown,
} from "@mui/icons-material";
import movie from "../../images/vikings.mp4";

const ListItem = ({ index }, { open }) => {
  const [isHovered, setIsHovered] = useState(false);

  let windowWidth = window.innerWidth;
  let windowLength = window.innerHeight;

  const [sizeChecker, setSizeChecker] = useState(false);

  const checkFunction = () => {
    if (windowWidth <= 700 && windowLength <= 842) {
      setSizeChecker(true);
    }
  };

  return (
    <div
      className='listItem'
      style={{ left: isHovered && index * 275 - 65 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={smallMovie} alt='' />

      {isHovered && (
        <>
          <video src={movie} autoPlay loop />
          <div className='itemInfo'>
            <div className='icons'>
              <Link to='/watch' style={{ color: "white" }}>
                <PlayCircleFilledWhite className='play_icon' />
              </Link>
              <Add className='icon'></Add>
              <ThumbUpAltOutlined className='icon'></ThumbUpAltOutlined>
              <Link to='/modal' style={{ color: "white" }}>
                <KeyboardArrowDown className='icon down'></KeyboardArrowDown>
              </Link>
            </div>
            <div className='itemInfoTop'>
              <span className='match'>81% Match</span>
              <span className='limit'>+16</span>
              <span className='seasons'>6 Seasons</span>
              <span className='hd'>HD</span>
            </div>
            <div className='desc'>
              <b className='genre'>Violent</b>•<b className='genre'>Exciting</b>
              •<b className='genre'>Epic</b>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
