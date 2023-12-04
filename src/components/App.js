import React from 'react';
import Header from './components/Header';
import About from './components/About';
import SocialMedia from './components/SocialMedia';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <React.Fragment>
    <Header></Header>
    <About></About>
    <SocialMedia></SocialMedia>
    <ContactForm></ContactForm>
    </React.Fragment>
  );
};

export default App;
