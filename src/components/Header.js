import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../img/logo.jpg';
import { FaStar } from 'react-icons/fa6';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to='/'>
              <h2 className='brand-symbols'>통통한 토스트</h2>
            </Link>
            <Link to='/'>
              <img src={logo} alt='logo' className='logo-image' />
            </Link>
            <Link to='/'>
              <h1 className='brand'><FaStar className='icons' /> Tubby Toast <FaStar className='icons' /></h1>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              <Nav.Link as={Link} to='/services'>Services</Nav.Link>
              <Nav.Link as={Link} to='/social-media'>Social Media</Nav.Link>
              <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <hr className='line' />
    </header>
  );
};

export default Header;

