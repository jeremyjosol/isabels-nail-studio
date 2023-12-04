import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import About from './About';
import SocialMedia from './SocialMedia';
import ContactForm from './ContactForm';

const App = () => {
  return (
      <Router>
        <Header />
      </Router>
  );
};

export default App;

