import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import React, { useState, useRef } from "react";
import ListItem from "../ListItem/ListItem";
import "./list.scss";

const List = ({ open }) => {
  const [slideNumber, setSlideNumber] = useState(0); // for the last and first element in the movie array

  const [isMoved, setIsMoved] = useState(false); // if we didn't click right button it will not show the left button

  const listRef = useRef(); // same with querySelector

  const handleClick = direction => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    setIsMoved(true);

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }

    console.log(distance);
  };

  return (
    <div className='list'>
      <span className='listTitle'>Series</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined
          className='sliderArrow left'
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }} // if it's not moved it will be none.
        ></ArrowBackIosOutlined>
        <div className='container' ref={listRef}>
          <ListItem index={0}></ListItem>
          <ListItem index={1}></ListItem>
          <ListItem index={2}></ListItem>
          <ListItem index={3}></ListItem>
          <ListItem index={4}></ListItem>
          <ListItem index={5}></ListItem>
          <ListItem index={6}></ListItem>
          <ListItem index={7}></ListItem>
          <ListItem index={8}></ListItem>
          <ListItem index={9}></ListItem>
        </div>
        <ArrowForwardIosOutlined
          className='sliderArrow right'
          onClick={() => handleClick("right")}
        ></ArrowForwardIosOutlined>
      </div>
    </div>
  );
};

export default List;
