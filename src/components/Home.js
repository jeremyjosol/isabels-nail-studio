import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className="hero">
      <h1>PORTLAND BASED STUDIO</h1>
      <h2>KOREAN NAIL ARTIST</h2>
      <br />
      <Link to="/about" className="btn btn-dark explore">
        LEARN MORE <MdKeyboardDoubleArrowRight />
      </Link>    
    </div>
  );
};

export default Home;
