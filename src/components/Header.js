import React from 'react';
import { Link } from 'react-router-dom';
import logo from '.././img/logo.jpg';
import { FaStar } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <div className='tubby-toast'>
        <div className="logo-container">
          <Link to='/'>
            <img src={logo} alt='logo' className='logo-image' />
          </Link>
          <Link to='/' className='brand'>
            <h1><FaStar className='icons' /> Tubby Toast <FaStar className='icons' /></h1>
          </Link>
          <Link to='/' className='brand'>
            <h2>통통한 토스트</h2>
          </Link>
        </div>
      </div>
      <nav>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/social-media'>Social Media</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
