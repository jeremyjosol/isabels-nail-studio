import React from 'react';
import { Link } from 'react-router-dom';
import logo from '.././img/logo.jpg';

const Header = () => {
  return (
    <header>
      <div className='tubby-toast'>
        <img src={logo} alt='logo' className='logo-image' />
        <h1 className='brand'>Tubby Toast</h1>
        <h2 className='brand'>통통한 토스트</h2>
      </div>
      <br />
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

