import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="tubby-toast">Tubby Toast</div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/social-media">Social Media</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;

