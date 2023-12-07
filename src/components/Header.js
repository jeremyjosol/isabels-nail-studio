import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../img/logo.jpg';
import { FaStar } from 'react-icons/fa6';

const Header = () => {
  return (
    <header>
      <Navbar bg="transparent" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="ml-auto justify-content-between">
          <Nav className="links">
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/services'>Services</Nav.Link>
            <Nav.Link as={Link} to='/social-media'>Social Media</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <div className='tubby-toast'>
        <Link to='/'>
        <img src={logo} alt='logo' className='logo-image' />
          <h1 className='brand'><FaStar className='icons' /> Tubby Toast <FaStar className='icons' /></h1>
        </Link>
        <Link to='/'>
          <h2 className='brand'>통통한 토스트</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
