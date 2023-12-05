import React from 'react';
import { Link } from 'react-router-dom';
import logo from '.././img/logo.jpg';

const Header = () => {
  return (
    <header>
      <div className="tubby-toast">
       <h1>통통한 토스트</h1>
        <img src={logo} alt='logo' className='logo-image' />
      </div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/social-media">Social Media</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;

