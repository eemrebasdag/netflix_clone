import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";
import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <Featured type='series'></Featured>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      <Footer></Footer>
    </div>
  );
};

export default Home;
