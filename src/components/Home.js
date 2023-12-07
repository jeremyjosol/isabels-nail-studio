import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className="hero">
      <h1><strong>PORTLAND</strong> BASED STUDIO</h1>
      <h2>KOREAN NAIL ARTIST</h2>
      <h3><strong>SPECIALIZING</strong> IN <span className='hero-color'>HIGH-QUALITY</span></h3>
      <h3><span class='hero-color'>CREATIVE</span> GEL <strong>MANICURES</strong></h3>
      <br />
      <Link to="/about" className="btn btn-dark explore">
        LEARN MORE <MdKeyboardDoubleArrowRight />
      </Link>    
    </div>
  );
};

export default Home;
