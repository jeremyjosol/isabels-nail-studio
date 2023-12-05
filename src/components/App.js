import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Services from './Services';
import SocialMedia from './SocialMedia';
import ContactForm from './ContactForm';

const App = () => {
  return (
      <Router>
        <div className='about'>
        <Header />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/social-media' element={<SocialMedia />} />
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
        </div>
      </Router>
  );
};

export default App;

