import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className="hero">
      <h1>
        PORTLAND BASED STUDIO
      </h1>
      <h2>
        KOREAN NAIL ARTIST
      </h2>
      <br />
      <div className="button-container">
        <Link to="/about" className="btn btn-dark explore">
          LEARN MORE 
          <MdKeyboardDoubleArrowRight className='icons' />
        </Link>
        <Link to="/contact" className="btn btn-dark book-now">
          BOOK NOW 
          <MdKeyboardDoubleArrowRight className='icons' />
        </Link>
      </div>
    </div>
  );
};

export default Home;
